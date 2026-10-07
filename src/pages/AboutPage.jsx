import React from 'react';
import { ArrowRight, Check, ShieldCheck, Sliders, Cpu, Compass, Layers, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function AboutPage({ onOpenQuote, onSelectImage }) {
  const customCapabilities = [
    { title: "Material Versatility", desc: "Stainless Steel (304/316), Anodized Aluminium, Solid Brass, Pure Copper, Phosphor Bronze, and Industrial PVC/Vinyl." },
    { title: "Micron Dimensional Accuracy", desc: "CNC profiling and fiber laser cutting providing ±0.1mm dimensional fidelity for exact recessed machine mounting." },
    { title: "Permanent Chemical & Laser Marking", desc: "Deep contrast etching and fiber laser markings resistant to solvent washes, continuous lubricants, and UV degradation." },
    { title: "Cutouts & Component Mounting", desc: "Precision pre-machined switch apertures, potentiometer dials, emergency push cutouts, and corner rivet holes." }
  ];

  return (
    <div>
      {/* Page Hero Banner */}
      <PageHero
        image="/images/machine-with-plates.jpg"
        objectPosition="center 40%"
        eyebrow="ABOUT RAMESHWAR INDUSTRIES"
        title="Precision Industrial Identification & Custom Plate Manufacturing"
        description="Specialist manufacturer of custom industrial nameplates, machine identification plates, equipment specification labels, and architectural industrial signage."
        breadcrumbs={[{ label: 'About' }]}
      />

      <div className="pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 space-y-16">

        {/* Two-Column Deep Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
              <img
                src="/images/custom-plates-group.jpg"
                alt="Rameshwar Industries Multi-Material Plate Array"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500 cursor-pointer"
                onClick={() => onSelectImage('/images/custom-plates-group.jpg', 'Multi-Material Custom Plate Collection')}
              />
              <div className="p-4 bg-industrial-950 text-white border-t border-slate-800 text-xs font-mono">
                <span className="text-brand-orange font-bold">MANUFACTURING SCOPE:</span> Stainless Steel, Anodized Aluminium, Brass & Copper Plates.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-industrial-950 tracking-tight">
              Engineered Specifically for Industrial Demands
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Industrial name plates are more than just labels; they are crucial assets that carry legal certifications, operating thresholds, electrical safety warnings, and brand identity throughout decades of harsh service.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Unlike generic print shops, we operate dedicated industrial metal finishing equipment configured specifically for metal substrates and harsh plant environments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {customCapabilities.map((cap) => (
                <div key={cap.title} className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-industrial-950">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>{cap.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customization Parameters Breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-industrial-950">
              Complete Customization Spectrum
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Every order is processed to your exact drawing tolerances, hole patterns, and graphics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h4 className="font-bold text-sm text-industrial-950 mb-1">Dimensions & Shapes</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                From 10mm micro barcode tags to 1200mm room signs. Custom CAD contour cuts, chamfers, and corner radii.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h4 className="font-bold text-sm text-industrial-950 mb-1">Marking Technology</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fiber laser engraving, acid chemical etching, hydraulic stamping, screen printing, and DataMatrix codes.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h4 className="font-bold text-sm text-industrial-950 mb-1">Apertures & Cutouts</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Laser cutouts for toggle switches, emergency stop buttons, potentiometer shafts, and LED lamps.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h4 className="font-bold text-sm text-industrial-950 mb-1">Mounting & Fastening</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Drive rivets, countersunk screw holes, blind studs, or pre-applied 3M high-bond acrylic foam adhesives.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h4 className="font-bold text-sm text-industrial-950 mb-1">Variable Data & Serialization</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sequential serial numbering, variable batch codes, QR codes, and blank punchable model windows.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h4 className="font-bold text-sm text-industrial-950 mb-1">Surface Passivation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Satin brushed, mirror polish, matte anodized, bead-blasted, enamel filled, and corrosion passivated.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="p-8 rounded-2xl bg-industrial-950 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Have a custom drawing or specification?</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">Our engineering desk provides rapid estimations and sample feedback.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuote("Custom Plate Engineering Review")}
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-md transition-colors cursor-pointer"
            >
              Request a Quote
            </button>
            <Link
              to="/contact"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}
