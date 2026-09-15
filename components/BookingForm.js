"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function BookingForm() {
  const searchParams = useSearchParams();
  const destFromUrl = searchParams.get("dest") || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: destFromUrl,
    dateTime: "",
    tripType: "One-Way",
    passengers: 2,
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const waMsg =
      `Hello Hanuman Ansh Tour & Travels 👋, I would like to book a ride:\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `📍 *Pick-Up Location:* ${form.pickup}\n` +
      `🎯 *Destination / Package:* ${form.destination}\n` +
      `⏰ *Pickup Date & Time:* ${form.dateTime || "Flexible"}\n` +
      `🚗 *Trip Type:* ${form.tripType}\n` +
      `👥 *Passengers:* ${form.passengers}\n` +
      `💬 *Message / Requirements:* ${form.message || "N/A"}`;

    const encoded = encodeURIComponent(waMsg);
    const targetPhone = "918077107439";

    window.open(`https://wa.me/${targetPhone}?text=${encoded}`, "_blank");
  };

  const inputClass =
    "w-full rounded-xl px-4 py-3 border-2 border-slate-300 text-slate-800 font-semibold transition-all focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 text-sm sm:text-base";

  return (
    <div className="rounded-[22px] shadow-card overflow-hidden border border-slate-200 bg-white">
      <div className="bg-gradient-to-br from-secondary to-slate-800 text-white px-5 sm:px-8 py-5 text-lg sm:text-[1.35rem] font-extrabold flex items-center gap-3">
        <Image
          src="/images/logo.jpeg"
          alt="Hanuman Ansh Logo"
          width={44}
          height={44}
          className="h-11 w-11 object-cover rounded-full border-2 border-accent flex-shrink-0"
        />
        <div>Book Your Taxi & Tour Package</div>
      </div>
      <div className="p-5 sm:p-8 md:p-10">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-extrabold text-secondary text-sm mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block font-extrabold text-secondary text-sm mb-1.5">
                Your Mobile Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block font-extrabold text-secondary text-sm mb-1.5">
                Pick-Up Location *
              </label>
              <input
                type="text"
                id="pickup"
                required
                value={form.pickup}
                onChange={handleChange}
                placeholder="e.g. Dehradun Railway Station / Airport / Address"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block font-extrabold text-secondary text-sm mb-1.5">
                Destination / Package *
              </label>
              <input
                type="text"
                id="destination"
                required
                value={form.destination}
                onChange={handleChange}
                placeholder="e.g. Mussoorie / Delhi / Haridwar / Chardham"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block font-extrabold text-secondary text-sm mb-1.5">
                Pickup Date & Time *
              </label>
              <input
                type="datetime-local"
                id="dateTime"
                required
                value={form.dateTime}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block font-extrabold text-secondary text-sm mb-1.5">
                  Trip Type
                </label>
                <select
                  id="tripType"
                  value={form.tripType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="One-Way">One-Way Drop</option>
                  <option value="Round-Trip">Round-Trip</option>
                  <option value="Multi-Day Tour">Multi-Day Tour</option>
                </select>
              </div>

              <div>
                <label className="block font-extrabold text-secondary text-sm mb-1.5">
                  Passengers
                </label>
                <input
                  type="number"
                  id="passengers"
                  min="1"
                  max="30"
                  value={form.passengers}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block font-extrabold text-secondary text-sm mb-1.5">
                Your Message / Vehicle Preference
              </label>
              <textarea
                id="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                placeholder="Any specific vehicle requirement (e.g. Sedan, Ertiga, Innova Crysta, Tempo Traveller)..."
                className={inputClass}
              />
            </div>
          </div>

          <div className="text-center mt-7">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-br from-[#25d366] to-[#128c7e] text-white border-none px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-extrabold rounded-full shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <i className="fab fa-whatsapp mr-2 text-xl"></i>
              Send Booking Request via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
