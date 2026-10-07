"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [show, setShow] = useState(true);
  const firstVisitRef = useRef<boolean | null>(null);
  const [exiting, setExiting] = useState(false);
  const [counter, setCounter] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!show) {
      onComplete?.();
      return;
    }

    if (firstVisitRef.current === null) {
      try {
        firstVisitRef.current = !sessionStorage.getItem("portfolio-visited");
        if (firstVisitRef.current) {
          sessionStorage.setItem("portfolio-visited", "true");
        }
      } catch {
        firstVisitRef.current = true;
      }
    }

    if (!firstVisitRef.current) {
      const skipTimer = setTimeout(() => setShow(false), 0);
      return () => clearTimeout(skipTimer);
    }

    const duration = reducedMotion ? 200 : 2200;
    const steps = 60;
    const interval = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += 100 / steps;
      setCounter(Math.min(Math.round(current), 100));
    }, interval);

    const exitTimer = setTimeout(
      () => {
        setExiting(true);
        setTimeout(() => {
          setShow(false);
          onComplete?.();
        }, 700);
      },
      reducedMotion ? 200 : 2200
    );

    return () => {
      clearInterval(timer);
      clearTimeout(exitTimer);
    };
  }, [show, onComplete, reducedMotion]);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[10001] flex flex-col items-center justify-center bg-bg transition-opacity duration-700 ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <p className="font-display text-4xl tracking-tight text-ink md:text-6xl">
          William Couedon
        </p>
        <p className="mt-6 font-mono text-sm text-muted">
          {String(counter).padStart(3, "0")}
        </p>
      </div>
    </div>
  );
}
