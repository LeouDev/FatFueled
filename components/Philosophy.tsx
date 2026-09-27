"use client";

import { useRef } from "react";
import { m, useScroll } from "framer-motion";
import { philosophy } from "@/data/content";
import { images } from "@/data/images";
import { Eyebrow } from "./ui/Eyebrow";
import { Photo } from "./ui/Photo";
import { Headline, Reveal } from "./ui/motion";

export function Philosophy() {
  const list = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 70%", "end 55%"] });

  return (
    <section aria-labelledby="process-title" className="py-24 sm:py-32 lg:py-36">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Eyebrow index="03">Philosophy</Eyebrow>
            <Headline
              id="process-title"
              className="headline mt-8 text-[clamp(3.5rem,15vw,6.5rem)] lg:text-[min(7.4vw,9rem)]"
              lines={["The process", "matters."]}
            />
            <Reveal>
              <p className="mt-8 max-w-sm text-lg leading-relaxed text-white/75">Big performances are built long before race day.</p>
            </Reveal>
            <Reveal className="mt-12 hidden lg:block">
              <Photo photo={images.nightRun} sizes="30vw" className="aspect-[4/5] max-w-sm" />
            </Reveal>
          </div>
        </div>

        <ol ref={list} className="relative lg:col-span-7">
          <span aria-hidden className="absolute inset-y-0 left-0 w-px bg-white/10" />
          <m.span aria-hidden style={{ scaleY: scrollYProgress }} className="absolute inset-y-0 left-0 w-px origin-top bg-accent" />
          {philosophy.map((step) => (
            <li key={step.title} className="relative border-b border-white/10 py-12 pl-8 last:border-0 sm:pl-14 lg:py-16">
              <span aria-hidden className="absolute -left-1 top-[3.35rem] size-[9px] bg-accent lg:top-[4.35rem]" />
              <span className="eyebrow tabular-nums text-white/55">{step.number}</span>
              <m.h3
                className="headline text-outline mt-4 text-[clamp(3.5rem,16vw,7rem)] lg:text-[min(8vw,9.5rem)]"
                initial={{ color: "rgba(255,255,255,0)" }}
                whileInView={{ color: "rgba(255,255,255,1)" }}
                viewport={{ once: true, margin: "0px 0px -35% 0px" }}
                transition={{ duration: 0.9 }}
              >
                {step.title}
              </m.h3>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
