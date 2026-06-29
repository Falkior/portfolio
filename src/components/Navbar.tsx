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
          ? "bg-black/90 shadow-lg shadow-matrix/5 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={handleTop}
          className="group font-mono text-lg font-bold text-matrix transition-colors hover:text-matrix/80"
        >
          ~/william{" "}
          <span className="inline-block animate-pulse text-dim">$</span>
          <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-matrix align-middle" />
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className={`group font-mono text-sm transition-colors ${
                active === id
                  ? "text-matrix"
                  : "text-dim hover:text-matrix"
              }`}
            >
              <span className="inline-block w-0 overflow-hidden text-matrix transition-all group-hover:w-3">
                {"> "}
              </span>
              {t.nav[id as keyof typeof t.nav]}
            </button>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="rounded border border-matrix/30 px-3 py-1 font-mono text-xs text-matrix transition-all hover:border-matrix hover:bg-matrix/10"
          >
            {lang === "en" ? "[FR]" : "[EN]"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="rounded border border-matrix/30 px-3 py-1 font-mono text-xs text-matrix"
          >
            {lang === "en" ? "[FR]" : "[EN]"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-matrix transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-matrix transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-matrix transition-transform ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-matrix/10 bg-black/95 backdrop-blur-md md:hidden">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className={`block w-full px-6 py-3 text-left font-mono text-sm transition-colors ${
                active === id
                  ? "text-matrix"
                  : "text-dim hover:text-matrix"
              }`}
            >
              <span className="text-matrix">{"> "}</span>
              {t.nav[id as keyof typeof t.nav]}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
