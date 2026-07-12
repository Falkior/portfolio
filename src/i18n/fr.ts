import type { Translations } from "./en";

export const fr: Translations = {
  nav: {
    about: "À propos",
    skills: "Compétences",
    experience: "Expérience",
    education: "Formation",
    certifications: "Certifications",
    projects: "Projets",
    contact: "Contact",
  },
  hero: {
    greeting: "Bonjour, je suis",
    name: "William Couedon",
    subtitle: "Étudiant Cybersécurité — Profil offensif & défensif",
    tagline:
      "CTF & pentest • Durcissement Windows/Linux • Segmentation réseau • Défense d’infrastructure • Développement full-stack",
    cta_work: "Voir mes projets",
    cta_contact: "Me contacter",
    scroll_down: "défiler vers le bas",
  },
  about: {
    title: "À propos",
    lead: "Étudiant en Bachelor 3 Cybersécurité avec 1 an d’expérience en administration et sécurisation de parc en production.",
    paragraphs: [
      "Profil offensif & défensif : CTF inter-écoles, audits WiFi, pentest de contrôle d’accès physique d’un côté ; durcissement d’infrastructure (fail2ban, iptables, reverse proxy), GPO/MFA, segmentation réseau (VLAN) et patch management de l’autre.",
      "À l’aise en production, rigoureux, autonome, travail en équipe. Veille sécurité active (blog, posts) et CTF en équipe.",
    ],
    location: "Rennes, France",
    location_label: "Localisation",
    languages: "Français (Natif) • Anglais (C1)",
    languages_label: "Langues",
    availability: "Recherche alternance 2026–2028",
    availability_detail: "Master Cybersécurité — M1/M2 (sept. 2026)",
    driving: "Permis B",
    driving_label: "Mobilité",
    remote: "Présentiel ou télétravail",
    remote_label: "Mode de travail",
  },
  skills: {
    title: "Compétences",
    offensive: "Cybersécurité — Offensive",
    defensive: "Cybersécurité — Défensive",
    systems: "Systèmes & Réseaux",
    development: "Développement",
    tools: "Outils & Environnements",
  },
  experience: {
    title: "Expérience",
    jobs: [
      {
        role: "Stage Développeur Full-stack",
        company: "WEBNATIONS",
        location: "Montpellier, France",
        dates: "Avr 2026 – Juin 2026",
        bullets: [
          "Génération automatisée de fichiers (JSON/ZIP), upload et validation d’intégrité, pour l’écosystème Minecraft Bedrock.",
        ],
      },
      {
        role: "Reconversion vers la cybersécurité",
        company: "Formation autodidacte",
        location: "Rennes, France",
        dates: "Déc 2024 – Sept 2025",
        bullets: [
          "Recherche et intégration d’un cursus cyber. Montée en compétences autodidacte : CTF, labs pratiques.",
        ],
      },
      {
        role: "Technicien d’administration et maintenance de parc informatique (CDD)",
        company: "Université de Rennes",
        location: "Saint-Malo, France",
        dates: "Déc 2023 – Déc 2024",
        bullets: [
          "Mise en place GPO/MFA et durcissement Windows (droits locaux, journaux) sur 200 postes.",
          "Segmentation (VLAN) & durcissement d’équipements — isolation des services critiques.",
          "Patch management postes/serveurs, suivi de conformité.",
          "VMware/VirtualBox : sandbox de tests internes & validation de correctifs.",
        ],
      },
    ],
  },
  education: {
    title: "Formation",
    status_completed: "TERMINÉ",
    status_in_progress: "EN COURS",
    status_upcoming: "À VENIR",
    degrees: [
      {
        degree: "Master Cybersécurité (M1–M2)",
        school: "Ynov Campus Rennes",
        dates: "2026 – 2028",
        note: "À venir — alternance",
      },
      {
        degree: "Bachelor 3 Cybersécurité",
        school: "Ynov Campus Rennes",
        dates: "Sep 2025 – Présent",
      },
      {
        degree: "L3 Systèmes numériques, informatique embarquée et objets connectés",
        school: "UBS Lorient",
        dates: "2021 – 2023",
      },
      {
        degree: "BTS Système numérique informatique et réseaux",
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
        name: "PSE1 / PSE2 — Secourisme",
        issuer: "C.F.S.35",
        year: "2018",
      },
    ],
  },
  projects: {
    title: "Projets",
    empty: "D’autres projets arrivent bientôt...",
    empty_sub: "Revenez plus tard ou visitez mon GitHub pour les derniers travaux.",
    view_code: "Code source",
    live_demo: "Démo live",
  },
  contact: {
    title: "Restons en contact",
    subtitle:
      "Je recherche actuellement une alternance en cybersécurité (M1–M2) à partir de septembre 2026. N’hésitez pas à me contacter !",
    email: "Envoyer un email",
    footer: "© {year} William Couedon. Tous droits réservés.",
  },
};
