import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";

// https://youtube.com/shorts/n5PYxLzpqEs
const COORDINATOR_VIDEO_ID = "n5PYxLzpqEs";

export function CoordinatorVideo() {
  return (
    <section className="bg-ink py-20 sm:py-24 lg:py-32">
      <Container size="lg">
        <SectionHeading
          align="center"
          tone="dark"
          eyebrow="UniCPO · Un mensaje del coordinador"
          title="Una decisión puede transformar el rumbo de tu carrera."
          description="El Prof. Fabricio Pinelli Valarelli te comparte, en primera persona, por qué este es el momento de invertir en ti y en el futuro de tu práctica clínica."
          className="mx-auto max-w-[640px]"
        />

        <Reveal delay={140} className="mx-auto mt-12 max-w-[380px]">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl border border-white/10 bg-ink shadow-panel">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${COORDINATOR_VIDEO_ID}`}
              title="Prof. Fabricio Pinelli Valarelli — video del coordinador"
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
