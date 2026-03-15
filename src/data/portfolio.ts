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
  chipStyle: string;
  filterCategory: "AI Systems" | "Security" | "ML" | "IoT" | "Full Stack" | "Embedded";
  impact: string;
  highlights: string[];
  technologies: string[];
  github: string;
  live?: string;
  video?: string;
  featured?: boolean;
  /** Pipeline steps for mini architecture diagram */
  architecture?: string[];
  /** Metric badges e.g. ["30% latency reduction", "LLM-powered"] */
  metrics?: string[];
  /** Optional image path in /public/projects/ */
  image?: string;
}

export interface Publication {
  title: string;
  type: string;
  description: string;
  status: string;
  venue?: string;
  link?: string;
  authors?: string;
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
    "I am a Master's student in Computer Science at George Mason University with a focus on backend engineering, AI-powered systems, DevOps automation, and wireless/embedded technologies. My work centers on designing and building scalable backend architectures that integrate machine learning, intelligent data processing, and cloud-native deployment pipelines.",
    "I have experience developing AI-driven applications using large language models and NLP pipelines, building robust backend APIs and distributed systems, and deploying production-ready platforms using Docker, CI/CD pipelines, and cloud infrastructure. Additionally, I have worked on wireless sensor networks and embedded systems, creating real-world IoT solutions that bridge hardware and software.",
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
    filterCategory: "AI Systems",
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
    architecture: ["PDF Upload", "LLM Extraction", "Structured JSON", "Patient Timeline", "AI Summary"],
    metrics: ["80% faster extraction", "LLM-powered", "Role-based platform"],
    image: "medledger.png",
  },
  {
    title: "Lung Cancer Prediction",
    category: "ML / Healthcare",
    categoryColor: "bg-indigo-500/15 text-indigo-700 border-indigo-200/50",
    chipStyle: "indigo",
    filterCategory: "ML",
    impact:
      "Predictive analysis of lung cancer risk using machine learning. Provides a clean pipeline for training, evaluating, and serving the model—with saved model artifacts, Tkinter GUI with validation, FastAPI web API, and a simple web UI.",
    highlights: [
      "Training and evaluation scripts; persisted model artifact (no retraining on every run)",
      "FastAPI REST API with POST /predict for risk inference from demographics and symptoms",
      "Tkinter desktop GUI with input validation; simple web UI for browser-based predictions",
      "Structured outputs: metrics.json, ROC curve plots; reproducible pipeline (data → models → reports)",
    ],
    technologies: ["Python", "Scikit-learn", "FastAPI", "Tkinter", "Uvicorn"],
    github: "https://github.com/yashdayma55/lung-cancer-prediction",
    live: undefined,
    architecture: ["Input Data", "Feature Eng", "Model Inference", "Risk Report"],
    metrics: ["REST API", "Tkinter GUI", "ROC metrics"],
  },
  {
    title: "DealHunter",
    category: "Full-Stack System",
    categoryColor: "bg-indigo-500/15 text-indigo-700 border-indigo-200/50",
    chipStyle: "indigo",
    filterCategory: "Full Stack",
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
    architecture: ["Reddit/Telegram", "Scraping Pipeline", "Filter Engine", "Chrome Extension"],
    metrics: ["Real-time deals", "Spam filtering", "Extension"],
  },
  {
    title: "GMU SmartPatriot",
    category: "LLM / RAG System",
    categoryColor: "bg-rose-500/15 text-rose-700 border-rose-200/50",
    chipStyle: "rose",
    filterCategory: "AI Systems",
    impact:
      "Patriot is a prototype GMU virtual assistant that answers questions about George Mason University using live web pages when possible. It summarizes catalog, department, and registrar info—ideal for programs, courses, deadlines, and offices. Built with LLM grounding and RAG; not an official GMU tool.",
    highlights: [
      "RAG pipeline for retrieval-augmented generation over institutional docs",
      "Vector database integration for semantic search over GMU knowledge base",
      "LLM-powered Q&A with source citations; uses live GMU web pages when available",
      "Answers programs, courses, deadlines, offices; prompts users to confirm with official GMU offices",
    ],
    technologies: ["Next.js", "TypeScript", "RAG", "LLMs", "Vector DB", "Vercel"],
    github: "https://github.com/yashdayma55/gmu-smartpatriot",
    live: "https://gmu-smartpatriot-55.vercel.app/",
    video: "https://youtu.be/cE7DzSwmRg0?si=wtl6cNYVggVgw2z4",
    featured: true,
    architecture: ["GMU Docs", "Vector DB", "RAG Retrieval", "LLM Q&A", "Citations"],
    metrics: ["Live web pages", "Source citations", "University knowledge"],
    image: "smartpatriot.png",
  },
  {
    title: "IoT Factory Monitor",
    category: "Industry Deployment · CEAT Tires",
    categoryColor: "bg-emerald-500/15 text-emerald-700 border-emerald-200/50",
    chipStyle: "emerald",
    filterCategory: "IoT",
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
    architecture: ["ESP32 Sensors", "ESP-NOW Repeaters", "Raspberry Pi", "MySQL", "Dashboard", "SMS Alerts"],
    metrics: ["30% latency reduction", "CEAT deployed", "Real-time monitoring"],
    image: "iot-monitor.png",
  },
  {
    title: "DebateMind",
    category: "AI Multi-Agent System",
    categoryColor: "bg-amber-500/15 text-amber-700 border-amber-200/50",
    chipStyle: "amber",
    filterCategory: "AI Systems",
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
    architecture: ["Topic Input", "Moderator Agent", "Pro + Con Agents", "Judge Agent", "Evaluation"],
    metrics: ["4 AI agents", "30–40% faster", "Multimodal"],
  },
  {
    title: "CyberShield AI",
    category: "AI / Security Platform",
    categoryColor: "bg-rose-500/15 text-rose-700 border-rose-200/50",
    chipStyle: "rose",
    filterCategory: "Security",
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
    featured: true,
    architecture: ["Chrome Extension", "REST API", "LLM Chat", "File Pipeline", "uAgents"],
    metrics: ["Live browser protection", "Multi-agent pipeline", "Fetch.ai compatible"],
    image: "cybershield.png",
  },
  {
    title: "UniSurvey",
    category: "Full-Stack · DevOps",
    categoryColor: "bg-orange-500/15 text-orange-700 border-orange-200/50",
    chipStyle: "orange",
    filterCategory: "Full Stack",
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
    architecture: ["Angular App", "Spring Boot API", "RDS MySQL", "Docker", "K8s Rancher"],
    metrics: ["3+ pods HA", "Jenkins CI/CD", "Admin CRUD"],
  },
  {
    title: "Li-Fi Communication System",
    category: "Embedded Systems",
    categoryColor: "bg-cyan-500/15 text-cyan-700 border-cyan-200/50",
    chipStyle: "cyan",
    filterCategory: "Embedded",
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
    architecture: ["Application", "OOK/FSK/PWM", "LED TX", "Photodiode RX", "ACK Protocol"],
    metrics: ["3 modulations", "Lowest BER", "Link-layer protocol"],
  },
];

export const publications: Publication[] = [
  {
    title: "IoT Based Factory Monitoring System",
    type: "Conference Paper",
    description:
      "IoT-based temperature and humidity monitoring using a private wireless sensor network (WSN) for secure data transmission from sensor nodes to the server. Features DHT-22 sensors, ESP-NOW repeater network, Raspberry Pi server, web-based dashboard with trends and device configuration, and SMS alert gateway via TTGO Sim800L for supervisors when thresholds are exceeded.",
    status: "Published",
    venue: "2nd Int. Conf. on Recent Trends in Engineering, Science, Technology & Management (IC-RTETM-23) · IJSRED",
    link: "https://ijsred.com/special-issues/ic-rtetm-23/IC-RTETM-199.pdf",
    authors: "Sakshi Ahire, Yash Dayma, Rutuja Kshirsagar, Gayatri Chaudhari, Prof. S.V. Pawar · MVP's KBT College of Engineering",
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
    {
      platform: "Phone",
      href: "tel:+12029977304",
      label: "+1 (202) 997-7304",
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
