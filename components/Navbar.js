"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", icon: "fa-home" },
  { href: "/about", label: "About", icon: "fa-info-circle" },
  { href: "/services", label: "Services", icon: "fa-taxi" },
  { href: "/chardham-yatra", label: "Chardham Yatra", icon: "fa-mountain" },
  { href: "/tour-packages", label: "Tour Packages", icon: "fa-suitcase" },
  { href: "/contact", label: "Contact", icon: "fa-phone" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Info Header */}
      <div className="bg-secondary text-slate-200 text-xs sm:text-[0.92rem] font-semibold py-2.5 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-1.5 truncate">
            <i className="fas fa-map-marker-alt text-accent"></i>
            <span>Transport Nagar, Dehradun</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📞 Call 24/7:</span>
            <a
              href="tel:+918077107439"
              className="text-accent font-extrabold hover:underline"
            >
              +91 8077107439
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-secondary to-slate-800 shadow-lg py-2.5">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <Image
              src="/images/logo.jpeg"
              alt="Hanuman Ansh Tour & Travels Logo"
              width={52}
              height={52}
              className="h-11 w-11 sm:h-13 sm:w-13 object-cover rounded-full border-2 border-accent shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-transform group-hover:scale-105"
            />
            <div className="font-black text-lg sm:text-2xl text-white leading-tight tracking-tight">
              Hanuman Ansh <span className="text-accent">Tour & Travels</span>
            </div>
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white text-2xl p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation"
          >
            <i className={`fas ${open ? "fa-times" : "fa-bars"}`}></i>
          </button>

          {/* Links */}
          <ul
            className={`${
              open ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-0 absolute lg:static top-full left-0 w-full lg:w-auto bg-secondary lg:bg-transparent px-4 lg:px-0 py-4 lg:py-0 shadow-xl lg:shadow-none border-t lg:border-t-0 border-white/10`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="lg:mx-1">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block py-2.5 lg:py-1 px-2.5 font-bold text-[0.95rem] rounded-lg transition-colors ${
                      isActive
                        ? "text-accent bg-white/5 lg:bg-transparent"
                        : "text-slate-100 hover:text-accent hover:bg-white/5 lg:hover:bg-transparent"
                    }`}
                  >
                    <i className={`fas ${link.icon} mr-1.5 text-accent text-sm`}></i>
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="lg:ml-2 mt-2 lg:mt-0">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-full lg:w-auto bg-gradient-to-br from-accent to-accent-hover text-white rounded-full px-5 py-2.5 font-extrabold shadow-[0_4px_15px_rgba(245,158,11,0.4)] transition-transform hover:-translate-y-0.5 active:scale-95"
              >
                <i className="fas fa-taxi mr-1.5"></i> Book Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
