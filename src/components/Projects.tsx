"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import { useLanguage } from "@/i18n/useLanguage";
import { projects } from "@/data/projects";
import SectionWrapper from "./SectionWrapper";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Projects() {
  const { lang, t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reducedMotion) return;

      const cards = containerRef.current?.querySelectorAll(".project-card");
      if (!cards) return;

      gsap.from(cards, {
        opacity: 0,
        y: 40,
        stagger: 0.1,
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

  if (projects.length === 0) {
    return (
      <SectionWrapper id="projects" index="05" label={t.projects.title}>
        <div className="mx-auto max-w-md rounded border border-dashed border-line bg-card p-12 text-center reveal">
          <p className="mb-2 font-display text-xl text-ink">
            {t.projects.empty}
          </p>
          <p className="text-sm text-muted">{t.projects.empty_sub}</p>
          <div className="mt-6">
            <a
              href="https://github.com/Falkior"
              target="_blank"
              rel="noopener noreferrer"
              className="link-wipe font-mono text-sm"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="projects" index="05" label={t.projects.title}>
      <div ref={containerRef} className="space-y-0">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card group border-t border-line py-10 transition-colors hover:bg-card/30"
          >
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                {project.image && (
                  <div className="relative aspect-[16/10] overflow-hidden rounded border border-line bg-card-alt">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-between lg:col-span-7">
                <div>
                  <h3 className="mb-3 font-display text-3xl text-ink md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mb-6 max-w-xl text-sm leading-relaxed text-ink/70 md:text-base">
                    {lang === "fr" && project.descriptionFr
                      ? project.descriptionFr
                      : project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-line bg-card px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex gap-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-wipe font-mono text-sm"
                    >
                      {t.projects.view_code}
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-wipe font-mono text-sm text-muted hover:text-ink"
                    >
                      {t.projects.live_demo}
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
        <div className="border-t border-line" />
      </div>
    </SectionWrapper>
  );
}
