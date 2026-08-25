import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useFormModal } from "./FormModalContext";
import {
  RESPONDI_FORM_SRC,
  RESPONDI_EMBED_SCRIPT_ID,
  RESPONDI_EMBED_SCRIPT_SRC,
} from "../../lib/respondi";

/**
 * Modal con el formulario de Respondi embebido. Se monta una única vez en
 * toda la vida de la app (ver App.tsx) y solo se oculta/muestra por CSS —
 * nunca se desmonta el contenedor `data-respondi-container`, para que el
 * widget de Respondi no pierda su estado entre una apertura y otra.
 */
export function RespondiFormModal() {
  const { isOpen, close } = useFormModal();
  const containerRef = useRef<HTMLDivElement>(null);

  // Carga el script oficial de Respondi una sola vez (misma lógica de
  // deduplicación que el snippet que ellos proveen).
  useEffect(() => {
    if (document.getElementById(RESPONDI_EMBED_SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.async = true;
    script.id = RESPONDI_EMBED_SCRIPT_ID;
    script.src = RESPONDI_EMBED_SCRIPT_SRC;
    document.body.appendChild(script);
  }, []);

  // Bloquea el scroll del fondo mientras el modal está abierto.
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Cierra con Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm transition-opacity duration-200 ${
        isOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
      }`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Formulario de contacto"
    >
      <div className="relative flex max-h-[92vh] w-full max-w-[560px] flex-col overflow-hidden rounded-3xl bg-white shadow-panel">
        <button
          type="button"
          onClick={close}
          aria-label="Cerrar formulario"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink/60 transition-colors duration-200 hover:bg-ink hover:text-white"
        >
          <X className="h-5 w-5" strokeWidth={2} />
        </button>

        <div className="flex flex-col gap-1 px-6 pb-2 pt-7 sm:px-8">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold-500" aria-hidden />
            UniCPO · Antes de hablar con nosotros
          </span>
          <h2 className="text-balance text-xl font-extrabold leading-tight text-ink sm:text-2xl">
            Contanos un poco de ti
          </h2>
          <p className="text-[13.5px] leading-relaxed text-ink/55">
            Completa el formulario y te llevamos directo a WhatsApp para seguir la conversación.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-2 pb-4 sm:px-4">
          <div
            ref={containerRef}
            data-respondi-container=""
            data-respondi-mode="regular"
            data-respondi-src={RESPONDI_FORM_SRC}
            data-respondi-width="100%"
            data-respondi-height="600px"
          />
        </div>
      </div>
    </div>
  );
}
