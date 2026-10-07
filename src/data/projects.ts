export interface Project {
  id: string;
  title: string;
  titleFr?: string;
  description: string;
  descriptionFr?: string;
  tags: string[];
  tagsFr?: string[];
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
      "Supervised project at Ynov: pentesting a badge reader and a Raspberry Pi connected lock using fuzzing and SQL injection to unlock the door. RFID/NFC badge analysis and cloning, including MIFARE Classic UID rewriting. Protections we did not bypass during the project included a locked UID block 0 and MIFARE DESFire EV1–3 encryption.",
    descriptionFr:
      "Projet encadré à Ynov : tests d’intrusion sur un lecteur de badge et une serrure connectée Raspberry Pi, avec ouverture de la porte par fuzzing et injection SQL. Analyse et clonage de badges RFID/NFC, dont la réécriture d’UID sur MIFARE Classic. Les protections que nous n’avons pas contournées dans le cadre du projet incluent le bloc 0 de l’UID verrouillé et le chiffrement MIFARE DESFire EV1–3.",
    tags: ["Pentest", "RFID/NFC", "Raspberry Pi", "SQL Injection", "Fuzzing", "Mifare"],
    tagsFr: ["Pentest", "RFID/NFC", "Raspberry Pi", "Injection SQL", "Fuzzing", "MIFARE"],
    image: "/projects/pentest-access-control.png",
    featured: true,
  },
  {
    id: "les-ptit-curieux",
    title: "les-ptit-curieux",
    description:
      "Network audit scanner (Flask + Django, Docker): port detection via nmap and anonymous access testing on SMB/FTP/LDAP services, with automated risk scoring.",
    descriptionFr:
      "Scanner d’audit réseau développé avec Flask et Django, et conteneurisé avec Docker. Détection des ports avec nmap, tests d’accès anonymes aux services SMB, FTP et LDAP, et évaluation automatisée des risques.",
    tags: ["Python", "Flask", "Django", "Docker", "nmap"],
    image: "/projects/les-ptit-curieux.png",
    github: "https://github.com/Falkior/les-ptit-curieux",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    titleFr: "Portfolio personnel",
    description:
      "French and English portfolio built with Next.js and TypeScript, featuring a responsive editorial design, scroll animations and smooth navigation.",
    descriptionFr:
      "Portfolio bilingue français/anglais développé avec Next.js et TypeScript, avec une interface responsive au style éditorial, des animations au défilement et une navigation fluide.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Lenis", "Framer Motion"],
    image: "/projects/portfolio.png",
    github: "https://github.com/Falkior/portfolio",
    featured: true,
  },
];
