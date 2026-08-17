"use client";

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions -- The labeled carousel region intentionally handles swipe and Arrow key navigation. */

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type TouchEvent,
} from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const messages = [
  {
    initials: "MS",
    name: "Maya Sharma",
    relationship: "Best friend",
    message: "If the first week feels strange, remember how quickly every new place becomes yours. Call me after your first brave little adventure.",
    tint: "bg-[#dcefea]",
  },
  {
    initials: "AK",
    name: "Aarav Khanna",
    relationship: "Brother",
    message: "Send me one photo from every city—especially the disasters. I am ridiculously proud of you, even when I forget to say it.",
    tint: "bg-[#e2edf8]",
  },
  {
    initials: "M+D",
    name: "Mum & Dad",
    relationship: "Family",
    message: "Home does not get farther away when you travel. It simply gives you somewhere warm to return to. Enjoy every minute, sweetheart.",
    tint: "bg-[#fff0d3]",
  },
  {
    initials: "LA",
    name: "Leila Ahmed",
    relationship: "Flatmate",
    message: "Say yes to the tiny invitations: coffee after class, the wrong train, dinner with strangers. Those will become your best stories.",
    tint: "bg-[#f9e5dc]",
  },
  {
    initials: "NS",
    name: "Nani",
    relationship: "Grandmother",
    message: "Eat something warm, keep your scarf close, and be kind to yourself on lonely days. My blessings are travelling with you.",
    tint: "bg-[#e4f1dc]",
  },
];

const swipeThreshold = 48;

export function MessagesFromHome() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const maxIndex = Math.max(0, messages.length - visibleCount);
  const slideStep = 100 / visibleCount;

  useEffect(() => {
    const syncVisibleCount = () => {
      const nextCount = window.matchMedia("(min-width: 1024px)").matches
        ? 3
        : window.matchMedia("(min-width: 640px)").matches
          ? 2
          : 1;

      setVisibleCount(nextCount);
      setActiveIndex((current) => Math.min(current, messages.length - nextCount));
    };

    syncVisibleCount();
    window.addEventListener("resize", syncVisibleCount);
    return () => window.removeEventListener("resize", syncVisibleCount);
  }, []);

  const goTo = useCallback(
    (index: number) => setActiveIndex(Math.max(0, Math.min(index, maxIndex))),
    [maxIndex],
  );
  const goPrevious = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrevious();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const distance = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < swipeThreshold) return;
    if (distance > 0) goPrevious();
    else goNext();
  };

  const visibleEnd = Math.min(activeIndex + visibleCount, messages.length);

  return (
    <section
      id="messages-from-home"
      aria-label="Messages From Home"
      className="torn-bottom scroll-mt-16 relative bg-mint px-5 py-16 sm:px-8 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1080px]">
        <SectionHeading title="Messages From Home" />

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Encouraging messages from friends and family"
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative pt-16 sm:pt-14"
        >
          <div className="absolute right-0 top-1 flex gap-2">
            <button
              type="button"
              onClick={goPrevious}
              disabled={activeIndex === 0}
              aria-label="Show previous messages"
              className="grid size-11 place-items-center rounded-full border border-navy/10 bg-paper text-navy shadow-[0_5px_14px_rgb(7_53_111_/_12%)] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-navy disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={activeIndex === maxIndex}
              aria-label="Show next messages"
              className="grid size-11 place-items-center rounded-full border border-navy/10 bg-paper text-navy shadow-[0_5px_14px_rgb(7_53_111_/_12%)] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-navy disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>

          <div
            className="touch-pan-y overflow-hidden rounded-xl"
          >
            <div
              className="flex transition-transform duration-200 ease-out motion-reduce:transition-none"
              style={{ transform: `translate3d(-${activeIndex * slideStep}%, 0, 0)` }}
            >
              {messages.map((item, index) => {
                const isVisible = index >= activeIndex && index < visibleEnd;

                return (
                  <article
                    key={item.name}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${messages.length}: message from ${item.name}`}
                    aria-hidden={!isVisible}
                    className="w-full shrink-0 px-2 py-3 sm:w-1/2 lg:w-1/3"
                  >
                    <div className="relative flex h-full min-h-64 flex-col rounded-2xl border border-navy/8 bg-paper p-6 shadow-[0_10px_24px_rgb(7_53_111_/_10%)] sm:min-h-72">
                      <span
                        className="absolute -top-2 left-8 h-4 w-14 -rotate-3 bg-coral/65"
                        aria-hidden="true"
                      />
                      <div className="flex items-center gap-3">
                        <span
                          className={`grid size-12 shrink-0 place-items-center rounded-full border border-white/70 text-xs font-extrabold tracking-[0.08em] text-navy shadow-sm ${item.tint}`}
                          aria-hidden="true"
                        >
                          {item.initials}
                        </span>
                        <div>
                          <h3 className="display-font text-2xl font-bold leading-none text-navy">{item.name}</h3>
                          <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.13em] text-navy/65">
                            {item.relationship}
                          </p>
                        </div>
                      </div>
                      <p className="mt-6 flex-1 text-[15px] leading-7 text-navy/80">“{item.message}”</p>
                      <Heart
                        className="ml-auto mt-4 text-coral"
                        size={17}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <p className="sr-only" aria-live="polite" aria-atomic="true">
            Showing messages {activeIndex + 1} through {visibleEnd} of {messages.length}.
          </p>

          <div className="mt-4 flex flex-wrap justify-center" role="group" aria-label="Choose a message slide">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Start with message ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className="group grid size-11 place-items-center rounded-full focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-1 focus-visible:outline-navy"
              >
                <span
                  className={`block rounded-full transition-all duration-200 motion-reduce:transition-none ${
                    activeIndex === index ? "h-2.5 w-6 bg-navy" : "size-2.5 bg-navy/25 group-hover:bg-navy/50"
                  }`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
