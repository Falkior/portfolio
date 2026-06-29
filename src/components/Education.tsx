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
        x: -20,
        stagger: 0.1,
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
    if (idx === 0) return `[${t.education.status_upcoming}]`;
    if (idx === 1) return `[${t.education.status_in_progress}]`;
    return `[${t.education.status_completed}]`;
  };

  return (
    <SectionWrapper id="education">
      <h2 className="section-title reveal">{t.education.title}</h2>

      <div ref={containerRef} className="relative ml-4">
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-matrix/50 via-matrix/20 to-transparent" />

        <div className="space-y-8">
          {t.education.degrees.map((deg, idx) => (
            <div key={idx} className="education-item relative pl-8">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-matrix bg-black shadow-[0_0_10px_rgba(0,255,65,0.5)]" />

              <div className="font-mono text-xs text-matrix">[{deg.dates}]</div>
              <h3 className="mt-1 text-base font-semibold text-white">
                {deg.degree}
              </h3>
              <p className="text-sm text-dim">{deg.school}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="inline-block rounded border border-matrix/20 bg-matrix/5 px-2 py-0.5 font-mono text-[10px] text-matrix">
                  {getStatus(idx)}
                </span>
                {"note" in deg && deg.note && (
                  <span className="text-xs text-dim">{deg.note}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
