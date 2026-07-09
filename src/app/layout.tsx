import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sai Gowtham | Freelance Full-Stack Web Developer & Consultant India",
  description: "Sai Gowtham designs and develops fast, modern, and SEO-friendly websites and web applications for businesses across India. Get direct developer communication, clear pricing, and fast delivery.",
  keywords: [
    "Freelance Web Developer India",
    "Full-Stack Web Developer India",
    "React Developer India",
    "Next.js Developer India",
    "Web Development Services India",
    "Real Estate Website Developer India",
    "Business Website Developer India",
    "Sai Gowtham",
    "NIT Durgapur Web Developer"
  ],
  authors: [{ name: "Sai Gowtham", url: "https://github.com/Gowtham-2412" }],
  creator: "Sai Gowtham",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://github.com/Gowtham-2412",
    title: "Sai Gowtham | Freelance Full-Stack Web Developer & Consultant India",
    description: "Sai Gowtham designs and develops fast, modern, and SEO-friendly websites and web applications for businesses across India. Get direct developer communication, clear pricing, and fast delivery.",
    siteName: "Sai Gowtham Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Gowtham | Freelance Full-Stack Web Developer & Consultant India",
    description: "Sai Gowtham designs and develops fast, modern, and SEO-friendly websites and web applications for businesses across India.",
  },
  metadataBase: new URL("https://github.com/Gowtham-2412"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org structured data for SEO indexing of professional services
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sai Gowtham - Freelance Web Developer",
    "description": "Sai Gowtham designs and develops fast, modern, and SEO-friendly websites and web applications for businesses across India.",
    "url": "https://github.com/Gowtham-2412",
    "telephone": "+919502323161",
    "priceRange": "₹7999 - ₹50000",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "West Bengal",
      "addressLocality": "Durgapur"
    },
    "knowsAbout": [
      "Web Development",
      "Full-Stack Web Applications",
      "Real Estate Websites",
      "Next.js",
      "React",
      "Node.js",
      "Search Engine Optimization (SEO)",
      "Database Systems",
      "Tailwind CSS"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Website Package",
        "price": "7999",
        "priceCurrency": "INR",
        "description": "Focused one-page websites for local businesses and independent professionals."
      },
      {
        "@type": "Offer",
        "name": "Business Website Package",
        "price": "14999",
        "priceCurrency": "INR",
        "description": "Complete multi-page professional website for growing businesses and services."
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FCFAF7] text-[#17181A]">
        {children}
      </body>
    </html>
  );
}
