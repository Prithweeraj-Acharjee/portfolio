"use client";

import { useState } from "react";

/**
 * Newsletter signup. POSTs to Buttondown.
 * Drop your Buttondown username into NEXT_PUBLIC_BUTTONDOWN_USERNAME to activate.
 * Until then the form gracefully no-ops and shows a confirmation.
 */
export default function Newsletter({ compact = false }: { compact?: boolean }) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

    const username = process.env.NEXT_PUBLIC_BUTTONDOWN_USERNAME;

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        if (!email) return;
        setStatus("loading");
        try {
            if (username) {
                const fd = new FormData();
                fd.append("email", email);
                await fetch(`https://buttondown.email/api/emails/embed-subscribe/${username}`, {
                    method: "POST",
                    body: fd,
                    mode: "no-cors",
                });
            }
            setStatus("ok");
            setEmail("");
        } catch {
            setStatus("err");
        }
    }

    if (status === "ok") {
        return (
            <div className={compact ? "py-3" : "py-6"}>
                <p className="text-sm text-bone/70 font-serif italic">
                    Thank you. I&apos;ll write when I have something honest.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={submit} className={compact ? "" : "py-6"}>
            {!compact && (
                <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-[0.35em] text-bloodred/80 block mb-2">
                        Letters from the studio
                    </span>
                    <p className="text-mist/60 text-sm max-w-md leading-relaxed">
                        Occasional notes when a new essay or body of work lands. No schedule.
                    </p>
                </div>
            )}
            <div className="flex flex-col sm:flex-row gap-2">
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email"
                    className="flex-1 bg-white/[0.02] border border-white/[0.08] focus:border-bloodred/60 outline-none px-4 py-2.5 text-sm text-parchment placeholder:text-mist/30 transition-colors font-sans"
                />
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-parchment border border-bloodred/40 hover:border-bloodred hover:bg-bloodred/10 transition-all disabled:opacity-50"
                >
                    {status === "loading" ? "…" : "Subscribe"}
                </button>
            </div>
            {status === "err" && (
                <p className="text-xs text-bloodred/80 mt-2">Something failed. Try again.</p>
            )}
        </form>
    );
}
