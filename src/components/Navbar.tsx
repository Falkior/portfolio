"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/useLanguage";
import { useSmoothScroll } from "@/lib/smooth-scroll";

const sections = [
  "about",
  "skills",
  "experience",
  "education",
  "certifications",
  "projects",
  "contact",
] as const;

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { scrollTo } = useSmoothScroll();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktopMedia = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    desktopMedia.addEventListener("change", closeOnDesktop);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      desktopMedia.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        return { id, top: el ? el.offsetTop - 120 : Infinity };
      });
      const current = offsets.filter((s) => window.scrollY >= s.top).pop();
      setActive(current?.id ?? "");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id: string) => {
    scrollTo(`#${id}`);
    setMenuOpen(false);
  };

  const handleTop = () => {
    scrollTo(0);
    setMenuOpen(false);
  };

  return (
    <nav
      aria-label={t.nav.navigation}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <button
          onClick={handleTop}
          className="font-display text-xl tracking-tight text-ink transition-opacity hover:opacity-70"
        >
          William Couedon
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              aria-current={active === id ? "location" : undefined}
              className={`group relative font-mono text-sm transition-colors ${
                active === id
                  ? "text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              {t.nav[id as keyof typeof t.nav]}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-accent transition-all ${
                  active === id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            aria-label={lang === "fr" ? t.nav.switch_to_english : t.nav.switch_to_french}
            className="font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            aria-label={lang === "fr" ? t.nav.switch_to_english : t.nav.switch_to_french}
            className="font-mono text-xs text-muted"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
          <button
            ref={menuButtonRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5"
            aria-label={menuOpen ? t.nav.close_menu : t.nav.open_menu}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span
              className={`block h-px w-6 bg-ink transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-transform ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        hidden={!menuOpen}
        className="border-t border-line bg-bg/95 backdrop-blur-md lg:hidden"
      >
        {sections.map((id) => (
          <button
            key={id}
            onClick={() => handleScroll(id)}
            aria-current={active === id ? "location" : undefined}
            className={`block w-full px-6 py-3 text-left font-mono text-sm transition-colors ${
              active === id
                ? "text-accent"
                : "text-muted hover:text-ink"
            }`}
          >
            {t.nav[id as keyof typeof t.nav]}
          </button>
        ))}
      </div>
    </nav>
  );
}
