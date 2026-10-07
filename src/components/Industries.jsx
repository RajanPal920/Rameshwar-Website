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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-slate-800 text-xs font-mono tracking-wider uppercase mb-3 border border-slate-200">
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
        <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl mb-12 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">

            {/* Prominent Real Industrial Photography */}
            <div
              className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:h-[380px] overflow-hidden cursor-pointer"
              onClick={() => onSelectImage('/images/machine-with-plates.jpg', 'Modern CNC Machining Center with Factory Installed Nameplates')}
            >
              <img
                src="/images/machine-with-plates.jpg"
                alt="Industrial Machine with installed nameplates and control consoles"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-industrial-950/90 backdrop-blur-md px-3 py-1.5 rounded-md text-xs font-mono text-white flex items-center gap-2 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                <span>SHOP FLOOR INSTALLATION</span>
              </div>
            </div>

            {/* Accompanying Information */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 text-white space-y-4">
              <span className="text-xs font-mono text-brand-orange tracking-widest uppercase font-bold">
                HEAVY INDUSTRIAL INTEGRATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
                Plates Engineered to Endure Severe Plant Floor Conditions
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether subjected to high vibration, aggressive cutting fluids, washdowns, or continuous thermal cycling, our plates remain securely attached and permanently legible throughout equipment lifecycles.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs px-5 py-2.5 rounded-md transition-colors cursor-pointer"
                >
                  <span>Request Engineering Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* 8 Industry & Application Photo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.name}
              to="/industries"
              className="group relative bg-slate-900 rounded-xl border border-slate-200 hover:border-brand-orange/60 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Real Industrial Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Title Only */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-base sm:text-lg tracking-tight group-hover:text-brand-orange transition-colors">
                    {ind.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}