import { Project, Writing, Research, Series } from "@/types/content";

export const projects: Project[] = [
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

const sourceSeries: Series[] = [
    {
        id: "21-days",
        title: "21 Days",
        statement: `A memoir in paintings. Twenty one days of a life put on hold, painted as they happened, and the work that came after.

The paintings are the record. The book, 21 Days, is forthcoming.

Prithwee, 2026`,
        coverImage: "/artworks/21-days/td-07.jpg",
        artworks: [
            { id: "td-01", title: "Breaking Out", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-01.jpg" },
            { id: "td-02", title: "Anger Under Suspension", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-02.jpg" },
            { id: "td-03", title: "Face in Suspension Days", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-03.jpg" },
            { id: "td-04", title: "The Night of the Appeal", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-04.jpg" },
            { id: "td-05", title: "Waves of Shock II", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-05.jpg" },
            { id: "td-06", title: "Waves of Shock", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-06.jpg" },
            { id: "td-07", title: "Synthesis Under Suspension", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-07.jpg" },
            { id: "td-08", title: "Synthesis Under Suspension II", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-08.jpg" },
            { id: "td-09", title: "Synthesis Under Suspension III", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-09.jpg" },
            { id: "td-10", title: "Synthesis in the Pick", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-10.jpg" },
            { id: "td-11", title: "Father I", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-11.jpg" },
            { id: "td-12", title: "Father II", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-12.jpg" },
            { id: "td-13", title: "Breathing", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-13.jpg" },
            { id: "td-14", title: "Affection", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-14.jpg" },
            { id: "td-15", title: "Outside and Inside", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-15.jpg" },
            { id: "td-16", title: "Destructive Sapien", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-16.jpg" },
            { id: "td-17", title: "Colors Behind the Window", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-17.jpg" },
            { id: "td-18", title: "Freedom Under (Veil of Observation)", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-18.jpg" },
            { id: "td-19", title: "Grass", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-19.jpg" },
            { id: "td-20", title: "Multi-identity", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-20.jpg" },
            { id: "td-21", title: "Kemone Chinibo Tomare IV", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-21.jpg" },
            { id: "td-22", title: "Self Portrait", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-22.jpg" },
            { id: "td-23", title: "Unnamed", year: "2026", concept: "From 21 Days, a memoir in paintings.", medium: "Mixed media", dimensions: "Variable", media: "/artworks/21-days/td-23.jpg" },
        ],
    },
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

The lives of women in my country have always been entangled in a system of observation. As I grew up, beginning with my mother, I witnessed their quiet performances: existing under constant surveillance, maintaining beauty not as expression but as expectation. Under that, the definition of femininity, shaped by dominance, remains here elusive and distorted. 
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
];

const pick = (id: string) => sourceSeries.find((s) => s.id === id)!;

// The Freedom Under statement, read in parts across the collages; the closing parts land on the last work.
const collageParts = (i: number, n: number) => {
    const parts = pick("freedom-under").statement.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
    return (i < n - 1 ? [parts[i]] : parts.slice(i)).join("\n\n").replace("liberation- how", "liberation, how");
};

export const series: Series[] = [
    {
        id: "paintings",
        title: "Paintings",
        statement: "",
        coverImage: "/artworks/paintings/p-01.jpg",
        artworks: [
            {"id": "p-01", "title": "Waves of shock, The day after suspension", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-01.jpg", "writing": "Things suddenly became worse at the beginning of last summer, when one morning I woke up to a suspension email from the college. I realized I had failed in two of my courses that semester. I jumped out of shock when I saw the email, but in a few seconds, the waves of shock turned into cold fear. I felt terrified, but more than that, I felt I was standing at a dead end where I did not know where to go or what to do.\n\nA suspension might not be so hard a thing for someone. There is LUCA, the Last Universal Common Ancestor, behind every structure, dinosaurs and galaxies, and all of it can vanish in the blink of an eye. But at that moment, the suspension was still giving me the greatest fear of my life. I was on the weaker side that time. The suspension was the Axis, but stronger.\n\nI was an outsider alien."},
            {"id": "p-02", "title": "Multiidentity", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-02.jpg", "writing": "I sometimes have to live different lives at different times. Often hard times force me into situations where I have to live in a way I never wanted to, and this is different from an existential crisis to some extent. Being forced to act in different roles makes me a mess and eventually exhausts me so much that I do not even talk. I have seen other people do that too. I have seen my mother, my father, my sister, all of them.\n\nThis week was hard, as I had to live multiple ways, with tons of midterms and hassles for the company. And I keep doing this and don’t know how much longer I will carry it. This painting came out in the middle of all that.\n\nThese are my last set of colors, which I got from the artist village gallery. I had to tape two paper rolls together to make the canvas wider. I have also been looking for a studio space. I can’t keep these paintings anymore, as my apartment room is not expanding like the universe, and paintings need care like humans. I hand painted this. All the brushes became unusable. So there is always a lot to do, and a lot left to do. But sometimes I just don’t wanna wake up from my bed.\n\nOctober 6th\n\nBancroft Street, Toledo"},
            {"id": "p-03", "title": "Outside and Inside", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-03.jpg", "writing": "Jerry Cantrell from Alice in Chains once wrote, “I’ve been guilty of kicking myself in the teeth.” I was feeling the same. Guilt was a new thing that came to me after childhood, although I have done so many things that my whole religion would feel guilty about. I realized there is a big pattern in this: guilt only arrived in my life when things went bad, or maybe a long time later, when the effects of the incident did not even exist anymore. I stopped being guilty. What should I be guilty about? There are a lot of crazy ones I can blame.\n\nThere was a habit that became a kind of best friend: viewing myself from a fourth dimension. This cannot happen in reality, but I knew that 3D objects can be viewed from a fourth dimension, but not vice versa, I would often like to view my 3D version from a fourth dimension. I could even extend it to view the whole environment surrounding me. I loved to think from that greater position that education is like a tree with a bunch of leaves that go in different directions but are all rooted in one. Growing that tree might or might not be required for humans to act civilized, but it must depend on the individual and learning must be something that someone is willing to do."},
            {"id": "p-04", "title": "Utopia", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-04.jpg", "writing": "I admit there are economists who believe that, in reality, this way of learning is a utopia. But I would still love to think like that, because I could enjoy learning in that way. I would not learn anything I am not willing to.\n\nI had a professor in my third year of college; He loved to tell us how people with college ‘degrees’, on average, are most likely to live a happier life compared to high school, middle school or no-school individuals. He would use that to take us to the good side of education. Dwight is a fascinating person and probably one of the most valuable instructors I have met in my life till now, as he never forgot to show us the dark sides of education in some people’s lives. But I could clearly see the difference between a degree and education. Average college degree holders might become happier in living life, but education itself is another, expanded thing, which should matter separately both to the society and to the individual, himself or herself.\n\nAnd I wanted education, my parents did too. But they could not identify the difference or just did not want to."},
            {"id": "p-05", "title": "Waves of shock 2, Third day after Suspension", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-05.jpg", "writing": "The good thing about painting is that I get to speak through a language that I can ensure won’t be direct in people’s eyes. I was full of anger, guilt and sadness. I wanted to shout at my college saying you do not know me. You cannot grade me by numbers. I wanted to shout saying I do not want your education and I will be educated myself. But these are things I cannot do. People will call me mad.\n\nBut at least there was art and I got to speak without fear, and without sound. Although there are times when external fear affects my paintings very much and this was from one of those times. My brushes were dry. But I was dryer inside.\n\nI could not sleep and I could not eat. When your right to stay in a country hangs on one enrollment, and that enrollment, the one and only hope of your family, is at risk, there is nothing left to do it for. The only thing I could do was paint, and you can see in the painting that I did not have the patience. I was in fear and in a rush, and fear and rush together make us not want to see the end."},
            {"id":"affection","title":"Affection","year":"2026","concept":"","medium":"Mixed media on paper","dimensions":"","media":"/artworks/paintings/affection.jpg","writing":"In a moment like that, we can do only one thing. I rushed to the person nearest to me, Senju, as soon as I could digest the first wave of shock. She was the only one I could think of in that moment.\r\n\r\nTrying to be a pro CEO, I once started reading the venture capitalist Ben Horowitz, and in one of his books he wrote that Marc said, “We need two kinds of friends in our life. The first kind is one we can call when something good happens, someone who will be more excited than if it had happened to them. And the second kind is somebody we can call when things go extremely wrong and we have one chance to call in order to realistically save ourselves.” She was both kinds. She could go to extremes to try to save me in every way, but often she did not hold the power, and at that moment I could not find a perfect second kind who had both the power and the will to help me.\r\n\r\nBeing guilty made me blank for the moment, and she took me to the academic office because I had gone numb."},
            {"id": "p-06", "title": "Portrait in suspension days 1", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-06.jpg", "writing": "We walked into the academic office together, and she kept comforting me that somehow things would be all right, that the office might have made a mistake or sent the email by mistake.\n\nI see in life we sometimes face some points where life gives us a door that looks like opportunity but actually it is not. It is a well-made trick of the system that puts a mirror in front of us. A locked door is honest. It tells you where you stand. You can kick it, curse it, sit outside it and write poems about it. An open door is cleverer. It lets you in, and once you are in, you are no longer a person who was kept out. You become a person who was given a chance and whatever happens next is yours.\n\nThere was a kingdom famous for its doors. Every door was open and travelers used to come from far away to see a country with no locks, and it was famous for being so fair. Sindhu, young and from the river country, arrived with a bag of crooked drawings and went from door to door. Behind each one there was a polished mirror and a doll-faced, smiling clerk said, \"Please, take your time.\"\n\nHe looked. He saw a tired boy holding crooked drawings.\n\n\"You see,\" said the clerk, \"the door was always open.\" Sindhu thanked him, because he had been raised to thank people, and he stepped ahead to the next door.\n\nHe stopped looking into the mirrors and started looking at the frames. There were doors and doors. Every frame was made of the same wood. He realized he was in a trap. And the kingdom became clear to him. It did not need locks. It had people who believed that what they saw in the mirror was the room."},
            {"id": "p-07", "title": "Anger", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-07.jpg", "writing": "My door came as a link in the academic office. I was told to write an appeal letter with recommendations and that became my only piece of wood floating in the Atlantic. I put in everything: the reasons, the research I had been doing, the people who believed in me. I wrote to them and made a plan with clean arithmetic. I sent it the way you push a boat into a river. There are some times when we cannot procrastinate anymore. I did whatever I could do, reached whoever I could reach."},
            {"id": "p-08", "title": "Thirst", "year": "2026", "concept": "", "medium": "Mixed media and spray paint on paper", "dimensions": "", "media": "/artworks/paintings/p-08.jpg", "writing": "Dopamine is a big factor in our lives. Even in complete uncertainty, we need it. We love to imagine how nice things could look in the future, and how they will be. In that moment, it all looks so easy.\n\nI had one night to write the appeal letter, and I was reaching out to everyone who could write on my behalf. There are two kinds of people you can ask: the ones who will help you because of a personal bond, and the ones who can help you because of their position. That choice makes the difference. But I was grabbing whoever I could. The appeal was hope I had to ask someone else for. But I needed that dopamine that night anyhow and dopamine does not depend on anyone's permission.\n\nI submitted my research paper. I started painting. I knew what it was. It was dopamine and I was desperate for appreciation. Dopamine is not the pleasure. It is the waiting for the pleasure. That is why it is so loyal to the hopeless. A person with nothing certain has everything left to reach for.\n\nOnly painting has this strange ability of giving appreciation when no one else is involved. Every mark I made, the paint took some of it and refused some of it, and what stayed is proof that I was there and that was enough to be appreciated."},
            {"id": "p-09", "title": "Appeal", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-09.jpg", "writing": "I have thought about that sentence a lot afterwards. Someone should read the rest of it. A person is more than the column the system reads, and she knew her knowing would change nothing. She sat inside the machine and refused to become it, for about half an hour, with the door half open. That is also the most a person inside a system can do. It is a lot, it is also nothing.\n\nA system does not need cruel people. It needs kind people who cannot change the outcome. Their kindness is real, and the system wears it like a good coat, as a mask. The courtesy is how the verdict arrives. Nobody shouts, somebody offers you water.\n\nMy father wanted me to join the Bangladesh Civil Service all his life, because he thought power meant being able to decide. In that office I learned, sometimes it means being the one who never has to. The policy decides. The policy has no face, and we cannot look it in the eye. And we are hurt by something that nobody did.\n\nI wrote the appeal in their language, and that is the part I was least proud of. I turned my life into arithmetic because arithmetic was the only thing the door could read. I cut myself down to the shape of the opening and then wondered why I came through so small.\n\nWalking out, I felt the way a man must feel when he finds the door was built only for him and was always going to close. I had less anger. I had something quieter. I had been seen, at least, by someone I thought had the power to act on what she saw. But being seen and being saved are different rooms. Three days later I learned which one I was standing in."},
            {"id": "p-10", "title": "Portrait in suspension days 2", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-10.jpg", "writing": "The appeal did not help. I want to say that plainly before I say anything else, that the reply was careful. Someone had read my four pages, I could tell. The answer was still no, and the reason fit into one word: categorical. When the numbers cross a certain line, the policy does not permit an appeal at that level. My letters, my research, the people who wrote for me, the plan with its clean arithmetic, all of it arrived at a door that had already decided what kind of thing I was. I was that Sindhu who arrived a long way but caged.\n\nA category is a strange kind of room. You do not walk into it. It is built around you while you are busy brushing your teeth, driving and going to work, cooking food and paying bills and one morning you find the walls already standing. A boy who failed because he did not care and a boy who failed because the money from home came late and he was painting at night to stay alive sit in the same row. The category has no column for why.\n\nI figured, before going further, I should admit that there are other perspectives. What I am writing here is in my perspective and this is my truth.\n\nI had thought the appeal was where the why would finally be read. It was where the why was politely filed. I do not blame the person who wrote the reply. They were holding a line drawn by someone else, in a meeting I will never see. That is how a category works.\n\nI started painting my suspension days faces. I thought that was at least something I could do while floating. This painting is an earlier one. Half of it is covered by its own colors, but still deciding whether to show itself."},
            {"id": "p-11", "title": "Portrait in suspension days 3", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-11.jpg", "writing": "My Father’s Wall\n\nWhen I was in kindergarten, my father bought a print of the Mona Lisa and hung it on our wall. It hung above the showcase where my mother kept the good plates, the ones we never used. Every evening my father came home, took off his watch, and looked at her before he looked at us. Not long. Just enough to check she was still there.\n\nHe already knew there was something mysterious about her face. I was a child, I could not find any mystery there. I wished I could see what my father was seeing.\n\nI now wonder if he was not even looking at her face. He was looking at the wall, which showed that a man who could afford to hang a famous painting on his wall was a man whose life was going somewhere.\n\nMy father wanted me to join the Bangladesh Civil Service all his life, because he thought power meant being able to decide. BCS and Uniform used to be most of our conversations at dinner."},
            {"id": "p-12", "title": "Portrait in suspension days 4", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-12.jpg", "writing": "It was during Covid, and my mother had banned us from going out of the house. One afternoon my mother let me out to buy something necessary. I went out and bought a can of spray paint.\n\nI wrote on the walls of my school. কত হাজার মরলে পরে মানবে তুমি শেষে। How many thousands have to die before you finally accept it. The second line was mine, leaning on Jibanananda Das: আর এই স্কুুল একদিন কল্লোলিনী তিলোত্তমা হবে, তবুও তোমার কাছে আমার হৃদয়। One day this school will become a shining city, and still my heart will be with you. The first line is from the Bengali version of Bob Dylan’s Blowin’ in the Wind.\n\nThe next morning I woke up in my bed and my father was sitting beside my bed with the local newspaper, reading about slogans that had been written on the walls of the government high school. I lay still and said nothing. He did not know the culprit was lying beside him.\n\nThen the threats started. I will not write about them here. I will only say that I learned early what it costs to write on a wall that belongs to the state, and how quickly a sentence becomes a crime once it is in public.\n\nI have thought about that morning more than any appeal letter. My father was reading his son and could not recognize him."},
            {"id": "p-13", "title": "Portrait in suspension days 5", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-13.jpg", "writing": "When I chose Fine Arts at Dhaka University, he did not shout. He travelled to Dhaka with me for the first time, to get me admitted. But there was something worse. He was not proud of me getting the chance to be an artist, he was proud of me getting admitted to Dhaka University. We had a silent distance between us and it was a kind of distance you can measure in rooms. When I left Dhaka for a state university in Ohio, he understood it enough to support it, which is a different thing from understanding, he paid for the application, visa interview and plane ticket. He sent more money than he had to send, across an ocean to a city he had never seen. South Asian fathers express love through provision. So when the suspension came, I did not call him. There is a kind of silence that a son keeps from his father in our culture, which is not lying but is also not honesty. I lived inside it all my life. He asked about the grades the way he always asked, and I answered like a man reading from a form. If I tell him one day, I do not know what I will say or what he will think. Maybe I will tell him about the Mona Lisa. That I finally found the mystery. It was never in her face. It was in the man standing in front of her every evening, checking that his life was still on the wall.\n\nIn Toledo my walls hold nothing finished. Kraft paper, torn at the edges, taped to rental drywall with packaging tape that lets go in the summer humidity. No frame, no glass, no good plates underneath. My father hung a famous face to prove his life was going somewhere. I pin up faces nobody knows to prove mine has not stopped."},
            {"id": "p-14", "title": "Portrait in suspension days 6", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-14.jpg", "writing": "In Bangladeshi towns, people read your face before they ask your name. Whose son, which family, and, more, which religion. I was a Hindu boy in a country where most people are not, and for that privilege I learned early that a face can be a document. You carry it everywhere.\n\nBut that was probably my first lesson in being looked at: there is a correct way to read a face, and someone else already fixed it.\n\nI was determined to capture my faces in these suspension days. Everything was still unsure. Except for painting, I have mostly done nothing in these days."},
            {"id": "p-15", "title": "Portrait in suspension days 7", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-15.jpg", "writing": "In Bangladeshi towns, people read your face before they ask your name. Whose son, which family, and, more, which religion. I was a Hindu boy in a country where most people are not, and for that privilege I learned early that a face can be a document. You carry it everywhere.\n\nBut that was probably my first lesson in being looked at: there is a correct way to read a face, and someone else already fixed it.\n\nI was determined to capture my faces in these suspension days. Everything was still unsure. Except for painting, I have mostly done nothing in these days."},
            {"id": "p-16", "title": "Portrait in suspension days 8", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-16.jpg", "writing": "Khowai was my best friend in my high school years. I used to sit and spend hours writing structureless poems near Khowai. I could see my face in its water. In water, nobody’s face holds still. It breaks and comes back and breaks again. Maybe that is where I first saw a face that could not be filed, not because it was hidden, but because it would not stay one thing long enough.\n\nToledo is made of right angles. Khowai never kept a straight line in its life. It flooded when it wanted, changed its banks, carried silt from one to the next.\n\nIn the water of Khowai, I look at my face, the face looked back, and I was caught in it.\n\nThe category read me by one column. My faces are my answer to them."},
            {"id": "p-17", "title": "Portrait in suspension days 9", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-17.jpg", "writing": "Khowai was my best friend in my high school years. I used to sit and spend hours writing structureless poems near Khowai. I could see my face in its water. In water, nobody’s face holds still. It breaks and comes back and breaks again. Maybe that is where I first saw a face that could not be filed, not because it was hidden, but because it would not stay one thing long enough.\n\nToledo is made of right angles. Khowai never kept a straight line in its life. It flooded when it wanted, changed its banks, carried silt from one to the next.\n\nIn the water of Khowai, I look at my face, the face looked back, and I was caught in it.\n\nThe category read me by one column. My faces are my answer to them."},
            {"id": "p-18", "title": "Self Portrait", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-18.jpg", "writing": "I am tired of having my entire human complexity crushed."},
            {"id": "p-19", "title": "Synthesis under Suspension", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-19.jpg", "writing": "Painting is a material practice. The materiality is not decoration.\n\nIt is the argument at a moment in which images can be produced without a body. The painter’s existence, and what they leave on the surface, becomes the argument that the image is from somewhere and someone with a cost. And now the goal of artificial intelligence has turned images into a product that completely just seeks perfection, not caring about the environment behind it. A painter pulls a brush across a surface and the surface pulls back, and what is on the surface afterward is a record of the negotiation between the painter’s hand and what it was working against. When I scratch a charcoal mark into a wet acrylic ground, the acrylic is going to absorb some of it and reject some of it. There will be a margin of dispersion that I cannot control. It is not a mark that could exist in any other way, and it is the negotiation that gets recorded. Painting is dirty. Charcoal stays in the beds of my fingernails for days. Spray paint gets into my hair, the tape squeaks when I pull it, and the room smells of it long after. A SEVIS record is terminated without any of this. No smell, no stain, no paper. One click in an office I will never see, and a body has to leave a country. The painting leaves a mark everywhere it touches. The system can erase a life and not leave a mark at all.\n\nPainters across history have painted with what they could afford. The work was made of what was around them, and what was around them became, in time, the signature of the practice. The poverty of the material became the position."},
            {"id": "p-20", "title": "Synthesis under suspension 2", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-20.jpg", "writing": "People can argue a painter might not be supposed to write like this in a first book, or in a memoir, I am writing it anyway, for two reasons. The first is that the conditions under which the paintings were made are not allowing me to wait. The second is that the moment in which paintings are being asked to think about their position in relation to machine image production will not wait either, and I show my admiration for all the writers and the painters who are actively working on this. In society, we tend to nod along, whatever happens, but sometimes nodding along just takes you with the wave. Then you have to push against it.\n\nAll the paintings I am sharing in this book were made under the specific condition of suspension days as an alien. When life behaves like a roller coaster that makes you run at the speed of wind but tied, the only thing we are tied to is the fear and the risk."},
            {"id": "p-21", "title": "Synthesis under Suspension 3", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-21.jpg", "writing": "Most of the writing I have read on paintings somehow begins with the image. The image is already depicted, right? Or implied, maybe. Done. We are trained to talk about painting in terms of meaning. The girl in the painting represents loneliness, the red field stands for rage, somewhat like this. Look at a famous painting in any book and it is already explained before you have even seen the paint. This is grief, this is the war, this is the mother.\n\nI can’t go along with these books so much, because for me painting always begins with the surface, a real thing. Paper, canvas, wood, whatever it is, it has weight. It has tooth, the texture painters have always used to make the pigment hold.\n\nA painting has reflectance.\n\nI always love the smell when I paint freshly. The pigment is a real thing. Charcoal is burned ash. I spray painted at the top left corner of this painting and I breathed in the smell of the paint. It is addictive. Oil, acrylic, whatever it is, all of these are organic or mineral matter that someone prepared into the form in which I just buy it.\n\nThis book was not lived in a straight line, so it does not walk in one. But I was trying to get to one point: I love my materials. They are the main life I see in a painting."},
            {"id": "p-22", "title": "Synthesis in the pick", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-22.jpg", "writing": "After the appeal, I kept thinking about that word, strong. The letter I wrote was four pages of strength. Clean arithmetic. A plan. Proof that I could carry everything. Nobody asks if you are tired when you are writing to a system. You are only allowed to be strong.\n\nI cannot count how many times I have listened to that song, Hold On, Magnolia. I tried to say something: hold on, I don’t have to be that strong all the time. But things always forced me to be strong. My heroes were Superman, Batman and Iron Man on TV. They were strong. Why should I not be? Is being strong a minimum requirement to breathe on this earth? There can be arguments.\n\nMy coworker Alitha asked me for a reddish orange painting for her bedroom. I did not have that colour exactly, but I wanted to paint something with it in mind, though my intention was never really her bedroom. She is a nice lady. This can’t be just her kind of painting. Some people’s paintings are different, made to catch attention in a way this one probably won’t. I also don’t know how to price my paintings if someone asks me nowadays. I have never sold one. All the money I earned from art came from drawing portraits and caricatures of people, and sometimes a specific ad on a wall. I don’t want to draw those anymore. In a way, they helped me earn money, but that relationship is over.\n\nThe appeal asked what I was worth in one number. Alitha asked what my painting was worth, and I had no number to give her. Maybe that is the same question, asked by two different rooms."},
            {"id": "p-23", "title": "Breaking out", "year": "2026", "concept": "", "medium": "Tempera, acrylic and charcoal", "dimensions": "", "media": "/artworks/paintings/p-23.jpg", "writing": "Some people might have multiple personality disorder, but almost everyone, in some way, has multiple personalities that are never called a disorder. Don't we all have a different personality in the eyes of each person around us? Do we even try to break it?\n\nThere is a song by David Gilmour. There's no way out of here. I wonder if he is talking about a great depression that is coming, one there is no way to stop. Insults, beatings and punishments were direct before. Now they are not visible. They are debt, loans, fines and insurance. This depression of winter might come over all of us. All I can do, maybe, is push against the flow.\n\nThis painting is me trying to push against the laws."},
            {"id": "p-24", "title": "Destructive Sapien", "year": "2026", "concept": "", "medium": "Mixed media on paper (five days before my SEVIS record was terminated)", "dimensions": "", "media": "/artworks/paintings/p-24.jpg", "writing": "We named ourselves Homo sapiens. The wise human. We are the only animal that gave itself a compliment and then built universities to prove it. And the wise human is learned to do killing in the morning and then choose the best photograph of it by evening. Gaza, Ukraine, the Congo, every corner of the earth, and then the scroll, the like, the share. The bomb has been going off since before Hiroshima. The choosing afterwards is a new dopamine on top of that.\n\nI ran for this dopamine too. I posted my paintings and then sat checking the numbers under them. Insights. Likes. Reach. I measured my own night's work by a counter, and I let the counter tell me whether the painting was good. I was already living inside a score long before the university gave me one.\n\nSo let me step back, into the fourth dimension, where I can see the whole room at once, and look at the appeal the way it actually works. It sent me an email and told me that my appeal had been considered and that the category did not permit an answer. Nobody was cruel to me. There was a time when cruelty needed a face. Now it’s a category, and it needs only a number and a polite sentence. Instead of wearing a uniform, it wears a signature block.\n\nThe same loop runs inside artificial intelligence. A model makes an image. A human picks the one that looks most like what they already believe. The picked image then gets wings, travels, gets liked and gets fed back in. Each turn the world gets narrower, and nobody actually narrowed it. Each of us chose only once."},
            {"id": "p-25", "title": "Breathing", "year": "2026", "concept": "", "medium": "Mixed media on paper", "dimensions": "", "media": "/artworks/paintings/p-25.jpg", "writing": "I have stood on that shore. I know the sound of the boats leaving. I also know that when I called, someone came. There are no miracles, but miracle-like things sometimes come to us in an unnatural way. Four days before my SEVIS record would have been terminated, an email came from an advisor I had never met. Davonte had read my appeal. Give me a call, he wrote, I might have a reinstatement path for you. I called. I was readmitted. Another door of the same university opened for me: Exploratory Studies, a place for students who are between things, between majors, between standings. Between one ground and another is what I had painted for years before I lived in it.\n\nAn advisor sat with me and built my fall schedule, class by class, as if it were the most normal thing in the world. For the advisor it was. For me it was the first time in weeks that a system had added me instead of subtracting me.\n\nMy father always bought me something with a promise that I had to be first in class. The happy ending always comes with conditions. The readmission came with check-ins, a program called Rocket Recharge. Grades that are watched more closely than before. I was only a row that is allowed to stay.\n\nBut this painting is called Breathing for a reason. For a few months every breath had felt borrowed. But sometimes after a sudden fall, I always went to my roof and lay down under the sky to feel the air. This air came back.\n\nI do not have a roof in here. You can survive a system and still not believe in it. You can walk back through its door and keep your own key."},
        ],
    },
    {
        ...pick("freedom-under"),
        id: "collages",
        title: "Collages",
        statement: "",
        artworks: pick("freedom-under").artworks.map((a, i, all) => ({ ...a, concept: "", writing: collageParts(i, all.length) })),
    },
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
        title: "Aesthetics Is Not a Mirror",
        year: "2026",
        institution: "University of Toledo",
        abstract: "An end-to-end audit of Stable Diffusion v1.5 outputs against the LAION-Aesthetics V2 curation step: what an aesthetic filter keeps, and what a model trained on it learns to see.",
        technicalDetails: "Across 15 occupations and 3,000 Stable Diffusion v1.5 generations, the gender composition of the curated data predicts the model's outputs (r = 0.873). 200,000-trial Monte Carlo joint null test, FairFace cross-classifier replication, pre-registered held-out falsification. First-author poster, Midwest Graduate Symposium 2026.",
    },
    {
        id: "dp-4dgs",
        title: "DP-4DGS: Dynamic Priors for 4D Gaussian Splatting",
        year: "2026",
        institution: "University of Toledo",
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
