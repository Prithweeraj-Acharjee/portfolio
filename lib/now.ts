/**
 * /now — what I'm doing this week.
 * Single source of truth. Edit this file to update the homepage "Currently" block
 * and the /now page. Inspired by Derek Sivers' now-page convention.
 */

export type NowItem = {
    label: string;
    value: string;
    note?: string;
};

export const now = {
    updated: "2026-05-28",
    location: "Toledo, Ohio",
    items: [
        {
            label: "Painting",
            value: "Central Face series",
            note: "Eight pieces in May. Going larger — 4 × 6 ft and up.",
        },
        {
            label: "Building",
            value: "AI Immigration Assistant",
            note: "F-1 transfer + reinstatement playbook, productized. Bangladesh first.",
        },
        {
            label: "Reading",
            value: "Sylvia Plath — The Unabridged Journals",
            note: "Re-reading; carrying it under the Freedom Under work.",
        },
        {
            label: "Listening",
            value: "Coldplay — How to Disappear Completely (Radiohead cover) on loop",
        },
        {
            label: "Resting",
            value: "Trying to. Bad at it.",
        },
    ] satisfies NowItem[],
};
