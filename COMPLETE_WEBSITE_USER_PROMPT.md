# User Prompt: Build a Complete Watercolor European Adventure Website

Build a complete, polished, responsive single-page website based on the supplied reference picture. Use the picture as the primary source of truth for the art direction, color palette, typography, composition, and emotional tone. Extend that visual language consistently across the entire website rather than designing only the first screen.

The finished experience should feel like a handcrafted digital travel scrapbook and heartfelt farewell gift for someone beginning a European adventure. It should be warm, optimistic, personal, playful, and beautifully illustrated—not like a commercial travel-booking site or a corporate template.

## 1. Creative direction

### Theme

- European travel and studying abroad.
- Friendship, memories, encouragement, and new beginnings.
- A handmade travel journal mixed with postcards, Polaroids, stamps, tickets, envelopes, handwritten notes, and watercolor illustrations.
- Cheerful and youthful without looking childish.
- Sentimental without becoming overly decorative or wedding-like.
- Editorial and spacious, with careful negative space and a clear reading order.

### Visual style

- Warm cream paper backgrounds with a subtle, nearly invisible paper grain.
- Loose mint and seafoam watercolor washes.
- Hand-painted European landmarks and travel objects.
- Deep navy handwritten headings.
- Small coral hearts, golden starbursts, blue waves, dashed travel routes, stamps, paper tape, and hand-drawn arrows.
- White paper cards with slightly imperfect rotations and soft navy-tinted shadows.
- Occasional torn-paper section edges to make sections feel assembled by hand.
- Rounded interface elements and friendly typography.

Do not use glassmorphism, glossy effects, neon colors, photographic stock imagery, heavy black shadows, corporate dashboards, generic SaaS cards, or a sterile white-and-gray aesthetic.

## 2. Color palette

Use this palette consistently throughout the site:

| Purpose | Color | Hex |
|---|---|---|
| Primary navy | Deep maritime blue | `#07356F` |
| Secondary ink | Softer navy | `#103D73` |
| Main background | Warm cream | `#FFFAF0` |
| Paper cards | Soft off-white | `#FFFDF7` |
| Pale mint section | Misty mint | `#DCEFEA` |
| Seafoam wash | Muted green-blue | `#B8E0D3` |
| Primary accent | Warm coral | `#FF6D5C` |
| Accessible dark coral button | Deep coral-red | approximately `#D34437` |
| Golden accent | Sunshine yellow | `#F8C84B` |
| Cobalt accent | Postcard blue | `#3974B9` |
| Light blue accent | Watercolor sky blue | `#5BA6D6` |
| Forest accent | Muted pine green | `#16745E` |
| Terracotta accent | Warm landmark orange | approximately `#C96A3D` |

Use navy instead of pure black. Shadows should be low-opacity navy or coral. Keep the cream background warm rather than pure white.

## 3. Typography

Use two complementary type families:

1. **Handwritten display font:** Caveat, Kalam, Patrick Hand, or a close equivalent. Use this for the logo, major headings, sentimental phrases, photo captions, and handwritten notes.
2. **Friendly rounded sans serif:** Nunito, Quicksand, or a similar readable family. Use this for navigation, buttons, paragraphs, labels, lists, and form controls.

Typography guidance:

- Main hero heading: `clamp(60px, 8vw, 96px)`, bold, navy, very tight line-height around `0.8`.
- Section headings: `clamp(40px, 5vw, 64px)`, handwritten, bold, navy.
- Card headings: `26–34px`, handwritten.
- Body text: `15–18px`, line-height around `1.65`.
- Small labels and navigation: `9–11px`, uppercase, extra-bold, letter spacing between `0.1em` and `0.16em`.
- Keep line lengths between approximately 45 and 70 characters for comfortable reading.

## 4. Page framework

Create one long, responsive page with the following order:

1. Sticky navigation header.
2. Full-viewport illustrated hero.
3. Short welcome/introduction note.
4. Memory Lane photo section.
5. Europe Bucket List.
6. Twelve Months, Twelve Destinations.
7. Personal farewell letter.
8. Open When envelopes.
9. Messages From Home.
10. Closing wish and footer.

Use a centered maximum content width between `1120px` and `1240px`. Let watercolor backgrounds, torn-paper edges, and large illustrations extend beyond the content container to the edges of the viewport.

Use generous section spacing:

- Desktop: approximately `96–128px` vertically.
- Tablet: approximately `72–96px`.
- Mobile: approximately `56–72px`.

The entire page must avoid horizontal overflow.

## 5. Sticky header

Create a compact sticky header approximately `64px` high.

### Appearance

- Full-width deep navy background.
- Warm-white text.
- Very subtle lower border or navy shadow.
- Centered inner width around `1180px`.
- Horizontal padding of `20px` on mobile and `32px` on larger screens.

### Logo

Place a small two-line handwritten logo on the left:

> the great  
> European adventure ✦

Use white text and a small golden-yellow star.

### Navigation

Use these links:

- Memories
- Bucket List
- Destinations
- Open When

The links should be small, uppercase, bold, and widely tracked. Use a yellow hover/focus color.

### Header CTA

Place a coral pill button on the right:

> GO EXPLORE →

Use white text on an accessible dark-coral button surface, fully rounded corners, a subtle coral shadow, and a tiny lift on hover.

### Mobile navigation

Below the desktop navigation breakpoint, show the logo and a `44px` circular menu button. Opening it should reveal a compact navy mobile menu containing all navigation links and the CTA. Include correct `aria-expanded`, `aria-controls`, keyboard behavior, visible focus styles, and an accessible close action.

## 6. Hero section

The hero should fill the remaining viewport below the header with a minimum height of `calc(100svh - 64px)`.

### Layout

- Use an asymmetrical composition.
- Keep the left third available for the headline and CTA.
- Let the large watercolor scene dominate the center, right, and lower portion.
- Maintain a generous area of cream negative space behind the heading.
- Do not place the artwork inside a bordered card.
- Blend the bottom edge into a pale mint haze.

### Hero text

Set the title across exactly three lines:

> Your  
> Adventure  
> Begins

Use large bold handwritten navy text. Add a small coral outline heart near the bottom-right of the title.

Below it, add the primary coral CTA:

> GO EXPLORE →

Use a rounded pill shape, small uppercase text, and a gentle hover lift.

Optionally place a small tilted Polaroid/camera scrapbook accent beneath the button on larger screens. Hide it on small screens if it causes clutter.

### Watercolor artwork

Use a high-resolution raster illustration or a carefully prepared set of transparent raster assets. Do not recreate the main art with generic outline icons.

The illustration should contain:

- A loose mint watercolor map of Europe with irregular, organic edges and no country borders.
- One white passenger airplane with cobalt-blue wings and small coral details.
- A single navy dashed travel route.
- Big Ben in mustard yellow.
- The Eiffel Tower in cobalt/navy.
- The Arc de Triomphe in terracotta.
- A Dutch windmill in yellow and orange.
- Colorful European cathedral architecture.
- A blue-and-white train traveling across the map.
- A stack of blue and coral books with a warm coffee cup.
- A large cobalt coffee cup with pale steam near the lower-right.
- Small forest-green pine trees.
- Golden four-point stars, blue wave marks, coral hearts, and a few pale steam/wind curls.

The map and objects must share a soft watercolor-and-ink style with slight pigment variation and paper texture. Exactly one airplane should be visible in the hero.

## 7. Welcome note

After the hero, create a short introduction on a warm cream background.

Use a centered handwritten heading such as:

> A little something for your big adventure

Follow it with a short personal paragraph explaining that the website collects memories, encouragement, and ideas for the year ahead.

Decorate the section with one small stamp, a hand-drawn arrow, or a postcard mark. Keep the section light and spacious.

## 8. Memory Lane section

Create a pale-mint scrapbook section with a subtle torn-paper edge.

Heading:

> Our Memory Lane

Add a horizontal photo carousel or swipeable gallery of four to eight Polaroid-style memory cards.

Each card should include:

- A real image area with a `4:3` ratio.
- A slightly imperfect rotation of approximately `-2deg` to `2deg`.
- A white paper border.
- A small piece of coral, blue, mint, or yellow paper tape at the top.
- A handwritten caption such as “The ridiculous laughs,” “The long conversations,” “The spontaneous plans,” or “The ordinary days.”
- A soft navy-tinted shadow.

Include previous/next controls, swipe support, keyboard navigation, pagination dots, and accessible labels. On desktop, show four cards; on tablet, two or three; on mobile, show one prominent card with part of the next card visible.

## 9. Europe Bucket List section

Use a warm cream paper background.

Heading:

> Europe Bucket List

Create eight interactive checklist cards arranged in a responsive grid.

Suggested goals:

- Join a student club.
- Make an international friend.
- Host a dinner.
- Keep a one-line journal.
- Learn twenty local phrases.
- Take a brave solo day trip.
- Share something from home.
- Record a voice note for future you.

Each card should have:

- A large rounded paper shape.
- A small numbered marker.
- One simple themed icon.
- A custom circular checkbox.
- A pale watercolor tint chosen from mint, blue, yellow, peach, or lilac-gray.
- A completed state with a navy background, white text, and a yellow checkmark.

Persist completed items in local storage so they remain checked after a refresh. Use buttons or checkboxes with proper labels and keyboard support.

Grid behavior:

- Four columns on large desktop.
- Two columns on tablet.
- One or two columns on mobile depending on available width.

## 10. Twelve Months, Twelve Destinations

Create a seafoam/mint section with a torn-paper top edge and a subtle dashed-route decoration.

Heading:

> 12 Months, 12 Destinations

Supporting text:

> A dotted route through twelve places, with two city-specific ideas waiting inside every card.

Create twelve travel cards for:

1. Paris, France.
2. Amsterdam, Netherlands.
3. Prague, Czechia.
4. Vienna, Austria.
5. Budapest, Hungary.
6. Venice, Italy.
7. Rome, Italy.
8. Barcelona, Spain.
9. Lisbon, Portugal.
10. Interlaken, Switzerland.
11. Copenhagen, Denmark.
12. Tromsø, Norway.

Each destination card should contain:

- A month number badge.
- A watercolor city/landmark illustration area.
- The country in a tiny uppercase label.
- A large handwritten city name.
- Two realistic activity suggestions.
- A small “Open itinerary →” action.
- Warm paper background, subtle border, rounded corners, and a low navy shadow.

Interactions:

- On hover, lift the card by only a few pixels.
- Clicking a card should open an accessible modal, drawer, or expandable area with a short sample itinerary, food suggestion, and travel note.
- The close action must work with mouse, touch, keyboard, and Escape.

Grid behavior:

- Four columns on large desktop.
- Three columns on medium desktop when space permits.
- Two columns on tablet.
- One column on small mobile.

## 11. Personal farewell letter

Create a cream section centered around an airmail letter.

Heading:

> A Little Note for You ✦

The letter should look like lined stationery inside a red, white, and blue airmail border. Add a small postage stamp, faint postmark, tiny plane motif, camera mark, and coral heart.

Use real HTML text over the paper rather than embedding the message inside an image. The handwriting/body copy must remain readable and selectable.

Use a warm, heartfelt sample message that can be replaced later. The paper may be rotated by less than one degree and should cast a very soft navy-tinted shadow.

## 12. Open When section

Use a pale mint background with a soft torn-paper edge.

Heading:

> Open When…

Create four colorful interactive envelopes:

- You miss home.
- You need courage.
- You have great news.
- You need a laugh.

Use muted mint, golden yellow, postcard blue, and coral. Each envelope should include a folded-paper appearance and a small white wax-seal-like circle with a coral heart.

When activated, each envelope should open into a letter card with a short supportive message. Use a gentle CSS transition, but keep motion restrained. Make every envelope accessible by keyboard and expose its open/closed state with appropriate ARIA attributes.

Display four columns on desktop, two on tablet, and one or two on mobile.

## 13. Messages From Home

Create a soft mint or cream section with the heading:

> Messages From Home

Display a responsive carousel of message cards from friends and family.

Each message should include:

- A small circular avatar or initials.
- The sender’s name and relationship.
- A short encouraging message.
- A tiny coral heart.
- White paper background, rounded corners, and a subtle shadow.

Provide previous/next buttons, swipe support, pagination indicators, and keyboard navigation. Show three messages on desktop, two on tablet, and one on mobile.

Use realistic sample names and messages rather than placeholder skeleton bars or lorem ipsum.

## 14. Closing section and footer

Return to the warm cream paper background for the closing wish.

Use a large centered handwritten heading:

> Go Make Stories  
> Worth Telling ♡

Place a coral CTA beneath it:

> GO EXPLORE & MAKE MEMORIES →

Add a few restrained scrapbook accents, such as a small tilted photo, folded map, postcard stamp, or coral heart.

Finish with a deep navy footer containing a warm handwritten line such as:

> We’ll be cheering for you—from here to every adventure and back. ♡

Include a small cream envelope tab overlapping the top of the footer. Keep the footer compact and emotionally warm.

## 15. Responsive requirements

Design mobile-first and verify the layout at approximately these widths:

- `360px` small mobile.
- `390px` modern mobile.
- `768px` tablet.
- `1024px` small desktop/tablet landscape.
- `1440px` desktop.
- `1920px` wide desktop.

### Mobile

- Use a compact header with a working menu.
- Keep the hero heading around `60–70px` and preserve its three-line break.
- Recompose or crop the watercolor artwork deliberately; do not merely shrink the desktop canvas.
- Ensure important artwork remains recognizable without obscuring text.
- Use one-column or two-column grids based on card width.
- Keep all controls at least `44px` tall/wide where practical.
- Allow horizontal swipe only inside intentional carousels.
- Prevent any page-level horizontal scrolling.

### Tablet

- Increase heading sizes and whitespace gradually.
- Use two-column card layouts where appropriate.
- Hide or simplify the desktop navigation before it becomes crowded.
- Reposition decorative assets to avoid collisions.

### Desktop

- Keep content centered within `1120–1240px`.
- Use generous negative space and full multi-column grids.
- Let decorative watercolor elements extend beyond the content boundary without causing overflow.
- Keep the main reading order obvious despite the asymmetrical scrapbook layout.

## 16. Motion and interaction style

Use gentle, restrained motion:

- `150–250ms` hover and focus transitions.
- Small card lifts of `2–5px`.
- Slight rotation corrections on hovered Polaroids.
- Soft envelope opening transitions.
- Smooth anchor scrolling.
- Optional extremely subtle floating motion on one or two decorative elements.

Do not use a loading intro, autoplay splash screen, large parallax effects, bouncing landmarks, spinning icons, or constant distracting animation.

Respect `prefers-reduced-motion` and remove nonessential animation when it is enabled.

## 17. Accessibility

- Use semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`.
- Use one `<h1>` in the hero and logical heading levels afterward.
- Ensure navigation anchors point to real section IDs.
- Include a skip-to-content link.
- Provide visible focus indicators on every interactive element.
- Maintain WCAG AA text contrast.
- Use meaningful alternative text for content images and empty alt text for purely decorative images.
- Keep decorative elements out of the accessibility tree.
- Make carousels, modals, drawers, envelopes, and checklist items fully keyboard accessible.
- Support Escape to close overlays.
- Do not use color alone to communicate checked, selected, or open states.

## 18. Performance and implementation

Use React/Next.js with TypeScript and responsive CSS or Tailwind CSS. Keep the component structure clear and maintainable.

Suggested components:

- `SiteHeader`
- `Hero`
- `WelcomeNote`
- `MemoryLane`
- `BucketList`
- `DestinationsGrid`
- `DestinationDialog`
- `FarewellLetter`
- `OpenWhen`
- `MessagesFromHome`
- `ClosingWish`
- `SiteFooter`

Implementation requirements:

- Use optimized WebP or AVIF raster artwork with responsive source sizes.
- Define image dimensions or aspect ratios to avoid layout shift.
- Lazy-load below-the-fold images.
- Preload only the critical hero artwork and necessary fonts.
- Use icon components only for small interface icons; do not replace the main watercolor illustrations with an icon library.
- Store editable content in structured arrays or objects rather than duplicating markup.
- Use local storage only for the bucket-list completion state.
- Avoid unnecessary dependencies and complex global state.
- Ensure the site works without runtime errors and builds successfully.

## 19. Content quality

Use warm, specific, believable copy throughout the page. Do not use lorem ipsum, generic placeholders, empty cards, or skeleton bars in the finished website.

The language should sound like a close friend created the site as a farewell gift. Keep sentences encouraging and natural, not overly poetic or promotional.

## 20. Final acceptance checklist

The website is complete only when:

- The entire page follows one coherent watercolor European travel-journal style.
- The header, hero, and every later section feel visually connected.
- The page includes all ten major sections listed above.
- The hero contains the large three-line title and a recognizable watercolor Europe composition.
- The palette consistently uses cream, navy, mint, seafoam, coral, yellow, cobalt, and forest green.
- The display typography feels handwritten and the body typography remains highly readable.
- The navigation works and points to real sections.
- The mobile menu works.
- The Memory Lane and Messages From Home carousels work with mouse, touch, and keyboard.
- Bucket-list items can be checked and persist after refresh.
- Destination cards open useful itinerary details.
- Open When envelopes reveal their messages accessibly.
- All text is real HTML rather than baked into artwork.
- The page is responsive at mobile, tablet, desktop, and wide-desktop sizes.
- No text overlaps important artwork or becomes unreadable.
- There is no page-level horizontal overflow.
- All interactive controls have hover, focus, active, and disabled states where appropriate.
- Motion remains gentle and respects reduced-motion preferences.
- Images are optimized and do not cause layout shift.
- The final result feels personal, polished, joyful, and handcrafted.

After implementing the first version, compare it carefully with the supplied reference picture. Correct differences in color temperature, typography scale, spacing, artwork crop, landmark placement, card proportions, and decorative density before considering the website finished.
