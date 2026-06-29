"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MatrixRainProps {
  opacity?: number;
  speed?: number;
  density?: number;
  className?: string;
}

const CHARS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function MatrixRain({
  opacity = 0.35,
  speed = 1,
  density = 1,
  className = "",
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let lastTime = 0;
    let isVisible = true;
    let frameSkip = 0;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const targetFps = isTouch ? 30 : 60;
    const frameInterval = 1000 / targetFps;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, isTouch ? 1.5 : 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();

    const fontSize = isTouch ? 14 : 16;
    let columns = Math.floor(window.innerWidth / fontSize);
    columns = Math.max(10, Math.floor(columns * density));

    const drops: number[] = Array(columns).fill(1);

    const draw = (time: number) => {
      animationId = requestAnimationFrame(draw);

      if (!isVisible) return;

      if (reducedMotion) {
        if (lastTime === 0) {
          ctx.fillStyle = "rgba(0, 0, 0, 1)";
          ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
          ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
          ctx.font = `${fontSize}px var(--font-mono), ui-monospace, monospace`;
          for (let i = 0; i < drops.length; i++) {
            const text = CHARS[Math.floor(Math.random() * CHARS.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          }
          isVisible = false;
        }
        return;
      }

      const delta = time - lastTime;
      if (delta < frameInterval) return;
      lastTime = time - (delta % frameInterval);

      frameSkip = (frameSkip + 1) % (isTouch ? 2 : 1);
      if (frameSkip !== 0) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
      ctx.font = `${fontSize}px var(--font-mono), ui-monospace, monospace`;

      const gradient = ctx.createLinearGradient(
        0,
        window.innerHeight * 0.7,
        0,
        window.innerHeight
      );
      gradient.addColorStop(0, `rgba(0, 255, 65, ${opacity})`);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      for (let i = 0; i < drops.length; i++) {
        const text = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle =
          y > window.innerHeight * 0.7
            ? gradient
            : `rgba(0, 255, 65, ${opacity})`;
        ctx.fillText(text, x, y);

        if (y > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += speed * (isTouch ? 0.7 : 1);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const handleResize = () => {
      resize();
      const newColumns = Math.max(
        10,
        Math.floor(Math.floor(window.innerWidth / fontSize) * density)
      );
      drops.length = newColumns;
      for (let i = 0; i < newColumns; i++) {
        if (drops[i] === undefined) drops[i] = Math.random() * -50;
      }
    };
    window.addEventListener("resize", handleResize);

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [opacity, speed, density, reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
