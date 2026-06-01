export const en = {
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "William Couedon",
    subtitle: "Cybersecurity Student & IT Engineer",
    tagline:
      "Windows/Linux hardening • Network segmentation • Vulnerability analysis • Full-stack development",
    cta_work: "View my work",
    cta_contact: "Contact me",
  },
  about: {
    title: "About Me",
    description:
      "Cybersecurity student with hands-on experience in IT administration and full-stack development. Skilled in Windows/Linux hardening, Active Directory & GPO/MFA management, network segmentation (VLAN/ACL), patch management, and supervision. Comfortable in production environments, rigorous, analytical, and a strong team player.",
    location: "Rennes, France",
    languages: "French (Native) • English (C1)",
    availability: "Seeking alternance 2026–2028",
    availability_detail: "Master Cybersecurity — M1/M2",
    driving: "Driver's license (Permis B)",
    remote: "Remote or on-site",
  },
  skills: {
    title: "Skills",
    development: "Development",
    systems: "Systems & Networks",
    cybersecurity: "Cybersecurity",
    tools: "Tools & Environments",
  },
  experience: {
    title: "Experience",
    jobs: [
      {
        role: "Full-stack Developer Intern",
        company: "WEBNATIONS",
        location: "Montpellier, France",
        dates: "Apr 2026 – Present",
        bullets: [
          "Built a web application that auto-generates JSON files and ZIP archives compatible with Minecraft Bedrock, with texture upload and validation.",
          "Worked with collaborative tools in a professional environment (Notion, Slack).",
        ],
      },
      {
        role: "IT Administration & Maintenance Technician",
        company: "Université de Rennes",
        location: "Saint-Malo, France",
        dates: "Dec 2023 – Dec 2024",
        bullets: [
          "Deployed GPO/MFA and hardened Windows systems (local rights, event logs).",
          "Network segmentation (VLAN/ACL) and equipment hardening — isolated critical services.",
          "Patch management for workstations and servers, compliance monitoring.",
          "VMware/VirtualBox: internal test sandboxes and patch validation.",
        ],
      },
      {
        role: "IT Intern",
        company: "Easy Cash",
        location: "Dinan, France",
        dates: "2020",
        bullets: [
          "Preventive and corrective maintenance on ~20 computers.",
          "Software and OS installation and configuration on workstations.",
          "Fault diagnosis and implementation of appropriate solutions.",
        ],
      },
    ],
  },
  education: {
    title: "Education",
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
