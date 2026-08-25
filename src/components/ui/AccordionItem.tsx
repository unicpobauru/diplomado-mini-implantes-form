import { Plus } from "lucide-react";

interface AccordionItemProps {
  number: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({ number, question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-5 py-6 text-left transition-colors duration-200 hover:text-gold-600"
      >
        <span className="text-sm font-semibold text-gold-500/70 tabular-nums">{number}</span>
        <span className="flex-1 text-[17px] font-semibold text-ink sm:text-lg">{question}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-300 ${
            isOpen ? "rotate-45 border-gold-500 bg-gold-500 text-white" : "text-ink/60"
          }`}
        >
          <Plus className="h-4 w-4" strokeWidth={2.25} />
        </span>
      </button>
      <div className={`accordion-content ${isOpen ? "is-open" : ""}`}>
        <div>
          <p className="max-w-[720px] pb-6 pl-[calc(1rem+1.25rem)] pr-10 text-[15px] leading-relaxed text-ink/65">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
