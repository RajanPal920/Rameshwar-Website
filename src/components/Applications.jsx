import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { APPLICATIONS } from '../data/productData';

export default function Applications({ onSelectImage, onOpenQuote }) {
  return (
    <section id="applications" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-slate-800 text-xs font-semibold tracking-wide uppercase mb-3 border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            <span>END-USE SCENARIOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-industrial-950 tracking-tight">
            Where Our Plates Are Used
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
            From precision machine tools to heavy industrial electrical substations, our identification solutions are engineered to withstand extreme plant environments.
          </p>
        </div>

        {/* 10 Applications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {APPLICATIONS.map((app) => (
            <div
              key={app.id}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Thumbnail Image Container */}
                <div 
                  className="relative aspect-[16/11] rounded-t-2xl overflow-hidden bg-slate-50/70 p-3 border-b border-slate-100/90 flex items-center justify-center cursor-pointer"
                  onClick={() => onSelectImage(app.image, `${app.name} Application`)}
                >
                  <img
                    src={app.image}
                    alt={app.name}
                    className="w-full h-full object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-industrial-950 text-[10px] font-semibold px-2 py-0.5 rounded shadow-2xs border border-slate-200/60">
                    {app.id}
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  {/* Title */}
                  <h3 className="font-bold text-sm sm:text-base text-industrial-950 group-hover:text-brand-orange transition-colors leading-snug">
                    {app.name}
                  </h3>

                  {/* One-Line Description */}
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2 font-normal">
                    {app.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div 
                onClick={() => onSelectImage(app.image, `${app.name} Application`)}
                className="px-4 pb-4 pt-2.5 border-t border-slate-100/80 flex items-center justify-between text-xs text-brand-orange font-semibold cursor-pointer"
              >
                <span>View Specimen</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
