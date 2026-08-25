import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  ratio?: string;
}

/**
 * Visual stand-in for real photography/assets. Renders the bracketed
 * placeholder token (e.g. "[HERO_IMAGE]") so it's unambiguous which
 * files need to be supplied before launch. See README "Assets a substituir".
 */
export function ImagePlaceholder({ label, className = "", ratio }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden bg-soft text-ink/35 ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(10,9,6,0.05) 0px, rgba(10,9,6,0.05) 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden
      />
      <ImageIcon className="relative h-7 w-7 stroke-[1.5]" />
      <span className="relative px-4 text-center text-[11px] font-semibold uppercase tracking-[0.14em]">
        [{label}]
      </span>
    </div>
  );
}
