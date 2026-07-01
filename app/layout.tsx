import type { Metadata } from "next";
import { Space_Grotesk, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/lib/mode-context";
import Navbar from "@/components/Navbar";
import GrainBackground from "@/components/GrainBackground";
import ScribbleBackground from "@/components/ScribbleBackground";
import SiteFooter from "@/components/SiteFooter";

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
  title: "Prithweeraj Acharjee, Painter, Researcher, Builder",
  description: "Selected paintings, research, and ongoing work by Prithweeraj Acharjee.",
  metadataBase: new URL("https://prithwee.vercel.app"),
  openGraph: {
    title: "Prithweeraj Acharjee",
    description: "Selected paintings, research, and ongoing work.",
    url: "https://prithwee.vercel.app",
    siteName: "Prithweeraj Acharjee",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${cormorant.variable}`}>
      <body className="bg-void text-parchment antialiased overflow-x-hidden">
        <ModeProvider>
          <div className="relative min-h-screen flex flex-col">
            <GrainBackground />
            <ScribbleBackground />
            <Navbar />
            <main className="flex-grow relative z-10">
              {children}
            </main>
            <SiteFooter />
          </div>
        </ModeProvider>
      </body>
    </html>
  );
}
