import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://hanuman-ansh-tour-travels.vercel.app"),
  title: {
    default: "Hanuman Ansh Tour & Travels - Best Taxi Service in Dehradun",
    template: "%s | Hanuman Ansh Tour & Travels",
  },
  description:
    "Book 24/7 taxi service in Dehradun with Hanuman Ansh Tour & Travels. Affordable outstation cabs for Delhi, Mussoorie, Haridwar, Rishikesh, Chandigarh, Jolly Grant Airport transfer, and sacred Chardham Yatra packages. Call +91 8077107439.",
  keywords: [
    "hanuman ansh tour and travels",
    "hanuman ansh travels dehradun",
    "taxi service in dehradun",
    "best taxi service dehradun",
    "dehradun to delhi taxi",
    "dehradun to mussoorie taxi",
    "chardham yatra taxi package",
    "kedarnath taxi service",
    "badrinath cab dehradun",
    "dehradun airport taxi",
    "jolly grant airport taxi",
    "dehradun to haridwar taxi",
    "dehradun to rishikesh taxi",
    "car rental in dehradun",
    "outstation cabs dehradun",
    "uttarakhand tour packages",
  ],
  authors: [{ name: "Hanuman Ansh Tour & Travels" }],
  creator: "Hanuman Ansh Tour & Travels",
  publisher: "Hanuman Ansh Tour & Travels",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Hanuman Ansh Tour & Travels - Best Taxi Service in Dehradun",
    description:
      "Reliable and affordable 24/7 taxi service in Dehradun. Outstation cabs to Delhi, Mussoorie, Haridwar, Rishikesh, and sacred Chardham Yatra packages. Call +91 8077107439.",
    url: "https://hanuman-ansh-tour-travels.vercel.app",
    siteName: "Hanuman Ansh Tour & Travels",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 800,
        height: 800,
        alt: "Hanuman Ansh Tour & Travels Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanuman Ansh Tour & Travels - Best Taxi Service in Dehradun",
    description:
      "24/7 Taxi service in Dehradun. Local city rides, airport transfers, outstation cabs, and Chardham Yatra packages. Call +91 8077107439.",
    images: ["/images/logo.jpeg"],
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
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "TravelAgency"],
    name: "Hanuman Ansh Tour & Travels",
    image: "https://hanuman-ansh-tour-travels.vercel.app/images/logo.jpeg",
    logo: "https://hanuman-ansh-tour-travels.vercel.app/images/logo.jpeg",
    "@id": "https://hanuman-ansh-tour-travels.vercel.app",
    url: "https://hanuman-ansh-tour-travels.vercel.app",
    telephone: "+918077107439",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Transport Nagar, Subhash Nagar, Sewla Khurd",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      postalCode: "248002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.2802,
      longitude: 77.9885,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      "Dehradun",
      "Mussoorie",
      "Rishikesh",
      "Haridwar",
      "Delhi",
      "Noida",
      "Gurugram",
      "Chandigarh",
      "Kedarnath",
      "Badrinath",
      "Gangotri",
      "Yamunotri",
      "Uttarakhand",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1420",
    },
  };

  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {/* Pro-Level Schema Markup for Google Ranking */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans text-[1.05rem] leading-relaxed bg-white text-slate-800 antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}

