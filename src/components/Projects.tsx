"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/useLanguage";
import { projects } from "@/data/projects";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  const { lang, t } = useLanguage();

  if (projects.length === 0) {
    return (
      <SectionWrapper id="projects">
        <h2 className="section-title">{t.projects.title}</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-md rounded-xl border border-dashed border-cyan-500/20 bg-white/[0.02] p-12 text-center"
        >
          <div className="mb-4 text-4xl">🚀</div>
          <p className="mb-2 font-mono text-lg text-cyan-400">
            {t.projects.empty}
          </p>
          <p className="text-sm text-gray-500">{t.projects.empty_sub}</p>
          <div className="mt-6">
            <a
              href="https://github.com/Falkior"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/30 px-5 py-2 font-mono text-sm text-cyan-400 transition-all hover:border-cyan-400 hover:bg-cyan-400/10"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </motion.div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="projects">
      <h2 className="section-title">{t.projects.title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-cyan-500/20 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-cyan-500/5 ${
              project.featured ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            {project.image && (
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            )}
            <h3 className="mb-2 text-lg font-semibold text-white">
              {project.title}
            </h3>
            <p className="mb-4 text-sm text-gray-400">
              {lang === "fr" && project.descriptionFr
                ? project.descriptionFr
                : project.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-xs text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  {t.projects.view_code} →
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  {t.projects.live_demo} →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
