import React, { useState } from 'react';
import { Crosshair, Eye, ShieldCheck, Microscope, Cpu, Sparkles } from 'lucide-react';

export default function QualityPrecision({ onSelectImage }) {
  const [activeCallout, setActiveCallout] = useState(0);

  const callouts = [
    {
      id: "material",
      label: "MATERIAL",
      title: "Certified Industrial Substrates",
      desc: "Mill-certified 304/316 Stainless Steel, aircraft-grade Aluminium, High-tensile Brass, and Pure Copper with verifiable chemical analysis.",
      tag: "Metallurgical Purity"
    },
    {
      id: "size",
      label: "SIZE",
      title: "Sub-Millimeter Tolerances",
      desc: "Cut on high-precision CNC routers and fiber lasers to ±0.1mm dimensional fidelity for direct flush-mount housing integration.",
      tag: "CNC & Laser Calibration"
    },
    {
      id: "text",
      label: "TEXT",
      title: "Permanent Laser & Chemical Etch",
      desc: "Micro-deep engraving that does not wear down with abrasive scrubdowns, oil exposure, or continuous solvent washings.",
      tag: "Permanent Contrast"
    },
    {
      id: "identification",
      label: "IDENTIFICATION",
      title: "High-Visibility Typography",
      desc: "Optimized typographic weight and contrast ratios designed for instantaneous operator legibility in dim plant lighting.",
      tag: "Industrial Legibility"
    },
    {
      id: "finish",
      label: "FINISH",
      title: "Passivated & Protected Surfaces",
      desc: "Deburred edges to prevent operator cuts, satin brushed grains, anodized coatings, and baked enamel color fills.",
      tag: "Deburred & Passivated"
    },
    {
      id: "application",
      label: "APPLICATION",
      title: "Engineered For The Field",
      desc: "Built to survive harsh thermal cycling (-40°C to +400°C), UV radiation, chemical mists, and heavy machine vibration.",
      tag: "Harsh Duty Tested"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-industrial-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-industrial-grid-dark opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-700 text-brand-orange text-xs font-mono tracking-wider uppercase mb-3">
            <Microscope className="w-3.5 h-3.5" />
            <span>METROLOGY & FINISHING EXCELLENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Clear Identification. Professional Finish. Industrial Purpose.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 leading-relaxed">
            Every plate is designed around the information, appearance and application requirements of the equipment it identifies.
          </p>
        </div>

        {/* Technical Callout Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Macro Caliper & Laser Engraved Close-up */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl group">
              <img
                src="/images/plate-precision-macro.jpg"
                alt="Macro Detail of Laser Engraved Industrial Nameplate with Caliper Measurements"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500 cursor-pointer"
                onClick={() => onSelectImage('/images/plate-precision-macro.jpg', 'Macro Inspection - Precision Laser Marking & Caliper Tolerances')}
              />

              {/* Digital Reticle / Crosshair Indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-brand-orange/40 rounded-full pointer-events-none flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-brand-orange animate-ping"></div>
              </div>

              {/* Technical Overlay Bar */}
              <div className="absolute top-4 left-4 bg-industrial-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>INSPECTION CAMERA // MICRON ZOOM</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-industrial-950/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-xs font-mono text-slate-300 flex justify-between items-center">
                <span>ACTIVE FOCUS: <strong className="text-brand-orange">{callouts[activeCallout].label}</strong></span>
                <span className="text-slate-400">{callouts[activeCallout].tag}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Small Technical Labels Grid */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2 font-semibold">
              TECHNICAL AUDIT CRITERIA (CLICK TO INSPECT):
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {callouts.map((c, index) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCallout(index)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    activeCallout === index
                      ? 'bg-industrial-850 border-brand-orange ring-1 ring-brand-orange/40 text-white shadow-lg'
                      : 'bg-industrial-900/70 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-black tracking-widest px-2 py-0.5 rounded ${
                      activeCallout === index
                        ? 'bg-brand-orange text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {c.label}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {c.tag}
                    </span>
                  </div>

                  <div className="mt-2 text-sm font-bold text-white">
                    {c.title}
                  </div>
                  
                  {activeCallout === index && (
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed font-sans animate-fadeIn">
                      {c.desc}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
