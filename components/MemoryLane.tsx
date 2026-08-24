"use client";

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex -- The labeled carousel region is intentionally focusable and handles swipe plus Arrow key navigation. */

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
    src: "/memories/memory-01-celebrating-highs.webp",
    alt: "Two friends smiling for a selfie at a restaurant",
    caption: "To celebrating the highs",
    rotation: "-rotate-[1.5deg]",
    tape: "bg-coral/80",
  },
  {
    src: "/memories/memory-02-annual-traditions.webp",
    alt: "Two friends posing together against a mountain landscape",
    caption: "Upholding annual traditions",
    rotation: "rotate-[1deg]",
    tape: "bg-[#3974b9]/75",
  },
  {
    src: "/memories/memory-03-belly-laughs.webp",
    alt: "Two friends laughing in a close-up outdoor selfie",
    caption: "Loud belly laughs",
    rotation: "-rotate-[0.75deg]",
    tape: "bg-[#55b9a1]/80",
  },
  {
    src: "/memories/memory-04-across-the-globe.webp",
    alt: "Two friends smiling together outside a city building",
    caption: "Visiting each other across the globe",
    rotation: "rotate-[1.5deg]",
    tape: "bg-sunshine/80",
  },
  {
    src: "/memories/memory-05-surviving-lows.webp",
    alt: "Two friends dressed for a celebration at home",
    caption: "Surviving the lows",
    rotation: "-rotate-[1deg]",
    tape: "bg-coral/80",
  },
  {
    src: "/memories/memory-06-discovering-family.webp",
    alt: "Two friends smiling together during a night out",
    caption: "To discovering family",
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
      aria-label="To growing older, together"
      className="torn-top torn-bottom scroll-mt-16 relative bg-mint px-5 py-16 sm:px-8 sm:py-20 lg:py-28"
    >
      <div className="stamp-ring absolute right-[8%] top-8 hidden sm:block" aria-hidden="true">
        Memories<br />Express
      </div>
      <div className="mx-auto max-w-[1120px]">
        <SectionHeading title="To growing older, together" />
        <p id="memory-carousel-help" className="sr-only">
          Use the previous and next buttons, swipe, or press the left and right arrow keys to explore all six memories.
        </p>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Shared memories"
          aria-describedby="memory-carousel-help"
          tabIndex={0}
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
                      className={`${memory.rotation} relative h-full bg-paper p-2 pb-3 shadow-[0_10px_25px_rgb(7_53_111_/_12%)] transition duration-200 hover:-translate-y-1 hover:rotate-0 motion-reduce:transform-none motion-reduce:transition-none`}
                    >
                      <span
                        className={`absolute -top-2 left-1/2 z-10 h-4 w-12 -translate-x-1/2 -rotate-2 ${memory.tape}`}
                        aria-hidden="true"
                      />
                      <div className="relative aspect-[4/3] overflow-hidden bg-seafoam/60">
                        <Image
                          src={memory.src}
                          alt={memory.alt}
                          fill
                          sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 92vw"
                          loading="lazy"
                          decoding="async"
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="flex min-h-[4.75rem] items-center justify-center px-2 pt-3 text-center text-navy">
                        <span className="display-font block text-xl font-bold leading-tight sm:text-[1.35rem]">{memory.caption}</span>
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
