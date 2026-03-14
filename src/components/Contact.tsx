"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const contacts = [
  {
    platform: "github",
    icon: Github,
    handle: "github.com/yashdayma55",
    href: "https://github.com/yashdayma55",
  },
  {
    platform: "linkedin",
    icon: Linkedin,
    handle: "linkedin.com/in/yashdayma",
    href: "https://www.linkedin.com/in/yashdayma",
  },
  {
    platform: "email",
    icon: Mail,
    handle: "yashdayma55@gmail.com",
    href: "mailto:yashdayma55@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto pb-32">
      <div className="mb-12">
        <p className="text-text-muted font-mono text-sm mb-2">{"// reach_out"}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Contact</h2>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 rounded-2xl bg-white shadow-card border border-indigo-50/50">
          <div>
            <h3 className="text-xl font-bold text-text-primary">Open to new opportunities</h3>
            <p className="text-text-secondary text-sm mt-1">
              AI Engineering · Backend Development · Cloud & DevOps · Platform Engineering
            </p>
          </div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Available
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.platform}
              href={contact.href}
              target={contact.platform !== "email" ? "_blank" : undefined}
              rel={contact.platform !== "email" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white shadow-card border border-indigo-50/50 hover:shadow-card-hover hover:border-indigo-100 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <contact.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-text-muted text-xs uppercase tracking-wider">{contact.platform}</p>
                <p className="text-text-primary font-medium group-hover:gradient-text transition-all">
                  {contact.handle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
