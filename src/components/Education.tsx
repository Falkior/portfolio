"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useLanguage } from "@/i18n/useLanguage";
import SectionWrapper from "./SectionWrapper";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Education() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reducedMotion) return;

      const items = containerRef.current?.querySelectorAll(".education-item");
      if (!items) return;

      gsap.from(items, {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  const getStatus = (idx: number) => {
    if (idx === 0) return t.education.status_upcoming;
    if (idx === 1) return t.education.status_in_progress;
    return t.education.status_completed;
  };

  const isHighlight = (idx: number) => idx === 0 || idx === 1;

  return (
    <SectionWrapper id="education" index="04" label={t.education.title}>
      <div ref={containerRef} className="space-y-0">
        {t.education.degrees.map((deg, idx) => (
          <div
            key={idx}
            className="education-item flex flex-col justify-between gap-4 border-t border-line py-6 md:flex-row md:items-center"
          >
            <div className="md:max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                {deg.dates}
              </span>
              <h3 className="mt-1 font-display text-lg text-ink md:text-xl">
                {deg.degree}
              </h3>
              <p className="text-sm text-muted">{deg.school}</p>
              {"note" in deg && deg.note && (
                <p className="mt-1 text-xs text-muted">{deg.note}</p>
              )}
            </div>
            <span
              className={`self-start rounded border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider md:self-center ${
                isHighlight(idx)
                  ? "border-accent/20 bg-accent/5 text-accent"
                  : "border-line bg-card text-muted"
              }`}
            >
              {getStatus(idx)}
            </span>
          </div>
        ))}
        <div className="border-t border-line" />
      </div>
    </SectionWrapper>
  );
}
