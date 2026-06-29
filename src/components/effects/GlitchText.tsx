"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GlitchTextProps {
  text: string;
  intensity?: "subtle" | "medium" | "strong";
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export default function GlitchText({
  text,
  intensity = "medium",
  className = "",
  as: Tag = "span",
}: GlitchTextProps) {
  const reducedMotion = useReducedMotion();

  const intensityClass = {
    subtle: "",
    medium: "glitch-text",
    strong: "glitch-text",
  }[intensity];

  return (
    <Tag
      className={`${intensityClass} ${reducedMotion ? "" : ""} ${className}`}
      data-text={text}
    >
      {text}
    </Tag>
  );
}
