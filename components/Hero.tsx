import { ArrowRight, Camera } from "lucide-react";

export function Hero() {
  return (
    <section id="landing" className="hero-shell paper-texture relative isolate overflow-hidden bg-cream">
      <div
        id="adventure-map"
        className="hero-artwork pointer-events-none absolute z-0"
        role="img"
        aria-label="A mint watercolor map of Europe decorated with landmarks, a train, books, coffee, trees, travel marks, and one airplane"
      />

      <div className="hero-content relative z-20 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="hero-copy flex flex-col items-start">
          <h1 className="hero-title display-font font-bold leading-[0.78] tracking-[-0.045em] text-navy">Your<br />Adventure<br />Begins</h1>
          <span className="display-font ml-auto -mt-1 mr-5 text-3xl font-bold text-coral" aria-hidden="true">♡</span>
          <a href="#welcome" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-action-coral px-7 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.13em] text-white shadow-[0_8px_18px_rgb(211_68_55_/_25%)] transition duration-200 hover:-translate-y-1 hover:bg-action-coral-hover focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy">
            Go explore <ArrowRight size={14} />
          </a>
          <div className="mt-9 hidden items-end gap-4 text-navy lg:flex" aria-hidden="true">
            <div className="-rotate-6 border-[5px] border-white bg-[#dfeee8] p-3 shadow-[0_8px_18px_rgb(7_53_111_/_14%)]"><Camera size={28} /></div>
            <span className="text-coral">♡</span>
          </div>
        </div>
      </div>

      <div className="hero-mint-haze pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#dcefea]/35 via-[#dcefea]/10 to-transparent" />
    </section>
  );
}
