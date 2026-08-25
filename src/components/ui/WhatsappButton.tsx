import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Button } from "./Button";
import { WhatsappIcon } from "./SocialIcons";

interface WhatsappButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
}

/**
 * Versión B (test A/B): en vez de ir directo a WhatsApp, lleva al formulario
 * embebido arriba de la página (#formulario, dentro del Hero). El propio
 * formulario redirige a WhatsApp al terminar (configurado en Respondi).
 */
export function WhatsappButton({ variant, size, className, children, onClick }: WhatsappButtonProps) {
  return (
    <Button href="#formulario" variant={variant} size={size} className={className} onClick={onClick}>
      <WhatsappIcon className="h-4 w-4 shrink-0" />
      {children}
    </Button>
  );
}
