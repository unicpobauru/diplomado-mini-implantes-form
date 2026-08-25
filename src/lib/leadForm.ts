/**
 * Formulario propio (sin terceros de formularios). Al enviarse:
 *  1) se registra una fila en una Planilla Google (best-effort, "fire and
 *     forget" — ver GOOGLE_SCRIPT_URL más abajo);
 *  2) se abre WhatsApp con un mensaje pre-cargado que ya trae los datos.
 */

/**
 * ⚠️ Pendiente: pegar acá la URL de implementación ("Web app") del Google Apps
 * Script una vez desplegado (ver public/APPS_SCRIPT_SETUP.md para el
 * paso a paso y el código a pegar). Mientras esto sea null, el formulario
 * sigue funcionando normal — el envío a WhatsApp no depende de esto — solo
 * no queda registro en la planilla.
 */
export const GOOGLE_SCRIPT_URL: string | null = null;

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
