"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/useLanguage";
import SectionWrapper from "./SectionWrapper";

export default function Education() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="education">
      <h2 className="section-title">{t.education.title}</h2>

      <div className="relative ml-4">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent" />

        <div className="space-y-8">
          {t.education.degrees.map((deg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8"
            >
              {/* Dot */}
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-emerald-400 bg-[#0a0a0f]" />

              <div className="font-mono text-xs text-emerald-400">
                {deg.dates}
              </div>
              <h3 className="mt-1 text-base font-semibold text-white">
                {deg.degree}
              </h3>
              <p className="text-sm text-gray-400">{deg.school}</p>
              {"note" in deg && deg.note && (
                <span className="mt-2 inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-0.5 font-mono text-xs text-emerald-400">
                  {deg.note}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
