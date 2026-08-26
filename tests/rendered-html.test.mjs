import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("the complete farewell website follows the responsive rebuild brief", async () => {
  const [page, hero, sectionHeading, memoryLane, bucketList, destinations, openWhen, messages, farewell, closing, styles] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/Hero.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/SectionHeading.tsx", import.meta.url), "utf8"),
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
  assert.match(sectionHeading, /showHeart = true/);
  assert.match(sectionHeading, /showHeart \?/);
  assert.match(destinations, /title="12 Months, 12 Destinations"/);
  assert.match(destinations, /showHeart=\{false\}/);
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
  const openWhenData = openWhen.slice(openWhen.indexOf("const envelopes"), openWhen.indexOf("export function"));
  assert.equal((openWhenData.match(/\n {4}id:/g) ?? []).length, 4);
  for (const text of [
    "You consider becoming a trophy wife 💅",
    "Open when you consider becoming a trophy wife 💅",
    "Hi.",
    "I’d like to remind you that you’re the same person who reorganizes spreadsheets for fun and gets annoyed when people do things inefficiently.",
    "You are not built to be a trophy wife. You just like the idea of it.",
    "By Day 3, you’d have started a business.",
    "By Day 5, you’d be giving unsolicited feedback to everyone in the house.",
    "By Day 7, you’d have accidentally become CEO of something.",
    "You don’t want financial dependence.",
    "You want to destroy the patriarchy, make KS the trophy husband, travel the world, and never have to decide what’s for dinner ever again.",
    "Big difference 🥸😌",
    "The LDRs feel a bit too much",
    "When the LDRs feel a bit too much",
    "I know.",
    "Some days, no amount of sightseeing, cute European bois, pastries 🥐 or pretty streets can make up for the fact that your people are 6,000 kilometres away.",
    "On those days, don’t put pressure on yourself to “make the most of it.”",
    "Call us. Voice note us. Spam us. Cry if you need to. Then order yourself a little treat and and an iced coffee because that’s exactly what we’d have done if we were with you.",
    "I wish I could magically appear there with a diet coke, a cosy book and a biiiig hug, but until then, this letter will have to do.",
    "And just remember…",
    "You’re not missing home because Europe isn’t enough.",
    "You’re missing home because you have people worth missing.",
    "We’ll still be here when you get back. ❤️",
    "You see that annoying classmate. Yes, HIM.",
    "When you see that annoying classmate. Yes, HIM.",
    "Deep breaths.",
    "Before you commit a felony…",
    "Remember:",
    "Not everyone deserves your energy.",
    "Nod.",
    "Smile.",
    "Mentally mute him.",
    "Then come and rant to me in 17 voice notes.",
    "I fully support bullying him…",
    "REMEMBER, DON’T BE FRIENDS WITH THEM!!!",
    "P.S. If he spams on a group one more time…you have my blessing to add me to that group so i can be a bitch to him and call him out",
    "You start feeling anxious about your decision",
    "🤍 Open when you start feeling anxious about your decision",
    "I’m guessing you’ve convinced yourself that you’ve made a terrible mistake.",
    "Classic.",
    "Before your brain starts writing a 47-slide presentation on “Why Moving to Europe Was a Horrible Idea”, let’s remember a few things.",
    "You wanted this.",
    "For a really long time.",
    "You didn’t wake up one random Tuesday and decide to move across the world. You thought about it, worked for it, stressed about it, and then had the courage to actually do it.",
    "So no, one bad day doesn’t suddenly mean you made the wrong decision.",
    "It just means… you’re having a bad day.",
    "Missing home doesn’t mean you should’ve stayed.",
    "Feeling overwhelmed doesn’t mean you’re not capable.",
    "It just means you’re doing something big.",
    "Give it time.",
    "Stop looking at Instagram reels. They are only adding fuel to the fire.",
    "And if you’re still spiralling after reading this…",
    "Call me.",
    "I’ll happily remind you why Past You was smarter than Anxious You.",
    "❤️",
  ]) assert.ok(openWhen.includes(text));
  assert.equal((openWhenData.match(/"Hi\."/g) ?? []).length, 2);
  assert.match(openWhen, /showHeart=\{false\}/);
  assert.match(openWhen, /openEnvelope\.paragraphs\.map/);
  assert.match(openWhen, /<dialog/);
  assert.match(openWhen, /aria-haspopup="dialog"/);
  assert.match(openWhen, /dialogRef\.current\?\.showModal\(\)/);
  assert.match(openWhen, /dialogRef\.current\?\.close\(\)/);
  assert.match(openWhen, /onClose=\{restoreFocus\}/);
  assert.match(openWhen, /activeTriggerRef\.current\?\.focus\(\)/);
  assert.match(openWhen, /aria-labelledby=\{openEnvelope \? "open-when-dialog-title" : undefined\}/);
  assert.match(openWhen, /aria-describedby=\{openEnvelope \? "open-when-dialog-description" : undefined\}/);
  assert.match(openWhen, /className="destination-dialog overflow-y-auto"/);
  assert.match(openWhen, /Back to all letters/);
  assert.match(openWhen, /min-h-56/);
  assert.doesNotMatch(openWhen, /aria-expanded|aria-controls="open-when-letter"|aria-live="polite"|grid-rows-\[1fr\]|triggerRefs|foldLetter/);
  assert.match(styles, /\.destination-dialog::backdrop\s*\{[^}]*background:\s*rgb\(7 53 111 \/ 58%\)[^}]*backdrop-filter:\s*blur\(3px\)/s);
  assert.doesNotMatch(openWhen, /Dear adventurer|with all my love|miss-home|need-courage|great-news|need-laugh/);
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
    "Aayushi",
    "BONJOUR LILLE, MY PALLU IS HERE! 🩷",
    "Words can’t suffice how proud I am of you! Every win of yours feels personal and I don’t think anyone deserves this more than you! You have always been an inspiration and now looking at you, ticking off one more dream? Uff feels unreal.",
    "You got this baby! This new journey is waiting for you and I’m with you through all of it…good/bad/everything! Let’s do thisss with the biggest smile, a little nervous mind and an empty memory box! Can’t wait to see your journey and be by your side through it all 🩷🧿 love you, miss you, hug you😘",
    "-Aayushi",
  ]) assert.ok(messages.includes(text));
  const messagesData = messages.slice(messages.indexOf("const messages"), messages.indexOf("export function"));
  assert.equal((messagesData.match(/\n {4}initials:/g) ?? []).length, 4);
  for (const [name, filename, alt] of [
    ["KS", "letter-ks", "KS and Rupal smiling together for a café selfie"],
    ["Wuzmal", "letter-wuzmal", "Wuzmal and Rupal dressed up together at a celebration"],
    ["Tejal Di", "letter-tejal", "Tejal and Rupal smiling beside an elephant"],
    ["Aayushi", "letter-aayushi", "Aayushi and Rupal sitting together and smiling"],
  ]) {
    const entryStart = messagesData.indexOf(`name: "${name}"`);
    const entryEnd = messagesData.indexOf("\n  },", entryStart);
    const entry = messagesData.slice(entryStart, entryEnd);
    assert.ok(entry.includes(`image: "/messages/${filename}.webp"`));
    assert.ok(entry.includes(`imageAlt: "${alt}"`));
    await access(new URL(`../public/messages/${filename}.webp`, import.meta.url));
  }
  assert.match(messages, /import Image from "next\/image"/);
  assert.match(messages, /alt=\{item\.imageAlt\}/);
  assert.match(messages, /aspect-\[4\/3\]/);
  assert.match(messages, /object-cover/);
  assert.match(messages, /group-hover:scale-\[1\.03\]/);
  assert.match(messages, /Four envelopes from home—each one ready to open whenever you need a little love/);
  assert.doesNotMatch(messages, /One more letter|Waiting for the final message|Reserved for one more letter|Waiting for your message|isPlaceholder/);
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
  assert.match(closing, /We’ll be cheering for you—from here to every adventure and back\.<\/p>/);
  assert.doesNotMatch(closing, /every adventure and back\.\s*<span[^>]*>♡<\/span>/);
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
