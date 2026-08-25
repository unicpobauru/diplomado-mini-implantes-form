import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

interface FormModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const FormModalContext = createContext<FormModalContextValue | null>(null);

export function FormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return <FormModalContext.Provider value={value}>{children}</FormModalContext.Provider>;
}

/** Abre/cierra el modal con el formulario de Respondi desde cualquier botón de WhatsApp. */
export function useFormModal() {
  const ctx = useContext(FormModalContext);
  if (!ctx) throw new Error("useFormModal debe usarse dentro de <FormModalProvider>");
  return ctx;
}
