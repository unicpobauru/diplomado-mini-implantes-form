import { Sparkles } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { WhatsappButton } from "../components/ui/WhatsappButton";
import { modules, otherTopics } from "../data/modules";

const tagStyles: Record<string, string> = {
  "Teoría": "bg-gold-200 text-ink",
  "Práctica": "bg-gold-700 text-white",
  "Incluido": "bg-gold-500 text-white",
};

const featuredModules = modules.filter((m) => m.featured);

export function Modules() {
  return (
    <section id="modulos" className="bg-soft py-20 sm:py-24 lg:py-32">
      <Container size="lg">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-4">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold-500" aria-hidden />
                UniCPO · Currículo
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-balance font-extrabold leading-[1.12] tracking-[-0.01em] text-ink"
                style={{ fontSize: "clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem)" }}
              >
                Lo que incluye el diplomado
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-[480px] text-[15px] leading-relaxed text-ink/60">
                Un diplomado, sin cursos sueltos ni sorpresas después — 9 clases prácticas en 5 días
                intensivos.
              </p>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <WhatsappButton variant="secondary" size="md">
              Participa en nuestro proceso de selección
            </WhatsappButton>
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-12">
          <div className="rounded-3xl border border-line bg-white p-7 shadow-card sm:p-8 lg:p-10">
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold-500" aria-hidden />
              Un adelanto de lo que vas a aprender
            </span>
            <div className="mt-6 grid gap-8 sm:grid-cols-2 sm:gap-10">
              {featuredModules.map((module, i) => (
                <div
                  key={module.number}
                  className={`flex flex-col gap-3 ${i === 0 ? "sm:border-r sm:border-line sm:pr-10" : ""}`}
                >
                  <span
                    className={`w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] ${tagStyles[module.tag]}`}
                  >
                    Muestra · {module.tag}
                  </span>
                  <h3 className="text-xl font-bold leading-snug text-ink">{module.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink/60">{module.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 border-t border-dashed border-line pt-5 text-[13px] font-semibold text-ink/45">
              Esto es apenas una probadita — solo 2 de los 6 módulos del programa completo. ↓
            </p>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-8">
          <div className="relative overflow-hidden rounded-3xl bg-ink p-8 sm:p-10 lg:p-12">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/25 blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col gap-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
                <div className="flex flex-col gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-white">
                    <Sparkles className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3
                    className="text-balance font-extrabold leading-tight text-white"
                    style={{ fontSize: "clamp(1.5rem, 1.2rem + 1.2vw, 2.1rem)" }}
                  >
                    Y mucho más.
                  </h3>
                  <p className="max-w-[460px] text-[15px] leading-relaxed text-white/70">
                    {otherTopics.join(" · ")} — esto es solo un vistazo del programa completo.
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end sm:text-right">
                  <span className="text-4xl font-extrabold text-white">9 clases</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-gold-200">
                    prácticas en 5 días intensivos
                  </span>
                </div>
              </div>
              <WhatsappButton variant="ghost" size="lg" className="w-fit">
                Habla con nosotros para saber más
              </WhatsappButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
