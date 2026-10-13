import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MATERIALS, PRODUCTS, CATALOGUE_DOWNLOAD_URL } from '../data/productData';
import { Check, ArrowRight, ShieldCheck, Sparkles, Layers, FileDown } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function MaterialsPage({ onOpenQuote, onSelectImage }) {
  const location = useLocation();
  const [selectedMaterialId, setSelectedMaterialId] = useState('stainless-steel');

  // Check URL query parameters if user navigated with ?filter=material-id
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterParam = params.get('filter');
    if (filterParam && MATERIALS.some((m) => m.id === filterParam || m.slug === filterParam)) {
      setSelectedMaterialId(filterParam);
      // Smooth scroll to product list
      const el = document.getElementById('material-products-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  // Current active material
  const activeMaterial = MATERIALS.find((m) => m.id === selectedMaterialId) || MATERIALS[0];

  // Genuine products belonging to the selected material
  const materialProducts = PRODUCTS.filter((p) =>
    activeMaterial.applicableProductSlugs.includes(p.slug) ||
    activeMaterial.applicableProductSlugs.includes(p.id)
  );

  const comparisonData = [
    {
      material: "Stainless Steel (SS 304 / 316 / 316L)",
      seoUrl: "/stainless-steel-supplier-in-mumbai",
      temp: "Up to 800°C",
      corrosion: "Extreme (Acids, Marine, Caustic)",
      method: "Chemical Etch & Color Enamel / Laser Annealing",
      bestFor: "Heavy Machinery, Chemical Refineries, Boilers, Valves"
    },
    {
      material: "Anodized Aluminium (1050 / 5052 / 6061)",
      seoUrl: "/aluminium-stockist-in-mumbai",
      temp: "Up to 300°C",
      corrosion: "High (Non-Oxidizing Oxide Pores)",
      method: "Sub-Surface Anodized Dye / Fiber Laser",
      bestFor: "Control Panels, Automotive VIN, Motors, Asset Tags"
    },
    {
      material: "Solid Brass (IS 319 / Naval Brass)",
      seoUrl: "/brass-plates-manufacturer-in-mumbai",
      temp: "Up to 400°C",
      corrosion: "High (Saltwater & Marine Resistant)",
      method: "Deep Chemical Etch & Baked Black Enamel",
      bestFor: "Marine Equipment, Heavy Steam Pumps, Executive Plates"
    },
    {
      material: "Pure Copper (ETP Grade C11000)",
      seoUrl: "/copper-plates-supplier-in-india",
      temp: "Up to 350°C",
      corrosion: "High Oxidation Resistance",
      method: "Fiber Laser Anneal / Precision Stamping",
      bestFor: "Electrical Busbars, Power Transformers, Earthing Tags"
    },
    {
      material: "Cast & Phosphor Bronze / Tool Steel",
      seoUrl: "/bronze-plates-stockist-in-india",
      temp: "Up to 450°C",
      corrosion: "Superior Marine Stability & Wear Resilience",
      method: "Cast Relief Lettering / CNC Milling",
      bestFor: "Mining Machinery, Friction Parts, Heavy Bearings"
    },
    {
      material: "Industrial PVC & Laminated Vinyl",
      seoUrl: "/pvc-vinyl-manufacturing-in-mumbai",
      temp: "Up to 90°C",
      corrosion: "Resistant to Oils, Solvents & Moisture",
      method: "UV Screen Print / Digital Thermal Transfer",
      bestFor: "Curved Motor Bodies, Electrical Warnings, Machine Overlays"
    }
  ];

  const handleSelectMaterial = (matId) => {
    setSelectedMaterialId(matId);
    const el = document.getElementById('material-products-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Page Hero Banner */}
      <PageHero
        image="/images/img17.jpg"
        objectPosition="center 50%"
        eyebrow="METALLURGICAL SUBSTRATE GUIDE"
        title="Industrial Identification in Multiple Materials"
        description="From surgical-grade stainless steels to heavy phosphor bronze, solid brass, and chemically resilient PVC overlays, we manufacture in verified alloys supported by our catalogue."
        breadcrumbs={[{ label: 'Materials' }]}
      />

      <div className="pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 space-y-16">

          {/* Download Catalogue Bar */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                <FileDown className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Rameshwar Industries Metallurgy & Product Catalogue
                </h4>
                <p className="text-xs text-slate-500">
                  Detailed technical chemical analysis, alloy grades, and fabrication parameters.
                </p>
              </div>
            </div>

            <a
              href={CATALOGUE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg transition-colors shrink-0 shadow-xs"
            >
              <FileDown className="w-4 h-4" />
              <span>View Full Catalogue (PDF)</span>
            </a>
          </div>

          {/* 6 Substrate Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {MATERIALS.map((mat) => (
              <div
                key={mat.id}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
              >
                <div>
                  <Link
                    to={mat.seoUrl}
                    className="block relative aspect-[16/11] bg-slate-50/70 p-4 sm:p-5 border-b border-slate-100/90 overflow-hidden flex items-center justify-center cursor-pointer"
                  >
                    <img
                      src={mat.image}
                      alt={`${mat.name} Plate`}
                      className="w-full h-full object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-md shadow-2xs border border-slate-200/60">
                      {mat.badge || 'OEM Grade'}
                    </div>
                  </Link>

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

          {/* Genuine Products Under Selected Material */}
          <div id="material-products-section" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-orange-100 text-brand-orange text-xs font-semibold uppercase mb-2">
                  <span>FILTERED BY SUBSTRATE</span>
                </div>
                <h3 className="text-2xl font-bold text-industrial-950">
                  Products Manufactured in {activeMaterial.name}
                </h3>
                <p className="text-sm text-slate-600 mt-1 font-normal">
                  Only displaying industrial plates and labels genuinely supported in this substrate by Rameshwar Industries.
                </p>
              </div>

              {/* Material Switcher Tabs */}
              <div className="flex flex-wrap items-center gap-1.5">
                {MATERIALS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMaterialId(m.id)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${selectedMaterialId === m.id
                        ? 'bg-industrial-950 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of matching products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {materialProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    <Link
                      to={prod.seoUrl}
                      className="block relative aspect-[16/11] rounded-t-2xl overflow-hidden bg-slate-50/70 p-4 sm:p-5 border-b border-slate-100/90 flex items-center justify-center cursor-pointer"
                    >
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="w-full h-full object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-industrial-950 text-[11px] font-semibold px-2.5 py-0.5 rounded-md shadow-2xs border border-slate-200/60">
                        #{prod.number}
                      </div>
                    </Link>

                    <div className="p-5 sm:p-6">
                      <span className="text-[11px] font-semibold text-brand-orange uppercase tracking-wider block mb-1.5">
                        {prod.category}
                      </span>

                      <Link to={prod.seoUrl} className="block group-hover:text-brand-orange transition-colors">
                        <h4 className="font-bold text-base sm:text-[17px] text-industrial-950 group-hover:text-brand-orange transition-colors leading-snug">
                          {prod.title}
                        </h4>
                      </Link>

                      <p className="text-xs sm:text-[13px] text-slate-600 mt-2 line-clamp-2 font-normal leading-relaxed">
                        {prod.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100/80 flex items-center justify-between text-xs font-medium">
                    <span className="text-slate-500 font-normal">Lead: {prod.leadTime}</span>
                    <Link
                      to={prod.seoUrl}
                      className="font-semibold text-brand-orange hover:text-brand-orange-dark inline-flex items-center gap-1 transition-colors group/link"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Material Matrix Table */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm overflow-hidden">
            <h3 className="text-xl font-bold text-industrial-950 mb-4">
              Substrate Selection & Performance Matrix
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-800 border-b border-slate-200 uppercase tracking-wider text-[11px] font-semibold">
                  <tr>
                    <th className="p-3.5">Material Substrate</th>
                    <th className="p-3.5">Temp Rating</th>
                    <th className="p-3.5">Corrosion Resistance</th>
                    <th className="p-3.5">Marking Method</th>
                    <th className="p-3.5">Recommended Applications</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonData.map((row) => (
                    <tr key={row.material} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-3.5 font-semibold text-slate-900">
                        <Link to={row.seoUrl} className="hover:text-brand-orange hover:underline inline-flex items-center gap-1.5">
                          <span>{row.material}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>
                      </td>
                      <td className="p-3.5 text-slate-600 font-normal">{row.temp}</td>
                      <td className="p-3.5 text-slate-600 font-normal">{row.corrosion}</td>
                      <td className="p-3.5 text-slate-600 font-normal">{row.method}</td>
                      <td className="p-3.5 text-slate-600 font-normal">{row.bestFor}</td>
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
