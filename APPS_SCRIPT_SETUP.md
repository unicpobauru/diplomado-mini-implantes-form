# Cómo conectar el formulario a una Planilla Google

Este es el único paso manual que falta — todo lo demás (el formulario, el envío a WhatsApp)
ya está funcionando sin depender de esto. Mientras no completes esto, el formulario sigue
mandando los leads a WhatsApp normalmente, solo que no queda una fila guardada en ninguna
planilla.

## 1. Crear la planilla

1. Ve a [sheets.google.com](https://sheets.google.com) y crea una planilla en blanco.
2. Ponle un nombre, por ejemplo **"Leads — Mini-Implantes (Formulario)"**.

## 2. Pegar el script

1. En la planilla, ve al menú **Extensiones → Apps Script**.
2. Borra el código de ejemplo (`function myFunction() {}`) que aparece.
3. Pega este código completo:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Fecha", "Nombre", "Teléfono", "Email", "¿Es odontólogo?", "Tag"]);
    }

    sheet.appendRow([
      data.fecha || new Date().toISOString(),
      data.nombre || "",
      data.telefono || "",
      data.email || "",
      data.esOdontologo || "",
      data.tag || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

> La columna **"Tag"** llega con el valor fijo `[LP-MINIIMPL-FORM]` en cada fila —
> no aparece en ningún campo del formulario, es solo para identificar el origen
> del dato si más adelante lo cruzas con otras planillas.

## Si ya tenías el script implementado (actualizar sin cambiar la URL)

Como ya implementaste esto antes, hay que actualizar el código sin que la URL
`/exec` cambie (así no hace falta tocar nada del lado del sitio):

1. Volvé a **Extensiones → Apps Script** en tu planilla.
2. Reemplazá todo el código por la versión de arriba (con la columna "Tag").
3. Guardá (`Ctrl+S`).
4. **Implementar → Gestionar implementaciones**.
5. Al lado de la implementación activa, clic en el ícono de **lápiz (editar)**.
6. En "Versión", elegí **Nueva versión**.
7. Clic en **Implementar**.

La URL sigue siendo la misma — no hace falta mandarme nada de nuevo. Los
próximos envíos del formulario ya van a traer la columna "Tag" en la planilla.

4. Guarda el proyecto (ícono de disquete arriba a la izquierda). Ponle un nombre, por ejemplo
   **"Recibir leads"**.

## 3. Publicar como "Web app"

1. Arriba a la derecha, clic en **Implementar → Nueva implementación**.
2. Al lado de "Seleccionar tipo", clic en el ícono de engranaje ⚙️ → elige **"Aplicación web"**.
3. Completa:
   - **Descripción**: lo que quieras (ej: "v1").
   - **Ejecutar como**: tu cuenta (la que aparece por defecto).
   - **Quién tiene acceso**: ⚠️ **"Cualquier usuario"** (tiene que ser esta opción — no
     "Cualquier usuario con cuenta de Google" — porque el pedido viene de alguien visitando el
     sitio, sin estar loggeado).
4. Clic en **Implementar**.
5. Google va a pedir que autorices permisos (es tu propio script accediendo a tu propia
   planilla). Vas a ver una pantalla de advertencia tipo "Google no verificó esta app" — es
   normal para scripts personales. Clic en **Configuración avanzada** → **Ir a "Recibir leads"
   (no seguro)** → **Permitir**.
6. Copia la **URL de la aplicación web** que aparece al final (termina en `/exec`).

## 4. Último paso: mandarme esa URL

Pegame acá esa URL — yo la pego en `src/lib/leadForm.ts` (`GOOGLE_SCRIPT_URL`) y publico la
actualización. A partir de ahí, cada envío del formulario va a aparecer como una fila nueva en
tu planilla, además de abrir WhatsApp normalmente.

## Notas

- No hace falta que la planilla quede pública ni compartida con nadie — el script tiene acceso
  porque corre "como vos".
- Si en algún momento queres dejar de recibir en la planilla (por ejemplo, para probar algo),
  basta con volver a poner `GOOGLE_SCRIPT_URL = null` en el código — el formulario sigue
  funcionando igual, solo deja de guardar la fila.
- Si haces cambios y necesitas una nueva URL, repetí el paso 3 con **"Gestionar
  implementaciones" → editar (ícono de lápiz) → Nueva versión → Implementar** (así la URL no
  cambia cada vez).
