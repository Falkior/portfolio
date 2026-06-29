"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/useLanguage";
import { useSmoothScroll } from "@/lib/smooth-scroll";

const sections = [
  "about",
  "skills",
  "experience",
  "education",
  "projects",
  "contact",
] as const;

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { scrollTo } = useSmoothScroll();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="hidden items-center gap-8 md:flex">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
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
            className="font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="font-mono text-xs text-muted"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5"
            aria-label="Toggle menu"
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
      {menuOpen && (
        <div className="border-t border-line bg-bg/95 backdrop-blur-md md:hidden">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
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
      )}
    </nav>
  );
}
