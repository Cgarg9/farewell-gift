"use client";

import { useEffect, useRef, useState } from "react";
import { Heart, Mail, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Envelope = {
  id: string;
  label: string;
  title: string;
  color: string;
  paragraphs: string[];
};

const envelopes: Envelope[] = [
  {
    id: "trophy-wife",
    label: "You consider becoming a trophy wife 💅",
    title: "Open when you consider becoming a trophy wife 💅",
    color: "bg-[#77c8b1]",
    paragraphs: [
      "Hi.",
      "I’d like to remind you that you’re the same person who reorganizes spreadsheets for fun and gets annoyed when people do things inefficiently.",
      "You are not built to be a trophy wife. You just like the idea of it.",
      "By Day 3, you’d have started a business.",
      "By Day 5, you’d be giving unsolicited feedback to everyone in the house.",
      "By Day 7, you’d have accidentally become CEO of something.",
      "You don’t want financial dependence.",
      "You want to destroy the patriarchy, make KS the trophy husband, travel the world, and never have to decide what’s for dinner ever again.",
      "Big difference 🥸😌",
    ],
  },
  {
    id: "ldr-feels-too-much",
    label: "The LDRs feel a bit too much",
    title: "When the LDRs feel a bit too much",
    color: "bg-[#f6bd38]",
    paragraphs: [
      "I know.",
      "Some days, no amount of sightseeing, cute European bois, pastries 🥐 or pretty streets can make up for the fact that your people are 6,000 kilometres away.",
      "On those days, don’t put pressure on yourself to “make the most of it.”",
      "Call us. Voice note us. Spam us. Cry if you need to. Then order yourself a little treat and and an iced coffee because that’s exactly what we’d have done if we were with you.",
      "I wish I could magically appear there with a diet coke, a cosy book and a biiiig hug, but until then, this letter will have to do.",
      "And just remember…",
      "You’re not missing home because Europe isn’t enough.",
      "You’re missing home because you have people worth missing.",
      "We’ll still be here when you get back. ❤️",
    ],
  },
  {
    id: "annoying-classmate",
    label: "You see that annoying classmate. Yes, HIM.",
    title: "When you see that annoying classmate. Yes, HIM.",
    color: "bg-[#5e9ad6]",
    paragraphs: [
      "Deep breaths.",
      "Before you commit a felony…",
      "Remember:",
      "Not everyone deserves your energy.",
      "Nod.",
      "Smile.",
      "Mentally mute him.",
      "Then come and rant to me in 17 voice notes.",
      "I fully support bullying him…",
      "REMEMBER, DON’T BE FRIENDS WITH THEM!!!",
      "P.S. If he spams on a group one more time…you have my blessing to add me to that group so i can be a bitch to him and call him out",
    ],
  },
  {
    id: "anxious-about-decision",
    label: "You start feeling anxious about your decision",
    title: "🤍 Open when you start feeling anxious about your decision",
    color: "bg-[#ef755f]",
    paragraphs: [
      "Hi.",
      "I’m guessing you’ve convinced yourself that you’ve made a terrible mistake.",
      "Classic.",
      "Before your brain starts writing a 47-slide presentation on “Why Moving to Europe Was a Horrible Idea”, let’s remember a few things.",
      "You wanted this.",
      "For a really long time.",
      "You didn’t wake up one random Tuesday and decide to move across the world. You thought about it, worked for it, stressed about it, and then had the courage to actually do it.",
      "So no, one bad day doesn’t suddenly mean you made the wrong decision.",
      "It just means… you’re having a bad day.",
      "Missing home doesn’t mean you should’ve stayed.",
      "Feeling overwhelmed doesn’t mean you’re not capable.",
      "It just means you’re doing something big.",
      "Give it time.",
      "Stop looking at Instagram reels. They are only adding fuel to the fire.",
      "And if you’re still spiralling after reading this…",
      "Call me.",
      "I’ll happily remind you why Past You was smarter than Anxious You.",
      "❤️",
    ],
  },
];

export function OpenWhen() {
  const [openId, setOpenId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const activeTriggerRef = useRef<HTMLButtonElement | null>(null);
  const openEnvelope = envelopes.find((envelope) => envelope.id === openId) ?? null;

  useEffect(() => {
    if (openId !== null && !dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, [openId]);

  const openLetter = (id: string, trigger: HTMLButtonElement) => {
    activeTriggerRef.current = trigger;
    setOpenId(id);
  };

  const closeLetter = () => {
    dialogRef.current?.close();
  };

  const restoreFocus = () => {
    setOpenId(null);
    window.requestAnimationFrame(() => activeTriggerRef.current?.focus());
  };

  return (
    <section id="open-when" className="torn-top torn-bottom scroll-mt-16 relative bg-mint px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1080px]">
        <SectionHeading
          title="Open When…"
          description="Four very specific notes for the exact moments you need a laugh, a rant, or a reminder."
          showHeart={false}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {envelopes.map((envelope) => (
            <button
              key={envelope.id}
              type="button"
              aria-haspopup="dialog"
              onClick={(event) => openLetter(envelope.id, event.currentTarget)}
              className={`${envelope.color} group relative min-h-56 overflow-hidden rounded-md border border-navy/10 p-5 text-navy shadow-[0_10px_20px_rgb(7_53_111_/_12%)] transition duration-200 hover:-translate-y-1 hover:rotate-[0.5deg] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy motion-reduce:transform-none`}
            >
              <span className="absolute inset-x-0 top-0 h-[62%] bg-white/20 [clip-path:polygon(0_0,100%_0,50%_82%)]" aria-hidden="true" />
              <span className="absolute inset-x-0 bottom-0 h-[62%] bg-navy/7 [clip-path:polygon(0_100%,0_28%,50%_72%,100%_28%,100%_100%)]" aria-hidden="true" />
              <Mail className="absolute left-4 top-4 opacity-20" size={22} strokeWidth={1.6} aria-hidden="true" />
              <span className="relative z-10 mx-auto block max-w-48 display-font text-[1.65rem] font-bold leading-tight sm:text-[1.75rem]">{envelope.label}</span>
              <span className="absolute bottom-4 left-1/2 z-10 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-coral/15 bg-white text-coral shadow-sm transition group-hover:scale-105" aria-hidden="true">
                <Heart size={18} fill="currentColor" />
              </span>
              <span className="sr-only">Open this letter</span>
            </button>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={restoreFocus}
        aria-labelledby={openEnvelope ? "open-when-dialog-title" : undefined}
        aria-describedby={openEnvelope ? "open-when-dialog-description" : undefined}
        className="destination-dialog overflow-y-auto"
      >
        {openEnvelope ? (
          <div className="bg-paper">
            <div className={`relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10 ${openEnvelope.color}`}>
              <div className="absolute inset-3 rounded-xl border-2 border-dashed border-white/60" aria-hidden="true" />
              <Mail className="absolute bottom-5 right-7 text-navy/15" size={72} strokeWidth={1.2} aria-hidden="true" />
              <button
                type="button"
                onClick={closeLetter}
                className="absolute right-3 top-3 z-10 grid size-11 place-items-center rounded-full border border-navy/15 bg-paper/95 text-navy shadow-md transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-navy motion-reduce:transform-none"
                aria-label={`Close ${openEnvelope.label} letter`}
              >
                <X size={19} aria-hidden="true" />
              </button>

              <div className="relative pr-12">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-coral">A little note for this exact moment</p>
                <h2 id="open-when-dialog-title" className="display-font mt-1 text-[clamp(2rem,7vw,3.75rem)] font-bold leading-[0.95] text-navy">{openEnvelope.title}</h2>
              </div>
            </div>

            <div className="lined-paper px-5 py-7 sm:px-8 sm:py-9">
              <div id="open-when-dialog-description" className="mx-auto max-w-xl space-y-4 text-[15px] leading-8 text-navy/80 sm:text-base">
                {openEnvelope.paragraphs.map((paragraph, index) => (
                  <p key={`${openEnvelope.id}-${index}`}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-7 flex justify-end">
                <Heart className="text-coral" size={30} fill="currentColor" aria-hidden="true" />
              </div>

              <button
                type="button"
                onClick={closeLetter}
                className="mt-5 min-h-11 w-full rounded-full bg-action-coral px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_7px_16px_rgb(211_68_55_/_22%)] transition hover:-translate-y-0.5 hover:bg-action-coral-hover focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy motion-reduce:transform-none"
              >
                Back to all letters
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
