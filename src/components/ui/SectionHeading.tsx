import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const descColor = tone === "dark" ? "text-white/70" : "text-ink/65";

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-6 bg-gold-500" aria-hidden />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={`text-balance font-extrabold leading-[1.12] tracking-[-0.01em] ${titleColor}`}
          style={{ fontSize: "clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem)" }}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className={`max-w-[560px] text-[15px] leading-relaxed sm:text-base ${descColor}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
