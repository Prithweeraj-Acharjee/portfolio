import type { Metadata } from "next";
import { Space_Grotesk, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/lib/mode-context";
import Navbar from "@/components/Navbar";
import GrainBackground from "@/components/GrainBackground";

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
  title: "Prithweeraj Acharjee | Computational Art & Systems Research",
  description: "Portfolio of Prithweeraj Acharjee — art, systems, and research.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${cormorant.variable}`}>
      <body className="bg-void text-parchment antialiased">
        <ModeProvider>
          <div className="relative min-h-screen flex flex-col">
            <GrainBackground />
            <Navbar />
            <main className="flex-grow relative z-10">
              {children}
            </main>
            <footer className="relative z-10 border-t border-white/[0.04] py-6 px-6 md:px-12 flex items-center justify-between">
              <span className="text-[10px] text-mist/40 tracking-widest uppercase font-sans">
                © {new Date().getFullYear()} Prithweeraj Acharjee
              </span>
              <span className="text-[10px] text-mist/25 tracking-[0.35em] uppercase font-sans">
                Systems & Aesthetics
              </span>
            </footer>
          </div>
        </ModeProvider>
      </body>
    </html>
  );
}
