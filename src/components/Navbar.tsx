"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6 md:pt-6">
      <nav className="max-w-6xl mx-auto">
        <div className="navbar-floating rounded-2xl px-5 py-3 md:px-6 md:py-3.5">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm text-secondary hover:text-primary hover:bg-white/50 font-medium transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-lg text-primary hover:bg-white/50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu - floating dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 navbar-floating rounded-2xl overflow-hidden"
            >
              <div className="px-5 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-secondary hover:text-primary hover:bg-white/50 font-medium py-2.5 px-3 rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
