"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useMode } from '@/lib/mode-context';
import { cn } from '@/lib/utils';
import LocalTime from '@/components/fx/LocalTime';

const navItems = [
    { name: 'Gallery', href: '/gallery', image: '/artworks/21-days/td-07.jpg' },
    { name: 'Research', href: '/research', image: '/artworks/21-days/td-20.jpg' },
    { name: 'Projects', href: '/systems', image: '/projects/river-of-gaze.png' },
    { name: 'Blog', href: '/writing', image: '/artworks/material-expressions/me-04.jpg' },
    { name: 'HaorGrix', href: '/haorgrix', image: '/projects/haorgrix.png' },
    { name: 'About', href: '/about', image: '/studio-01.jpg' },
    { name: 'Contact', href: '/contact', image: '/artworks/21-days/td-05.jpg' },
];

const socials = [
    { name: 'Instagram', href: 'https://www.instagram.com/prithwee____' },
    { name: 'GitHub', href: 'https://github.com/Prithweeraj-Acharjee' },
    { name: 'Handshake', href: 'https://app.joinhandshake.com/profiles/bsn78c' },
];

const ease = [0.76, 0, 0.24, 1] as const;

export default function Navbar() {
    /* The menu remembers which page it was opened on, so navigating closes it. */
    const [openOn, setOpenOn] = useState<string | null>(null);
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hover, setHover] = useState(0);
    const pathname = usePathname();
    const { mode, toggleMode } = useMode();
    const isOpen = openOn === pathname;
    const setIsOpen = (v: boolean | ((o: boolean) => boolean)) => {
        const next = typeof v === 'function' ? v(isOpen) : v;
        setOpenOn(next ? pathname : null);
    };

    useEffect(() => {
        let last = window.scrollY;
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 10);
            setHidden(y > last && y > 160);
            last = y;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpenOn(null); };
        document.documentElement.classList.add('menu-open');
        window.addEventListener('keydown', onKey);
        return () => {
            document.documentElement.classList.remove('menu-open');
            window.removeEventListener('keydown', onKey);
        };
    }, [isOpen]);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-[120] transition-all duration-700",
                    hidden && !isOpen ? "-translate-y-full" : "translate-y-0",
                    scrolled && !isOpen ? "bg-void/60 backdrop-blur-md" : "bg-transparent"
                )}
            >
                <div className="px-6 md:px-12 h-16 flex items-center justify-between">
                    <Link href="/" className="text-[11px] uppercase tracking-[0.4em] text-parchment/90 hover:text-parchment transition-colors font-sans">
                        Prithwee<span className="text-ember">.</span>
                    </Link>

                    <LocalTime className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-bone/60" />

                    <div className="flex items-center gap-6">
                        <div className={cn("hidden lg:flex items-center gap-6 transition-opacity duration-500", isOpen && "lg:opacity-0 pointer-events-none")}>
                            {navItems.slice(0, 6).map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "group relative text-[10px] uppercase tracking-[0.25em] transition-colors duration-300",
                                        pathname.startsWith(item.href) ? "text-parchment" : "text-bone/80 hover:text-parchment"
                                    )}
                                >
                                    {item.name}
                                    <span className={cn(
                                        "absolute -bottom-1 left-0 h-px bg-bloodred transition-all duration-500",
                                        pathname.startsWith(item.href) ? "w-full" : "w-0 group-hover:w-full"
                                    )} />
                                </Link>
                            ))}
                        </div>
                        <button
                            onClick={() => setIsOpen((v) => !v)}
                            aria-expanded={isOpen}
                            aria-controls="site-menu"
                            className="flex items-center gap-3 min-h-11 text-[10px] uppercase tracking-[0.3em] text-parchment"
                        >
                            <span className="relative block h-4 overflow-hidden w-12 text-right leading-4">
                                <span className={cn("block transition-transform duration-500", isOpen && "-translate-y-full")}>Menu</span>
                                <span className={cn("block transition-transform duration-500", isOpen && "-translate-y-full")}>Close</span>
                            </span>
                            <span className="relative w-6 h-3">
                                <span className={cn("absolute left-0 right-0 h-px bg-parchment transition-all duration-500", isOpen ? "top-1.5 rotate-45" : "top-0")} />
                                <span className={cn("absolute left-0 right-0 h-px bg-parchment transition-all duration-500", isOpen ? "top-1.5 -rotate-45" : "top-3")} />
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="site-menu"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Site menu"
                        className="fixed inset-0 z-[110] bg-void"
                        data-lenis-prevent
                        initial={{ clipPath: "inset(0 0 100% 0)" }}
                        animate={{ clipPath: "inset(0 0 0% 0)" }}
                        exit={{ clipPath: "inset(0 0 100% 0)" }}
                        transition={{ duration: 0.9, ease }}
                    >
                        <div className="h-full grid md:grid-cols-[1.3fr_1fr] pt-20 pb-8 px-6 md:px-12 gap-10 overflow-y-auto">
                            <div className="flex flex-col justify-center">
                                {navItems.map((item, i) => (
                                    <div key={item.href} className="overflow-hidden">
                                        <motion.div
                                            initial={{ y: "110%" }}
                                            animate={{ y: "0%" }}
                                            exit={{ y: "110%" }}
                                            transition={{ duration: 0.8, delay: 0.2 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                onMouseEnter={() => setHover(i)}
                                                onFocus={() => setHover(i)}
                                                className="group flex items-baseline gap-4 md:gap-6 py-1"
                                            >
                                                <span className="font-mono text-[10px] text-mist/70 w-6">{String(i + 1).padStart(2, '0')}</span>
                                                <span
                                                    className={cn(
                                                        "text-[12vw] md:text-[5.6vw] leading-[0.98] tracking-tight transition-all duration-500",
                                                        pathname.startsWith(item.href)
                                                            ? "text-ember italic"
                                                            : hover === i ? "text-parchment italic md:translate-x-4" : "text-mist/80"
                                                    )}
                                                    style={{ fontFamily: "var(--font-serif)" }}
                                                >
                                                    {item.name}
                                                </span>
                                            </Link>
                                        </motion.div>
                                    </div>
                                ))}
                                <div className="md:hidden mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.3em] text-mist/80">
                                    {socials.map((s) => (
                                        <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">{s.name} ↗</a>
                                    ))}
                                    <button onClick={toggleMode}>View: {mode === 'aesthetic' ? 'Artist' : 'Engineer'}</button>
                                </div>
                            </div>

                            <div className="hidden md:flex flex-col justify-between">
                                <div className="relative flex-1 my-6 overflow-hidden bg-ash">
                                    <AnimatePresence initial={false}>
                                        <motion.div
                                            key={hover}
                                            className="absolute inset-0"
                                            initial={{ clipPath: "inset(100% 0 0 0)" }}
                                            animate={{ clipPath: "inset(0% 0 0 0)" }}
                                            transition={{ duration: 0.8, ease }}
                                        >
                                            <motion.div className="absolute inset-0" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}>
                                                <Image src={navItems[hover].image} alt="" fill sizes="40vw" className="object-cover" />
                                            </motion.div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                                <div className="flex items-end justify-between text-[10px] uppercase tracking-[0.3em] text-bone/70">
                                    <div className="flex flex-col gap-2">
                                        {socials.map((s) => (
                                            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-parchment transition-colors">
                                                {s.name} ↗
                                            </a>
                                        ))}
                                    </div>
                                    <button onClick={toggleMode} className="hover:text-parchment transition-colors">
                                        View: {mode === 'aesthetic' ? 'Artist' : 'Engineer'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
