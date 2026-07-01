"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Global background, pale teal/green abstract scribbles.
 * Echoes the painted marks in the studio work. Very low opacity, slow drift.
 * Single canvas layer across the whole site (no per-route backgrounds).
 */

type Mark = {
    d: string;
    width: number;
    opacity: number;
    phase: number;
};

function rand(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function buildStroke(w: number, h: number, kind: "long" | "short"): Mark {
    if (kind === "long") {
        let x = rand(-120, w + 120);
        let y = rand(-120, h + 120);
        let d = `M ${x.toFixed(1)} ${y.toFixed(1)}`;
        let angle = rand(0, Math.PI * 2);
        // Bias slightly vertical to echo the painting stripes
        if (Math.random() < 0.45) angle = Math.PI / 2 + rand(-0.5, 0.5);
        const segments = Math.floor(rand(22, 48));
        for (let i = 0; i < segments; i++) {
            angle += rand(-0.55, 0.55);
            const step = rand(28, 95);
            const nx = x + Math.cos(angle) * step;
            const ny = y + Math.sin(angle) * step;
            const cx1 = x + Math.cos(angle + rand(-0.55, 0.55)) * step * 0.4;
            const cy1 = y + Math.sin(angle + rand(-0.55, 0.55)) * step * 0.4;
            const cx2 = nx - Math.cos(angle + rand(-0.55, 0.55)) * step * 0.4;
            const cy2 = ny - Math.sin(angle + rand(-0.55, 0.55)) * step * 0.4;
            d += ` C ${cx1.toFixed(1)} ${cy1.toFixed(1)}, ${cx2.toFixed(1)} ${cy2.toFixed(1)}, ${nx.toFixed(1)} ${ny.toFixed(1)}`;
            x = nx;
            y = ny;
        }
        const heavy = Math.random() < 0.15;
        return {
            d,
            width: heavy ? rand(2.0, 3.2) : rand(0.5, 1.4),
            opacity: heavy ? rand(0.07, 0.1) : rand(0.04, 0.08),
            phase: rand(0, Math.PI * 2),
        };
    }
    // short hatch
    const cx = rand(0, w);
    const cy = rand(0, h);
    const angle = rand(0, Math.PI * 2);
    const len = rand(18, 70);
    const x1 = cx - Math.cos(angle) * len * 0.5;
    const y1 = cy - Math.sin(angle) * len * 0.5;
    const x2 = cx + Math.cos(angle) * len * 0.5;
    const y2 = cy + Math.sin(angle) * len * 0.5;
    return {
        d: `M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}`,
        width: rand(0.4, 1.0),
        opacity: rand(0.04, 0.08),
        phase: rand(0, Math.PI * 2),
    };
}

export default function ScribbleBackground() {
    const [marks, setMarks] = useState<Mark[]>([]);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const measure = () => {
            const w = window.innerWidth;
            const h = Math.max(window.innerHeight, document.body.scrollHeight);
            const longs = Array.from({ length: 18 }, () => buildStroke(w, h, "long"));
            const hatches = Array.from({ length: 36 }, () => buildStroke(w, h, "short"));
            setMarks([...longs, ...hatches]);
        };
        measure();
        const t = setTimeout(measure, 700); // rebuild once layout settles
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
                const drift = Math.sin(elapsed * 0.08 + m.phase) * 0.012;
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
                    stroke="#94c5b8"
                    strokeOpacity={m.opacity}
                    strokeWidth={m.width}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            ))}
        </svg>
    );
}
