"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Youtube } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";

const BENTO_ORDER: { title: string; span: number; theme: "purple" | "amber" | "pink" | "green" | "blue" | "teal"; featured?: boolean; pulseBadge?: boolean }[] = [
  { title: "MedLedger AI", span: 7, theme: "purple", featured: true },
  { title: "IoT Factory Monitor", span: 5, theme: "amber", pulseBadge: true },
  { title: "DebateMind", span: 4, theme: "pink" },
  { title: "CyberShield AI", span: 4, theme: "teal" },
  { title: "GMU SmartPatriot", span: 4, theme: "blue" },
  { title: "Lung Cancer Prediction", span: 6, theme: "green" },
  { title: "DealHunter", span: 6, theme: "blue" },
  { title: "Li-Fi Communication System", span: 5, theme: "teal" },
  { title: "UniSurvey", span: 7, theme: "pink" },
];

const STAT_CARDS = [
  { value: "8+", label: "Projects", theme: "purple" as const, progress: 85 },
  { value: "18+", label: "Repos", theme: "green" as const, progress: 75 },
  { value: "∞", label: "Curiosity", theme: "amber" as const, progress: 100 },
];

const THEME_BADGE: Record<string, { bg: string; text: string; border: string }> = {
  purple: { bg: "#7c3aed", text: "#fff", border: "#ddd6fe" },
  amber: { bg: "#d97706", text: "#fff", border: "#fde68a" },
  pink: { bg: "#db2777", text: "#fff", border: "#fbcfe8" },
  green: { bg: "#059669", text: "#fff", border: "#bbf7d0" },
  blue: { bg: "#2563eb", text: "#fff", border: "#bfdbfe" },
  teal: { bg: "#0d9488", text: "#fff", border: "#99f6e4" },
};

const THEME_TAG: Record<string, { bg: string; text: string }> = {
  purple: { bg: "#ede9fe", text: "#6d28d9" },
  amber: { bg: "#fffbeb", text: "#b45309" },
  pink: { bg: "#fdf2f8", text: "#be185d" },
  green: { bg: "#ecfdf5", text: "#047857" },
  blue: { bg: "#eff6ff", text: "#1d4ed8" },
  teal: { bg: "#f0fdfa", text: "#0f766e" },
};

const THEME_BLOB: Record<string, string> = {
  purple: "#a78bfa",
  amber: "#fbbf24",
  pink: "#f472b6",
  green: "#34d399",
  blue: "#60a5fa",
  teal: "#2dd4bf",
};

function getProjectByTitle(title: string): Project | undefined {
  return projects.find((p) => p.title === title);
}

function MedLedgerVisual() {
  return (
    <div className="relative w-full h-full min-h-[180px] flex items-center justify-center">
      <svg viewBox="0 0 200 120" className="w-full max-w-[220px] h-auto" fill="none">
        <rect x="20" y="10" width="80" height="100" rx="6" fill="#ede9fe" stroke="#ddd6fe" strokeWidth="1.5" />
        <rect x="35" y="25" width="50" height="8" rx="2" fill="#c4b5fd" opacity="0.7" />
        <rect x="35" y="40" width="45" height="6" rx="2" fill="#ddd6fe" opacity="0.8" />
        <rect x="35" y="52" width="40" height="6" rx="2" fill="#ddd6fe" opacity="0.6" />
        <rect x="100" y="20" width="80" height="80" rx="6" fill="#f5f3ff" stroke="#ddd6fe" strokeWidth="1.5" />
        <circle cx="140" cy="55" r="22" fill="#7c3aed" opacity="0.2" />
        <text x="140" y="60" textAnchor="middle" fill="#6d28d9" fontSize="10" fontFamily="system-ui" fontWeight="700">AI</text>
        <path d="M100 70 L130 55 L160 70 L180 55" stroke="#7c6fff" strokeWidth="2" fill="none" strokeDasharray="4 2" opacity="0.8" />
      </svg>
    </div>
  );
}

function BentoCard({
  project,
  index,
  theme,
  span,
  featured,
  pulseBadge,
}: {
  project: Project;
  index: number;
  theme: keyof typeof THEME_BADGE;
  span: number;
  featured?: boolean;
  pulseBadge?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const badge = THEME_BADGE[theme];
  const tagStyle = THEME_TAG[theme];
  const blobColor = THEME_BLOB[theme];

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const spanClass = { 4: "md:col-span-4", 5: "md:col-span-5", 6: "md:col-span-6", 7: "md:col-span-7" }[span] || "md:col-span-4";

  return (
    <div
      ref={cardRef}
      className={`bento-card bento-${theme} bento-scroll col-span-12 ${spanClass} ${inView ? "in" : ""}`}
      style={{ transitionDelay: `${index * 50}ms` }}
      onClick={() => window.open(project.github, "_blank")}
    >
      <div
        className="absolute w-24 h-24 rounded-full pointer-events-none opacity-25"
        style={{ filter: "blur(32px)", background: blobColor, top: 8, right: 8 }}
      />
      <span className="absolute top-5 right-5 font-mono text-[10px] text-black/20">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative z-10">
        <span
          className="inline-flex items-center gap-1.5 font-mono text-[10px] rounded-full px-2.5 py-1 text-white border mb-3"
          style={{ background: badge.bg, borderColor: badge.border }}
        >
          {pulseBadge && <span className="bento-pulse-dot w-1.5 h-1.5 rounded-full bg-white" />}
          {project.category}
        </span>

        <h3
          className={`font-body font-bold text-[#1a1035] mb-2 ${featured ? "text-[25px] font-extrabold" : "text-[19px]"}`}
        >
          {project.title}
        </h3>
        <p className="text-[13px] text-[#6b7280] leading-[1.65] mb-4">{project.impact}</p>

        {featured && project.title === "MedLedger AI" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-2 text-[13px] text-[#6b7280] leading-[1.5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] flex-shrink-0 mt-1.5" />
                  {h}
                </li>
              ))}
            </ul>
            <MedLedgerVisual />
          </div>
        )}

        {!featured && project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1 mb-3">
            {project.highlights.slice(0, 4).map((h, i) => (
              <li key={i} className="text-[12px] text-[#6b7280] leading-[1.5] flex gap-1.5">
                <span className="text-[#6b7280]/60">•</span> {h}
              </li>
            ))}
          </ul>
        )}

        {!featured && project.architecture && project.architecture.length > 0 && (
          <div className="flex flex-wrap items-center gap-1 mb-3 text-[11px] text-[#6b7280]">
            {project.architecture.slice(0, 4).map((step, i) => (
              <span key={i}>
                <span className="font-mono px-1.5 py-0.5 rounded bg-white/80 border border-black/5">{step}</span>
                {i < Math.min(3, project.architecture!.length - 1) && <span className="mx-0.5">→</span>}
              </span>
            ))}
          </div>
        )}

        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.metrics.slice(0, 3).map((m, i) => (
              <span
                key={i}
                className="font-mono text-[10px] px-2 py-0.5 rounded-md"
                style={{ background: tagStyle.bg, color: tagStyle.text }}
              >
                {m}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] px-2 py-0.5 rounded-md border"
              style={{ background: tagStyle.bg, color: tagStyle.text, borderColor: badge.border }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2" onClick={(e) => e.stopPropagation()}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] px-3 py-1.5 rounded-lg border-[1.5px] transition-all duration-[0.18s] hover:text-white"
            style={{
              background: tagStyle.bg,
              color: tagStyle.text,
              borderColor: badge.border,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = badge.bg;
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = badge.bg;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = tagStyle.bg;
              e.currentTarget.style.color = tagStyle.text;
              e.currentTarget.style.borderColor = badge.border;
            }}
          >
            <span className="inline-flex items-center gap-1.5">
              <Github className="w-3.5 h-3.5" /> GitHub
            </span>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] px-3 py-1.5 rounded-lg border-[1.5px] transition-all duration-[0.18s] hover:text-white"
              style={{
                background: tagStyle.bg,
                color: tagStyle.text,
                borderColor: badge.border,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = badge.bg;
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = badge.bg;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = tagStyle.bg;
                e.currentTarget.style.color = tagStyle.text;
                e.currentTarget.style.borderColor = badge.border;
              }}
            >
              <span className="inline-flex items-center gap-1.5">
                <ExternalLink className="w-3.5 h-3.5" /> Demo
              </span>
            </a>
          )}
          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] px-3 py-1.5 rounded-lg border-[1.5px] transition-all duration-[0.18s] hover:text-white"
              style={{
                background: tagStyle.bg,
                color: tagStyle.text,
                borderColor: badge.border,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = badge.bg;
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = badge.bg;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = tagStyle.bg;
                e.currentTarget.style.color = tagStyle.text;
                e.currentTarget.style.borderColor = badge.border;
              }}
            >
              <span className="inline-flex items-center gap-1.5">
                <Youtube className="w-3.5 h-3.5" /> Video
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  value,
  label,
  theme,
  progress,
  index,
}: {
  value: string;
  label: string;
  theme: keyof typeof THEME_BADGE;
  progress: number;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const badge = THEME_BADGE[theme];
  const blobColor = THEME_BLOB[theme];

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bento-card bento-${theme} bento-scroll col-span-12 md:col-span-4 flex flex-col items-center justify-center text-center ${inView ? "in" : ""}`}
      style={{ transitionDelay: `${(BENTO_ORDER.length + index) * 50}ms` }}
    >
      <div
        className="absolute w-20 h-20 rounded-full pointer-events-none opacity-25"
        style={{ filter: "blur(32px)", background: blobColor, bottom: 8, left: "50%", transform: "translateX(-50%)" }}
      />
      <span className="relative text-[40px] font-body font-extrabold mb-1" style={{ color: badge.bg }}>
        {value}
      </span>
      <span className="font-mono text-[10px] text-[#6b7280] mb-3">{label}</span>
      <div className="bento-progress w-full max-w-[120px]" style={{ opacity: inView ? 1 : 0 }}>
        <div
          className="bento-progress-bar"
          style={{
            width: inView ? `${progress}%` : "0%",
            background: badge.bg,
          }}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-body font-extrabold text-[#1a1035] mb-2">
            Things I&apos;ve{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(120deg, #7c6fff, #c084fc, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Built
            </span>
          </h2>
          <p className="text-[#6b7280] text-base max-w-xl">
            A collection of projects across AI, full-stack, IoT, and research.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-3.5">
          {BENTO_ORDER.map((item, i) => {
            const project = getProjectByTitle(item.title);
            if (!project) return null;
            return (
              <BentoCard
                key={project.title}
                project={project}
                index={i}
                theme={item.theme}
                span={item.span}
                featured={item.featured}
                pulseBadge={item.pulseBadge}
              />
            );
          })}
          {STAT_CARDS.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              theme={stat.theme}
              progress={stat.progress}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
