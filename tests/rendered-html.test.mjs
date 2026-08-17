import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("the complete farewell website follows the responsive rebuild brief", async () => {
  const [page, hero, bucketList, destinations, openWhen, messages, farewell, styles] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/Hero.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/AdventureBucketList.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/Destinations.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/OpenWhen.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/MessagesFromHome.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/FarewellNote.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  const requiredComponents = [
    "Hero",
    "WelcomeNote",
    "MemoryLane",
    "AdventureBucketList",
    "Destinations",
    "FarewellNote",
    "OpenWhen",
    "MessagesFromHome",
    "ClosingWish",
  ];

  for (const component of requiredComponents) assert.match(page, new RegExp(component));
  assert.match(page, /Skip to content/);
  assert.match(hero, /Your<br \/>Adventure<br \/>Begins/);
  assert.match(styles, /europe-hero(?:-768)?\.webp/);
  assert.doesNotMatch(page, /SiteHeader/);
  assert.match(bucketList, /localStorage/);
  assert.match(destinations, /title="12 Months, 12 Destinations"/);
  assert.match(destinations, /overflow-x-auto/);
  assert.match(destinations, /snap-x/);
  assert.match(destinations, /snap-mandatory/);
  assert.match(destinations, /snap-start/);
  assert.match(destinations, /sm:grid-cols-2/);
  assert.match(destinations, /sm:overflow-visible/);
  assert.match(destinations, /aria-label="Twelve monthly destination cards"/);
  assert.match(destinations, /dialog|aria-modal|showModal/);
  assert.match(openWhen, /aria-expanded/);
  assert.match(messages, /Messages From Home/);
  assert.doesNotMatch(farewell, /will go here|placeholder/i);
  assert.doesNotMatch(page, /PlaneIntro/);
  assert.doesNotMatch(hero, /europe-plane|Get ready for an amazing year/);
  assert.doesNotMatch(hero, /Go explore/);
  assert.doesNotMatch(hero, /♡/);
  assert.match(hero, /Camera, Compass, MapPin/);
  assert.match(hero, /max-w-\[17rem\]/);
  assert.doesNotMatch(styles, /hero-plane-cross|hero-plane\s*\{/);
  assert.match(styles, /\.torn-top\s*\{[^}]*1\.25rem/);
  assert.match(styles, /\.hero-artwork\s*\{[^}]*position:\s*absolute/s);
  assert.match(styles, /\.hero-artwork\s*\{[^}]*inset:\s*0/s);
  assert.match(styles, /height:\s*clamp\(20rem, 85vw, 24rem\)/);
  assert.match(styles, /height:\s*clamp\(20rem, 66\.667vw, 42\.5rem\)/);
  assert.match(styles, /background-size:\s*auto 100%/);
  assert.match(styles, /background-size:\s*100% auto/);
  assert.match(styles, /@media \(min-width: 1024px\)[\s\S]*?\.hero-shell,[\s\S]*?min-height:\s*100svh/);
  assert.match(styles, /@media \(min-width: 1024px\)[\s\S]*?\.hero-artwork\s*\{[^}]*background-position:\s*60% top/);
  assert.match(styles, /@media \(min-width: 1024px\)[\s\S]*?\.hero-artwork\s*\{[^}]*background-size:\s*116% auto/);
  assert.doesNotMatch(styles, /background-size:\s*max\(108vw,\s*150svh\)/);
  assert.ok(hero.indexOf("hero-content") < hero.indexOf("adventure-map"));
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
});
