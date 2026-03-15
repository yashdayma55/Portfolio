"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Palette,
  Database,
  Brain,
  Cloud,
  Shield,
  Wrench,
} from "lucide-react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiNodedotjs,
  SiSpringboot,
  SiPhp,
  SiSwagger,
  SiFastapi,
  SiDjango,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiHuggingface,
  SiLanggraph,
  SiOllama,
  SiOpenai,
  SiLangchain,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiRancher,
  SiGithubactions,
  SiArduino,
  SiEspressif,
  SiC,
  SiSignal,
  SiAuth0,
  SiCryptomator,
  SiLinux,
  SiGit,
  SiGithub,
  SiVercel,
  SiVscodium,
  SiPostman,
  SiJupyter,
  SiFigma,
} from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import type { IconType } from "react-icons";
import { skills } from "@/data/skills";

const iconMap: Record<string, IconType> = {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiNodedotjs,
  SiSpringboot,
  SiPhp,
  SiSwagger,
  SiFastapi,
  SiDjango,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiHuggingface,
  SiLanggraph,
  SiOllama,
  SiOpenai,
  SiLangchain,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiRancher,
  SiGithubactions,
  SiArduino,
  SiEspressif,
  SiC,
  SiSignal,
  SiAuth0,
  SiCryptomator,
  FaAws,
  FaMicrosoft,
  SiLinux,
  SiGit,
  SiGithub,
  SiVercel,
  SiVscodium,
  SiPostman,
  SiJupyter,
  SiFigma,
};

// Category configuration: accent bar + chip styles + category icon
const categoryConfig: Record<
  string,
  {
    accentBar: string;
    chipBg: string;
    chipBorder: string;
    chipText: string;
    iconColor: string;
    categoryIcon: typeof Code2;
  }
> = {
  Languages: {
    accentBar: "bg-amber-400",
    chipBg: "bg-amber-50",
    chipBorder: "border-amber-200",
    chipText: "text-amber-700",
    iconColor: "text-amber-600",
    categoryIcon: Code2,
  },
  Backend: {
    accentBar: "bg-indigo-500",
    chipBg: "bg-indigo-50",
    chipBorder: "border-indigo-200",
    chipText: "text-indigo-700",
    iconColor: "text-indigo-600",
    categoryIcon: Server,
  },
  Frontend: {
    accentBar: "bg-violet-500",
    chipBg: "bg-violet-50",
    chipBorder: "border-violet-200",
    chipText: "text-violet-700",
    iconColor: "text-violet-600",
    categoryIcon: Palette,
  },
  Databases: {
    accentBar: "bg-emerald-500",
    chipBg: "bg-emerald-50",
    chipBorder: "border-emerald-200",
    chipText: "text-emerald-700",
    iconColor: "text-emerald-600",
    categoryIcon: Database,
  },
  "AI / ML": {
    accentBar: "bg-rose-400",
    chipBg: "bg-rose-50",
    chipBorder: "border-rose-200",
    chipText: "text-rose-700",
    iconColor: "text-rose-600",
    categoryIcon: Brain,
  },
  "Cloud / DevOps": {
    accentBar: "bg-orange-400",
    chipBg: "bg-orange-50",
    chipBorder: "border-orange-200",
    chipText: "text-orange-700",
    iconColor: "text-orange-600",
    categoryIcon: Cloud,
  },
  "IoT & Security": {
    accentBar: "bg-cyan-400",
    chipBg: "bg-cyan-50",
    chipBorder: "border-cyan-200",
    chipText: "text-cyan-700",
    iconColor: "text-cyan-600",
    categoryIcon: Shield,
  },
  Tools: {
    accentBar: "bg-slate-400",
    chipBg: "bg-slate-50",
    chipBorder: "border-slate-200",
    chipText: "text-slate-700",
    iconColor: "text-slate-600",
    categoryIcon: Wrench,
  },
};

// Icon-specific colors for popular tech (overrides category)
const iconColors: Record<string, string> = {
  SiPython: "text-yellow-600",
  SiJavascript: "text-yellow-500",
  SiTypescript: "text-blue-600",
  SiPhp: "text-indigo-600",
  SiDocker: "text-blue-500",
  SiPostgresql: "text-blue-600",
  SiMysql: "text-orange-600",
  SiMongodb: "text-emerald-600",
  SiRedis: "text-red-600",
  FaAws: "text-orange-600",
  SiReact: "text-cyan-500",
  SiTensorflow: "text-orange-500",
  SiPytorch: "text-orange-600",
};

const categories = [
  "Languages",
  "Backend",
  "Frontend",
  "Databases",
  "AI / ML",
  "Cloud / DevOps",
  "IoT & Security",
  "Tools",
];

export default function Skills() {
  const groupedSkills = categories.map((cat) => ({
    category: cat,
    skills: skills.filter((s) => s.category === cat),
  }));

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      {/* Soft radial gradient behind section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(99,102,241,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-4">
            Tech Stack
          </h2>
          <p className="text-secondary max-w-xl mx-auto text-sm md:text-base">
            Technologies and tools I use to build modern software systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {groupedSkills.map(
            (group, groupIndex) =>
              group.skills.length > 0 && (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: groupIndex * 0.05,
                  }}
                  className="group relative glass rounded-2xl p-6 border border-white/80 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Category accent bar (left edge) */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${categoryConfig[group.category]?.accentBar || "bg-indigo-500"}`}
                  />

                  <div className="pl-2">
                    <h3 className="font-heading font-bold text-primary text-lg mb-4 flex items-center gap-2">
                      <span
                        className={`${categoryConfig[group.category]?.iconColor || "text-indigo-600"}`}
                      >
                        {(() => {
                          const CatIcon =
                            categoryConfig[group.category]?.categoryIcon ||
                            Code2;
                          return <CatIcon className="w-5 h-5" />;
                        })()}
                      </span>
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, i) => {
                        const Icon = iconMap[skill.icon];
                        const config =
                          categoryConfig[group.category] ||
                          categoryConfig.Backend;
                        const iconColorClass =
                          iconColors[skill.icon] || config.iconColor;
                        return (
                          <motion.span
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: groupIndex * 0.05 + i * 0.02,
                            }}
                            className={`
                              inline-flex items-center gap-2 px-3 py-1.5
                              text-sm font-medium rounded-lg
                              ${config.chipBg} ${config.chipBorder} ${config.chipText}
                              border hover:-translate-y-1 hover:shadow-md
                              transition-all duration-200 cursor-default
                            `}
                          >
                            {Icon ? (
                              <Icon
                                className={`flex-shrink-0 ${iconColorClass}`}
                                size={16}
                              />
                            ) : (
                              <span className="text-sm font-bold opacity-70">
                                {skill.name.charAt(0)}
                              </span>
                            )}
                            {skill.name}
                          </motion.span>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ),
          )}
        </div>
      </div>
    </section>
  );
}
