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
      "My personal portfolio with a modern editorial aesthetic. Features a warm-light palette, Fraunces/Inter type pairing, GSAP scroll reveals, Lenis smooth scrolling, a refined custom cursor, an infinite skills marquee, and bilingual FR/EN support.",
    descriptionFr:
      "Mon portfolio personnel avec une esthétique éditoriale moderne. Inclut une palette chaude, un duo typographique Fraunces/Inter, révélations GSAP au scroll, défilement fluide Lenis, curseur personnalisé affiné, marquee infini des compétences et support bilingue FR/EN.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Lenis", "Framer Motion"],
    github: "https://github.com/Falkior/portfolio",
    featured: true,
  },
];
