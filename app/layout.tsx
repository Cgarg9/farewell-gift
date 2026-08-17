import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource/caveat/600.css";
import "@fontsource/caveat/700.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";
import "./globals.css";

const title = "Your Adventure Begins | The Great European Adventure";
const description = "A handmade farewell gift for a very big European adventure.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders.get("x-forwarded-host")?.split(",")[0]?.trim();
  const host = forwardedHost || requestHeaders.get("host") || "localhost:3000";
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const protocol = forwardedProtocol || (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = new URL("/og.png", origin).toString();

  return {
    title,
    description,
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: origin,
      images: [{ url: socialImage, width: 1200, height: 628, alt: "Your Adventure Begins over a watercolor map of Europe" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/europe-hero-768.webp" as="image" type="image/webp" media="(max-width: 639px)" />
        <link rel="preload" href="/europe-hero.webp" as="image" type="image/webp" media="(min-width: 640px)" />
        <meta name="theme-color" content="#07356f" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
