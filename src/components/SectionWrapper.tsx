"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Props {
  children: ReactNode;
  id: string;
  className?: string;
  index?: string;
  label?: string;
  headingId?: string;
  divider?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  index,
  label,
  headingId,
  divider = true,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const titleId = headingId ?? `${id}-title`;

  useGSAP(
    () => {
      if (reducedMotion) return;

      const elements = sectionRef.current?.querySelectorAll(
        ".reveal"
      ) as NodeListOf<HTMLElement>;
      if (!elements || elements.length === 0) return;

      gsap.from(elements, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-labelledby={label || headingId ? titleId : undefined}
      className={`px-6 py-24 md:px-12 lg:px-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        {divider && <div className="mb-16 border-t border-line" />}
        {(index || label) && (
          <div className="mb-8 flex items-baseline gap-4 reveal">
            {index && <span className="eyebrow text-accent">{index}</span>}
            {label && (headingId ? (
              <span className="eyebrow">{label}</span>
            ) : (
              <h2 id={titleId} className="eyebrow">{label}</h2>
            ))}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
