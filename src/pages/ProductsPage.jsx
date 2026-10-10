import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CATALOGUE_DOWNLOAD_URL } from '../data/productData';
import { Eye, ArrowRight, FileDown, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function ProductsPage({ onOpenQuote, onSelectProduct, onSelectImage }) {
  const [filter, setFilter] = useState('ALL');

  const categories = [
    'ALL',
    'Machinery & Rating',
    'Control Panel',
    'Stainless Steel',
    'Aluminium & Tags',
    'Safety & Warning',
    'Signage & Labels'
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filter === 'ALL') return true;
    if (filter === 'Machinery & Rating')
      return p.title.includes('Machine') || p.category.includes('Machinery') || p.id.includes('equipment-data');
    if (filter === 'Control Panel')
      return p.title.includes('Control') || p.title.includes('Temperature') || p.category.includes('Automation');
    if (filter === 'Stainless Steel')
      return p.materials.some((m) => m.includes('Stainless Steel')) || p.title.includes('Stainless');
    if (filter === 'Aluminium & Tags')
      return p.title.includes('Aluminium') || p.title.includes('Tags') || p.category.includes('Asset');
    if (filter === 'Safety & Warning')
      return p.title.includes('Warning') || p.category.includes('Safety');
    if (filter === 'Signage & Labels')
      return p.title.includes('Identification') || p.title.includes('Push') || p.title.includes('PVC') || p.title.includes('Custom');
    return true;
  });

  return (
    <div>
      {/* Page Hero Banner */}
      <PageHero
        image="/images/custom-plates-group.jpg"
        objectPosition="center 40%"
        eyebrow="PRODUCT PORTFOLIO"
        title="Industrial Name Plates & Identification Solutions"
        description="Explore our complete range of precision-manufactured machine plates, control panel faceplates, data specification tags, and industrial labels."
        breadcrumbs={[{ label: 'Products' }]}
      />

      <div className="pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 space-y-10">

          {/* Top Actions: Catalogue Download + Category Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-6">
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-md transition-all cursor-pointer ${
                    filter === cat
                      ? 'bg-industrial-950 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Official PDF Catalogue Download Button */}
            <div className="shrink-0">
              <a
                href={CATALOGUE_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-sm transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Product Catalogue (PDF)</span>
              </a>
            </div>

          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-slate-200 hover:border-brand-orange/60 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Product Photo linking to detail page */}
                  <Link
                    to={product.seoUrl}
                    className="relative aspect-[16/10] bg-slate-950 overflow-hidden block cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={`${product.title} Manufacturer in India`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-industrial-950/80 backdrop-blur-sm text-white text-xs font-mono px-2 py-0.5 rounded border border-white/10">
                      SPEC #{product.number}
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-slate-900 p-2 rounded-md shadow-md">
                      <Eye className="w-4 h-4" />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="p-6">
                    <span className="text-[11px] font-mono font-bold text-brand-orange uppercase tracking-wider block mb-1">
                      {product.category}
                    </span>

                    <Link to={product.seoUrl}>
                      <h3 className="text-lg font-bold text-industrial-950 group-hover:text-brand-orange transition-colors">
                        {product.title}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs font-mono">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Substrates:</span>
                        <span className="text-slate-800 font-semibold">{product.materials.join(', ')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Mounting:</span>
                        <span className="text-slate-800 font-semibold">{product.mounting.join(', ')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Lead Time:</span>
                        <span className="text-emerald-600 font-bold">{product.leadTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-2">
                  <Link
                    to={product.seoUrl}
                    className="text-xs font-bold text-slate-700 hover:text-brand-orange inline-flex items-center gap-1"
                  >
                    <span>Full Specifications</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onOpenQuote(product.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-industrial-950 hover:bg-brand-orange px-3.5 py-2 rounded-md transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Request Quote</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
