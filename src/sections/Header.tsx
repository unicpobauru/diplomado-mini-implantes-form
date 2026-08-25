import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "../components/ui/Container";
import { WhatsappButton } from "../components/ui/WhatsappButton";
import { navLinks } from "../data/nav";
import { useScrolled } from "../hooks/useScrolled";

export function Header() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-paper/95 shadow-[0_1px_0_rgba(13,43,40,0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-[76px] items-center justify-between lg:h-[88px]">
          <a href="#inicio" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <img
              src="images/logo-unicpo-white.png"
              alt="UniCPO"
              className="h-7 w-auto transition-[filter] duration-300 lg:h-8"
              style={{ filter: solid ? "invert(1)" : "none" }}
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium uppercase tracking-[0.06em] transition-colors duration-300 hover:text-gold-600 ${
                  solid ? "text-ink/80" : "text-white/85"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <WhatsappButton variant="primary" size="md">
              Participa en nuestro proceso de selección
            </WhatsappButton>
          </div>

          <button
            type="button"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
              solid ? "text-ink" : "text-white"
            }`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      <div
        className={`overflow-hidden bg-paper transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container>
          <nav className="flex flex-col gap-1 pb-6 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-3 text-[15px] font-medium text-ink/80 transition-colors hover:bg-soft hover:text-gold-600"
              >
                {link.label}
              </a>
            ))}
            <WhatsappButton variant="primary" size="md" className="mt-3 w-full" onClick={() => setMenuOpen(false)}>
              Participa en nuestro proceso de selección
            </WhatsappButton>
          </nav>
        </Container>
      </div>
    </header>
  );
}
