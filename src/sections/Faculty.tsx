import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { WhatsappButton } from "../components/ui/WhatsappButton";
import { InstagramIcon } from "../components/ui/SocialIcons";
import { faculty } from "../data/faculty";

export function Faculty() {
  return (
    <section id="docentes" className="bg-paper py-20 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="UniCPO · Corpo docente"
          title="Quién te forma"
          description="Médicos referencia en Ortodoncia, con formación USP y trayectoria clínica real al frente de cada etapa de tu diplomado."
          className="max-w-[640px]"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {faculty.map((member, i) => (
            <Reveal key={member.name} delay={(i % 4) * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                <div className="relative overflow-hidden bg-soft">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="aspect-[3/4] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Instagram de ${member.name}`}
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-ink/70 backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-gold-600"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="text-[16px] font-bold leading-snug text-ink">{member.name}</h3>
                  <p className="text-[12.5px] font-semibold uppercase tracking-[0.04em] text-gold-600">
                    {member.role}
                  </p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-ink/60">{member.bio}</p>
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
