# Sai Gowtham — Freelance Web Developer Portfolio

A professional, high-performance, and editorial-style portfolio website designed for an independent full-stack web developer. This site showcases case studies, service offerings, transparent pricing plans, and direct communication integrations to drive client enquiries.

## 🚀 Live Demo & Repository
- **Repository:** `https://github.com/Gowtham-2412/Freelance-Portfolio.git`
- **Target Remote:** Production deployment ready for Vercel/Cloudflare Pages.

---

## 🛠️ Technology Stack
- **Core Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Programming Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling & Theme:** [Tailwind CSS](https://tailwindcss.com/) with a custom warm-cream editorial design system.
- **Icons Library:** [Lucide React](https://lucide.dev/)

---

## 🎨 Key Features & Sections
1. **Header / Navigation:** Sticky header with scroll-aware styling changes, responsive mobile drawer navigation, and instant CTA links.
2. **Hero Section:** Reduced-spacing, above-the-fold layout featuring typography designed to draw attention, and a premium multi-device showcase visual.
3. **Selected Work (Case Studies):** Highlights real projects (like *LD Real Estates*) displaying clean live screenshots in high-contrast border cards.
4. **Services List:** Showcases six core developmental offerings (Business Websites, Web Apps, E-commerce, Redesigns, SEO/Performance, and Deployments).
5. **How We Work (Timeline):** An asymmetric 4-step timeline outlining the consulting, design, coding/testing, and launch workflows.
6. **Transparent Pricing:** Tiered pricing cards (Starter, Business, and Custom App) to set upfront expectations.
7. **FAQ Section:** Accordion-based FAQs addressing standard client queries (durations, budgets, domains, SEO guarantees, etc.).
8. **Direct Call to Actions:** Dynamic pre-filled WhatsApp and direct mail links for zero-friction client onboarding.

---

## 💻 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Gowtham-2412/Freelance-Portfolio.git
   cd Freelance-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

---

## 📁 Project Structure
```text
Portfolio/
├── public/                 # Static assets (Hero mockups, case study screenshots, favicons)
├── src/
│   └── app/
│       ├── globals.css     # Tailwind imports and editorial custom variable definitions
│       ├── layout.tsx      # Main layout wrapper with metadata definitions
│       ├── page.tsx        # Responsive landing page structure and components
│       └── sitemap.ts      # Automated SEO sitemap generation script
├── package.json
└── tsconfig.json
```

---

## ⚙️ Optimization & SEO Best Practices
- **Custom Fonts:** Built using Outfit/Inter and Georgia/Instrument Serif fonts.
- **Fast Core Web Vitals:** Meticulously structured using semantic HTML5 elements (`<header>`, `<section>`, `<nav>`, `<footer>`) to achieve high speed and clean Google indexing.
- **Custom Metadata:** Unique page title, descriptions, and automatic XML sitemaps loaded natively inside `src/app/sitemap.ts`.
