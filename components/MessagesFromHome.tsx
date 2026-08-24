"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Heart, MailOpen, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type HomeMessage = {
  initials: string;
  name: string;
  relationship: string;
  preview: string;
  paragraphs: string[];
  signature?: string;
  tint: string;
  isPlaceholder?: boolean;
};

const messages: HomeMessage[] = [
  {
    initials: "TD",
    name: "Tejal Di",
    relationship: "From home",
    preview: "I don’t think it has fully sunk in yet that you’re actually in France 🥹",
    paragraphs: [
      "I don’t think it has fully sunk in yet that you’re actually in France 🥹 We’re all sooooooooo happy and proud of you 😘 Moving to a whole new country and going after something you’ve worked so hard for is such a big, brave thing to do, my baby!",
      "But also… we miss you already 🥺 I hope France gives you everything you went there looking for - new experiences, lots of adventures, learning, and memories for forever.",
      "Sooo go explore fully. And whenever things feel difficult or lonely, remember there’s an entire clan back home cheering for you, always 🙌",
      "We love you soooo much, we’re ridiculously proud of you, and we can’t wait to see everything this new chapter brings for you ♥️🇫🇷",
    ],
    signature: "-- Tejal Di.",
    tint: "bg-[#f9e5dc]",
  },
  {
    initials: "W",
    name: "Wuzmal",
    relationship: "From home",
    preview: "Wishing you the absolute best as you step into this beautiful new chapter!",
    paragraphs: [
      "Hey love,",
      "Wishing you the absolute best as you step into this beautiful new chapter! Hope it brings you everything you’ve ever wanted and more.",
      "I’m so proud of you for stepping outside your comfort zone, and giving yourself the chance to reinvent yourself, explore, take chances, and discover new sides of who you are. I’m so excited to see all the amazing things you’re going to do and the person you’ll become along the way. And no matter how far you are, I’ll always be here - cheering you on, celebrating your wins, and reminding you of how capable you are.",
      "I’m going to miss you more than you know. Always remember - home is always here, whenever you need it. 💛",
    ],
    signature: "-- Wuzmal",
    tint: "bg-[#dcefea]",
  },
  {
    initials: "KS",
    name: "KS",
    relationship: "From home",
    preview: "Go make memories eat all the croissants you want and remember",
    paragraphs: [
      "Go make memories eat all the croissants you want and remember",
      "distance doesn't cancel your membership in my life no refunds no cancellation",
      "So whenever you miss home feel lonely or just need someone to annoy you I am right here",
      "Go conquer france my little SPECIAL :3 Napoleon",
    ],
    signature: "-KS",
    tint: "bg-[#e2edf8]",
  },
  {
    initials: "+1",
    name: "One more letter",
    relationship: "Reserved",
    preview: "Waiting for the final message.",
    paragraphs: [],
    tint: "bg-[#fff0d3]",
    isPlaceholder: true,
  },
];

export function MessagesFromHome() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const activeTriggerRef = useRef<HTMLButtonElement | null>(null);
  const selected = selectedIndex === null ? null : messages[selectedIndex];

  useEffect(() => {
    if (selectedIndex !== null && !dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, [selectedIndex]);

  const openMessage = (index: number, trigger: HTMLButtonElement) => {
    activeTriggerRef.current = trigger;
    setSelectedIndex(index);
  };

  const closeMessage = () => {
    dialogRef.current?.close();
  };

  const restoreFocus = () => {
    setSelectedIndex(null);
    window.requestAnimationFrame(() => activeTriggerRef.current?.focus());
  };

  return (
    <section
      id="messages-from-home"
      aria-label="Messages From Home"
      className="torn-bottom scroll-mt-16 relative bg-mint px-5 py-16 sm:px-8 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1080px]">
        <SectionHeading
          title="Messages From Home"
          description="Four envelopes from home—three to open now, and one saved for the final message."
        />
        <p className="-mt-5 mb-4 flex items-center justify-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-navy/65 sm:hidden">
          Swipe to see every letter <ArrowRight size={13} aria-hidden="true" />
        </p>
        <div
          className="destination-scroller -mx-5 grid auto-cols-[82%] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain scroll-px-5 snap-x snap-mandatory touch-pan-x px-5 pb-5 sm:mx-0 sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:overscroll-auto sm:scroll-px-0 sm:snap-none sm:px-0 sm:pb-0 lg:grid-cols-4"
          role="region"
          aria-label="Expandable messages from friends and family"
        >
          {messages.map((item, index) => {
            const cardContents = (
              <>
                <span className={`relative grid aspect-[1.55] place-items-center overflow-hidden rounded-lg ${item.tint}`} aria-hidden="true">
                  <span className="absolute inset-3 rounded-lg border-2 border-dashed border-white/65" />
                  <MailOpen className="absolute left-4 top-4 text-navy/25" size={30} strokeWidth={1.5} />
                  <span className="display-font grid size-20 place-items-center rounded-full border border-white/80 bg-paper/80 text-4xl font-bold text-navy shadow-sm">
                    {item.initials}
                  </span>
                  <Heart className="absolute bottom-4 right-4 text-coral/80" size={21} fill="currentColor" />
                </span>

                <span className="block px-1 pb-1 pt-3">
                  <span className="block text-[9px] font-extrabold uppercase tracking-[0.16em] text-navy/55">
                    Letter • {item.relationship}
                  </span>
                  <span className="display-font mt-0.5 block text-3xl font-bold leading-none text-navy">{item.name}</span>
                  <span className="mt-2 block min-h-[4.5rem] line-clamp-3 text-sm leading-6 text-navy/75">“{item.preview}”</span>
                  <span className="mt-3 flex min-h-8 items-center justify-between border-t border-navy/15 pt-2 text-[9px] font-extrabold uppercase tracking-[0.15em] text-navy">
                    {item.isPlaceholder ? "Waiting for your message" : <>Read full message <ArrowRight size={13} aria-hidden="true" /></>}
                  </span>
                </span>
              </>
            );

            return (
              <article key={item.name} className="min-w-0 snap-start">
                {item.isPlaceholder ? (
                  <div
                    aria-label="Reserved for one more letter"
                    className="h-full w-full rounded-xl border border-dashed border-[#d5cbae] bg-[#fff9e9]/75 p-3 text-left shadow-[0_10px_25px_rgb(7_53_111_/_8%)]"
                  >
                    {cardContents}
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={(event) => openMessage(index, event.currentTarget)}
                    aria-haspopup="dialog"
                    className="group h-full w-full rounded-xl border border-[#d5cbae] bg-[#fff9e9] p-3 text-left shadow-[0_10px_25px_rgb(7_53_111_/_12%)] transition duration-200 hover:-translate-y-1 hover:rotate-[0.3deg] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    {cardContents}
                  </button>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={restoreFocus}
        aria-labelledby={selected ? "message-dialog-title" : undefined}
        aria-describedby={selected ? "message-dialog-description" : undefined}
        className="destination-dialog overflow-y-auto"
      >
        {selected ? (
          <div className="bg-paper">
            <div className={`relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10 ${selected.tint}`}>
              <div className="absolute inset-3 rounded-xl border-2 border-dashed border-white/60" aria-hidden="true" />
              <MailOpen className="absolute bottom-5 right-7 text-navy/15" size={72} strokeWidth={1.2} aria-hidden="true" />
              <button
                type="button"
                onClick={closeMessage}
                className="absolute right-3 top-3 z-10 grid size-11 place-items-center rounded-full border border-navy/15 bg-paper/95 text-navy shadow-md transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-navy motion-reduce:transform-none"
                aria-label={`Close letter from ${selected.name}`}
              >
                <X size={19} aria-hidden="true" />
              </button>

              <div className="relative pr-12">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-coral">A message from home</p>
                <h2 id="message-dialog-title" className="display-font mt-1 text-5xl font-bold leading-none text-navy sm:text-6xl">{selected.name}</h2>
                <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-navy/60">{selected.relationship}</p>
              </div>
            </div>

            <div className="lined-paper px-5 py-7 sm:px-8 sm:py-9">
              <div id="message-dialog-description" className="mx-auto max-w-xl space-y-5 text-[15px] leading-8 text-navy/80 sm:text-base">
                {selected.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {selected.signature ? (
                  <p className="display-font pt-2 text-right text-3xl font-bold leading-tight text-navy">{selected.signature}</p>
                ) : null}
              </div>

              <button
                type="button"
                onClick={closeMessage}
                className="mt-7 min-h-11 w-full rounded-full bg-action-coral px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_7px_16px_rgb(211_68_55_/_22%)] transition hover:-translate-y-0.5 hover:bg-action-coral-hover focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy motion-reduce:transform-none"
              >
                Back to all messages
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
