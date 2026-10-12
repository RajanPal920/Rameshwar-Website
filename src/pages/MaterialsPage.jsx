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
        image="/images/brass-industrial-plate.jpg"
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
              download
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg transition-colors shrink-0 shadow-xs"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Full Catalogue (PDF)</span>
            </a>
          </div>

          {/* 6 Substrate Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MATERIALS.map((mat) => (
              <div
                key={mat.id}
                className={`group bg-white rounded-xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  selectedMaterialId === mat.id
                    ? 'border-brand-orange shadow-md ring-2 ring-brand-orange/20'
                    : 'border-slate-200 hover:border-brand-orange/60 shadow-xs hover:shadow-md hover:-translate-y-1'
                }`}
              >
                <div>
                  <Link
                    to={mat.seoUrl}
                    className="block relative aspect-[16/10] bg-white overflow-hidden"
                  >
                    <img
                      src={mat.image}
                      alt={`${mat.name} Plate`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-industrial-950/90 backdrop-blur-md text-white text-xs font-extrabold px-3 py-1 rounded tracking-wider uppercase border border-white/10">
                      {mat.name}
                    </div>

                    <div className="absolute bottom-3 left-3 bg-white/95 text-slate-900 text-[11px] font-semibold px-2.5 py-0.5 rounded shadow-xs">
                      {mat.grades}
                    </div>
                  </Link>

                  <div className="p-6">
                    <Link to={mat.seoUrl} className="block group-hover:text-brand-orange transition-colors">
                      <h3 className="text-lg font-bold text-industrial-950 group-hover:text-brand-orange transition-colors">
                        {mat.headline}
                      </h3>
                    </Link>
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

                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      {mat.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 stroke-[2.5]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <Link
                    to={mat.seoUrl}
                    className="w-full text-xs font-semibold py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-industrial-950 text-white flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <span>View {mat.name} Substrate Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleSelectMaterial(mat.id)}
                    className={`w-full text-xs font-semibold py-2 px-4 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                      selectedMaterialId === mat.id
                        ? 'bg-brand-orange text-white'
                        : 'bg-orange-50 hover:bg-brand-orange text-brand-orange hover:text-white border border-orange-200'
                    }`}
                  >
                    <span>Filter Products in {mat.name}</span>
                  </button>
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
                  Products Manufactured in {activeMaterial.name} ({activeMaterial.grades})
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
                    className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      selectedMaterialId === m.id
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
                  className="p-5 rounded-xl border border-slate-200 hover:border-brand-orange/60 bg-white shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <Link to={prod.seoUrl} className="block relative aspect-[16/10] rounded-lg overflow-hidden bg-white p-2 border border-slate-100 mb-4">
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 bg-industrial-950/80 text-white text-[11px] font-medium px-2 py-0.5 rounded">
                        #{prod.number}
                      </div>
                    </Link>

                    <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-1">
                      {prod.category}
                    </span>

                    <Link to={prod.seoUrl}>
                      <h4 className="font-bold text-base text-industrial-950 group-hover:text-brand-orange transition-colors">
                        {prod.title}
                      </h4>
                    </Link>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 font-normal leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-medium">
                    <span className="text-slate-500">Lead Time: {prod.leadTime}</span>
                    <Link
                      to={prod.seoUrl}
                      className="font-semibold text-brand-orange hover:underline inline-flex items-center gap-1"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-3 h-3" />
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
