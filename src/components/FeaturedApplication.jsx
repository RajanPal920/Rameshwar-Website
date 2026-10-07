import React from 'react';
import { ArrowRight, Check, Wrench, Shield, CheckCircle2 } from 'lucide-react';

export default function FeaturedApplication({ onOpenQuote, onSelectImage }) {
  const highlights = [
    "Machine identification",
    "Equipment information",
    "Control panel marking",
    "Serial & model information",
    "Custom shapes & sizes"
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-industrial-grid-dark opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Image of Industrial Machine/Control Panel Containing Identification Plates */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
              <img
                src="/images/machine-with-plates.jpg"
                alt="CNC Industrial Machine with Installed Rameshwar Nameplates and Control Console"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500 cursor-pointer"
                onClick={() => onSelectImage('/images/machine-with-plates.jpg', 'Industrial Machine Tool with Nameplates & Control Panels')}
              />

              {/* In-situ indicator tag */}
              <div className="absolute top-4 left-4 bg-industrial-950/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 text-xs font-mono text-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>IN-SITU MACHINE INSTALLATION</span>
              </div>

              {/* Callout box */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <p className="text-xs font-mono text-slate-300">
                  <span className="text-brand-orange font-bold">Featured:</span> Heavy-duty CNC center fitted with laser-etched manufacturer data plate, safety warnings, and CNC control console faceplate.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Made For The Machine Details */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-brand-orange text-xs font-mono tracking-wider uppercase font-semibold">
              <Wrench className="w-3.5 h-3.5" />
              <span>MADE FOR THE MACHINE</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Identification That Belongs on the Equipment
            </h2>

            {/* Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              From machine data plates and control panels to room identification and operational labels, our products are designed to deliver clear and professional identification where it matters.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              We understand that industrial plates are not merely cosmetic; they are critical components for maintenance teams, operators, safety compliance auditors, and your company's enduring brand reputation on the plant floor.
            </p>

            {/* Bullet Points */}
            <div className="space-y-3 pt-2">
              {highlights.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-slate-200">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => onOpenQuote("Machine Equipment Plate Requirements")}
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-md shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all cursor-pointer group"
              >
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
