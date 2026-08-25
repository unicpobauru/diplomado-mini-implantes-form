import { CalendarDays, Clock3 } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { WhatsappButton } from "../components/ui/WhatsappButton";
import { useFormModal } from "../components/ui/FormModalContext";
import { cohorts } from "../data/cohorts";

export function FinalCTA() {
  const { open } = useFormModal();

  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #8fb8a8 0%, transparent 70%)" }}
        aria-hidden
      />
      <Container size="lg">
        <div className="relative flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2
              className="text-balance font-extrabold leading-[1.15] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem)" }}
            >
              ¿Vas a seguir derivando los casos que podrías resolver tú mismo?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-[560px] text-[15px] leading-relaxed text-white/65 sm:text-base">
              Grupos con cupos limitados — así de reales son las próximas fechas en Bauru, Brasil.
            </p>
          </Reveal>

          <div className="mt-4 grid w-full max-w-[560px] gap-4 sm:grid-cols-2">
            {cohorts.map((cohort, i) => (
              <Reveal key={cohort.code} delay={140 + i * 90}>
                <button
                  type="button"
                  onClick={open}
                  className="group flex h-full w-full flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-gold-200 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-ink">
                      {cohort.label} · {cohort.code}
                    </span>
                    <CalendarDays className="h-5 w-5 text-gold-400" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-white">{cohort.dateRange}</p>
                    <p className="text-[14px] font-semibold text-gold-200">
                      {cohort.month} de {cohort.year}
                    </p>
                  </div>
                  <p className="text-[12.5px] text-white/55">{cohort.detail}</p>
                </button>
              </Reveal>
            ))}
            <Reveal delay={230}>
              <button
                type="button"
                onClick={open}
                className="group flex h-full w-full flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-gold-200 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-ink">
                    Cupos por confirmar
                  </span>
                  <Clock3 className="h-5 w-5 text-gold-400" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-2xl font-extrabold leading-tight text-white">
                    Quiero entrar a la lista de espera
                  </p>
                </div>
                <p className="text-[12.5px] text-white/55">
                  Te avisamos por WhatsApp apenas se confirme la fecha del siguiente grupo.
                </p>
              </button>
            </Reveal>
          </div>

          <Reveal delay={320} className="mt-4">
            <WhatsappButton variant="ghost" size="lg">
              Quiero participar en el proceso de selección
            </WhatsappButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
