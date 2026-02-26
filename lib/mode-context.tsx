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

    useEffect(() => {
        const savedMode = localStorage.getItem('site-mode') as Mode;
        if (savedMode) {
            setMode(savedMode);
        }
    }, []);

    const toggleMode = () => {
        const newMode = mode === 'aesthetic' ? 'technical' : 'aesthetic';
        setMode(newMode);
        localStorage.setItem('site-mode', newMode);
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
