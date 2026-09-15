export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[999] flex flex-col gap-2.5">
      <a
        href="tel:+918077107439"
        aria-label="Call Now"
        className="flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full text-white font-extrabold text-sm sm:text-[0.95rem] shadow-[0_8px_25px_rgba(0,0,0,0.3)] transition-all hover:scale-105 active:scale-95 bg-gradient-to-br from-primary to-primary-dark"
      >
        <i className="fas fa-phone"></i>
        <span>Call Now</span>
      </a>
      <a
        href="https://wa.me/918077107439?text=Hello%20Hanuman%20Ansh%20Tour%20%26%20Travels%20%F0%9F%9A%96%20I%20would%20like%20to%20inquire%20about%20a%20taxi%20booking"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us"
        className="flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full text-white font-extrabold text-sm sm:text-[0.95rem] shadow-[0_8px_25px_rgba(0,0,0,0.3)] transition-all hover:scale-105 active:scale-95 bg-gradient-to-br from-[#25d366] to-[#128c7e]"
      >
        <i className="fab fa-whatsapp text-lg"></i>
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
