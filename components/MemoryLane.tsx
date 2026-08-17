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
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const memories = [
  {
    caption: "The ridiculous laughs",
    note: "Kitchen floor · 1:14 a.m.",
    objectPosition: "18% 42%",
    rotation: "-rotate-[1.5deg]",
    tape: "bg-coral/80",
  },
  {
    caption: "The long conversations",
    note: "Same café, three cold coffees",
    objectPosition: "34% 58%",
    rotation: "rotate-[1deg]",
    tape: "bg-[#3974b9]/75",
  },
  {
    caption: "The spontaneous plans",
    note: "No itinerary, somehow perfect",
    objectPosition: "52% 38%",
    rotation: "-rotate-[0.75deg]",
    tape: "bg-[#55b9a1]/80",
  },
  {
    caption: "The ordinary days",
    note: "Our favorite kind of memory",
    objectPosition: "68% 58%",
    rotation: "rotate-[1.5deg]",
    tape: "bg-sunshine/80",
  },
  {
    caption: "The goodbye dinner",
    note: "One table, far too many stories",
    objectPosition: "84% 38%",
    rotation: "-rotate-[1deg]",
    tape: "bg-coral/80",
  },
  {
    caption: "The postcard promise",
    note: "Write home — even the messy bits",
    objectPosition: "58% 80%",
    rotation: "rotate-[0.75deg]",
    tape: "bg-[#3974b9]/75",
  },
];

const swipeThreshold = 48;

export function MemoryLane() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const maxIndex = Math.max(0, memories.length - visibleCount);
  const slideStep = visibleCount === 1 ? 92 : 100 / visibleCount;

  useEffect(() => {
    const syncVisibleCount = () => {
      const nextCount = window.matchMedia("(min-width: 1024px)").matches
        ? 4
        : window.matchMedia("(min-width: 640px)").matches
          ? 2
          : 1;

      setVisibleCount(nextCount);
      setActiveIndex((current) => Math.min(current, memories.length - nextCount));
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

  const visibleEnd = Math.min(activeIndex + visibleCount, memories.length);

  return (
    <section
      id="memories"
      aria-label="Our Memory Lane"
      className="torn-top torn-bottom scroll-mt-16 relative bg-mint px-5 py-16 sm:px-8 sm:py-20 lg:py-28"
    >
      <div className="stamp-ring absolute right-[8%] top-8 hidden sm:block" aria-hidden="true">
        Memories<br />Express
      </div>
      <div className="mx-auto max-w-[1120px]">
        <SectionHeading title="Our Memory Lane" />

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Shared memories"
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="film-strip relative pb-8 pt-16 sm:px-2 sm:pt-14"
        >
          <div className="absolute right-0 top-1 flex gap-2 sm:right-2">
            <button
              type="button"
              onClick={goPrevious}
              disabled={activeIndex === 0}
              aria-label="Show previous memories"
              className="grid size-11 place-items-center rounded-full border border-navy/10 bg-paper text-navy shadow-[0_5px_14px_rgb(7_53_111_/_12%)] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-navy disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={activeIndex === maxIndex}
              aria-label="Show next memories"
              className="grid size-11 place-items-center rounded-full border border-navy/10 bg-paper text-navy shadow-[0_5px_14px_rgb(7_53_111_/_12%)] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-navy disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>

          <div
            className="touch-pan-y overflow-hidden rounded-sm"
          >
            <div
              className="flex transition-transform duration-200 ease-out motion-reduce:transition-none"
              style={{ transform: `translate3d(-${activeIndex * slideStep}%, 0, 0)` }}
            >
              {memories.map((memory, index) => {
                const isVisible = index >= activeIndex && index < visibleEnd;

                return (
                  <article
                    key={memory.caption}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${memories.length}: ${memory.caption}`}
                    aria-hidden={!isVisible}
                    className="w-[92%] shrink-0 px-2 py-3 sm:w-1/2 lg:w-1/4"
                  >
                    <figure
                      className={`${memory.rotation} relative h-full bg-paper p-2 pb-5 shadow-[0_10px_25px_rgb(7_53_111_/_12%)] transition duration-200 hover:-translate-y-1 hover:rotate-0 motion-reduce:transform-none motion-reduce:transition-none`}
                    >
                      <span
                        className={`absolute -top-2 left-1/2 z-10 h-4 w-12 -translate-x-1/2 -rotate-2 ${memory.tape}`}
                        aria-hidden="true"
                      />
                      <Image
                        src="/europe-hero-768.webp"
                        width={768}
                        height={512}
                        loading="lazy"
                        decoding="async"
                        alt="A cropped watercolor collage of European landmarks and travel keepsakes"
                        className="aspect-[4/3] w-full object-cover saturate-[0.82]"
                        style={{ objectPosition: memory.objectPosition }}
                      />
                      <figcaption className="px-2 pt-4 text-center text-navy">
                        <span className="display-font block text-xl font-bold leading-tight">{memory.caption}</span>
                        <span className="mt-1 block text-[10px] font-extrabold uppercase tracking-[0.11em] text-navy/65">
                          {memory.note}
                        </span>
                      </figcaption>
                    </figure>
                  </article>
                );
              })}
            </div>
          </div>

          <p className="sr-only" aria-live="polite" aria-atomic="true">
            Showing memories {activeIndex + 1} through {visibleEnd} of {memories.length}.
          </p>

          <div className="mt-4 flex flex-wrap justify-center" role="group" aria-label="Choose a memory slide">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Start with memory ${index + 1}`}
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
