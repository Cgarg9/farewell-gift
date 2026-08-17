import { Camera, Compass, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="landing" className="hero-shell paper-texture relative isolate overflow-hidden bg-cream">
      <div className="hero-content relative z-20 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="hero-copy flex flex-col items-start">
          <h1 className="hero-title display-font font-bold leading-[0.78] tracking-[-0.045em] text-navy">Your<br />Adventure<br />Begins</h1>
          <div className="mt-7 hidden w-full max-w-[17rem] items-center justify-between text-navy lg:flex" aria-hidden="true">
            <div className="-rotate-6 border-[5px] border-white bg-[#dfeee8] p-3 shadow-[0_8px_18px_rgb(7_53_111_/_14%)]">
              <Camera size={28} />
            </div>
            <div className="translate-y-4 rotate-6 rounded-full border-4 border-dashed border-white bg-[#fff0c2] p-3 text-coral shadow-[0_8px_18px_rgb(7_53_111_/_12%)]">
              <Compass size={27} />
            </div>
            <div className="-translate-y-1 -rotate-3 border-[5px] border-white bg-[#f8dcd6] p-3 shadow-[0_8px_18px_rgb(7_53_111_/_14%)]">
              <MapPin size={27} />
            </div>
          </div>
        </div>
      </div>

      <div
        id="adventure-map"
        className="hero-artwork pointer-events-none z-0"
        role="img"
        aria-label="A mint watercolor map of Europe decorated with landmarks, a train, books, coffee, trees, travel marks, and one airplane"
      />

      <div className="hero-mint-haze pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#dcefea]/35 via-[#dcefea]/10 to-transparent" />
    </section>
  );
}
