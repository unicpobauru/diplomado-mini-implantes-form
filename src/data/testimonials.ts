export interface Testimonial {
  name: string;
  location: string;
  course: string;
  quote: string;
  image: string;
  instagram: string;
  featured?: boolean;
  video?: string | null;
}

export const testimonials: Testimonial[] = [
  {
    name: "Felipe Acevedo",
    location: "Chile",
    course: "Step Two",
    quote:
      "Yo ya venía con la mentalidad de que quería estudiar en Brasil. Evalué otras instituciones, pero elegí UniCPO porque **me brindaron más atención**, conversaron conmigo y realizaron una reunión. En otros lugares te envían la documentación, pero no aclaran bien tus dudas.",
    image: "images/testimonial-01.jpg",
    instagram: "https://www.instagram.com/p/DYXMCrCxEms/",
  },
  {
    name: "Karlita Romero",
    location: "Ecuador",
    course: "Especialización en Armonización",
    quote:
      "Si no hubiera venido, la verdad es que no tendría ninguna seguridad al atender a mis pacientes, ni siquiera para abrir mi propia clínica, porque **la práctica y la teoría hacen al maestro**. Recomiendo muchísimo UniCPO, porque cuenta con calidad, tecnología, **pacientes reales** y docentes de primer nivel.",
    image: "images/testimonial-02.jpg",
    instagram: "https://www.instagram.com/p/DRerzxpEbG9/",
    featured: true,
    video: "videos/testimonial-karlita.mp4",
  },
  {
    name: "Yndiana Garrido",
    location: "Venezuela",
    course: "Diplomado en Biomecánica",
    quote:
      "Primero que nada, quiero destacar que el español es brutal. **Todo lo que vi en Instagram correspondió con la experiencia que encontré aquí**. Mi primera impresión fue: quiero realizar mi especialidad aquí. Aprendí muchísimo y puedo decir que **valió cada dólar que invertí**.",
    image: "images/testimonial-03.jpg",
    instagram: "https://www.instagram.com/p/DbJcG4TvEFO/",
  },
  {
    name: "Mackarena del Pilar",
    location: "Chile",
    course: "Diplomado en Mini Implantes",
    quote:
      "Para mí, venir ahora a Brasil significó **un cambio de chip importante** con respecto a mi formación y lo que aprendí acá. **Realmente te enseñan cómo se lleva a cabo la clínica**. Todo es muy bonito, y muy ordenado. La gente te recibe muy bien y te ayuda en todo lo que uno necesita.",
    image: "images/testimonial-04.jpg",
    instagram: "https://www.instagram.com/p/DZs2h4Fh2bS/",
  },
];
