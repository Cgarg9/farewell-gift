import { ArrowRight, Camera, Heart, Mail, Map } from "lucide-react";

export function ClosingWish() {
  return (
    <footer className="paper-texture relative overflow-hidden bg-cream px-5 pt-16 text-center sm:px-8 sm:pt-20 lg:pt-28">
      <div className="absolute left-[8%] top-16 hidden -rotate-6 bg-white p-2 shadow-[0_8px_20px_rgb(7_53_111_/_12%)] sm:block" aria-hidden="true"><Camera size={34} /></div>
      <div className="absolute right-[10%] top-20 hidden rotate-6 text-[#3974b9] sm:block" aria-hidden="true"><Map size={55} strokeWidth={1.4} /></div>
      <div className="mx-auto max-w-3xl pb-20">
        <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.28em] text-coral">The next chapter is yours</p>
        <h2 className="display-font text-[clamp(3.2rem,7vw,5rem)] font-bold leading-[0.88] text-navy">Go Make Stories<br />Worth Telling <Heart className="inline text-coral" size={27} aria-hidden="true" /></h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-navy/68 sm:text-base">Take the long way, order the unfamiliar thing, call home often, and keep a little room in your bag for every story you collect.</p>
        <a href="#top" className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-action-coral px-6 py-3 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-[0_8px_18px_rgb(211_68_55_/_24%)] transition hover:-translate-y-1 hover:bg-action-coral-hover focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy">Go explore &amp; make memories <ArrowRight size={14} /></a>
      </div>
      <div className="relative -mx-5 bg-navy px-5 py-8 text-white sm:-mx-8 sm:px-8"><p className="display-font text-xl sm:text-2xl">We’ll be cheering for you—from here to every adventure and back. <span className="text-coral" aria-hidden="true">♡</span></p><Mail className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-t-lg bg-paper p-2 text-coral" size={46} aria-hidden="true" /></div>
    </footer>
  );
}
