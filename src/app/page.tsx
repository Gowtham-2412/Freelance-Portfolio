"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  MessageSquare, 
  Mail, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  ExternalLink,
  Laptop,
  Layers,
  Database,
  Search,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Clock,
  Compass,
  CheckCircle,
  FileCode,
  Globe2,
  FileText
} from "lucide-react";

const Github = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Instagram = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function PortfolioPage() {
  // Navigation states
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // FAQ states
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Monitor scroll to update header styles
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Pre-filled WhatsApp link
  const whatsappNumber = "919502323161";
  const whatsappMessage = "Hi Gowtham, I found your portfolio and would like to discuss a website project for my business.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const emailUrl = "mailto:gowtham241206@gmail.com";
  const githubUrl = "https://github.com/Gowtham-2412";
  const instagramUrl = "https://instagram.com/gowtham___2416";

  const faqs = [
    {
      q: "How much does a website cost?",
      a: "Basic business websites start at ₹7,999. The final price depends entirely on your project's features, page count, and complexity. After our initial call, I'll send you a detailed proposal with a fixed-price quote so there are no surprises."
    },
    {
      q: "How long does a website take?",
      a: "Smaller websites and landing pages typically take 5–10 days. Larger projects, custom web applications, or platforms with complex database integration may take 2–4 weeks. I always establish clear delivery milestones in the project plan."
    },
    {
      q: "Do you work with clients outside Andhra Pradesh?",
      a: "Yes. I work with business owners, startups, and agencies across all states in India. All consultations, design reviews, and project communications are handled remotely via WhatsApp, Google Meet, and Email."
    },
    {
      q: "Will my website work on mobile phones?",
      a: "Absolutely. Every website I build is developed with a mobile-first approach. It will look polished, load fast, and work perfectly across smartphones, tablets, laptops, and large desktop screens."
    },
    {
      q: "Can you help with domains and deployment?",
      a: "Yes. I handle the complete setup. This includes setting up your custom domain, configuring DNS, deploying your site to production hosts, and setting up SSL certificates for secure HTTPS access."
    },
    {
      q: "Do you provide website maintenance?",
      a: "Yes. I offer ongoing support, domain renewals setup, and website maintenance plans. If you need updates, new features, or technical improvements down the line, I'm available to assist on an hourly or monthly basis."
    },
    {
      q: "Can you guarantee first position on Google?",
      a: "No. No legitimate developer or marketer can guarantee specific search rankings. However, I build solid technical SEO foundations into every site—including high-speed performance, clean semantic structure, custom metadata, XML sitemaps, and indexing on Google Search Console—giving your business the best possible chance to rank."
    }
  ];

  const services = [
    {
      title: "Business Websites",
      description: "Professional multi-page websites that establish credibility, present services clearly, and drive customer enquiries.",
      features: ["Clean visual hierarchy", "Contact forms", "SEO optimization"]
    },
    {
      title: "Full-Stack Web Applications",
      description: "Custom web applications with database integrations, user authentication, interactive dashboards, and business logic.",
      features: ["Secure APIs", "Scalable databases", "Interactive UX"]
    },
    {
      title: "E-commerce Development",
      description: "Custom online stores with seamless payment gateway integrations, shopping carts, product catalogs, and order management systems.",
      features: ["Secure checkouts", "Payment integrations", "Inventory management"]
    },
    {
      title: "Website Redesign",
      description: "Modernize outdated sites with a clean, editorial look, faster load speeds, responsive layouts, and better conversion flows.",
      features: ["Performance audit", "Modern UI", "No SEO traffic loss"]
    },
    {
      title: "SEO & Performance Setup",
      description: "Technical SEO optimization including sitemap generation, structured metadata, Google Search Console indexing, and speed tuning.",
      features: ["Fast Core Web Vitals", "Structured Data Schema", "Index optimization"]
    },
    {
      title: "Deployment & Domain Setup",
      description: "Hosting configuration, SSL setups, custom domains, and automated deployments so your site runs reliably 24/7.",
      features: ["SSL certificates", "Modern cloud hosting", "Zero-downtime deploys"]
    }
  ];

  return (
    <div className="flex-1 flex flex-col font-sans">
      
      {/* HEADER / NAVIGATION */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#FCFAF7]/95 backdrop-blur-md border-b border-border-editorial py-3 shadow-sm" 
            : "bg-[#FCFAF7] py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand-indigo">
              Sai Gowtham
            </span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold -mt-1">
              Independent Web Developer
            </span>
          </a>

          {/* Desktop Navigation Link */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#work" className="text-foreground/80 hover:text-brand-indigo transition-colors">Work</a>
            <a href="#services" className="text-foreground/80 hover:text-brand-indigo transition-colors">Services</a>
            <a href="#process" className="text-foreground/80 hover:text-brand-indigo transition-colors">Process</a>
            <a href="#pricing" className="text-foreground/80 hover:text-brand-indigo transition-colors">Pricing</a>
            <a href="#about" className="text-foreground/80 hover:text-brand-indigo transition-colors">About</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-none text-xs font-semibold uppercase tracking-wider text-white bg-brand-indigo hover:bg-brand-indigo-hover transition-colors"
            >
              Discuss Your Project
              <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#FCFAF7] border-b border-border-editorial px-6 py-8 flex flex-col space-y-6 shadow-md transition-all duration-300">
            <nav className="flex flex-col space-y-4 text-base font-medium">
              <a 
                href="#work" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-brand-indigo py-2 border-b border-border-editorial"
              >
                Work
              </a>
              <a 
                href="#services" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-brand-indigo py-2 border-b border-border-editorial"
              >
                Services
              </a>
              <a 
                href="#process" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-brand-indigo py-2 border-b border-border-editorial"
              >
                Process
              </a>
              <a 
                href="#pricing" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-brand-indigo py-2 border-b border-border-editorial"
              >
                Pricing
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-brand-indigo py-2 border-b border-border-editorial"
              >
                About
              </a>
            </nav>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3.5 rounded-none text-xs font-semibold uppercase tracking-wider text-white bg-brand-indigo hover:bg-brand-indigo-hover text-center"
            >
              Discuss Your Project
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-24 border-b border-border-editorial">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Headline and Copy */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              
              {/* Subtle Tag */}
              <div className="inline-flex items-center space-x-2 text-brand-rust mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-rust"></span>
                <span className="text-xs uppercase font-bold tracking-widest font-sans">
                  Available for Remote Projects Across India
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.08] mb-5">
                Websites built to help your business get <span className="italic font-normal text-brand-indigo">noticed</span>, <span className="italic font-normal text-brand-indigo">trusted</span>, and <span className="italic font-normal text-brand-indigo">contacted</span>.
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed max-w-2xl mb-6">
                Sai Gowtham designs and develops fast, modern, and SEO-friendly websites for businesses across India — from local service companies and real estate agencies to growing brands and custom software. Handled completely remotely with absolute clarity.
              </p>

              {/* Dual CTAs & Trust Strip */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-indigo hover:bg-brand-indigo-hover text-white text-sm font-semibold uppercase tracking-wider transition-colors shadow-md text-center"
                >
                  Discuss Your Project
                  <MessageSquare className="ml-2 h-4 w-4 fill-white/10" />
                </a>
                <a 
                  href="#work"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-card-bg text-foreground border border-border-editorial text-sm font-semibold uppercase tracking-wider transition-colors text-center"
                >
                  View My Work
                </a>
              </div>

              {/* Trust statement strip */}
              <div className="border-t border-border-editorial pt-6 flex flex-wrap gap-y-3 gap-x-8 text-xs text-foreground/60 uppercase tracking-widest font-semibold">
                <div className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-brand-rust" />
                  Clear Pricing
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-brand-rust" />
                  Direct Communication
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-brand-rust" />
                  Fast Delivery
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Presentation */}
            <div className="lg:col-span-6 flex items-center justify-center w-full mt-12 lg:mt-0">
              <div className="relative w-full aspect-[4/3] max-w-[600px] lg:max-w-none">
                <Image 
                  src="/Hero-image.png" 
                  alt="Responsive Web Design Showcase" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="bg-white py-12 border-b border-border-editorial">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="flex flex-col border-l-2 border-brand-indigo pl-4">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Full-Stack Development</span>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Frontend, backend, databases, and hosting setups handled end-to-end.
              </p>
            </div>
            
            <div className="flex flex-col border-l-2 border-brand-indigo pl-4">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Direct Communication</span>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Work directly with the developer building your site. No agency managers.
              </p>
            </div>
            
            <div className="flex flex-col border-l-2 border-brand-indigo pl-4">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Built for Performance</span>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Speed-optimized and mobile-responsive websites to load instantly.
              </p>
            </div>
            
            <div className="flex flex-col border-l-2 border-brand-indigo pl-4">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Across India</span>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Available for remote consultation and projects all over India.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="py-24 border-b border-border-editorial">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
              Selected Work
            </h2>
            <p className="text-base md:text-lg text-foreground/60 max-w-2xl font-light">
              A selection of websites and applications designed and developed to solve real-world problems.
            </p>
          </div>

          {/* Projects Container */}
          <div className="space-y-24">
            
            {/* PROJECT 1 - LD REAL ESTATES (Primary Commercial Case Study) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Info Column */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="text-xs uppercase tracking-wider text-brand-rust font-bold mb-2 block">
                  Real Estate Business Website
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-normal leading-tight text-foreground mb-4">
                  LD Real Estates
                </h3>
                <p className="text-foreground/70 font-light mb-6 leading-relaxed">
                  A modern, performant real estate platform built to help customers discover properties, view important details, and contact the business easily. Specially optimized for fast search on mobile networks.
                </p>
                
                {/* Feature Tags */}
                <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 mb-8 text-xs text-foreground/80 font-medium">
                  <li className="flex items-center">
                    <Check className="h-3.5 w-3.5 mr-2 text-brand-indigo" />
                    Property listings
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3.5 w-3.5 mr-2 text-brand-indigo" />
                    Search and browsing
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3.5 w-3.5 mr-2 text-brand-indigo" />
                    Mobile responsive design
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3.5 w-3.5 mr-2 text-brand-indigo" />
                    Direct WhatsApp enquiry
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3.5 w-3.5 mr-2 text-brand-indigo" />
                    Fast loading performance
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3.5 w-3.5 mr-2 text-brand-indigo" />
                    SEO-friendly structure
                  </li>
                </ul>

                {/* Live Link CTA */}
                <div className="pt-2">
                  <a 
                    href="https://ldrealestates.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-brand-indigo text-brand-indigo hover:bg-brand-indigo hover:text-white transition-all text-xs font-semibold uppercase tracking-wider"
                  >
                    View Live Website
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Visual Mockup Column */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative w-full aspect-[16/10] min-h-[280px] rounded-lg border border-border-editorial overflow-hidden shadow-lg">
                  <Image 
                    src="/LD.png" 
                    alt="LD Real Estates Live Preview" 
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>

            <hr className="border-border-editorial" />

          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-white border-b border-border-editorial">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
              What I Can Build for Your Business
            </h2>
            <p className="text-base md:text-lg text-foreground/60 max-w-2xl font-light">
              End-to-end consulting, design, development, and launch services for small businesses and growing brands in India.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-[#FCFAF7] border-editorial p-8 flex flex-col justify-between transition-transform hover:-translate-y-1 hover:bg-[#FAF6F0] duration-300"
              >
                <div>
                  <h3 className="font-serif text-2xl font-normal text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm text-foreground/70 font-light leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>
                
                {/* Service Bullet details */}
                <div className="border-t border-border-editorial/60 pt-4 flex flex-col space-y-2">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center text-xs text-brand-indigo font-semibold tracking-wide uppercase">
                      <span className="w-1 h-1 bg-brand-rust mr-2 rounded-full"></span>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY WORK WITH ME (Differentiator) */}
      <section className="py-24 border-b border-border-editorial">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Header */}
            <div className="lg:col-span-5">
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground leading-tight mb-6">
                Agency-quality execution without the agency complexity.
              </h2>
              <p className="text-foreground/60 font-light leading-relaxed mb-8">
                Hiring an agency means paying for project managers, account executives, and office overhead. By working directly with an independent full-stack developer, you get direct collaboration, transparent pricing, and the developer building your project handling your calls.
              </p>
              
              <div className="pt-2">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand-indigo hover:bg-brand-indigo-hover text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Schedule A Call
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right List */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-8">
              
              <div className="border-b border-border-editorial/60 pb-6">
                <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-2">
                  You Work Directly With Me
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  No communication gap. The same person who understands your business goals will write every line of your website's code.
                </p>
              </div>

              <div className="border-b border-border-editorial/60 pb-6">
                <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-2">
                  Clear Scope and Pricing
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  Know exactly what is being built, when it will be delivered, and what it costs. No hidden fees or surprise developer invoices.
                </p>
              </div>

              <div className="border-b border-border-editorial/60 pb-6">
                <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-2">
                  Modern Technology
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  Websites built using high-performance setups (Next.js, Tailwind, Node.js) ensuring faster speeds and cleaner structures than typical drag-and-drop builders.
                </p>
              </div>

              <div className="border-b border-border-editorial/60 pb-6">
                <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-2">
                  Mobile-First Development
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  Over 75% of your customers browse on mobile. All sites are meticulously built to render beautifully and load fast on 4G/5G mobile grids.
                </p>
              </div>

              <div className="pb-6">
                <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-2">
                  Support After Launch
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  From deploying to production to hookups for custom domain names and post-launch maintenance, I'll be there to help resolve issues.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* PROCESS SECTION (Asymmetric Editorial Timeline) */}
      <section id="process" className="py-24 bg-white border-b border-border-editorial">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
              How We Work Together
            </h2>
            <p className="text-base md:text-lg text-foreground/60 max-w-2xl font-light">
              A transparent, 4-step development process focused on business outcomes, speed, and clear check-ins.
            </p>
          </div>

          {/* Process Timeline Rows */}
          <div className="border-t border-border-editorial">
            
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-12 border-b border-border-editorial items-start gap-6">
              <div className="md:col-span-4 flex items-baseline space-x-4">
                <span className="font-serif text-5xl font-extralight text-brand-rust/30 tracking-tight">01</span>
                <h3 className="font-serif text-2xl font-normal text-foreground">Understand</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-light max-w-2xl">
                  We schedule an initial chat to understand your business, identify who your target customers are, map out necessary features, and define the website's ultimate goal (capturing leads, bookings, or showing portfolio).
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Business discovery</span>
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Feature mapping</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-12 border-b border-border-editorial items-start gap-6">
              <div className="md:col-span-4 flex items-baseline space-x-4">
                <span className="font-serif text-5xl font-extralight text-brand-rust/30 tracking-tight">02</span>
                <h3 className="font-serif text-2xl font-normal text-foreground">Plan & Design</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-light max-w-2xl">
                  I map out the content structure, copy hierarchy, website navigation flow, and visual direction. You approve the mockups and layout scheme before any coding begins, ensuring absolute alignment.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Content outline</span>
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Wireframes</span>
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Design direction</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-12 border-b border-border-editorial items-start gap-6">
              <div className="md:col-span-4 flex items-baseline space-x-4">
                <span className="font-serif text-5xl font-extralight text-brand-rust/30 tracking-tight">03</span>
                <h3 className="font-serif text-2xl font-normal text-foreground">Build & Review</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-light max-w-2xl">
                  I write clean, fast, and responsive code (using Next.js and Tailwind). I'll provide you with a private review link so you can browse the in-progress website on your mobile and desktop, suggesting adjustments.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase font-sans">Custom React/Next code</span>
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Private testing link</span>
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Feedback loops</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-12 border-b border-border-editorial items-start gap-6">
              <div className="md:col-span-4 flex items-baseline space-x-4">
                <span className="font-serif text-5xl font-extralight text-brand-rust/30 tracking-tight">04</span>
                <h3 className="font-serif text-2xl font-normal text-foreground">Launch & Support</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-light max-w-2xl">
                  I wire up your domain (e.g., yourbusiness.in), configure SSL certificates, deploy the site live to fast servers, register it on Google Search Console, and hand over deployment access along with post-launch guide notes.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase font-sans">Domain pointing</span>
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase font-sans">Google index submission</span>
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Documentation notes</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 border-b border-border-editorial">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
              Transparent Project Pricing
            </h2>
            <p className="text-base md:text-lg text-foreground/60 font-light">
              Clear, upfront budgets matching your requirements. No hourly estimations, just fixed pricing per project scope.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Package 1: Starter */}
            <div className="bg-[#FAF7F2] border-editorial p-8 flex flex-col justify-between shadow-xs relative">
              <div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-muted-foreground mb-4">Starter Website</h3>
                <div className="flex items-baseline mb-3">
                  <span className="text-2xl font-semibold text-foreground/70 mr-1">Starting at</span>
                  <span className="text-4xl font-serif font-medium text-foreground">₹7,999</span>
                </div>
                <p className="text-xs text-foreground/60 leading-relaxed font-light mb-8 border-b border-border-editorial pb-4">
                  Suitable for local businesses, cafes, clinics, or professionals who need a clean, focused, high-speed single-page presence.
                </p>
                
                <ul className="space-y-3.5 mb-8 text-xs text-foreground/80">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    Professional one-page website
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    Mobile responsive design
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    WhatsApp instant chat integration
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    Contact information & Map integration
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    Basic technical SEO foundations
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    Production deployment assistance
                  </li>
                </ul>
              </div>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 bg-transparent hover:bg-white border border-border-editorial text-foreground font-semibold uppercase tracking-wider text-xs transition-colors"
              >
                Discuss Starter Project
              </a>
            </div>

            {/* Package 2: Business (Featured) */}
            <div className="bg-[#FAF7F2] border-2 border-brand-indigo p-8 flex flex-col justify-between shadow-md relative">
              {/* Popular Tag */}
              <div className="absolute -top-3.5 left-6 bg-brand-indigo text-white text-[9px] uppercase font-bold tracking-widest px-3 py-1">
                Most Popular
              </div>

              <div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-brand-indigo mb-4">Business Website</h3>
                <div className="flex items-baseline mb-3">
                  <span className="text-2xl font-semibold text-brand-indigo mr-1">Starting at</span>
                  <span className="text-4xl font-serif font-medium text-brand-indigo">₹14,999</span>
                </div>
                <p className="text-xs text-foreground/60 leading-relaxed font-light mb-8 border-b border-border-editorial pb-4">
                  For growing businesses, real estate agents, manufacturers, or hospitality venues requiring a comprehensive website.
                </p>
                
                <ul className="space-y-3.5 mb-8 text-xs text-foreground/80">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-indigo shrink-0" />
                    <strong>Up to 5 core pages</strong> (Home, About, Services, Catalogue, Contact)
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-indigo shrink-0" />
                    Custom-tailored responsive design
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-indigo shrink-0" />
                    Custom inquiry/contact forms
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-indigo shrink-0" />
                    Dynamic galleries or product listings
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-indigo shrink-0" />
                    Rigorous technical SEO (schema + sitemaps)
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-indigo shrink-0" />
                    Google Search Console submission
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-indigo shrink-0" />
                    Deployment & custom domain connection
                  </li>
                </ul>
              </div>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 bg-brand-indigo hover:bg-brand-indigo-hover text-white font-semibold uppercase tracking-wider text-xs transition-colors"
              >
                Discuss Business Project
              </a>
            </div>

            {/* Package 3: Custom Application */}
            <div className="bg-[#FAF7F2] border-editorial p-8 flex flex-col justify-between shadow-xs relative">
              <div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-muted-foreground mb-4">Custom Web App</h3>
                <div className="flex items-baseline mb-3">
                  <span className="text-4xl font-serif font-medium text-foreground">Custom Quote</span>
                </div>
                <p className="text-xs text-foreground/60 leading-relaxed font-light mb-8 border-b border-border-editorial pb-4">
                  For startups, platforms, and businesses requiring customized database-backed logic or dynamic portal tools.
                </p>
                
                <ul className="space-y-3.5 mb-8 text-xs text-foreground/80">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    User Authentication (Google, email logins)
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    Dynamic dashboards & Admin portal
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    Custom Database architecture (MongoDB/PostgreSQL)
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    File upload workflows (PDF, images, receipts)
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    External API integrations (Payment, Maps, AI)
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    Secure server configurations & WebSockets
                  </li>
                </ul>
              </div>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 bg-transparent hover:bg-white border border-border-editorial text-foreground font-semibold uppercase tracking-wider text-xs transition-colors"
              >
                Request Custom Quote
              </a>
            </div>

          </div>

          {/* Pricing notes */}
          <div className="mt-12 max-w-4xl mx-auto border-t border-border-editorial/60 pt-6 text-center">
            <p className="text-xs text-foreground/60 leading-relaxed">
              <strong>Please Note:</strong> Final pricing depends entirely on project requirements, features, and precise scope. Custom domain registration, premium third-party service fees, and cloud hosting infrastructure fees may be billed separately where applicable.
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white border-b border-border-editorial">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Col */}
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-wider text-brand-rust font-bold mb-2 block">
                The developer behind the work.
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground leading-tight mb-6">
                Sai Gowtham
              </h2>
              <div className="w-16 h-0.5 bg-brand-indigo mb-6"></div>
              <p className="text-sm text-foreground/60 leading-relaxed font-light mb-6">
                Full-Stack Developer based in Durgapur, West Bengal. Available for remote projects and consultancies anywhere across India.
              </p>
              <div className="flex items-center text-xs text-foreground/70 font-semibold">
                <MapPin className="h-4 w-4 text-brand-rust mr-1.5" />
                NIT Durgapur, West Bengal · India
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-7 space-y-6 text-foreground/80 leading-relaxed font-light text-sm md:text-base">
              <p>
                I am a full-stack web developer and B.Tech student at <strong>NIT Durgapur</strong>, dedicated to building practical, high-quality, and SEO-friendly websites. I enjoy translating business objectives into clean, performant code that helps companies make a professional impression.
              </p>
              <p>
                My experience covers the entire lifecycle of web applications—including drafting responsive user interfaces, writing secure APIs, designing database models, configuring servers, and deploying assets to production cloud platforms.
              </p>
              <p>
                Rather than working with complicated agency hierarchies, I consult directly with business owners, builders, startups, and clinics. This collaborative workflow ensures we build exactly what you need without paying for agency overhead.
              </p>

              {/* Natural technology mention */}
              <div className="border-t border-border-editorial/60 pt-6">
                <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground block mb-4">
                  Tech Stack Integration
                </span>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  I build projects utilizing modern, reliable, and secure technologies tailored to project needs: <strong className="font-semibold text-foreground/90">React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Prisma ORM, Tailwind CSS, Docker, AWS, and Redis</strong>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT YOU CAN EXPECT (Testimonials Alternative) */}
      <section className="py-24 border-b border-border-editorial">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-rust font-bold block mb-2">Honest Work Commitments</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground">
              What You Can Expect
            </h2>
          </div>

          {/* Grid of Commitments */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-[#FAF7F2] border-editorial p-6 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-3 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-rust shrink-0" />
                  Clear Communication
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  I explain technical problems in simple terms. You will receive clear responses to your questions and updates on progress.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF7F2] border-editorial p-6 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-3 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-rust shrink-0" />
                  Transparent Project Scope
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  Before starting, we define exactly what will be built in writing. Any adjustments to the scope are discussed beforehand.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF7F2] border-editorial p-6 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-3 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-rust shrink-0" />
                  Regular Progress Updates
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  You'll have access to a private testing server URL where you can view updates as the code is written, keeping you in control.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF7F2] border-editorial p-6 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-3 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-rust shrink-0" />
                  Responsive Development
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  I construct clean code structures that load quickly on mobile devices, ensuring visitors can reach your business on any network.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF7F2] border-editorial p-6 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-3 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-rust shrink-0" />
                  Direct Developer Access
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  You work directly with the person writing your project's code. Calls or messages are handled directly with me.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF7F2] border-editorial p-6 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-3 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-rust shrink-0" />
                  Post-Launch Support
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  I provide deployment handoff sheets and remain available for support, maintenance setups, or feature updates.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white border-b border-border-editorial">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-foreground/60 font-light">
              Clear answers to help you understand how freelance web projects work.
            </p>
          </div>

          {/* Accordion List */}
          <div className="border-t border-border-editorial divide-y divide-border-editorial">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-5">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center text-left py-2 font-medium text-foreground hover:text-brand-indigo transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm md:text-base font-semibold pr-4">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-brand-rust shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="mt-3 text-xs md:text-sm text-foreground/70 font-light leading-relaxed pr-8 animate-fadeIn">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-brand-indigo text-white border-b border-border-editorial relative overflow-hidden">
        {/* Background texture line */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs uppercase tracking-widest text-brand-rust-light font-bold block mb-4">
            LET'S DISCUSS YOUR PROJECT
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8 leading-[1.1]">
            Have a website idea or a business that needs a better online presence?
          </h2>
          <p className="text-base md:text-lg text-brand-indigo-light font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Tell me about your business, what features you need, and your approximate budget. I'll help you understand the most practical and secure way to build it.
          </p>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-indigo hover:bg-brand-indigo-light text-sm font-bold uppercase tracking-wider transition-colors shadow-lg"
            >
              <MessageSquare className="mr-2 h-4.5 w-4.5 fill-brand-indigo/10 text-brand-indigo" />
              WhatsApp: +91 95023 23161
            </a>
            <a 
              href={emailUrl}
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-indigo-hover text-white border border-white/20 hover:bg-slate-900 text-sm font-bold uppercase tracking-wider transition-colors"
            >
              <Mail className="mr-2 h-4.5 w-4.5 text-white" />
              Send An Email
            </a>
          </div>

          {/* Social details */}
          <div className="flex justify-center items-center space-x-8 text-xs uppercase tracking-wider font-semibold text-brand-indigo-light">
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors"
            >
              <Github className="h-4 w-4 mr-1.5" />
              GitHub
            </a>
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors"
            >
              <Instagram className="h-4 w-4 mr-1.5" />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-[#FAF7F2] text-foreground/80 border-t border-border-editorial">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-border-editorial/60">
            
            {/* Branding Column */}
            <div className="md:col-span-5 flex flex-col space-y-4">
              <a href="#" className="flex flex-col">
                <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                  Sai Gowtham
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold -mt-1">
                  Freelance Full-Stack Developer
                </span>
              </a>
              <p className="text-xs text-foreground/60 leading-relaxed font-light max-w-sm">
                Designing and building high-performance, conversion-focused websites and applications for business owners and startups across India.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-foreground mb-4">Navigation</h4>
              <ul className="space-y-2 text-xs font-medium">
                <li><a href="#work" className="text-foreground/75 hover:text-brand-indigo transition-colors">Work</a></li>
                <li><a href="#services" className="text-foreground/75 hover:text-brand-indigo transition-colors">Services</a></li>
                <li><a href="#process" className="text-foreground/75 hover:text-brand-indigo transition-colors">Process</a></li>
                <li><a href="#pricing" className="text-foreground/75 hover:text-brand-indigo transition-colors">Pricing</a></li>
                <li><a href="#about" className="text-foreground/75 hover:text-brand-indigo transition-colors">About</a></li>
                <li><a href="#pricing" className="text-foreground/75 hover:text-brand-indigo transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contacts Column */}
            <div className="md:col-span-4 flex flex-col space-y-4">
              <h4 className="text-xs uppercase font-bold tracking-wider text-foreground">Direct Access</h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-center text-foreground/70">
                  <MessageSquare className="h-4 w-4 text-brand-rust mr-2" />
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-indigo transition-colors">
                    +91 95023 23161
                  </a>
                </li>
                <li className="flex items-center text-foreground/70">
                  <Mail className="h-4 w-4 text-brand-rust mr-2" />
                  <a href={emailUrl} className="hover:text-brand-indigo transition-colors">
                    gowtham241206@gmail.com
                  </a>
                </li>
                <li className="flex items-center text-foreground/70">
                  <Instagram className="h-4 w-4 text-brand-rust mr-2" />
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-indigo transition-colors">
                    @gowtham___2416
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright row */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-foreground/50">
            <span className="mt-2 sm:mt-0 font-light">Handcrafted by Sai Gowtham.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
