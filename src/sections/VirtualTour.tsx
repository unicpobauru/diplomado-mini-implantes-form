import { useEffect, useRef } from "react";
import { Maximize2 } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";

const PANOEE_ORIGIN = "https://tour.panoee.net";
const TOUR_SRC =
  "https://tour.panoee.net/iframe/tourclinicaunicpo?embedFullscreen=1&embedVr=1&embedGyro=1";

/**
 * Relays device-motion events to the embedded Panoee tour so the gyroscope
 * control works on mobile — same handshake as Panoee's own embed snippet,
 * ported to a React effect instead of an inline <script>.
 */
function usePanoeeGyroRelay(iframeRef: React.RefObject<HTMLIFrameElement | null>) {
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let ready = false;

    const pick = (source: unknown, keys: string[]) => {
      if (!source) return null;
      const out: Record<string, number | null> = {};
      keys.forEach((key) => {
        const value = (source as Record<string, unknown>)[key];
        out[key] = typeof value === "number" ? value : null;
      });
      return out;
    };

    const markReady = () => {
      try {
        const href = iframe.contentWindow?.location.href;
        if (href && href !== "about:blank") ready = true;
      } catch {
        // Cross-origin access throws once the iframe has actually navigated — that's our "ready" signal too.
        ready = true;
      }
    };

    const send = (payload: unknown) => {
      if (!iframe.contentWindow) return;
      try {
        iframe.contentWindow.postMessage(payload, PANOEE_ORIGIN);
      } catch {
        // ignore
      }
    };

    const onLoad = () => {
      ready = true;
    };

    const onMessage = (event: MessageEvent) => {
      if (!ready || !event.data || event.data.type !== "devicemotion") return;
      if (event.source !== window.parent) return;
      send(event.data);
    };

    const onDeviceMotion = (event: DeviceMotionEvent) => {
      if (!ready) return;
      send({
        type: "devicemotion",
        deviceMotionEvent: {
          acceleration: pick(event.acceleration, ["x", "y", "z"]),
          accelerationIncludingGravity: pick(event.accelerationIncludingGravity, ["x", "y", "z"]),
          rotationRate: pick(event.rotationRate, ["alpha", "beta", "gamma"]),
          interval: typeof event.interval === "number" ? event.interval : 0,
          timeStamp: event.timeStamp,
        },
      });
    };

    iframe.addEventListener("load", onLoad);
    markReady();
    window.addEventListener("message", onMessage);
    window.addEventListener("devicemotion", onDeviceMotion, { passive: true });

    return () => {
      iframe.removeEventListener("load", onLoad);
      window.removeEventListener("message", onMessage);
      window.removeEventListener("devicemotion", onDeviceMotion);
    };
  }, [iframeRef]);
}

export function VirtualTour() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  usePanoeeGyroRelay(iframeRef);

  return (
    <section id="tour" className="bg-soft py-20 sm:py-24 lg:py-32">
      <Container size="lg">
        <SectionHeading
          align="center"
          eyebrow="UniCPO · Tour 360°"
          title="Recorre nuestras instalaciones clínicas"
          description="Explora en 360° los laboratorios y salas donde practicarás la inserción de mini-implantes."
          className="mx-auto max-w-[640px]"
        />

        <Reveal delay={140} className="mt-12 overflow-hidden rounded-3xl border border-line bg-white shadow-card">
          <div className="flex items-center justify-between gap-4 bg-ink px-6 py-5 sm:px-8">
            <div>
              <h3 className="text-[17px] font-bold text-white sm:text-lg">Tour virtual UniCPO</h3>
              <p className="text-[13px] text-gold-200">Bauru, São Paulo — Brasil</p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="hidden rounded-full bg-gold-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-ink sm:inline-block">
                Tour 360°
              </span>
              <a
                href="tour.html"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-white/20 px-3.5 py-2 text-[12px] font-semibold text-white transition-colors duration-200 hover:border-gold-400 hover:text-gold-200"
              >
                <Maximize2 className="h-3.5 w-3.5" strokeWidth={2} />
                <span className="hidden sm:inline">Ver en pantalla completa</span>
                <span className="sm:hidden">Pantalla completa</span>
              </a>
            </div>
          </div>
          <div className="relative aspect-[32/27] w-full bg-soft sm:aspect-video">
            <iframe
              ref={iframeRef}
              id="tour-embedded"
              title="UniCPO - Clínica"
              src={TOUR_SRC}
              className="absolute inset-0 h-full w-full border-0"
              allow="autoplay; accelerometer; gyroscope; fullscreen; xr-spatial-tracking"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
