"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Dense painterly scribble field for gallery pages.
 * Multi-weight charcoal-like SVG strokes, organic distribution.
 * Sits behind content; doesn't compete with paintings.
 */

type Mark = {
    d: string;
    width: number;
    opacity: number;
    color: string;
    phase: number;
};

function rand(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function buildLongStroke(w: number, h: number): Mark {
    let x = rand(-100, w + 100);
    let y = rand(-100, h + 100);
    let d = `M ${x.toFixed(1)} ${y.toFixed(1)}`;
    let angle = rand(0, Math.PI * 2);
    const segments = Math.floor(rand(25, 55));
    for (let i = 0; i < segments; i++) {
        angle += rand(-0.7, 0.7);
        const step = rand(30, 120);
        const nx = x + Math.cos(angle) * step;
        const ny = y + Math.sin(angle) * step;
        const cx1 = x + Math.cos(angle + rand(-0.6, 0.6)) * step * 0.4;
        const cy1 = y + Math.sin(angle + rand(-0.6, 0.6)) * step * 0.4;
        const cx2 = nx - Math.cos(angle + rand(-0.6, 0.6)) * step * 0.4;
        const cy2 = ny - Math.sin(angle + rand(-0.6, 0.6)) * step * 0.4;
        d += ` C ${cx1.toFixed(1)} ${cy1.toFixed(1)}, ${cx2.toFixed(1)} ${cy2.toFixed(1)}, ${nx.toFixed(1)} ${ny.toFixed(1)}`;
        x = nx;
        y = ny;
    }
    const isHeavy = Math.random() < 0.18;
    return {
        d,
        width: isHeavy ? rand(2.2, 4.2) : rand(0.5, 1.8),
        opacity: isHeavy ? rand(0.06, 0.11) : rand(0.04, 0.09),
        color: Math.random() < 0.12 ? "#7f1d1d" : "#c8bfb0",
        phase: rand(0, Math.PI * 2),
    };
}

function buildShortHatch(w: number, h: number): Mark {
    const cx = rand(0, w);
    const cy = rand(0, h);
    const angle = rand(0, Math.PI * 2);
    const len = rand(20, 80);
    const x1 = cx - Math.cos(angle) * len * 0.5;
    const y1 = cy - Math.sin(angle) * len * 0.5;
    const x2 = cx + Math.cos(angle) * len * 0.5;
    const y2 = cy + Math.sin(angle) * len * 0.5;
    return {
        d: `M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}`,
        width: rand(0.4, 1.4),
        opacity: rand(0.05, 0.1),
        color: "#c8bfb0",
        phase: rand(0, Math.PI * 2),
    };
}

export default function GalleryScribbleBackground() {
    const [marks, setMarks] = useState<Mark[]>([]);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const measure = () => {
            const w = window.innerWidth;
            const h = Math.max(window.innerHeight, document.body.scrollHeight);
            const longs = Array.from({ length: 22 }, () => buildLongStroke(w, h));
            const hatches = Array.from({ length: 50 }, () => buildShortHatch(w, h));
            setMarks([...longs, ...hatches]);
        };
        measure();

        // Rebuild on scroll-driven height changes after a small delay
        const t = setTimeout(measure, 600);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        if (marks.length === 0) return;
        let raf: number;
        const t0 = performance.now();
        const loop = (t: number) => {
            const elapsed = (t - t0) / 1000;
            const paths = svgRef.current?.querySelectorAll<SVGPathElement>("path");
            paths?.forEach((p, i) => {
                const m = marks[i];
                if (!m) return;
                const drift = Math.sin(elapsed * 0.08 + m.phase) * 0.015;
                p.setAttribute("stroke-opacity", Math.max(0.01, m.opacity + drift).toFixed(3));
            });
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(raf);
    }, [marks]);

    return (
        <svg
            ref={svgRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
            preserveAspectRatio="none"
            aria-hidden="true"
            style={{ mixBlendMode: "screen" }}
        >
            {marks.map((m, i) => (
                <path
                    key={i}
                    d={m.d}
                    fill="none"
                    stroke={m.color}
                    strokeOpacity={m.opacity}
                    strokeWidth={m.width}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            ))}
        </svg>
    );
}
