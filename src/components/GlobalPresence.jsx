import React from 'react';
import { MapPin, Building2 } from 'lucide-react';

// Indian industrial and commercial cities for the top section
const CITIES_DATA = [
  "Mumbai",
  "Pune",
  "Nashik",
  "Nagpur",
  "Bengaluru",
  "Chennai",
  "Hyderabad",
  "Ahmedabad",
  "Surat",
  "Vadodara",
  "Rajkot",
  "Kolkata",
  "New Delhi",
  "Noida",
  "Gurugram",
  "Jaipur",
  "Coimbatore",
  "Ludhiana",
  "Indore",
  "Bhopal",
  "Chhatrapati Sambhajinagar",
  "Thane",
  "Navi Mumbai",
  "Faridabad",
  "Kanpur",
  "Lucknow",
  "Visakhapatnam",
  "Jamshedpur",
  "Baddi",
  "Vapi",
  "Bharuch",
  "Morbi",
  "Ankleshwar",
  "Hosur",
  "Tiruppur",
  "Salem",
  "Mysuru",
  "Hubballi",
  "Kochi",
  "Bhubaneswar",
  "Raipur",
  "Patna",
  "Dehradun",
  "Haridwar",
  "Jodhpur",
  "Udaipur",
  "Gwalior",
  "Cuttack",
  "Ranchi",
  "Panipat",
  "Rohtak",
  "Jalna",
  "Kolhapur",
  "Bhiwandi",
  "Vasai",
  "Tarapur",
];

// All 28 Indian States & 8 Union Territories for the bottom section
const INDIAN_STATES_AND_UTS = [
  // 28 States
  { name: "Andhra Pradesh", type: "STATE" },
  { name: "Arunachal Pradesh", type: "STATE" },
  { name: "Assam", type: "STATE" },
  { name: "Bihar", type: "STATE" },
  { name: "Chhattisgarh", type: "STATE" },
  { name: "Goa", type: "STATE" },
  { name: "Gujarat", type: "STATE" },
  { name: "Haryana", type: "STATE" },
  { name: "Himachal Pradesh", type: "STATE" },
  { name: "Jharkhand", type: "STATE" },
  { name: "Karnataka", type: "STATE" },
  { name: "Kerala", type: "STATE" },
  { name: "Madhya Pradesh", type: "STATE" },
  { name: "Maharashtra", type: "STATE" },
  { name: "Manipur", type: "STATE" },
  { name: "Meghalaya", type: "STATE" },
  { name: "Mizoram", type: "STATE" },
  { name: "Nagaland", type: "STATE" },
  { name: "Odisha", type: "STATE" },
  { name: "Punjab", type: "STATE" },
  { name: "Rajasthan", type: "STATE" },
  { name: "Sikkim", type: "STATE" },
  { name: "Tamil Nadu", type: "STATE" },
  { name: "Telangana", type: "STATE" },
  { name: "Tripura", type: "STATE" },
  { name: "Uttar Pradesh", type: "STATE" },
  { name: "Uttarakhand", type: "STATE" },
  { name: "West Bengal", type: "STATE" },

  // 8 Union Territories
  { name: "Andaman and Nicobar Islands", type: "UNION TERRITORY" },
  { name: "Chandigarh", type: "UNION TERRITORY" },
  { name: "Dadra and Nagar Haveli and Daman and Diu", type: "UNION TERRITORY" },
  { name: "Delhi", type: "UNION TERRITORY" },
  { name: "Jammu and Kashmir", type: "UNION TERRITORY" },
  { name: "Ladakh", type: "UNION TERRITORY" },
  { name: "Lakshadweep", type: "UNION TERRITORY" },
  { name: "Puducherry", type: "UNION TERRITORY" },
];

export default function GlobalPresence() {
  return (
    <div>
      {/* 1. TOP SECTION — Cities (Strategic Domestic Supply) */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-800 text-xs font-mono font-bold tracking-widest uppercase mb-4 border border-slate-200 shadow-xs">
              <Building2 className="w-3.5 h-3.5 text-brand-orange" />
              <span>STRATEGIC DOMESTIC SUPPLY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-industrial-950 tracking-tight uppercase">
              STRATEGIC DOMESTIC SUPPLY
            </h2>

            <p className="text-slate-600 text-sm sm:text-base md:text-lg mt-3 leading-relaxed">
              Delivering precision-manufactured industrial nameplates, machine tags, and control panel marking solutions across India.
            </p>
          </div>

          {/* City Pills: White Background, Thin Orange Border, Rounded Pill, Dot, Dark Maroon Text */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto">
            {CITIES_DATA.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-brand-orange text-xs sm:text-sm font-medium text-[#651c26] shadow-xs hover:border-brand-orange-dark hover:bg-orange-50/40 hover:shadow-sm transition-all duration-150 cursor-default"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-300 shrink-0" />
                <span className="whitespace-nowrap">{city}</span>
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 2. BOTTOM SECTION — Indian States (Dark Maroon Background, Gold Accents) */}
      <section className="py-16 md:py-24 bg-[#2b080d] text-white border-b border-[#420d14] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#420d14] text-amber-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 border border-amber-500/30 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>INDIA-WIDE COVERAGE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              OUR PRESENCE ACROSS INDIA
            </h2>

            <p className="text-amber-100/80 text-sm sm:text-base md:text-lg mt-3 leading-relaxed">
              Serving industrial customers across India with precision-manufactured identification and marking solutions.
            </p>
          </div>

          {/* Indian States and Union Territories: Gold Outlined Compact Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto">
            {INDIAN_STATES_AND_UTS.map((state) => (
              <div
                key={state.name}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#3d0c13]/90 border border-amber-400/40 hover:border-amber-400 hover:bg-[#52121b] transition-all duration-150 cursor-default shadow-xs group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-amber-50 group-hover:text-white whitespace-nowrap">
                  {state.name}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Dispatch & Logistics Strip */}
          <div className="mt-14 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-mono font-medium text-amber-200/90 bg-[#3d0c13]/80 px-6 py-3.5 rounded-full border border-amber-500/30 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              <span className="font-semibold text-white">Pan-India Express Dispatch</span>
              <span className="hidden sm:inline text-amber-500/40">•</span>
              <span>Serving Clients Across All 28 States &amp; 8 UTs</span>
              <span className="hidden sm:inline text-amber-500/40">•</span>
              <span>Industrial Transit-Grade Packaging</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
