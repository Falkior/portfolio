"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useLanguage } from "@/i18n/useLanguage";
import SectionWrapper from "./SectionWrapper";
import TerminalWindow from "@/components/effects/TerminalWindow";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function About() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reducedMotion) return;

      const lines = contentRef.current?.querySelectorAll(".about-line");
      if (!lines) return;

      gsap.from(lines, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: contentRef }
  );

  const facts = [
    { key: "location", prefix: ">", value: t.about.location },
    { key: "languages", prefix: "$", value: t.about.languages },
    { key: "driving", prefix: "#", value: t.about.driving },
    { key: "remote", prefix: ">", value: t.about.remote },
  ];

  return (
    <SectionWrapper id="about">
      <h2 className="section-title reveal">{t.about.title}</h2>

      <div ref={contentRef} className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <TerminalWindow title="about.txt">
            <p className="about-line mb-6 text-sm leading-relaxed text-gray-300 md:text-base">
              {t.about.description}
            </p>
            <div className="about-line inline-flex items-center gap-3 rounded border border-matrix/20 bg-matrix/5 px-4 py-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-matrix opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-matrix" />
              </span>
              <div>
                <p className="font-mono text-sm font-semibold text-matrix">
                  {t.about.availability}
                </p>
                <p className="text-xs text-dim">{t.about.availability_detail}</p>
              </div>
            </div>
          </TerminalWindow>
        </div>

        <div className="space-y-3">
          {facts.map((fact) => (
            <div
              key={fact.key}
              className="about-line flex items-center gap-3 rounded border border-white/5 bg-white/[0.02] px-4 py-3 terminal-line"
            >
              <span className="font-mono text-matrix">{fact.prefix}</span>
              <span className="text-sm text-gray-300">{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
