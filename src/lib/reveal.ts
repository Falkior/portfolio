"use client";

import { gsap } from "./gsap";

// Each item enters independently; content remains visible without JavaScript.
export function revealItems(
  elements: NodeListOf<Element> | undefined,
  { y = 30, duration = 0.65 } = {}
) {
  if (!elements || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  elements.forEach((element) => {
    if (element.getBoundingClientRect().bottom <= 0) return;

    gsap.fromTo(
      element,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        ease: "power2.out",
        clearProps: "opacity,transform",
        scrollTrigger: { trigger: element, start: "top 90%", once: true },
      }
    );
  });
}
