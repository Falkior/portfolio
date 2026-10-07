"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealItems } from "@/lib/reveal";
import { useLanguage } from "@/i18n/useLanguage";
import SectionWrapper from "./SectionWrapper";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function About() {
  const { lang, t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reducedMotion) return;

      const lines = contentRef.current?.querySelectorAll(".about-line");
      if (!lines) return;

      revealItems(lines);
    },
    { scope: contentRef, dependencies: [lang, reducedMotion], revertOnUpdate: true }
  );

  const facts = [
    { label: t.about.location_label, value: t.about.location },
    { label: t.about.languages_label, value: t.about.languages },
    { label: t.about.driving_label, value: t.about.driving },
  ];

  return (
    <SectionWrapper id="about" index="01" label={t.about.title}>
      <div ref={contentRef} className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="about-line text-2xl leading-snug text-ink md:text-3xl lg:text-4xl">
            {t.about.lead}
          </p>
          <div className="about-line mt-6 max-w-[60ch] space-y-4">
            {t.about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-ink/70 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="about-line mb-8 flex items-start gap-4 border-b border-line pb-6">
            <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent" />
            <div>
              <p className="font-mono text-sm font-medium text-accent">
                {t.about.availability}
              </p>
              <p className="text-sm text-muted">{t.about.availability_detail}</p>
            </div>
          </div>

          <dl className="space-y-0">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="about-line flex justify-between border-b border-line py-4"
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                  {fact.label}
                </dt>
                <dd className="text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SectionWrapper>
  );
}
