"use client";

import { motion } from "framer-motion";
import {
  Cog,
  Radio,
  BarChart3,
  Brain,
  Server,
  Key,
  Activity,
  Gauge,
} from "lucide-react";
import { experiences } from "@/data/portfolio";

const bulletIcons = [
  Cog,      // Architecture / Building
  Radio,    // IoT / Sensors / Integration
  BarChart3, // Dashboards / Analytics
  Brain,    // ML / Anomaly detection
  Server,   // Backend / Services
  Key,      // Auth / APIs
  Activity, // Monitoring / Logging
  Gauge,    // Performance / Benchmarking
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-16">
          Experience
        </h2>

        <div className="relative">
          {/* Center vertical line */}
          <div
            className="absolute top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-300 via-violet-300 to-pink-200 hidden md:block"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-start py-10 md:py-12 border-b border-white/50 last:border-b-0"
              >
                {/* LEFT SIDE - Role & Company */}
                <div className="md:text-right pr-0 md:pr-8 order-2 md:order-1">
                  <h3 className="font-heading font-bold text-primary text-lg">
                    {exp.title}
                  </h3>
                  <p className="text-secondary font-medium text-sm mt-1">
                    {exp.company}
                  </p>
                  {exp.location && (
                    <p className="text-secondary/80 text-xs mt-0.5">
                      {exp.location}
                    </p>
                  )}
                </div>

                {/* CENTER - Timeline dot & year */}
                <div className="flex flex-row md:flex-col items-center gap-3 md:gap-2 order-1 md:order-2 justify-center md:justify-start">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 border-4 border-surface shadow-glass flex-shrink-0 z-10" />
                  <div className="flex flex-row md:flex-col items-center gap-1 font-mono text-sm">
                    <span className="font-medium text-primary">
                      {exp.startYear}
                    </span>
                    <span className="text-secondary">–</span>
                    <span className="font-medium text-primary">
                      {exp.endYear}
                    </span>
                  </div>
                </div>

                {/* RIGHT SIDE - Bullets & Tech tags */}
                <div className="order-3 pl-0 md:pl-8">
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, bulletIdx) => {
                      const Icon = bulletIcons[bulletIdx % bulletIcons.length];
                      return (
                        <li
                          key={bulletIdx}
                          className="flex gap-2.5 text-secondary text-sm leading-relaxed"
                        >
                          <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center">
                            <Icon className="w-2.5 h-2.5" strokeWidth={2.5} />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.techTags.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
