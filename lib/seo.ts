export const SITE = "https://prithwee.haorgrix.com";
export const NAME = "Prithweeraj Acharjee";

export const KEYWORDS = [
    "Prithwee", "Prithweeraj Acharjee", "Prithweeraj Acharjee Porag", "Prithwee artist", "Prithwee painter",
    "abstract painter", "abstract art", "abstract expressionism", "contemporary artist", "mixed media artist",
    "collage artist", "Bangladeshi artist", "Bangladeshi painter", "Toledo artist", "Ohio artist",
    "artist and researcher", "AI researcher", "AI fairness research", "algorithmic bias", "computational artist",
    "21 Days paintings", "painting in the post-AI era", "HaorGrix", "University of Toledo",
];

export const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}/#person`,
    name: NAME,
    alternateName: ["Prithwee", "Prithweeraj Acharjee Porag"],
    url: SITE,
    image: `${SITE}/the-artist.jpg`,
    jobTitle: ["Painter", "Artist", "AI Researcher"],
    description: "Bangladeshi abstract painter and AI researcher in Toledo, Ohio. Paintings, collages, and research on aesthetic bias in AI. Co-founder of HaorGrix.",
    nationality: "Bangladeshi",
    homeLocation: { "@type": "Place", name: "Toledo, Ohio" },
    birthPlace: { "@type": "Place", name: "Habiganj, Bangladesh" },
    alumniOf: [
        { "@type": "CollegeOrUniversity", name: "University of Toledo" },
        { "@type": "CollegeOrUniversity", name: "University of Dhaka, Faculty of Fine Arts" },
    ],
    worksFor: { "@type": "Organization", name: "HaorGrix", url: "https://haorgrix.com" },
    knowsAbout: ["Abstract painting", "Mixed media", "Collage", "Contemporary art", "AI fairness", "Algorithmic bias", "Machine learning", "Natural language processing"],
    email: "mailto:prithwee@haorgrix.com",
    sameAs: [
        "https://www.instagram.com/prithwee____",
        "https://github.com/Prithweeraj-Acharjee",
        "https://haorgrix.com/team/prithweeraj-porag",
        "https://app.joinhandshake.com/profiles/bsn78c",
        "https://expressions-under-suffer.vercel.app",
    ],
};

export const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    name: "Prithwee",
    alternateName: NAME,
    url: SITE,
    inLanguage: "en",
    author: { "@id": `${SITE}/#person` },
};
