import { Camera, Heart, Plane } from "lucide-react";

export function FarewellNote() {
  return (
    <section id="farewell-note" className="paper-texture scroll-mt-16 relative px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
      <div className="stamp-ring absolute left-[8%] top-12 hidden text-coral sm:block" aria-hidden="true">Air mail<br />Europe</div>
      <div className="mx-auto max-w-[820px]">
        <div className="mb-7 text-center"><p className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.28em] text-coral">From here to wherever is next</p><h2 className="display-font text-[clamp(2.75rem,6vw,4rem)] font-bold leading-none text-navy">A Little Note for You <span className="text-sunshine" aria-hidden="true">✦</span></h2></div>
        <div className="relative rotate-[-0.4deg] bg-[repeating-linear-gradient(135deg,#ff6d5c_0_10px,#fff_10px_20px,#3974b9_20px_30px,#fff_30px_40px)] p-2 shadow-[0_15px_35px_rgb(7_53_111_/_13%)]">
          <div className="lined-paper min-h-72 bg-paper px-7 py-8 sm:px-14 sm:py-10">
            <div className="flex items-start justify-between" aria-hidden="true"><Camera className="-rotate-6 text-navy/25" size={42} /><div className="grid size-14 place-items-center border-2 border-dashed border-[#3974b9]/45 bg-[#e3eff9] text-[#3974b9]"><Plane size={28} /></div></div>
            <div className="mx-auto mt-1 max-w-xl text-[15px] leading-8 text-navy/78 sm:text-base">
              <p className="display-font mb-2 text-2xl font-bold text-navy">Dear adventurer,</p>
              <p>I hope this year surprises you in all the best ways: with streets you want to wander twice, conversations that make a new city feel familiar, and tiny brave moments that quietly change you.</p>
              <p className="mt-4">On the days when everything feels new, remember that you never have to earn the love waiting for you back home. We are already proud of you—for going, for trying, and for saying yes to the story ahead.</p>
              <p className="display-font mt-5 text-right text-2xl font-bold text-navy">Always in your corner,<br />your people ♡</p>
            </div>
            <Heart className="ml-auto mt-2 text-coral" size={30} strokeWidth={1.6} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
