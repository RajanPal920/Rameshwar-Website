import React from 'react';
import { ArrowRight, Check, ShieldCheck, Sparkles, Sliders } from 'lucide-react';
import { MATERIALS } from '../data/productData';

export default function MaterialShowcase({ onOpenQuote, onSelectImage }) {
  return (
    <section id="materials" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 text-slate-100 text-xs font-mono tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            <span>SUBSTRATE SELECTION GUIDE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-industrial-950 tracking-tight">
            Choose the Right Material for Your Application
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
            Different factory operating conditions require specific metallic alloys or synthetic substrates. We manufacture in 5 core industrial materials.
          </p>
        </div>

        {/* 5 Large Material Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MATERIALS.map((mat, idx) => (
            <div
              key={mat.id}
              className={`group bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-400 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                idx === 3 || idx === 4 ? 'lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Sample Plate Image with Natural Aspect */}
                <div 
                  className="relative aspect-[16/10] bg-slate-900 overflow-hidden cursor-pointer"
                  onClick={() => onSelectImage(mat.image, `${mat.name} Material Specimen`)}
                >
                  <img
                    src={mat.image}
                    alt={`${mat.name} Industrial Name Plate Specimen`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay Substrate Pill */}
                  <div className="absolute top-3 left-3 bg-industrial-950/90 backdrop-blur-md text-white text-xs font-extrabold px-3 py-1 rounded-md tracking-wider uppercase border border-white/10">
                    {mat.name}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Headline */}
                  <h3 className="text-lg font-bold text-industrial-950 group-hover:text-brand-orange transition-colors">
                    {mat.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {mat.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-200">
                    {mat.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 stroke-[2.5]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => onOpenQuote(`${mat.name} Material Name Plate`)}
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-800 hover:text-white bg-white hover:bg-industrial-950 border border-slate-300 hover:border-industrial-950 py-2.5 px-4 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Select {mat.name} For RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
