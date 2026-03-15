"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="glass rounded-3xl p-8 md:p-12 border border-white/80 shadow-glass"
      >
        <p className="font-mono text-sm text-secondary mb-2">{"// about"}</p>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-6">
          Professional Summary
        </h2>
        <div className="space-y-4 text-secondary leading-relaxed">
          {aboutData.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
