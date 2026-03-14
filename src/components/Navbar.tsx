"use client";

export default function Navbar() {
  const navLinks = [
    { href: "#about", label: "about" },
    { href: "#skills", label: "skills" },
    { href: "#projects", label: "projects" },
    { href: "#achievements", label: "achievements" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-surface-light/80 border-b border-indigo-100/50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-sm text-text-secondary font-mono hover:text-accent-purple transition-colors">
          ( dev.portfolio /)
        </a>
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-accent-purple transition-colors capitalize"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
