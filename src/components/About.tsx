"use client";

import { useLanguage } from "@/i18n/useLanguage";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  const { t } = useLanguage();

  const facts = [
    { icon: "📍", text: t.about.location },
    { icon: "🌐", text: t.about.languages },
    { icon: "🚗", text: t.about.driving },
    { icon: "💻", text: t.about.remote },
  ];

  return (
    <SectionWrapper id="about">
      <h2 className="section-title">{t.about.title}</h2>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="mb-6 text-lg leading-relaxed text-gray-300">
            {t.about.description}
          </p>
          <div className="inline-flex items-center gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-5 py-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <div>
              <p className="font-mono text-sm font-semibold text-emerald-400">
                {t.about.availability}
              </p>
              <p className="text-xs text-gray-400">
                {t.about.availability_detail}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {facts.map((fact) => (
            <div
              key={fact.text}
              className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3"
            >
              <span className="text-lg">{fact.icon}</span>
              <span className="text-sm text-gray-300">{fact.text}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
