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

export const projects: Project[] = [];
