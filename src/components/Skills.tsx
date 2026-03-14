"use client";

import {
  SquareCode,
  FileCode,
  Database,
  Container,
  Cloud,
  Cpu,
  Brain,
  Zap,
} from "lucide-react";

const skills = [
  {
    name: "Python",
    icon: SquareCode,
    color: "from-amber-400 to-yellow-600",
  },
  {
    name: "TypeScript",
    icon: FileCode,
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "PostgreSQL",
    icon: Database,
    color: "from-sky-400 to-blue-600",
  },
  {
    name: "Docker",
    icon: Container,
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "AWS",
    icon: Cloud,
    color: "from-orange-400 to-orange-600",
  },
  {
    name: "LangGraph",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Next.js",
    icon: Zap,
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "TensorFlow",
    icon: Cpu,
    color: "from-orange-500 to-amber-600",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-text-muted font-mono text-sm mb-2">{"// tech_stack"}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Skills</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className="group p-6 rounded-2xl bg-white shadow-card border border-indigo-50/50 hover:shadow-card-hover hover:border-indigo-100 transition-all duration-300"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
            >
              <skill.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-text-primary font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
