import { useState } from "react";
import { Clock, Award, Cpu } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { WhatsappButton } from "../components/ui/WhatsappButton";
import { useInView } from "../lib/useInView";
import { differentials, type Differential } from "../data/differentials";

const icons = { clock: Clock, award: Award, cpu: Cpu };

const mediaClass =
  "h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105";

/**
 * Muestra la foto fija hasta que la tarjeta está por entrar en pantalla, y
 * recién ahí monta el <video autoPlay> (si existe) — evita que las 3 tarjetas
 * descarguen y decodifiquen video al mismo tiempo que la imagen del Hero.
 * Si el video no existe (404) se queda con la foto.
 */
function DifferentialMedia({ item }: { item: Differential }) {
  const [videoFailed, setVideoFailed] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="h-full w-full">
      {item.video && !videoFailed && inView ? (
        <video
          src={item.video}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          onError={() => setVideoFailed(true)}
          className={mediaClass}
        />
      ) : (
        <img src={item.image} alt="" aria-hidden className={mediaClass} />
      )}
    </div>
  );
}

export function Differentials() {
  return (
    <section className="bg-soft py-20 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="UniCPO · Diferenciales"
          title="Nuestros principales diferenciales"
          description="Un diplomado enfocado 100% en práctica clínica real, con tecnología de punta y mentoría directa desde el primer día."
          className="max-w-[640px]"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {differentials.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 90}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/40 hover:shadow-card-hover">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <DifferentialMedia item={item} />
                    <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-gold-400 shadow-md transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-7">
                    <h3 className="text-xl font-bold leading-snug text-ink">{item.title}</h3>
                    <p className="text-[15px] leading-relaxed text-ink/60">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={260} className="mt-14 flex justify-center">
          <WhatsappButton variant="primary" size="lg">
            Participa en nuestro proceso de selección
          </WhatsappButton>
        </Reveal>
      </Container>
    </section>
  );
}
