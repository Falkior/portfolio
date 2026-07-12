"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useLanguage } from "@/i18n/useLanguage";
import SectionWrapper from "./SectionWrapper";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const skillCategories = [
  {
    key: "offensive" as const,
    items: [
      "CTF",
      "WiFi Audit (wifite)",
      "WEP / WPA2",
      "Physical Access Pentest",
      "Wireshark",
      "nmap",
      "HackTheBox",
    ],
  },
  {
    key: "defensive" as const,
    items: [
      "fail2ban",
      "iptables",
      "Rate Limiting",
      "nginx (Reverse Proxy)",
      "OpenVPN",
      "Patch Management",
      "Monitoring",
    ],
  },
  {
    key: "systems" as const,
    items: [
      "Windows Server",
      "Linux (Debian/Ubuntu)",
      "DHCP/DNS",
      "VLAN",
      "Active Directory",
      "GPO/MFA",
      "Docker",
      "VMware / VirtualBox",
      "Zabbix",
      "Grafana",
      "Raspberry Pi",
    ],
  },
  {
    key: "development" as const,
    items: [
      "Java",
      "C++",
      "Python",
      "TypeScript",
      "Node.js",
      "Next.js",
      "HTML/CSS",
      "SQL / NoSQL",
      "Flask / Django",
      "Bash / PowerShell",
      "Git",
    ],
  },
  {
    key: "tools" as const,
    items: [
      "VS Code",
      "Eclipse",
      "IntelliJ IDEA",
      "GitHub",
      "Office 365",
      "Google Workspace",
      "Notion",
      "Slack",
    ],
  },
];

export default function Skills() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reducedMotion) return;

      const groups = containerRef.current?.querySelectorAll(".skill-group");
      if (!groups) return;

      gsap.from(groups, {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      if (marqueeRef.current) {
        const track = marqueeRef.current.querySelector(".marquee-track");
        if (track) {
          gsap.to(track, {
            xPercent: -50,
            duration: 40,
            ease: "none",
            repeat: -1,
          });
        }
      }
    },
    { scope: containerRef }
  );

  const marqueeItems = skillCategories.flatMap((cat) => cat.items);

  return (
    <SectionWrapper id="skills" index="02" label={t.skills.title}>
      <div ref={containerRef}>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div key={cat.key} className="skill-group">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
                {t.skills[cat.key]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block border border-line bg-card px-3 py-1.5 font-mono text-xs text-ink transition-colors hover:border-accent/30 hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          ref={marqueeRef}
          className="relative mt-20 overflow-hidden border-y border-line py-4"
        >
          <div className="marquee-track flex w-max items-center gap-8">
            {[...marqueeItems, ...marqueeItems].map((skill, i) => (
              <span key={`${skill}-${i}`} className="flex items-center gap-8">
                <span className="whitespace-nowrap font-display text-3xl text-ink/10 md:text-5xl">
                  {skill}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
