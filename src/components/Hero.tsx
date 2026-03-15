"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { heroData, resumePath } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="space-y-6"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm font-medium text-secondary border border-white/80 shadow-glass">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {heroData.availability}
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary leading-tight">
          Hi, I&apos;m <span className="gradient-text">{heroData.name}</span>
        </h1>

        <div className="flex items-center gap-2 min-h-[2.5rem]">
          <TypeAnimation
            sequence={heroData.roles.flatMap((role) => [role, 2000])}
            wrapper="span"
            speed={40}
            deletionSpeed={60}
            repeat={Infinity}
            cursor={false}
            className="text-xl md:text-2xl font-heading font-semibold text-primary"
          />
          <span className="w-0.5 h-6 bg-accent-indigo animate-blink" />
        </div>

        <p className="text-lg text-secondary max-w-2xl leading-relaxed">
          {heroData.description[0]}
        </p>
        <p className="text-secondary max-w-2xl leading-relaxed">
          {heroData.description[1]}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 text-white font-medium hover:shadow-glass-hover hover:-translate-y-0.5 transition-all"
          >
            View Projects
          </a>
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl glass border border-white/80 font-medium hover:shadow-glass-hover hover:-translate-y-0.5 transition-all"
          >
            Download Resume
          </a>
        </div>

        <div className="flex flex-wrap gap-4 pt-6">
          {heroData.stats.map((stat) => (
            <div
              key={stat.label}
              className="px-4 py-2 rounded-xl glass border border-white/80 text-sm text-secondary"
            >
              {stat.label}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
