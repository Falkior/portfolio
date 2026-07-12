export interface Project {
  id: string;
  title: string;
  titleFr?: string;
  description: string;
  descriptionFr?: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

// Add your projects here — each object becomes a card on the site.
// Example:
// {
//   id: "my-project",
//   title: "My Project",
//   description: "A brief description of what this project does.",
//   descriptionFr: "Une brève description du projet.",
//   tags: ["Python", "Cybersecurity", "API"],
//   image: "/projects/my-project.png",
//   github: "https://github.com/Falkior/my-project",
//   demo: "https://my-project.vercel.app",
//   featured: true,
// }

export const projects: Project[] = [
  {
    id: "pentest-access-control",
    title: "Physical Access Control Pentest",
    titleFr: "Pentest de contrôle d'accès physique",
    description:
      "Supervised pentest project (Ynov): bypassed a badge reader and a connected lock (Raspberry Pi) through fuzzing, SQL injection, and crafting a valid payload to unlock the door. Analyzed and cloned RFID/NFC badges — UID rewriting on Mifare Classic — and identified non-bypassable protections: hardware-burned UID (locked block 0) and Mifare DESFire EV1-3 encryption.",
    descriptionFr:
      "Projet de pentest encadré (Ynov) : contournement d'un lecteur de badge et d'une serrure connectée (Raspberry Pi) via fuzzing, injection SQL et envoi de payload valide pour déverrouiller la porte. Analyse et clonage de badges RFID/NFC — réécriture d'UID sur Mifare Classic — et identification des protections non contournables : UID gravé matériellement (bloc 0 verrouillé) et chiffrement Mifare DESFire EV1-3.",
    tags: ["Pentest", "RFID/NFC", "Raspberry Pi", "SQL Injection", "Fuzzing", "Mifare"],
    image: "/projects/pentest-access-control.png",
    featured: true,
  },
  {
    id: "les-ptit-curieux",
    title: "les-ptit-curieux",
    description:
      "Network audit scanner (Flask + Django, Docker): port detection via nmap and anonymous access testing on SMB/FTP/LDAP services, with automated risk scoring.",
    descriptionFr:
      "Scanner d'audit réseau (Flask + Django, Docker) : détection de ports via nmap et test d'accès anonymes SMB/FTP/LDAP avec scoring de risque automatisé.",
    tags: ["Python", "Flask", "Django", "Docker", "nmap"],
    image: "/projects/les-ptit-curieux.png",
    github: "https://github.com/Falkior/les-ptit-curieux",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "My personal portfolio with a modern editorial aesthetic. Features a warm-light palette, Fraunces/Inter type pairing, GSAP scroll reveals, Lenis smooth scrolling, a refined custom cursor, an infinite skills marquee, and bilingual FR/EN support.",
    descriptionFr:
      "Mon portfolio personnel avec une esthétique éditoriale moderne. Inclut une palette chaude, un duo typographique Fraunces/Inter, révélations GSAP au scroll, défilement fluide Lenis, curseur personnalisé affiné, marquee infini des compétences et support bilingue FR/EN.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Lenis", "Framer Motion"],
    image: "/projects/portfolio.png",
    github: "https://github.com/Falkior/portfolio",
    featured: true,
  },
];
