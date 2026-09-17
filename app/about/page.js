import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageBanner from "@/components/PageBanner";
import SectionHeader from "@/components/SectionHeader";
import TeamCard from "@/components/TeamCard";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us - Hanuman Ansh Tour & Travels",
  description: "Learn about Hanuman Ansh Tour & Travels, Dehradun's premier taxi and tour operator specializing in hill station transfers and sacred Chardham Yatra. Call +91 8077107439.",
};

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    bio: "Rajesh started Hanuman Ansh Tour & Travels with a vision to provide safe, reliable, and affordable taxi services in Dehradun and across Uttarakhand.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Anjali Sharma",
    role: "Operations Manager",
    bio: "Anjali ensures smooth day-to-day operations, handling driver schedules, mountain route planning, and 24/7 customer support dispatch.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Vikram Singh",
    role: "Head of Customer Relations",
    bio: "Vikram is passionate about delivering the best customer experience. He ensures that every passenger rides with utmost comfort and trust.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Neha Verma",
    role: "Marketing & Partnerships Lead",
    bio: "Neha handles digital outreach, tour promotions, and trusted collaborations with mountain hotels, pilgrimage trusts, and corporate travelers.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Arjun Mehta",
    role: "Senior Driver Supervisor",
    bio: "With 12+ years of mountain driving experience, Arjun mentors our chauffeur team to ensure smooth, calm, and secure rides on steep hill tracks.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Priya Chauhan",
    role: "Customer Support Executive",
    bio: "Priya is the friendly voice behind our 24/7 helpline. She assists travelers with instant taxi bookings, trip queries, and rapid resolutions.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
  },
];

const fleet = [
  {
    title: "Budget Hatchback",
    models: "Maruti Swift, WagonR",
    seats: "4 Passengers",
    luggage: "2 Large Bags",
    ac: "Air Conditioned",
    description: "Ideal for city rides, daily commutes, couples, and solo travelers on a budget.",
    icon: "fa-car",
  },
  {
    title: "Executive Sedan",
    models: "Swift Dzire, Toyota Etios",
    seats: "4 Passengers",
    luggage: "3 Bags + Boot Space",
    ac: "Chilled AC",
    description: "Comfortable legroom, perfect for small families, Delhi airport transfers & outstation trips.",
    icon: "fa-car-side",
  },
  {
    title: "Premium Mountain SUV",
    models: "Innova Crysta, Ertiga",
    seats: "6 - 7 Passengers",
    luggage: "4-5 Large Bags",
    ac: "Dual AC Climate Control",
    description: "High ground clearance, maximum comfort for hill stations and holy Chardham Yatra circuits.",
    icon: "fa-van-shuttle",
  },
  {
    title: "Luxury Tempo Traveller",
    models: "Force Traveller (12 - 17 Seater)",
    seats: "12 to 17 Passengers",
    luggage: "Dedicated Carrier & Boot",
    ac: "Individual AC Vents",
    description: "Push-back reclining seats, perfect for large family pilgrimage groups and corporate tours.",
    icon: "fa-bus",
  },
];

const whyChooseUs = [
  {
    icon: "fa-clock",
    title: "24/7 Taxi Service",
    description:
      "Available day and night for your convenience. Whether it's an early morning flight or a late-night arrival, we're always ready for you.",
  },
  {
    icon: "fa-wallet",
    title: "Affordable Fares",
    description:
      "Transparent pricing with zero hidden charges. Enjoy competitive outstation and local rates without compromising on quality or safety.",
  },
  {
    icon: "fa-shield-halved",
    title: "Safe & Reliable Rides",
    description:
      "Verified mountain drivers and clean, sanitized cars. Your safety is our highest priority with regular vehicle maintenance checks.",
  },
  {
    icon: "fa-earth-americas",
    title: "Local Mountain Expertise",
    description:
      "Decades of combined knowledge of Uttarakhand's roads, scenic viewpoints, mountain bypasses, and weather conditions.",
  },
  {
    icon: "fa-mobile-screen-button",
    title: "Easy Instant Booking",
    description:
      "Fast 1-click booking via WhatsApp or direct phone call with instant trip confirmation and zero advance booking stress.",
  },
  {
    icon: "fa-star",
    title: "Premium Experience",
    description:
      "Well-maintained fleet, respectful chauffeurs, smooth rides, and custom itineraries tailored around your family's travel schedule.",
  },
];

const reviews = [
  {
    name: "Rohit Sharma",
    route: "Dehradun to Mussoorie",
    initials: "RS",
    rating: 5,
    text: "Hanuman Ansh Tour & Travels made our trip from Dehradun to Mussoorie super comfortable and affordable. Highly recommended for family travel!",
  },
  {
    name: "Priya Khanna",
    route: "Dehradun to Delhi Airport",
    initials: "PK",
    rating: 5,
    text: "The driver was punctual and the car was very clean. Had a smooth ride to Delhi Airport without any hassle or delays. Very satisfied!",
  },
  {
    name: "Amit Singh",
    route: "Chardham Yatra 2026",
    initials: "AS",
    rating: 5,
    text: "Booked Hanuman Ansh Tour & Travels for our complete Chardham Yatra. The driver was very knowledgeable about all the mountain routes and temples.",
  },
  {
    name: "Sunita Rawat",
    route: "Haridwar & Rishikesh Tour",
    initials: "SR",
    rating: 5,
    text: "Excellent service! The Innova Crysta was spotless, and our driver handled the mountain hairpins with extreme care and patience for our elders.",
  },
  {
    name: "Deepak Verma",
    route: "Dehradun to Chandigarh",
    initials: "DV",
    rating: 5,
    text: "Best outstation cab service in Dehradun. No hidden toll or extra charges, transparent pricing, and very polite and professional driver.",
  },
  {
    name: "Rajesh Patel",
    route: "Kedarnath & Badrinath Do Dham",
    initials: "RP",
    rating: 5,
    text: "We traveled with elderly parents for Do Dham Yatra. The team arranged everything smoothly, drove safely, and guided us at every temple stop.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="About Hanuman Ansh Tour & Travels"
        subtitle="Your Trusted Transportation & Pilgrimage Partner In Dehradun"
        image="/images/destinations/sunset-valley.jpg"
      />

      {/* About Content */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden shadow-card border border-slate-200 bg-white p-6 flex items-center justify-center">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72">
                <Image
                  src="/images/logo.jpeg"
                  alt="Hanuman Ansh Tour & Travels Logo"
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
            </div>

            <div>
              <span className="text-accent font-extrabold text-sm sm:text-base uppercase tracking-wider">
                Our Story & Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary mt-2 mb-4 leading-tight">
                Dedicated to Safe, Punctual & Affordable Travel in Devbhoomi
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6 text-sm sm:text-base">
                Welcome to <strong>Hanuman Ansh Tour & Travels</strong> – your premier travel partner in Dehradun. With the divine blessings of Lord Hanuman, we specialize in providing reliable, sanitized, and comfortable taxi services for local journeys, outstation commutes to Delhi, Chandigarh, Haridwar, Rishikesh, and sacred Chardham Yatra pilgrimages across Kedarnath, Badrinath, Gangotri, and Yamunotri.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded-2xl bg-light-bg border border-slate-200 text-center">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                    10,000+
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-0 font-bold">
                    Safe Rides Completed
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-light-bg border border-slate-200 text-center">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-accent mb-1">
                    4.9 ★
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-0 font-bold">
                    Customer Satisfaction
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-block bg-accent text-white font-extrabold text-sm sm:text-[1.05rem] rounded-full px-8 py-3.5 shadow-[0_6px_20px_rgba(245,158,11,0.4)] transition-all hover:bg-accent-hover hover:-translate-y-0.5"
              >
                Book Your Ride Now <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Fleet of Taxis */}
      <section className="py-14 sm:py-16 bg-gradient-to-b from-slate-900 to-secondary text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 bg-white/10 text-amber-300 font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              🚗 Well-Maintained Vehicles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Our Fleet of Taxis
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you are a solo traveler, family, or group, we ensure comfort and safety throughout your journey. From budget hatchbacks to spacious SUVs, Hanuman Ansh Tour & Travels offers a variety of vehicles to suit your travel needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet.map((car, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 transition-all duration-300 hover:bg-white/15 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center text-xl mb-4 shadow-lg">
                    <i className={`fas ${car.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {car.title}
                  </h3>
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-3">
                    {car.models}
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {car.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-users text-accent w-4"></i>
                    <span>{car.seats}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-suitcase-rolling text-accent w-4"></i>
                    <span>{car.luggage}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-snowflake text-accent w-4"></i>
                    <span>{car.ac}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Hanuman Ansh Tour & Travels */}
      <section className="py-14 sm:py-16 bg-light-bg">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Why Choose"
            highlight="Hanuman Ansh"
            subtitle="Top reasons why thousands of tourists and pilgrims trust us for their journey across Dehradun and Devbhoomi."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl mb-4">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="text-lg font-extrabold text-secondary mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Meet Our"
            highlight="Expert Team"
            subtitle="The dedicated professionals behind Hanuman Ansh Tour & Travels ensuring every passenger rides with complete peace of mind."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* What Our Customers Say (Reviews & Testimonials) */}
      <section className="py-14 sm:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider border border-emerald-200">
              💬 Verified Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary mb-3">
              What Our Customers Say
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Real stories and experiences from travelers who explored Uttarakhand with Hanuman Ansh Tour & Travels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative"
              >
                <div>
                  <div className="text-accent text-3xl font-serif mb-2 leading-none">
                    “
                  </div>
                  <p className="text-slate-700 text-sm font-medium leading-relaxed italic mb-6">
                    {rev.text}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-slate-800 text-white flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0">
                    {rev.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-extrabold text-secondary truncate">
                      {rev.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium truncate mb-0.5">
                      {rev.route}
                    </p>
                    <div className="text-amber-400 text-xs flex gap-0.5">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick CTA Box */}
          <div className="mt-12 bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 text-center text-white shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Ready to Experience the Difference?
            </h3>
            <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto mb-6 font-medium">
              Call us directly or WhatsApp your trip requirements. We guarantee on-time arrival and transparent rates.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+918077107439"
                className="bg-accent hover:bg-accent-hover text-white font-extrabold text-sm sm:text-base px-7 py-3 rounded-full shadow-lg transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <i className="fas fa-phone-alt"></i> Call +91 8077107439
              </a>
              <a
                href="https://wa.me/918077107439"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm sm:text-base px-7 py-3 rounded-full shadow-lg transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp Booking
              </a>
            </div>
          </div>
        </div>
      </section>

      <FloatingButtons />
      <Footer />
    </>
  );
}
