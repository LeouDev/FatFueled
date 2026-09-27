"use client";

import { m } from "framer-motion";
import { method } from "@/data/content";
import { images } from "@/data/images";
import { Eyebrow } from "./ui/Eyebrow";
import { Photo } from "./ui/Photo";
import { Headline, Reveal, ease } from "./ui/motion";

const inView = { once: true, margin: "0px 0px -20% 0px" };
// One element serves as both lines: vertical on mobile, horizontal from lg. Scaling from the
// top-left corner "draws" whichever axis is long.
const line = "absolute left-[7px] top-2 bottom-2 w-px lg:inset-x-0 lg:top-[7px] lg:bottom-auto lg:h-px lg:w-auto";

export function Method({ index, className = "bg-ink-2" }: { index?: string; className?: string }) {
  return (
    <section aria-labelledby="method-title" className={`py-24 sm:py-32 lg:py-36 ${className}`}>
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-6">
            <Eyebrow index={index}>The Fat Fueled method</Eyebrow>
            <Headline
              id="method-title"
              className="headline mt-8 text-[clamp(3rem,15vw,6.5rem)] lg:text-[min(7vw,8.5rem)]"
              lines={["From", "training to", "performance."]}
            />
          </div>
          <Reveal className="lg:col-span-6">
            <figure className="relative">
              <Photo photo={images.testingFingertip} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[3/2]" />
              <figcaption className="eyebrow absolute bottom-4 left-4 bg-ink/70 px-2.5 py-1.5 text-white/80 backdrop-blur-sm">
                01 — Assess
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <ol className="relative mt-16 grid gap-12 pl-10 lg:mt-24 lg:grid-cols-4 lg:gap-10 lg:pl-0 lg:pt-14">
          <span aria-hidden className={`${line} bg-white/10`} />
          <m.span
            aria-hidden
            className={`${line} origin-top-left bg-accent`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={inView}
            transition={{ duration: 1.8, ease }}
          />
          {method.map((step, i) => (
            <m.li
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.9, ease, delay: 0.25 + i * 0.2 }}
            >
              <span aria-hidden className="absolute -left-10 top-0 grid size-[15px] place-items-center border border-accent bg-ink lg:-top-14 lg:left-0">
                <span className="size-[5px] bg-accent" />
              </span>
              <span className="eyebrow tabular-nums text-accent">{step.number}</span>
              <h3 className="headline mt-3 text-5xl sm:text-6xl">{step.title}</h3>
              <p className="mt-4 max-w-xs leading-relaxed text-white/70">{step.text}</p>
            </m.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
