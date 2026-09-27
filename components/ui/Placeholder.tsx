import { PenLine } from "lucide-react";
import type { ReactNode } from "react";

/** Flags content still waiting on the client. Shown in `npm run dev` only, so the live site stays clean. */
export function Placeholder({ children, className = "" }: { children: ReactNode; className?: string }) {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <span
      title="Placeholder — replace before launch"
      className={`inline-flex items-center gap-1.5 border border-dashed border-accent/60 px-2 py-1 align-middle text-[11px] font-semibold uppercase tracking-[0.18em] text-accent ${className}`}
    >
      <PenLine aria-hidden className="size-3" />
      {children}
    </span>
  );
}
