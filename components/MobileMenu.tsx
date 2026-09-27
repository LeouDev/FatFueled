"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type CSSProperties } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { Logo } from "./Logo";
import { ButtonLink } from "./ui/Button";
import { InstagramIcon } from "./ui/InstagramIcon";

/** Full-screen menu on a native <dialog>: focus trap, Esc-to-close and inert page for free. */
export function MobileMenu() {
  const dialog = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const close = () => dialog.current?.close();

  useEffect(() => {
    dialog.current?.close();
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        aria-label="Open menu"
        aria-haspopup="dialog"
        className="-mr-2 grid size-12 place-items-center lg:hidden"
      >
        <Menu aria-hidden className="size-7" />
      </button>

      <dialog ref={dialog} aria-label="Menu" className="sheet lg:hidden">
        <div className="flex h-full flex-col">
          <div className="shell flex h-16 shrink-0 items-center justify-between">
            <Link href="/" onClick={close} aria-label="Fat Fueled home">
              <Logo width={72} className="h-10 w-auto" />
            </Link>
            <button type="button" onClick={close} aria-label="Close menu" className="-mr-2 grid size-12 place-items-center">
              <X aria-hidden className="size-7" />
            </button>
          </div>

          <nav aria-label="Mobile" className="shell flex flex-1 flex-col justify-center py-8">
            <ul>
              {site.nav.map((item, i) => (
                <li key={item.href} className="sheet-item border-b border-white/10" style={{ "--i": i } as CSSProperties}>
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="headline flex items-baseline justify-between py-3 text-[clamp(2.75rem,13vw,4.5rem)] aria-[current=page]:text-accent"
                  >
                    {item.label}
                    <span className="eyebrow tabular-nums text-white/55">0{i + 1}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shell sheet-item flex flex-col gap-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]" style={{ "--i": site.nav.length } as CSSProperties}>
            <ButtonLink href={site.cta.href} onClick={close} className="w-full">
              {site.cta.label}
            </ButtonLink>
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="eyebrow flex items-center justify-center gap-2 py-2 text-white/70">
              <InstagramIcon className="size-4" /> {site.instagram.handle}
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
