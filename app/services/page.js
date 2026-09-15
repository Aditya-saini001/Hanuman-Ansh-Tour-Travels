import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageBanner from "@/components/PageBanner";
import SectionHeader from "@/components/SectionHeader";
import DestinationCard from "@/components/DestinationCard";

export const metadata = {
  title: "Dehradun Taxi Services - Outstation, Airport, Mussoorie Cabs | Hanuman Ansh Tour & Travels",
  description: "Book affordable, safe, and reliable 24/7 taxi services from Dehradun by Hanuman Ansh Tour & Travels. Best taxi service in dehradun, mussoorie taxi service, haridwar taxi service, rishikesh taxi service, and airport cabs. Call +91 8077107439.",
  keywords: [
    "best taxi service in dehradun",
    "mussoorie taxi service",
    "haridwar taxi service",
    "rishikesh taxi service",
    "Kedarnath taxi service",
    "Char dham yatra taxi service",
    "dehradun to delhi taxi",
    "dehradun to chandigarh taxi",
    "jolly grant airport taxi dehradun",
    "hanuman ansh tour and travels",
    "outstation taxi dehradun",
  ],
};

const services = [
  {
    image: "/images/destinations/mussoorie-mallroad.jpg",
    alt: "Mussoorie Taxi Service Dehradun",
    title: "Dehradun to Mussoorie Taxi",
    description: "Book a comfortable cab for sightseeing at Kempty Falls, Mall Road, and George Everest. One-way pick/drop available 24/7.",
    href: "/contact?dest=Dehradun%20to%20Mussoorie%20Taxi",
    cta: "Book Service Now",
  },
  {
    image: "/images/destinations/delhi.jpg",
    alt: "Delhi Taxi Service",
    title: "Dehradun to Delhi Taxi",
    description: "Hire Dehradun to Delhi taxi service for corporate travel, family trips, or Delhi IGI Airport transfers 24/7.",
    href: "/contact?dest=Dehradun%20to%20Delhi%20Taxi",
    cta: "Book Service Now",
  },
  {
    image: "/images/destinations/airport.jpg",
    alt: "Jolly Grant Dehradun Airport Taxi",
    title: "Dehradun Jolly Grant Airport Taxi",
    description: "Affordable Jolly Grant Airport pickup & drop with guaranteed on-time driver arrival and flight status tracking.",
    href: "/contact?dest=Dehradun%20Airport%20Taxi",
    cta: "Book Service Now",
  },
  {
    image: "/images/destinations/haridwar.jpg",
    alt: "Haridwar Taxi Service",
    title: "Dehradun to Haridwar Taxi",
    description: "Book cab for evening Ganga Aarti at Har Ki Pauri, Mansa Devi temple pilgrimage, and family trips.",
    href: "/contact?dest=Dehradun%20to%20Haridwar%20Taxi",
    cta: "Book Service Now",
  },
  {
    image: "/images/destinations/rishikesh.jpg",
    alt: "Rishikesh Taxi Service",
    title: "Dehradun to Rishikesh Taxi",
    description: "Travel to Rishikesh for white water rafting, yoga ashrams, Ram Jhula, Laxman Jhula, and Triveni Ghat.",
    href: "/contact?dest=Dehradun%20to%20Rishikesh%20Taxi",
    cta: "Book Service Now",
  },
  {
    image: "/images/destinations/saharanpur.jpg",
    alt: "Saharanpur Taxi Service",
    title: "Dehradun to Saharanpur Taxi",
    description: "Hassle-free one-way or round-trip commute with clean, AC cars and experienced hill and plain drivers.",
    href: "/contact?dest=Dehradun%20to%20Saharanpur%20Taxi",
    cta: "Book Service Now",
  },
  {
    image: "/images/destinations/chandigarh.jpg",
    alt: "Chandigarh Taxi Service",
    title: "Dehradun to Chandigarh Taxi",
    description: "Expressway cab service from Dehradun to Chandigarh, Mohali, and Panchkula with door-to-door pickup.",
    href: "/contact?dest=Dehradun%20to%20Chandigarh%20Taxi",
    cta: "Book Service Now",
  },
  {
    image: "/images/destinations/gurugram.webp",
    alt: "Gurugram Cyber City Taxi",
    title: "Dehradun to Gurugram / Noida Taxi",
    description: "Direct corporate and residential cab transfers to Gurgaon Cyber City, Noida, and Greater Noida.",
    href: "/contact?dest=Dehradun%20to%20Gurugram%20Taxi",
    cta: "Book Service Now",
  },
  {
    image: "/images/destinations/nainital.jpg",
    alt: "Nainital Taxi Service",
    title: "Dehradun to Nainital Taxi",
    description: "Scenic hill drive to Nainital, Bhimtal, and Corbett National Park in comfortable mountain-ready cabs.",
    href: "/contact?dest=Dehradun%20to%20Nainital%20Taxi",
    cta: "Book Service Now",
  },
];

const allRoutes = [
  "Dehradun to Delhi Taxi",
  "Dehradun To Haridwar Taxi",
  "Dehradun To Manali Taxi",
  "Dehradun to Uttarkashi Taxi",
  "Dehradun to Kanatal Taxi",
  "Dehradun To Rishikesh Taxi",
  "Dehradun to Noida Taxi",
  "Dehradun To Saharanpur Taxi",
  "Dehradun To Haldwani Taxi",
  "Dehradun To Auli Taxi",
  "Dehradun To Dhanaulti Taxi",
  "Dehradun To Nainital Taxi",
  "Dehradun to Gurugram Taxi",
  "Dehradun To Shimla Taxi",
  "Dehradun To Greater Noida Taxi",
  "Dehradun To Harsil Taxi",
  "Dehradun To Srinagar Taxi",
  "Dehradun To Mussoorie Taxi",
  "Dehradun To Tehri Taxi",
  "Dehradun To Kotdwar Taxi",
  "Dehradun To Chopta Taxi",
  "Dehradun To Joshimath Taxi",
  "Dehradun To Rudraprayag Taxi",
  "Dehradun To Chandigarh Taxi",
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="Dehradun Taxi Services"
        subtitle="Book Budget-Friendly Local & Outstation Cabs In Dehradun"
        image="/images/destinations/sunset-valley.jpg"
      />

      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Our Popular"
            highlight="Cab Services"
            subtitle="Enjoy safe, comfortable, and timely rides with experienced hill chauffeurs and accurate destination photos."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <DestinationCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* All Taxi Routes */}
      <section className="py-14 sm:py-16 bg-light-bg border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="All Taxi Routes"
            highlight="From Dehradun"
            subtitle="We offer convenient and affordable taxi services from Dehradun to various cities and tourist destinations. Book your ride now for a comfortable journey."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allRoutes.map((route) => (
              <div
                key={route}
                className="bg-white rounded-2xl px-5 py-4 shadow-sm border-l-[5px] border-primary flex items-center justify-between h-full transition-all hover:-translate-y-1 hover:shadow-md hover:border-accent"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 text-accent-hover flex items-center justify-center text-base flex-shrink-0">
                    <i className="fas fa-taxi"></i>
                  </div>
                  <h5 className="font-extrabold text-secondary text-sm sm:text-base mb-0">
                    {route}
                  </h5>
                </div>
                <a
                  href={`/contact?dest=${encodeURIComponent(route)}`}
                  className="text-primary hover:text-primary-dark no-underline font-extrabold text-sm ml-2 flex-shrink-0"
                >
                  Book →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingButtons />
      <Footer />
    </>
  );
}
