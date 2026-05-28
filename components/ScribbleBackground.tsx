"use client";

import { useEffect, useRef, useState } from "react";

type Stroke = {
    d: string;
    width: number;
    phase: number;
};

function rand(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function buildStroke(w: number, h: number, idx: number): Stroke {
    let x = rand(-80, w + 80);
    let y = rand(-80, h + 80);
    let d = `M ${x.toFixed(1)} ${y.toFixed(1)}`;
    let angle = rand(0, Math.PI * 2);
    const segments = Math.floor(rand(18, 38));
    for (let i = 0; i < segments; i++) {
        angle += rand(-0.7, 0.7);
        const step = rand(25, 90);
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
    return {
        d,
        width: rand(0.6, 2.4),
        phase: idx * 1.7,
    };
}

export default function ScribbleBackground() {
    const [strokes, setStrokes] = useState<Stroke[]>([]);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const w = window.innerWidth;
        const h = Math.max(window.innerHeight, document.body.scrollHeight);
        const arr = Array.from({ length: 16 }, (_, i) => buildStroke(w, h, i));
        setStrokes(arr);
    }, []);

    useEffect(() => {
        if (strokes.length === 0) return;
        let raf: number;
        const t0 = performance.now();
        const loop = (t: number) => {
            const elapsed = (t - t0) / 1000;
            const paths = svgRef.current?.querySelectorAll<SVGPathElement>("path");
            paths?.forEach((p, i) => {
                const phase = strokes[i]?.phase ?? 0;
                const mod = Math.sin(elapsed * 0.12 + phase) * 0.025 + 0.05;
                p.setAttribute("stroke-opacity", mod.toFixed(3));
            });
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(raf);
    }, [strokes]);

    return (
        <svg
            ref={svgRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-[2]"
            preserveAspectRatio="none"
            aria-hidden="true"
            style={{ mixBlendMode: "screen" }}
        >
            {strokes.map((s, i) => (
                <path
                    key={i}
                    d={s.d}
                    fill="none"
                    stroke="#c8bfb0"
                    strokeOpacity={0.05}
                    strokeWidth={s.width}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            ))}
        </svg>
    );
}
