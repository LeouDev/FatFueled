"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { Photo } from "@/data/images";

type Props = { photos: Photo[]; index: number | null; onChange: (index: number | null) => void };

/** Native <dialog> photo viewer: Esc closes, focus is trapped and restored by the browser. */
export function Lightbox({ photos, index, onChange }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const photo = index === null ? null : photos[index];

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (index !== null && !el.open) el.showModal();
    if (index === null && el.open) el.close();
  }, [index]);

  const step = (dir: number) => index !== null && onChange((index + dir + photos.length) % photos.length);
  const control = "grid size-12 place-items-center border border-white/25 bg-ink/60 backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-ink";

  return (
    <dialog
      ref={dialog}
      aria-label="Photo viewer"
      className="sheet bg-ink/95"
      onClose={() => onChange(null)}
      onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
      }}
    >
      {photo && index !== null && (
        <div className="pointer-events-none flex h-full flex-col px-4 pb-6 pt-20 sm:px-10">
          <div className="relative flex-1">
            <Image key={photo.src.src} src={photo.src} alt={photo.alt} fill sizes="100vw" placeholder="blur" className="object-contain" />
          </div>
          <div className="pointer-events-auto mt-5 flex items-center justify-between gap-4">
            <p className="text-sm text-white/70">
              <span className="eyebrow mr-3 tabular-nums text-accent">
                {index + 1} / {photos.length}
              </span>
              {photo.alt}
            </p>
            <div className="flex shrink-0 gap-2">
              <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className={control}>
                <ArrowLeft aria-hidden className="size-5" />
              </button>
              <button type="button" onClick={() => step(1)} aria-label="Next photo" className={control}>
                <ArrowRight aria-hidden className="size-5" />
              </button>
            </div>
          </div>
          <button
            type="button"
            autoFocus
            onClick={() => dialog.current?.close()}
            aria-label="Close photo viewer"
            className={`pointer-events-auto absolute right-4 top-4 sm:right-10 ${control}`}
          >
            <X aria-hidden className="size-5" />
          </button>
        </div>
      )}
    </dialog>
  );
}
