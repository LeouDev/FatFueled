import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "outline";
type Size = "md" | "sm";

// `className` is for layout (margins, width, backdrop); use `size` rather than overriding height/padding,
// since two Tailwind utilities for the same property don't reliably override each other.
export const buttonClass = (variant: Variant = "primary", className = "", size: Size = "md") =>
  `group inline-flex items-center justify-center gap-3 whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
    size === "md" ? "min-h-13 px-7" : "min-h-11 px-5"
  } ${
    variant === "primary"
      ? "bg-navy text-white ring-1 ring-inset ring-white/15 hover:bg-white hover:text-navy hover:ring-white"
      : "border border-white/35 text-white hover:border-white hover:bg-white hover:text-navy"
  } ${className}`;

export function ButtonArrow() {
  return (
    <ArrowRight aria-hidden className="size-4 shrink-0 transition-transform duration-300 ease-expo group-hover:translate-x-1" />
  );
}

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
};

export function ButtonLink({ href, children, variant, size, className, onClick }: Props) {
  const cls = buttonClass(variant, className, size);

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
        <ButtonArrow />
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
      <ButtonArrow />
    </Link>
  );
}
