import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#953553",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nawacraft.com"),
  title: {
    default: "Nawacraft Pvt. Ltd. | We Craft Software That Runs Businesses",
    template: "%s | Nawacraft Pvt. Ltd.",
  },
  description:
    "Nawacraft is a founding team of 9 specialists based in Mahalaxmisthan, Lalitpur, Nepal. We build custom software systems and smart retail products like our Meat Management System.",
  keywords: [
    "Nawacraft",
    "Nawacraft Pvt Ltd",
    "Meat Management System",
    "Meat shop software Nepal",
    "Smart weighing scale system",
    "Software company Lalitpur",
    "IT Company Nepal",
    "Custom business software",
    "IoT scale integration",
    "Nepal retail automation",
  ],
  authors: [{ name: "Nawacraft Team", url: "https://nawacraft.com" }],
  creator: "Nawacraft Pvt. Ltd.",
  publisher: "Nawacraft Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Nawacraft Pvt. Ltd. | We Craft Software That Runs Businesses",
    description:
      "A founding team of 9 specialists in Lalitpur, Nepal building custom software systems and connected retail products.",
    url: "https://nawacraft.com",
    siteName: "Nawacraft Pvt. Ltd.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nawacraft Pvt. Ltd. Social Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nawacraft Pvt. Ltd. | We Craft Software That Runs Businesses",
    description:
      "A founding team of 9 specialists in Lalitpur, Nepal building custom software systems and connected retail products.",
    creator: "@nawacraft",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nawacraft.com",
  },
  other: {
    "geo.region": "NP-BA",
    "geo.placename": "Mahalaxmisthan, Lalitpur",
    "geo.position": "27.6588;85.3247",
    ICBM: "27.6588, 85.3247",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Rich Structured Data (JSON-LD) for Google Knowledge Graph, Local Business & Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": "https://nawacraft.com/#organization",
        name: "Nawacraft Pvt. Ltd.",
        legalName: "Nawacraft Pvt. Ltd.",
        url: "https://nawacraft.com",
        logo: "https://nawacraft.com/opengraph-image",
        image: "https://nawacraft.com/opengraph-image",
        priceRange: "$$",
        description:
          "Nawacraft is a team of 9 founding specialists in Lalitpur, Nepal crafting custom business software, IoT digital scale integrations, and retail management systems.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Mahalaxmisthan",
          addressLocality: "Lalitpur",
          addressRegion: "Bagmati Province",
          postalCode: "44700",
          addressCountry: "NP",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 27.6588,
          longitude: 85.3247,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+977-1-5500000",
          contactType: "customer service",
          email: "contact@nawacraft.com",
          areaServed: "NP",
          availableLanguage: ["English", "Nepali"],
        },
        sameAs: [
          "https://linkedin.com",
          "https://github.com",
          "https://x.com",
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://nawacraft.com/#meat-management-system",
        name: "Meat Management System",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Cloud & Hardware Connected (IoT)",
        description:
          "A smart weighing system connecting digital scale hardware in meat shops directly to a central cloud server with inventory, sales, and waste tracking.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "NPR",
          availability: "https://schema.org/InStock",
        },
        featureList: [
          "Direct machine-to-server weighing",
          "Automatic inventory management",
          "Sales management",
          "Sales forecasting",
          "Waste tracking",
          "Per-shop dashboard and control",
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAFAF9] text-[#111014]">
        {children}
      </body>
    </html>
  );
}
