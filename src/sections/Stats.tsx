import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { CountUp } from "../components/ui/CountUp";
import { aboutStats } from "../data/stats";

export function Stats() {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
          {aboutStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="flex flex-col gap-1 text-center sm:text-left">
                <p className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="text-[13px] text-white/60 sm:text-sm">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
