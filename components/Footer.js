import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#090d16] text-slate-300 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpeg"
                alt="Hanuman Ansh Logo"
                width={50}
                height={50}
                className="h-12 w-12 object-cover rounded-full border-2 border-accent shadow-[0_0_10px_rgba(245,158,11,0.4)]"
              />
              <h4 className="text-white font-extrabold text-xl mb-0">
                Hanuman Ansh Tour & Travels
              </h4>
            </div>
            <p className="text-slate-400 text-sm font-medium leading-relaxed mb-4">
              Your reliable transportation partner since 2010. Serving thousands of customers every day with pride across Dehradun, Uttarakhand, and North India.
            </p>
            <div className="text-xs text-slate-500 font-semibold">
              ✔ 24/7 Available &nbsp;•&nbsp; ✔ Experienced Hill Drivers
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-extrabold text-lg mb-4 border-l-4 border-accent pl-2.5">
              Contact Info
            </h4>
            <div className="space-y-2.5 text-sm font-medium text-slate-300">
              <p className="flex items-start gap-2.5">
                <i className="fas fa-map-marker-alt text-accent mt-1 flex-shrink-0"></i>
                <span>Transport Nagar, Subhash Nagar, Dehradun, Sewla Khurd, Uttarakhand 248002</span>
              </p>
              <p className="flex items-center gap-2.5">
                <i className="fas fa-phone text-accent flex-shrink-0"></i>
                <a href="tel:+918077107439" className="text-white hover:text-accent font-bold">
                  +91 8077107439
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <i className="fab fa-whatsapp text-emerald-400 flex-shrink-0"></i>
                <a href="https://wa.me/918077107439" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 font-bold">
                  +91 8077107439
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <i className="fas fa-envelope text-accent flex-shrink-0"></i>
                <a href="mailto:hanumananshtourtravels@gmail.com" className="text-slate-300 hover:text-accent truncate">
                  hanumananshtourtravels@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-extrabold text-lg mb-4 border-l-4 border-accent pl-2.5">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2 text-sm text-slate-400 font-medium">
              <Link href="/" className="hover:text-accent transition-colors">
                › Home
              </Link>
              <Link href="/about" className="hover:text-accent transition-colors">
                › About Us
              </Link>
              <Link href="/services" className="hover:text-accent transition-colors">
                › Taxi Services
              </Link>
              <Link href="/chardham-yatra" className="hover:text-accent transition-colors">
                › Chardham Yatra
              </Link>
              <Link href="/tour-packages" className="hover:text-accent transition-colors">
                › Tour Packages
              </Link>
              <Link href="/contact" className="hover:text-accent transition-colors">
                › Contact Us
              </Link>
            </div>
          </div>

          {/* Social Media Column (Instagram, Facebook, Twitter/X) */}
          <div>
            <h4 className="text-white font-extrabold text-lg mb-4 border-l-4 border-accent pl-2.5">
              Follow Us
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Follow us on social media for regular travel updates, road status, and discount offers:
            </p>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/18rq23HnKx/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white flex items-center justify-center text-lg transition-all hover:-translate-y-1"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/hanuman_ansh_tour_travels?stkn=MThhc3B5dnBnZnd0Zw=="
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-10 h-10 rounded-full bg-pink-600/20 text-pink-400 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white flex items-center justify-center text-lg transition-all hover:-translate-y-1"
              >
                <i className="fab fa-instagram"></i>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com/#"
                target="_blank"
                rel="noopener noreferrer"
                title="X (Twitter)"
                className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all hover:-translate-y-1"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918077107439"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="w-10 h-10 rounded-full bg-emerald-600/20 text-emerald-400 hover:bg-emerald-500 hover:text-white flex items-center justify-center text-lg transition-all hover:-translate-y-1"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>

            <div className="mt-6">
              <Link
                href="/"
                className="inline-block border border-white/20 hover:border-accent text-slate-300 hover:text-accent text-xs font-bold px-4 py-2 rounded-lg transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-8 border-white/10" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-400 font-semibold text-center sm:text-left">
          <div>
            © 2026 Hanuman Ansh Tour & Travels. All rights reserved.
          </div>
          <Link
            href="/terms-conditions"
            className="text-slate-300 hover:text-accent no-underline font-semibold"
          >
            Our Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
