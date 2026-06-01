"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/useLanguage";
import SectionWrapper from "./SectionWrapper";

const skillCategories = [
  {
    key: "development" as const,
    icon: "⌨️",
    items: ["Java", "C++", "Python", "HTML/CSS", "TypeScript", "SQL"],
  },
  {
    key: "systems" as const,
    icon: "🖥️",
    items: [
      "Windows Server",
      "Linux (Debian/Ubuntu)",
      "DHCP/DNS",
      "VLAN/ACL",
      "VMware",
      "VirtualBox",
      "Active Directory",
      "GPO/MFA",
    ],
  },
  {
    key: "cybersecurity" as const,
    icon: "🛡️",
    items: [
      "Wireshark",
      "nmap",
      "HackTheBox",
      "Metasploit",
      "Vulnerability Analysis",
      "Risk Assessment",
      "Patch Management",
    ],
  },
  {
    key: "tools" as const,
    icon: "🔧",
    items: [
      "VS Code",
      "Eclipse",
      "IntelliJ IDEA",
      "Git",
      "Unity 3D",
      "Notion",
      "Office 365",
    ],
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="skills">
      <h2 className="section-title">{t.skills.title}</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1 }}
            className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-cyan-500/20 hover:bg-white/[0.04]"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="font-mono text-lg font-semibold text-cyan-400">
                {t.skills[cat.key]}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-gray-300 transition-all hover:border-cyan-500/30 hover:text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
