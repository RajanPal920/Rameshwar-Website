import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CATALOGUE_DOWNLOAD_URL } from '../data/productData';
import { ArrowRight, FileDown } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function ProductsPage({ onOpenQuote }) {
  const [filter, setFilter] = useState('ALL');

  const categories = [
    'ALL',
    'Metal Industrial Plates',
    'Aluminium Name Plates',
    'Warning & Safety Plates',
    'Tags & Rings',
    'Schematics & Control Panels',
    'Facility Signage & Overlays'
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filter === 'ALL') return true;
    if (filter === 'Metal Industrial Plates')
      return p.category === 'Metal Industrial Name Plates & Labels' || p.category === 'Heavy-Duty & Chemical Resistant';
    if (filter === 'Aluminium Name Plates')
      return p.category === 'Aluminium Name Plates & Labels';
    if (filter === 'Warning & Safety Plates')
      return p.category === 'Warning & Instruction Plates';
    if (filter === 'Tags & Rings')
      return p.category === 'Metal & Aluminium Tags, Ring';
    if (filter === 'Schematics & Control Panels')
      return p.category === 'Schematics & Panel Name Plates';
    if (filter === 'Facility Signage & Overlays')
      return (
        p.category === 'Facility & Room Identification' ||
        p.category === 'Operational Signage & Facility Access' ||
        p.category === 'Operating Charts & Limits' ||
        p.category === 'Bespoke OEM Fabrication' ||
        p.category === 'Flexible Identification & Overlay Stickers' ||
        p.category === 'Facility & Commercial Signage' ||
        p.category === 'Illuminated & Commercial Signage'
      );
    return true;
  });

  return (
    <div>
      {/* Page Hero Banner */}
      <PageHero
        image="/images/img18.jpg"
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
                  className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-all cursor-pointer ${filter === cat
                      ? 'bg-industrial-950 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Official PDF Catalogue Button */}
            <div className="shrink-0">
              <a
                href={CATALOGUE_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold shadow-sm transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>View Product Catalogue (PDF)</span>
              </a>
            </div>

          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden h-full"
              >
                <div>
                  {/* Product Photo linking to detail page with object-contain */}
                  <Link
                    to={product.seoUrl}
                    className="relative aspect-[16/11] bg-slate-50/70 p-4 sm:p-5 border-b border-slate-100/90 overflow-hidden flex items-center justify-center cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={`${product.title} Manufacturer in India`}
                      className="w-full h-full object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-industrial-950/85 backdrop-blur-sm text-slate-200 text-[11px] font-medium px-2.5 py-0.5 rounded-md border border-white/10 shadow-2xs">
                      #{product.number}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-slate-900 text-[11px] font-semibold px-2.5 py-0.5 rounded-md shadow-2xs border border-slate-200/60">
                      {product.materials[0]}
                    </div>
                  </Link>

                  {/* Details Body */}
                  <div className="p-5 sm:p-6">
                    <span className="text-[11px] font-semibold text-brand-orange uppercase tracking-wider block mb-1 truncate">
                      {product.category}
                    </span>

                    <Link to={product.seoUrl} className="block">
                      <h3 className="text-base sm:text-[17px] font-bold text-slate-900 group-hover:text-brand-orange transition-colors line-clamp-1 leading-snug">
                        {product.title}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 line-clamp-2 leading-relaxed font-normal">
                      {product.description}
                    </p>

                    {/* Single-Row Technical Spec Strip */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                      <span className="truncate pr-2">
                        Substrate: <strong className="text-slate-800 font-semibold">{product.materials.slice(0, 2).join(', ')}</strong>
                      </span>
                      <span className="text-emerald-700 font-bold shrink-0">
                        {product.leadTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Actions — Aligned at Bottom */}
                <div className="p-5 sm:p-6 pt-0 mt-auto">
                  <div className="pt-3.5 border-t border-slate-100 flex items-center gap-2">
                    <Link
                      to={product.seoUrl}
                      className="inline-flex items-center justify-center gap-1.5 flex-1 text-xs font-semibold text-slate-800 bg-slate-50 hover:bg-slate-900 hover:text-white border border-slate-200/80 hover:border-slate-900 px-3.5 py-2.5 rounded-xl transition-all duration-200 group/btn"
                    >
                      <span>View Product</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>

                    <Link
                      to={`/contact?product=${encodeURIComponent(product.title)}`}
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
      </div>
    </div>
  );
}
