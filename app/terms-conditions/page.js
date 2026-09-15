import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
  title: "Terms and Conditions - Hanuman Ansh Tour & Travels",
  description: "Terms and conditions, booking policies, and guidelines for taxi and tour services with Hanuman Ansh Tour & Travels Dehradun.",
};

const sections = [
  {
    icon: "fa-list",
    color: "text-red-500",
    title: "General Guidelines",
    points: [
      "Hanuman Ansh Tour & Travels provides transportation and tour assistance connecting travelers with verified, high-quality mountain and plain taxis.",
      "Air Conditioning (AC) and high music volume may be turned off in steep hill climbs or hairpins for vehicle engine performance and safety.",
      "AC services operate smoothly in plains and gentle hill terrain, subject to road and weather conditions.",
      "Vehicles are provided strictly as per the agreed itinerary. Unplanned deviations or extra halts will incur standard per-km charges.",
      "Toll taxes, state road taxes (if applicable beyond Uttarakhand), parking fees, and driver night allowances are transparently settled per booking quote.",
    ],
  },
  {
    icon: "fa-mountain",
    color: "text-red-500",
    title: "Special Tours and Chardham Yatra",
    intro: "Recommended minimum booking durations for smooth darshan:",
    subPoints: [
      "Full 4 Dham Yatra (Kedarnath, Badrinath, Gangotri, Yamunotri): 9 to 10 Days from Dehradun/Haridwar.",
      "Do Dham Yatra (Kedarnath & Badrinath): 5 to 6 Days from Dehradun/Haridwar.",
      "Ek Dham Yatra (Kedarnath or Badrinath): 3 to 4 Days.",
    ],
    points: [
      "Advance deposit is required to confirm your booking and secure driver and vehicle slot during peak pilgrimage seasons.",
      "The remaining payment is settled conveniently during the journey or prior to the final destination drop.",
    ],
  },
  {
    icon: "fa-check-circle",
    color: "text-red-500",
    title: "Booking and Cancellation Policy",
    points: [
      "Bookings are confirmed immediately upon receiving the advance token. All vehicles are sanitized and pre-inspected.",
      "Cancellations made well in advance receive maximum flexibility or rescheduling options.",
      "In case of extreme weather alerts or sudden road closures, our team assists you with alternative safe routing.",
    ],
  },
  {
    icon: "fa-shield-halved",
    color: "text-red-500",
    title: "Passenger Safety & Conduct",
    points: [
      "Smoking and alcohol consumption inside the vehicle are strictly prohibited for safety and decorum.",
      "All luggage and personal belongings should be kept safely. Drivers ensure trunk locks and assist with loading.",
      "Passengers are requested to cooperate with driver advisories regarding mountain driving timings (e.g. night driving restrictions on specific hill routes).",
    ],
    note: "Please keep emergency contacts and government IDs handy during interstate or Chardham pilgrimage border checkpoints.",
  },
];

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />

      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-secondary mb-2">
              Terms and Conditions
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto mb-5"></div>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Welcome to <strong>Hanuman Ansh Tour & Travels</strong>. We are committed to making your journey across Uttarakhand safe, comfortable, and transparent. Please review our fair guidelines below.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-10 space-y-8 sm:space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200">
                  <i className={`fas ${section.icon} ${section.color} text-lg sm:text-xl`}></i>
                  <h2 className="text-lg sm:text-xl font-extrabold text-secondary">
                    {section.title}
                  </h2>
                </div>

                {section.intro && (
                  <p className="text-slate-700 font-semibold text-sm mb-2">
                    {section.intro}
                  </p>
                )}

                {section.subPoints && (
                  <ul className="space-y-2 mb-4 pl-2">
                    {section.subPoints.map((sp) => (
                      <li
                        key={sp}
                        className="flex items-start gap-2 text-sm text-slate-600 font-medium"
                      >
                        <i className="fas fa-arrow-right text-primary mt-1 text-xs flex-shrink-0"></i>
                        <span>{sp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="space-y-3">
                  {section.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm text-slate-600 font-medium border-b border-dashed border-slate-100 pb-3 last:border-0"
                    >
                      <i className="fas fa-check-circle text-sky-500 mt-0.5 flex-shrink-0"></i>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                {section.note && (
                  <div className="mt-4 bg-amber-50 border-l-4 border-accent rounded-lg px-4 py-3 flex items-start gap-2.5">
                    <i className="fas fa-circle-exclamation text-accent mt-0.5 flex-shrink-0"></i>
                    <p className="text-sm text-slate-700 font-medium mb-0">
                      <strong className="text-secondary">Important Note:</strong>{" "}
                      {section.note}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Box */}
          <div className="mt-10 bg-gradient-to-br from-secondary to-slate-800 rounded-3xl p-6 sm:p-10 text-center text-white">
            <i className="fas fa-headset text-3xl text-accent mb-3"></i>
            <h3 className="text-xl sm:text-2xl font-extrabold mb-2">Have Any Questions?</h3>
            <p className="text-slate-300 text-sm font-medium mb-5 max-w-lg mx-auto">
              Our 24/7 team is ready to assist you with booking details, pricing queries, or custom routes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base font-bold">
              <a
                href="tel:+918077107439"
                className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full transition-colors inline-flex items-center gap-2"
              >
                <i className="fas fa-phone"></i> Call: +91 8077107439
              </a>
              <a
                href="https://wa.me/918077107439"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-full transition-colors inline-flex items-center gap-2"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp Us
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
