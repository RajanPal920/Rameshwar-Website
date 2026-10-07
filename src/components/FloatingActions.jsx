import React from 'react';
import { Phone } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io5";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-900/30 hover:shadow-xl hover:scale-105 transition-all duration-200 relative"
        aria-label="Direct WhatsApp Chat"
      >
        <IoLogoWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />

        {/* Tooltip on hover */}
        <span className="hidden sm:group-hover:inline-block absolute right-16 bg-industrial-950 text-white text-xs font-semibold py-1.5 px-3 rounded shadow-md whitespace-nowrap border border-slate-700">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919876543210"
        className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-full shadow-lg shadow-orange-900/30 hover:scale-105 transition-all duration-200 relative"
        aria-label="Call Rameshwar Industries"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />

        {/* Tooltip on hover */}
        <span className="hidden sm:group-hover:inline-block absolute right-16 bg-industrial-950 text-white text-xs font-semibold py-1.5 px-3 rounded shadow-md whitespace-nowrap border border-slate-700">
          Call Factory Sales
        </span>
      </a>
    </div>
  );
}
