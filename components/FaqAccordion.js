"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How can I book a cab?",
    a: "You can book a taxi directly through our website, by calling our 24/7 customer support, or by sending us a message on WhatsApp. Instant booking confirmation is provided.",
  },
  {
    q: "Are your taxi services available 24/7?",
    a: "Yes, our cab services operate round the clock, 7 days a week, ensuring you always have a safe ride whenever you need one.",
  },
  {
    q: "Do you provide outstation rides?",
    a: "Yes, we offer both one-way and round-trip outstation cabs at affordable prices with experienced drivers for a comfortable journey.",
  },
  {
    q: "What are your cab charges?",
    a: "Our city rides start at competitive prices, and outstation rides are charged per kilometer. All fares are transparent with no hidden costs.",
  },
  {
    q: "Do I need to book in advance?",
    a: "We accept same-day bookings, but to ensure availability, especially during peak hours, we recommend booking your cab in advance.",
  },
  {
    q: "Are your rides safe and insured?",
    a: "Yes, passenger safety is our top priority. All cabs are well-maintained and our drivers are experienced, verified, and know the hill routes well.",
  },
  {
    q: "What payment options are available?",
    a: "We accept cash, UPI, and digital wallets for your convenience. You can choose your preferred payment method at the time of booking.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-4xl mx-auto divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-card">
      {faqs.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full flex items-center justify-between text-left px-6 py-5 font-extrabold text-secondary hover:bg-light-bg transition-colors"
            >
              <span>{item.q}</span>
              <i
                className={`fas fa-chevron-down text-primary transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              ></i>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-slate-500 font-medium text-sm leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
