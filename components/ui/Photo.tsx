import Image from "next/image";
import type { Photo as PhotoData } from "@/data/images";

type Props = {
  photo?: PhotoData;
  /** Rendered width hint for responsive srcset, e.g. "(min-width: 1024px) 33vw, 100vw". */
  sizes: string;
  /** Wrapper classes — the wrapper must be sized (aspect ratio, height or absolute inset). */
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

/** Cropped, lazy-loaded photo with a blur-up placeholder. A missing photo renders an on-brand empty state. */
export function Photo({ photo, sizes, className = "", imgClassName = "", priority = false }: Props) {
  return (
    <div className={`${/\b(absolute|fixed)\b/.test(className) ? "" : "relative"} overflow-hidden bg-ink-3 ${className}`}>
      {photo ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          placeholder="blur"
          loading={priority ? "eager" : undefined}
          fetchPriority={priority ? "high" : undefined}
          className={`object-cover ${imgClassName}`}
          style={photo.position ? { objectPosition: photo.position } : undefined}
        />
      ) : (
        <div className="eyebrow absolute inset-0 grid place-items-center border border-dashed border-white/15 text-white/55">
          Image placeholder
        </div>
      )}
    </div>
  );
}
