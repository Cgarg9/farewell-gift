# Rebuild Prompt: Watercolor European Adventure Landing Page

Rebuild the supplied reference image as a polished, responsive landing page. Match the reference as closely as possible in composition, spacing, color, typography, illustration style, and visual hierarchy. Treat the reference image as the source of truth. The result should feel like a warm, handmade farewell gift for someone beginning a year of travel in Europe—not like a corporate travel-booking website.

## Core visual concept

Create a full-screen editorial hero that combines a clean coded interface with a large hand-painted watercolor travel illustration.

The emotional tone is:

- Warm, optimistic, personal, youthful, and celebratory.
- Handmade and scrapbook-inspired, but still clean and professionally composed.
- European travel, studying abroad, friendship, memory-making, and new beginnings.
- Playful rather than childish; sentimental without becoming overly ornate.

The page should look like a cream-colored sheet from an illustrated travel journal. The left side carries the headline and call to action. The right and lower portions are dominated by a mint watercolor map of Europe covered with whimsical landmarks and travel objects.

## Non-negotiable visual rules

- Show **exactly one airplane** in the entire hero.
- If the supplied hero artwork already includes an airplane, do not render another airplane icon, image, SVG, or component over it.
- Do not add a second dotted airplane route.
- Do not add the sentence “Get ready for an amazing year!” anywhere.
- Do not add an extra decorative flight banner above the headline.
- Do not add random decorations that are absent from the reference.
- Do not replace the watercolor illustration with generic outline icons or emoji.
- Do not place text inside the raster artwork. All readable interface text must be real HTML.
- Do not use glossy gradients, glassmorphism, dark shadows, photographic imagery, or a corporate SaaS aesthetic.

## Overall page structure

The visible page contains two primary layers:

1. A dark navy navigation bar across the top.
2. A hero section filling the rest of the viewport.

The hero should be at least `calc(100svh - 64px)` tall. It should crop cleanly at different viewport sizes and never produce a horizontal scrollbar.

Use a centered content boundary of approximately `1180px–1240px`, while allowing the watercolor artwork itself to extend edge-to-edge across the viewport.

## Header

Create a full-width, approximately `64px`-high header in deep navy blue. It may remain sticky at the top of the viewport.

### Header appearance

- Background: deep navy, approximately `#07356F`.
- Text: white or warm off-white.
- Bottom edge: extremely subtle pale border or shadow; avoid a heavy divider.
- Content width: approximately `1180px` centered.
- Horizontal padding: about `20px` on mobile and `32px` on larger screens.
- All items should be vertically centered.

### Logo

Place a compact, two-line handwritten wordmark on the left:

> the great  
> European adventure ✦

Use a friendly handwritten display font such as Caveat, or the closest available equivalent. The logo should be small and intimate, approximately `18–20px`, bold, tightly set, and white. Make the final small four-point star sunshine yellow.

### Desktop navigation

Center or visually balance these four links in the header:

- Memories
- Bucket list
- Destinations
- Open when

Style them as very small uppercase labels:

- Approximately `9–10px`.
- Extra-bold weight.
- Letter spacing around `0.12em`.
- White by default.
- Sunshine-yellow hover/focus state.
- Generous gaps of roughly `28–32px`.

### Header action

On the right, add a compact coral pill button labeled:

> GO EXPLORE →

Use real text plus a small right-arrow icon. The button should have:

- Coral background around `#FF6D5C`.
- White text.
- Fully rounded ends.
- Approximately `20px` horizontal and `10px` vertical padding.
- Very small uppercase, extra-bold text.
- A subtle coral-tinted shadow.
- A gentle upward movement or color darkening on hover.

### Mobile header

At mobile widths, keep the two-line logo on the left. Hide the center navigation and the coral header button. Show a small circular outlined menu button on the right with an accessible label. The header must remain uncluttered.

## Hero background and paper texture

The hero background is a warm ivory/cream, not pure white.

Use approximately:

- Main cream: `#FFFAF0`.
- Light paper highlight: `#FFFDF7`.
- Primary text/ink: `#07356F` or `#103D73`.

Add a barely visible paper texture using subtle radial gradients, low-opacity speckles, or a very fine grain overlay. The texture should only be noticeable on close inspection. It must not resemble noise, concrete, or recycled cardboard.

A soft mint haze may rise from the bottom of the hero to blend the illustration into the page. Use a low-opacity gradient from pale mint to transparent; keep it understated.

## Hero layout

The hero is asymmetrical.

- Reserve the left third for the title and call to action.
- Let the watercolor scene occupy the center, right side, and much of the lower half.
- Keep intentional cream negative space around the headline.
- The illustration may extend beyond the right and bottom edges so it feels expansive rather than boxed inside a card.
- No visible border, panel, or card should wrap the hero artwork.

On a large desktop viewport, place the headline block around `7–10%` from the left edge and roughly `20–25%` down from the top of the hero. Keep the text block approximately `340–380px` wide.

The content layer must sit above the watercolor artwork, but the artwork should visually flow behind and around it without making the title difficult to read.

## Main headline

Set the headline on three stacked lines:

> Your  
> Adventure  
> Begins

Use the same handwritten display family as the logo, but much larger and bolder.

Suggested desktop treatment:

- Color: deep navy `#07356F`.
- Font size: approximately `88–96px`.
- Font weight: bold.
- Line height: very tight, approximately `0.78–0.84`.
- Letter spacing: slightly negative, around `-0.04em`.
- The text should feel hand-lettered, confident, and imperfectly friendly.

Suggested mobile treatment:

- Use a fluid size such as `clamp(60px, 14vw, 94px)`.
- Preserve the three-line break.
- Ensure the title does not collide with the airplane or detailed landmarks.

Add one small coral outline heart near the lower-right edge of the headline, close to the word “Begins.” It should feel casually hand-drawn rather than like a filled UI icon.

## Primary hero button

Below the headline, add a coral pill-shaped button:

> GO EXPLORE →

Visual treatment:

- Top margin: approximately `20px`.
- Coral: `#FF6D5C`.
- Hover coral: approximately `#F75C4C`.
- White label and small arrow.
- Padding: about `28px` horizontally and `14px` vertically.
- Fully rounded.
- Text around `10px`, uppercase, extra-bold, with about `0.13em` letter spacing.
- Soft shadow such as a blurred coral shadow at roughly 20–30% opacity.
- Hover motion should be tiny—about `translateY(-2px)` to `translateY(-4px)`.

The button is an interface element and must remain crisp; do not bake it into the watercolor image.

## Optional lower-left scrapbook accent

If it is visible in the reference at the target viewport, place a small, slightly counter-clockwise-rotated Polaroid or camera-note accent below the hero button. Use a white paper frame, a muted pale-mint photo area, a dark navy camera symbol, and a soft paper shadow. A tiny coral outline heart may sit nearby.

Keep this accent secondary. Hide it at narrow widths if it causes crowding. Do not let it compete with the headline.

## Watercolor Europe illustration

The illustration is the defining visual element. It should look hand-painted with watercolor and ink, with soft edges, slight pigment variation, paper texture, and gentle imperfections.

### Map

- Show a loose, recognizable map of Europe made from translucent mint and seafoam watercolor washes.
- Use irregular organic edges rather than a vector-perfect geographic outline.
- Main mint range: approximately `#B8E0D3`, `#DCEFEA`, and lighter transparent variations.
- The land should have visible watercolor blooms and uneven pigment density.
- Avoid borders between countries.
- Leave surrounding ocean/negative space as cream paper rather than solid blue.

### Landmark and object placement

Distribute the following illustrated objects across the map. They should share the same hand-painted style and use navy, cobalt, warm yellow, orange, coral, forest green, and cream accents:

- A mustard-yellow Big Ben/Elizabeth Tower over the United Kingdom area.
- A tall cobalt/navy Eiffel Tower in the France area, visually prominent near the middle-left of the map.
- A warm terracotta-orange Arc de Triomphe near the Eiffel Tower but slightly to its right.
- A yellow-and-orange windmill toward the Netherlands/northern-central Europe region.
- A colorful Gothic or cathedral group in central/eastern Europe, using yellow, orange, green, and navy roofs.
- Another ornate cathedral/basilica toward southwestern Europe in warm yellows, oranges, and coral.
- Small dark-green pine trees scattered through northern and central areas.
- A stack of cobalt and coral books with a warm coffee cup near the upper-right/northern part of the map.
- A large cobalt-blue coffee cup near the lower-right, with a small cream botanical motif on the cup and two or three pale steam curls.
- A small blue-and-white train with a dark locomotive crossing the lower-middle portion of the map.

The objects should feel collaged onto the painted map, with subtle watercolor shadows rather than hard digital drop shadows.

### Travel route

Draw one playful navy dashed route weaving across the map. It should curve organically, passing near or behind the train and landmarks. Use rounded dash caps. Keep it thin enough not to overpower the artwork.

The route may enter from or leave through an edge of the composition, but it should not create the appearance of a second airplane route.

### Decorative marks

Scatter a small number of hand-painted travel-journal marks in the negative space:

- Four-point sunshine-yellow/orange starbursts.
- Small cobalt-blue wave glyphs made from three short wavy strokes.
- A few coral-red hand-drawn hearts.
- Occasional pale cream steam or wind curls.

Use these sparingly. They should balance empty areas rather than fill every gap.

### Airplane

Include exactly one watercolor passenger airplane near the upper portion of the hero. It should be white with bold cobalt-blue wings and tail, small coral-red/orange accents, blue cockpit glass, and a row of alternating blue/coral windows or dots.

The airplane should be angled slightly upward as though traveling into the page. It must have a clean transparent edge or be naturally integrated into the single background artwork. Never allow a dark rectangle, black halo, or matte box around it.

Static accuracy is more important than animation. If the airplane is animated, it must still remain the only airplane on the page, move slowly and gently, respect `prefers-reduced-motion`, and never duplicate an airplane already present in the background asset.

## Color palette

Use the following palette consistently:

| Role | Color | Hex |
|---|---|---|
| Deep navy / primary ink | Dark maritime blue | `#07356F` |
| Secondary ink | Slightly lighter navy | `#103D73` |
| Cream page | Warm ivory | `#FFFAF0` |
| Paper highlight | Soft near-white | `#FFFDF7` |
| Pale mint | Misty watercolor mint | `#DCEFEA` |
| Seafoam | Muted green-blue | `#B8E0D3` |
| Coral accent | Warm coral-red | `#FF6D5C` |
| Coral hover | Deeper coral | `#F75C4C` |
| Sunshine accent | Warm golden yellow | `#F8C84B` |
| Cobalt accent | Travel-postcard blue | `#3974B9` |
| Soft wave blue | Airy medium blue | `#4C9BC2` |
| Forest accent | Deep muted green | Approximately `#16745E` |

Avoid adding purple, neon colors, cold gray UI surfaces, or pure black. Even shadows should be tinted navy or coral and kept at low opacity.

## Typography

Use two font personalities:

1. **Display/handwritten:** Caveat or a similar loose brush-script/hand-lettered font for the logo, headline, and small sentimental accents.
2. **Interface/sans serif:** Nunito or a similarly rounded, friendly sans serif for navigation and buttons.

Do not use a formal serif, geometric tech font, condensed display font, or elegant wedding script. The display font must remain highly readable at large sizes.

## Recommended code architecture

Build the page with semantic React/Next.js components, but keep the structure simple:

- `SiteHeader`
- `Hero`
- Optional small reusable `PrimaryButton`

Within `Hero`, separate the layers in this order:

1. Cream/paper background.
2. Watercolor map artwork, absolutely positioned and non-interactive.
3. The single airplane only if it is not already included in the artwork.
4. Bottom mint blending gradient.
5. Real HTML headline, heart accent, CTA, and optional scrapbook accent.

Use `position: relative`, `isolation: isolate`, and `overflow: hidden` on the hero. Mark purely decorative images with an empty `alt` and `aria-hidden="true"`; use a meaningful alt description only if the image conveys content not already represented in text.

### Artwork implementation

The complex watercolor scene should be a high-resolution PNG or WebP rather than dozens of separately positioned icon components. It can be used as an absolutely positioned `<img>` with `object-fit: cover`/`contain`, or as a CSS background image. Preserve its aspect ratio and crop deliberately.

Use small icon components only for coded interface details such as the menu, button arrow, or camera mark. Do not use outline icon libraries for the Eiffel Tower, Big Ben, train, windmill, coffee, books, or map—their watercolor appearance is essential.

Suggested desktop artwork behavior:

- Anchor the artwork to the viewport rather than only to the narrow content container.
- Allow it to cover most of the hero.
- Position it around center/right with the detailed landmarks concentrated away from the headline.
- Keep the map and objects crisp on high-density displays by using an asset at least `1536px` wide.

## Responsive behavior

### Large desktop (`1024px` and wider)

- Show full logo, navigation, and header CTA.
- Use the largest headline size, near `94px`.
- Keep the title left and map dominant on the right/lower side.
- Preserve generous negative space.
- Ensure the one airplane is visible near the top without touching the header.

### Tablet (`640px–1023px`)

- Reduce navigation spacing or hide navigation before it becomes cramped.
- Use a headline around `76–86px`.
- Shift the artwork so major landmarks remain visible.
- Allow the map to sit farther behind the headline only where contrast remains strong.

### Mobile (below `640px`)

- Show the logo and menu button only in the header.
- Keep the three-line headline at roughly `60–70px`, depending on width.
- Keep the coral CTA directly below it.
- Reposition and scale the watercolor artwork rather than simply shrinking the entire desktop canvas.
- Prioritize the airplane, Eiffel Tower, train, and at least one warm landmark while permitting less important objects to crop off-screen.
- Hide the lower-left camera/Polaroid accent if it creates overlap.
- Preserve touch targets of at least `44px` where practical.
- Do not allow the title, button, map, or airplane to overflow horizontally.

## Interaction and motion

Motion should be restrained:

- Header and hero CTA: tiny lift on hover.
- Navigation: simple color transition.
- Optional airplane movement: slow, gentle, and only if it does not reduce fidelity to the reference.
- No parallax, bouncing landmarks, spinning icons, autoplay intro screen, loading animation, or large entrance sequence.
- Respect `prefers-reduced-motion` by disabling nonessential movement.

## Accessibility and quality

- Use semantic `<header>`, `<nav>`, `<main>`, `<section>`, and heading elements.
- Use one `<h1>` for “Your Adventure Begins.”
- Give the navigation an accessible label.
- Give the mobile menu an accessible name.
- Maintain visible keyboard focus states.
- Ensure white text on coral and white text on navy have sufficient contrast.
- Keep decorative elements out of the accessibility tree.
- Avoid cumulative layout shift by defining image dimensions or aspect ratios.
- Optimize large artwork for fast loading without introducing visible compression artifacts.

## Final acceptance checklist

The result is correct only if all of the following are true:

- The top bar is deep navy, compact, and balanced.
- The logo looks handwritten and includes a small yellow star.
- Desktop navigation contains the four specified labels.
- The header and hero CTA buttons are coral pills.
- The page background is warm cream with a subtle paper feel.
- “Your Adventure Begins” is the dominant element on the left, in large navy handwritten type across exactly three lines.
- The watercolor Europe scene occupies the center, right, and lower hero area.
- The map uses loose mint/seafoam washes with no country borders.
- The major landmarks, train, books, coffee objects, trees, starbursts, waves, and hearts use a coherent watercolor style.
- Exactly one airplane is visible.
- There is no duplicate plane icon, duplicate flight path, or airplane intro overlay.
- The phrase “Get ready for an amazing year!” is absent.
- No complex landmark is represented by a generic outline icon.
- The layout remains attractive and readable on desktop, tablet, and mobile.
- The page feels like a handcrafted European adventure scrapbook and farewell gift.

Deliver a faithful first implementation, then visually compare it with the supplied reference and correct differences in scale, crop, spacing, and object placement before considering the work complete.
