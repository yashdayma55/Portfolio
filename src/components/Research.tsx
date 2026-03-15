"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { publications } from "@/data/portfolio";

export default function Research() {
  return (
    <section id="research" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-12">
          Research & Publications
        </h2>

        <div className="space-y-4">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 border border-white/80 shadow-glass hover:shadow-glass-hover hover:translate-x-1 transition-all duration-300 flex flex-col sm:flex-row gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold text-primary text-lg mb-1">
                  {pub.title}
                </h3>
                <p className="text-sm text-secondary mb-1">{pub.type}</p>
                {pub.authors && (
                  <p className="text-xs text-secondary/90 mb-2 italic">
                    {pub.authors}
                  </p>
                )}
                <p className="text-secondary text-sm mb-3">{pub.description}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded text-xs font-medium ${
                      pub.status === "Published"
                        ? "bg-emerald-500/15 text-emerald-700"
                        : "bg-amber-500/15 text-amber-700"
                    }`}
                  >
                    {pub.status}
                  </span>
                  {pub.venue && (
                    <span className="text-xs text-secondary">{pub.venue}</span>
                  )}
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View PDF
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
