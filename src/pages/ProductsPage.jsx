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
        p.category === 'Flexible Identification & Overlay Stickers'
      );
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
                  className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-all cursor-pointer ${
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
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold shadow-sm transition-all"
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
                    className="relative aspect-[16/10] bg-white p-2 border-b border-slate-100 overflow-hidden block cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={`${product.title} Manufacturer in India`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-industrial-950/85 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded border border-white/10">
                      SPEC #{product.number}
                    </div>
                    <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-sm text-slate-900 text-[11px] font-semibold px-2 py-0.5 rounded shadow-2xs">
                      {product.materials[0]}
                    </div>
                  </Link>

                  {/* Compact Details Body */}
                  <div className="p-4 sm:p-5">
                    <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-1 truncate">
                      {product.category}
                    </span>

                    <Link to={product.seoUrl} className="block">
                      <h3 className="text-base sm:text-lg font-bold text-industrial-950 group-hover:text-brand-orange transition-colors line-clamp-1 leading-snug">
                        {product.title}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 line-clamp-2 leading-relaxed font-normal">
                      {product.description}
                    </p>

                    {/* Compact Single-Row Technical Spec Strip */}
                    <div className="mt-3 py-2 px-2.5 bg-white border border-slate-200/70 rounded-md flex items-center justify-between text-xs font-medium text-slate-600">
                      <span className="truncate pr-2">
                        {product.materials.slice(0, 2).join(', ')}
                      </span>
                      <span className="text-emerald-700 font-bold shrink-0">
                        {product.leadTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Actions — Aligned at Bottom */}
                <div className="p-4 sm:p-5 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-auto">
                  <Link
                    to={product.seoUrl}
                    className="text-xs font-semibold text-brand-orange hover:text-brand-orange-dark inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Product</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onOpenQuote(product.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-industrial-950 hover:bg-brand-orange px-3.5 py-1.5 rounded-md transition-colors shadow-2xs cursor-pointer"
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
