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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MATERIALS.map((mat) => (
            <div
              key={mat.id}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
            >
              <div>
                {/* Plate Specimen with object-contain */}
                <Link 
                  to={mat.seoUrl}
                  className="block relative aspect-[16/11] bg-slate-50/70 p-4 sm:p-5 border-b border-slate-100/90 overflow-hidden flex items-center justify-center cursor-pointer"
                >
                  <img
                    src={mat.image}
                    alt={`${mat.name} Industrial Name Plate Specimen`}
                    className="w-full h-full object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-md shadow-2xs border border-slate-200/60">
                    {mat.badge || 'OEM Grade'}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <Link to={mat.seoUrl} className="block group-hover:text-brand-orange transition-colors">
                    <h3 className="text-base sm:text-[17px] font-bold text-slate-900 group-hover:text-brand-orange transition-colors leading-snug">
                      {mat.name}
                    </h3>
                  </Link>
                  <p className="text-xs sm:text-[13px] text-slate-600 mt-2 line-clamp-2 leading-relaxed font-normal">
                    {mat.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 sm:p-6 pt-0 mt-auto">
                <div className="pt-3.5 border-t border-slate-100 flex items-center gap-2">
                  <Link
                    to={mat.seoUrl}
                    className="inline-flex items-center justify-center gap-1.5 flex-1 text-xs font-semibold text-slate-800 bg-slate-50 hover:bg-slate-900 hover:text-white border border-slate-200/80 hover:border-slate-900 px-3.5 py-2.5 rounded-xl transition-all duration-200 group/btn"
                  >
                    <span>Material Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    to={`/contact?material=${encodeURIComponent(mat.name)}`}
                    className="inline-flex items-center justify-center text-xs font-semibold text-white bg-brand-orange hover:bg-brand-orange-dark px-3.5 py-2.5 rounded-xl transition-all duration-200 shadow-2xs shrink-0"
                  >
                    Inquire
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
