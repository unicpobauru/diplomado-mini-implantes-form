import { useEffect } from "react";
import {
  RESPONDI_FORM_SRC,
  RESPONDI_EMBED_SCRIPT_ID,
  RESPONDI_EMBED_SCRIPT_SRC,
} from "../../lib/respondi";

interface RespondiEmbedProps {
  height?: string;
  className?: string;
}

/** Formulario de Respondi embebido inline en la página (modo "regular"). Carga el script oficial una sola vez. */
export function RespondiEmbed({ height = "480px", className = "" }: RespondiEmbedProps) {
  useEffect(() => {
    if (document.getElementById(RESPONDI_EMBED_SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.async = true;
    script.id = RESPONDI_EMBED_SCRIPT_ID;
    script.src = RESPONDI_EMBED_SCRIPT_SRC;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className={className}
      data-respondi-container=""
      data-respondi-mode="regular"
      data-respondi-src={RESPONDI_FORM_SRC}
      data-respondi-width="100%"
      data-respondi-height={height}
    />
  );
}
