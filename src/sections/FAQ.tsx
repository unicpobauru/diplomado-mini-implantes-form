import { useState } from "react";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { WhatsappButton } from "../components/ui/WhatsappButton";
import { AccordionItem } from "../components/ui/AccordionItem";
import { faqItems } from "../data/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="bg-soft py-20 sm:py-24 lg:py-32">
      <Container size="lg">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-4">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold-500" aria-hidden />
                UniCPO · Preguntas frecuentes
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-balance font-extrabold leading-[1.12] tracking-[-0.01em] text-ink"
                style={{ fontSize: "clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem)" }}
              >
                Antes de participar en nuestro proceso de selección
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <WhatsappButton variant="secondary" size="md">
              Participa en nuestro proceso de selección
            </WhatsappButton>
          </Reveal>
        </div>

        <Reveal delay={180} className="mt-10 rounded-3xl bg-white px-6 shadow-card sm:px-10">
          <div>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.number}
                number={item.number}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
