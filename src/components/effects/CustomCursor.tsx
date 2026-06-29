"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.style.cursor = "none";
    setVisible(true);

    const moveCursor = (e: MouseEvent) => {
      gsap.set(dot, { x: e.clientX, y: e.clientY });
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const handleEnter = () => {
      gsap.to(ring, { scale: 1.8, duration: 0.2, ease: "power2.out" });
    };

    const handleLeave = () => {
      gsap.to(ring, { scale: 1, duration: 0.2, ease: "power2.out" });
    };

    window.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll(
      "a, button, [data-cursor]"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[10000] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-matrix"
        style={{ pointerEvents: "none" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[10000] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-matrix/50"
        style={{ pointerEvents: "none" }}
      />
    </>
  );
}
