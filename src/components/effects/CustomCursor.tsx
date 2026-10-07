"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring || reducedMotion) return;
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const previousCursor = document.body.style.cursor;

    const hideCursor = () => {
      gsap.killTweensOf([dot, ring]);
      gsap.set([dot, ring], { opacity: 0 });
      document.body.classList.remove("custom-cursor-active");
      document.body.style.cursor = previousCursor;
    };

    const moveCursor = (e: MouseEvent) => {
      if (!pointerQuery.matches || motionQuery.matches) return;
      const firstMove = !document.body.classList.contains("custom-cursor-active");
      if (firstMove) gsap.set(ring, { x: e.clientX, y: e.clientY });
      gsap.set(dot, { x: e.clientX, y: e.clientY, opacity: 1 });
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        duration: 0.15,
        ease: "power2.out",
        overwrite: "auto",
      });
      document.body.classList.add("custom-cursor-active");
    };

    const handleHover = (e: MouseEvent) => {
      if (!pointerQuery.matches || motionQuery.matches) return;
      const interactive = e.target instanceof Element && e.target.closest("a, button, [data-cursor]");
      gsap.to(ring, { scale: interactive ? 1.8 : 1, duration: 0.2, overwrite: "auto" });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseleave", hideCursor);
    window.addEventListener("blur", hideCursor);
    pointerQuery.addEventListener("change", hideCursor);

    return () => {
      hideCursor();
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("blur", hideCursor);
      pointerQuery.removeEventListener("change", hideCursor);
    };
  }, [reducedMotion]);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        data-custom-cursor="dot"
        className="fixed top-0 left-0 z-[10000] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink"
        style={{ pointerEvents: "none", opacity: 0 }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        data-custom-cursor="ring"
        className="fixed top-0 left-0 z-[10000] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/30"
        style={{ pointerEvents: "none", opacity: 0 }}
      />
    </>
  );
}
