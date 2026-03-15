"use client";

import { motion } from "framer-motion";
import { Github, Linkedin as LinkedInIcon, Mail } from "lucide-react";
import { contactData } from "@/data/portfolio";

const icons: Record<string, typeof Github> = {
  Github,
  GitHub: Github,
  LinkedIn: LinkedInIcon,
  Email: Mail,
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto pb-32">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <p className="font-mono text-sm text-secondary mb-2">{"// reach_out"}</p>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-12">
          Contact
        </h2>

        <div className="glass rounded-3xl p-8 md:p-12 border border-white/80 shadow-glass">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-heading font-bold text-primary">
                {contactData.heading}
              </h3>
              <span className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm border border-emerald-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available
              </span>
              <p className="text-secondary text-sm mt-2">{contactData.availability}</p>
              <p className="text-secondary text-sm">{contactData.roles}</p>
            </div>
          </div>

          <p className="text-primary font-medium mb-6">{contactData.cta}</p>

          <div className="grid sm:grid-cols-3 gap-4">
            {contactData.links.map((link) => {
              const Icon =
                icons[link.platform as keyof typeof icons] || Github;
              return (
                <a
                  key={link.platform}
                  href={link.href}
                  target={link.platform === "Email" ? undefined : "_blank"}
                  rel={link.platform === "Email" ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-white/80 hover:shadow-glass-hover hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary uppercase tracking-wider">
                      {link.platform}
                    </p>
                    <p className="font-medium text-primary">{link.label}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
