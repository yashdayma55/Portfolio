"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-12">
          Achievements & Competitions
        </h2>

        <div className="space-y-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-2xl p-6 border border-white/80 shadow-glass hover:shadow-glass-hover hover:translate-x-1 hover:brightness-[1.02] transition-all duration-300 flex items-start gap-4"
            >
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.iconGradient} flex items-center justify-center`}
              >
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-primary text-lg">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm mt-1">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
