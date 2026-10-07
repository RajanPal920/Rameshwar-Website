import React from 'react';
import { MATERIALS } from '../data/productData';
import { Check, ArrowRight, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function MaterialsPage({ onOpenQuote, onSelectImage }) {
  const comparisonData = [
    { material: "Stainless Steel (304/316)", temp: "Up to 800°C", corrosion: "Extreme (Marine/Acid)", method: "Laser Engraved / Chem Etch", bestFor: "Heavy Machinery, Chemical Refineries, Boilers" },
    { material: "Anodized Aluminium", temp: "Up to 300°C", corrosion: "High (Non-Oxidizing)", method: "Laser / Silk Screen / Stamped", bestFor: "Control Panels, Electronics, Asset Tags" },
    { material: "Solid Brass", temp: "Up to 400°C", corrosion: "High (Saltwater Resistant)", method: "Deep Chemical Etch & Enamel", bestFor: "Turbines, Heavy Pumps, Marine Equipment" },
    { material: "Pure Copper", temp: "Up to 350°C", corrosion: "Moderate to High", method: "Laser Etch / Stamp / Lacquer", bestFor: "Transformer Cabinets, Grounding Plates" },
    { material: "Cast / Phosphor Bronze", temp: "Up to 450°C", corrosion: "Superior Marine Stability", method: "Cast Relief / CNC Machined", bestFor: "Heavy Bearings, Friction Parts, Mining Equipment" },
    { material: "Industrial PVC / Vinyl", temp: "Up to 90°C", corrosion: "High Solvent Resistance", method: "Laminated Digital / Screen Print", bestFor: "Curved Housings, High-Voltage Warning Labels" }
  ];

  return (
    <div>
      {/* Page Hero Banner */}
      <PageHero
        image="/images/brass-industrial-plate.jpg"
        objectPosition="center 50%"
        eyebrow="METALLURGICAL SUBSTRATE GUIDE"
        title="Industrial Identification in Multiple Materials"
        description="From surgical-grade stainless steels to heavy phosphor bronze and chemically resilient PVC overlays, we match the ideal material to your plant operating parameters."
        breadcrumbs={[{ label: 'Materials' }]}
      />

      <div className="pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 space-y-16">

        {/* 6 Substrate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MATERIALS.map((mat) => (
            <div
              key={mat.id}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-brand-orange/60 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div 
                  className="relative aspect-[16/10] bg-slate-900 overflow-hidden cursor-pointer"
                  onClick={() => onSelectImage(mat.image, `${mat.name} Material Specimen`)}
                >
                  <img
                    src={mat.image}
                    alt={`${mat.name} Plate`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-industrial-950/90 backdrop-blur-md text-white text-xs font-extrabold px-3 py-1 rounded tracking-wider uppercase border border-white/10">
                    {mat.name}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-industrial-950 group-hover:text-brand-orange transition-colors">
                    {mat.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {mat.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    {mat.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 stroke-[2.5]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenQuote(`${mat.name} Plate Requirements`)}
                  className="w-full bg-slate-900 hover:bg-brand-orange text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors cursor-pointer"
                >
                  Request Quote for {mat.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Material Matrix Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm overflow-hidden">
          <h3 className="text-xl font-bold text-industrial-950 mb-4">
            Substrate Selection & Performance Matrix
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-100 text-slate-800 border-b border-slate-200 uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-3.5">Material Substrate</th>
                  <th className="p-3.5">Temp Rating</th>
                  <th className="p-3.5">Corrosion Resistance</th>
                  <th className="p-3.5">Marking Method</th>
                  <th className="p-3.5">Recommended Applications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 font-bold text-industrial-950">{row.material}</td>
                    <td className="p-3.5 text-slate-600">{row.temp}</td>
                    <td className="p-3.5 text-slate-600">{row.corrosion}</td>
                    <td className="p-3.5 text-slate-600">{row.method}</td>
                    <td className="p-3.5 text-slate-600 font-sans">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}
