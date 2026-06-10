<div align="center">

<img src="https://img.shields.io/badge/EcoLink-Voluntariado%20Sustent%C3%A1vel-2E7D32?style=for-the-badge&logo=leaf&logoColor=white" alt="EcoLink"/>

# 🌱 EcoLink

### Plataforma de Voluntariado Sustentável

**Conectando voluntários a ONGs e projetos sociais com impacto real.**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)

</div>

---

## 📋 Sobre o Projeto

O **EcoLink** é uma plataforma web de voluntariado sustentável que conecta pessoas a ONGs, empresas com programas de responsabilidade social e projetos comunitários. O sistema incentiva a participação contínua por meio de **gamificação**, com sistema de pontos, badges e recompensas junto a parceiros externos.

> Projeto desenvolvido para a disciplina de **Engenharia de Software**.

### 🎯 Objetivo

> *"Conectar voluntários a instituições comprometidas com o impacto social e a sustentabilidade, reconhecendo suas ações por meio de um sistema de pontos e prêmios que incentiva a participação contínua."*

---

## ✨ Funcionalidades

### 👤 Para Voluntários
- Cadastro e login com seleção de perfil
- Feed de oportunidades com busca e filtros por categoria, local e data
- Candidatura a vagas voluntárias
- Perfil com histórico de participações, badges e gráfico de evolução
- Sistema de pontos e recompensas com parceiros externos
- Ranking global de voluntários
- Certificado digital de participação

### 🏢 Para Instituições (ONGs / Empresas)
- Cadastro institucional com aprovação administrativa
- Dashboard com métricas: voluntários, horas e candidatos
- Publicação e gerenciamento de oportunidades
- Gestão de candidaturas (aceitar / recusar)
- Confirmação de presença dos voluntários
- Analytics de impacto

### 🔐 Para Administradores
- Painel com métricas globais da plataforma
- Aprovação e moderação de instituições
- Gerenciamento de usuários e oportunidades
- Relatórios de impacto social
- Gestão do sistema de pontos e parceiros

---

## 🚀 Stack Tecnológica

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 (Server + Client Components) |
| Linguagem | TypeScript 5.7 |
| Estilização | Tailwind CSS v4 |
| Componentes | shadcn/ui + Radix UI |
| Animações | Framer Motion |
| Gráficos | Recharts |
| Formulários | React Hook Form + Zod |
| Ícones | Lucide React |
| Fontes | Inter + Poppins (Google Fonts) |
| Analytics | Vercel Analytics |
| Deploy | Vercel |

---

## 📁 Estrutura do Projeto

```
EcoLink/
├── app/
│   ├── page.tsx                    # Landing page pública
│   ├── login/page.tsx              # Autenticação
│   ├── cadastro/page.tsx           # Cadastro multi-step (voluntário / instituição)
│   ├── oportunidades/
│   │   ├── page.tsx                # Feed de oportunidades
│   │   └── [id]/page.tsx           # Detalhes da oportunidade
│   ├── perfil/page.tsx             # Perfil do voluntário
│   ├── recompensas/page.tsx        # Catálogo de prêmios e ranking
│   ├── configuracoes/page.tsx      # Configurações de conta
│   ├── como-funciona/page.tsx      # Página explicativa
│   ├── para-ongs/page.tsx          # Landing para instituições
│   ├── instituicao/
│   │   └── dashboard/page.tsx      # Dashboard da instituição
│   └── admin/page.tsx              # Painel administrativo
├── components/
│   ├── landing/                    # Seções da landing page
│   ├── layout/                     # Navbar e Footer
│   └── ui/                         # Componentes reutilizáveis (shadcn/ui)
├── lib/
│   └── mock-data.ts                # Dados mockados (simulação de API)
├── hooks/                          # Hooks customizados
└── public/                         # Arquivos estáticos
```

---

## ⚙️ Como Executar Localmente

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/FranciellyCOding/EcoLink.git
cd EcoLink

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Inicia build de produção
npm run lint     # Verificação de lint
```

---

## 🗺️ Rotas da Aplicação

| Rota | Descrição | Acesso |
|------|-----------|--------|
| `/` | Landing page pública | Público |
| `/como-funciona` | Como a plataforma funciona | Público |
| `/para-ongs` | Página para instituições | Público |
| `/login` | Login de usuário | Público |
| `/cadastro` | Cadastro de voluntário ou instituição | Público |
| `/oportunidades` | Feed de oportunidades | Autenticado |
| `/oportunidades/[id]` | Detalhes de oportunidade | Autenticado |
| `/perfil` | Perfil do voluntário | Autenticado |
| `/recompensas` | Prêmios e ranking | Autenticado |
| `/configuracoes` | Configurações da conta | Autenticado |
| `/instituicao/dashboard` | Dashboard da instituição | Instituição |
| `/admin` | Painel administrativo | Admin |

---

## 🎮 Sistema de Gamificação

### Níveis de Progressão

| Nível | Nome | Pontos Mínimos |
|-------|------|---------------|
| 1 | 🌱 Semente | 0 pts |
| 5 | 🌿 Broto | 500 pts |
| 10 | 🌳 Árvore | 2.000 pts |
| 15 | 🌲 Floresta | 5.000 pts |
| 20 | 🏔️ Guardião | 10.000 pts |

### Pontuação por Atividade

| Carga Horária | Pontos |
|---------------|--------|
| 1 – 2 horas | 10 pts |
| 3 – 4 horas | 25 pts |
| 5 – 8 horas | 50 pts |
| Período integral | 100 pts |

> Bônus de **+20%** para voluntários com mais de 5 participações no mesmo projeto.

---

## 🗂️ Modelagem e Documentação

Os artefatos de Engenharia de Software do projeto estão disponíveis na documentação técnica:

- 📄 **Levantamento de Requisitos** — 31 RF · 17 RNF · 10 Regras de Negócio
- 📊 **Diagrama de Caso de Uso** — 3 atores · 20+ casos de uso
- 🔄 **Diagrama de Atividade** — 8 fluxos · 3 swim lanes (`.drawio` e `.puml`)
- 📘 **Documentação Técnica Completa** — arquitetura, módulos, MVP e roadmap

---

## 📊 Status do Projeto

| Módulo | Status |
|--------|--------|
| Frontend (todas as rotas) | ✅ Concluído |
| Levantamento de Requisitos | ✅ Concluído |
| Diagramas UML | ✅ Concluído |
| Documentação Técnica | ✅ Concluído |
| Backend / API REST | 🔄 Em desenvolvimento |
| Banco de Dados (PostgreSQL) | ⏳ Planejado |
| Autenticação real (JWT) | ⏳ Planejado |
| Integração com parceiros | ⏳ Planejado |

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona minha feature'`)
4. Push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

Feito com 💚 para a disciplina de **Engenharia de Software**

**Impacto Social · Sustentabilidade · Conexão**

</div>
