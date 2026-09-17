import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageBanner from "@/components/PageBanner";
import SectionHeader from "@/components/SectionHeader";
import TourPackageCard from "@/components/TourPackageCard";
import HoneymoonFamilyTabs from "@/components/HoneymoonFamilyTabs";

export const metadata = {
  title: "Tour Packages in Dehradun - Mussoorie, Nainital, Auli, Chardham | Hanuman Ansh Tour & Travels",
  description: "Explore top customized tour packages from Dehradun by Hanuman Ansh Tour & Travels. Honeymoon packages, family holiday trips to Mussoorie, Nainital, Jim Corbett, Rishikesh, and Kedarnath. Call +91 8077107439.",
  keywords: [
    "best tour packages in dehradun",
    "mussoorie taxi service",
    "chardham yatra taxi service",
    "kedarnath taxi service",
    "haridwar taxi service",
    "rishikesh taxi service",
    "honeymoon packages in uttarakhand",
    "family tour packages dehradun",
    "auli tour package from dehradun",
    "nainital tour package",
    "hanuman ansh tour and travels",
  ],
};

const packages = [
  {
    image: "/images/destinations/mussoorie-mallroad.jpg",
    alt: "Mussoorie Hills Taxi",
    title: "Dehradun to Mussoorie Tour",
    duration: "1 Day / 2 Days",
    inclusions: [
      "Cab with experienced hill driver",
      "Sightseeing at Kempty Falls",
      "Mall Road & Gun Hill exploration",
      "Company Garden & George Everest",
    ],
    href: "/contact?dest=Dehradun%20to%20Mussoorie%20Tour",
  },
  {
    image: "/images/destinations/rishikesh.jpg",
    alt: "Rishikesh Ganga Aarti Taxi",
    title: "Rishikesh & Haridwar Package",
    duration: "1 Day Special",
    inclusions: [
      "Private cab pick & drop",
      "Har Ki Pauri Ganga Aarti",
      "Ram Jhula & Laxman Jhula visit",
      "River rafting assistance (optional)",
    ],
    href: "/contact?dest=Rishikesh%20%26%20Haridwar%20Package",
  },
  {
    image: "/images/destinations/mussoorie-snow.jpg",
    alt: "Dhanaulti Auli Snow View Taxi",
    title: "Dehradun to Dhanaulti & Snow Tour",
    duration: "2 Days / 1 Night",
    inclusions: [
      "SUV/Sedan cab for mountain terrain",
      "Eco Park & Surkanda Devi Temple",
      "Snow viewpoint photography",
      "Breathtaking Himalayan peaks",
    ],
    href: "/contact?dest=Dehradun%20to%20Dhanaulti%20Tour",
  },
  {
    image: "/images/destinations/nainital.jpg",
    alt: "Naini Lake Boating Taxi",
    title: "Dehradun to Nainital Package",
    duration: "3 Days / 2 Nights",
    inclusions: [
      "Comfortable AC cab with driver",
      "Naini Lake boating & Mall Road",
      "Bhimtal, Sattal lake tour",
      "Snow View Point cable car",
    ],
    href: "/contact?dest=Dehradun%20to%20Nainital%20Package",
  },
  {
    image: "/images/destinations/haridwar.jpg",
    alt: "Haridwar Pilgrimage Taxi",
    title: "Haridwar Har Ki Pauri Special",
    duration: "Same Day Return",
    inclusions: [
      "Pick & drop from your Dehradun doorstep",
      "Mansa Devi & Chandi Devi ropeway",
      "Evening Ganga Aarti darshan",
      "Clean sanitized car with expert driver",
    ],
    href: "/contact?dest=Haridwar%20Pilgrimage%20Tour",
  },
  {
    image: "/images/chardham/kedarnath.jpg",
    alt: "Custom Himalayan Chardham Tour",
    title: "Custom Uttarakhand Package",
    duration: "Flexible Itinerary",
    inclusions: [
      "Plan your own custom route",
      "Kedarnath & Badrinath options",
      "Chopta, Tungnath, Lansdowne",
      "Vehicle choice: Sedan, SUV, Traveller",
    ],
    href: "/contact?dest=Custom%20Uttarakhand%20Tour%20Package",
    cta: "Plan My Custom Trip",
    highlighted: true,
  },
];

export default function TourPackagesPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="Best Tour Packages in Dehradun"
        subtitle="Affordable & Comfortable Customized Holiday Packages Across Uttarakhand"
        image="/images/destinations/sunset-valley.jpg"
      />

      {/* Top Holiday Packages Grid */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Top Holiday Packages"
            highlight="From Dehradun"
            subtitle="Discover the beauty of Devbhoomi Uttarakhand with Hanuman Ansh Tour & Travels. Custom itineraries, comfortable cabs, and verified drivers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((p) => (
              <TourPackageCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Customized Honeymoon & Family Packages Tab Section */}
      <HoneymoonFamilyTabs />

      <FloatingButtons />
      <Footer />
    </>
  );
}
