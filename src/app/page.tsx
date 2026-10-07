"use client";

import { useCallback, useState } from "react";
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
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useCallback(() => setLoaded(true), []);

  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <CustomCursor />
        <Preloader onComplete={handleLoaded} />
        <Navbar />
        <main>
          <Hero loaded={loaded} />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Certifications />
          <Projects />
          <Contact />
        </main>
      </SmoothScrollProvider>
    </LanguageProvider>
  );
}
