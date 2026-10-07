"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { revealItems } from "@/lib/reveal";
import { useLanguage } from "@/i18n/useLanguage";
import SectionWrapper from "./SectionWrapper";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const skillCategoryKeys = [
  "offensive",
  "defensive",
  "systems",
  "development",
  "tools",
] as const;

export default function Skills() {
  const { lang, t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const skillCategories = skillCategoryKeys.map((key) => ({
    key,
    items: t.skills.items[key],
  }));

  useGSAP(
    () => {
      if (reducedMotion || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const groups = containerRef.current?.querySelectorAll(".skill-group");
      if (!groups) return;

      revealItems(groups);

      if (marqueeRef.current) {
        const track = marqueeRef.current.querySelector(".marquee-track");
        if (track) {
          gsap.to(track, {
            xPercent: -50,
            duration: 40,
            ease: "none",
            repeat: -1,
          });
        }
      }
    },
    { scope: containerRef, dependencies: [lang, reducedMotion], revertOnUpdate: true }
  );

  const marqueeItems = skillCategories.flatMap((cat) => cat.items);

  return (
    <SectionWrapper id="skills" index="02" label={t.skills.title}>
      <div ref={containerRef}>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div key={cat.key} className="skill-group">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
                {t.skills[cat.key]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block border border-line bg-card px-3 py-1.5 font-mono text-xs text-ink transition-colors hover:border-accent/30 hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          ref={marqueeRef}
          className="relative mt-10 overflow-hidden md:mt-14 border-y border-line py-4"
        >
          <div className="marquee-track flex w-max items-center gap-8">
            {[...marqueeItems, ...marqueeItems].map((skill, i) => (
              <span key={`${skill}-${i}`} className="flex items-center gap-8">
                <span className="whitespace-nowrap font-display text-3xl text-ink/10 md:text-5xl">
                  {skill}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
