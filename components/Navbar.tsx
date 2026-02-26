"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useMode } from '@/lib/mode-context';
import { Menu, X, Monitor, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Systems', href: '/systems' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Research', href: '/research' },
    { name: 'Writing', href: '/writing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { mode, toggleMode } = useMode();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
            scrolled ? "bg-void/70 backdrop-blur-md" : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-12 flex items-center justify-between">

                {/* No logo — just blank left space on home, or a tiny dot/initial */}
                <Link href="/" className="text-[11px] uppercase tracking-[0.35em] text-mist/40 hover:text-mist transition-colors duration-300 font-sans">
                    {pathname === '/' ? '' : 'Prithwee'}
                </Link>

                {/* Desktop nav — tiny, quiet */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-[10px] uppercase tracking-[0.25em] font-sans transition-colors duration-300",
                                pathname === item.href
                                    ? "text-parchment"
                                    : "text-mist/50 hover:text-mist"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <button
                        onClick={toggleMode}
                        className="text-[9px] uppercase tracking-widest text-mist/30 hover:text-mist/60 transition-colors"
                    >
                        {mode === 'aesthetic' ? <Monitor size={11} /> : <Palette size={11} />}
                    </button>
                </div>

                {/* Mobile */}
                <div className="flex items-center gap-4 md:hidden">
                    <button onClick={toggleMode} className="text-mist/40 hover:text-mist">
                        {mode === 'aesthetic' ? <Monitor size={15} /> : <Palette size={15} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-mist/40 hover:text-mist">
                        {isOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-void border-t border-white/[0.04]"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-[11px] uppercase tracking-[0.3em] font-sans",
                                        pathname === item.href ? "text-parchment" : "text-mist/50"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
