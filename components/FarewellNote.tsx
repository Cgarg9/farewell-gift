import { Camera, Heart, Plane } from "lucide-react";

export function FarewellNote() {
  return (
    <section id="farewell-note" aria-labelledby="farewell-note-title" className="paper-texture scroll-mt-16 relative px-4 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="stamp-ring absolute left-[8%] top-12 hidden text-coral sm:block" aria-hidden="true">Air mail<br />Europe</div>
      <div className="mx-auto max-w-[980px]">
        <div className="mb-7 text-center">
          <p className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.28em] text-coral">From here to wherever is next</p>
          <h2 id="farewell-note-title" className="display-font text-[clamp(2.75rem,6vw,4rem)] font-bold leading-none text-navy">A Little Note for You <span className="text-sunshine" aria-hidden="true">✦</span></h2>
        </div>

        <div className="relative rotate-0 bg-[repeating-linear-gradient(135deg,#ff6d5c_0_10px,#fff_10px_20px,#3974b9_20px_30px,#fff_30px_40px)] p-1.5 shadow-[0_15px_35px_rgb(7_53_111_/_13%)] sm:rotate-[-0.4deg] sm:p-2">
          <div className="lined-paper bg-paper px-5 py-7 sm:px-10 sm:py-10 md:px-16 lg:px-20 lg:py-14">
            <div className="flex items-start justify-between" aria-hidden="true">
              <Camera className="-rotate-6 text-navy/25" size={38} />
              <div className="grid size-12 place-items-center border-2 border-dashed border-[#3974b9]/45 bg-[#e3eff9] text-[#3974b9] sm:size-14"><Plane size={26} /></div>
            </div>

            <article aria-label="A personal farewell letter from Aashu to Rupal" className="mx-auto mt-3 max-w-[70ch] text-[15px] leading-[1.9] text-navy/80 sm:text-base sm:leading-8">
              <p className="display-font text-[1.65rem] font-bold leading-tight text-navy sm:text-3xl">Can I just say something before you go?</p>

              <p className="mt-5 text-lg font-extrabold text-navy">I’m really, really proud of you!</p>

              <p className="mt-4">Not because you’re moving to Europe. Not because it’ll look exciting on Instagram. But because I know what this actually took and will take behind the scenes.</p>

              <p className="mt-4">It takes so much courage to leave behind everything that’s comfortable. To say goodbye to your people, pack your life into a few suitcases (&amp; repack them over and over to meet the weight baggage criteria), and choose the unknown. That’s scary. It’s exciting. It’s overwhelming. And honestly? It’s a little bit crazy.</p>

              <p className="mt-4 font-extrabold text-navy">But it’s exactly why I am SUPER proud of you!</p>

              <p className="mt-4">I hope this year surprises you in all the best ways. I hope you stumble upon streets you’ll keep going back to, meet people who make a new place feel like home, and collect the kind of stories that you’ll still be telling us years from now. I hope you say yes to plans you didn’t expect, get a little lost, laugh a lot, and slowly build a life that feels like yours.</p>

              <p className="mt-4 font-bold text-navy">But I also know it won’t all be magical.</p>

              <p className="mt-4">There will be days when you’ll miss home a little too much. Days when making dinner for one feels lonely. Days when you’ll wonder if you made the right decision.</p>

              <p className="mt-4">When those days come, I hope you remember this: <strong className="font-extrabold text-navy">You don’t have to prove anything.</strong></p>

              <p className="mt-4">You don’t have to have the perfect year. You don’t have to love every moment. And you definitely don’t have to earn the love that’s waiting for you back home.</p>

              <p className="mt-4 font-extrabold text-navy">We’re already proud of you and we all love you very, very much, Rupal!</p>

              <p className="mt-4 font-bold text-navy">So go live this year fully.</p>

              <p className="mt-4">Collect memories instead of souvenirs. Fall in love with cities. Find your favourite café. Cry if you need to. Celebrate the tiniest wins. Become someone who comes back with stories that don’t fit into a suitcase.</p>

              <p className="mt-4">And whenever life feels a little too big, remember that you have me, and so many other people, cheering for you every single day.</p>

              <p className="display-font mt-6 text-center text-[1.65rem] font-bold leading-tight text-navy sm:text-3xl">The distance between us is only measured in miles.<br />Never in love.</p>

              <p className="display-font mt-7 text-right text-[1.65rem] font-bold leading-tight text-navy sm:text-3xl">Always in your corner,<br />Aashu</p>
            </article>

            <Heart className="ml-auto mt-3 text-coral" size={30} strokeWidth={1.6} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
