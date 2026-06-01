"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/useLanguage";

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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 shadow-lg shadow-cyan-500/5 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-lg font-bold text-cyan-400 transition-colors hover:text-cyan-300"
        >
          {"<WC />"}
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`font-mono text-sm transition-colors ${
                active === id
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-cyan-300"
              }`}
            >
              {t.nav[id as keyof typeof t.nav]}
            </button>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="rounded border border-cyan-500/30 px-3 py-1 font-mono text-xs text-cyan-400 transition-all hover:border-cyan-400 hover:bg-cyan-400/10"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="rounded border border-cyan-500/30 px-3 py-1 font-mono text-xs text-cyan-400"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-cyan-400 transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-cyan-400 transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-cyan-400 transition-transform ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-cyan-500/10 bg-[#0a0a0f]/95 backdrop-blur-md md:hidden">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`block w-full px-6 py-3 text-left font-mono text-sm transition-colors ${
                active === id
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-cyan-300"
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
