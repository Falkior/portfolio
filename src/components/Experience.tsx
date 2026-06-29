"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useLanguage } from "@/i18n/useLanguage";
import SectionWrapper from "./SectionWrapper";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Experience() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reducedMotion) return;

      const items = containerRef.current?.querySelectorAll(".experience-item");
      if (!items) return;

      gsap.from(items, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.7,
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

  return (
    <SectionWrapper id="experience">
      <h2 className="section-title reveal">{t.experience.title}</h2>

      <div ref={containerRef} className="relative">
        <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-matrix/50 via-matrix/20 to-transparent md:left-1/2 md:block" />

        <div className="space-y-12">
          {t.experience.jobs.map((job, idx) => (
            <div
              key={idx}
              className={`experience-item relative md:w-1/2 ${
                idx % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
              }`}
            >
              <div
                className={`absolute top-2 hidden h-3 w-3 rounded-full border-2 border-matrix bg-black shadow-[0_0_10px_rgba(0,255,65,0.5)] md:block ${
                  idx % 2 === 0 ? "-right-1.5" : "-left-1.5"
                }`}
              />

              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-matrix/20 hover:bg-white/[0.04]">
                <div className="mb-1 font-mono text-xs text-matrix">
                  [{job.dates}]
                </div>
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {job.role}
                </h3>
                <p className="mb-4 text-sm text-dim">
                  {job.company} — {job.location}
                </p>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-2 font-mono text-sm text-gray-300"
                    >
                      <span className="mt-1.5 text-matrix">{">"}</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
