"use client";

import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "MedLedger AI",
    tag: "AI / Healthcare",
    tagColor: "bg-violet-100 text-violet-700",
    description: "AI-powered healthcare record intelligence system with structured data extraction and LLM pipelines.",
    github: "https://github.com/yashdayma55/medledger-ai",
    live: null,
  },
  {
    title: "DealHunter",
    tag: "Full-Stack",
    tagColor: "bg-cyan-100 text-cyan-700",
    description: "Real-time deal intelligence scraping platform with Chrome extension and deal aggregation.",
    github: "https://github.com/yashdayma55/DealHunter",
    live: null,
  },
  {
    title: "GMU SmartPatriot",
    tag: "LLM / RAG",
    tagColor: "bg-amber-100 text-amber-700",
    description: "University knowledge engine using LLM grounding and RAG for intelligent Q&A.",
    github: "https://github.com/yashdayma55/gmu-smartpatriot",
    live: null,
  },
  {
    title: "IoT Factory Monitor",
    tag: "IoT / DevOps",
    tagColor: "bg-emerald-100 text-emerald-700",
    description: "Production-grade IoT-based factory monitoring system with real-time analytics and anomaly detection.",
    github: "https://github.com/yashdayma55/iot-enterprise-factory-monitor",
    live: null,
  },
  {
    title: "DebateMind",
    tag: "AI",
    tagColor: "bg-rose-100 text-rose-700",
    description: "AI-powered debate and reasoning platform.",
    github: "https://github.com/yashdayma55/DebateMind",
    live: null,
  },
  {
    title: "Li-Fi Communication",
    tag: "Embedded",
    tagColor: "bg-indigo-100 text-indigo-700",
    description: "Li-Fi communication system using LEDs and photodiodes with OOK/FSK/PWM modulation.",
    github: "https://github.com/yashdayma55/Li-Fi-Communication-System-Using-LED-and-Photodiode",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-text-muted font-mono text-sm mb-2">{"// featured_work"}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group p-6 rounded-2xl bg-white shadow-card border border-indigo-50/50 hover:shadow-card-hover hover:border-indigo-100 transition-all duration-300 flex flex-col"
          >
            <span
              className={`inline-block w-fit px-2.5 py-1 rounded-lg text-xs font-medium mb-4 ${project.tagColor}`}
            >
              {project.tag}
            </span>
            <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:gradient-text transition-all">
              {project.title}
            </h3>
            <p className="text-text-secondary text-sm mb-4 flex-grow">{project.description}</p>
            <div className="flex items-center gap-4 text-sm text-text-muted">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent-purple transition-colors"
              >
                <Github className="w-4 h-4" />
                Github
              </a>
              {project.live && (
                <>
                  <span>-</span>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-accent-purple transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
