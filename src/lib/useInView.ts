import { useEffect, useRef, useState } from "react";

/**
 * True una vez que el elemento está por entrar en pantalla. Se usa para
 * recién montar los <video autoPlay> cuando hace falta — así no compiten por
 * ancho de banda / decodificación con la imagen del Hero y el bundle de JS
 * al cargar la página (ayuda al LCP y al INP).
 */
export function useInView<T extends HTMLElement>(rootMargin = "400px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return { ref, inView };
}
