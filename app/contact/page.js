import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageBanner from "@/components/PageBanner";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Contact Us & Book Ride - Hanuman Ansh Tour & Travels",
  description: "Contact Hanuman Ansh Tour & Travels Dehradun. Office: Transport Nagar, Subhash Nagar, Sewla Khurd. Call or WhatsApp +91 8077107439 for instant taxi quotes.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="Book Your Ride / Contact Us"
        subtitle="Fill Details Below For Instant Ride Confirmation & Direct WhatsApp Quote"
        image="/images/destinations/sunset-valley.jpg"
      />

      {/* Booking Form Section */}
      <section className="py-14 sm:py-16 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4">
          <Suspense fallback={<div className="text-center py-10 text-slate-500 font-bold">Loading booking form…</div>}>
            <BookingForm />
          </Suspense>
        </div>
      </section>

      {/* Contact Info Cards & Map */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-light-bg border border-slate-200 text-center h-full flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl mb-3">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h5 className="font-extrabold text-secondary text-lg mb-2">Office Address</h5>
              <p className="text-slate-600 text-sm font-medium mb-0 leading-relaxed">
                Transport Nagar, Subhash Nagar, Dehradun, Sewla Khurd, Uttarakhand 248002
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-light-bg border border-slate-200 text-center h-full flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-accent/15 text-accent flex items-center justify-center text-2xl mb-3">
                <i className="fas fa-phone"></i>
              </div>
              <h5 className="font-extrabold text-secondary text-lg mb-2">Phone & WhatsApp</h5>
              <p className="text-slate-700 text-base font-extrabold mb-1">
                <a href="tel:+918077107439" className="hover:text-primary">
                  +91 8077107439
                </a>
              </p>
              <p className="text-slate-500 text-xs font-semibold">
                Available 24/7 for instant quotes & bookings
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-light-bg border border-slate-200 text-center h-full flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-2xl mb-3">
                <i className="fas fa-clock"></i>
              </div>
              <h5 className="font-extrabold text-secondary text-lg mb-2">Working Hours</h5>
              <p className="text-slate-700 text-sm font-bold mb-1">
                24/7 Taxi Booking Service
              </p>
              <p className="text-slate-500 text-xs font-semibold mb-0">
                Customer Support: Round the Clock
              </p>
            </div>
          </div>

          {/* Map Container */}
          <div className="mt-12 sm:mt-16">
            <h3 className="font-extrabold text-secondary text-center text-2xl sm:text-3xl mb-4">
              Our Location in Dehradun
            </h3>
            <p className="text-center text-slate-500 text-sm max-w-xl mx-auto mb-6">
              Located conveniently near Transport Nagar & Subhash Nagar, Sewla Khurd for quick vehicle dispatch across Dehradun.
            </p>
            <div className="rounded-3xl overflow-hidden shadow-card border border-slate-200 h-[340px] sm:h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d110255.54241659444!2d77.9061384585026!3d30.280231698678303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39092b0f5e75ed1b%3A0x46240553e54db5aa!2snear%20Durga%20Mandir%2C%20Transport%20Nagar%2C%20Naya%20Gaon%2C%20Chandrabani%2C%20Sewla%20Khurd%2C%20Dehradun%2C%20Uttarakhand%20248002!3m2!1d30.280257499999998!2d77.9885398!5e0!3m2!1sen!2sin!4v1758804556327!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Hanuman Ansh Tour & Travels Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <FloatingButtons />
      <Footer />
    </>
  );
}
