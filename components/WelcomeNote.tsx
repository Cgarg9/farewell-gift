import { ArrowDown, Heart, Stamp } from "lucide-react";

export function WelcomeNote() {
  return (
    <section id="welcome" className="paper-texture relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-8 top-12 rotate-[-10deg] text-[#3974b9]/12" aria-hidden="true">
        <Stamp size={112} strokeWidth={1.2} />
      </div>
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.28em] text-coral">Made with love, packed for Europe</p>
        <h2 className="display-font text-[clamp(2.75rem,6vw,4rem)] font-bold leading-[0.95] text-navy">
          A little something for your big adventure
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-navy/72 sm:text-base">
          This is one small place to keep the laughs we never want to forget, the courage you can borrow whenever you need it, and a few bright ideas for every month of the year ahead.
        </p>
        <div className="mt-7 flex items-center justify-center gap-3 text-coral" aria-hidden="true">
          <Heart size={17} strokeWidth={1.8} />
          <ArrowDown className="text-[#3974b9]" size={19} strokeWidth={1.8} />
          <span className="text-sunshine">✦</span>
        </div>
      </div>
    </section>
  );
}
