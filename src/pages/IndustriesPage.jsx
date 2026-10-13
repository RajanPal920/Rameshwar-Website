import React from 'react';
import { INDUSTRIES } from '../data/productData';
import { Factory, Cog, Zap, Gauge, Bot, Cpu, Flame, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function IndustriesPage({ onOpenQuote, onSelectImage }) {
  return (
    <div>
      {/* Page Hero Banner */}
      <PageHero
        image="/images/img15.jpg"
        objectPosition="center 45%"
        eyebrow="SECTOR EXPERTISE"
        title="Industries & Applications We Serve"
        description="Supplying precision identification plates, control faceplates, and technical rating tags to major engineering sectors across India and global export markets."
        breadcrumbs={[{ label: 'Industries' }]}
      />

      <div className="pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 space-y-16">

          {/* 8 Sector Cards with Real Product & Industrial Imagery (Image + Title + Description ONLY — No Buttons) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.name}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                {/* 1. Industry Visual Image (Complete Plate Visible, Zero Cropping) */}
                <div
                  className="relative h-56 sm:h-60 w-full bg-slate-50/70 p-4 sm:p-5 flex items-center justify-center border-b border-slate-100/90 overflow-hidden cursor-pointer"
                  onClick={() => onSelectImage(ind.image, `${ind.name} Industrial Deployment`)}
                >
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

          {/* Bottom Banner */}
          <div className="p-8 rounded-2xl bg-industrial-950 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Have unique plant specifications or drawing standards?</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">We fabricate directly to your CAD drawings, mounting holes, and text.</p>
            </div>
            <Link
              to="/contact"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-md transition-colors cursor-pointer shrink-0"
            >
              Submit Engineering Drawings
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
