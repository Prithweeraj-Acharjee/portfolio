export type Project = {
    id: string;
    title: string;
    year: string;
    tags: string[];
    summary: string;
    longDescription: string;
    conceptualFraming: string;
    technicalArchitecture: string;
    stack: string[];
    links?: {
        demo?: string;
        github?: string;
    };
    media: {
        hero: string;
        heroVideo?: string;
        gallery?: string[];
    };
};

export type Artwork = {
    id: string;
    title: string;
    year: string;
    concept: string;
    medium: string;
    dimensions: string;
    media: string;
};

export type Series = {
    id: string;
    title: string;
    statement: string;
    coverImage: string;
    artworks: Artwork[];
};

export type Writing = {
    id: string;
    title: string;
    date: string;
    summary: string;
    content: string;
    links?: { url: string; label: string }[];
};

export type Research = {
    id: string;
    title: string;
    year: string;
    institution?: string;
    abstract: string;
    technicalDetails: string;
    media?: string;
    links?: { url: string; label: string }[];
};
