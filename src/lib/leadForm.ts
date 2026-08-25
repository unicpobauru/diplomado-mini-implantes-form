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

/**
 * Etiqueta fija que viaja en CADA fila de la planilla (columna "Tag"), sin
 * mostrarse nunca en el formulario. Sirve para identificar el origen del
 * dato al integrarlo con otras planillas/sistemas.
 */
const LEAD_TAG = "[LP-MINIIMPL-FORM]";

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
  "[LP-MINIFORM] - Este es su código de atención, por favor no lo borre";

export function buildWhatsappUrl(): string {
  const text = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}

/**
 * Formatea una fecha al estilo brasileño (DD-MM-AAAA HH:mm:ss, 24h),
 * siempre en el huso horario de Brasil — independientemente de en qué país
 * esté la persona que llena el formulario — para que el equipo lea todas
 * las filas de la planilla con la misma referencia horaria.
 */
function formatFechaBR(date: Date): string {
  const parts = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "00";
  // Algunos motores devuelven "24" en vez de "00" para la medianoche con hour12:false.
  const hour = get("hour") === "24" ? "00" : get("hour");
  return `${get("day")}-${get("month")}-${get("year")} ${hour}:${get("minute")}:${get("second")}`;
}

/**
 * Envía los datos a la Planilla Google, sin bloquear ni depender de la
 * respuesta (Apps Script no siempre expone CORS legible desde el navegador,
 * por eso `no-cors`: el request sale igual y la fila se guarda, solo no
 * podemos leer la confirmación de vuelta).
 *
 * Justo después de esto se abre WhatsApp (a veces literalmente cambiando de
 * app en el celular), y un `fetch` normal sin terminar puede quedar
 * cancelado si la página pierde el foco antes de que el pedido salga.
 * `navigator.sendBeacon` existe exactamente para este caso — el navegador
 * garantiza que el pedido se envíe aunque la página se descargue enseguida
 * — así que es la primera opción; `fetch` con `keepalive` queda como
 * respaldo para navegadores sin sendBeacon.
 */
export function logToGoogleSheet(data: LeadFormData): void {
  if (!GOOGLE_SCRIPT_URL) return;
  const payload = JSON.stringify({ ...data, tag: LEAD_TAG, fecha: formatFechaBR(new Date()) });

  if (typeof navigator !== "undefined" && navigator.sendBeacon) {
    const blob = new Blob([payload], { type: "text/plain;charset=UTF-8" });
    const queued = navigator.sendBeacon(GOOGLE_SCRIPT_URL, blob);
    if (queued) return;
  }

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    keepalive: true,
    headers: { "Content-Type": "text/plain" },
    body: payload,
  }).catch(() => {
    // Silencioso a propósito: un fallo acá nunca debe impedir que el lead
    // llegue a WhatsApp, que es el canal principal.
  });
}
