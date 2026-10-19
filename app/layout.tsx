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
  title: { default: "Prithweeraj Acharjee, Painter, Researcher, Builder", template: "%s · Prithweeraj Acharjee" },
  description: "Selected paintings, research, and ongoing work by Prithweeraj Acharjee.",
  metadataBase: new URL("https://prithwee.haorgrix.com"),
  openGraph: {
    title: "Prithweeraj Acharjee",
    description: "Selected paintings, research, and ongoing work.",
    url: "https://prithwee.haorgrix.com",
    siteName: "Prithweeraj Acharjee",
    type: "website",
    images: [{ url: "/share.jpg", width: 1200, height: 630, alt: "Prithwee, researcher, painter, cofounder of HaorGrix" }],
  },
  twitter: { card: "summary_large_image", images: ["/share.jpg"] },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${cormorant.variable}`}>
      <body className="bg-void text-parchment antialiased overflow-x-hidden">
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
