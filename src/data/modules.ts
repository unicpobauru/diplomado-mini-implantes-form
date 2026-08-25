export interface Module {
  number: string;
  title: string;
  description: string;
  tag: "Teoría" | "Práctica" | "Incluido";
  featured?: boolean;
}

export const modules: Module[] = [
  {
    number: "T1",
    title: "Fundamentos y elección del mini-implante",
    description: "Aspectos, características y elección del sitio de inserción según estabilidad primaria y secundaria.",
    tag: "Teoría",
  },
  {
    number: "T2",
    title: "Inserción autoperforante sin micro-motores",
    description: "Técnicas de inserción, aplicación de fuerza en los mini-implantes y carga inmediata.",
    tag: "Teoría",
  },
  {
    number: "T3",
    title: "Mecánica con anclaje esquelético y MARPE",
    description: "Verticalización, distalización, cierre de agenesias y expansión palatina asistida por mini-implantes — la técnica insignia del diplomado.",
    tag: "Teoría",
    featured: true,
  },
  {
    number: "P1",
    title: "Práctica en mandíbulas y maxilares artificiales",
    description: "Instalación de mini-implantes con el sistema Morelli, en hueso artificial de laboratorio.",
    tag: "Práctica",
  },
  {
    number: "P2",
    title: "Instalación en pacientes de la clínica",
    description: "Diagnóstico, planificación y ejecución supervisada de mini-implantes en boca — con pacientes reales, desde el primer caso.",
    tag: "Práctica",
    featured: true,
  },
  {
    number: "+",
    title: "Mentoría clínica directa",
    description: "Revisión de casos con el Prof. Fabricio y su equipo durante las 9 clases prácticas.",
    tag: "Incluido",
  },
];

/** Temas cubiertos por los módulos que no se muestran en detalle en la landing — el asesor los explica en la llamada. */
export const otherTopics: string[] = [
  "Fundamentos y elección del mini-implante",
  "Inserción autoperforante sin micro-motores",
  "Práctica en laboratorio con hueso artificial",
  "Mentoría clínica directa con el Prof. Fabricio",
];
