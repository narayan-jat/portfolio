/** Resume-aligned copy (PDF + your positioning). Update dates if your situation changes. */

export const LINKS = {
  resume:
    "https://drive.google.com/file/d/1DUo84YcsAaEgR0_7AQfBWgQwc322MMGh/view",
  linkedin: "https://www.linkedin.com/in/narayan-jat-23935a255/",
  github: "https://github.com/narayan-jat",
  credly: "https://www.credly.com/users/narayan-jat",
  leetcode: "https://leetcode.com/u/YGaufh2hy5/",
  hackerrank: "https://www.hackerrank.com/profile/narayanjat2964",
  medium: "https://medium.com/@nj223948",
};

export const PROFILE = {
  name: "Narayan Jat",
  credlyUsername: "narayan-jat",
  headline: "Full Stack Developer · SaaS, MVPs & production systems",
  location: "Indore, Madhya Pradesh, India",
  githubUsername: "narayan-jat",
  /** One tight line under the hero name */
  tagline:
    "I take ideas to production: clean architecture, fast delivery, and documentation your team can maintain. Often brought in for MVP launches, rebuilds, and “this is breaking in production” moments.",
  /** Three columns in About — resume + your positioning */
  summary: [
    "Full stack developer focused on SaaS and MVP builds. Comfortable owning the path from founder specs to a technical plan with clear trade-offs, so you do not pay for rushed decisions later with rewrites.",
    "Stack I ship with most often: React, TypeScript, Tailwind CSS, and MUI on the front; Node.js and Express on the back; PostgreSQL, MySQL, MongoDB, and Supabase for data; Git, GCP, and solid production workflows. Happy to ramp on adjacent stacks quickly.",
    "Current role: Full Stack Developer at Beans.ai (Jan 2025–present). Earlier: freelance full stack for GoDex (multi-tenant deal platform on Supabase), front-end intern at Mathisys (PurpleSigma + Django APIs), Python intern at Chalo (performance on image pipelines).",
  ],
};

/** Right-column card in the hero, mirroring the reference site's Quick Facts pattern. */
export const QUICK_FACTS = {
  techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "GCP"],
  focusAreas: "Production SaaS, MVP builds, AI integrated into real workflows",
};

/** Condensed teaser tiles under the hero CTAs — full versions live in GUIDING_PRINCIPLES below. */
export const HERO_PRINCIPLES = [
  {
    title: "Production-first",
    body: "Measured by users and uptime, not demo completeness.",
    tint: "purple",
  },
  {
    title: "Trade-offs upfront",
    body: "Decisions on the table before code, so nobody pays for a rewrite.",
    tint: "green",
  },
  {
    title: "Root cause, not patches",
    body: "Most of my work is the \"it's breaking\" call, not a fresh build.",
    tint: "gray",
  },
];

export const EDUCATION = [
  {
    school: "Sitare University",
    detail: "B.Tech Computer Science — 8.76/10 (Dean’s List)",
    period: "Sep 2022 – May 2026",
    location: "Indore, Madhya Pradesh, India",
  },
  {
    school: "Jawahar Navodaya Vidyalaya",
    detail: "Senior Secondary Education (PCM) — 94%",
    period: "Apr 2020 – May 2022",
    location: "Bagalur, Karnataka, India",
  },
];

/**
 * Shown on Projects — no GitHub API (avoids unauthenticated rate limits).
 * Each entry: short multi-line blurb + techStack chips (aligned with repo READMEs).
 */
export const FEATURED_REPOS = [
  {
    id: "featured-deal-management-platform",
    name: "Deal management platform",
    featured: true,
    descriptionLines: [
      "Deal intelligence for private lenders: a Kanban-style pipeline with Supabase row-level security, Matrix-based in-app messaging, and audited file handling.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "Supabase",
      "PostgreSQL",
      "Matrix",
      "Vercel",
    ],
    html_url: "https://github.com/narayan-jat/deal-management-platform",
  },
  {
    id: "featured-coding-contest-platform",
    name: "Coding contest platform",
    featured: true,
    descriptionLines: [
      "Full-stack contest platform for student clubs: host dashboards, Firebase auth, and a Django/DRF API documented with OpenAPI/Swagger.",
    ],
    techStack: [
      "React",
      "Vite",
      "Django",
      "DRF",
      "Firebase",
      "PostgreSQL",
      "SQLite",
      "Axios",
      "Swagger",
    ],
    html_url: "https://github.com/narayan-jat/coding-contest-platform",
  },
  {
    id: "featured-expense-manager",
    name: "expense-manager",
    descriptionLines: [
      "Finlogger is a personal expense tracker: pick a month, see spending against a configured income, and manage line items with clear feedback.",
      "Category breakdown shows each category’s share of that month’s spending; tables support add, edit, and delete with toast notifications on success or failure.",
      "The React SPA talks to a dedicated Express API; persistence lives in MongoDB via Mongoose models rather than static JSON.",
      "A simple user stub ties requests to a user id today, leaving room to swap in real authentication later.",
    ],
    techStack: [
      "React",
      "Express",
      "MongoDB",
      "Mongoose",
      "React Bootstrap",
      "Bootstrap",
      "REST",
    ],
    html_url: "https://github.com/narayan-jat/expense-manager",
  },
  {
    id: "featured-portfolio",
    name: "portfolio",
    descriptionLines: [
      "Personal portfolio site that presents my profile, experience, education, skills, certifications, and featured projects in one place.",
      "Layout uses responsive sections with a hero, about copy, timeline-style experience, and project cards that link out to GitHub.",
      "Built as a single-page React app with client-side routing so navigation stays fast without a separate page reload.",
      "Content is centralized in data modules so copy and project listings are easy to update without touching layout code.",
    ],
    techStack: [
      "React",
      "React Router",
      "Bootstrap",
      "React Bootstrap",
      "Font Awesome",
      "Create React App",
    ],
    html_url: "https://github.com/narayan-jat/portfolio",
  },
  {
    id: "featured-book-management",
    name: "book-management",
    descriptionLines: [
      "Book exchange platform for students and readers to list, search, and swap books with messaging to arrange handoffs.",
      "Users manage profiles, listed books, and exchange history; books carry title, author, genre, condition, and availability status.",
      "A Node backend exposes RESTful CRUD for books, profiles, and messages; MongoDB holds the document-shaped data.",
      "Bootstrap provides consistent styling across listing and messaging views, with a path sketched for reviews and notifications later.",
    ],
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Bootstrap",
      "REST",
    ],
    html_url: "https://github.com/narayan-jat/book-management",
  },
  {
    id: "featured-slide-generator-api",
    name: "slide-generator-api",
    featured: true,
    descriptionLines: [
      "API-first service that generates PowerPoint decks from a topic using Gemini, with JWT auth and SQLAlchemy/Alembic-modeled persistence.",
    ],
    techStack: [
      "FastAPI",
      "Uvicorn",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Pydantic",
      "Gemini API",
      "python-pptx",
      "JWT",
    ],
    html_url: "https://github.com/narayan-jat/slide-generator-api",
  },
];

/**
 * Production SaaS products engineered and shipped end-to-end for a private
 * client. No repo links (private codebases) — the live product is the proof.
 */
export const SHIPPED_PRODUCTS = [
  {
    id: "shipped-indexpine",
    name: "IndexPine",
    tag: "AI · SEO",
    problem:
      "Businesses struggled to scale organic traffic without expensive content teams.",
    description:
      "Autonomous AI publishing platform: keyword discovery, content optimization, and automated publishing across WordPress, Webflow, and Notion.",
    techStack: [
      "Next.js",
      "Firebase",
      "Google Search Console API",
      "Multi-LLM orchestration",
    ],
    metric: "90% cut in manual content-ops cost",
    liveUrl: "https://indexpine.ferrowright.com",
  },
  {
    id: "shipped-title5flow",
    name: "Title5Flow",
    tag: "Field ops",
    problem:
      "Field inspectors lost hours to paper forms and app crashes at offline sites.",
    description:
      "Offline-first inspection platform with autosave, voice dictation, GPS-tagged photos, and automated PDF report generation.",
    techStack: ["Kotlin", "Jetpack Compose", "Room DB", "Python"],
    metric: "Report time: 2.5 hrs → 15 min",
    liveUrl: "https://title5flow.ferrowright.com",
  },
  {
    id: "shipped-shiftguard",
    name: "ShiftGuard",
    tag: "Safety monitoring",
    problem:
      "Outdoor crews faced heat and air-quality risk with no real-time monitoring.",
    description:
      "Cloud-scheduled safety platform polling EPA/weather APIs, pushing crew alerts, and generating compliance ledgers automatically.",
    techStack: ["Next.js", "Firebase App Hosting", "Cloud Functions", "Resend"],
    metric: "24/7 monitoring, zero-lag alerts",
    liveUrl: "https://shiftguard.ferrowright.com",
  },
  {
    id: "shipped-roleplayer",
    name: "RolePlayer",
    tag: "Voice AI",
    problem:
      "People lacked a realistic, low-stakes way to practice hard conversations.",
    description:
      "Interactive voice AI platform for conversation practice, with persona scaling and performance analytics.",
    techStack: ["Next.js", "Multi-LLM orchestration", "Cartesia neural TTS"],
    metric: "Sub-second voice latency",
    liveUrl: "https://roleplayer.vidsifier.com",
  },
  {
    id: "shipped-seatsprint",
    name: "Seat Sprint Counselling",
    tag: "EdTech · Payments",
    problem:
      "Admission counselling ran on unsecured Google Forms and manual UPI screenshots.",
    description:
      "Booking platform integrating Razorpay for verified seat payments, with automated counselor notifications.",
    techStack: ["Next.js", "Firebase Hosting", "Cloud Functions", "Razorpay"],
    metric: "100+ paid signups processed",
    liveUrl: "https://seatsprint.ferrowright.com",
  },
];

export const WHAT_I_DO = [
  {
    title: "Build",
    body: "Full builds from spec to production — GoDex's multi-tenant Kanban deal platform, five live SaaS products shipped for a private client, a coding-contest platform for student communities.",
  },
  {
    title: "Fix & scale what's already live",
    body: "Most of my work has been the \"this is breaking in production\" call, not a greenfield start — Beans.ai frontend perf work (~40% faster load), Chalo's image pipeline (~85% faster), Title5Flow's report generation (2.5 hrs to 15 min).",
  },
  {
    title: "Integrate AI where it removes real work",
    body: "Measured outcomes, not AI for its own sake — Beans.ai's in-chat AI responder cut support load by ~75%, IndexPine runs an autonomous publishing pipeline, RolePlayer handles sub-second voice AI.",
  },
];

export const GUIDING_PRINCIPLES = [
  "Ship production, not demos — measured by users and uptime, not feature-complete in a sandbox.",
  "Put the trade-offs on the table before writing code, so nobody pays for a rushed decision with a rewrite later.",
  "Fix the root cause. Most of my work has been the production fire, not the greenfield build.",
  "Document like someone else has to maintain it next month — because they usually do.",
  "Reach for AI when it removes real work with a measurable result, not by default.",
  "Moving fast doesn't mean skipping access control, audit trails, or the boring security work.",
];

export const EXPERIENCE = [
  {
    org: "Beans.ai",
    role: "Full Stack Developer",
    location: "Noida, India",
    period: "Jan 2025 – present",
    points: [
      "Improved frontend performance (Dispatch Console) with lazy loading, cutting initial load time by about 40%.",
      "Built a real-time chat system (channels, DMs, read receipts) using enhanced polling for better responsiveness and scale.",
      "Integrated an AI agent as an in-chat auto-responder, reducing customer-support workload by about 75%.",
    ],
  },
  {
    org: "GoDex",
    role: "Full Stack Developer (Freelance)",
    location: "Remote",
    period: "Oct 2024 – Jan 2025",
    points: [
      "Delivered a multi-tenant Kanban deal collaboration platform on Supabase (PostgreSQL, RLS, JWT), replacing long email chains with centralized dashboards across organizations.",
      "Implemented matrix-based messaging and deal-attached chat with invite links and role-based access.",
      "Designed secure file handling with signed URLs and audit logs, supporting 100+ deals and documents with traceability.",
    ],
  },
  {
    org: "Mathisys",
    role: "Front End Developer Intern",
    location: "Gurugram, India",
    period: "May 2024 – Aug 2024",
    points: [
      "Co-developed the PurpleSigma website with SEO work that reached #1 Google ranking for relevant queries.",
      "Built RESTful APIs with Django to support backend needs for 45+ stakeholders.",
    ],
  },
  {
    org: "Chalo",
    role: "Python Developer Intern",
    location: "Bengaluru, India",
    period: "May 2023 – Aug 2023",
    points: [
      "Optimized image preprocessing with Python multiprocessing, reducing execution time by about 85%.",
    ],
  },
];

export const HIGHLIGHTS = [
  {
    title: "Scholarships",
    body: "100% B.Tech Computer Science scholarship from Sitare Foundation (Oct 2022 – May 2026). Reliance Foundation Undergraduate Scholar (Dec 2022 – May 2026).",
  },
  {
    title: "Leadership & community",
    body: "Webmaster, ACM Student Chapter, Sitare University (Sep 2023 – Sep 2024).",
  },
  {
    title: "Academic",
    body: "Perfect score in Mathematics (10th) and Computer Science (12th). Relevant coursework includes advanced DSA, information retrieval, AI/ML/DL, DBMS, and web applications.",
  },
];
