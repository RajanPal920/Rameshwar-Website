import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ShieldCheck, Sparkles, Sliders } from 'lucide-react';
import { MATERIALS } from '../data/productData';

export default function MaterialShowcase({ onOpenQuote, onSelectImage }) {
  return (
    <section id="materials" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 text-slate-100 text-xs font-semibold tracking-wide uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              <span>SUBSTRATE SELECTION GUIDE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-industrial-950 tracking-tight">
              Choose the Right Material for Your Application
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
              Operating conditions dictate alloy selection. We precision manufacture in surgical stainless steel, anodized aluminium, brass, copper, bronze, and PVC.
            </p>
          </div>

          <Link
            to="/materials"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-orange hover:text-brand-orange-dark shrink-0"
          >
            <span>View Full Substrate Matrix</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Material Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MATERIALS.map((mat) => (
            <div
              key={mat.id}
              className="group bg-white rounded-xl border border-slate-200 hover:border-brand-orange/60 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Sample Plate Image with Natural Aspect */}
                <Link 
                  to={mat.seoUrl}
                  className="block relative aspect-[16/10] bg-white overflow-hidden cursor-pointer"
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

                  <div className="absolute bottom-3 left-3 bg-white/95 text-slate-900 text-[11px] font-semibold px-2.5 py-0.5 rounded shadow-xs">
                    {mat.grades}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  {/* Headline */}
                  <Link to={mat.seoUrl} className="block">
                    <h3 className="text-lg font-bold text-industrial-950 group-hover:text-brand-orange transition-colors">
                      {mat.headline}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                    {mat.description}
                  </p>

                  {/* Clickable Grade Badges */}
                  {mat.gradesList && mat.gradesList.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Verified Alloys:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {mat.gradesList.map((g) => (
                          <Link
                            key={g.code}
                            to={`${mat.seoUrl}?grade=${encodeURIComponent(g.code)}`}
                            className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 hover:bg-brand-orange hover:text-white text-slate-700 transition-colors border border-slate-200/60"
                          >
                            {g.code}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bullet Highlights */}
                  <div className="mt-4 space-y-2 pt-4 border-t border-slate-100">
                    {mat.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 stroke-[2.5]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-0 space-y-2">
                <Link
                  to={mat.seoUrl}
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold text-white bg-slate-900 hover:bg-industrial-950 py-2.5 px-4 rounded-lg transition-colors shadow-xs"
                >
                  <span>View {mat.name} Substrate Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to={`/materials?filter=${mat.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold text-brand-orange hover:text-white bg-orange-50 hover:bg-brand-orange border border-orange-200 py-2 px-4 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Filter Catalogue Products in {mat.name}</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
