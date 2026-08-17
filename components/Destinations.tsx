"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Clock3, NotebookText, UtensilsCrossed, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Destination = {
  city: string;
  country: string;
  activities: [string, string];
  itinerary: { time: string; plan: string }[];
  food: string;
  note: string;
  imagePosition: string;
};

const destinations: Destination[] = [
  {
    city: "Paris",
    country: "France",
    activities: ["Louvre after breakfast", "Sunset Seine walk"],
    itinerary: [
      { time: "Morning", plan: "Pick up a warm croissant, then wander the Tuileries before the Louvre gets busy." },
      { time: "Afternoon", plan: "Browse the bookstalls along the Seine and pause for a picnic on Île Saint-Louis." },
      { time: "Evening", plan: "Watch the city lights come on from Montmartre and find a tiny neighborhood bistro." },
    ],
    food: "Try a butter-rich jambon-beurre and share a box of jewel-colored macarons.",
    note: "Reserve the Louvre ahead, but leave one whole hour unplanned for getting happily lost.",
    imagePosition: "48% 50%",
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    activities: ["Canal-ring bicycle ride", "Rijksmuseum highlights"],
    itinerary: [
      { time: "Morning", plan: "Cycle the quiet Jordaan streets and stop beside the prettiest houseboats." },
      { time: "Afternoon", plan: "Choose three masterpieces at the Rijksmuseum, then rest in Museumplein." },
      { time: "Evening", plan: "Take a small canal boat at golden hour and walk the illuminated bridges." },
    ],
    food: "Order warm apple pie with whipped cream, then sample a cone of crisp Dutch fries.",
    note: "Follow the cycle lights and lanes carefully; locals move quickly even when the city feels dreamy.",
    imagePosition: "66% 22%",
  },
  {
    city: "Prague",
    country: "Czechia",
    activities: ["Dawn on Charles Bridge", "Old Town courtyards"],
    itinerary: [
      { time: "Morning", plan: "Cross Charles Bridge before breakfast and climb toward Prague Castle." },
      { time: "Afternoon", plan: "Trace the lanes of Malá Strana and linger in a bookshop or hidden garden." },
      { time: "Evening", plan: "See Old Town Square after dark and listen for live jazz below street level." },
    ],
    food: "Warm up with bramboráky potato pancakes and a cinnamon-dusted trdelník to share.",
    note: "Wear shoes that love cobblestones; the best viewpoints nearly always involve a hill.",
    imagePosition: "77% 49%",
  },
  {
    city: "Vienna",
    country: "Austria",
    activities: ["Schönbrunn gardens", "Classical evening concert"],
    itinerary: [
      { time: "Morning", plan: "Walk Schönbrunn's gardens to the Gloriette while the palace grounds are calm." },
      { time: "Afternoon", plan: "Share a slow coffeehouse table, then browse the MuseumsQuartier courtyards." },
      { time: "Evening", plan: "Dress up just a little for a chamber concert in an ornate historic hall." },
    ],
    food: "Pair a slice of apricot-glazed Sachertorte with a melange in a traditional coffeehouse.",
    note: "Vienna rewards slow afternoons—order one more coffee and let the room tell its stories.",
    imagePosition: "72% 58%",
  },
  {
    city: "Budapest",
    country: "Hungary",
    activities: ["Thermal bath morning", "Buda Castle at dusk"],
    itinerary: [
      { time: "Morning", plan: "Soak beneath the yellow arches of Széchenyi before the pools fill up." },
      { time: "Afternoon", plan: "Ride the tram along the Danube and explore the lanes of Castle Hill." },
      { time: "Evening", plan: "Watch Parliament glow from Fisherman's Bastion, then find a cozy ruin bar." },
    ],
    food: "Look for a bowl of paprika-rich goulash and finish with warm chimney cake.",
    note: "Bring flip-flops and a small towel for the baths, and validate every transit ticket.",
    imagePosition: "89% 56%",
  },
  {
    city: "Venice",
    country: "Italy",
    activities: ["Vaporetto to Burano", "Cicchetti by the canal"],
    itinerary: [
      { time: "Morning", plan: "Start near Rialto, then turn down whichever quiet lane catches your eye." },
      { time: "Afternoon", plan: "Ride the lagoon to colorful Burano and photograph laundry fluttering overhead." },
      { time: "Evening", plan: "Hop between tiny bacari for cicchetti as the day-trippers leave the city." },
    ],
    food: "Try baccalà mantecato on toast and a paper cone of lagoon-fresh fried seafood.",
    note: "The wrong turn is part of Venice; save the map for when you truly need to catch a train.",
    imagePosition: "53% 76%",
  },
  {
    city: "Rome",
    country: "Italy",
    activities: ["Colosseum and Forum", "Trastevere evening"],
    itinerary: [
      { time: "Morning", plan: "Enter the Colosseum early, then walk straight into the layered ruins of the Forum." },
      { time: "Afternoon", plan: "Refill your bottle at a nasone fountain and seek shade in Villa Borghese." },
      { time: "Evening", plan: "Cross to Trastevere for ivy-covered lanes, dinner, and one last gelato." },
    ],
    food: "Choose a classic cacio e pepe, followed by pistachio gelato from a proper gelateria.",
    note: "Book major sights in advance and carry a light scarf for churches and breezy evenings.",
    imagePosition: "43% 88%",
  },
  {
    city: "Barcelona",
    country: "Spain",
    activities: ["Sagrada Família light", "Park Güell mosaics"],
    itinerary: [
      { time: "Morning", plan: "See the colored light spill through Sagrada Família's stained-glass windows." },
      { time: "Afternoon", plan: "Picnic above the city in Park Güell, then wander Gràcia's small plazas." },
      { time: "Evening", plan: "Share tapas in El Born and take a late walk toward the Mediterranean." },
    ],
    food: "Order pan con tomate, patatas bravas, and a thick slice of tortilla for the table.",
    note: "Dinner starts late here; use the long golden evening for one more neighborhood wander.",
    imagePosition: "27% 76%",
  },
  {
    city: "Lisbon",
    country: "Portugal",
    activities: ["Tram 28 hill ride", "Belém pastry stop"],
    itinerary: [
      { time: "Morning", plan: "Ride the tram before the queues, then follow Alfama's tiled lanes downhill." },
      { time: "Afternoon", plan: "Travel to Belém for the monastery, waterfront, and a still-warm pastel de nata." },
      { time: "Evening", plan: "Catch sunset at a miradouro and listen for fado drifting from a doorway." },
    ],
    food: "Dust a warm pastel de nata with cinnamon and try grilled sardines when they are in season.",
    note: "The hills are real—pack grippy shoes and let the funicular rescue tired legs.",
    imagePosition: "14% 82%",
  },
  {
    city: "Interlaken",
    country: "Switzerland",
    activities: ["Mountain railway day", "Turquoise lake walk"],
    itinerary: [
      { time: "Morning", plan: "Take the first train toward Lauterbrunnen and walk beneath the valley waterfalls." },
      { time: "Afternoon", plan: "Ride higher for an alpine view, or choose a gentle path beside Lake Brienz." },
      { time: "Evening", plan: "Return for a picnic by the Aare as paragliders float over the town." },
    ],
    food: "Share rösti with melted mountain cheese and save room for a square of Swiss chocolate.",
    note: "Mountain weather changes quickly; carry a light layer even when the valley begins sunny.",
    imagePosition: "58% 63%",
  },
  {
    city: "Copenhagen",
    country: "Denmark",
    activities: ["Nyhavn harbor stroll", "Cycle like a local"],
    itinerary: [
      { time: "Morning", plan: "Rent a bicycle and trace the harbor bridges before stopping in Nyhavn." },
      { time: "Afternoon", plan: "Browse design shops, then find a sunny bench in the King's Garden." },
      { time: "Evening", plan: "Explore Tivoli's glowing paths or settle into a candlelit neighborhood café." },
    ],
    food: "Build an open-faced smørrebrød lunch and pause later for a cardamom bun.",
    note: "Signal before turning on a bike and step out of the cycle lane before taking photos.",
    imagePosition: "75% 17%",
  },
  {
    city: "Tromsø",
    country: "Norway",
    activities: ["Northern-lights watch", "Quiet fjord cruise"],
    itinerary: [
      { time: "Morning", plan: "Ride the cable car for a blue-hour view across the island and snowy peaks." },
      { time: "Afternoon", plan: "Join a small fjord trip and watch for sea eagles along the cold coastline." },
      { time: "Evening", plan: "Head away from city lights with a warm drink and wait patiently for the aurora." },
    ],
    food: "Warm up with creamy fish soup and a cinnamon skolebrød from a local bakery.",
    note: "The aurora keeps its own schedule; plan a few nights and celebrate the sky even if it stays quiet.",
    imagePosition: "89% 14%",
  },
];

export function Destinations() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const activeTriggerRef = useRef<HTMLButtonElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex === null ? null : destinations[selectedIndex];

  useEffect(() => {
    if (selectedIndex !== null && !dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, [selectedIndex]);

  const openDestination = (index: number, trigger: HTMLButtonElement) => {
    activeTriggerRef.current = trigger;
    setSelectedIndex(index);
  };

  const closeDestination = () => {
    dialogRef.current?.close();
  };

  const restoreFocus = () => {
    setSelectedIndex(null);
    window.requestAnimationFrame(() => activeTriggerRef.current?.focus());
  };

  return (
    <section id="destinations" className="torn-top paper-texture scroll-mt-16 relative bg-seafoam px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-[#b8e0d3]/70" />
      <div className="relative mx-auto max-w-[1180px]">
        <SectionHeading
          title="12 Months, 12 Destinations"
          description="A dotted route through twelve places, with two city-specific ideas waiting inside every card."
        />
        <p className="-mt-5 mb-4 flex items-center justify-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-navy/65 sm:hidden">
          Swipe to explore all 12 <ArrowRight size={13} aria-hidden="true" />
        </p>
        <div className="absolute -left-5 bottom-5 top-28 hidden w-3 border-l-2 border-dashed border-navy/45 lg:block" aria-hidden="true" />

        <div
          className="destination-scroller -mx-5 grid auto-cols-[82%] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain scroll-px-5 snap-x snap-mandatory touch-pan-x px-5 pb-5 sm:mx-0 sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:overscroll-auto sm:scroll-px-0 sm:snap-none sm:px-0 sm:pb-0 lg:grid-cols-3 xl:grid-cols-4"
          role="region"
          aria-label="Twelve monthly destination cards"
        >
          {destinations.map((destination, index) => (
            <article key={destination.city} className="min-w-0 snap-start">
              <button
                type="button"
                onClick={(event) => openDestination(index, event.currentTarget)}
                aria-haspopup="dialog"
                className="group w-full rounded-xl border border-[#d5cbae] bg-[#fff9e9] p-3 text-left shadow-[0_10px_25px_rgb(7_53_111_/_12%)] transition duration-200 hover:-translate-y-1 hover:rotate-[0.3deg] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy motion-reduce:transform-none"
              >
                <span
                  className="relative block aspect-[1.38] overflow-hidden rounded-lg bg-cream bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: 'url("/europe-hero-768.webp")',
                    backgroundPosition: destination.imagePosition,
                    backgroundSize: "245%",
                  }}
                  aria-hidden="true"
                >
                  <span className="absolute inset-0 bg-gradient-to-t from-navy/10 via-transparent to-white/10 transition duration-200 group-hover:bg-transparent" />
                  <span className="absolute left-2 top-2 grid size-9 place-items-center rounded-full border border-white/70 bg-[#fffdf7]/90 text-sm font-extrabold text-navy shadow-sm">
                    {index + 1}
                  </span>
                  <span className="absolute bottom-2 right-2 text-xl text-sunshine drop-shadow-sm">✦</span>
                </span>

                <span className="block px-1 pb-1 pt-3">
                  <span className="block text-[9px] font-extrabold uppercase tracking-[0.16em] text-navy/55">
                    Month {index + 1} • {destination.country}
                  </span>
                  <span className="display-font mt-0.5 block text-3xl font-bold leading-none text-navy">{destination.city}</span>
                  <span className="mt-2 block space-y-1 text-[11px] font-semibold leading-4 text-navy/75">
                    {destination.activities.map((activity) => (
                      <span key={activity} className="block">• {activity}</span>
                    ))}
                  </span>
                  <span className="mt-3 flex min-h-8 items-center justify-between border-t border-navy/15 pt-2 text-[9px] font-extrabold uppercase tracking-[0.15em] text-navy">
                    Open itinerary <ArrowRight size={13} aria-hidden="true" />
                  </span>
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={restoreFocus}
        aria-labelledby={selected ? "destination-dialog-title" : undefined}
        aria-describedby={selected ? "destination-dialog-description" : undefined}
        className="destination-dialog overflow-y-auto"
      >
        {selected ? (
          <div>
            <div
              className="relative h-44 bg-cover bg-no-repeat sm:h-52"
              style={{
                backgroundImage: 'url("/europe-hero-768.webp")',
                backgroundPosition: selected.imagePosition,
                backgroundSize: "190%",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#fffdf7] via-transparent to-navy/5" />
              <button
                type="button"
                onClick={closeDestination}
                className="absolute right-3 top-3 grid size-11 place-items-center rounded-full border border-navy/15 bg-paper/95 text-navy shadow-md transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-navy motion-reduce:transform-none"
                aria-label={`Close ${selected.city} itinerary`}
              >
                <X size={19} aria-hidden="true" />
              </button>
            </div>

            <div className="px-5 pb-6 sm:px-8 sm:pb-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-coral">Month {(selectedIndex ?? 0) + 1} • {selected.country}</p>
              <h2 id="destination-dialog-title" className="display-font mt-1 text-5xl font-bold leading-none text-navy sm:text-6xl">{selected.city}</h2>
              <p id="destination-dialog-description" className="mt-3 max-w-xl text-sm leading-6 text-navy/70">
                One unrushed day with a little culture, something delicious, and room for a surprise.
              </p>

              <section className="mt-6" aria-labelledby="destination-day-title">
                <h3 id="destination-day-title" className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-navy">
                  <Clock3 size={17} aria-hidden="true" /> A day to remember
                </h3>
                <ol className="mt-3 space-y-3">
                  {selected.itinerary.map((item) => (
                    <li key={item.time} className="grid gap-1 rounded-xl bg-mint/55 p-3 sm:grid-cols-[5rem_1fr] sm:gap-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-coral">{item.time}</span>
                      <span className="text-sm leading-5 text-navy/75">{item.plan}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <section className="rounded-xl border border-navy/10 bg-[#fff3d8] p-4" aria-labelledby="destination-food-title">
                  <h3 id="destination-food-title" className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-navy">
                    <UtensilsCrossed size={16} aria-hidden="true" /> Taste this
                  </h3>
                  <p className="mt-2 text-sm leading-5 text-navy/72">{selected.food}</p>
                </section>
                <section className="rounded-xl border border-navy/10 bg-[#e6eff8] p-4" aria-labelledby="destination-note-title">
                  <h3 id="destination-note-title" className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-navy">
                    <NotebookText size={16} aria-hidden="true" /> Little travel note
                  </h3>
                  <p className="mt-2 text-sm leading-5 text-navy/72">{selected.note}</p>
                </section>
              </div>

              <button
                type="button"
                onClick={closeDestination}
                className="mt-6 min-h-11 w-full rounded-full bg-action-coral px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_7px_16px_rgb(211_68_55_/_22%)] transition hover:-translate-y-0.5 hover:bg-action-coral-hover focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy motion-reduce:transform-none"
              >
                Back to all destinations
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
