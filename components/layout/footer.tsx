import Link from "next/link";
import { Leaf, Instagram, Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  platform: [
    { href: "/oportunidades", label: "Oportunidades" },
    { href: "/como-funciona", label: "Como Funciona" },
    { href: "/recompensas", label: "Recompensas" },
    { href: "/ranking", label: "Ranking" },
  ],
  forOrganizations: [
    { href: "/para-ongs", label: "Para ONGs" },
    { href: "/cadastro?tipo=instituicao", label: "Cadastrar Instituição" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/recursos", label: "Recursos" },
  ],
  support: [
    { href: "/ajuda", label: "Central de Ajuda" },
    { href: "/contato", label: "Contato" },
    { href: "/faq", label: "FAQ" },
    { href: "/termos", label: "Termos de Uso" },
    { href: "/privacidade", label: "Privacidade" },
  ],
};

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com", icon: Github, label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-poppins)]">
                Eco<span className="text-primary">Link</span>
              </span>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
              Conectando pessoas a causas que transformam o mundo. Faça parte de uma 
              comunidade global de voluntários comprometidos com a sustentabilidade.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-[family-name:var(--font-poppins)]">
              Plataforma
            </h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Organizations */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-[family-name:var(--font-poppins)]">
              Para Organizações
            </h3>
            <ul className="space-y-3">
              {footerLinks.forOrganizations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-[family-name:var(--font-poppins)]">
              Suporte
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-wrap gap-6 text-background/70 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contato@ecolink.com.br</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+55 (11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>São Paulo, Brasil</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              &copy; {new Date().getFullYear()} EcoLink. Todos os direitos reservados.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-1">
              Feito com <span className="text-primary">&#x2665;</span> para um mundo melhor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
