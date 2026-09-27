import type { ReactNode } from "react";

export function Eyebrow({ children, index, className = "" }: { children: ReactNode; index?: string; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-3 text-accent ${className}`}>
      <span aria-hidden className="h-px w-8 bg-accent" />
      {index && <span className="tabular-nums text-white/55">{index}</span>}
      {children}
    </p>
  );
}
