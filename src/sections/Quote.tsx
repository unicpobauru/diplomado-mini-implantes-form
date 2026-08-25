import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";

export function Quote() {
  return (
    <section className="bg-ink py-20 sm:py-28 lg:py-32">
      <Container size="lg">
        <Reveal>
          <blockquote className="mx-auto flex max-w-[760px] flex-col items-center text-center">
            <img
              src="images/prof-fabricio-valarelli.png"
              alt="Prof. Fabricio Pinelli Valarelli"
              className="h-24 w-24 rounded-full border border-gold-400/30 object-cover object-top sm:h-28 sm:w-28"
            />
            <p
              className="text-balance mt-8 font-light italic leading-[1.45] tracking-[-0.005em] text-white/90"
              style={{ fontSize: "clamp(1.35rem, 1.05rem + 1.4vw, 2.1rem)" }}
            >
              &ldquo;La Ortodoncia es equilibrio, funcionalidad y estética. Más que alinear los
              dientes: es transformar la confianza y la calidad de vida del paciente.&rdquo;
            </p>
            <footer className="mt-7 flex flex-col items-center gap-1">
              <span className="text-[15px] font-bold text-gold-400">Prof. Fabricio Pinelli Valarelli</span>
              <span className="text-[13px] text-white/50">Dr. y Mg. en Ortodoncia — USP · Postdoctorado University of Toronto</span>
            </footer>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
