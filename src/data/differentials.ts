export interface Differential {
  icon: "clock" | "award" | "cpu";
  title: string;
  description: string;
  /** Poster/fallback mientras no haya video, y `poster` del <video> una vez que lo haya. */
  image: string;
  /**
   * Ruta del video liviano (mp4, sin audio) — ver public/videos/README.
   * `null` = todavía no subido, se muestra la foto fija de `image`.
   */
  video: string | null;
}

export const differentials: Differential[] = [
  {
    icon: "clock",
    title: "Pacientes reales",
    description: "Practica la inserción de mini-implantes en 9 clases clínicas con pacientes reales — no solo en modelos de laboratorio.",
    image: "images/clinical-procedure.jpg",
    video: "videos/diferencial-01.mp4",
  },
  {
    icon: "award",
    title: "Mentoría de Excelencia",
    description: "Aprende con el Prof. Fabricio Pinelli Valarelli y su equipo, referencia en Ortodoncia en Brasil y LATAM.",
    image: "images/prof-fabricio-valarelli.png",
    video: "videos/diferencial-02.mp4",
  },
  {
    icon: "cpu",
    title: "Tecnología de Punta",
    description: "Flujo digital, tomografía propia y planificación con imágenes digitales desde el primer día.",
    image: "images/lab-training.jpg",
    video: "videos/diferencial-03.mp4",
  },
];
