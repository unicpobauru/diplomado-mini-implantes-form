import { useState } from "react";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { DragCarousel } from "../components/ui/DragCarousel";
import { ImagePlaceholder } from "../components/ui/ImagePlaceholder";
import { facilityGallery, type GalleryImage } from "../data/facilityGallery";

const paragraphs = [
  "Nuestra sede en Bauru, São Paulo — el mayor polo de Odontología de Brasil — fue pensada para ofrecer a los alumnos un ambiente moderno y totalmente enfocado en la práctica médica de alta performance.",
  "Contamos con salas amplias equipadas con tecnología de punta, centro cirúrgico propio, más de 70 sillones clínicos y áreas dedicadas a la práctica intensiva con pacientes reales.",
  "Desde el primer día tienes contacto con equipos modernos: flujo digital con escaneo intraoral, fotografía odontológica profesional, tomografías propias y planificación de inserción de mini-implantes mediante imágenes digitales.",
];

/** Shows the real photo once it exists at `src`; falls back to the placeholder if it 404s. */
function GalleryPhoto({ image }: { image: GalleryImage }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <ImagePlaceholder label={image.label} className="aspect-[4/5] rounded-3xl" />;
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      draggable={false}
      onError={() => setFailed(true)}
      className="aspect-[4/5] w-full select-none rounded-3xl object-cover"
    />
  );
}

export function Facility() {
  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-32">
      <Container size="lg">
        <div className="flex flex-col gap-6">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold-500" aria-hidden />
              UniCPO · Nuestra estructura
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="text-balance font-extrabold leading-[1.12] tracking-[-0.01em] text-ink"
              style={{ fontSize: "clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem)" }}
            >
              Una estructura completa para tu formación práctica.
            </h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {paragraphs.map((p, i) => (
              <Reveal key={p} delay={140 + i * 60}>
                <p className="max-w-[640px] text-[15px] leading-relaxed text-ink/65 sm:text-base">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>

      <Reveal delay={220} className="mt-12">
        <Container size="lg">
          <DragCarousel>
            {facilityGallery.map((image) => (
              <div key={image.src} className="w-[78%] shrink-0 snap-center sm:w-[46%] lg:w-[32%]">
                <GalleryPhoto image={image} />
              </div>
            ))}
          </DragCarousel>
        </Container>
      </Reveal>
    </section>
  );
}
