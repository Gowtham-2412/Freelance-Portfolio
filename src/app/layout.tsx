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
  title: "Sai Gowtham | Freelance Full-Stack Web Developer & Technical Partner",
  description: "Sai Gowtham designs and develops fast, modern, and SEO-friendly websites & web applications for startups, businesses, and agency partners globally and in India.",
  keywords: [
    "Freelance Full-Stack Developer",
    "Next.js Developer India",
    "Remote Web Developer US EU India",
    "Full-Stack Web Application Developer",
    "React & Next.js Consultant",
    "Web Development Services Global",
    "Real Estate Website Developer",
    "Business Website Developer",
    "Sai Gowtham",
    "NIT Durgapur Web Developer"
  ],
  authors: [{ name: "Sai Gowtham", url: "https://github.com/Gowtham-2412" }],
  creator: "Sai Gowtham",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_IN"],
    url: "https://github.com/Gowtham-2412",
    title: "Sai Gowtham | Freelance Full-Stack Web Developer & Technical Partner",
    description: "Designing fast, modern, and high-converting web applications for global startups, brands, and Indian businesses.",
    siteName: "Sai Gowtham Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Gowtham | Freelance Full-Stack Web Developer & Technical Partner",
    description: "Designing fast, modern, and high-converting web applications for global startups, brands, and Indian businesses.",
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
    "name": "Sai Gowtham - Freelance Full-Stack Web Developer",
    "description": "Sai Gowtham designs and develops fast, modern, and SEO-friendly websites & web applications for startups, businesses, and agencies globally and in India.",
    "url": "https://github.com/Gowtham-2412",
    "telephone": "+919502323161",
    "priceRange": "$120 - $1000+ / ₹9999 - ₹50000+",
    "areaServed": [
      "Worldwide",
      "United States",
      "United Kingdom",
      "European Union",
      "United Arab Emirates",
      "India"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "West Bengal",
      "addressLocality": "Durgapur"
    },
    "knowsAbout": [
      "Web Development",
      "Full-Stack Web Applications",
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Search Engine Optimization (SEO)",
      "Multi-Currency E-commerce",
      "Database Systems",
      "Tailwind CSS"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Website Package",
        "price": "120",
        "priceCurrency": "USD",
        "description": "Focused high-speed websites for independent professionals and local businesses globally."
      },
      {
        "@type": "Offer",
        "name": "Business Website Package",
        "price": "250",
        "priceCurrency": "USD",
        "description": "Complete multi-page professional website for growing businesses and global startups."
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
