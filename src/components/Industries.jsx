import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '../data/productData';

export default function Industries({ onOpenQuote, onSelectImage }) {
  return (
    <section id="industries" className="py-20 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-slate-800 text-xs font-semibold tracking-wide uppercase mb-3 border border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              <span>SECTOR SPECIALIZATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-industrial-950 tracking-tight">
              Industries & Applications We Serve
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
              Supplying customized name plates, control panel overlays, and machinery data tags to industrial OEMs and plant engineers.
            </p>
          </div>

          <Link
            to="/industries"
            className="inline-flex items-center gap-2 bg-industrial-950 hover:bg-industrial-850 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-md transition-colors self-start md:self-auto group"
          >
            <span>Explore Industries</span>
            <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Prominent Industrial Machine Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-industrial-950 border border-slate-800/80 shadow-xl mb-12 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">

            {/* Prominent Industrial Plate Photography — Clean Framing & Uncropped Full Plate Composition */}
            <div className="lg:col-span-6 relative bg-slate-100/95 border-b lg:border-b-0 lg:border-r border-slate-200/90 p-5 sm:p-7 lg:p-8 flex items-center justify-center min-h-[300px] sm:min-h-[360px] lg:min-h-[420px]">
              <img
                src="/images/machine-with-plates.jpg"
                alt="Industrial Machine with installed nameplates and control consoles"
                className="w-full h-full max-h-[340px] sm:max-h-[380px] object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute top-4 left-4 bg-industrial-950/90 backdrop-blur-md px-3 py-1.5 rounded-md text-xs font-semibold text-white flex items-center gap-2 border border-white/10 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                <span>SHOP FLOOR INSTALLATION</span>
              </div>
            </div>

            {/* Accompanying Information */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 text-white space-y-4">
              <span className="text-xs font-semibold text-brand-orange tracking-wider uppercase">
                HEAVY INDUSTRIAL INTEGRATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
                Plates Engineered to Endure Severe Plant Floor Conditions
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Whether subjected to high vibration, aggressive cutting fluids, washdowns, or continuous thermal cycling, our plates remain securely attached and permanently legible throughout equipment lifecycles.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-colors cursor-pointer shadow-md shadow-orange-600/20"
                >
                  <span>Request Engineering Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* 8 Industry & Application Category Cards Grid (Image + Title + Description ONLY — No Buttons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.name}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* 1. Industry Visual Image (Complete Plate Visible, Zero Cropping) */}
              <div className="relative h-56 sm:h-60 w-full bg-slate-50/70 p-4 sm:p-5 flex items-center justify-center border-b border-slate-100/90 overflow-hidden">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              {/* 2. Industry Title & 3. Short Professional Description (Zero Buttons) */}
              <div className="p-5 sm:p-5.5 flex flex-col flex-1 bg-white">
                <h3 className="text-base sm:text-[17px] font-bold text-slate-900 group-hover:text-brand-orange transition-colors leading-snug">
                  {ind.name}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 mt-2 leading-relaxed font-normal flex-1">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}