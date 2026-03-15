"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/portfolio";

const chipStyles: Record<string, string> = {
  violet: "bg-violet-50 text-violet-700 border-violet-200",
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
  rose: "bg-rose-50 text-rose-700 border-rose-200",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
  orange: "bg-orange-50 text-orange-700 border-orange-200",
};

function ProjectCard({
  project,
  index,
  featured,
}: {
  project: (typeof projects)[0];
  index: number;
  featured: boolean;
}) {
  const chipStyle = chipStyles[project.chipStyle] || chipStyles.indigo;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`
        group relative glass rounded-2xl p-6 md:p-7
        border border-white/80
        shadow-md hover:shadow-xl
        hover:-translate-y-1
        transition-all duration-300
        overflow-hidden
        hover:border-indigo-300/60
        ${featured ? "md:col-span-2" : ""}
      `}
    >
      {/* Gradient accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header: Category + Links */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <span
          className={`inline-block px-2.5 py-1 rounded-lg text-xs font-semibold border ${project.categoryColor}`}
        >
          {project.category}
        </span>
        <div className="flex items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-secondary hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-secondary hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-heading font-bold text-primary mb-3">
        {project.title}
      </h3>

      {/* Impact statement */}
      <p className="text-secondary text-sm md:text-base leading-relaxed mb-5">
        {project.impact}
      </p>

      {/* Key highlights */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-2">
          Key Highlights
        </p>
        <ul className="space-y-1.5">
          {project.highlights.map((h, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm text-secondary leading-snug"
            >
              <CheckCircle2 className="flex-shrink-0 w-4 h-4 text-emerald-500 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div>
        <p className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-2">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${chipStyle} hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <p className="font-mono text-sm text-secondary mb-2">
          {"// featured_work"}
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              featured={project.featured ?? false}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
