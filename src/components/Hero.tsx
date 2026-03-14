"use client";

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6 border border-emerald-100">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          available for hire
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-3 leading-tight">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Yash Dayma</span>
        </h1>

        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl md:text-2xl text-text-primary font-semibold">
            AI & Backend Engineer
          </h2>
          <span className="w-0.5 h-6 bg-accent-purple animate-blink-cursor" />
        </div>

        <p className="text-lg text-text-secondary max-w-2xl mb-8 leading-relaxed">
          I build intelligent software systems — from AI-powered applications and scalable backend
          systems to cloud-native DevOps pipelines. Clean architecture, clean code.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-card hover:shadow-glow"
          >
            View Projects
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white text-text-primary font-medium border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-card transition-all"
          >
            Download CV
          </a>
        </div>

        <div className="flex flex-wrap gap-6">
          <div className="px-6 py-4 rounded-2xl bg-white shadow-card border border-indigo-50/50">
            <span className="gradient-text font-bold text-2xl">18+</span>
            <span className="text-text-primary ml-1">repos</span>
          </div>
          <div className="px-6 py-4 rounded-2xl bg-white shadow-card border border-indigo-50/50">
            <span className="gradient-text font-bold text-2xl">6+</span>
            <span className="text-text-primary ml-1">projects shipped</span>
          </div>
          <div className="px-6 py-4 rounded-2xl bg-white shadow-card border border-indigo-50/50">
            <span className="gradient-text font-bold text-2xl">MS</span>
            <span className="text-text-primary ml-1">Computer Science @ GMU</span>
          </div>
        </div>
      </div>
    </section>
  );
}
