"use client";

import { footerData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="font-heading font-bold text-primary">{footerData.name}</p>
          <p className="text-sm text-secondary">{footerData.role}</p>
        </div>
        <div className="text-sm text-secondary">
          <p>{footerData.copyright}</p>
          <p className="mt-1 text-xs opacity-80">{footerData.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
