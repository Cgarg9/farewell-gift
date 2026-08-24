"use client";

import { useEffect, useState } from "react";
import {
  Armchair,
  ChefHat,
  Coffee,
  Globe2,
  Grape,
  Hammer,
  HeartHandshake,
  Languages,
  MapPin,
  Sandwich,
  Snowflake,
  Store,
  Trees,
  Users,
  UtensilsCrossed,
  Wine,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Goal = {
  Icon: LucideIcon;
  AccentIcon: LucideIcon;
  label: string;
  tint: string;
  iconColor: string;
  accentColor: string;
};

const goals: Goal[] = [
  { Icon: HeartHandshake, AccentIcon: Globe2, label: "Make a new international friend", tint: "bg-[#e2edf8]", iconColor: "text-[#3974b9]", accentColor: "bg-[#3974b9]" },
  { Icon: ChefHat, AccentIcon: Users, label: "Host a dinner & cook for your friends", tint: "bg-[#fff0d3]", iconColor: "text-[#b86b24]", accentColor: "bg-[#b86b24]" },
  { Icon: Coffee, AccentIcon: MapPin, label: "Become a regular at a cafe", tint: "bg-[#f9e5dc]", iconColor: "text-[#b55248]", accentColor: "bg-[#b55248]" },
  { Icon: Trees, AccentIcon: Sandwich, label: "Have a solo picnic in a local park", tint: "bg-[#e4f1dc]", iconColor: "text-[#3e7c5e]", accentColor: "bg-[#3e7c5e]" },
  { Icon: Languages, AccentIcon: UtensilsCrossed, label: "Order food in the local language", tint: "bg-[#e6eff8]", iconColor: "text-[#3974b9]", accentColor: "bg-[#3974b9]" },
  { Icon: Store, AccentIcon: Snowflake, label: "Visit a Christmas market", tint: "bg-[#f5e4c4]", iconColor: "text-[#a64d55]", accentColor: "bg-[#a64d55]" },
  { Icon: Wine, AccentIcon: Grape, label: "Build a cheeseboard & have a wine night", tint: "bg-[#e5e4f6]", iconColor: "text-[#73558c]", accentColor: "bg-[#73558c]" },
  { Icon: Hammer, AccentIcon: Armchair, label: "Build a piece of furniture for your home", tint: "bg-[#e1f1ee]", iconColor: "text-[#2f7b70]", accentColor: "bg-[#2f7b70]" },
];

export function AdventureBucketList() {
  const [checked, setChecked] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = window.localStorage.getItem("europe-adventure-bucket-list-v2");
        if (saved) setChecked(JSON.parse(saved) as number[]);
      } catch {
        // The checklist still works when storage is unavailable.
      } finally {
        setHydrated(true);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem("europe-adventure-bucket-list-v2", JSON.stringify(checked));
    } catch {
      // Keep the in-memory interaction available without persistence.
    }
  }, [checked, hydrated]);

  const toggle = (index: number) => setChecked((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);

  return (
    <section id="bucket-list" className="paper-texture scroll-mt-16 relative px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
      <div className="stamp-ring absolute right-[7%] top-14 hidden sm:block" aria-hidden="true">Europe<br />Bucket list</div>
      <div className="mx-auto max-w-[1040px]">
        <SectionHeading eyebrow="Eight little promises" title="Europe Bucket List" description="Tap each card as you turn the idea into a story worth bringing home." />
        <p className="sr-only" aria-live="polite">{checked.length} of {goals.length} bucket-list ideas completed.</p>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {goals.map(({ Icon, AccentIcon, label, tint, iconColor, accentColor }, index) => {
            const active = checked.includes(index);
            return (
              <button key={label} type="button" aria-pressed={active} onClick={() => toggle(index)} className={`group relative min-h-48 rounded-2xl border p-4 text-left shadow-[0_8px_20px_rgb(7_53_111_/_7%)] transition duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy motion-reduce:transform-none motion-reduce:transition-none ${active ? "border-navy bg-navy text-white" : "border-navy/10 bg-white"}`}>
                <span className={`absolute left-3 top-3 grid size-6 place-items-center rounded-full border text-xs font-extrabold ${active ? "border-sunshine bg-sunshine text-navy" : "border-navy/35"}`} aria-hidden="true">{active ? "✓" : ""}</span>
                <span className="absolute bottom-3 left-4 display-font text-xl font-bold opacity-75">{index + 1}</span>
                <span className={`relative mx-auto grid size-[4.75rem] place-items-center rounded-[1.4rem] border shadow-[0_5px_12px_rgb(7_53_111_/_10%)] ${active ? "border-white/15 bg-white/10 text-sunshine" : `border-white/80 ${tint} ${iconColor}`}`} aria-hidden="true">
                  <Icon className="transition duration-200 group-hover:scale-110 motion-reduce:transform-none motion-reduce:transition-none" size={37} strokeWidth={1.65} />
                  <span className={`absolute -bottom-1.5 -right-1.5 grid size-7 place-items-center rounded-full border-2 border-white shadow-sm ${active ? "bg-sunshine text-navy" : `${accentColor} text-white`}`}>
                    <AccentIcon size={14} strokeWidth={2.1} />
                  </span>
                </span>
                <span className="mx-auto mt-3 block max-w-32 text-center text-xs font-bold leading-4">{label}</span>
                <span className="sr-only">{active ? "Completed" : "Not completed"}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
