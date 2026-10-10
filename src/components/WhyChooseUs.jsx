import React from 'react';
import { Target, PenTool, Layers, Compass, CheckCircle2, ShieldAlert, Cpu, Sparkles, Sliders } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/productData';

export default function WhyChooseUs() {
  const icons = [
    <Target className="w-5 h-5 text-brand-orange" />,
    <PenTool className="w-5 h-5 text-brand-orange" />,
    <Layers className="w-5 h-5 text-brand-orange" />,
    <Compass className="w-5 h-5 text-brand-orange" />,
    <CheckCircle2 className="w-5 h-5 text-brand-orange" />,
    <ShieldAlert className="w-5 h-5 text-brand-orange" />
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-200 text-slate-800 text-xs font-mono tracking-wider uppercase mb-3">
            <span>ENGINEERING STRATEGY & STRENGTHS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-industrial-950 tracking-tight">
            Why Rameshwar Industries?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
            Delivering high-integrity industrial identification plates built for lasting legibility, dimensional accuracy, and rugged factory environments.
          </p>
        </div>

        {/* 4 Feature Cards Grid — Exactly 2 Cards Per Row on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              className="group bg-white p-6 sm:p-7 rounded-xl border border-slate-200 hover:border-brand-orange/60 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Corner Watermark Number */}
              <div className="absolute top-4 right-4 text-3xl font-mono font-black text-slate-100 group-hover:text-orange-50 transition-colors pointer-events-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div>
                {/* Minimal Technical Icon Container */}
                <div className="w-12 h-12 rounded-lg bg-orange-50 group-hover:bg-brand-orange group-hover:text-white border border-orange-100 flex items-center justify-center mb-5 transition-colors duration-200">
                  <div className="group-hover:[&>svg]:text-white transition-colors">
                    {icons[index]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-industrial-950 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Subtle Accent Line */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-orange transition-colors"></span>
                <span>Industrial Standard QA</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
