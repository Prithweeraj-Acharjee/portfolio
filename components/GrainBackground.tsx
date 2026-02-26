"use client";

import React, { useEffect, useRef } from 'react';

export default function GrainBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        let lastTime = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const render = (time: number) => {
            // Throttle to ~20fps for subtle, not distracting grain
            if (time - lastTime < 50) {
                animId = requestAnimationFrame(render);
                return;
            }
            lastTime = time;

            const w = canvas.width;
            const h = canvas.height;
            const imageData = ctx.createImageData(w, h);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const value = Math.random() * 255;
                data[i] = value;
                data[i + 1] = value;
                data[i + 2] = value;
                data[i + 3] = 10; // Very subtle
            }

            ctx.putImageData(imageData, 0, 0);
            animId = requestAnimationFrame(render);
        };

        window.addEventListener('resize', resize);
        resize();
        animId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[1] opacity-30 mix-blend-overlay"
        />
    );
}
