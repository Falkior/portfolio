# William Couedon — Portfolio

Personal portfolio website showcasing my experience in **Cybersecurity**, **IT Administration**, and **Full-stack Development**.

**[Live Site](https://portfolio-nine-fawn-56.vercel.app/)**

## About

I'm a cybersecurity student at Ynov Campus Rennes, currently seeking a **Master-level alternance (M1–M2)** starting September 2026. This portfolio highlights my professional experience, technical skills, and projects across IT security and software engineering.

## Built With

- **Next.js 16** — React framework with App Router and static generation
- **React 19** — UI library
- **TypeScript** — End-to-end type safety
- **Tailwind CSS v4** — Utility-first styling with a custom Matrix/hacker theme
- **GSAP + ScrollTrigger** — High-performance scroll and entrance animations
- **Lenis** — Smooth inertia scrolling
- **Framer Motion** — Mobile menu exit animations

## Features

- **Single-page design** — Smooth-scrolling sections: Hero, About, Skills, Experience, Education, Projects, Contact
- **Bilingual (FR/EN)** — French by default with full English translation toggle and localStorage persistence
- **Responsive** — Mobile-first layout with adaptive navigation
- **Matrix/hacker UI** — True black background, neon green (#00ff41) accents, Matrix rain canvas, CRT scanlines, film grain, and vignette effects
- **Terminal-style sections** — Command-prompt aesthetics, terminal windows, progress bars, and monospace typography
- **Custom cursor** — Dot + ring follower on pointer devices
- **Glitch text** — Periodic glitch effect on the name
- **Preloader** — Matrix rain loading screen on first visit
- **Reduced motion support** — Static fallbacks when `prefers-reduced-motion` is enabled
- **Data-driven projects** — Add new projects by editing a single TypeScript file

## Project Structure

```
src/
├── app/                # Next.js App Router (layout, page, styles)
├── components/         # React components for each section
│   └── effects/        # MatrixRain, CustomCursor, GlitchText, TerminalWindow, Preloader
├── data/               # Project entries (projects.ts)
├── hooks/              # Shared React hooks (useReducedMotion)
├── i18n/               # Translations (en.ts, fr.ts) and language context
└── lib/                # GSAP setup and Lenis smooth-scroll provider
```

## Adding Projects

Edit `src/data/projects.ts` and add an entry to the array:

```typescript
{
  id: "my-project",
  title: "My Project",
  description: "What it does.",
  descriptionFr: "Ce que ça fait.",
  tags: ["Python", "Cybersecurity"],
  github: "https://github.com/Falkior/my-project",
}
```

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact

- **Email:** william.couedon@gmail.com
- **LinkedIn:** [linkedin.com/in/william-couedon](https://linkedin.com/in/william-couedon)
- **GitHub:** [github.com/Falkior](https://github.com/Falkior)
