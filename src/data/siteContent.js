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
  subhead:
    "B.Tech Computer Science @ Sitare University (8.71/10, Dean’s List) · graduating May 2026",
  location: "Indore, Madhya Pradesh, India",
  githubUsername: "narayan-jat",
  /** Hero typewriter lines */
  roles: [
    "Full Stack Developer (2+ years)",
    "SaaS & MVP builder",
    "React · Express · PostgreSQL",
    "Product-minded engineer",
  ],
  /** One tight line under the typewriter */
  tagline:
    "I take ideas to production: clean architecture, fast delivery, and documentation your team can maintain. Often brought in for MVP launches, rebuilds, and “this is breaking in production” moments.",
  /** Three columns in About — resume + your positioning */
  summary: [
    "Full stack developer focused on SaaS and MVP builds. Comfortable owning the path from founder specs to a technical plan with clear trade-offs, so you do not pay for rushed decisions later with rewrites.",
    "Stack I ship with most often: React, TypeScript, Tailwind CSS, and MUI on the front; Node.js and Express on the back; PostgreSQL, MySQL, MongoDB, and Supabase for data; Git, GCP, and solid production workflows. Happy to ramp on adjacent stacks quickly.",
    "Current role: Full Stack Developer at Beans.ai (Jan 2025–present). Earlier: freelance full stack for GoDex (multi-tenant deal platform on Supabase), front-end intern at Mathisys (PurpleSigma + Django APIs), Python intern at Chalo (performance on image pipelines).",
  ],
};

export const EDUCATION = [
  {
    school: "Sitare University",
    detail: "B.Tech Computer Science — 8.71/10 (Dean’s List)",
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
    descriptionLines: [
      "Deal intelligence for private lenders: one workspace from first touch to close with structured deal data, documents, and collaboration.",
      "Kanban-style pipeline (New through Completed and Rejected), drag-and-drop, and access scoped to creators and invited members via Supabase row-level security.",
      "File uploads through Supabase Storage, activity logging, invites and shareable links, plus in-app messaging built on Matrix.",
      "SQL migrations, RLS and storage policies, and Edge Functions support production-style backend operations alongside a typed React client.",
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
    descriptionLines: [
      "Full-stack app for student clubs and communities to organize and join coding contests without relying on large third-party platforms.",
      "Hosts get dashboards to create and edit contests, attach problems and prizes, and manage banners via Firebase Storage; participants browse and register through REST APIs.",
      "Firebase handles authentication on the client while Django stores relational contest, registration, and profile data keyed by Firebase UID.",
      "OpenAPI/Swagger documents the API; the schema anticipates submissions, judging, and rankings for a future execution pipeline.",
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
    descriptionLines: [
      "API-first service that creates presentations from a topic and slide count, persists decks in PostgreSQL, and returns downloadable PowerPoint files.",
      "Users register and log in for JWT-protected routes; presentations, slides, and API usage are modeled with SQLAlchemy and migrated with Alembic.",
      "Google Gemini helps generate slide content configured in environment variables alongside the database URL.",
      "python-pptx assembles .pptx downloads so clients can integrate generation without running desktop Office.",
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

export const SKILL_GROUPS = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "Java", "TypeScript"],
  },
  {
    label: "Backend & APIs",
    items: ["Node.js", "Express.js", "RESTful APIs", "Django"],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "HTML",
      "CSS",
      "Vite",
      "Webpack",
      "Tailwind CSS",
      "Bootstrap",
      "MUI",
      "ShadCN",
    ],
  },
  {
    label: "Data & storage",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "MongoDB",
      "Supabase",
      "Firebase Storage",
      "Redis",
      "Sequelize",
      "Mongoose",
    ],
  },
  {
    label: "Tools & platforms",
    items: [
      "Git",
      "GitHub",
      "GCP",
      "AWS",
      "Vercel",
      "Linux",
      "shell scripting",
      "Prisma",
      "Drizzle",
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
