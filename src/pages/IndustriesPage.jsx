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
        image="/images/control-panel-plate.jpg"
        objectPosition="center 45%"
        eyebrow="SECTOR EXPERTISE"
        title="Industries & Applications We Serve"
        description="Supplying precision identification plates, control faceplates, and technical rating tags to major engineering sectors across India and global export markets."
        breadcrumbs={[{ label: 'Industries' }]}
      />

      <div className="pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 space-y-16">

        {/* 8 Sector Cards with Real Product & Industrial Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.name}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div 
                  className="relative aspect-[16/9] bg-slate-900 overflow-hidden cursor-pointer"
                  onClick={() => onSelectImage(ind.image, `${ind.name} Industrial Deployment`)}
                >
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-5 text-white">
                    <span className="text-[11px] font-mono text-brand-orange uppercase font-bold tracking-wider">SECTOR SPECIFICATION</span>
                    <h3 className="text-xl font-bold">{ind.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {ind.desc}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs font-mono text-slate-700">
                    <div>• Serial & Rating Plates</div>
                    <div>• Safety & Warning Tags</div>
                    <div>• Dial & Feed Rate Charts</div>
                    <div>• Panel Legend Strips</div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenQuote(`${ind.name} Industry Requirements`)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-brand-orange text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Request RFQ for {ind.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
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
          <button
            onClick={() => onOpenQuote("Custom Industrial Specification")}
            className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-md transition-colors cursor-pointer shrink-0"
          >
            Submit Engineering Drawings
          </button>
        </div>

      </div>
      </div>
    </div>
  );
}
