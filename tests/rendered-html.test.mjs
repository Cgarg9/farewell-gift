import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("the complete farewell website follows the responsive rebuild brief", async () => {
  const [page, hero, header, bucketList, destinations, openWhen, messages, farewell, styles] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/Hero.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/SiteHeader.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/AdventureBucketList.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/Destinations.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/OpenWhen.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/MessagesFromHome.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/FarewellNote.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  const requiredComponents = [
    "SiteHeader",
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
  assert.match(header, /aria-expanded/);
  assert.match(header, /#memories/);
  assert.match(header, /#bucket-list/);
  assert.match(header, /#destinations/);
  assert.match(header, /#open-when/);
  assert.match(bucketList, /localStorage/);
  assert.match(destinations, /dialog|aria-modal|showModal/);
  assert.match(openWhen, /aria-expanded/);
  assert.match(messages, /Messages From Home/);
  assert.doesNotMatch(farewell, /will go here|placeholder/i);
  assert.doesNotMatch(page, /PlaneIntro/);
  assert.doesNotMatch(hero, /europe-plane|Get ready for an amazing year/);
  assert.doesNotMatch(styles, /hero-plane-cross|hero-plane\s*\{/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
});
