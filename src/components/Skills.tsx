"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useLanguage } from "@/i18n/useLanguage";
import SectionWrapper from "./SectionWrapper";
import TerminalWindow from "@/components/effects/TerminalWindow";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const skillCategories = [
  {
    key: "development" as const,
    file: "development.sh",
    items: ["Java", "C++", "Python", "HTML/CSS", "TypeScript", "SQL"],
  },
  {
    key: "systems" as const,
    file: "systems.sh",
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
    file: "security.sh",
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
    file: "tools.sh",
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
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reducedMotion) return;

      const windows = containerRef.current?.querySelectorAll(".skill-window");
      if (!windows) return;

      windows.forEach((win) => {
        const lines = win.querySelectorAll(".skill-line");
        const progress = win.querySelector(".skill-progress");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: win,
            start: "top 80%",
            once: true,
          },
        });

        if (progress) {
          tl.from(progress, {
            width: 0,
            duration: 0.8,
            ease: "power2.out",
          });
        }

        tl.from(
          lines,
          {
            opacity: 0,
            x: -10,
            stagger: 0.05,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.4"
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <SectionWrapper id="skills">
      <h2 className="section-title reveal">{t.skills.title}</h2>

      <div ref={containerRef} className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((cat) => (
          <TerminalWindow
            key={cat.key}
            title={cat.file}
            className="skill-window reveal"
          >
            <div className="mb-3 flex items-center gap-2 text-xs text-dim">
              <span>$</span>
              <span>./load_skills.sh --category {cat.key}</span>
            </div>
            <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-white/5">
              <div className="skill-progress h-full w-full rounded-full bg-matrix/60" />
            </div>
            <div className="space-y-1.5">
              {cat.items.map((skill) => (
                <div key={skill} className="skill-line flex items-center gap-2 font-mono text-xs text-gray-300">
                  <span className="text-matrix">{">"}</span>
                  <span className="text-dim">{skill}</span>
                  <span className="ml-auto text-[10px] text-matrix/60">loaded</span>
                </div>
              ))}
            </div>
          </TerminalWindow>
        ))}
      </div>
    </SectionWrapper>
  );
}
