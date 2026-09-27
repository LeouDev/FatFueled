"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { ButtonLink } from "./ui/Button";

/** Mobile-only "Start Training" bar: appears after the hero, gets out of the way near the end of the page. */
export function StickyCTA() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const footer = document.querySelector("footer")?.offsetHeight ?? 0;
      const end = document.documentElement.scrollHeight - footer - vh * 1.5;
      setShow(window.scrollY > vh * 0.8 && window.scrollY < end);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  if (pathname === site.cta.href) return null;

  return (
    <div
      inert={!show}
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-[translate,opacity] duration-500 ease-expo lg:hidden ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <ButtonLink href={site.cta.href} className="w-full shadow-[0_10px_40px_rgb(0_0_0/0.6)]">
        {site.cta.label}
      </ButtonLink>
    </div>
  );
}
