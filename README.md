# Yash Dayma — Portfolio

A production-ready, professional portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and react-type-animation.

## Features

- **Sections**: Navbar, Hero, About, Skills, Projects, Research, Achievements, Contact, Footer
- **Design**: Light-theme glassmorphism with soft gradients, animated blobs, and premium typography
- **Animations**: Framer Motion section reveals, react-type-animation hero typing, floating background blobs
- **Responsive**: Mobile-first, fully responsive across all breakpoints
- **Data-driven**: All content in `src/data/portfolio.ts` for easy customization

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- react-type-animation
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

All personal content lives in **`src/data/portfolio.ts`**:

- `heroData` — Name, roles, description, stats
- `aboutData` — Professional summary
- `skillCategories` — Skills by category
- `projects` — Featured projects
- `publications` — Research & publications
- `achievements` — Competitions & milestones
- `contactData` — Contact links
- `footerData` — Footer content

**Resume**: Place your PDF at `public/resume.pdf` for the Download Resume button.

## Deploy to Vercel

```bash
npm run build
```

Deploy to [Vercel](https://vercel.com) for zero-config hosting.
