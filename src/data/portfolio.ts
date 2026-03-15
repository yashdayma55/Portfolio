export interface NavLink {
  label: string;
  href: string;
}

export interface HeroData {
  availability: string;
  name: string;
  roles: string[];
  description: string[];
  stats: { label: string }[];
}

export interface SkillCategory {
  name: string;
  skills: { name: string; emoji?: string }[];
}

export interface Project {
  title: string;
  category: string;
  categoryColor: string;
  chipStyle: string; // e.g. "violet" | "indigo" | "rose" | "emerald" | "cyan" | "amber" | "orange"
  impact: string;
  highlights: string[];
  technologies: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

export interface Publication {
  title: string;
  type: string;
  description: string;
  status: string;
  venue?: string;
}

export interface Experience {
  title: string;
  company: string;
  location?: string;
  startYear: string;
  endYear: string;
  bullets: string[];
  techTags: string[];
}

export interface Achievement {
  title: string;
  subtitle: string;
  iconGradient: string;
}

export interface ContactLink {
  platform: string;
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const heroData: HeroData = {
  availability: "Available for internships and full-time opportunities",
  name: "Yash Dayma",
  roles: [
    "Software Engineer",
    "Backend Developer",
    "AI Systems Builder",
    "API Architect",
    "IoT & Cloud Enthusiast",
  ],
  description: [
    "Computer Science graduate student at George Mason University, focused on backend systems, AI-powered applications, full-stack development, cloud systems, and real-world engineering solutions.",
    "I build AI platforms, IoT monitoring systems, and production-grade software projects that combine intelligence, scalability, and automation.",
  ],
  stats: [
    { label: "Master's Student @ GMU" },
    { label: "AI + Backend + IoT Projects" },
    { label: "Research + Publications" },
    { label: "Open to SWE / Backend / AI roles" },
  ],
};

export const aboutData = {
  paragraphs: [
    "I am a Master's student in Computer Science at George Mason University with a focus on backend engineering, AI-powered systems, DevOps automation, and wireless/embedded technologies. My work centers on designing and building scalable backend architectures that integrate machine learning, intelligent data processing, and cloud-native deployment pipelines.",
    "I have experience developing AI-driven applications using large language models and NLP pipelines, building robust backend APIs and distributed systems, and deploying production-ready platforms using Docker, CI/CD pipelines, and cloud infrastructure. Additionally, I have worked on wireless sensor networks and embedded systems, creating real-world IoT solutions that bridge hardware and software.",
  ],
};

export const experiences: Experience[] = [
  {
    title: "Project Intern",
    company: "Cognifront Software Pvt. Ltd.",
    location: "Nagpur, India",
    startYear: "2022",
    endYear: "2023",
    bullets: [
      "Architected an IoT-based factory monitoring system for CEAT Tires enabling real-time environmental monitoring across industrial units",
      "Integrated ESP32 sensor nodes, TTGO SIM modules, and Raspberry Pi server for scalable data ingestion using ESP-NOW and HTTP protocols",
      "Built interactive dashboards using HTML, CSS, JavaScript, PHP, and Chart.js for real-time analytics and historical insights",
      "Implemented anomaly detection using Z-Score and Isolation Forest, enabling automated alerts and proactive issue detection",
    ],
    techTags: ["ESP32", "Raspberry Pi", "Python", "PHP", "Chart.js", "IoT", "Scikit-learn"],
  },
  {
    title: "Software Engineering Intern",
    company: "ESDS Software Solutions Pvt. Ltd.",
    location: "Nashik, India",
    startYear: "2022",
    endYear: "2022",
    bullets: [
      "Developed Python backend services and SDKs to automate AWS EC2 VM provisioning and lifecycle management",
      "Built REST APIs with token-based authentication integrated into Jenkins CI/CD pipelines",
      "Implemented automated logging and monitoring pipelines for VM lifecycle events",
      "Conducted performance benchmarking and validation workflows improving infrastructure management efficiency",
    ],
    techTags: ["Python", "AWS", "Jenkins", "REST APIs", "Linux"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Python", emoji: "🐍" },
      { name: "Java", emoji: "☕" },
      { name: "JavaScript", emoji: "📜" },
      { name: "TypeScript", emoji: "📘" },
    ],
  },
  {
    name: "Backend & APIs",
    skills: [
      { name: "Node.js", emoji: "🟢" },
      { name: "Spring Boot", emoji: "🍃" },
      { name: "REST APIs", emoji: "🔌" },
      { name: "FastAPI", emoji: "⚡" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", emoji: "🐘" },
      { name: "MySQL", emoji: "🐬" },
      { name: "Redis", emoji: "🔴" },
      { name: "Supabase", emoji: "🟢" },
    ],
  },
  {
    name: "Cloud / DevOps",
    skills: [
      { name: "AWS", emoji: "☁️" },
      { name: "Docker", emoji: "🐳" },
      { name: "Git / GitHub", emoji: "📂" },
      { name: "Jenkins", emoji: "🔧" },
    ],
  },
  {
    name: "AI / ML",
    skills: [
      { name: "Machine Learning", emoji: "🧠" },
      { name: "TensorFlow", emoji: "🔬" },
      { name: "LangGraph", emoji: "🕸️" },
      { name: "NLP Pipelines", emoji: "💬" },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Next.js", emoji: "▲" },
      { name: "Tailwind CSS", emoji: "🎨" },
      { name: "IoT / Embedded", emoji: "📡" },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "MedLedger AI",
    category: "AI / Healthcare Platform",
    categoryColor: "bg-violet-500/15 text-violet-700 border-violet-200/50",
    chipStyle: "violet",
    impact:
      "AI-powered healthcare platform that transforms medical PDFs into structured clinical records and enables intelligent patient history analysis through LLM-driven summaries.",
    highlights: [
      "AI medical document extraction pipeline using OpenAI / Gemini",
      "FHIR-inspired JSONB healthcare data model for flexible records",
      "Role-based ecosystem for Patients, Providers, and Admins",
      "Interactive patient timeline with AI summary chatbot",
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind", "Vercel"],
    github: "https://github.com/yashdayma55/medledger-ai",
    live: "https://medledger-ai-c2z1.vercel.app/",
    featured: true,
  },
  {
    title: "DealHunter",
    category: "Full-Stack System",
    categoryColor: "bg-indigo-500/15 text-indigo-700 border-indigo-200/50",
    chipStyle: "indigo",
    impact:
      "Real-time deal intelligence platform that automatically scrapes and aggregates mobile app deals from Reddit and Telegram using custom filtering pipelines and a scalable full-stack architecture.",
    highlights: [
      "Automated deal scraping pipelines",
      "Intelligent spam filtering heuristics",
      "Real-time deal aggregation system",
      "Chrome extension integration",
    ],
    technologies: ["Next.js", "Node.js", "TypeScript", "Supabase", "PostgreSQL", "TailwindCSS", "Vercel"],
    github: "https://github.com/yashdayma55/DealHunter",
    live: "https://deals-frontend-brown.vercel.app/",
  },
  {
    title: "GMU SmartPatriot",
    category: "LLM / RAG System",
    categoryColor: "bg-rose-500/15 text-rose-700 border-rose-200/50",
    chipStyle: "rose",
    impact:
      "University knowledge engine using LLM grounding and RAG for intelligent Q&A over institutional knowledge at George Mason University.",
    highlights: [
      "RAG pipeline for retrieval-augmented generation over docs",
      "Vector database integration for semantic search",
      "LLM-powered Q&A with source citations",
      "Built for GMU institutional knowledge base",
    ],
    technologies: ["TypeScript", "RAG", "LLMs", "Vector DB"],
    github: "https://github.com/yashdayma55/gmu-smartpatriot",
    live: undefined,
  },
  {
    title: "IoT Factory Monitor",
    category: "Industry Deployment · CEAT Tires",
    categoryColor: "bg-emerald-500/15 text-emerald-700 border-emerald-200/50",
    chipStyle: "emerald",
    impact:
      "Production-grade IoT factory monitoring system deployed at CEAT Tires, Nagpur—enabling real-time environmental monitoring, anomaly detection, and proactive maintenance across industrial units. Built during Cognifront internship.",
    highlights: [
      "Deployed in live industrial environment at CEAT Tires manufacturing plant, Nagpur",
      "Multi-hop ESP-NOW wireless sensor network: ESP32 nodes, TTGO SIM modules, Raspberry Pi embedded server",
      "Full-stack monitoring dashboard (HTML, CSS, JS, PHP, Chart.js) for real-time analytics and historical insights",
      "Python ingestion pipelines with 30% data processing latency reduction; near real-time analytics",
      "ML-based anomaly detection: Z-score analysis and Isolation Forest (Scikit-learn) for abnormal temperature patterns",
      "Automated alerting: dashboard warnings and GSM SMS notifications for proactive maintenance",
      "Structured logging, validation, retry mechanisms for fault tolerance; trained factory staff on usage",
    ],
    technologies: ["Python", "ESP32", "Raspberry Pi", "PHP", "MySQL", "Chart.js", "Scikit-learn", "ESP-NOW", "Ubuntu"],
    github: "https://github.com/yashdayma55/iot-enterprise-factory-monitor",
    live: undefined,
    featured: true,
  },
  {
    title: "DebateMind",
    category: "AI Multi-Agent System",
    categoryColor: "bg-amber-500/15 text-amber-700 border-amber-200/50",
    chipStyle: "amber",
    impact:
      "Multi-agent AI debate system where Pro and Con agents argue in real time, with an AI Judge delivering structured evaluations. Orchestrates four specialized agents—Moderator, Pro, Con, and Judge—for formal debates on any topic with configurable rounds and multimodal context.",
    highlights: [
      "Four specialized AI agents (Moderator, Pro, Con, Judge) with LangGraph orchestration",
      "Parallel execution for Pro+Con openings and rebuttals (~30–40% faster)",
      "Real-time streaming UI with cyber-tactical dark theme and Debate History",
      "Multimodal context: image and PDF/document upload for debate grounding",
      "Unbiased judge evaluation with anti-bias rules and configurable panel (1–3 judges)",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "FastAPI", "LangGraph", "OpenAI", "Ollama", "PyPDF"],
    github: "https://github.com/yashdayma55/DebateMind",
    live: "https://debate-mind.vercel.app/",
  },
  {
    title: "CyberShield AI",
    category: "AI / Security Platform",
    categoryColor: "bg-rose-500/15 text-rose-700 border-rose-200/50",
    chipStyle: "rose",
    impact:
      "Security intelligence platform combining AI-powered chat for threats and best practices, a Chrome extension for live browsing protection with real-time alerts, a multi-agent file analysis pipeline, and Fetch.ai uAgents integration for decentralized workflows.",
    highlights: [
      "AI security chat: threat analysis, incident response, best-practice Q&A via REST API and web UI",
      "Chrome extension: live URL/link/form monitoring; blocks HTTP, IP-based URLs, typosquatting, impersonation; intercepts login/payment submits",
      "File analysis pipeline: Ingestor → Summarizer → Prioritizer → Formatter; outputs Markdown reports",
      "REST API (FastAPI): /chat, /analyze, /extension/check, OpenAPI docs; supports OpenAI and ASI:One",
      "uAgents chat agent: Fetch.ai–compatible for Agentverse on port 8001",
      "Docker Compose and Render deployment; extension sends only URLs to local API for privacy",
    ],
    technologies: ["Python", "FastAPI", "OpenAI", "uAgents", "Chrome Extension", "Docker", "Render"],
    github: "https://github.com/yashdayma55/Cybershield-ai",
    live: undefined,
  },
  {
    title: "UniSurvey",
    category: "Full-Stack · DevOps",
    categoryColor: "bg-orange-500/15 text-orange-700 border-orange-200/50",
    chipStyle: "orange",
    impact:
      "Full-stack web application for prospective students to submit campus-visit feedback through an intelligent survey form. Includes admin CRUD, Docker/Kubernetes deployment on Rancher, and Jenkins CI/CD pipeline. Team project with Chaitanya Chaudhari and Ankit Raut.",
    highlights: [
      "Angular 2+ frontend with Student Survey and List All Surveys routes; acknowledgment page; Update/Delete per survey",
      "Spring Boot REST APIs with JPA/Hibernate; CRUD operations; Amazon RDS MySQL backend",
      "Personalized time-based greetings via cookies; smart form validation with consolidated alerts",
      "ZIP code autofill: AJAX + JSON backend for city/state; inline error messaging",
      "Dockerized deployment; Kubernetes (Rancher) with min 3 pods for high availability",
      "Jenkins CI/CD: automated build, test, Docker image, deploy to Kubernetes via Rancher",
    ],
    technologies: ["Angular", "Spring Boot", "MySQL", "Maven", "Docker", "Kubernetes", "Rancher", "Jenkins", "AWS RDS"],
    github: "https://github.com/yashdayma55/UniSurvey",
    live: undefined,
  },
  {
    title: "Li-Fi Communication System",
    category: "Embedded Systems",
    categoryColor: "bg-cyan-500/15 text-cyan-700 border-cyan-200/50",
    chipStyle: "cyan",
    impact:
      "Multi-modulation visible light communication system using LED and photodiode for short-range wireless data transmission with ACK-based reliability. Implements a complete physical + link layer stack with OOK, FSK, and PWM modulation on Arduino.",
    highlights: [
      "Three modulation schemes: OOK, FSK, and PWM with experimental BER comparison",
      "Link-layer protocol: frame sync, checksum validation, optical ACK, timeout-based retransmission",
      "Full layered pipeline: Application → Encoding → Physical → Optical Channel → Demodulation → Link",
      "Reliable transmission without analog amplifiers or hardware comparators",
      "OOK achieved lowest BER; comprehensive design report with oscilloscope analysis",
    ],
    technologies: ["Arduino", "C++", "OOK", "FSK", "PWM", "LED", "Photodiode", "Embedded"],
    github:
      "https://github.com/yashdayma55/Li-Fi-Communication-System-Using-LED-and-Photodiode",
    live: undefined,
  },
];

export const publications: Publication[] = [
  {
    title: "Predictive Analysis of Lung Cancer",
    type: "Conference Paper",
    description:
      "Research on predictive analytics and machine learning approaches for lung cancer detection and prognosis.",
    status: "Under Review",
    venue: undefined,
  },
  {
    title: "IoT Based Enterprise-Wide Factory Monitoring System",
    type: "Publication",
    description:
      "Production-grade IoT-based industrial monitoring with real-time analytics, anomaly detection, and multi-hop wireless sensor networks deployed in CEAT Tires project.",
    status: "Published",
    venue: "IJSRED (IC-RTETM-23)",
  },
];

export const achievements: Achievement[] = [
  {
    title: "CSI Nasik Project and Paper Presentation Competition",
    subtitle: "Top Finalist",
    iconGradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "Python Whiz Competition",
    subtitle: "Semi-Finalist",
    iconGradient: "from-amber-500 to-orange-600",
  },
  {
    title: "HackerRank",
    subtitle: "Golden Badge in Python",
    iconGradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Project Competition at MIMT Pune",
    subtitle: "Participant",
    iconGradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Idea Spark Competition",
    subtitle: "Organized by E-cell — Entrepreneurship pitch around voice assistant business model",
    iconGradient: "from-rose-500 to-pink-600",
  },
];

export const contactData = {
  heading: "Open to Opportunities",
  availability: "Available for internships and full-time software engineering roles",
  roles: "Backend · AI/ML · Full-Stack · Cloud & DevOps · Platform Engineering",
  cta: "Let's connect and build something meaningful.",
  links: [
    {
      platform: "GitHub",
      href: "https://github.com/yashdayma55",
      label: "github.com/yashdayma55",
    },
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com/in/yashdayma",
      label: "linkedin.com/in/yashdayma",
    },
    {
      platform: "Email",
      href: "mailto:yashdayma55@gmail.com",
      label: "yashdayma55@gmail.com",
    },
  ] as ContactLink[],
};

export const footerData = {
  name: "Yash Dayma",
  role: "Software Engineer · AI & Backend",
  copyright: `© ${new Date().getFullYear()} Yash Dayma. All rights reserved.`,
  builtWith: "Built with Next.js, TypeScript, and Tailwind CSS",
};

export const resumePath = "/resume.pdf";
