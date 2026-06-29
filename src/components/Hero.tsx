"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useLanguage } from "@/i18n/useLanguage";
import { useSmoothScroll } from "@/lib/smooth-scroll";
import MatrixRain from "@/components/effects/MatrixRain";
import GlitchText from "@/components/effects/GlitchText";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HeroProps {
  loaded?: boolean;
}

export default function Hero({ loaded = false }: HeroProps) {
  const { t } = useLanguage();
  const { scrollTo } = useSmoothScroll();
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reducedMotion) {
        gsap.set(
          [promptRef.current, nameRef.current, subtitleRef.current, taglineRef.current, ctaRef.current, scrollRef.current],
          { opacity: 1 }
        );
        return;
      }

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: loaded ? 0.2 : 0 });

        tl.fromTo(
          promptRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3 }
        )
          .fromTo(
            ".hero-name-char",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, stagger: 0.03, duration: 0.5, ease: "power2.out" }
          )
          .fromTo(
            ".hero-subtitle-char",
            { opacity: 0 },
            { opacity: 1, stagger: 0.02, duration: 0.4 },
            "-=0.2"
          )
          .fromTo(
            taglineRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 },
            "-=0.2"
          )
          .fromTo(
            ".hero-cta",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
            "-=0.3"
          )
          .fromTo(
            scrollRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.6 },
            "-=0.2"
          );
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef, dependencies: [loaded, reducedMotion] }
  );

  const handleMagneticMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMagneticLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const nameChars = t.hero.name.split("");
  const subtitleChars = t.hero.subtitle.split("");

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <MatrixRain opacity={0.2} speed={0.8} density={0.9} className="absolute inset-0" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />

      <div className="relative z-10 w-full max-w-4xl">
        <div ref={promptRef} className="mb-4 font-mono text-sm text-dim opacity-0">
          <span className="text-matrix">$</span> whoami
        </div>

        <div ref={nameRef} className="mb-6 opacity-0">
          <GlitchText
            text={t.hero.name}
            intensity="medium"
            as="h1"
            className="sr-only"
          />
          <span
            className="text-5xl font-bold tracking-tight text-white md:text-7xl"
            aria-label={t.hero.name}
          >
            {nameChars.map((char, i) => (
              <span
                key={i}
                className="hero-name-char inline-block"
                style={{ opacity: reducedMotion ? 1 : 0 }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </div>

        <div ref={subtitleRef} className="mb-6 opacity-0">
          <span className="typing-text font-mono text-lg text-matrix md:text-xl">
            {subtitleChars.map((char, i) => (
              <span
                key={i}
                className="hero-subtitle-char inline-block"
                style={{ opacity: reducedMotion ? 1 : 0 }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </div>

        <p
          ref={taglineRef}
          className="mb-10 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base opacity-0"
        >
          {t.hero.tagline}
        </p>

        <div ref={ctaRef} className="flex flex-col items-start gap-4 sm:flex-row">
          <button
            onClick={() => scrollTo("#projects")}
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            className="hero-cta group relative overflow-hidden rounded border border-matrix/50 bg-matrix/10 px-6 py-3 font-mono text-sm text-matrix transition-all hover:bg-matrix/20 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]"
          >
            <span className="relative z-10">{"> ls ./projects"}</span>
            <span className="absolute inset-0 -translate-x-full bg-matrix/10 transition-transform duration-300 group-hover:translate-x-0" />
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            className="hero-cta group relative overflow-hidden rounded border border-matrix/30 px-6 py-3 font-mono text-sm text-dim transition-all hover:border-matrix/50 hover:text-matrix"
          >
            <span className="relative z-10">{"> ssh contact@william"}</span>
            <span className="absolute inset-0 -translate-x-full bg-matrix/5 transition-transform duration-300 group-hover:translate-x-0" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0"
      >
        <button
          onClick={() => scrollTo("#about")}
          className="group flex flex-col items-center gap-2 font-mono text-xs text-dim transition-colors hover:text-matrix"
        >
          <span>[{t.hero.scroll_down}]</span>
          <span className="h-8 w-5 rounded-full border border-matrix/30 p-1">
            <span className="block h-1.5 w-1.5 animate-bounce rounded-full bg-matrix" />
          </span>
        </button>
      </div>
    </section>
  );
}
