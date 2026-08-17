"use client";

import { useRef, useState } from "react";
import { Heart, Mail, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Envelope = {
  id: string;
  label: string;
  color: string;
  eyebrow: string;
  message: string;
  signoff: string;
};

const envelopes: Envelope[] = [
  {
    id: "miss-home",
    label: "You miss home",
    color: "bg-[#77c8b1]",
    eyebrow: "For the homesick days",
    message: "Home has not moved on without you. Your mug is still your mug, your people still know exactly how you take your tea, and every familiar place will be here when you return. Call us, tell us one tiny thing about today, and remember: missing home only means you built somewhere worth missing.",
    signoff: "Sending the biggest long-distance hug",
  },
  {
    id: "need-courage",
    label: "You need courage",
    color: "bg-[#f6bd38]",
    eyebrow: "For the brave next step",
    message: "You do not need to feel fearless before you begin. Courage can be as small as asking the question, walking through the door, or saying hello first. Take one kind, manageable step; then let the next step introduce itself. You have already done something wonderfully brave by coming this far.",
    signoff: "I believe in you—especially today",
  },
  {
    id: "great-news",
    label: "You have great news",
    color: "bg-[#5e9ad6]",
    eyebrow: "For your happiest news",
    message: "Stop everything and celebrate properly! Take the photo, order dessert, dance in the kitchen, and tell the whole story from the very beginning. I wish I could squeeze you in person, but please imagine an extremely loud cheer traveling all the way from home to wherever you are.",
    signoff: "So proud of you I could burst",
  },
  {
    id: "need-laugh",
    label: "You need a laugh",
    color: "bg-[#ef755f]",
    eyebrow: "For a reliably silly moment",
    message: "Picture us trying to look sophisticated while immediately walking the wrong way out of a train station. Now remember every terrible joke we repeated until it became funny again. Your assignment: send the most ridiculous postcard you can find, then reward yourself with a pastry the size of your head.",
    signoff: "Still laughing with you from afar",
  },
];

export function OpenWhen() {
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [openId, setOpenId] = useState<string | null>(null);
  const openEnvelope = envelopes.find((envelope) => envelope.id === openId) ?? null;

  const foldLetter = () => {
    const previousId = openId;
    setOpenId(null);
    window.requestAnimationFrame(() => {
      if (previousId) triggerRefs.current[previousId]?.focus();
    });
  };

  return (
    <section id="open-when" className="torn-top torn-bottom scroll-mt-16 relative bg-mint px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1080px]">
        <SectionHeading
          title="Open When…"
          description="Four little notes for the moments when you need a piece of home in your pocket."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {envelopes.map((envelope) => {
            const isOpen = envelope.id === openId;

            return (
              <button
                key={envelope.id}
                id={`open-when-trigger-${envelope.id}`}
                ref={(node) => {
                  triggerRefs.current[envelope.id] = node;
                }}
                type="button"
                aria-expanded={isOpen}
                aria-controls="open-when-letter"
                onClick={() => setOpenId((current) => current === envelope.id ? null : envelope.id)}
                className={`${envelope.color} group relative min-h-44 overflow-hidden rounded-md border border-navy/10 p-5 text-navy shadow-[0_10px_20px_rgb(7_53_111_/_12%)] transition duration-200 hover:-translate-y-1 hover:rotate-[0.5deg] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy motion-reduce:transform-none ${isOpen ? "-translate-y-1 rotate-[0.5deg] ring-2 ring-navy/20" : ""}`}
              >
                <span className="absolute inset-x-0 top-0 h-[62%] bg-white/20 [clip-path:polygon(0_0,100%_0,50%_82%)]" aria-hidden="true" />
                <span className="absolute inset-x-0 bottom-0 h-[62%] bg-navy/7 [clip-path:polygon(0_100%,0_28%,50%_72%,100%_28%,100%_100%)]" aria-hidden="true" />
                <Mail className="absolute left-4 top-4 opacity-20" size={22} strokeWidth={1.6} aria-hidden="true" />
                <span className="relative z-10 mx-auto block max-w-40 display-font text-2xl font-bold leading-tight sm:text-3xl">{envelope.label}</span>
                <span className="absolute bottom-4 left-1/2 z-10 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-coral/15 bg-white text-coral shadow-sm transition group-hover:scale-105" aria-hidden="true">
                  <Heart size={18} fill="currentColor" />
                </span>
                <span className="sr-only">{isOpen ? "Fold this letter" : "Open this letter"}</span>
              </button>
            );
          })}
        </div>

        <div
          id="open-when-letter"
          role="region"
          aria-live="polite"
          aria-hidden={!openEnvelope}
          aria-labelledby={openEnvelope ? `open-when-trigger-${openEnvelope.id}` : undefined}
          className={`grid transition-[grid-template-rows,opacity,margin] duration-200 motion-reduce:transition-none ${openEnvelope ? "mt-8 grid-rows-[1fr] opacity-100" : "pointer-events-none mt-0 grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
            {openEnvelope ? (
              <article className="relative mx-auto max-w-3xl rotate-[-0.25deg] bg-[repeating-linear-gradient(135deg,#ff6d5c_0_10px,#fff_10px_20px,#3974b9_20px_30px,#fff_30px_40px)] p-2 shadow-[0_16px_38px_rgb(7_53_111_/_16%)]">
                <div className="lined-paper relative bg-paper px-6 py-8 sm:px-12 sm:py-10">
                  <button
                    type="button"
                    onClick={foldLetter}
                    className="absolute right-3 top-3 grid size-11 place-items-center rounded-full border border-navy/15 bg-white/85 text-navy transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-navy motion-reduce:transform-none"
                    aria-label="Fold this letter"
                  >
                    <X size={18} aria-hidden="true" />
                  </button>

                  <div className="pr-12">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-coral">{openEnvelope.eyebrow}</p>
                    <h3 className="display-font mt-1 text-4xl font-bold leading-none text-navy">Dear adventurer,</h3>
                  </div>
                  <p className="mt-6 text-[15px] leading-8 text-navy/78">{openEnvelope.message}</p>
                  <div className="mt-6 flex items-end justify-between gap-4">
                    <p className="display-font text-2xl font-bold leading-tight text-navy">
                      {openEnvelope.signoff},<br />with all my love
                    </p>
                    <Heart className="shrink-0 text-coral" size={30} fill="currentColor" aria-hidden="true" />
                  </div>
                </div>
              </article>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
