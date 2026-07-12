export const en = {
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    certifications: "Certifications",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "William Couedon",
    subtitle: "Cybersecurity Student — Offensive & Defensive Profile",
    tagline:
      "CTF & pentesting • Windows/Linux hardening • Network segmentation • Infrastructure defense • Full-stack development",
    cta_work: "View my work",
    cta_contact: "Contact me",
    scroll_down: "scroll down",
  },
  about: {
    title: "About Me",
    lead: "Bachelor 3 Cybersecurity student with one year of experience administering and securing IT infrastructure in production.",
    paragraphs: [
      "Offensive & defensive profile: inter-school CTFs, WiFi audits, physical access control pentesting on one side; infrastructure hardening (fail2ban, iptables, reverse proxy), GPO/MFA, network segmentation (VLAN) and patch management on the other.",
      "Comfortable in production environments, rigorous, autonomous, and a strong team player. Active security watch through blog posts and team CTFs.",
    ],
    location: "Rennes, France",
    location_label: "Location",
    languages: "French (Native) • English (C1)",
    languages_label: "Languages",
    availability: "Seeking alternance 2026–2028",
    availability_detail: "Master Cybersecurity — M1/M2 (Sep 2026)",
    driving: "Driver's license (Permis B)",
    driving_label: "Mobility",
    remote: "On-site or remote",
    remote_label: "Work mode",
  },
  skills: {
    title: "Skills",
    offensive: "Cybersecurity — Offensive",
    defensive: "Cybersecurity — Defensive",
    systems: "Systems & Networks",
    development: "Development",
    tools: "Tools & Environments",
  },
  experience: {
    title: "Experience",
    jobs: [
      {
        role: "Full-stack Developer Intern",
        company: "WEBNATIONS",
        location: "Montpellier, France",
        dates: "Apr 2026 – Jun 2026",
        bullets: [
          "Automated file generation (JSON/ZIP) with upload and integrity validation for the Minecraft Bedrock ecosystem.",
        ],
      },
      {
        role: "Career Transition to Cybersecurity",
        company: "Self-directed training",
        location: "Rennes, France",
        dates: "Dec 2024 – Sep 2025",
        bullets: [
          "Researched and joined a cybersecurity curriculum; self-taught upskilling through CTFs and hands-on labs.",
        ],
      },
      {
        role: "IT Administration & Maintenance Technician (CDD)",
        company: "Université de Rennes",
        location: "Saint-Malo, France",
        dates: "Dec 2023 – Dec 2024",
        bullets: [
          "Deployed GPO/MFA and hardened Windows systems (local rights, event logs) across 200 workstations.",
          "Network segmentation (VLAN) and equipment hardening — isolated critical services.",
          "Patch management for workstations and servers, compliance monitoring.",
          "VMware/VirtualBox: internal test sandboxes and patch validation.",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    status_completed: "COMPLETED",
    status_in_progress: "IN PROGRESS",
    status_upcoming: "UPCOMING",
    degrees: [
      {
        degree: "Master Cybersecurity (M1–M2)",
        school: "Ynov Campus Rennes",
        dates: "2026 – 2028",
        note: "Upcoming — alternance",
      },
      {
        degree: "Bachelor 3 Cybersecurity",
        school: "Ynov Campus Rennes",
        dates: "Sep 2025 – Present",
      },
      {
        degree: "L3 Digital Systems, Embedded Computing & IoT",
        school: "UBS Lorient",
        dates: "2021 – 2023",
      },
      {
        degree: "BTS Digital Systems — IT & Networks",
        school: "Maupertuit, Saint-Malo",
        dates: "2019 – 2021",
      },
    ],
  },
  certifications: {
    title: "Certifications",
    items: [
      {
        name: "Python (Basic) & Problem Solving (Basic)",
        issuer: "HackerRank",
        year: "2026",
      },
      {
        name: "PSE1 / PSE2 — First Aid Certifications",
        issuer: "C.F.S.35",
        year: "2018",
      },
    ],
  },
  projects: {
    title: "Projects",
    empty: "More projects coming soon...",
    empty_sub: "Check back later or visit my GitHub for the latest work.",
    view_code: "Source Code",
    live_demo: "Live Demo",
  },
  contact: {
    title: "Let’s Connect",
    subtitle:
      "I’m currently looking for a cybersecurity alternance (M1–M2) starting September 2026. Feel free to reach out!",
    email: "Send an email",
    footer: "© {year} William Couedon. All rights reserved.",
  },
};

export type Translations = typeof en;
