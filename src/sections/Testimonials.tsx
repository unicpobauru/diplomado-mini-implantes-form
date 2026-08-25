import { useState } from "react";
import { Quote as QuoteIcon } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { WhatsappButton } from "../components/ui/WhatsappButton";
import { InstagramIcon } from "../components/ui/SocialIcons";
import { renderBold } from "../lib/renderBold";
import { testimonials, type Testimonial } from "../data/testimonials";

/** Shows the video once it exists at its path; falls back to the still photo if it 404s (or before it's uploaded). */
function FeaturedMedia({ t }: { t: Testimonial }) {
  const [videoFailed, setVideoFailed] = useState(false);

  if (t.video && !videoFailed) {
    return (
      <video
        src={t.video}
        autoPlay
        muted
        loop
        playsInline
        onError={() => setVideoFailed(true)}
        className="h-full w-full object-cover object-top sm:object-center"
      />
    );
  }

  return (
    <img
      src={t.image}
      alt={t.name}
      className="h-full w-full object-cover object-top sm:object-center"
    />
  );
}

export function Testimonials() {
  const featured = testimonials.find((t) => t.featured);
  const rest = testimonials.filter((t) => !t.featured);

  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="UniCPO · Resultados reales"
          title="Odontólogos que ya dieron el paso"
          description="Profesionales de distintos países de LATAM ya viven la experiencia UniCPO y dominan el anclaje esquelético en su práctica clínica."
          className="mx-auto max-w-[640px]"
        />

        {featured && (
          <Reveal delay={80} className="mt-14">
            <article className="grid overflow-hidden rounded-3xl border border-gold-400/30 bg-white shadow-card sm:grid-cols-[1fr_1.2fr]">
              <div className="relative aspect-[4/5] w-full sm:aspect-auto">
                <FeaturedMedia t={featured} />
                <a
                  href={featured.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver el video de ${featured.name} en Instagram`}
                  className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink/70 shadow-md transition-colors duration-200 hover:text-gold-600"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              </div>
              <div className="flex flex-col justify-center gap-5 p-8 sm:p-10 lg:p-12">
                <QuoteIcon className="h-7 w-7 text-gold-500" strokeWidth={1.5} />
                <p className="text-balance text-[19px] italic leading-relaxed text-ink/80 sm:text-[22px]">
                  &ldquo;{renderBold(featured.quote)}&rdquo;
                </p>
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-[16px] font-bold text-gold-600">{featured.name}</p>
                    <p className="text-[13px] text-ink/45">{featured.location}</p>
                  </div>
                  <span className="w-fit rounded-full bg-soft px-3 py-1 text-[11px] font-medium text-ink/70">
                    {featured.course}
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        )}

        <div className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
          {rest.map((t, i) => (
            <Reveal
              key={t.image}
              delay={i * 90}
              className="min-w-[280px] flex-1 snap-center sm:min-w-0"
            >
              <article className="flex h-full flex-col items-center gap-4 rounded-3xl border border-line bg-white p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/40 hover:shadow-card-hover">
                <div className="relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-20 w-20 rounded-full border-2 border-gold-400/40 object-cover"
                  />
                  <a
                    href={t.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver el video de ${t.name} en Instagram`}
                    className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-ink/70 shadow-md transition-colors duration-200 hover:text-gold-600"
                  >
                    <InstagramIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
                <QuoteIcon className="h-5 w-5 text-gold-500" strokeWidth={1.5} />
                <p className="flex-1 text-[14px] italic leading-relaxed text-ink/70">
                  &ldquo;{renderBold(t.quote)}&rdquo;
                </p>
                <div className="flex flex-col items-center gap-2">
                  <div>
                    <p className="text-[13px] font-semibold text-gold-600">{t.name}</p>
                    <p className="text-[12px] text-ink/45">{t.location}</p>
                  </div>
                  <span className="rounded-full bg-soft px-2.5 py-1 text-[10.5px] font-medium text-ink/70">
                    {t.course}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
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
