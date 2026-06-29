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
    <SectionWrapper id="experience" index="03" label={t.experience.title}>
      <div ref={containerRef} className="space-y-0">
        {t.experience.jobs.map((job, idx) => (
          <div
            key={idx}
            className="experience-item group border-t border-line py-8 transition-colors hover:bg-card/30"
          >
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <span className="font-mono text-xs uppercase tracking-wider text-muted">
                  {job.dates}
                </span>
              </div>
              <div className="lg:col-span-9">
                <h3 className="mb-1 font-display text-xl text-ink md:text-2xl">
                  {job.role}
                </h3>
                <p className="mb-4 text-sm text-muted">
                  {job.company} — {job.location}
                </p>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-3 text-sm leading-relaxed text-ink/80"
                    >
                      <span className="mt-2 h-px w-4 flex-shrink-0 bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        <div className="border-t border-line" />
      </div>
    </SectionWrapper>
  );
}
