"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/useLanguage";
import SectionWrapper from "./SectionWrapper";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="experience">
      <h2 className="section-title">{t.experience.title}</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent md:left-1/2 md:block" />

        <div className="space-y-12">
          {t.experience.jobs.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative md:w-1/2 ${
                idx % 2 === 0
                  ? "md:pr-12"
                  : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-2 hidden h-3 w-3 rounded-full border-2 border-cyan-400 bg-[#0a0a0f] md:block ${
                  idx % 2 === 0 ? "-right-1.5" : "-left-1.5"
                }`}
              />

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-cyan-500/20">
                <div className="mb-1 font-mono text-xs text-cyan-400">
                  {job.dates}
                </div>
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {job.role}
                </h3>
                <p className="mb-4 text-sm text-gray-400">
                  {job.company} — {job.location}
                </p>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500/50" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
