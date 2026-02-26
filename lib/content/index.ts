import { Project, Artwork, Writing, Research, Series } from "@/types/content";

export const projects: Project[] = [
    {
        id: "aesthetic-resistance",
        title: "Aesthetic Resistance",
        year: "2024",
        tags: ["WebGL", "GLSL", "Generative Art", "Next.js"],
        summary: "Real-time generative system exploring the boundaries of algorithmic beauty and systemic friction.",
        longDescription: "Aesthetic Resistance is a computational study on how generative systems can manifest friction within digital perfection. It uses custom GLSL shaders to simulate organic growth constrained by geometric logic.",
        conceptualFraming: "In an era of hyper-optimized digital experiences, 'Aesthetic Resistance' serves as a visual counter-point—celebrating the beauty of non-linear processes and entropy.",
        technicalArchitecture: "The system is built on a custom Next.js bridge to a WebGL rendering context. Shaders are modularized to allow real-time parameter injection via React state without pipeline stalls.",
        stack: ["TypeScript", "Three.js", "GLSL", "React Frame", "Vercel"],
        links: {
            demo: "https://aesthetic-resistance.vercel.app/",
            github: "https://github.com/Prithweeraj-Acharjee",
        },
        media: {
            hero: "/projects/aesthetic-resistance.jpg",
        }
    },
    {
        id: "conservatwin",
        title: "ConservaTwin",
        year: "2024",
        tags: ["Digital Twin", "PLC", "SCADA", "IoT", "Museum Conservation"],
        summary: "Museum-grade digital twin system for environmental monitoring and precise conservation control.",
        longDescription: "ConservaTwin bridges the gap between industrial control systems (PLC/PID) and museum conservation requirements. It features a deterministic PLC runtime and a responsive SCADA HMI.",
        conceptualFraming: "Art conservation is a delicate balance of engineering and intuition. ConservaTwin provides the technical bedrock for this balance, ensuring invisible stability for heritage preservation.",
        technicalArchitecture: "The architecture consists of a Python-based PLC simulator implementing memory-mapped I/O, a FastAPI backend for real-time state synchronization, and a Next.js SCADA interface using WebSockets.",
        stack: ["Next.js", "FastAPI", "Python", "WebSockets", "SQLite"],
        links: {
            demo: "https://hmi-sepia.vercel.app/",
        },
        media: {
            hero: "/projects/conservatwin-hero.png",
        }
    },
    {
        id: "studio-ecosystem",
        title: "Studio Ecosystem",
        year: "2023",
        tags: ["Python", "Pygame", "Generative Art", "AI", "Installation", "Prototype"],
        summary: "A cinematic Pygame prototype pitching a large-scale physical installation — virtual AI robot artists live in a 3D perspective room, generating real-time generative art on walls and floor as they move.",
        longDescription: "Studio Ecosystem is a concept prototype for a physical AI art installation where real robots paint on LED walls and floors. Three robot personas — Pop Printer, Neo Oracle, Cubist Engineer — each have unique movement logic and a distinct visual language. The show runs on an automated lifecycle: sparse beginnings build toward a unified Final Mural.",
        conceptualFraming: "Every serious system starts somewhere embarrassing. This is that somewhere — and it's also the pitch for something much bigger.",
        technicalArchitecture: "Single-file Python simulation using Pygame. Perspective room rendering, per-entity movement logic, interactive show lifecycle (Calm/Chaos/Finalize), mouse-directed robot control, and a timed act structure.",
        stack: ["Python", "Pygame"],
        links: {
            github: "https://github.com/Prithweeraj-Acharjee/noob-prototype",
        },
        media: {
            hero: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
        }
    },
    {
        id: "handshake-ai",
        title: "Handshake AI Fellowship",
        year: "2024",
        tags: ["LLM Eval", "AI Safety", "Adversarial Testing"],
        summary: "Research on LLM evaluation frameworks, focusing on gold solutions, rubrics, and systematic failure modes.",
        longDescription: "During the Handshake AI Fellowship, I developed rigorous evaluation frameworks for Large Language Models to identify edge-case failures in reasoning.",
        conceptualFraming: "As AI systems grow more capable, the methods we use to verify their safety and accuracy must grow in complexity and nuance.",
        technicalArchitecture: "Implemented a framework for systematic model grading using weighted rubrics and adversarial prompt injection to uncover reasoning 'hallucinations'.",
        stack: ["OpenAI API", "Anthropic API", "Python", "Custom Eval Engine"],
        media: {
            hero: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop",
        }
    }
];

export const series: Series[] = [
    {
        id: "freedom-under",
        title: "Freedom Under",
        statement: `“Being born a woman is my awful tragedy. From the moment I was conceived I was doomed to sprout breasts and ovaries rather than penis and scrotum; to have my whole circle of action, thought and feeling rigidly circumscribed by my inescapable feminity. Yes, my consuming desire to mingle with road crews, sailors and soldiers, bar room regulars--to be a part of a scene, anonymous, listening, recording--all is spoiled by the fact that I am a girl, a female always in danger of assault and battery. My consuming interest in men and their lives is often misconstrued as a desire to seduce them, or as an invitation to intimacy. Yet, God, I want to talk to everybody I can as deeply as I can. I want to be able to sleep in an open field, to travel west, to walk freely at night...” ― Sylvia Plath, The Unabridged Journals of Sylvia Plath 

The lives of women in my country have always been entangled in a system of observation. As I grew up, beginning with my mother -I witnessed their quiet performances: existing under constant surveillance, maintaining beauty not as expression but as expectation. Under that, the definition of femininity, shaped by dominance, remains here elusive and distorted. 
Balancing these everyday burdens becomes a ritual, an act of endurance. Some remain untethered, but many—like my mother—carry invisible chains, generations deep. 

Freedom Under IV: The Veil of Observance reflects that half-conscious state that descends after sunset, when the sky feels both sheltering and suffocating. 

I moved from a tiny populated town of Bangladesh to the United States, hence, so called modern world is not very different. Time passes, time passes—yet the gaze remains. Surveillance evolves, but it never disappears. The eyes only multiply. The so-called progressive spaces fail too, not through words, but through silence. They speak of liberation in public, yet protect abusers within their own walls. When women speak, the cost is often their livelihood, their safety, or their dignity. Ironically remembering watching the President of the United States on television, complimenting the Italian Prime Minister on her beauty during a global summit—a moment that revealed how deep the gaze runs, in the most polished rooms of power. 

Women, and all marginalized identities, become a test that humanity keeps failing— 
the theist and the atheist, the left and the right 
each one claiming progress, yet still bound by the same gaze. 

Freedom Under V explores this broken promise of liberation- how freedom itself fractures under watchful scrutiny. 

Freedom Under is where I worked with photographs and paints, memorizing this quiet persistence of control- how the lives of half the population are still shaped under watchful eyes. The gaze has evolved, perhaps grown more subtle, but it has never disappeared. 

Freedom Under explores the tension between visibility and freedom — how being seen all the time can feel both empowering and imprisoning. I was collaging the record of looking and being looked at, a space that asks two questions: Who holds the gaze, and who gets to break it? 

— Freedom Under 
Prithwee A, 2026`,
        coverImage: "/artworks/freedom-under/freedom-01.jpg",
        artworks: [
            {
                id: "fu-01",
                title: "Internal Dialogue",
                year: "2026",
                concept: "An exploration of fragmented identity through visceral layered textures.",
                medium: "Mixed media collage",
                dimensions: "Variable",
                media: "/artworks/freedom-under/freedom-01.jpg"
            },
            {
                id: "fu-02",
                title: "Systemic Constraint",
                year: "2026",
                concept: "Visualizing the intersection of biological presence and archival confinement.",
                medium: "Mixed media collage",
                dimensions: "Variable",
                media: "/artworks/freedom-under/freedom-02.jpg"
            },
            {
                id: "fu-03",
                title: "Sutured Memory",
                year: "2026",
                concept: "The delicate act of repairing historical trauma through material recursion.",
                medium: "Mixed media collage",
                dimensions: "Variable",
                media: "/artworks/freedom-under/freedom-03.jpg"
            },
            {
                id: "fu-04",
                title: "Temporal Balance",
                year: "2026",
                concept: "Navigating the weight of domestic expectation against the linearity of time.",
                medium: "Mixed media collage",
                dimensions: "Variable",
                media: "/artworks/freedom-under/freedom-04.jpg"
            },
            {
                id: "fu-05",
                title: "Fragmented Gaze",
                year: "2026",
                concept: "Reconstructing the self from shards of technical and emotional data.",
                medium: "Mixed media collage",
                dimensions: "Variable",
                media: "/artworks/freedom-under/freedom-05.jpg"
            },
            {
                id: "fu-06",
                title: "Puppet Control",
                year: "2026",
                concept: "Analyzing the gaze and systemic manipulation through layered collage.",
                medium: "Mixed media collage",
                dimensions: "Variable",
                media: "/artworks/freedom-under/freedom-06.jpg"
            },
            {
                id: "fu-07",
                title: "Monolithic Silence",
                year: "2026",
                concept: "The intersection of human expression and geometric abstraction.",
                medium: "Mixed media collage",
                dimensions: "Variable",
                media: "/artworks/freedom-under/freedom-07.jpg"
            },
            {
                id: "fu-08",
                title: "Motor City Alternative",
                year: "2026",
                concept: "Revisiting healthcare narratives through archival anatomy and layered medical texts.",
                medium: "Mixed media collage",
                dimensions: "Variable",
                media: "/artworks/freedom-under/freedom-08.jpg"
            }
        ]
    },
    {
        id: "underneath-remain",
        title: "Underneath Remain",
        statement: "A collaborative exploration between collage and photography, documenting the residual weight of gravity on the human spirit.",
        coverImage: "/artworks/underneath-remain/underneath-03.jpg",
        artworks: [
            {
                id: "ur-01",
                title: "Psychic Layering",
                year: "2025",
                concept: "The intersection of subconscious forms and digital abstraction.",
                medium: "Mixed media collage and photograph",
                dimensions: "Variable",
                media: "/artworks/underneath-remain/underneath-01.jpg"
            },
            {
                id: "ur-02",
                title: "Measured Biological",
                year: "2026",
                concept: "Exploring the quantification of the human form through archive and measure.",
                medium: "Mixed media collage and photograph",
                dimensions: "Variable",
                media: "/artworks/underneath-remain/underneath-02.jpg"
            },
            {
                id: "ur-03",
                title: "Silent Witness",
                year: "2025",
                concept: "Visualizing the persistence of identity underneath technical and biological stress.",
                medium: "Mixed media collage and photograph",
                dimensions: "Variable",
                media: "/artworks/underneath-remain/underneath-03.jpg"
            },
            {
                id: "ur-04",
                title: "Gravity Beneath",
                year: "2026",
                concept: "Mapping the descent of the self into structural and emotional depths.",
                medium: "Mixed media collage and photograph",
                dimensions: "Variable",
                media: "/artworks/underneath-remain/underneath-04.jpg"
            },
            {
                id: "ur-05",
                title: "Archival Anatomy",
                year: "2025",
                concept: "The reconstruction of health and history through surgical collage.",
                medium: "Mixed media collage and photograph",
                dimensions: "Variable",
                media: "/artworks/underneath-remain/underneath-05.jpg"
            },
            {
                id: "ur-06",
                title: "Fragmented Clinical",
                year: "2026",
                concept: "Deconstructing medical gaze through anatomical overlay and structural noise.",
                medium: "Mixed media collage and photograph",
                dimensions: "Variable",
                media: "/artworks/underneath-remain/underneath-06.jpg"
            },
            {
                id: "ur-07",
                title: "Torn Gaze",
                year: "2025",
                concept: "Fragmented portraiture exploring internal conflict and chromatic separation.",
                medium: "Mixed media collage and photograph",
                dimensions: "Variable",
                media: "/artworks/underneath-remain/underneath-07.jpg"
            },
            {
                id: "ur-08",
                title: "Subconscious Voyage",
                year: "2026",
                concept: "Navigating the deep waters of memory through surreal nautical symbolism.",
                medium: "Mixed media collage and photograph",
                dimensions: "Variable",
                media: "/artworks/underneath-remain/underneath-08.jpg"
            },
            {
                id: "ur-09",
                title: "Censored Memory",
                year: "2025",
                concept: "The obstruction of identity through high-contrast graphic interventions.",
                medium: "Mixed media collage and photograph",
                dimensions: "Variable",
                media: "/artworks/underneath-remain/underneath-09.jpg"
            },
            {
                id: "ur-10",
                title: "Rainbow Descent",
                year: "2026",
                concept: "Dynamic collapse of the digital self into prismatic data streams.",
                medium: "Mixed media collage and photograph",
                dimensions: "Variable",
                media: "/artworks/underneath-remain/underneath-10.jpg"
            },
            {
                id: "ur-11",
                title: "Violet Persistence",
                year: "2026",
                concept: "An exploration of memory and form through vibrant chromatic layering.",
                medium: "Mixed media collage and photograph",
                dimensions: "Variable",
                media: "/artworks/underneath-remain/underneath-11.jpg"
            }
        ]
    },
    {
        id: "trouble-in-my-head",
        title: "Trouble in my head",
        statement: "Artist statement coming soon...",
        coverImage: "/artworks/trouble-in-head/trouble-01.jpg",
        artworks: [
            {
                id: "th-01",
                title: "Radio Gaga",
                year: "2024",
                concept: "An explosive exploration of psychological noise and media saturation.",
                medium: "Acrylic, Mixed on canvas",
                dimensions: "Variable",
                media: "/artworks/trouble-in-head/trouble-01.jpg"
            },
            {
                id: "th-02",
                title: "Self-Destructive Light",
                year: "2024",
                concept: "Poetic text integrated into vibrant, aggressive brushwork exploring vulnerability.",
                medium: "Acrylic, Mixed on canvas",
                dimensions: "Variable",
                media: "/artworks/trouble-in-head/trouble-02.jpg"
            },
            {
                id: "th-03",
                title: "Internal Anatomy",
                year: "2024",
                concept: "Skeletal structures meeting visceral red fields in a study of mortality.",
                medium: "Acrylic, Mixed on canvas",
                dimensions: "Variable",
                media: "/artworks/trouble-in-head/trouble-03.jpg"
            },
            {
                id: "th-04",
                title: "The Observer",
                year: "2024",
                concept: "Shadow figures and chaotic textures reflecting state-of-mind entropy.",
                medium: "Acrylic, Mixed on canvas",
                dimensions: "Variable",
                media: "/artworks/trouble-in-head/trouble-04.jpg"
            },
            {
                id: "th-05",
                title: "Screaming Silence",
                year: "2024",
                concept: "Abstracted portraiture layered with symbolic weight and frantic energy.",
                medium: "Acrylic, Mixed on canvas",
                dimensions: "Variable",
                media: "/artworks/trouble-in-head/trouble-05.jpg"
            }
        ]
    },
    {
        id: "isolated",
        title: "Isolated",
        statement: "Individual studies on psychological state and physical withdrawal.",
        coverImage: "/artworks/isolated/isolated-01.jpg",
        artworks: [
            {
                id: "iso-01",
                title: "Fragmented Self",
                year: "2024",
                concept: "A study on the multiplicity of persona and the fragmentation of memory.",
                medium: "Mixed media on paper",
                dimensions: "Variable",
                media: "/artworks/isolated/isolated-01.jpg"
            },
            {
                id: "iso-02",
                title: "Gaze and Mask",
                year: "2024",
                concept: "Exploring the tension between social visibility and personal concealment.",
                medium: "Mixed media on paper",
                dimensions: "Variable",
                media: "/artworks/isolated/isolated-02.jpg"
            },
            {
                id: "iso-03",
                title: "The Musician",
                year: "2024",
                concept: "Visualizing sonic isolation and the physical weight of creative practice.",
                medium: "Mixed media on paper",
                dimensions: "Variable",
                media: "/artworks/isolated/isolated-03.jpg"
            },
            {
                id: "iso-04",
                title: "Synthetic Joy",
                year: "2024",
                concept: "The contrast between performative happiness and internal isolation.",
                medium: "Mixed media on paper",
                dimensions: "Variable",
                media: "/artworks/isolated/isolated-04.jpg"
            },
            {
                id: "iso-05",
                title: "Quiet Contemplation",
                year: "2024",
                concept: "A portrait of stillness amidst a chaotic world of technical noise.",
                medium: "Mixed media on paper",
                dimensions: "Variable",
                media: "/artworks/isolated/isolated-05.jpg"
            },
            {
                id: "iso-06",
                title: "Neural Static",
                year: "2024",
                concept: "Mapping the electrical dissonance of an overactive, isolated mind.",
                medium: "Mixed media on paper",
                dimensions: "Variable",
                media: "/artworks/isolated/isolated-06.jpg"
            }
        ]
    },
    {
        id: "fighting-bugs",
        title: "Fighting bugs",
        statement: "Technical friction as artistic catalyst. Exploring the aesthetic of failure and recovery through digital and print experimentation.",
        coverImage: "/artworks/fighting-bugs/bug-01.jpg",
        artworks: [
            {
                id: "fb-01",
                title: "Meow Debug",
                year: "2025",
                concept: "The noise of technical debt translated into feline-associative geometry.",
                medium: "Mixed media, print and digital illustration",
                dimensions: "Variable",
                media: "/artworks/fighting-bugs/bug-01.jpg"
            },
            {
                id: "fb-02",
                title: "Floating Balloon",
                year: "2024",
                concept: "Isolation in a digital landscape, anchored by a single point of organic color.",
                medium: "Mixed media, print and digital illustration",
                dimensions: "Variable",
                media: "/artworks/fighting-bugs/bug-02.jpg"
            },
            {
                id: "fb-03",
                title: "Alien Cat",
                year: "2025",
                concept: "Biological forms meeting technical grids in a study of external witness.",
                medium: "Mixed media, print and digital illustration",
                dimensions: "Variable",
                media: "/artworks/fighting-bugs/bug-03.jpg"
            },
            {
                id: "fb-04",
                title: "State of Kids",
                year: "2024",
                concept: "A visceral critique of systemic pressure on future generations.",
                medium: "Mixed media, print and digital illustration",
                dimensions: "Variable",
                media: "/artworks/fighting-bugs/bug-04.jpg"
            },
            {
                id: "fb-05",
                title: "No Mother, No Cry",
                year: "2025",
                concept: "Digital mourning and the persistence of form in technical void.",
                medium: "Mixed media, print and digital illustration",
                dimensions: "Variable",
                media: "/artworks/fighting-bugs/bug-05.jpg"
            },
            {
                id: "fb-06",
                title: "Technical Gaze",
                year: "2025",
                concept: "The distortion of focus in a high-stress development environment.",
                medium: "Mixed media, print and digital illustration",
                dimensions: "Variable",
                media: "/artworks/fighting-bugs/bug-06.jpg"
            },
            {
                id: "fb-07",
                title: "Pop Era",
                year: "2024",
                concept: "Vibrant icons of liberty meeting the absurdity of digital consumerism.",
                medium: "Mixed media, print and digital illustration",
                dimensions: "Variable",
                media: "/artworks/fighting-bugs/bug-07.jpg"
            },
            {
                id: "fb-08",
                title: "Animal Spirits",
                year: "2025",
                concept: "Dynamic movement within a restricted digital field.",
                medium: "Mixed media, print and digital illustration",
                dimensions: "Variable",
                media: "/artworks/fighting-bugs/bug-08.jpg"
            },
            {
                id: "fb-09",
                title: "Systemic Armor",
                year: "2024",
                concept: "Depicting the psychological barricades built during technical conflict.",
                medium: "Mixed media, print and digital illustration",
                dimensions: "Variable",
                media: "/artworks/fighting-bugs/bug-09.jpg"
            }
        ]
    }
];

export const writings: Writing[] = [];

export const research: Research[] = [
    {
        id: "arabic-mt",
        title: "Context-Aware Arabic MT",
        year: "2023",
        institution: "Research Investigation",
        abstract: "Advanced Machine Translation system handling regional register control and dialectal variations in Arabic.",
        technicalDetails: "A research-focused project tackling the complexities of Arabic dialects. The system uses context-aware embeddings and a modified Transformer architecture with dialect-specific attention heads."
    },
    {
        id: "bengali-fake-news",
        title: "Bengali Fake News Detection",
        year: "2023",
        institution: "NLP Research",
        abstract: "Multi-layer LSTM ensemble achieves 82.43% accuracy in detecting disinformation within Bengali news cycles.",
        technicalDetails: "An ensemble of multi-layered LSTMs and GRUs, trained on a curated dataset of over 50,000 verified news items. Features weighted prediction merging for increased reliability."
    }
];
