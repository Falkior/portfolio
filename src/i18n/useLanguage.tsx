"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { en, type Translations } from "./en";
import { fr } from "./fr";

type Lang = "en" | "fr";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const translations: Record<Lang, Translations> = { en, fr };

function getStoredLang(): Lang {
  try {
    const saved = localStorage.getItem("portfolio-lang");
    return saved === "en" ? "en" : "fr";
  } catch {
    return "fr";
  }
}

function getServerLang(): Lang {
  return "fr";
}

function subscribeToLanguage(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === "portfolio-lang" || event.key === null) callback();
  };
  window.addEventListener("storage", onStorage);
  return () => window.removeEventListener("storage", onStorage);
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "fr",
  setLang: () => {},
  t: fr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const storedLang = useSyncExternalStore(
    subscribeToLanguage,
    getStoredLang,
    getServerLang
  );
  const [selectedLang, setLangState] = useState<Lang | null>(null);
  const lang = selectedLang ?? storedLang;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("portfolio-lang", l);
    } catch {
      // The language switch still works when browser storage is unavailable.
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
