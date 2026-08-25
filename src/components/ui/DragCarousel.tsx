import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DragCarouselProps {
  children: ReactNode[];
}

/**
 * Horizontal, scroll-snapped carousel. Touch devices get native swipe for
 * free from `overflow-x-auto`; this adds click-and-drag scrolling for mouse
 * users plus arrow buttons, so desktop visitors can "arrastar" it too.
 */
export function DragCarousel({ children }: DragCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let dragging = false;
    let startX = 0;
    let scrollStart = 0;

    const updateEdges = () => {
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return; // touch keeps native scrolling
      dragging = true;
      el.setPointerCapture(e.pointerId);
      startX = e.clientX;
      scrollStart = el.scrollLeft;
      el.style.scrollSnapType = "none";
      el.classList.add("cursor-grabbing");
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      el.scrollLeft = scrollStart - (e.clientX - startX);
    };

    const endDrag = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      el.style.scrollSnapType = "";
      el.classList.remove("cursor-grabbing");
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointerleave", endDrag);
    el.addEventListener("scroll", updateEdges, { passive: true });
    updateEdges();

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointerleave", endDrag);
      el.removeEventListener("scroll", updateEdges);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = (card?.offsetWidth ?? el.clientWidth * 0.8) + 20;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        disabled={!canScrollLeft}
        aria-label="Anterior"
        className="absolute left-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-card transition-opacity duration-200 disabled:pointer-events-none disabled:opacity-0 sm:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        disabled={!canScrollRight}
        aria-label="Siguiente"
        className="absolute right-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-card transition-opacity duration-200 disabled:pointer-events-none disabled:opacity-0 sm:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
