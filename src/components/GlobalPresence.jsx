import React from 'react';
import { Globe2 } from 'lucide-react';

// Exact export countries already present in the project with official ISO flag codes
const EXPORT_COUNTRIES = [
  // North America
  { name: "United States", code: "us", region: "North America" },
  { name: "Canada", code: "ca", region: "North America" },
  { name: "Mexico", code: "mx", region: "North America" },
  // Europe
  { name: "United Kingdom", code: "gb", region: "Europe" },
  { name: "Germany", code: "de", region: "Europe" },
  { name: "France", code: "fr", region: "Europe" },
  { name: "Italy", code: "it", region: "Europe" },
  { name: "Spain", code: "es", region: "Europe" },
  { name: "Netherlands", code: "nl", region: "Europe" },
  { name: "Belgium", code: "be", region: "Europe" },
  { name: "Switzerland", code: "ch", region: "Europe" },
  { name: "Austria", code: "at", region: "Europe" },
  { name: "Sweden", code: "se", region: "Europe" },
  { name: "Norway", code: "no", region: "Europe" },
  { name: "Denmark", code: "dk", region: "Europe" },
  { name: "Poland", code: "pl", region: "Europe" },
  { name: "Portugal", code: "pt", region: "Europe" },
  { name: "Czech Republic", code: "cz", region: "Europe" },
  { name: "Turkey", code: "tr", region: "Europe" },
  // Middle East
  { name: "Saudi Arabia", code: "sa", region: "Middle East" },
  { name: "United Arab Emirates", code: "ae", region: "Middle East" },
  { name: "Qatar", code: "qa", region: "Middle East" },
  { name: "Oman", code: "om", region: "Middle East" },
  { name: "Kuwait", code: "kw", region: "Middle East" },
  { name: "Bahrain", code: "bh", region: "Middle East" },
  // Asia & Oceania
  { name: "Singapore", code: "sg", region: "Southeast Asia" },
  { name: "Malaysia", code: "my", region: "Southeast Asia" },
  { name: "Indonesia", code: "id", region: "Southeast Asia" },
  { name: "Australia", code: "au", region: "Oceania" },
  // South America
  { name: "Brazil", code: "br", region: "South America" },
  { name: "Argentina", code: "ar", region: "South America" },
  { name: "Chile", code: "cl", region: "South America" },
  { name: "Colombia", code: "co", region: "South America" },
  // Africa
  { name: "South Africa", code: "za", region: "Africa" },
  { name: "Nigeria", code: "ng", region: "Africa" },
  { name: "Kenya", code: "ke", region: "Africa" },
];

export default function GlobalPresence() {
  return (
    <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-800 text-xs font-mono font-bold tracking-widest uppercase mb-4 border border-slate-200 shadow-xs">
            <Globe2 className="w-3.5 h-3.5 text-brand-orange" />
            <span>GLOBAL EXPORT FOOTPRINT</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-industrial-950 tracking-tight uppercase">
            COUNTRIES WE EXPORT TO
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base md:text-lg mt-3 leading-relaxed">
            Delivering precision-manufactured industrial identification plates, machine tags, and control panel solutions to customers across worldwide markets.
          </p>
        </div>

        {/* Clean Responsive Flag Cards Grid (Desktop 4 cols, Tablet 2-3 cols, Mobile 1-2 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {EXPORT_COUNTRIES.map((country) => (
            <div
              key={country.name}
              className="bg-white rounded-lg border border-slate-200/90 shadow-xs hover:shadow-md hover:border-brand-orange/60 hover:-translate-y-0.5 transition-all duration-200 p-3 sm:p-3.5 flex items-center gap-3.5 group cursor-default"
            >
              {/* Actual Recognizable Country Flag */}
              <div className="w-9 h-6 sm:w-10 sm:h-7 rounded shrink-0 overflow-hidden border border-slate-200/80 shadow-xs bg-slate-100 flex items-center justify-center">
                <img
                  src={`/flags/${country.code}.png`}
                  alt={`${country.name} Flag`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to official FlagCDN URL
                    e.currentTarget.src = `https://flagcdn.com/w80/${country.code}.png`;
                  }}
                />
              </div>

              {/* Country Name */}
              <div className="min-w-0 flex-1">
                <span className="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-brand-orange transition-colors truncate block">
                  {country.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tight block">
                  {country.region}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Export Standards Strip */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-mono font-medium text-slate-600 bg-white px-6 py-3.5 rounded-full border border-slate-200 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span className="font-semibold text-slate-800">Export-Grade Seaworthy Packaging</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>Customs-Compliant Markings</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>Worldwide Air & Sea Freight Logistics</span>
          </div>
        </div>

      </div>
    </section>
  );
}
