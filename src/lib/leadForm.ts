/**
 * Formulario propio (sin terceros de formularios). Al enviarse:
 *  1) se registra una fila en una Planilla Google (best-effort, "fire and
 *     forget" — ver GOOGLE_SCRIPT_URL más abajo);
 *  2) se abre WhatsApp con un mensaje fijo (código de atención), sin los
 *     datos de la persona — esos ya quedaron en la planilla.
 */

/**
 * URL de implementación ("Web app") del Google Apps Script — ver
 * APPS_SCRIPT_SETUP.md para el paso a paso y el código que corre del otro
 * lado. Si en algún momento se necesita desactivar el registro en planilla
 * sin tocar nada más, alcanza con volver esto a `null`.
 */
export const GOOGLE_SCRIPT_URL: string | null =
  "https://script.google.com/macros/s/AKfycbyRKOiXqka6VDiDz0N7X8b7QRPJsXSLCAt8HAGOD_CKKfQSgrtTERJHu93lNhyoBkRBIA/exec";

export const WHATSAPP_PHONE = "5514997992312";

export interface LeadFormData {
  nombre: string;
  telefono: string;
  email: string;
  esOdontologo: "Sí" | "No";
}

/**
 * Mensaje fijo de WhatsApp para los envíos del formulario. Los datos de la
 * persona (nombre, teléfono, email, si es odontólogo) ya NO viajan acá — van
 * únicamente a la Planilla Google (ver logToGoogleSheet). Este mensaje es
 * solo un código/etiqueta fijo para que el equipo identifique el origen de
 * la conversación.
 */
const WHATSAPP_MESSAGE =
  "[LANDINGPAGE-MINIIMPL] - Este es su código de atención, por favor no lo borre.";

export function buildWhatsappUrl(): string {
  const text = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}

/**
 * Envía los datos a la Planilla Google, sin bloquear ni depender de la
 * respuesta (Apps Script no siempre expone CORS legible desde el navegador,
 * por eso `no-cors`: el request sale igual y la fila se guarda, solo no
 * podemos leer la confirmación de vuelta).
 */
export function logToGoogleSheet(data: LeadFormData): void {
  if (!GOOGLE_SCRIPT_URL) return;
  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({ ...data, fecha: new Date().toISOString() }),
  }).catch(() => {
    // Silencioso a propósito: un fallo acá nunca debe impedir que el lead
    // llegue a WhatsApp, que es el canal principal.
  });
}
