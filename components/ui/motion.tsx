"use client";

import { LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";
import type { ReactNode } from "react";

export const ease = [0.16, 1, 0.3, 1] as const;

/** On a fresh page load, hold on-mount reveals until the CSS loader (~1s) has faded. */
export const introDelay = () =>
  typeof performance === "undefined" ? 0 : Math.max(0, 1 - performance.now() / 1000);

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

type RevealProps = { children: ReactNode; className?: string; delay?: number; y?: number };

export function Reveal({ children, className, delay = 0, y = 36 }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1, ease, delay }}
    >
      {children}
    </m.div>
  );
}

type HeadlineProps = {
  /** One entry per line. A trailing "." is set in the accent colour. */
  lines: string[];
  /** Indexes of lines rendered as outlined type. */
  outline?: number[];
  as?: "h1" | "h2";
  id?: string;
  className?: string;
  delay?: number;
  /** Animate immediately (page heroes) instead of when scrolled into view. */
  onMount?: boolean;
};

/** Big display headline whose lines slide up one after another. */
export function Headline({ lines, outline = [], as = "h2", id, className, delay = 0, onMount = false }: HeadlineProps) {
  const Tag = as === "h1" ? m.h1 : m.h2;
  const trigger = onMount
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } };

  return (
    <Tag
      id={id}
      className={className}
      initial="hidden"
      {...trigger}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.09, delayChildren: onMount ? delay + introDelay() : delay } },
      }}
    >
      {lines.map((line, i) => {
        const dot = line.endsWith(".");
        return (
          <span key={i} className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
            {i > 0 && " "}
            <m.span
              className="block"
              variants={{ hidden: { y: "110%" }, show: { y: "0%", transition: { duration: 1.1, ease } } }}
            >
              <span className={outline.includes(i) ? "text-outline" : undefined}>{dot ? line.slice(0, -1) : line}</span>
              {dot && <span className="text-accent">.</span>}
            </m.span>
          </span>
        );
      })}
    </Tag>
  );
}
