"use client";

import { useEffect, useState } from "react";
import MatrixRain from "./MatrixRain";
import GlitchText from "./GlitchText";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface PreloaderProps {
  onComplete?: () => void;
}

function getInitialShow() {
  if (typeof window === "undefined") return false;
  return !sessionStorage.getItem("portfolio-visited");
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [show, setShow] = useState(getInitialShow);
  const [exiting, setExiting] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!show) {
      onComplete?.();
      return;
    }

    sessionStorage.setItem("portfolio-visited", "true");

    const timer = setTimeout(
      () => {
        setExiting(true);
        setTimeout(() => {
          setShow(false);
          onComplete?.();
        }, 800);
      },
      reducedMotion ? 200 : 2200
    );

    return () => clearTimeout(timer);
  }, [show, onComplete, reducedMotion]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[10001] flex items-center justify-center bg-black transition-opacity duration-700 ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <MatrixRain opacity={0.5} speed={1.2} density={1.2} />
      <div className="relative z-10 text-center">
        <GlitchText
          text="William Couedon"
          intensity="strong"
          as="h1"
          className="text-4xl font-bold tracking-tight text-white md:text-6xl"
        />
        <p className="mt-4 font-mono text-sm text-dim">
          <span className="text-matrix">$</span> initializing_system
        </p>
      </div>
    </div>
  );
}
