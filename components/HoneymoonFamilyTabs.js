"use client";

import { useState } from "react";
import Link from "next/link";

const honeymoonDestinations = [
  "Mussoorie",
  "Nainital",
  "Auli",
  "Chopta",
  "Lansdowne",
  "Dhanaulti",
];

const honeymoonFeatures = [
  "Luxury sedans & SUVs (Dzire, Etios, Innova Crysta)",
  "Romantic dinner setups & candle light assistance",
  "Special honeymoon suites & mountain view stays",
  "Photography assistance & scenic viewpoints",
  "100% Privacy & personalized attention",
  "Customized romantic itineraries with sunset spots",
];

const familyDestinations = [
  "Mussoorie",
  "Nainital",
  "Rishikesh",
  "Haridwar",
  "Jim Corbett",
  "Dehradun",
];

const familyFeatures = [
  "Spacious vehicles (Ertiga, Innova Crysta, Tempo Traveller)",
  "Child safety seats available upon request",
  "Family-friendly comfortable mountain accommodations",
  "Flexible itinerary suitable for all age groups",
  "24/7 Emergency roadside support & tracking",
  "Kid-friendly activities, boating & sightseeing",
];

export default function HoneymoonFamilyTabs() {
  const [activeTab, setActiveTab] = useState("honeymoon");

  return (
    <section className="py-14 sm:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary tracking-tight">
            Customized Honeymoon & Family Packages
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto my-3 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Planning your honeymoon or a family vacation? We provide luxury cabs with professional drivers to make your trip memorable. Our tour packages from Dehradun cover top destinations like Mussoorie, Nainital, Auli, Chopta, and more.
          </p>
        </div>

        {/* Tab Switcher Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-slate-200 rounded-full shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("honeymoon")}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                activeTab === "honeymoon"
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md scale-105"
                  : "text-slate-600 hover:text-secondary"
              }`}
            >
              <span>💖</span>
              <span>Honeymoon Packages</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("family")}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                activeTab === "family"
                  ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-md scale-105"
                  : "text-slate-600 hover:text-secondary"
              }`}
            >
              <span>👨‍👩‍👧‍👦</span>
              <span>Family Packages</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "honeymoon" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-rose-100 shadow-card">
            <div className="bg-rose-50/50 p-5 sm:p-6 rounded-2xl border border-rose-100">
              <h4 className="flex items-center gap-2 text-secondary font-extrabold text-lg mb-4">
                <i className="fas fa-map-marker-alt text-rose-500"></i>
                Popular Honeymoon Destinations
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                {honeymoonDestinations.map((dest) => (
                  <div
                    key={dest}
                    className="bg-white px-3.5 py-2.5 rounded-xl border border-rose-100 text-slate-700 text-sm font-bold flex items-center gap-2 shadow-xs"
                  >
                    <span className="text-rose-500">→</span>
                    <span>{dest}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-2 sm:p-3">
              <h4 className="flex items-center gap-2 text-secondary font-extrabold text-lg mb-4">
                <i className="fas fa-star text-amber-500"></i>
                Special Honeymoon Features
              </h4>
              <ul className="space-y-3">
                {honeymoonFeatures.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-semibold"
                  >
                    <i className="fas fa-check-circle text-rose-500 mt-0.5 flex-shrink-0"></i>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-teal-100 shadow-card">
            <div className="bg-teal-50/50 p-5 sm:p-6 rounded-2xl border border-teal-100">
              <h4 className="flex items-center gap-2 text-secondary font-extrabold text-lg mb-4">
                <i className="fas fa-map-marker-alt text-primary"></i>
                Popular Family Destinations
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                {familyDestinations.map((dest) => (
                  <div
                    key={dest}
                    className="bg-white px-3.5 py-2.5 rounded-xl border border-teal-100 text-slate-700 text-sm font-bold flex items-center gap-2 shadow-xs"
                  >
                    <span className="text-primary">→</span>
                    <span>{dest}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-2 sm:p-3">
              <h4 className="flex items-center gap-2 text-secondary font-extrabold text-lg mb-4">
                <i className="fas fa-shield-halved text-primary"></i>
                Special Family Features
              </h4>
              <ul className="space-y-3">
                {familyFeatures.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-semibold"
                  >
                    <i className="fas fa-check-circle text-primary mt-0.5 flex-shrink-0"></i>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center mt-8">
          <Link
            href={
              activeTab === "honeymoon"
                ? "/contact?dest=Uttarakhand%20Honeymoon%20Package"
                : "/contact?dest=Uttarakhand%20Family%20Package"
            }
            className={`inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-white font-extrabold text-sm sm:text-base shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 ${
              activeTab === "honeymoon"
                ? "bg-gradient-to-r from-pink-500 to-rose-600 shadow-rose-500/30"
                : "bg-gradient-to-r from-primary to-primary-dark shadow-primary/30"
            }`}
          >
            <span>{activeTab === "honeymoon" ? "Plan My Honeymoon →" : "Plan Family Vacation →"}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
