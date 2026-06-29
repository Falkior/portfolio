"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useLanguage } from "@/i18n/useLanguage";
import { useSmoothScroll } from "@/lib/smooth-scroll";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HeroProps {
  loaded?: boolean;
}

export default function Hero({ loaded = false }: HeroProps) {
  const { t } = useLanguage();
  const { scrollTo } = useSmoothScroll();
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const greetingRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reducedMotion) {
        gsap.set(
          [greetingRef.current, nameRef.current, roleRef.current, taglineRef.current, ctaRef.current, scrollRef.current],
          { opacity: 1 }
        );
        return;
      }

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: loaded ? 0.2 : 0 });

        tl.fromTo(
          greetingRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        )
          .fromTo(
            ".hero-name-char",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, stagger: 0.025, duration: 0.7, ease: "power3.out" },
            "-=0.35"
          )
          .fromTo(
            roleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "-=0.4"
          )
          .fromTo(
            taglineRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "-=0.35"
          )
          .fromTo(
            ".hero-cta",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" },
            "-=0.3"
          )
          .fromTo(
            scrollRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.6, ease: "power2.out" },
            "-=0.2"
          );
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef, dependencies: [loaded, reducedMotion] }
  );

  const nameChars = t.hero.name.split("");

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center px-6 md:px-12 lg:px-24"
    >
      <div className="relative z-10 w-full max-w-6xl pt-20">
        <span
          ref={greetingRef}
          className="eyebrow mb-6 block opacity-0"
        >
          {t.hero.greeting}
        </span>

        <h1 ref={nameRef} className="hero-name mb-8" aria-label={t.hero.name}>
          {nameChars.map((char, i) => (
            <span
              key={i}
              className="hero-name-char inline-block"
              style={{ opacity: reducedMotion ? 1 : 0 }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p
          ref={roleRef}
          className="mb-6 max-w-2xl font-mono text-lg text-muted opacity-0 md:text-xl"
        >
          {t.hero.subtitle}
        </p>

        <p
          ref={taglineRef}
          className="mb-12 max-w-xl text-base leading-relaxed text-ink/80 opacity-0 md:text-lg"
        >
          {t.hero.tagline}
        </p>

        <div ref={ctaRef} className="flex flex-wrap items-center gap-8 opacity-0">
          <button
            onClick={() => scrollTo("#projects")}
            className="hero-cta link-wipe-static font-mono text-sm"
          >
            {t.hero.cta_work}
            <span aria-hidden="true">↓</span>
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="hero-cta link-wipe font-mono text-sm text-muted hover:text-ink"
          >
            {t.hero.cta_contact}
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0"
      >
        <button
          onClick={() => scrollTo("#about")}
          className="group flex flex-col items-center gap-2 text-muted transition-colors hover:text-ink"
          aria-label={t.hero.scroll_down}
        >
          <span className="h-8 w-5 rounded-full border border-line p-1">
            <span className="block h-1.5 w-1.5 animate-bounce rounded-full bg-ink" />
          </span>
        </button>
      </div>
    </section>
  );
}
