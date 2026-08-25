import type { ReactNode, MouseEventHandler } from "react";
import { Button } from "./Button";
import { WhatsappIcon } from "./SocialIcons";
import { useFormModal } from "./FormModalContext";

interface WhatsappButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Versión B (test A/B): en vez de ir directo a WhatsApp, abre el formulario
 * de Respondi en un modal. El propio formulario redirige a WhatsApp al
 * terminar (configurado en Respondi, no en este código).
 */
export function WhatsappButton({ variant, size, className, children, onClick }: WhatsappButtonProps) {
  const { open } = useFormModal();

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      onClick={(e) => {
        onClick?.(e);
        open();
      }}
    >
      <WhatsappIcon className="h-4 w-4 shrink-0" />
      {children}
    </Button>
  );
}
