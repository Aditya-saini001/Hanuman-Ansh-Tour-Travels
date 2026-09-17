import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SectionHeader from "@/components/SectionHeader";
import DestinationCard from "@/components/DestinationCard";
import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";

export const metadata = {
  title: "Best Taxi Service in Dehradun - Kedarnath, Chardham Yatra, Mussoorie Cabs | Hanuman Ansh Tour & Travels",
  description: "Hanuman Ansh Tour & Travels provides the best taxi service in Dehradun. 24/7 cabs for Kedarnath taxi service, Char dham yatra taxi service, Mussoorie taxi service, Haridwar, Rishikesh, and Delhi. Call +91 8077107439.",
  keywords: [
    "best taxi service in dehradun",
    "Kedarnath taxi service",
    "Char dham yatra taxi service",
    "mussoorie taxi service",
    "haridwar taxi service",
    "rishikesh taxi service",
    "dehradun to delhi taxi",
    "dehradun airport taxi",
    "jolly grant airport taxi",
    "hanuman ansh tour and travels",
    "outstation taxi dehradun",
    "car rental dehradun with driver",
  ],
};

const outstationCards = [
  {
    image: "/images/destinations/mussoorie-mallroad.jpg",
    alt: "Mussoorie Taxi Service Dehradun",
    title: "Dehradun to Mussoorie Taxi",
    description: "Enjoy breathtaking hill views traveling to the 'Queen of Hills', visiting Kempty Falls, Mall Road, and George Everest.",
    href: "/contact?dest=Dehradun%20to%20Mussoorie",
  },
  {
    image: "/images/destinations/rishikesh.jpg",
    alt: "Rishikesh & Haridwar Taxi Service",
    title: "Dehradun to Rishikesh & Haridwar",
    description: "Perfect for Ganga Aarti at Har Ki Pauri, Ram Jhula, yoga ashrams, river rafting, and divine spiritual peace.",
    href: "/contact?dest=Rishikesh%20%26%20Haridwar",
  },
  {
    image: "/images/destinations/nainital.jpg",
    alt: "Nainital Lake Taxi Service",
    title: "Dehradun to Nainital & Corbett",
    description: "Experience serene Naini Lake boating, mountain air, and Jim Corbett tiger safari with spacious family cabs.",
    href: "/contact?dest=Nainital%20%26%20Jim%20Corbett",
  },
  {
    image: "/images/chardham/kedarnath.jpg",
    alt: "Kedarnath Taxi Service & Chardham Yatra",
    title: "Char Dham Yatra Special",
    description: "Sacred mountain pilgrimage covering Kedarnath, Badrinath, Gangotri, and Yamunotri with expert hill chauffeurs.",
    href: "/chardham-yatra",
    cta: "Explore Chardham Yatra",
  },
];

const affordableCards = [
  {
    image: "/images/destinations/mussoorie-snow.jpg",
    alt: "Mussoorie Dhanaulti Snow Cab",
    title: "Dehradun to Mussoorie & Dhanaulti",
    description: "Sightseeing and leisure hill taxi. One-Way and Round-Trip pick & drop available 24/7 with zero hidden fares.",
    href: "/contact?dest=Dehradun%20to%20Mussoorie%20Taxi",
  },
  {
    image: "/images/destinations/delhi.jpg",
    alt: "Dehradun to Delhi Taxi Service",
    title: "Dehradun to Delhi NCR Taxi",
    description: "Corporate travel, family trips, or Delhi IGI Airport transfers. One-way drops & round-trips via expressways.",
    href: "/contact?dest=Dehradun%20to%20Delhi%20Taxi",
  },
  {
    image: "/images/destinations/airport.jpg",
    alt: "Jolly Grant Dehradun Airport Taxi",
    title: "Dehradun Airport Taxi",
    description: "Affordable Jolly Grant Airport pickup & drop with guaranteed on-time driver arrival and flight tracking.",
    href: "/contact?dest=Dehradun%20Airport%20Taxi",
  },
  {
    image: "/images/destinations/saharanpur.jpg",
    alt: "Dehradun to Saharanpur Taxi",
    title: "Dehradun to Saharanpur Taxi",
    description: "Hassle-free, quick commute with experienced local drivers and clean, sanitized Sedan/SUV cabs.",
    href: "/contact?dest=Dehradun%20to%20Saharanpur%20Taxi",
  },
];

const features = [
  {
    icon: "fa-shield-halved",
    title: "Safe Rides",
    desc: "Our drivers are thoroughly screened and trained to ensure your safety. GPS-enabled cars for real-time tracking.",
  },
  {
    icon: "fa-indian-rupee-sign",
    title: "Affordable Pricing",
    desc: "Competitive rates with no hidden charges. Transparent pricing for all rides. Flexible packages for local & long-distance rides.",
  },
  {
    icon: "fa-headset",
    title: "24/7 Support",
    desc: "Our customer service team is available round the clock to assist you. 24/7 availability across major cities.",
  },
  {
    icon: "fa-user-tie",
    title: "Professional Drivers",
    desc: "Courteous and experienced drivers who know the city and mountain routes inside out. Dedicated helpline for quick support.",
  },
];

const localRoutes = [
  "Dehradun To Delhi Taxi",
  "Dehradun To Haridwar Taxi",
  "Dehradun To Chandigarh Taxi",
  "Dehradun To Gurugram Taxi",
  "Dehradun To Saharanpur Taxi",
  "Dehradun To Rishikesh Taxi",
  "Dehradun To Nainital Taxi",
  "Dehradun To Mussoorie Taxi",
  "Dehradun To Chopta Taxi",
  "Dehradun To Joshimath Taxi",
  "Dehradun To Rudraprayag Taxi",
  "Dehradun To Chardham Taxi",
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner Section */}
      <section
        className="py-[90px] sm:py-[110px] pb-[70px] sm:pb-[90px] text-white text-center lg:text-left bg-center bg-cover relative"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(13,148,136,0.85) 100%), url('/images/destinations/sunset-valley.jpg')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto lg:mx-0">
            <span className="inline-block bg-accent/25 border-[1.5px] border-accent text-accent text-xs sm:text-[0.95rem] font-extrabold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-4">
              <i className="fas fa-shield-halved mr-1.5"></i> 100% Reliable Taxi & Tour Operator In Dehradun
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 tracking-tight leading-tight">
              🚖 Best Taxi Service <br />
              <span className="text-accent">In Dehradun & Uttarakhand</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-100 font-medium mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              Travel safely and comfortably with <strong>Hanuman Ansh Tour & Travels</strong>. Available 24/7 for <strong>best taxi service in dehradun</strong>, <strong>Kedarnath taxi service</strong>, <strong>Char dham yatra taxi service</strong>, <strong>mussoorie taxi service</strong>, and Jolly Grant Airport transfers.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-block bg-accent text-white font-extrabold text-sm sm:text-[1.05rem] rounded-full px-7 sm:px-8 py-3.5 shadow-[0_6px_20px_rgba(245,158,11,0.4)] transition-all hover:bg-accent-hover hover:-translate-y-0.5 active:scale-95"
              >
                Book Service Now <i className="fas fa-arrow-right ml-1"></i>
              </Link>
              <a
                href="tel:+918077107439"
                className="inline-block border-2 border-white text-white font-extrabold text-sm sm:text-[1.05rem] rounded-full px-6 sm:px-7 py-3 transition-all hover:bg-white hover:text-secondary active:scale-95"
              >
                📞 Call: +91 8077107439
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Outstation Taxi Service Section */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Outstation Taxi Service"
            highlight="In Dehradun"
            subtitle="Travel beyond Dehradun with Hanuman Ansh Tour & Travels. Enjoy smooth, scenic journeys with authentic destination photos and expert hill drivers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outstationCards.map((card) => (
              <DestinationCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Affordable Dehradun Taxi Services */}
      <section className="py-14 sm:py-16 bg-light-bg border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Affordable Dehradun"
            highlight="Taxi Services"
            subtitle="Book reliable and budget-friendly cabs from Dehradun to Delhi, Mussoorie, Haridwar, Rishikesh, Chandigarh, Saharanpur, and Jolly Grant Airport."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {affordableCards.map((card) => (
              <DestinationCard key={card.title} {...card} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block bg-accent text-white font-extrabold text-sm sm:text-[1.05rem] rounded-full px-8 py-3.5 shadow-[0_6px_20px_rgba(245,158,11,0.4)] transition-all hover:bg-accent-hover hover:-translate-y-0.5"
            >
              View All Taxi Services <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Features (Matching Reference Cards) */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Why Book With"
            highlight="Hanuman Ansh Tour & Travels?"
            subtitle="Hanuman Ansh Tour & Travels is your trusted transportation partner for safe, comfortable, and affordable journeys across Uttarakhand and North India."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white p-6 sm:p-8 rounded-[22px] text-center border border-slate-200 shadow-card h-full transition-all hover:-translate-y-1.5 hover:border-primary"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center text-2xl mx-auto mb-4 shadow-xs">
                  <i className={`fas ${f.icon}`}></i>
                </div>
                <h4 className="font-extrabold text-lg text-secondary mb-2">
                  {f.title}
                </h4>
                <p className="text-slate-500 text-sm font-medium mb-0 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local City Taxi Routes Grid */}
      <section className="py-14 sm:py-16 bg-light-bg border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Popular Outstation"
            highlight="Taxi Routes"
            subtitle="We offer convenient and affordable taxi services from Dehradun to various tourist and business destinations. Book directly on WhatsApp or Call."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {localRoutes.map((route) => (
              <div
                key={route}
                className="bg-white rounded-2xl px-5 py-4 shadow-sm border-l-[5px] border-primary flex items-center justify-between h-full transition-all hover:-translate-y-1 hover:shadow-md hover:border-accent"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center text-base flex-shrink-0">
                    <i className="fas fa-taxi"></i>
                  </div>
                  <div>
                    <h5 className="font-extrabold text-secondary text-sm sm:text-base mb-0.5">
                      {route}
                    </h5>
                    <span className="text-xs text-slate-400 font-semibold">Available 24/7</span>
                  </div>
                </div>
                <Link
                  href={`/contact?dest=${encodeURIComponent(route)}`}
                  className="text-primary hover:text-primary-dark no-underline font-extrabold text-sm ml-2"
                >
                  Book →
                </Link>
              </div>
            ))}
          </div>

          {/* Custom Route Call Action Strip (Matching Reference Design) */}
          <div className="mt-10 text-center">
            <p className="text-slate-600 font-bold text-sm sm:text-base mb-3">
              Can&apos;t find your destination? Contact us for custom routes and special requests!
            </p>
            <a
              href="tel:+918077107439"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-extrabold px-8 py-3 rounded-full text-sm sm:text-base shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <i className="fas fa-phone"></i>
              <span>Call Now! +91 8077107439</span>
            </a>
          </div>
        </div>
      </section>

      {/* SEO Rich-Text Section: Best Taxi Service in Dehradun (Matching Reference Design) */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary tracking-tight">
              Best Taxi Service in Dehradun – Safe, Reliable & Affordable
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto my-3 rounded-full"></div>
          </div>

          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            <p>
              Looking for a <strong className="text-secondary font-extrabold">trusted taxi service in Dehradun</strong>? Welcome to <strong className="text-secondary font-extrabold">Hanuman Ansh Tour & Travels</strong> – your reliable partner for local and outstation cab bookings. Whether you need a taxi for airport transfers, business meetings, sightseeing, or a family trip, we provide comfortable and affordable cabs to meet all your travel needs in and around Dehradun.
            </p>
            <p>
              Our <strong className="text-secondary font-extrabold">Dehradun taxi service</strong> is perfect for exploring nearby destinations like Mussoorie, Rishikesh, Haridwar, Nainital, Auli, and <strong className="text-secondary font-extrabold">Char Dham Yatra routes</strong> (Kedarnath, Badrinath, Gangotri, and Yamunotri). With experienced drivers, clean vehicles, and transparent fares, we ensure a safe and stress-free travel experience for every passenger.
            </p>
            <p>
              At Hanuman Ansh Tour & Travels, we offer a wide range of vehicles including Sedans (Dzire, Etios), SUVs (Ertiga, Innova Crysta), and Tempo Travellers – suitable for solo travelers, couples, families, and large groups. Whether you are planning a short city ride or a long-distance tour across Uttarakhand, our cabs are available 24/7 at budget-friendly prices.
            </p>
            <p>
              Choose Hanuman Ansh Tour & Travels for the <strong className="text-secondary font-extrabold">best taxi service in Dehradun</strong> – punctual pickups, professional drivers, and comfortable rides. Book your cab today and enjoy hassle-free travel across Dehradun and Uttarakhand with us!
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-14 sm:py-16 bg-light-bg border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Frequently Asked"
            highlight="Questions"
            subtitle="Find answers to common questions about our cab booking, outstation trips, and Chardham Yatra services."
          />
          <FaqAccordion />
        </div>
      </section>

      <FloatingButtons />
      <Footer />
    </>
  );
}
