"use client";

import { useState } from "react";
import { LanguageProvider } from "@/i18n/useLanguage";
import { SmoothScrollProvider } from "@/lib/smooth-scroll";
import CustomCursor from "@/components/effects/CustomCursor";
import Preloader from "@/components/effects/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <CustomCursor />
        <Preloader onComplete={() => setLoaded(true)} />
        <Navbar />
        <main>
          <Hero loaded={loaded} />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </main>
      </SmoothScrollProvider>
    </LanguageProvider>
  );
}
