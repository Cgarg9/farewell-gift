import { Plane } from "lucide-react";

export function PlaneIntro() {
  return (
    <div className="intro-away pointer-events-none fixed inset-0 z-50 grid place-items-center bg-cream" aria-hidden="true">
      <div className="absolute left-0 right-0 top-1/2 border-t-2 border-dashed border-navy/25" />
      <div className="plane-flight absolute left-0 top-[46%] rounded-full bg-white p-4 text-navy shadow-lg"><Plane className="-rotate-12" size={52} strokeWidth={1.8} /></div>
      <p className="display-font mt-28 text-3xl font-bold text-navy/75">Get ready for an amazing year!</p>
    </div>
  );
}
