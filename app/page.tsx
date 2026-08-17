import { AdventureBucketList } from "@/components/AdventureBucketList";
import { ClosingWish } from "@/components/ClosingWish";
import { Destinations } from "@/components/Destinations";
import { FarewellNote } from "@/components/FarewellNote";
import { Hero } from "@/components/Hero";
import { MemoryLane } from "@/components/MemoryLane";
import { MessagesFromHome } from "@/components/MessagesFromHome";
import { OpenWhen } from "@/components/OpenWhen";
import { WelcomeNote } from "@/components/WelcomeNote";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content" tabIndex={-1} className="min-h-screen overflow-hidden bg-cream text-navy outline-none">
        <span id="top" className="sr-only" aria-hidden="true" />
        <Hero />
        <WelcomeNote />
        <MemoryLane />
        <AdventureBucketList />
        <Destinations />
        <FarewellNote />
        <OpenWhen />
        <MessagesFromHome />
      </main>
      <ClosingWish />
    </>
  );
}
