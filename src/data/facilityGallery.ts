export interface GalleryImage {
  src: string;
  alt: string;
  /** Etiqueta del placeholder mientras el archivo todavía no existe en esa ruta. */
  label: string;
}

/**
 * Carrusel de "Nuestra estructura". Para agregar o reemplazar una foto,
 * basta con guardar el archivo con el nombre `facility-XX.jpg` dentro de
 * public/images/ (ver README de esa carpeta) — no hace falta tocar código,
 * la foto aparece sola en cuanto el archivo existe con ese nombre.
 */
export const facilityGallery: GalleryImage[] = [
  { src: "images/facility-01.jpg", alt: "Clínica de UniCPO en Bauru — sillones clínicos equipados", label: "FACILITY_IMAGE_01" },
  { src: "images/facility-02.jpg", alt: "Sede de UniCPO en Bauru, São Paulo", label: "FACILITY_IMAGE_02" },
  { src: "images/facility-03.jpg", alt: "Práctica de laboratorio con modelo anatómico — UniCPO", label: "FACILITY_IMAGE_03" },
  { src: "images/facility-04.jpg", alt: "Clínica de UniCPO en atención con pacientes reales", label: "FACILITY_IMAGE_04" },
  { src: "images/facility-05.jpg", alt: "Equipo de rayos X portátil — UniCPO", label: "FACILITY_IMAGE_05" },
  { src: "images/facility-06.jpg", alt: "Estaciones clínicas de práctica — UniCPO", label: "FACILITY_IMAGE_06" },
  { src: "images/facility-07.jpg", alt: "Laboratorio de anatomía — UniCPO", label: "FACILITY_IMAGE_07" },
  { src: "images/facility-08.jpg", alt: "Modelo anatómico de estudio — UniCPO", label: "FACILITY_IMAGE_08" },
  { src: "images/facility-09.jpg", alt: "Área de convivencia — UniCPO", label: "FACILITY_IMAGE_09" },
];
