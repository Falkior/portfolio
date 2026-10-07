"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealItems } from "@/lib/reveal";
import { useLanguage } from "@/i18n/useLanguage";
import SectionWrapper from "./SectionWrapper";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Certifications() {
  const { lang, t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reducedMotion) return;

      const items = containerRef.current?.querySelectorAll(
        ".certification-item"
      );
      if (!items) return;

      revealItems(items);
    },
    { scope: containerRef, dependencies: [lang, reducedMotion], revertOnUpdate: true }
  );

  return (
    <SectionWrapper id="certifications" index="05" label={t.certifications.title}>
      <div ref={containerRef} className="space-y-0">
        {t.certifications.items.map((cert, idx) => (
          <div
            key={idx}
            className="certification-item flex flex-col justify-between gap-4 border-t border-line py-6 md:flex-row md:items-center"
          >
            <div className="md:max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                {cert.issuer}
              </span>
              <h3 className="mt-1 font-display text-lg text-ink md:text-xl">
                {cert.name}
              </h3>
            </div>
            <span className="self-start rounded border border-line bg-card px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted md:self-center">
              {cert.year}
            </span>
          </div>
        ))}
        <div className="border-t border-line" />
      </div>
    </SectionWrapper>
  );
}
