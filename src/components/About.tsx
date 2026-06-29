"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useLanguage } from "@/i18n/useLanguage";
import SectionWrapper from "./SectionWrapper";
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
    { label: t.about.location_label, value: t.about.location },
    { label: t.about.languages_label, value: t.about.languages },
    { label: t.about.driving_label, value: t.about.driving },
    { label: t.about.remote_label, value: t.about.remote },
  ];

  return (
    <SectionWrapper id="about" index="01" label={t.about.title}>
      <div ref={contentRef} className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="about-line text-2xl leading-snug text-ink md:text-3xl lg:text-4xl">
            {t.about.description}
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="about-line mb-8 flex items-start gap-4 border-b border-line pb-6">
            <span className="relative mt-2 flex h-2.5 w-2.5 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
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
