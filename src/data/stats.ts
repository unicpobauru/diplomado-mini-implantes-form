export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const aboutStats: Stat[] = [
  { value: 18000, suffix: "+", label: "Alumnos ya formados" },
  { value: 20, prefix: "+", label: "Países de procedencia" },
  { value: 30000, suffix: "+", label: "Pacientes atendidos al año" },
  { value: 6000, suffix: " m²", label: "de instalaciones" },
];
