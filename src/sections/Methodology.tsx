import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { WhatsappButton } from "../components/ui/WhatsappButton";
import { renderBold } from "../lib/renderBold";

export function Methodology() {
  return (
    <section id="metodologia" className="bg-paper py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <img
              src="images/clinical-procedure.jpg"
              alt="Inserción de mini-implante en paciente real — clínica UniCPO"
              className="aspect-[4/5] w-full rounded-3xl object-cover"
            />
          </Reveal>

          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold-500" aria-hidden />
                UniCPO · Nuestra metodología
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-balance font-extrabold leading-[1.12] tracking-[-0.01em] text-ink"
                style={{ fontSize: "clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem)" }}
              >
                Anclaje esquelético, de la teoría a la boca del paciente.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="max-w-[540px] text-[15px] leading-relaxed text-ink/65 sm:text-base">
                {renderBold(
                  "Aprende a planificar, instalar y manejar casos complejos utilizando mini-implantes, con foco en **anclaje interradicular y extra-alveolar** — incluyendo técnicas avanzadas como el uso de mini-implantes en la **cresta infracigomática, Buccal Shelf mandibular y MARPE**."
                )}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-[540px] text-[15px] leading-relaxed text-ink/65 sm:text-base">
                {renderBold(
                  "Combinamos teoría detallada, demostraciones en vivo y **práctica supervisada en pacientes reales** de la clínica ortodóncica, para que **domines la inserción de mini-implantes** con la destreza y la confianza que exige un caso complejo."
                )}
              </p>
            </Reveal>
            <Reveal delay={260} className="mt-2">
              <WhatsappButton variant="secondary" size="lg">
                Participa en nuestro proceso de selección
              </WhatsappButton>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
