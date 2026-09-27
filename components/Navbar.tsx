"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { currentAttr, site } from "@/data/site";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { ButtonLink } from "./ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [inDisciplines, setInDisciplines] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // "Disciplines" is a homepage section, not a page: it's current while the section crosses mid-screen.
  useEffect(() => {
    const section = document.getElementById("disciplines");
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setInDisciplines(entry.isIntersecting), {
      rootMargin: "-45% 0px -45% 0px",
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, [pathname]);

  const activeHref = pathname === "/" && inDisciplines ? "/#disciplines" : pathname;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled ? "border-white/10 bg-ink/75 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="shell flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href="/" aria-label="Fat Fueled home" className="shrink-0">
          <Logo priority width={72} className="h-10 w-auto lg:h-12" />
        </Link>

        <ul className="hidden items-center gap-7 xl:gap-9 lg:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={currentAttr(item.href, activeHref)}
                className="link-underline py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 hover:text-white [&[aria-current]]:text-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <ButtonLink href={site.cta.href} size="sm">
              {site.cta.label}
            </ButtonLink>
          </div>
          <MobileMenu activeHref={activeHref} />
        </div>
      </nav>
    </header>
  );
}
