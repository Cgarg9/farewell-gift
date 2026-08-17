"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  ["Memories", "#memories"],
  ["Bucket list", "#bucket-list"],
  ["Destinations", "#destinations"],
  ["Open when", "#open-when"],
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      menuButtonRef.current?.focus();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy text-white shadow-[0_2px_12px_rgb(7_53_111_/_14%)]">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 sm:px-8 md:grid md:grid-cols-[1fr_auto_1fr]">
        <a href="#top" className="display-font justify-self-start text-lg font-bold leading-[0.78] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-sunshine sm:text-xl">the great<br />European adventure <span className="text-sunshine">✦</span></a>
        <nav className="hidden items-center gap-8 text-[9px] font-extrabold uppercase tracking-[0.12em] md:flex" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} className="transition hover:text-sunshine focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sunshine" href={href}>{label}</a>)}
        </nav>
        <a href="#welcome" className="hidden min-h-11 items-center gap-2 justify-self-end rounded-full bg-action-coral px-5 py-2.5 text-[9px] font-extrabold uppercase tracking-wider shadow-[0_6px_14px_rgb(211_68_55_/_22%)] transition hover:-translate-y-0.5 hover:bg-action-coral-hover focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-sunshine md:inline-flex">Go explore <ArrowRight size={13} /></a>
        <button
          ref={menuButtonRef}
          type="button"
          className="grid size-11 place-items-center rounded-full border border-white/25 transition hover:border-sunshine hover:text-sunshine focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-sunshine md:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`${isOpen ? "grid" : "hidden"} absolute inset-x-0 top-16 gap-1 border-t border-white/10 bg-navy px-5 py-4 shadow-[0_12px_24px_rgb(7_53_111_/_24%)] md:hidden`}
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setIsOpen(false)} className="rounded-lg px-4 py-3 text-xs font-extrabold uppercase tracking-[0.12em] transition hover:bg-white/8 hover:text-sunshine focus-visible:outline focus-visible:outline-2 focus-visible:outline-sunshine">
            {label}
          </a>
        ))}
        <a href="#welcome" onClick={() => setIsOpen(false)} className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-action-coral px-5 py-3 text-[10px] font-extrabold uppercase tracking-wider shadow-[0_6px_14px_rgb(211_68_55_/_22%)] transition hover:bg-action-coral-hover focus-visible:outline focus-visible:outline-3 focus-visible:outline-sunshine">
          Go explore <ArrowRight size={13} />
        </a>
      </nav>
    </header>
  );
}
