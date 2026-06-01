export interface Project {
  id: string;
  title: string;
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
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "My personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features a dark cyber-themed design, bilingual EN/FR support, scroll animations with Framer Motion, and a responsive layout.",
    descriptionFr:
      "Mon portfolio personnel construit avec Next.js, TypeScript et Tailwind CSS. Design sombre sur le thème cyber, support bilingue EN/FR, animations au scroll avec Framer Motion et mise en page responsive.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Falkior/portfolio",
    featured: true,
  },
];
