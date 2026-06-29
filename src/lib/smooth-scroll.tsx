"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SmoothScrollContextValue {
  scrollTo: (target: string | number | HTMLElement, options?: LenisOptions) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  scrollTo: () => {},
});

interface LenisOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    instance.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      instance.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    lenisRef.current = instance;

    return () => {
      instance.destroy();
      lenisRef.current = null;
    };
  }, [reducedMotion]);

  const scrollTo = (
    target: string | number | HTMLElement,
    options: LenisOptions = {}
  ) => {
    const offset = options.offset ?? -80;

    if (lenisRef.current && !reducedMotion) {
      lenisRef.current.scrollTo(target, {
        offset,
        duration: options.duration ?? 1.2,
        easing: options.easing,
      });
    } else {
      if (typeof target === "string") {
        const el = document.querySelector(target) as HTMLElement | null;
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY + offset;
          window.scrollTo({ top, behavior: reducedMotion ? "auto" : "smooth" });
        }
      } else if (typeof target === "number") {
        window.scrollTo({ top: target + offset, behavior: reducedMotion ? "auto" : "smooth" });
      } else if (target instanceof HTMLElement) {
        const top = target.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top, behavior: reducedMotion ? "auto" : "smooth" });
      }
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}
