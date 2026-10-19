"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type Mode = 'aesthetic' | 'technical';

interface ModeContextType {
    mode: Mode;
    toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<Mode>('aesthetic');

    /* Read the saved choice after hydration so server and client render the same first frame. */
    useEffect(() => {
        const id = requestAnimationFrame(() => {
            try {
                const saved = localStorage.getItem('site-mode') as Mode | null;
                if (saved) setMode(saved);
            } catch { /* storage blocked */ }
        });
        return () => cancelAnimationFrame(id);
    }, []);

    const toggleMode = () => {
        const newMode = mode === 'aesthetic' ? 'technical' : 'aesthetic';
        setMode(newMode);
        try { localStorage.setItem('site-mode', newMode); } catch { /* storage blocked */ }
    };

    return (
        <ModeContext.Provider value={{ mode, toggleMode }}>
            <div className={mode === 'technical' ? 'mode-technical' : 'mode-aesthetic'}>
                {children}
            </div>
        </ModeContext.Provider>
    );
}

export function useMode() {
    const context = useContext(ModeContext);
    if (context === undefined) {
        throw new Error('useMode must be used within a ModeProvider');
    }
    return context;
}
