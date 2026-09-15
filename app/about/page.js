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
    name: "Customer Support Team",
    role: "24/7 Helpline & Dispatch",
    bio: "Dedicated round-the-clock support to manage immediate bookings, roadside assistance, and instant queries.",
  },
  {
    name: "Hill Operations Manager",
    role: "Route & Fleet Supervisor",
    bio: "Monitors daily weather, hill road conditions, and vehicle safety inspections for smooth travel across Uttarakhand.",
  },
  {
    name: "Chauffeur Network",
    role: "Verified Mountain Drivers",
    bio: "Experienced, polite, and verified drivers with deep local knowledge of mountain hairpins, passes, and scenic points.",
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

      {/* Meet Our Team */}
      <section className="py-14 sm:py-16 bg-light-bg border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Our Dedicated"
            highlight="Support & Fleet"
            subtitle="The passionate team making every journey safe, comfortable, and memorable with Hanuman Ansh Tour & Travels."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      <FloatingButtons />
      <Footer />
    </>
  );
}
