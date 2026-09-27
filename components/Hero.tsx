"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { disciplines } from "@/data/disciplines";
import { ButtonLink } from "./ui/Button";
import { Headline, ease, introDelay } from "./ui/motion";

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loadAll, setLoadAll] = useState(false);
  const [delay] = useState(introDelay);
  const reduceMotion = useReducedMotion();

  // Only the first slide competes with the page load; the rest mount once the intro has played.
  useEffect(() => {
    const t = setTimeout(() => setLoadAll(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const select = (i: number) => {
    setLoadAll(true);
    setActive(i);
  };
  // Each slide's progress bar is the timer: when its CSS animation ends, advance.
  const advance = () => {
    if (!reduceMotion) setActive((i) => (i + 1) % disciplines.length);
  };

  const fadeUp = (at: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease, delay: delay + at },
  });

  return (
    <section
      aria-label="Fat Fueled — endurance coaching"
      className={`relative isolate flex min-h-svh items-end overflow-hidden bg-ink ${paused ? "hero-paused" : ""}`}
    >
      {/* The loader's fade-out reveals the photo; the settle runs in CSS so it doesn't wait on hydration (LCP). */}
      <div aria-hidden className="hero-zoom absolute inset-0 -z-10">
        {disciplines.map(
          (d, i) =>
            (i === 0 || loadAll) && (
              <div key={d.slug} className="hero-slide absolute inset-0" data-active={i === active}>
                <Image
                  src={d.hero.src}
                  alt={d.hero.alt}
                  fill
                  sizes="100vw"
                  placeholder="blur"
                  loading={i === 0 ? "eager" : undefined}
                  fetchPriority={i === 0 ? "high" : undefined}
                  className="object-cover"
                  style={{ objectPosition: d.hero.position }}
                />
              </div>
            ),
        )}
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/35 to-ink/10" />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-44 bg-linear-to-b from-black/70 to-transparent" />
      <div aria-hidden className="absolute inset-0 -z-10 hidden bg-linear-to-r from-black/55 via-black/10 to-transparent lg:block" />
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      <div className="shell pb-6 pt-28 sm:pb-8 lg:pb-10">
        <Headline
          as="h1"
          onMount
          delay={0.1}
          className="headline text-[min(19.5vw,15rem)] sm:text-[min(15vw,22vh)] lg:text-[min(11.5vw,20vh,15rem)]"
          lines={["Fueled", "To go", "Further."]}
        />

        <div className="mt-6 flex flex-col gap-6 sm:mt-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <m.p {...fadeUp(0.55)} className="max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
            Endurance coaching for triathlon, cycling, running, and swimming.
          </m.p>
          <m.div {...fadeUp(0.7)} className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Start your journey</ButtonLink>
            <ButtonLink href="/coaching" variant="outline" className="bg-black/20 backdrop-blur-sm">
              Explore coaching
            </ButtonLink>
          </m.div>
        </div>

        <m.div {...fadeUp(0.9)} className="mt-10 flex items-end gap-4 sm:mt-14">
          <ul className="grid flex-1 grid-cols-4 gap-2 sm:gap-5 lg:max-w-3xl">
            {disciplines.map((d, i) => (
              <li key={d.slug}>
                <button
                  type="button"
                  onClick={() => select(i)}
                  aria-pressed={i === active}
                  className="group block w-full py-2 text-left"
                >
                  <span className="block h-0.5 overflow-hidden bg-white/20">
                    <span
                      key={i === active ? `on-${active}` : "off"}
                      onAnimationEnd={i === active ? advance : undefined}
                      className={`block h-full origin-left bg-accent ${
                        i === active ? "hero-progress" : i < active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </span>
                  <span className="mt-3 flex items-baseline gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] sm:text-xs sm:tracking-[0.2em]">
                    <span className="hidden tabular-nums text-white/55 sm:inline">{d.number}</span>
                    {/* Phones show only the active name; the others stay readable to screen readers. */}
                    <span className={`whitespace-nowrap transition-colors duration-500 ${i === active ? "text-white" : "text-white/55 group-hover:text-white/80 max-sm:sr-only"}`}>
                      {d.title}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            className="mb-1 grid size-10 shrink-0 place-items-center border border-white/25 text-white/80 transition-colors hover:border-white hover:text-white"
          >
            {paused ? <Play aria-hidden className="size-4" /> : <Pause aria-hidden className="size-4" />}
          </button>
          <div aria-hidden className="eyebrow mb-2 ml-6 hidden items-center gap-3 text-white/55 lg:flex">
            Scroll
            <span className="block h-10 w-px overflow-hidden bg-white/20">
              <span className="scroll-hint block h-1/2 w-full bg-accent" />
            </span>
          </div>
        </m.div>
      </div>
    </section>
  );
}
