import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, SlidersHorizontal, ShieldCheck } from 'lucide-react';

export default function About({ onSelectImage }) {
  const specializedProducts = [
    "Industrial Name Plates",
    "Machine Identification Plates",
    "Equipment Plates",
    "Control Panel Plates",
    "Door / Room Plates",
    "Directional Plates",
    "Custom Industrial Labels"
  ];

  const customizationParameters = [
    "Material Substrate",
    "Size & Dimensions",
    "Shape & Contours",
    "Text & Typography",
    "Company Logo",
    "Serial Number",
    "Model Number",
    "Holes & Cut-outs",
    "Application Requirements"
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* LEFT: Fixed-width Image Card */}
          <div className="w-full max-w-[560px] lg:w-[460px] lg:max-w-none lg:shrink-0 mx-auto lg:mx-0 relative">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl group">
              <img
                src="/images/about-img-home.jpg"
                alt="Rameshwar Industries - Precision Engineered Brass Turbine Name Plate"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500 cursor-pointer"
              />

              {/* Overlay engineering tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-industrial-950/90 backdrop-blur-md text-white p-4 rounded-xl border border-white/10 shadow-lg">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300 pb-2 border-b border-slate-800">
                  <span className="text-brand-orange font-bold">CLOSE-UP SPECIMEN</span>
                  <span className="hidden sm:inline">SOLID BRASS / DEEP ETCH</span>
                </div>
                <p className="text-xs text-slate-200 mt-2 font-mono">
                  Deep enamel infill, beveled safety border & countersunk screw alignment.
                </p>
              </div>
            </div>

            {/* Decorative backdrop */}
            <div className="absolute -top-4 -left-4 w-28 h-28 border-2 border-slate-200 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-2 border-brand-orange/30 rounded-2xl -z-10"></div>
          </div>

          {/* RIGHT: About Details */}
          <div className="flex-1 space-y-6">

            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange-50 border border-orange-200 text-brand-orange text-xs font-mono font-bold tracking-wider uppercase">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>COMPANY OVERVIEW</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-industrial-950 tracking-tight leading-tight">
              About Rameshwar Industries
            </h2>

            {/* Content */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Rameshwar Industries</strong> specializes in manufacturing customized name plates, machine identification plates, equipment labels and industrial signage for demanding B2B applications.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our core product lines include:
            </p>

            {/* Specialized Products Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {specializedProducts.map((prod) => (
                <span
                  key={prod}
                  className="text-xs font-semibold bg-slate-100 text-slate-800 px-3 py-1.5 rounded-md border border-slate-200"
                >
                  {prod}
                </span>
              ))}
            </div>

            {/* Customization Parameters Grid */}
            <div className="pt-3">
              <h3 className="text-xs font-mono tracking-widest text-slate-500 uppercase font-semibold mb-3">
                CUSTOM FABRICATION PARAMETERS:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {customizationParameters.map((param) => (
                  <div key={param} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 stroke-[2.5]" />
                    <span>{param}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-industrial-950 hover:bg-industrial-850 text-white font-bold text-sm px-6 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
