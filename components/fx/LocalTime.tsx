"use client";

import { useEffect, useState } from "react";

export default function LocalTime({ className }: { className?: string }) {
    const [t, setT] = useState("");
    useEffect(() => {
        const f = new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "America/New_York" });
        const tick = () => setT(f.format(new Date()));
        tick();
        const id = setInterval(tick, 15000);
        return () => clearInterval(id);
    }, []);
    return <span className={className}>Toledo, OH{t && ` · ${t}`}</span>;
}
