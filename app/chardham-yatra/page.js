import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageBanner from "@/components/PageBanner";
import SectionHeader from "@/components/SectionHeader";
import DestinationCard from "@/components/DestinationCard";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Chardham Yatra Taxi Service - Hanuman Ansh Tour & Travels",
  description: "Book sacred Chardham Yatra cabs from Dehradun & Haridwar to Kedarnath, Badrinath, Gangotri, and Yamunotri with Hanuman Ansh Tour & Travels. Call +91 8077107439.",
};

const fourDhamsDetailed = [
  {
    name: "Yamunotri",
    icon: "fa-water",
    iconColor: "text-sky-500",
    image: "/images/chardham/yamunotri.webp",
    desc: "The source of the Yamuna River and the sacred seat of Goddess Yamuna. It is the auspicious first stop in the holy Chardham Yatra circuit.",
    location: "Uttarkashi District",
    altitude: "3,293 meters",
    bestTime: "May to October",
    distance: "270 km",
  },
  {
    name: "Gangotri",
    icon: "fa-droplet",
    iconColor: "text-blue-500",
    image: "/images/chardham/gangotri.jpg",
    desc: "The divine origin of the sacred Bhagirathi / Ganges River, where Goddess Ganga descended from heaven to earth to absolve the sins of mankind.",
    location: "Uttarkashi District",
    altitude: "3,100 meters",
    bestTime: "May to October",
    distance: "300 km",
  },
  {
    name: "Kedarnath",
    icon: "fa-om",
    iconColor: "text-amber-500",
    image: "/images/chardham/kedarnath.jpg",
    desc: "One of the twelve sacred Jyotirlingas of Lord Shiva, nestled in the snow-capped Himalayan Mandakini range at an imposing, spiritual elevation.",
    location: "Rudraprayag District",
    altitude: "3,583 meters",
    bestTime: "May to October",
    distance: "250 km",
  },
  {
    name: "Badrinath",
    icon: "fa-hands-praying",
    iconColor: "text-orange-500",
    image: "/images/chardham/badrinath.jpg",
    desc: "Dedicated to Lord Vishnu (Badri Narayan), this colorful shrine is nestled peacefully between the Nar and Narayana mountain ranges along the Alaknanda River.",
    location: "Chamoli District",
    altitude: "3,300 meters",
    bestTime: "May to October",
    distance: "330 km",
  },
];

const dhamPackages = [
  {
    image: "/images/chardham/kedarnath.jpg",
    alt: "Kedarnath Dham Temple",
    title: "Kedarnath Dham Taxi",
    description: "Dehradun / Haridwar / Rishikesh to Sonprayag & Gaurikund taxi service for Lord Shiva darshan with reliable hill drivers.",
    href: "/contact?dest=Kedarnath%20Dham%20Taxi",
    cta: "Book Kedarnath Cab",
  },
  {
    image: "/images/chardham/badrinath.jpg",
    alt: "Badrinath Dham Temple",
    title: "Badrinath Dham Taxi",
    description: "Direct comfortable cab transfer to Badrinath temple, Mana Village (last Indian village), and Vishnu Prayag.",
    href: "/contact?dest=Badrinath%20Dham%20Taxi",
    cta: "Book Badrinath Cab",
  },
  {
    image: "/images/destinations/haridwar.jpg",
    alt: "Do Dham Yatra",
    title: "Do Dham Yatra (5-6 Days)",
    description: "Kedarnath + Badrinath Yatra complete cab package from Dehradun or Haridwar with experienced mountain driver.",
    href: "/contact?dest=Do%20Dham%20Yatra%20(Kedarnath%20%2B%20Badrinath)",
    cta: "Book Do Dham Package",
  },
  {
    image: "/images/chardham/gangotri.jpg",
    alt: "Full 4 Dham Yatra",
    title: "Full 4 Dham Yatra (9-10 Days)",
    description: "Yamunotri, Gangotri, Kedarnath, and Badrinath complete sacred pilgrimage package with sanitized vehicle & night stays assistance.",
    href: "/contact?dest=Full%204%20Dham%20Yatra",
    cta: "Book Complete Yatra",
  },
];

export default function ChardhamYatraPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="Char Dham Yatra Taxi Service"
        subtitle="Kedarnath • Badrinath • Gangotri • Yamunotri Pilgrimage Cabs"
        image="/images/chardham/kedarnath.jpg"
      />

      {/* 4 Dham Detailed Guide Cards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="The Sacred"
            highlight="Char Dham Circuit"
            subtitle="Explore key information, altitudes, locations, and driving distances for each holy shrine in Uttarakhand."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fourDhamsDetailed.map((dham) => (
              <div
                key={dham.name}
                className="bg-white rounded-3xl overflow-hidden shadow-card border border-slate-200 flex flex-col transition-all hover:-translate-y-1.5 hover:shadow-xl hover:border-primary"
              >
                {/* Temple Photo */}
                <div className="relative h-64 sm:h-72 w-full bg-slate-100">
                  <Image
                    src={dham.image}
                    alt={`${dham.name} Dham Temple`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  <span className="absolute bottom-4 left-5 bg-white/90 backdrop-blur-md text-secondary font-black text-sm px-3.5 py-1 rounded-full shadow-md">
                    Uttarakhand Pilgrimage
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <i className={`fas ${dham.icon} ${dham.iconColor} text-xl`}></i>
                      <h3 className="text-2xl font-extrabold text-secondary">
                        {dham.name}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                      {dham.desc}
                    </p>

                    {/* Metadata specs */}
                    <div className="space-y-3 text-sm text-slate-700 font-semibold border-t border-slate-100 pt-5">
                      <div className="flex items-center gap-3">
                        <i className="fas fa-map-marker-alt text-primary w-5 text-center"></i>
                        <span>Location: <strong className="text-secondary">{dham.location}</strong></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <i className="fas fa-mountain text-primary w-5 text-center"></i>
                        <span>Altitude: <strong className="text-secondary">{dham.altitude}</strong></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <i className="fas fa-calendar-alt text-primary w-5 text-center"></i>
                        <span>Best Time: <strong className="text-secondary">{dham.bestTime}</strong></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <i className="fas fa-route text-primary w-5 text-center"></i>
                        <span>Distance from Dehradun: <strong className="text-secondary">{dham.distance}</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 pt-4 border-t border-slate-100">
                    <Link
                      href={`/contact?dest=${encodeURIComponent(dham.name + " Dham Yatra Taxi")}`}
                      className="block text-center w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-extrabold py-3.5 px-6 rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-95"
                    >
                      Book {dham.name} Cab Now →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chardham Packages Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Book Sacred"
            highlight="Yatra Taxi Packages"
            subtitle="Travel with complete peace of mind. Well-maintained mountain vehicles (Sedan, Ertiga, Innova Crysta, Tempo Traveller) with verified local chauffeurs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dhamPackages.map((d) => (
              <DestinationCard key={d.title} {...d} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/contact?dest=Chardham%20Yatra%20Custom%20Quote"
              className="inline-block bg-accent text-white font-extrabold text-[1.05rem] rounded-full px-8 py-3.5 shadow-[0_6px_20px_rgba(245,158,11,0.4)] transition-all hover:bg-accent-hover hover:-translate-y-0.5"
            >
              Request Custom Chardham Quote{" "}
              <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          </div>
        </div>
      </section>

      <FloatingButtons />
      <Footer />
    </>
  );
}
