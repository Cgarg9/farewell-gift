import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("the complete farewell website follows the responsive rebuild brief", async () => {
  const [page, hero, memoryLane, bucketList, destinations, openWhen, messages, farewell, closing, styles] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/Hero.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/MemoryLane.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/AdventureBucketList.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/Destinations.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/OpenWhen.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/MessagesFromHome.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/FarewellNote.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/ClosingWish.tsx", import.meta.url), "utf8"),
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
  assert.match(hero, /Your<br \/>Europe<br \/>Adventure<br \/>Begins/);
  assert.match(styles, /europe-hero(?:-768)?\.webp/);
  assert.doesNotMatch(page, /SiteHeader/);
  assert.match(memoryLane, /title="To growing older, together"/);
  assert.match(memoryLane, /aria-label="To growing older, together"/);
  const memoryCards = [
    ["memory-01-celebrating-highs", "To celebrating the highs"],
    ["memory-02-annual-traditions", "Upholding annual traditions"],
    ["memory-03-belly-laughs", "Loud belly laughs"],
    ["memory-04-across-the-globe", "Visiting each other across the globe"],
    ["memory-05-surviving-lows", "Surviving the lows"],
    ["memory-06-discovering-family", "To discovering family"],
  ];
  for (const [filename, caption] of memoryCards) {
    assert.match(memoryLane, new RegExp(`/memories/${filename}\\.webp`));
    assert.ok(memoryLane.includes(caption));
    await access(new URL(`../public/memories/${filename}.webp`, import.meta.url));
  }
  assert.match(memoryLane, /alt=\{memory\.alt\}/);
  assert.match(memoryLane, /aspect-\[4\/3\]/);
  assert.match(memoryLane, /sizes="\(min-width: 1024px\) 260px/);
  assert.match(memoryLane, /tabIndex=\{0\}/);
  assert.doesNotMatch(memoryLane, /europe-hero-768\.webp|saturate-\[0\.82\]/);
  for (const oldCaption of ["The ridiculous laughs", "The long conversations", "The spontaneous plans", "The ordinary days", "The goodbye dinner", "The postcard promise"]) {
    assert.doesNotMatch(memoryLane, new RegExp(oldCaption));
  }
  assert.match(bucketList, /localStorage/);
  assert.match(bucketList, /europe-adventure-bucket-list-v2/);
  for (const idea of [
    "Make a new international friend",
    "Host a dinner & cook for your friends",
    "Become a regular at a cafe",
    "Have a solo picnic in a local park",
    "Order food in the local language",
    "Visit a Christmas market",
    "Build a cheeseboard & have a wine night",
    "Build a piece of furniture for your home",
  ]) assert.ok(bucketList.includes(idea));
  for (const oldIdea of ["Join a student club", "Keep a one-line journal", "Learn twenty local phrases", "Take a brave solo day trip"]) {
    assert.doesNotMatch(bucketList, new RegExp(oldIdea));
  }
  assert.match(bucketList, /min-h-48/);
  for (const iconPair of [
    "Icon: HeartHandshake, AccentIcon: Globe2",
    "Icon: ChefHat, AccentIcon: Users",
    "Icon: Coffee, AccentIcon: MapPin",
    "Icon: Trees, AccentIcon: Sandwich",
    "Icon: Languages, AccentIcon: UtensilsCrossed",
    "Icon: Store, AccentIcon: Snowflake",
    "Icon: Wine, AccentIcon: Grape",
    "Icon: Hammer, AccentIcon: Armchair",
  ]) assert.ok(bucketList.includes(iconPair));
  assert.match(bucketList, /size-\[4\.75rem\]/);
  assert.match(bucketList, /group-hover:scale-110/);
  assert.doesNotMatch(bucketList, /CookingPot|Gift|TreePine/);
  assert.match(destinations, /title="12 Months, 12 Destinations"/);
  assert.match(destinations, /overflow-x-auto/);
  assert.match(destinations, /snap-x/);
  assert.match(destinations, /snap-mandatory/);
  assert.match(destinations, /snap-start/);
  assert.match(destinations, /sm:grid-cols-2/);
  assert.match(destinations, /sm:overflow-visible/);
  assert.match(destinations, /aria-label="Twelve monthly destination cards"/);
  for (const city of ["paris", "amsterdam", "prague", "vienna", "budapest", "venice", "rome", "barcelona", "lisbon", "interlaken", "copenhagen", "tromso"]) {
    assert.match(destinations, new RegExp(`/destinations/${city}\\.webp`));
    await access(new URL(`../public/destinations/${city}.webp`, import.meta.url));
  }
  assert.doesNotMatch(destinations, /Landmark photography|Wikimedia Commons contributors/);
  assert.match(destinations, /alt=\{selected\.imageAlt\}/);
  assert.doesNotMatch(destinations, /europe-hero-768\.webp/);
  assert.match(destinations, /dialog|aria-modal|showModal/);
  assert.match(openWhen, /aria-expanded/);
  assert.match(messages, /Messages From Home/);
  for (const text of [
    "Tejal Di",
    "I don’t think it has fully sunk in yet that you’re actually in France 🥹",
    "We’re all sooooooooo happy and proud of you 😘",
    "Moving to a whole new country and going after something you’ve worked so hard for is such a big, brave thing to do, my baby!",
    "But also… we miss you already 🥺",
    "I hope France gives you everything you went there looking for - new experiences, lots of adventures, learning, and memories for forever.",
    "Sooo go explore fully.",
    "there’s an entire clan back home cheering for you, always 🙌",
    "We love you soooo much, we’re ridiculously proud of you",
    "we can’t wait to see everything this new chapter brings for you ♥️🇫🇷",
    "-- Tejal Di.",
    "Hey love,",
    "Wishing you the absolute best as you step into this beautiful new chapter! Hope it brings you everything you’ve ever wanted and more.",
    "I’m so proud of you for stepping outside your comfort zone, and giving yourself the chance to reinvent yourself, explore, take chances, and discover new sides of who you are.",
    "I’m so excited to see all the amazing things you’re going to do and the person you’ll become along the way.",
    "And no matter how far you are, I’ll always be here - cheering you on, celebrating your wins, and reminding you of how capable you are.",
    "I’m going to miss you more than you know. Always remember - home is always here, whenever you need it. 💛",
    "-- Wuzmal",
    "Go make memories eat all the croissants you want and remember",
    "distance doesn't cancel your membership in my life no refunds no cancellation",
    "So whenever you miss home feel lonely or just need someone to annoy you I am right here",
    "Go conquer france my little SPECIAL :3 Napoleon",
    "-KS",
  ]) assert.ok(messages.includes(text));
  const messagesData = messages.slice(messages.indexOf("const messages"), messages.indexOf("export function"));
  assert.equal((messagesData.match(/\n {4}initials:/g) ?? []).length, 4);
  assert.match(messages, /Four envelopes from home—three to open now, and one saved for the final message/);
  assert.match(messages, /Reserved for one more letter/);
  assert.match(messages, /Waiting for your message/);
  assert.match(messages, /item\.isPlaceholder \? \([\s\S]*?<div[\s\S]*?\) : \([\s\S]*?<button/);
  for (const removedSample of ["Maya Sharma", "Aarav Khanna", "Mum & Dad", "Leila Ahmed", "Nani"]) {
    assert.ok(!messages.includes(removedSample));
  }
  assert.match(messages, /Read full message/);
  assert.match(messages, /Back to all messages/);
  assert.match(messages, /aria-haspopup="dialog"/);
  assert.match(messages, /dialogRef\.current\?\.showModal\(\)/);
  assert.match(messages, /dialogRef\.current\?\.close\(\)/);
  assert.match(messages, /onClose=\{restoreFocus\}/);
  assert.match(messages, /activeTriggerRef\.current\?\.focus\(\)/);
  assert.match(messages, /aria-labelledby=\{selected \? "message-dialog-title" : undefined\}/);
  assert.match(messages, /aria-describedby=\{selected \? "message-dialog-description" : undefined\}/);
  assert.match(messages, /line-clamp-3/);
  assert.match(messages, /selected\.paragraphs\.map/);
  for (const token of ["overflow-x-auto", "snap-x", "snap-mandatory", "snap-start", "sm:grid-cols-2", "sm:overflow-visible", "lg:grid-cols-4", "overflow-y-auto"]) {
    assert.ok(messages.includes(token));
  }
  assert.doesNotMatch(messages, /translate3d|visibleCount|touchStartX/);
  assert.match(farewell, /A personal farewell letter from Aashu to Rupal/);
  assert.match(farewell, /Can I just say something before you go\?/);
  assert.match(farewell, /I’m really, really proud of you!/);
  assert.match(farewell, /We’re already proud of you and we all love you very, very much, Rupal!/);
  assert.match(farewell, /The distance between us is only measured in miles/);
  assert.match(farewell, /Always in your corner/);
  assert.match(farewell, /Aashu/);
  assert.match(farewell, /max-w-\[980px\]/);
  assert.match(farewell, /max-w-\[70ch\]/);
  assert.match(farewell, /aria-labelledby="farewell-note-title"/);
  assert.match(farewell, /id="farewell-note-title"/);
  assert.match(farewell, /rotate-0/);
  assert.doesNotMatch(farewell, /Dear adventurer|your people ♡|will go here|placeholder/i);
  assert.doesNotMatch(farewell, /min-h-72|max-h-|overflow-y-auto/);
  assert.doesNotMatch(closing, /Go explore &amp; make memories|href="#top"/);
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
