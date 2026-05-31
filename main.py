"""
EcoLink - Launcher
Execute com: python main.py
Instala dependências (se necessário), inicia o servidor Next.js e abre o navegador.
"""

import subprocess
import sys
import webbrowser
import time
import socket
import shutil
import os

# Configura a codificação da saída para UTF-8 (evita erros com emojis no Windows)
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

HOST = "localhost"
PORT = 3000
URL = f"http://{HOST}:{PORT}"
PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))


def find_package_manager() -> str:
    """Retorna o gerenciador de pacotes disponível (pnpm > npm)."""
    if shutil.which("pnpm"):
        return "pnpm"
    if shutil.which("npm"):
        return "npm"
    print("❌  Nenhum gerenciador de pacotes encontrado (pnpm ou npm).")
    print("   Instale o Node.js: https://nodejs.org")
    sys.exit(1)


def is_port_open(host: str, port: int) -> bool:
    """Verifica se a porta já está respondendo."""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(0.5)
        return s.connect_ex((host, port)) == 0


def install_dependencies(pm: str) -> None:
    """Instala dependências caso a pasta node_modules não exista."""
    node_modules = os.path.join(PROJECT_DIR, "node_modules")
    if os.path.isdir(node_modules):
        return
    print(f"📦  Instalando dependências com {pm}...")
    # No Windows, precisa de shell=True para executar comandos globais do node (npm/pnpm)
    use_shell = os.name == "nt"
    subprocess.run([pm, "install"], cwd=PROJECT_DIR, check=True, shell=use_shell)
    print("✅  Dependências instaladas!\n")


def wait_for_server(timeout: int = 60) -> bool:
    """Espera o servidor ficar pronto, exibindo progresso."""
    print(f"⏳  Aguardando servidor em {URL} ...", end="", flush=True)
    start = time.time()
    while time.time() - start < timeout:
        if is_port_open(HOST, PORT):
            print(" pronto!")
            return True
        print(".", end="", flush=True)
        time.sleep(1)
    print(" timeout!")
    return False


def main() -> None:
    pm = find_package_manager()
    install_dependencies(pm)

    print(f"🚀  Iniciando EcoLink com '{pm} run dev'...\n")

    # Inicia o servidor de desenvolvimento
    try:
        # No Windows, precisa de shell=True para executar comandos globais do node (npm/pnpm)
        use_shell = os.name == "nt"
        server = subprocess.Popen(
            [pm, "run", "dev"],
            cwd=PROJECT_DIR,
            shell=use_shell,
        )
    except FileNotFoundError:
        print(f"❌  Comando '{pm}' não encontrado no PATH.")
        sys.exit(1)

    # Aguarda o servidor estar pronto e abre o navegador
    if wait_for_server():
        print(f"🌐  Abrindo {URL} no navegador...")
        webbrowser.open(URL)
    else:
        print(f"⚠️  Servidor demorou para iniciar. Tente acessar manualmente: {URL}")

    print("\n📌  Pressione Ctrl+C para encerrar o servidor.\n")

    # Mantém o processo vivo até Ctrl+C
    try:
        server.wait()
    except KeyboardInterrupt:
        print("\n🛑  Encerrando servidor...")
        server.terminate()
        server.wait()
        print("👋  Até logo!")


if __name__ == "__main__":
    main()
