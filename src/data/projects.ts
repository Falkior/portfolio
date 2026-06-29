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
      "My personal portfolio with a Matrix/hacker aesthetic. Features a falling Matrix rain canvas, GSAP-powered scroll animations, Lenis smooth scrolling, terminal-style UI, glitch effects, custom cursor, CRT scanlines, and bilingual FR/EN support.",
    descriptionFr:
      "Mon portfolio personnel avec une esthétique Matrix/hacker. Inclut une pluie de caractères Matrix en canvas, animations GSAP au scroll, défilement fluide Lenis, interface style terminal, effets glitch, curseur personnalisé, scanlines CRT et support bilingue FR/EN.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Lenis", "Framer Motion"],
    github: "https://github.com/Falkior/portfolio",
    featured: true,
  },
];
