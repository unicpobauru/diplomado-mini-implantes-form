# Diplomado en Mini-Implantes — Faculdade UniCPO (Versión B · test A/B)

⚠️ **Este proyecto es una copia de `unicpo-miniimplantes`**, creada para un test A/B. Es
idéntico en todo — mismo contenido, mismo diseño — excepto en un punto: **todos los botones de
WhatsApp abren primero un formulario** (Respondi) en vez de ir directo a WhatsApp. Cualquier
cambio de contenido/diseño que se haga en la Versión A (`unicpo-miniimplantes`) hay que
replicarlo acá también si se quiere mantener el test comparable — avisar a Claude para que
aplique el mismo cambio en ambos.

## Cómo funciona el formulario (Respondi)

- El formulario vive en Respondi, no en este código: **https://form.respondi.app/jFT4m6ue**
- Cada botón de WhatsApp de la página (`WhatsappButton`, y los 3 links directos en
  `FinalCTA.tsx` / `Footer.tsx`) abre un modal (`RespondiFormModal.tsx`) con ese formulario
  embebido — ver `src/lib/respondi.ts`.
- **La redirección final a WhatsApp se configura DENTRO de Respondi**, no en este código:
  pantalla de finalización del formulario → "Redirigir a un link externo" → pegar el link de
  `src/lib/whatsapp.ts` (tiene el código de campaña `LANDINGPAGE-MINIIMPL-FORM`, para poder
  distinguir en WhatsApp los leads que vinieron de esta versión con formulario).
- ⚠️ **Pendiente de confirmar por el equipo**: que el formulario en Respondi tenga los 4 campos
  correctos (nombre completo, teléfono con DDI+DDD+número, e-mail, "¿es odontólogo? sí/no") y
  que la redirección de WhatsApp arriba esté realmente configurada — Claude no puede verificar
  esto sin completar el formulario con datos reales.

## Estructura y contenido original

Landing page en React + TypeScript + Tailwind CSS v4 para el Diplomado en Mini-Implantes de
UniCPO (Bauru, Brasil). Estructura y comportamiento heredados del template inicial; contenido,
marca, colores, logo y fotos son los reales de UniCPO, extraídos del material comercial
provisto (`DIPLOMADO MINI IMPLANTES.pdf` / `.pptx`) y del mockup de referencia
`lp-miniimplantes-unicpo.html`.

## 🌐 Sitio en vivo

Todavía no publicado — ver sección de despliegue pendiente al pie de este README.

Se publica solo: cada `git push` a `main` dispara un GitHub Action
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) que instala, compila
(`npm run build`) y publica el resultado en GitHub Pages. No hace falta compilar a mano ni subir
la carpeta `dist/` — solo subir el código fuente.

## Cómo ejecutar

```bash
cd unicpo-miniimplantes
npm install
npm run dev       # http://localhost:5173
npm run build      # build de producción en dist/
npm run preview    # sirve el build de producción localmente
```

## Qué cambió respecto al template

- **Paleta**: dorado/bronce → verde-azulado (teal) + ink oscuro de la marca real
  (`#0d2b28` ink, `#8fb8a8` / `#4d6f68` acentos sage, tomado de `lp-miniimplantes-unicpo.html`).
- **Botón primario**: pasó de relleno dorado a relleno *ink* (como en el mockup real) — el sage
  claro no tenía contraste suficiente como fondo de botón con texto blanco.
- **Idioma**: todo el contenido pasó de portugués a español (público objetivo: odontólogos de
  LATAM).
- **Formulario**: el campo "CRM" se reemplazó por "País" (más relevante para logística
  internacional que un registro profesional específico de Brasil).
- **Módulos**: en vez de cards con imagen (no había fotos reales por módulo individual), se
  rediseñó como una lista/tabla editorial (T1–T3 teoría, P1–P2 práctica, + mentoría) — mismo
  patrón ya validado en el mockup de referencia.
- **Imágenes**: prácticamente todos los placeholders fueron reemplazados por fotos y assets
  reales extraídos del `.pptx` (ver tabla abajo). Solo quedan placeholders en los testimonios
  (ilustrativos) y en 3 datos de contacto que no venían en el material.

## Assets reales ya integrados (`public/images/`)

| Archivo | Origen | Uso |
|---|---|---|
| `logo-unicpo-white.png` | slide 1 del pptx | Header y Footer (con filtro invert() en header sólido) |
| `favicon.png` | generado a partir del isotipo del pptx | Ícono del navegador |
| `hero-miniimplantes.jpg` | slide 1 (fondo) | Hero, imagen de fondo |
| `prof-thiago-tinoco.png` | slide 4 | Director General |
| `prof-fabricio-valarelli.png` | slide 8 | Coordinador Académico |
| `prof-danilo-valarelli.png`, `prof-roberto-grec.png`, `prof-marcelo-valerio.png`, `prof-ludmila-lima.png`, `prof-rodrigo-higa.png`, `prof-renzo-iwasaki.png` | slide 10 | Cuerpo docente |
| `facility-building.jpg` | slide 3 | Sección "La Institución" |
| `facility-clinic.jpg` | slide 3 | Sección "Nuestra estructura" |
| `clinical-procedure.jpg` | slide 18 | Sección "Metodología" |
| `lab-training.jpg` | slide 18 | Sección "Nuestra estructura" |

**Nota de calidad**: las imágenes fueron redimensionadas y comprimidas (sharp) desde los
originales del `.pptx` — de ~20MB combinados a ~2.2MB. Si más adelante hay fotografía
profesional dedicada para la web, reemplazar estos mismos nombres de archivo mantiene todo el
código intacto.

## Lo que falta completar (datos que no venían en el material)

- **Contacto real** en el footer: hoy están como `[EMAIL_DE_CONTACTO]`, `[WHATSAPP_UNICPO]`,
  `[CNPJ_UNICPO]` — buscar en `src/sections/Footer.tsx`.
- **Testimonios** (`src/data/testimonials.ts`): son ilustrativos, con el mismo criterio ya usado
  en `lp-miniimplantes-unicpo.html` ("no representa datos finales de inscripción"). Sustituir
  por testimonios reales y verificados antes de publicar.
- **Redes sociales**: los íconos del footer apuntan a `#` — falta el link real de Instagram/
  LinkedIn/YouTube de UniCPO.
- **Precio**: el mockup de referencia decidió no mostrar el precio directamente (flujo
  "hablar con un asesor"). El PDF sí trae valores ($1.300 curso / $197 matrícula) — si prefieren
  mostrarlos en la página, se puede agregar una sección de precio fácilmente.

## Dónde conectar el formulario/backend

Único archivo a editar: **`src/lib/api.ts`**, función `submitLead()`. Hoy solo simula el envío
(log en consola + delay de 1.2s). El contrato de entrada (`LeadPayload`: nombre, email,
whatsapp, país) ya está tipado — lanzar una excepción ahí activa automáticamente el estado de
error del formulario.

## Estructura de carpetas

```
src/
  components/           # LeadForm + ui/ (Button, FormField, Badge, AccordionItem, Reveal...)
  sections/              # Header, Hero, Quote, About, Differentials, Methodology,
                          # Modules, Faculty, Testimonials, Facility, FAQ, FinalCTA, Footer
  data/                   # contenido separado de los componentes (nav, about, faq, etc.)
  hooks/useScrolled.ts    # header transparente → sólido
  lib/api.ts              # punto único de integración con backend
  index.css               # design tokens (@theme) con la paleta real de UniCPO
```

## Checklist de responsividad

Verificado sin overflow horizontal en 1440 / 1280 / 1024 / 768 / 390 / 375px, con el panel de
formulario apilando (bullets arriba, formulario abajo) y la grilla de docentes pasando de 4 a 2
a 1 columna según el ancho.
