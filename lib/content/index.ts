import { Project, Artwork, Writing, Research, Series } from "@/types/content";

export const projects: Project[] = [
    {
        id: "haorgrix",
        title: "HaorGrix",
        year: "2026",
        tags: ["Studio", "AI", "Bangladesh", "Co-Founder"],
        summary: "A 13-person digital studio building AI-native products. Co-founded as a venture-capable studio that backs the people inside it, not just the projects.",
        longDescription: "HaorGrix is a digital studio I co-founded. We build AI-native products for clients while incubating our own. The team is 13 people as of 2026, working across web, mobile, AI engineering, and design. The bet is simple: a small, senior team can outbuild a much larger agency, given the right product focus.",
        conceptualFraming: "Most of the talent that gets pulled into outsourcing is undervalued and undermentored. HaorGrix is an attempt to build something else, a place where the work is hard, the equity is real, and the products carry our names.",
        technicalArchitecture: "Stack varies by client. House defaults: Next.js, TypeScript, FastAPI and Postgres, Anthropic and OpenAI APIs, Vercel.",
        stack: ["Next.js", "TypeScript", "FastAPI", "Postgres", "Anthropic API", "OpenAI API"],
        links: {
            demo: "https://haorgrix.com",
        },
        media: {
            hero: "/projects/haorgrix.png",
        },
    },
    {
        id: "robotheater",
        title: "RoboTheater",
        year: "2026",
        tags: ["Multimodal AI", "Model Evaluation", "AI Ethics", "Three.js"],
        summary: "A frontier vision-language model is placed inside a live 3D trolley-problem simulation and given one instruction. It reasoned about the ethics correctly, and failed at seeing.",
        longDescription: "RoboTheater puts Google Gemini inside a live Three.js trolley-problem simulation. A Python loop captures seven frames a second apart, sends them to the model with a zero-context prompt, and renders the decision back into the scene in real time. The entire prompt is: Watch. Decide. LEFT or RIGHT.",
        conceptualFraming: "The finding is the point. The model recognized the trolley problem from pixels alone and reasoned about it with consistent utilitarian logic, but it made frequent left and right errors because each figure is only a few pixels wide at the camera distance it sees. It reasoned about the ethics correctly, and failed at seeing.",
        technicalArchitecture: "A Three.js real-time simulation, a Python capture-and-inference loop against the Gemini API, a structured JSON decision schema (choice, reasoning, confidence), and live rendering of the decision back into the room. A research experience with Azad Salam.",
        stack: ["Three.js", "Python", "Google Gemini API", "WebGL"],
        links: {
            demo: "https://robotheater-site.vercel.app",
        },
        media: {
            hero: "/projects/robotheater.png",
        },
    },
    {
        id: "irris",
        title: "Irris",
        year: "2026",
        tags: ["AI Agent", "Mobile", "Product", "Founder"],
        summary: "A mobile AI agent. Tell it what you want in plain language and it plans the steps and gets it done, across your apps and your phone.",
        longDescription: "Irris is a mobile-first AI agent I am building. You give it a goal, such as clean storage, sort these photos, or handle a task inside an app, and Irris plans the steps and carries them out on the device in your hand. It is agentic, not just chat: it does the doing.",
        conceptualFraming: "Assistants talk. Irris acts. The bet is that the most useful place for an agent is the phone already in your pocket, where your life actually happens, and that it should work on your terms and your device.",
        technicalArchitecture: "In development. A planner-executor loop over natural-language goals, with app and system actions as tools, designed mobile-first.",
        stack: ["AI Agents", "Mobile", "TypeScript"],
        links: {
            demo: "https://irris.vercel.app",
        },
        media: {
            hero: "/projects/irris.png",
        },
    },
    {
        id: "reiva",
        title: "Reiva",
        year: "2026",
        tags: ["AI", "SaaS", "Healthcare", "Product"],
        summary: "An AI receptionist for clinics. It handles patient chat, scheduling, prescriptions, and payments in Bangla and English, around the clock.",
        longDescription: "Reiva is a shipped AI receptionist for clinics, a HaorGrix product. It answers patients, books appointments with live serial queues, generates digital prescriptions, tracks payments across local methods, sends reminders, and reports to a real-time dashboard, all in Bangla and English.",
        conceptualFraming: "Small clinics lose hours and patients to a phone nobody can always answer. Reiva is the receptionist that never sleeps, built for the way care actually runs where it operates.",
        technicalArchitecture: "Conversational AI over a clinic knowledge base, WhatsApp and web booking, digital prescriptions, multi-method payment tracking, and an analytics dashboard.",
        stack: ["Next.js", "AI Chat", "Postgres", "WhatsApp"],
        links: {
            demo: "https://reiva.haorgrix.com",
        },
        media: {
            hero: "/projects/reiva.png",
        },
    },
    {
        id: "a-river-of-gaze",
        title: "A River of Gaze",
        year: "2026",
        tags: ["Generative Art", "Game", "Interactive", "Web"],
        summary: "A playable one-verb game. Hold to hide. All of its art and sound are generated in code.",
        longDescription: "A River of Gaze is a small, free, playable game built entirely in the browser, with every visual and every sound generated in code rather than drawn or recorded. It reduces play to a single verb, hold to hide, and lets meaning gather around that one act.",
        conceptualFraming: "An extension of my painting question into something you do with your hands. The gaze is the subject again, only here you are inside it.",
        technicalArchitecture: "A browser game with fully code-generated art and procedural sound. No external assets.",
        stack: ["JavaScript", "Canvas", "Web Audio"],
        links: {
            demo: "https://a-river-of-gaze.vercel.app",
        },
        media: {
            hero: "/projects/river-of-gaze.png",
        },
    },
    {
        id: "the-frustrated-sun",
        title: "The Frustrated Sun",
        year: "2026",
        tags: ["Generative Art", "Living Painting", "Interactive", "Web"],
        summary: "A living, generative painting assembled from my body of work. Endless, musical, and interactive.",
        longDescription: "The Frustrated Sun is a contemporary generative piece built from my paintings and writing. It is endless and musical, changing as you watch and respond to you, a painting that keeps making itself.",
        conceptualFraming: "If a painting is a recording of a negotiation, this one keeps negotiating. It never finishes, which is the point.",
        technicalArchitecture: "A generative web system that composes from the corpus of my work, with procedural motion and sound.",
        stack: ["JavaScript", "Canvas", "Web Audio"],
        links: {
            demo: "https://the-frustrated-sun.vercel.app",
        },
        media: {
            hero: "/projects/frustrated-sun.png",
        },
    },
    {
        id: "aesthetic-resistance",
        title: "Aesthetic Resistance",
        year: "2024",
        tags: ["WebGL", "GLSL", "Generative Art", "Next.js"],
        summary: "Real-time generative system exploring the boundaries of algorithmic beauty and systemic friction.",
        longDescription: "Aesthetic Resistance is a computational study on how generative systems can manifest friction within digital perfection. It uses custom GLSL shaders to simulate organic growth constrained by geometric logic.",
        conceptualFraming: "In an era of hyper-optimized digital experiences, 'Aesthetic Resistance' serves as a visual counter-point, celebrating the beauty of non-linear processes and entropy.",
        technicalArchitecture: "The system is built on a custom Next.js bridge to a WebGL rendering context. Shaders are modularized to allow real-time parameter injection via React state without pipeline stalls.",
        stack: ["TypeScript", "Three.js", "GLSL", "React Frame", "Vercel"],
        links: {
            demo: "https://aesthetic-resistance.vercel.app/",
            github: "https://github.com/Prithweeraj-Acharjee",
        },
        media: {
            hero: "/projects/aesthetic-resistance.png",
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
];

export const series: Series[] = [
    {
        id: "material-expressions",
        title: "Material: Expressions",
        statement: `The most recent body of work, 2026. Paintings made under a specific condition in twenty one days, and the ones that came after. Mixed media on paper and canvas, mostly large, at the size of a person.

This is the work the book Material was written next to. The full catalogue and the book live at material-expressions.vercel.app.

Prithwee, 2026`,
        coverImage: "/artworks/material-expressions/me-04.jpg",
        artworks: [
            { id: "me-01", title: "How Will I Recognize You I", year: "2026", concept: "From the Kemone series, after the Baul song by Shah Abdul Karim. A face searched for in the murk.", medium: "Mixed media on canvas", dimensions: "Large", media: "/artworks/material-expressions/me-01.jpg" },
            { id: "me-04", title: "How Will I Recognize You IV", year: "2026", concept: "A pale figure surfacing through dragged gold, a red wound below. The painting performs its own title.", medium: "Mixed media on canvas", dimensions: "Large", media: "/artworks/material-expressions/me-04.jpg" },
            { id: "me-02", title: "How Will I Recognize You II", year: "2026", concept: "Kemone series. Gold and grey, dark masses working against the ground.", medium: "Mixed media on canvas", dimensions: "Large", media: "/artworks/material-expressions/me-02.jpg" },
            { id: "me-03", title: "How Will I Recognize You III", year: "2026", concept: "Kemone series. A cross-like figure in teal and grey.", medium: "Mixed media on canvas", dimensions: "Large", media: "/artworks/material-expressions/me-03.jpg" },
            { id: "me-05", title: "Synthesis Under Suffer", year: "2026", concept: "The synthesis works, everything argued onto one surface under pressure.", medium: "Mixed media on canvas", dimensions: "Large", media: "/artworks/material-expressions/me-05.jpg" },
            { id: "me-06", title: "Synthesis Under Suffer IV", year: "2026", concept: "Red and gold horizontal bands, scratched and worked, signed at the corner.", medium: "Mixed media on canvas", dimensions: "Large", media: "/artworks/material-expressions/me-06.jpg" },
            { id: "me-07", title: "Synthesis", year: "2026", concept: "An abstract study in the negotiation between materials.", medium: "Mixed media on canvas", dimensions: "Large", media: "/artworks/material-expressions/me-07.jpg" },
            { id: "me-08", title: "Padma: The River", year: "2026", concept: "The river carried in memory. My mind cries for the chars of the Padma.", medium: "Mixed media on canvas", dimensions: "Large", media: "/artworks/material-expressions/me-08.jpg" },
            { id: "me-09", title: "Separated Expressions", year: "2026", concept: "A diptych of separated marks, expression pulled apart.", medium: "Mixed media, diptych", dimensions: "Large", media: "/artworks/material-expressions/me-09.jpg" },
            { id: "me-10", title: "Self-Portrait", year: "2026", concept: "The painter looking at the painter.", medium: "Oil on canvas", dimensions: "12 x 16 in", media: "/artworks/material-expressions/me-10.jpg" },
        ],
    },
    {
        id: "central-face",
        title: "Central Face",
        statement: `A working body of paintings, May 2026 to ongoing.

The face sits in the middle of the canvas and the rest of the canvas is allowed to riot around it. I had been making collage and photograph-based work for a year and never knew when a piece was finished. Once a face is on a surface, every other mark has to negotiate with it, the drips choose to go around the eye or through it, the colors push the head forward or let it sink. There is somebody to argue with.

Scribbling is the opposite of drawing. A scribble is what the hand does when it stops asking for permission. Charcoal on top of tempera on top of acrylic on top of spray, scratched into with a key, none of these marks are decisions exactly. They are speeds.

Many of the recent pieces have something falling, cloth, hair, paint itself, partly covering the face. I grew up in a country where women in my family kept their hair and their skin and their bodies under cloth most of the time. That is part of where the drape comes from. The other part is the realization that being covered and being free are not opposites. Sometimes the drape is what lets the face stay alive.

These works are 4 × 6 ft and bigger. They live at the size of a person.

Prithwee A, 2026`,
        coverImage: "/artworks/central-face/central-01.jpg",
        artworks: [
            { id: "cf-01", title: "Things finally seems to settle up", year: "2026", concept: "Two figure-masses against pale teal stripes. Drips anchor the lower figure to the ground. A study in the temporary nature of settled feeling.", medium: "Acrylic, tempera, spray, charcoal on canvas", dimensions: "4 × 6 ft", media: "/artworks/central-face/central-01.jpg" },
            { id: "cf-02", title: "Capital", year: "2026", concept: "Face as compressed authority. The head looks back without expression.", medium: "Acrylic, tempera, charcoal on canvas", dimensions: "4 × 6 ft", media: "/artworks/central-face/central-02.jpg" },
            { id: "cf-03", title: "yeah I speak", year: "2026", concept: "Mouth-region scratched in charcoal, the rest of the head smothered. Voice as residue.", medium: "Acrylic, tempera, charcoal on canvas", dimensions: "4 × 6 ft", media: "/artworks/central-face/central-03.jpg" },
            { id: "cf-04", title: "Self view", year: "2026", concept: "The painter looking at the painter. Painter as mirror, mirror as object.", medium: "Acrylic, tempera, spray, charcoal on canvas", dimensions: "4 × 6 ft", media: "/artworks/central-face/central-04.jpg" },
            { id: "cf-05", title: "Masked", year: "2026", concept: "A head fully covered by drape. What is being protected and what is being prevented from looking.", medium: "Acrylic, tempera, charcoal on canvas", dimensions: "4 × 6 ft", media: "/artworks/central-face/central-05.jpg" },
            { id: "cf-06", title: "Torn", year: "2026", concept: "Paint pulled vertically through a face. Tear as gesture, not event.", medium: "Acrylic, tempera, spray, charcoal on canvas", dimensions: "4 × 6 ft", media: "/artworks/central-face/central-06.jpg" },
            { id: "cf-07", title: "Inner face", year: "2026", concept: "A second face hiding beneath a first. The one underneath does not get to come out.", medium: "Acrylic, tempera, charcoal on canvas", dimensions: "4 × 6 ft", media: "/artworks/central-face/central-07.jpg" },
            { id: "cf-08", title: "Freedom Under (study)", year: "2026", concept: "A central-face study within the older Freedom Under inquiry. Bridge piece.", medium: "Acrylic, tempera, charcoal on canvas", dimensions: "4 × 6 ft", media: "/artworks/central-face/central-08.jpg" },
        ],
    },
    {
        id: "freedom-under",
        title: "Freedom Under",
        statement: `“Being born a woman is my awful tragedy. From the moment I was conceived I was doomed to sprout breasts and ovaries rather than penis and scrotum; to have my whole circle of action, thought and feeling rigidly circumscribed by my inescapable feminity. Yes, my consuming desire to mingle with road crews, sailors and soldiers, bar room regulars--to be a part of a scene, anonymous, listening, recording--all is spoiled by the fact that I am a girl, a female always in danger of assault and battery. My consuming interest in men and their lives is often misconstrued as a desire to seduce them, or as an invitation to intimacy. Yet, God, I want to talk to everybody I can as deeply as I can. I want to be able to sleep in an open field, to travel west, to walk freely at night...”, Sylvia Plath, The Unabridged Journals of Sylvia Plath 

The lives of women in my country have always been entangled in a system of observation. As I grew up, beginning with my mother -I witnessed their quiet performances: existing under constant surveillance, maintaining beauty not as expression but as expectation. Under that, the definition of femininity, shaped by dominance, remains here elusive and distorted. 
Balancing these everyday burdens becomes a ritual, an act of endurance. Some remain untethered, but many, like my mother, carry invisible chains, generations deep. 

Freedom Under IV: The Veil of Observance reflects that half-conscious state that descends after sunset, when the sky feels both sheltering and suffocating. 

I moved from a tiny populated town of Bangladesh to the United States, hence, so called modern world is not very different. Time passes, time passes, yet the gaze remains. Surveillance evolves, but it never disappears. The eyes only multiply. The so-called progressive spaces fail too, not through words, but through silence. They speak of liberation in public, yet protect abusers within their own walls. When women speak, the cost is often their livelihood, their safety, or their dignity. Ironically remembering watching the President of the United States on television, complimenting the Italian Prime Minister on her beauty during a global summit, a moment that revealed how deep the gaze runs, in the most polished rooms of power. 

Women, and all marginalized identities, become a test that humanity keeps failing, 
the theist and the atheist, the left and the right 
each one claiming progress, yet still bound by the same gaze. 

Freedom Under V explores this broken promise of liberation- how freedom itself fractures under watchful scrutiny. 

Freedom Under is where I worked with photographs and paints, memorizing this quiet persistence of control- how the lives of half the population are still shaped under watchful eyes. The gaze has evolved, perhaps grown more subtle, but it has never disappeared. 

Freedom Under explores the tension between visibility and freedom, how being seen all the time can feel both empowering and imprisoning. I was collaging the record of looking and being looked at, a space that asks two questions: Who holds the gaze, and who gets to break it? 

Freedom Under 
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

export const writings: Writing[] = [
    {
        id: "material-book",
        title: "Material: Painting in the Post-AI Era",
        date: "2026",
        summary: "A book on what painting is for in a world that can generate images without a body. Written alongside the paintings, published online with a full reader and a catalogue.",
        content: "Material is my book on painting in the post-AI era. It argues that painting is a material practice, and that the material is the argument, because the material remembers and the algorithm does not. It runs from a prologue in a Toledo studio through chapters on material, the gaze, photography and the algorithm, the face under cloth, the painter as researcher, reduction, and algorithmic refusal, and ends in a set of plates.",
        links: [
            { url: "https://material-expressions.vercel.app/book", label: "Read the book" },
            { url: "https://material-expressions.vercel.app", label: "Material: Expressions, the catalogue" },
        ],
    },
];

export const research: Research[] = [
    {
        id: "rar",
        title: "Aesthetics Is Not a Mirror: Recursive Aesthetic Reinforcement (under review)",
        year: "2026",
        institution: "AIES 2026, under review",
        abstract: "A held-out falsification study of representational bias in widely used text-to-image diffusion models, showing strong statistical convergence toward a narrow occupational aesthetic across thousands of generations.",
        technicalDetails: "Pearson r = 0.873 between LAION-Aesthetics V2 score and the model's outputs; a 200,000-trial Monte Carlo joint null test (p < 1e-5); FairFace cross-classifier replication; a pre-registered held-out falsification. First-author poster at the Midwest Graduate Symposium 2026.",
    },
    {
        id: "dp-4dgs",
        title: "DP-4DGS: Dynamic Priors for 4D Gaussian Splatting",
        year: "2026",
        institution: "Dr. Aniruddha Ray Lab, UToledo",
        abstract: "Working draft. Coupling 4D Gaussian splat scene reconstruction with a physics-informed prior to improve dynamic-scene fidelity under sparse observation.",
        technicalDetails: "First-author preliminary results submitted to the Midwest Graduate Symposium 2026. Manuscript in preparation for a graphics and vision venue.",
    },
    {
        id: "bengali-fake-news",
        title: "Bengali Fake News Detection: A Multi-Layered LSTM Ensemble Approach",
        year: "2025",
        institution: "IEEE QPAIN 2025, published",
        abstract: "A multi-layer LSTM ensemble for detecting misinformation in Bengali-language sources, evaluated at the corpus level.",
        technicalDetails: "An ensemble of multi-layered LSTMs trained on a curated dataset of verified Bengali news, with weighted prediction merging, reaching 82.43% accuracy.",
        links: [
            { url: "https://ieeexplore.ieee.org/document/11171927", label: "IEEE Xplore" },
        ],
    },
    {
        id: "arabic-mt",
        title: "Context-Aware Dialectal Arabic Machine Translation with Interactive Region and Register Selection",
        year: "2026",
        institution: "arXiv, second author",
        abstract: "A context-aware, steerable framework for dialectal Arabic machine translation that models regional and sociolinguistic variation explicitly.",
        technicalDetails: "A rule-based data augmentation pipeline expands a 3,000-sentence seed corpus to 57,000 parallel sentences across eight regional varieties; an mT5-base model is fine-tuned on lightweight metadata tags for controllable region and register.",
        links: [
            { url: "https://arxiv.org/abs/2604.06456", label: "arXiv:2604.06456" },
        ],
    },
];
