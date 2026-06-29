"use client";

import type { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({
  title,
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div
      className={`group overflow-hidden rounded-lg border border-matrix/20 bg-black/80 backdrop-blur-sm transition-all hover:border-matrix/40 hover:shadow-[0_0_30px_rgba(0,255,65,0.08)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-matrix/10 bg-white/[0.02] px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-matrix/80" />
        <span className="ml-2 font-mono text-xs text-dim">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm text-gray-300">{children}</div>
    </div>
  );
}
