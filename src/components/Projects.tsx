"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import { useLanguage } from "@/i18n/useLanguage";
import { projects } from "@/data/projects";
import SectionWrapper from "./SectionWrapper";
import TerminalWindow from "@/components/effects/TerminalWindow";
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
      <SectionWrapper id="projects">
        <h2 className="section-title reveal">{t.projects.title}</h2>
        <div className="mx-auto max-w-md rounded-lg border border-dashed border-matrix/20 bg-white/[0.02] p-12 text-center reveal">
          <div className="mb-4 font-mono text-4xl text-dim">$</div>
          <p className="mb-2 font-mono text-lg text-matrix">
            {t.projects.empty}
          </p>
          <p className="text-sm text-dim">{t.projects.empty_sub}</p>
          <div className="mt-6">
            <a
              href="https://github.com/Falkior"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-matrix/30 px-5 py-2 font-mono text-sm text-matrix transition-all hover:border-matrix hover:bg-matrix/10"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="projects">
      <h2 className="section-title reveal">{t.projects.title}</h2>
      <div ref={containerRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <TerminalWindow
            key={project.id}
            title={project.title}
            className={`project-card ${project.featured ? "sm:col-span-2 lg:col-span-1" : ""}`}
          >
            {project.image && (
              <div className="relative mb-4 h-40 overflow-hidden rounded border border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className="mb-3 text-xs text-dim">
              <span className="text-matrix">$</span> cat README.md
            </div>
            <p className="mb-4 text-sm text-gray-400">
              {lang === "fr" && project.descriptionFr
                ? project.descriptionFr
                : project.description}
            </p>
            <div className="mb-4 text-xs text-dim">
              <span className="text-matrix">$</span> git log --tags
            </div>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-matrix/20 px-2 py-1 font-mono text-[10px] text-matrix"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 border-t border-white/5 pt-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-matrix transition-colors hover:text-matrix/80"
                >
                  {t.projects.view_code} →
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-dim transition-colors hover:text-matrix"
                >
                  {t.projects.live_demo} →
                </a>
              )}
            </div>
          </TerminalWindow>
        ))}
      </div>
    </SectionWrapper>
  );
}
