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
  // Navigation & UI states
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  // FAQ states
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Monitor scroll to update header styles and trigger scroll reveal animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.08,
      rootMargin: "0px 0px -30px 0px"
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Pre-filled WhatsApp link
  const whatsappNumber = "919502323161";
  const whatsappMessage = "Hi Gowtham, I found your portfolio and would like to discuss a web project for my business.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const emailUrl = "mailto:gowtham241206@gmail.com";
  const githubUrl = "https://github.com/Gowtham-2412";
  const instagramUrl = "https://instagram.com/gowtham___2416";

  const faqs = [
    {
      q: "How much does a website cost?",
      a: "Starter websites start at $120 (or ₹9,999 for Indian clients), and full multi-page business websites start at $250 (or ₹19,999). Custom web applications and portals are quoted based on specific scope. After our initial call, I provide a transparent, fixed-price proposal with zero hidden fees."
    },
    {
      q: "Do you work with international clients outside India?",
      a: "Yes! I regularly partner with founders, business owners, and agency clients across North America, Europe, the Middle East, Australia, and Asia. All projects are managed seamlessly via async updates (Loom, GitHub, Slack) and flexible live video calls (Zoom, Google Meet)."
    },
    {
      q: "What payment methods do you accept?",
      a: "For international clients, I accept Wise, Stripe invoices, PayPal, and international bank wire transfers. For Indian clients, I accept UPI, Net Banking, and Razorpay. Milestone-based payments (e.g., 50% upfront, 50% upon launch) ensure mutual security."
    },
    {
      q: "How long does a website take to build?",
      a: "Landing pages and starter websites take 5–10 business days. Larger multi-page platforms or custom web applications take 2–4 weeks. Clear delivery milestones are established in writing before work begins."
    },
    {
      q: "Do I own 100% of the code and design?",
      a: "Yes, completely. Upon final payment, 100% intellectual property rights, source code, design assets, and deployment access are transferred directly to you. No vendor lock-in."
    },
    {
      q: "Will my website work perfectly on mobile phones?",
      a: "Every project is built mobile-first. It is optimized to render crisp, load fast under 2 seconds, and perform smoothly across smartphones, tablets, laptops, and ultra-wide screens globally."
    },
    {
      q: "Can you help with domains, deployment, and ongoing maintenance?",
      a: "Yes. I handle end-to-end setup including custom domain DNS routing, SSL certificates, production deployment on Vercel or AWS, and ongoing technical support or feature updates when needed."
    }
  ];

  const services = [
    {
      title: "High-Converting Business Websites",
      description: "Editorial, ultra-fast websites designed to establish authority, present products or services clearly, and drive international & local inquiries.",
      features: ["Global & Local SEO", "Custom editorial design", "Mobile-first performance"]
    },
    {
      title: "Full-Stack Web Applications",
      description: "Scalable SaaS products, portals, and web tools built with Next.js, React, Node.js, and secure cloud databases (PostgreSQL, MongoDB).",
      features: ["User authentication", "Scalable DB architecture", "API & Webhook integrations"]
    },
    {
      title: "Global E-Commerce Platforms",
      description: "Modern online stores built with seamless payment gateway integrations (Stripe, PayPal, Razorpay), multi-currency support, and fast checkout flows.",
      features: ["Multi-currency checkout", "Global payment security", "Product catalog management"]
    },
    {
      title: "Website Redesign & Speed Tuning",
      description: "Transform sluggish, dated sites into modern, high-speed web experiences with improved Core Web Vitals and higher conversion rates.",
      features: ["Core Web Vitals tuning", "Modern UI overhaul", "Zero SEO traffic disruption"]
    },
    {
      title: "Technical SEO & Schema Setup",
      description: "Comprehensive technical SEO foundations including JSON-LD structured data, XML sitemaps, canonical tags, and search engine indexing.",
      features: ["Structured Data Schema", "Fast page speeds", "Google Search Console indexing"]
    },
    {
      title: "Cloud Deployment & Maintenance",
      description: "Production setups on modern platforms (Vercel, AWS), custom domain DNS routing, SSL security, and ongoing technical maintenance.",
      features: ["SSL & Security headers", "Global CDN distribution", "Zero-downtime deployment"]
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

          {/* Desktop CTA & Currency Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="inline-flex items-center bg-[#F3EFEA] p-1 rounded-sm border border-border-editorial text-xs font-semibold">
              <button 
                onClick={() => setCurrency("USD")}
                className={`px-2.5 py-1 transition-all ${currency === "USD" ? "bg-brand-indigo text-white shadow-xs" : "text-foreground/70 hover:text-foreground"}`}
              >
                USD ($)
              </button>
              <button 
                onClick={() => setCurrency("INR")}
                className={`px-2.5 py-1 transition-all ${currency === "INR" ? "bg-brand-indigo text-white shadow-xs" : "text-foreground/70 hover:text-foreground"}`}
              >
                INR (₹)
              </button>
            </div>

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
            <div className="flex items-center justify-between pb-2 border-b border-border-editorial">
              <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Currency</span>
              <div className="inline-flex items-center bg-[#F3EFEA] p-1 rounded-sm border border-border-editorial text-xs font-semibold">
                <button 
                  onClick={() => setCurrency("USD")}
                  className={`px-3 py-1 transition-all ${currency === "USD" ? "bg-brand-indigo text-white shadow-xs" : "text-foreground/70"}`}
                >
                  USD ($)
                </button>
                <button 
                  onClick={() => setCurrency("INR")}
                  className={`px-3 py-1 transition-all ${currency === "INR" ? "bg-brand-indigo text-white shadow-xs" : "text-foreground/70"}`}
                >
                  INR (₹)
                </button>
              </div>
            </div>

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
            <div className="lg:col-span-6 flex flex-col justify-center reveal-on-scroll">
              
              {/* Global Availability Tag */}
              <div className="inline-flex items-center space-x-2.5 text-brand-rust mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs uppercase font-bold tracking-widest font-sans">
                  Available for Remote Projects Worldwide & India · EST, GMT & IST
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.08] mb-5">
                Websites & web apps built to make your business <span className="italic font-normal text-brand-indigo">stand out</span>, <span className="italic font-normal text-brand-indigo">build trust</span>, and <span className="italic font-normal text-brand-indigo">convert</span>.
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed max-w-2xl mb-6">
                Sai Gowtham engineers fast, modern, and SEO-friendly web experiences for startups, growing brands, and businesses across the US, Europe, Middle East, and India — delivered with direct collaboration, total transparency, and zero agency bloat.
              </p>

              {/* Dual CTAs & Trust Strip */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-brand-indigo hover:bg-brand-indigo-hover text-white text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center"
                >
                  Discuss Your Project
                  <MessageSquare className="ml-2 h-4 w-4 fill-white/10 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#work"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-card-bg text-foreground border border-border-editorial hover:border-brand-indigo/40 text-sm font-semibold uppercase tracking-wider transition-all duration-300 text-center"
                >
                  View My Work
                </a>
              </div>

              {/* Trust statement strip */}
              <div className="border-t border-border-editorial pt-6 flex flex-wrap gap-y-3 gap-x-8 text-xs text-foreground/60 uppercase tracking-widest font-semibold">
                <div className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-brand-rust" />
                  Fixed Budget Quotes
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-brand-rust" />
                  Direct Developer Access
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-brand-rust" />
                  100% Code Ownership
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Presentation with Gentle Float */}
            <div className="lg:col-span-6 flex items-center justify-center w-full mt-12 lg:mt-0 reveal-on-scroll">
              <div className="relative w-full aspect-[4/3] max-w-[600px] lg:max-w-none animate-float">
                <Image 
                  src="/Hero-image.png" 
                  alt="Responsive Web Design Showcase" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain drop-shadow-md"
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
            
            <div className="flex flex-col border-l-2 border-brand-indigo pl-4 reveal-on-scroll group hover:translate-x-1 transition-transform duration-300">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1 group-hover:text-brand-indigo transition-colors">Global & Remote First</span>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Async video updates & flexible sync calls adapted to US, EU, and IST timezones.
              </p>
            </div>
            
            <div className="flex flex-col border-l-2 border-brand-indigo pl-4 reveal-on-scroll group hover:translate-x-1 transition-transform duration-300">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1 group-hover:text-brand-indigo transition-colors">Direct Developer Access</span>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Work directly with the engineer building your site. Zero middle management.
              </p>
            </div>
            
            <div className="flex flex-col border-l-2 border-brand-indigo pl-4 reveal-on-scroll group hover:translate-x-1 transition-transform duration-300">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1 group-hover:text-brand-indigo transition-colors">High-Speed Engineering</span>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Sub-2-second loads, mobile-first layouts, and clean Next.js architecture.
              </p>
            </div>
            
            <div className="flex flex-col border-l-2 border-brand-indigo pl-4 reveal-on-scroll group hover:translate-x-1 transition-transform duration-300">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1 group-hover:text-brand-indigo transition-colors">Full IP Transfer</span>
              <p className="text-sm text-foreground/80 leading-relaxed">
                You own 100% of your source code, design assets, and cloud deployment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="py-24 border-b border-border-editorial">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="mb-16 reveal-on-scroll">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center reveal-on-scroll">
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
          <div className="mb-16 reveal-on-scroll">
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
              What I Can Build for Your Business
            </h2>
            <p className="text-base md:text-lg text-foreground/60 max-w-2xl font-light">
              End-to-end consulting, design, engineering, and launch services for global startups and growing brands.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-[#FCFAF7] border-editorial p-8 flex flex-col justify-between card-interactive reveal-on-scroll group"
              >
                <div>
                  <h3 className="font-serif text-2xl font-normal text-foreground mb-4 group-hover:text-brand-indigo transition-colors">
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
                      <span className="w-1.5 h-1.5 bg-brand-rust mr-2 rounded-full group-hover:scale-125 transition-transform"></span>
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
            <div className="lg:col-span-5 reveal-on-scroll">
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground leading-tight mb-6">
                Agency-grade execution without the agency overhead or communication lag.
              </h2>
              <p className="text-foreground/60 font-light leading-relaxed mb-8">
                Hiring an agency means paying for account executives, project managers, and overhead. By working directly with an independent full-stack developer, you get direct technical collaboration, transparent fixed pricing, fast async updates, and 100% code ownership.
              </p>
              
              <div className="pt-2">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-6 py-3.5 bg-brand-indigo hover:bg-brand-indigo-hover text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Schedule A Call
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right List */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-8">
              
              <div className="border-b border-border-editorial/60 pb-6 reveal-on-scroll group hover:translate-x-1 transition-transform duration-300">
                <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-2 group-hover:text-brand-indigo transition-colors">
                  Direct Developer Access
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  Zero middle management. The engineer building your product speaks directly with you, ensuring your business goals translate directly into code.
                </p>
              </div>

              <div className="border-b border-border-editorial/60 pb-6 reveal-on-scroll group hover:translate-x-1 transition-transform duration-300">
                <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-2 group-hover:text-brand-indigo transition-colors">
                  Fixed Pricing & Clear Scope
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  Know exactly what is being built, when it will be delivered, and what it costs. Transparent milestone payments with zero surprise invoices.
                </p>
              </div>

              <div className="border-b border-border-editorial/60 pb-6 reveal-on-scroll group hover:translate-x-1 transition-transform duration-300">
                <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-2 group-hover:text-brand-indigo transition-colors">
                  Async & Timezone Adaptability
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  Work efficiently across EST, GMT/CET, and IST. Clear Loom video walkthroughs, GitHub progress preview links, and responsive messages.
                </p>
              </div>

              <div className="border-b border-border-editorial/60 pb-6 reveal-on-scroll group hover:translate-x-1 transition-transform duration-300">
                <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-2 group-hover:text-brand-indigo transition-colors">
                  Modern Tech Stack
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  High-performance web applications built with Next.js 15, TypeScript, React, Tailwind, and Node.js for lightning speed and long-term scalability.
                </p>
              </div>

              <div className="pb-6 reveal-on-scroll group hover:translate-x-1 transition-transform duration-300">
                <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-2 group-hover:text-brand-indigo transition-colors">
                  Full IP & Code Ownership
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  You retain 100% intellectual property, repository access, design assets, and cloud deployment rights upon project completion.
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
          <div className="mb-20 reveal-on-scroll">
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
              How We Work Together
            </h2>
            <p className="text-base md:text-lg text-foreground/60 max-w-2xl font-light">
              A transparent 4-step workflow designed for international and domestic clients to move fast with total clarity.
            </p>
          </div>

          {/* Process Timeline Rows */}
          <div className="border-t border-border-editorial">
            
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-12 border-b border-border-editorial items-start gap-6 reveal-on-scroll group hover:bg-[#FAF7F2]/60 px-4 -mx-4 transition-colors duration-300 rounded-sm">
              <div className="md:col-span-4 flex items-baseline space-x-4">
                <span className="font-serif text-5xl font-extralight text-brand-rust/30 group-hover:text-brand-rust transition-colors duration-300 tracking-tight">01</span>
                <h3 className="font-serif text-2xl font-normal text-foreground group-hover:text-brand-indigo transition-colors">Discovery & Scope</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-light max-w-2xl">
                  We schedule a call or sync asynchronously to understand your business objectives, target audience, key functional requirements, and target launch timeline.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Business discovery</span>
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Fixed proposal</span>
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Milestone agreement</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-12 border-b border-border-editorial items-start gap-6 reveal-on-scroll group hover:bg-[#FAF7F2]/60 px-4 -mx-4 transition-colors duration-300 rounded-sm">
              <div className="md:col-span-4 flex items-baseline space-x-4">
                <span className="font-serif text-5xl font-extralight text-brand-rust/30 group-hover:text-brand-rust transition-colors duration-300 tracking-tight">02</span>
                <h3 className="font-serif text-2xl font-normal text-foreground group-hover:text-brand-indigo transition-colors">Architecture & Design</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-light max-w-2xl">
                  I map out the content structure, copy hierarchy, UX navigation, and editorial visual direction. You approve wireframes and design schemes before coding begins.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">UX wireframes</span>
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Design system</span>
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Content hierarchy</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-12 border-b border-border-editorial items-start gap-6 reveal-on-scroll group hover:bg-[#FAF7F2]/60 px-4 -mx-4 transition-colors duration-300 rounded-sm">
              <div className="md:col-span-4 flex items-baseline space-x-4">
                <span className="font-serif text-5xl font-extralight text-brand-rust/30 group-hover:text-brand-rust transition-colors duration-300 tracking-tight">03</span>
                <h3 className="font-serif text-2xl font-normal text-foreground group-hover:text-brand-indigo transition-colors">Engineering & Live Staging</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-light max-w-2xl">
                  I write high-speed Next.js and React code. You receive a live private staging link and Loom video updates so you can test real-time progress on mobile and desktop.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Next.js & React</span>
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Live preview staging</span>
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Async Loom reviews</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-12 border-b border-border-editorial items-start gap-6 reveal-on-scroll group hover:bg-[#FAF7F2]/60 px-4 -mx-4 transition-colors duration-300 rounded-sm">
              <div className="md:col-span-4 flex items-baseline space-x-4">
                <span className="font-serif text-5xl font-extralight text-brand-rust/30 group-hover:text-brand-rust transition-colors duration-300 tracking-tight">04</span>
                <h3 className="font-serif text-2xl font-normal text-foreground group-hover:text-brand-indigo transition-colors">Launch & Handoff</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-light max-w-2xl">
                  I configure your custom domain (e.g. yourbusiness.com or yourbusiness.in), set up SSL security, deploy to global CDN edge servers, submit structured sitemaps to Google Search Console, and hand over 100% repository access.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Global CDN deploy</span>
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">Google indexing</span>
                  <span className="text-[10px] bg-card-bg border border-border-editorial px-2.5 py-1 text-foreground/60 font-semibold uppercase">100% IP handoff</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 border-b border-border-editorial">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header with Currency Selector */}
          <div className="mb-16 text-center max-w-3xl mx-auto reveal-on-scroll">
            <span className="text-xs uppercase tracking-widest text-brand-rust font-bold block mb-2">Transparent Pricing</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
              Fixed Budgets. Zero Surprises.
            </h2>
            <p className="text-base md:text-lg text-foreground/60 font-light mb-8">
              Upfront milestone pricing for global startups and businesses. Toggle your preferred currency below.
            </p>

            {/* Interactive Currency Switcher */}
            <div className="inline-flex items-center bg-[#F3EFEA] p-1.5 rounded border border-border-editorial shadow-xs">
              <button 
                onClick={() => setCurrency("USD")}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-none ${currency === "USD" ? "bg-brand-indigo text-white shadow-sm" : "text-foreground/70 hover:text-foreground"}`}
              >
                USD ($ International)
              </button>
              <button 
                onClick={() => setCurrency("INR")}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-none ${currency === "INR" ? "bg-brand-indigo text-white shadow-sm" : "text-foreground/70 hover:text-foreground"}`}
              >
                INR (₹ India)
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Package 1: Starter */}
            <div className="bg-[#FAF7F2] border-editorial p-8 flex flex-col justify-between card-interactive reveal-on-scroll relative">
              <div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-muted-foreground mb-4">Starter Website</h3>
                <div className="flex items-baseline mb-3">
                  <span className="text-2xl font-semibold text-foreground/70 mr-1">Starting at</span>
                  <span className="text-4xl font-serif font-medium text-foreground">
                    {currency === "USD" ? "$120" : "₹9,999"}
                  </span>
                </div>
                <p className="text-xs text-foreground/60 leading-relaxed font-light mb-8 border-b border-border-editorial pb-4">
                  Ideal for independent professionals, consultants, or local service companies needing a clean, high-speed single-page web presence.
                </p>
                
                <ul className="space-y-3.5 mb-8 text-xs text-foreground/80">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    High-converting single page website
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    Mobile-first responsive design
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    Contact form & WhatsApp/Email integration
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    Technical SEO & Metadata setup
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    Fast global CDN deployment
                  </li>
                </ul>
              </div>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 bg-transparent hover:bg-white border border-border-editorial hover:border-brand-indigo text-foreground font-semibold uppercase tracking-wider text-xs transition-colors"
              >
                Discuss Starter Project
              </a>
            </div>

            {/* Package 2: Business (Featured) */}
            <div className="bg-[#FAF7F2] border-2 border-brand-indigo p-8 flex flex-col justify-between card-interactive reveal-on-scroll relative shadow-md">
              {/* Popular Tag */}
              <div className="absolute -top-3.5 left-6 bg-brand-indigo text-white text-[9px] uppercase font-bold tracking-widest px-3 py-1 shadow-xs">
                Most Popular
              </div>

              <div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-brand-indigo mb-4">Business Website</h3>
                <div className="flex items-baseline mb-3">
                  <span className="text-2xl font-semibold text-brand-indigo mr-1">Starting at</span>
                  <span className="text-4xl font-serif font-medium text-brand-indigo">
                    {currency === "USD" ? "$250" : "₹19,999"}
                  </span>
                </div>
                <p className="text-xs text-foreground/60 leading-relaxed font-light mb-8 border-b border-border-editorial pb-4">
                  For growing businesses, real estate firms, agencies, or startups requiring a multi-page editorial website.
                </p>
                
                <ul className="space-y-3.5 mb-8 text-xs text-foreground/80">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-indigo shrink-0" />
                    <strong>Up to 5 core pages</strong> (Home, About, Services, Catalogue, Contact)
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-indigo shrink-0" />
                    Custom-tailored editorial responsive UI
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-indigo shrink-0" />
                    Custom lead inquiry & contact forms
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-indigo shrink-0" />
                    Dynamic galleries or product listings
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-indigo shrink-0" />
                    Full JSON-LD Schema & XML Sitemaps
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-indigo shrink-0" />
                    Google Search Console indexing
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-indigo shrink-0" />
                    Custom domain setup & SSL security
                  </li>
                </ul>
              </div>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 bg-brand-indigo hover:bg-brand-indigo-hover text-white font-semibold uppercase tracking-wider text-xs transition-colors shadow-sm"
              >
                Discuss Business Project
              </a>
            </div>

            {/* Package 3: Custom Application */}
            <div className="bg-[#FAF7F2] border-editorial p-8 flex flex-col justify-between card-interactive reveal-on-scroll relative">
              <div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-muted-foreground mb-4">Custom Web App / Portal</h3>
                <div className="flex items-baseline mb-3">
                  <span className="text-4xl font-serif font-medium text-foreground">Custom Quote</span>
                </div>
                <p className="text-xs text-foreground/60 leading-relaxed font-light mb-8 border-b border-border-editorial pb-4">
                  For startups and platforms requiring complex full-stack web app logic, database schemas, dynamic dashboards, or payment gateways.
                </p>
                
                <ul className="space-y-3.5 mb-8 text-xs text-foreground/80">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    User Authentication (Google, OAuth, JWT)
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    Interactive Dashboards & Admin Portals
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    Database Architecture (PostgreSQL / MongoDB)
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    Payment Gateways (Stripe, PayPal, Razorpay)
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    External API & Webhook integrations
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2.5 text-brand-rust shrink-0" />
                    Scalable cloud infrastructure setup
                  </li>
                </ul>
              </div>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 bg-transparent hover:bg-white border border-border-editorial hover:border-brand-indigo text-foreground font-semibold uppercase tracking-wider text-xs transition-colors"
              >
                Request Custom Quote
              </a>
            </div>

          </div>

          {/* Payment Trust Badge Strip */}
          <div className="mt-12 border-t border-border-editorial/60 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-foreground/70 gap-4 reveal-on-scroll">
            <div className="flex items-center space-x-2 font-semibold uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4 text-brand-indigo" />
              <span>Accepted Payment Methods:</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 font-medium">
              <span className="bg-[#FAF7F2] border border-border-editorial px-3 py-1 rounded-xs hover:border-brand-indigo/40 transition-colors">Wise</span>
              <span className="bg-[#FAF7F2] border border-border-editorial px-3 py-1 rounded-xs hover:border-brand-indigo/40 transition-colors">Stripe</span>
              <span className="bg-[#FAF7F2] border border-border-editorial px-3 py-1 rounded-xs hover:border-brand-indigo/40 transition-colors">PayPal</span>
              <span className="bg-[#FAF7F2] border border-border-editorial px-3 py-1 rounded-xs hover:border-brand-indigo/40 transition-colors">Direct Wire Transfer</span>
              <span className="bg-[#FAF7F2] border border-border-editorial px-3 py-1 rounded-xs hover:border-brand-indigo/40 transition-colors">Razorpay (India)</span>
              <span className="bg-[#FAF7F2] border border-border-editorial px-3 py-1 rounded-xs hover:border-brand-indigo/40 transition-colors">UPI</span>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white border-b border-border-editorial">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Col */}
            <div className="lg:col-span-5 reveal-on-scroll">
              <span className="text-xs uppercase tracking-wider text-brand-rust font-bold mb-2 block">
                The engineer behind the work.
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground leading-tight mb-6">
                Sai Gowtham
              </h2>
              <div className="w-16 h-0.5 bg-brand-indigo mb-6"></div>
              <p className="text-sm text-foreground/60 leading-relaxed font-light mb-6">
                Freelance Full-Stack Developer based in India. Partnering remotely with startups, businesses, and agency teams across North America, Europe, Middle East, and Asia.
              </p>
              <div className="flex flex-col space-y-2 text-xs text-foreground/70 font-semibold">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-brand-rust mr-1.5 shrink-0" />
                  <span>NIT Durgapur, West Bengal · India</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-brand-rust mr-1.5 shrink-0" />
                  <span>Flexible Hours: EST, GMT/CET & IST Compatible</span>
                </div>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-7 space-y-6 text-foreground/80 leading-relaxed font-light text-sm md:text-base reveal-on-scroll">
              <p>
                I am a full-stack software engineer and B.Tech student at <strong>NIT Durgapur</strong>, dedicated to engineering practical, high-performance, and SEO-optimized web products. I specialize in translating business goals into clean, scalable TypeScript and Next.js applications that build immediate trust with visitors.
              </p>
              <p>
                My expertise spans the complete development lifecycle—from crafting responsive editorial user interfaces and secure REST/GraphQL APIs to architecting relational database models, managing cloud servers (Vercel, AWS), and optimizing Core Web Vitals.
              </p>
              <p>
                Instead of dealing with multi-layered agency hierarchies or unaccountable offshore teams, you collaborate directly with me. This direct technical partnership guarantees fast communication, transparent milestone pricing, and 100% intellectual property transfer.
              </p>

              {/* Technology stack list */}
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

      {/* WHAT YOU CAN EXPECT (Testimonials & Work Commitments) */}
      <section className="py-24 border-b border-border-editorial">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="mb-16 reveal-on-scroll">
            <span className="text-xs uppercase tracking-widest text-brand-rust font-bold block mb-2">Honest Work Commitments</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground">
              What You Can Expect
            </h2>
          </div>

          {/* Grid of Commitments */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-[#FAF7F2] border-editorial p-6 flex flex-col justify-between card-interactive reveal-on-scroll">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-3 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-rust shrink-0" />
                  Fluent Async Communication
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  Clear written English updates, detailed Loom videos, and progress tracking on GitHub and Slack so you never wonder about project status.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF7F2] border-editorial p-6 flex flex-col justify-between card-interactive reveal-on-scroll">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-3 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-rust shrink-0" />
                  Transparent Scope & Fixed Budgets
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  We define project scope and milestones in writing before work begins. Zero unexpected hourly bills or hidden development charges.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF7F2] border-editorial p-6 flex flex-col justify-between card-interactive reveal-on-scroll">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-3 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-rust shrink-0" />
                  Timezone Flexibility
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  Overlap hours available for live Zoom / Google Meet syncs during US East Coast (EST), European (GMT/CET), and Indian (IST) business hours.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF7F2] border-editorial p-6 flex flex-col justify-between card-interactive reveal-on-scroll">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-3 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-rust shrink-0" />
                  High-Speed Engineering
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  Clean code structures optimized to load under 2 seconds globally, ensuring your visitors on any network enjoy an instant experience.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF7F2] border-editorial p-6 flex flex-col justify-between card-interactive reveal-on-scroll">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-3 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-rust shrink-0" />
                  Direct Developer Access
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  You work directly with the person writing your project's code. Technical decisions are discussed straightforwardly with zero fluff.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF7F2] border-editorial p-6 flex flex-col justify-between card-interactive reveal-on-scroll">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-3 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-brand-rust shrink-0" />
                  100% IP & Post-Launch Handoff
                </h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-light">
                  You receive full ownership of source code repositories, design assets, and cloud deployment setups with clear handoff documentation.
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
          <div className="mb-16 text-center reveal-on-scroll">
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-foreground/60 font-light">
              Clear answers to help you understand how remote freelance web engineering works.
            </p>
          </div>

          {/* Accordion List */}
          <div className="border-t border-border-editorial divide-y divide-border-editorial reveal-on-scroll">
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
                      <ChevronUp className="h-5 w-5 text-brand-rust shrink-0 transition-transform" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 shrink-0 transition-transform" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="mt-3 text-xs md:text-sm text-foreground/70 font-light leading-relaxed pr-8 animate-accordion">
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

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal-on-scroll">
          <span className="text-xs uppercase tracking-widest text-brand-rust-light font-bold block mb-4">
            LET'S DISCUSS YOUR PROJECT
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8 leading-[1.1]">
            Ready to build a website or app that stands out globally?
          </h2>
          <p className="text-base md:text-lg text-brand-indigo-light font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Share your project goals, required features, or target launch date. I'll provide a clear technical recommendation and fixed proposal.
          </p>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-brand-indigo hover:bg-brand-indigo-light text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageSquare className="mr-2 h-4.5 w-4.5 fill-brand-indigo/10 text-brand-indigo group-hover:scale-110 transition-transform" />
              WhatsApp: +91 95023 23161
            </a>
            <a 
              href={emailUrl}
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-indigo-hover text-white border border-white/20 hover:bg-slate-900 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:border-white/40"
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
                Designing and building high-performance, conversion-focused websites and web applications for startups, founders, and businesses globally and in India.
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
            <span className="mt-2 sm:mt-0 font-light">Handcrafted by Sai Gowtham. Available for global remote projects.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
