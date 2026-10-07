import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { APPLICATIONS } from '../data/productData';

export default function Applications({ onSelectImage, onOpenQuote }) {
  return (
    <section id="applications" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-slate-800 text-xs font-mono tracking-wider uppercase mb-3 border border-slate-200">
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
              className="group relative bg-slate-50 hover:bg-white rounded-xl border border-slate-200 hover:border-brand-orange/60 p-3 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Image Container */}
                <div 
                  className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 mb-3 cursor-pointer"
                  onClick={() => onSelectImage(app.image, `${app.name} Application`)}
                >
                  <img
                    src={app.image}
                    alt={app.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-industrial-950/80 backdrop-blur-sm text-white text-[10px] font-mono px-1.5 py-0.5 rounded">
                    {app.id}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-sm text-industrial-950 group-hover:text-brand-orange transition-colors">
                  {app.name}
                </h3>

                {/* One-Line Description */}
                <p className="text-xs text-slate-500 mt-1 leading-snug line-clamp-2">
                  {app.desc}
                </p>
              </div>

              {/* Bottom Quick Action */}
              <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-brand-orange font-semibold">
                <span>View Application</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
