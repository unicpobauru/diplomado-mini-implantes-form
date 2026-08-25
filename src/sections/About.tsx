import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { renderBold } from "../lib/renderBold";
import { aboutParagraphs } from "../data/about";

export function About() {
  return (
    <section id="institucion" className="bg-paper py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold-500" aria-hidden />
                UniCPO · Conozca la institución
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-balance font-extrabold leading-[1.12] tracking-[-0.01em] text-ink"
                style={{ fontSize: "clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem)" }}
              >
                La Institución
              </h2>
            </Reveal>
            <div className="flex flex-col gap-4">
              {aboutParagraphs.map((paragraph, i) => (
                <Reveal key={paragraph} delay={140 + i * 60}>
                  <p className="max-w-[520px] text-[15px] leading-relaxed text-ink/65 sm:text-base">
                    {renderBold(paragraph)}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={100}>
            <img
              src="images/facility-building.jpg"
              alt="Sede de UniCPO en Bauru, São Paulo, Brasil"
              className="aspect-[4/5] w-full rounded-3xl object-cover sm:aspect-video lg:aspect-[4/5]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
