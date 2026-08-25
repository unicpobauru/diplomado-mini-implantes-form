import { GraduationCap, Stethoscope, ShieldCheck, CalendarDays, UserCheck, Star, MessageCircle, Flame } from "lucide-react";
import { Container } from "../components/ui/Container";
import { WhatsappButton } from "../components/ui/WhatsappButton";
import { CountUp } from "../components/ui/CountUp";
import { renderBold } from "../lib/renderBold";
import { trustPoints } from "../data/trustPoints";

/** Un ícono distinto por línea — en el mismo orden que `trustPoints`. */
const trustIcons = [GraduationCap, Stethoscope, ShieldCheck, CalendarDays, UserCheck];

const heroStats = [
  { value: 20, prefix: "+", label: "años de trayectoria" },
  { value: 18000, suffix: "+", label: "alumnos formados" },
  { value: 9, label: "clases 100% prácticas" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative">
      <div className="relative flex min-h-[640px] items-center overflow-hidden bg-ink sm:min-h-[720px] lg:min-h-[860px]">
        <div className="absolute inset-0">
          <img
            src="images/hero-miniimplantes.jpg"
            alt="Anclaje esquelético con mini-implantes — ilustración clínica"
            className="h-full min-h-[640px] w-full object-cover object-[78%_center] sm:min-h-[720px] lg:min-h-[860px] lg:object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,16,15,0.55) 0%, rgba(8,16,15,0.45) 45%, rgba(8,16,15,0.85) 100%)",
            }}
          />
        </div>

        <Container className="relative z-10 pb-32 pt-32 sm:pt-40 lg:pb-48 lg:pt-44">
          <div className="mx-auto flex max-w-[780px] flex-col items-center gap-7 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-500/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-200">
              <Flame className="h-3.5 w-3.5 text-gold-400" strokeWidth={2.5} />
              Exclusivo para odontólogos · Bauru, Brasil
            </span>
            <h1
              className="text-balance font-extrabold leading-[1.05] tracking-[-0.025em] text-white"
              style={{
                fontSize: "clamp(2.5rem, 1.7rem + 3.6vw, 4.25rem)",
                textShadow: "0 2px 16px rgba(0,0,0,0.45), 0 1px 3px rgba(0,0,0,0.5)",
              }}
            >
              Domina el{" "}
              <span className="text-gold-400">anclaje esquelético</span> y deja de
              derivar los casos que podrías resolver tú mismo.
            </h1>
            <p
              className="max-w-[600px] text-[17px] leading-relaxed text-white/80 sm:text-xl"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.45)" }}
            >
              {renderBold(
                "Diplomado presencial e intensivo de 5 días en Bauru, Brasil — con **pacientes reales**, tecnología de punta y la mentoría directa del Prof. Fabricio Pinelli Valarelli, referencia en Ortodoncia en Brasil y América Latina.",
                "dark"
              )}
            </p>
            <WhatsappButton variant="primary" size="lg" className="mt-1">
              Participa en nuestro proceso de selección
            </WhatsappButton>

            <div className="mt-4 flex items-center gap-6 sm:gap-10">
              {heroStats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
                  {i > 0 && <span className="h-9 w-px bg-white/15" aria-hidden />}
                  <div className="flex flex-col items-center">
                    <span className="text-[26px] font-extrabold text-white sm:text-3xl">
                      <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </span>
                    <span className="max-w-[92px] text-[10.5px] leading-tight text-white/50 sm:text-[11px]">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <span className="text-[12px] text-white/45">
              Respuesta por WhatsApp en menos de 24h · Cupos limitados por grupo
            </span>
          </div>
        </Container>
      </div>

      <div className="relative z-20 px-6 sm:px-8 lg:px-10">
        <Container className="!px-0">
          <div className="-mt-20 grid gap-0 overflow-hidden rounded-3xl bg-ink shadow-panel sm:-mt-24 lg:-mt-28 lg:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-14">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold-400/40 bg-gold-500/15 px-3.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-gold-200">
                <Star className="h-3 w-3 text-gold-400" fill="currentColor" strokeWidth={0} />
                UniCPO · Diplomado en Mini-Implantes
              </span>
              <h2
                className="text-balance font-extrabold leading-[1.1] tracking-[-0.015em] text-white"
                style={{ fontSize: "clamp(1.75rem, 1.4rem + 1.6vw, 2.5rem)" }}
              >
                Esto es lo que <span className="text-gold-400">vas a ganar</span> en 5 días intensivos.
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {trustPoints.map((point, i) => {
                  const Icon = trustIcons[i] ?? GraduationCap;
                  return (
                    <li
                      key={point}
                      className={`flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[14px] font-medium leading-snug text-white/85 transition-colors duration-300 hover:border-gold-400/40 hover:bg-white/[0.07] ${trustPoints.length % 2 !== 0 && i === trustPoints.length - 1 ? "sm:col-span-2" : ""}`}
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-400">
                        <Icon className="h-4 w-4" strokeWidth={2.25} />
                      </span>
                      {point}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-1 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <img
                  src="images/selo-mec.png"
                  alt="Selo MEC"
                  className="h-12 w-12 shrink-0 object-contain"
                />
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[13.5px] font-bold text-white">Certificación MEC</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold-500 px-2.5 py-0.5 text-[11px] font-bold text-white">
                      <Star className="h-3 w-3" fill="currentColor" strokeWidth={0} />
                      Nota 5 en el MEC
                    </span>
                  </div>
                  <span className="text-[12px] leading-snug text-white/55">
                    Reconocimiento oficial del Ministério da Educação de Brasil 🇧🇷
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 border-t border-white/10 bg-white/[0.03] p-8 text-center sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              <span className="eyebrow text-white/70">
                <span className="h-px w-6 bg-gold-400" aria-hidden />
                Contacto directo
              </span>
              <div className="flex flex-col items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-white">
                  <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Participa en nuestro proceso de selección
                </h3>
              </div>
              <p className="max-w-xs text-[14px] leading-relaxed text-white/70">
                Sin formularios: escríbenos por WhatsApp y resolvemos tus dudas sobre fechas,
                inversión y opciones de pago.
              </p>
              <WhatsappButton variant="ghost" size="lg" className="w-full">
                Hablar por WhatsApp
              </WhatsappButton>
              <span className="text-[11px] text-white/40">
                Respuesta en menos de 24h · Cupos limitados por grupo
              </span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
