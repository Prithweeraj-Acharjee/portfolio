import type { Metadata } from "next";
import { Space_Grotesk, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/lib/mode-context";
import Navbar from "@/components/Navbar";
import GrainBackground from "@/components/GrainBackground";
import ScribbleBackground from "@/components/ScribbleBackground";
import SiteFooter from "@/components/SiteFooter";
import SmoothScroll from "@/components/fx/SmoothScroll";
import Cursor from "@/components/fx/Cursor";
import Preloader from "@/components/fx/Preloader";
import JsonLd from "@/components/JsonLd";
import { KEYWORDS, NAME, SITE, person, website } from "@/lib/seo";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Prithwee (Prithweeraj Acharjee) · Abstract Painter, Artist and AI Researcher",
    template: "%s · Prithwee",
  },
  description: "Prithwee (Prithweeraj Acharjee) is a Bangladeshi abstract painter and AI researcher in Toledo, Ohio. Paintings from 21 Days, mixed media collages, research on aesthetic bias in AI, and writing.",
  applicationName: "Prithwee",
  keywords: KEYWORDS,
  authors: [{ name: NAME, url: SITE }],
  creator: NAME,
  publisher: NAME,
  category: "art",
  metadataBase: new URL(SITE),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    title: "Prithwee · Abstract Painter, Artist and AI Researcher",
    description: "Paintings, collages, research and writing by Prithweeraj Acharjee.",
    url: SITE,
    siteName: "Prithwee",
    locale: "en_US",
    type: "profile",
    images: [{ url: "/share.jpg", width: 1200, height: 630, alt: "Prithwee, researcher, painter, cofounder of HaorGrix" }],
  },
  twitter: { card: "summary_large_image", title: "Prithwee · Abstract Painter, Artist and AI Researcher", images: ["/share.jpg"] },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${cormorant.variable}`}>
      <body className="bg-void text-parchment antialiased overflow-x-hidden">
        <JsonLd data={person} />
        <JsonLd data={website} />
        <ModeProvider>
          <div className="relative min-h-screen flex flex-col">
            <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[400] focus:bg-parchment focus:text-void focus:px-4 focus:py-2 text-xs uppercase tracking-[0.2em]">Skip to content</a>
            <SmoothScroll />
            <Preloader />
            <Cursor />
            <GrainBackground />
            <ScribbleBackground />
            <Navbar />
            <main id="main" className="flex-grow relative z-10">
              {children}
            </main>
            <SiteFooter />
          </div>
        </ModeProvider>
      </body>
    </html>
  );
}
