import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? SITE.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "WB Advies & Finance | Boekhouder & Fiscaal Advies voor Ondernemers",
    template: "%s | WB Advies & Finance",
  },
  description:
    "Allround boekhoudkantoor voor ondernemers: geautomatiseerde boekhouding, belastingaangifte, salarisadministratie en financieel advies. Digitaal, persoonlijk en proactief.",
  keywords: [
    "boekhouder",
    "boekhoudkantoor",
    "belastingaangifte",
    "salarisadministratie",
    "financieel advies",
    "startersbegeleiding",
    "zzp boekhouding",
    "accountant Middelburg",
    "boekhouder Zeeland",
    "boekhouder Middelburg",
  ],
  authors: [{ name: SITE.owner }],
  creator: "webnestiQ",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: SITE.name,
    title: "WB Advies & Finance | Uw financiële fundering, klaar voor de toekomst",
    description:
      "Geautomatiseerde boekhouding, fiscaliteit en financieel advies. Digitaal waar het kan, persoonlijk waar het moet.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WB Advies & Finance | Boekhouding en fiscaal advies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WB Advies & Finance",
    description:
      "Allround boekhoudkantoor: digitaal, persoonlijk en proactief voor ondernemers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#2E3A40",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/og-image.png`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.city,
      addressCountry: SITE.address.country,
    },
    areaServed: "NL",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.city,
      addressCountry: SITE.address.country,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={jsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
