import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Layers, Cpu, Sparkles, ExternalLink } from 'lucide-react';

export default function Hero({ onOpenQuote, onSelectImage }) {
  const [activeTab, setActiveTab] = useState(0);

  const heroShowcase = [
    {
      title: "Machine Rating Plate",
      material: "Brushed Stainless Steel 304",
      specs: "400V 3Φ • 5.5 kW / 7.5 HP • IP65",
      image: "/images/machine-name-plate.jpg",
      badge: "Laser Etched & Punched"
    },
    {
      title: "Control Panel Faceplate",
      material: "Anodized Heavy Aluminium",
      specs: "CNC Cutouts • Dial Markings • Switch Holes",
      image: "/images/control-panel-plate.jpg",
      badge: "Precision CNC Machined"
    },
    {
      title: "Equipment Data Spec Plate",
      material: "316 Stainless Steel Sheet",
      specs: "Pressure Rating: 16 Bar • CE Certified",
      image: "/images/equipment-data-plate.jpg",
      badge: "Tabular Technical Rating"
    },
    {
      title: "Turbine Pump Name Plate",
      material: "Heavy Solid Brass with Enamel",
      specs: "3200 RPM • Max Flow 750 GPM • High Temp",
      image: "/images/brass-industrial-plate.jpg",
      badge: "Deep Etch & Black Filled"
    }
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-60 pointer-events-none"></div>

      {/* Subtle Ambient Radial Highlight */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-slate-200/50 rounded-full blur-2xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Core Industrial Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-slate-100 text-xs font-semibold tracking-wider uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
              <span>Industrial Identification Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-industrial-950 tracking-tight leading-[1.12]">
              Precision Name Plates <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-950 via-slate-800 to-brand-orange">
                Built for Industry.
              </span>
            </h1>

            {/* Alternative Supporting Line */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Custom industrial name plates, machine plates and identification solutions designed for machinery, equipment, panels and industrial environments.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-industrial-900 hover:bg-industrial-800 text-white font-semibold text-base px-6 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold text-base px-6 py-3.5 rounded-md shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-200 cursor-pointer"
              >
                <span>Request a Quote</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-3 max-w-lg">
              <div className="flex items-center gap-2 text-slate-800 text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Custom Designs</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Multiple Materials</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Industrial Applications</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Layered Product Composition Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Featured Showcase Card */}
              <div className="relative bg-white rounded-xl p-3 sm:p-4 shadow-xl shadow-slate-300/60 border border-slate-200/90 overflow-hidden">
                
                {/* Header of showcase container */}
                <div className="flex items-center justify-between pb-3 px-1 border-b border-slate-100 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="font-mono font-medium text-slate-700">SPECIMEN // {heroShowcase[activeTab].badge}</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">RAMESHWAR QA-APPROVED</span>
                </div>

                {/* Primary Photo Display with Realistic Containment */}
                <div 
                  className="relative mt-3 rounded-lg overflow-hidden bg-slate-950 aspect-[4/3] group cursor-pointer"
                  onClick={() => onSelectImage(heroShowcase[activeTab].image, heroShowcase[activeTab].title)}
                >
                  <img
                    src={heroShowcase[activeTab].image}
                    alt={heroShowcase[activeTab].title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Corner Brackets for Engineering Blueprint Feel */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/60 pointer-events-none"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/60 pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/60 pointer-events-none"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/60 pointer-events-none"></div>

                  {/* High-res click hint */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-industrial-950/90 text-white text-xs px-3 py-1.5 rounded-md flex items-center gap-1.5 backdrop-blur-sm border border-white/20">
                      <ExternalLink className="w-3.5 h-3.5 text-brand-orange" />
                      Click to View Details
                    </span>
                  </div>

                  {/* Overlaid specs bar */}
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
                    <div className="font-bold text-sm sm:text-base flex items-center justify-between">
                      <span>{heroShowcase[activeTab].title}</span>
                      <span className="text-xs font-mono text-orange-400 bg-orange-950/70 px-2 py-0.5 rounded border border-orange-500/30">
                        {heroShowcase[activeTab].material}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-mono mt-0.5">{heroShowcase[activeTab].specs}</p>
                  </div>
                </div>

                {/* Interactive Product Selector Tabs (Layered Showcase) */}
                <div className="grid grid-cols-4 gap-2 mt-3 pt-3 border-t border-slate-100">
                  {heroShowcase.map((item, idx) => (
                    <button
                      key={item.title}
                      onClick={() => setActiveTab(idx)}
                      className={`relative rounded-lg overflow-hidden border-2 p-1 text-left transition-all ${
                        activeTab === idx 
                          ? 'border-brand-orange ring-2 ring-brand-orange/30 shadow-md scale-102 bg-orange-50/50' 
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <div className="aspect-[4/3] rounded overflow-hidden bg-slate-200">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-1">
                        <p className={`text-[10px] font-bold truncate ${activeTab === idx ? 'text-brand-orange' : 'text-slate-700'}`}>
                          {item.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

              </div>

              {/* Floating Technical Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-industrial-950 text-white p-3.5 rounded-lg shadow-xl border border-slate-700 items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-100">100% Customized Specification</div>
                  <div className="text-[11px] text-slate-400 font-mono">Laser Cut • Screen Print • Etched</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
