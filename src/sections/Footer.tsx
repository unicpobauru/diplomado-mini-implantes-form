import { Phone, MapPin } from "lucide-react";
import { Container } from "../components/ui/Container";
import { navLinks } from "../data/nav";
import { InstagramIcon, YoutubeIcon } from "../components/ui/SocialIcons";

const socials = [
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/unicpo.oficial/" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://www.youtube.com/@UniCPOBauru" },
];

export function Footer() {
  return (
    <footer className="bg-ink-900 pt-16 text-white/70 sm:pt-20">
      <Container>
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <img src="images/logo-unicpo-white.png" alt="UniCPO" className="h-7 w-auto self-start" />
            <p className="max-w-[320px] text-[14px] leading-relaxed text-white/50">
              Facultad enfocada 100% en odontología de posgrado. Diplomado en Mini-Implantes,
              presencial e intensivo, en Bauru — el mayor polo de Odontología de Brasil.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="mb-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-white">
              Navegación
            </h4>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] text-white/55 transition-colors hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="mb-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-white">
              Redes sociales
            </h4>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-400"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href="https://unicpo.com.br"
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-[14px] text-white/55 transition-colors hover:text-gold-400"
            >
              unicpo.com.br
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="mb-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-white">
              Contacto
            </h4>
            <a
              href="#formulario"
              className="flex items-center gap-2 text-[14px] text-white/55 transition-colors hover:text-gold-400"
            >
              <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              +55 14 99799-2312 (WhatsApp)
            </a>
            <span className="flex items-start gap-2 text-[14px] text-white/55">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
              Bauru, São Paulo — Brasil
            </span>
            <a href="#" className="mt-1 text-[13px] text-white/40 underline-offset-4 hover:underline">
              Política de Privacidad
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-8 text-center text-[12px] text-white/35 sm:flex-row sm:text-left">
          <p>Faculdade UniCPO · Diplomado en Mini-Implantes — Copyright {new Date().getFullYear()} — Todos los derechos reservados.</p>
          <p>CNPJ: [CNPJ_UNICPO]</p>
        </div>
      </Container>
    </footer>
  );
}
