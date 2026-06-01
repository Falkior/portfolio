import type { Translations } from "./en";

export const fr: Translations = {
  nav: {
    about: "À propos",
    skills: "Compétences",
    experience: "Expérience",
    education: "Formation",
    projects: "Projets",
    contact: "Contact",
  },
  hero: {
    greeting: "Bonjour, je suis",
    name: "William Couedon",
    subtitle: "Étudiant Cybersécurité & Ingénieur IT",
    tagline:
      "Durcissement Windows/Linux • Segmentation réseau • Analyse de vulnérabilités • Développement full-stack",
    cta_work: "Voir mes projets",
    cta_contact: "Me contacter",
  },
  about: {
    title: "À propos",
    description:
      "Étudiant en cybersécurité avec une expérience concrète en administration systèmes et développement full-stack. Compétent en durcissement Windows/Linux, gestion Active Directory & GPO/MFA, segmentation réseau (VLAN/ACL), gestion des correctifs et supervision. À l’aise en production, rigoureux, esprit d’analyse, travail en équipe.",
    location: "Rennes, France",
    languages: "Français (Natif) • Anglais (C1)",
    availability: "Recherche alternance 2026–2028",
    availability_detail: "Master Cybersécurité — M1/M2",
    driving: "Permis B",
    remote: "Télétravail ou présentiel",
  },
  skills: {
    title: "Compétences",
    development: "Développement",
    systems: "Systèmes & Réseaux",
    cybersecurity: "Cybersécurité",
    tools: "Outils & Environnements",
  },
  experience: {
    title: "Expérience",
    jobs: [
      {
        role: "Stage Développeur Full-stack",
        company: "WEBNATIONS",
        location: "Montpellier, France",
        dates: "Avr 2026 – Présent",
        bullets: [
          "Développement d’une application web générant automatiquement des fichiers JSON et archives ZIP compatibles Minecraft Bedrock, avec upload et validation de textures.",
          "Utilisation d’outils collaboratifs en environnement professionnel (Notion, Slack).",
        ],
      },
      {
        role: "Technicien d’administration et maintenance informatique",
        company: "Université de Rennes",
        location: "Saint-Malo, France",
        dates: "Déc 2023 – Déc 2024",
        bullets: [
          "Mise en place GPO/MFA et durcissement Windows (droits locaux, journaux).",
          "Segmentation (VLAN/ACL) & durcissement d’équipements — isolation des services critiques.",
          "Patch management postes/serveurs, suivi de conformité.",
          "VMware/VirtualBox : sandbox de tests internes & validation de correctifs.",
        ],
      },
      {
        role: "Stage Informaticien",
        company: "Easy Cash",
        location: "Dinan, France",
        dates: "2020",
        bullets: [
          "Gestion de la maintenance préventive et corrective d’une vingtaine d’ordinateurs.",
          "Installation et configuration de logiciels et systèmes d’exploitation.",
          "Diagnostic des pannes et mise en place de solutions adaptées.",
        ],
      },
    ],
  },
  education: {
    title: "Formation",
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
      "Je recherche actuellement une alternance en cybersécurité (M1–M2) à partir de septembre 2026. N’hésitez pas à me contacter !",
    email: "Envoyer un email",
    footer: "© {year} William Couedon. Tous droits réservés.",
  },
};
