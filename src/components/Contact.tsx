"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin as LinkedInIcon, Mail, Phone, Send, CheckCircle, Loader2 } from "lucide-react";
import { contactData } from "@/data/portfolio";

const icons: Record<string, typeof Github> = {
  Github,
  GitHub: Github,
  LinkedIn: LinkedInIcon,
  Email: Mail,
  Phone,
};

// Support both full URL (https://formspree.io/f/xyz) and just the form ID (xyz)
const rawFormId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "";
const FORMSPREE_FORM_ID = rawFormId.includes("formspree.io")
  ? rawFormId.split("/").pop()?.split("?")[0] || ""
  : rawFormId.trim();

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_FORM_ID) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto pb-32">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {contactData.links.map((link) => {
              const Icon =
                icons[link.platform as keyof typeof icons] || Github;
              return (
                <a
                  key={link.platform}
                  href={link.href}
                  target={["Email", "Phone"].includes(link.platform) ? undefined : "_blank"}
                  rel={["Email", "Phone"].includes(link.platform) ? undefined : "noopener noreferrer"}
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

          <div className="pt-8 border-t border-white/40">
            <h4 className="font-heading font-semibold text-primary mb-4">Send a message</h4>
            {!FORMSPREE_FORM_ID ? (
              <p className="text-sm text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-4 py-3 rounded-lg">
                Contact form requires Formspree. Add <code className="text-xs bg-white/50 px-1 rounded">NEXT_PUBLIC_FORMSPREE_FORM_ID</code> to your environment.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-lg border border-white/60 bg-white/50 text-primary placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-white/60 bg-white/50 text-primary placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What is this about?"
                    className="w-full px-4 py-2.5 rounded-lg border border-white/60 bg-white/50 text-primary placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-4 py-2.5 rounded-lg border border-white/60 bg-white/50 text-primary placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400 resize-y min-h-[100px]"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-medium hover:from-indigo-600 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send message
                      </>
                    )}
                  </button>
                  {status === "success" && (
                    <span className="text-sm text-emerald-600">Thanks! I&apos;ll get back to you soon.</span>
                  )}
                  {status === "error" && (
                    <span className="text-sm text-rose-600">Something went wrong. Please try again or email directly.</span>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
