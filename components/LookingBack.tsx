import { Camera, Heart } from "lucide-react";

export function LookingBack() {
  return (
    <section className="paper-texture relative bg-sunshine px-5 py-14 sm:px-8 lg:py-16">
      <div className="absolute inset-0 bg-[#f8c84b]/80" />
      <div className="relative mx-auto grid max-w-[920px] items-center gap-8 md:grid-cols-[1fr_1.35fr_1fr]">
        <div className="-rotate-3 bg-white p-2 pb-5 shadow-lg"><div className="grid aspect-[4/3] place-items-center bg-[#eceeed] text-navy/25"><Camera size={36} /></div></div>
        <div className="text-center"><h2 className="display-font text-4xl font-bold text-navy">Whenever You Look Back <Heart className="inline text-coral" size={18} /></h2><p className="mt-3 text-sm leading-6 text-navy/75">May these memories remind you of where you’ve been, who you are, and how many adventures are still ahead.</p><p className="display-font mt-4 text-xl font-bold">I’ll be cheering for you—always. ♡</p></div>
        <div className="rotate-3 bg-white p-2 pb-5 shadow-lg"><div className="grid aspect-[4/3] place-items-center bg-[#eceeed] text-navy/25"><Camera size={36} /></div></div>
      </div>
    </section>
  );
}
