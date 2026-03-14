"use client";

import { Award, Zap, BookOpen, Trophy } from "lucide-react";

const achievements = [
  {
    icon: BookOpen,
    iconColor: "from-violet-500 to-purple-600",
    title: "Publication: IoT Factory Monitoring System",
    description: "Published research on production-grade IoT-based industrial monitoring with real-time analytics and anomaly detection.",
  },
  {
    icon: Zap,
    iconColor: "from-amber-500 to-orange-600",
    title: "30% Data Processing Latency Reduction",
    description: "Optimized ingestion pipelines for high-frequency sensor data, enabling near real-time analytics in industrial deployments.",
  },
  {
    icon: Award,
    iconColor: "from-cyan-500 to-blue-600",
    title: "Production IoT Deployment",
    description: "Architected and deployed a full-stack monitoring system in a live industrial environment at scale.",
  },
  {
    icon: Trophy,
    iconColor: "from-rose-500 to-pink-600",
    title: "MS Computer Science @ George Mason",
    description: "Graduate student specializing in AI, backend systems, and cloud-native architectures.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-text-muted font-mono text-sm mb-2">{"// milestones"}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Achievements</h2>
      </div>

      <div className="space-y-4">
        {achievements.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-card border border-indigo-50/50 hover:shadow-card-hover hover:border-indigo-100 transition-all duration-300"
          >
            <div
              className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.iconColor} flex items-center justify-center`}
            >
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-1">{item.title}</h3>
              <p className="text-text-secondary text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
