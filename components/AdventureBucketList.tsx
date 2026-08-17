"use client";

import { useEffect, useState, type ComponentType } from "react";
import { AudioLines, Backpack, GraduationCap, HandHeart, Languages, NotebookPen, Users, UtensilsCrossed } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Goal = { Icon: ComponentType<{ size?: number; strokeWidth?: number }>; label: string; tint: string };
const goals: Goal[] = [
  { Icon: GraduationCap, label: "Join a student club", tint: "bg-[#e1f1ee]" },
  { Icon: Users, label: "Make a new international friend", tint: "bg-[#e2edf8]" },
  { Icon: UtensilsCrossed, label: "Host a dinner", tint: "bg-[#fff0d3]" },
  { Icon: NotebookPen, label: "Keep a one-line journal", tint: "bg-[#f9e5dc]" },
  { Icon: Languages, label: "Learn twenty local phrases", tint: "bg-[#e6eff8]" },
  { Icon: Backpack, label: "Take a brave solo day trip", tint: "bg-[#f5e4c4]" },
  { Icon: HandHeart, label: "Share something from home", tint: "bg-[#e4f1dc]" },
  { Icon: AudioLines, label: "Record a voice note for future you", tint: "bg-[#e5e4f6]" },
];

export function AdventureBucketList() {
  const [checked, setChecked] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = window.localStorage.getItem("europe-adventure-bucket-list");
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
      window.localStorage.setItem("europe-adventure-bucket-list", JSON.stringify(checked));
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
          {goals.map(({ Icon, label, tint }, index) => {
            const active = checked.includes(index);
            return (
              <button key={label} type="button" aria-pressed={active} onClick={() => toggle(index)} className={`relative min-h-40 rounded-2xl border p-4 text-left shadow-[0_8px_20px_rgb(7_53_111_/_7%)] transition duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy ${active ? "border-navy bg-navy text-white" : "border-navy/10 bg-white"}`}>
                <span className={`absolute left-3 top-3 grid size-6 place-items-center rounded-full border text-xs font-extrabold ${active ? "border-sunshine bg-sunshine text-navy" : "border-navy/35"}`} aria-hidden="true">{active ? "✓" : ""}</span>
                <span className="absolute bottom-3 left-4 display-font text-xl font-bold opacity-75">{index + 1}</span>
                <span className={`mx-auto grid size-14 place-items-center rounded-2xl ${active ? "bg-white/12" : tint}`}><Icon size={31} strokeWidth={1.6} /></span>
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
