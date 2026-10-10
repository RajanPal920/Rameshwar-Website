import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileDown } from 'lucide-react';
import { PRODUCTS, CATALOGUE_DOWNLOAD_URL } from '../data/productData';

export default function Products({ onOpenQuote, onSelectProduct, onSelectImage }) {
  return (
    <section id="products" className="py-20 md:py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 text-slate-100 text-xs font-mono tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              <span>SPECIALIZED PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-industrial-950 tracking-tight">
              Our Industrial Plate Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
              Customized identification solutions designed around your equipment, machinery and application.
            </p>
          </div>

          {/* Catalogue Download Action */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={CATALOGUE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-300 hover:border-slate-900 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-2xs transition-all"
            >
              <FileDown className="w-4 h-4 text-brand-orange" />
              <span>Download Product Catalogue</span>
            </a>

            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-orange hover:text-brand-orange-dark px-3 py-2"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Product Cards Grid — 3 Columns × 3 Rows (9 Cards on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.slice(0, 9).map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-slate-200 hover:border-brand-orange/60 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              {/* Clickable Image — Directly linking to product detail page */}
              <Link
                to={product.seoUrl}
                className="relative aspect-[16/10] bg-slate-950 overflow-hidden block cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={`${product.title} Manufacturer in India`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Number Tag */}
                <div className="absolute top-2.5 left-2.5 bg-industrial-950/85 backdrop-blur-sm text-slate-200 text-[10px] font-mono px-2 py-0.5 rounded border border-white/10">
                  #{product.number}
                </div>

                {/* Primary Substrate Tag */}
                <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-2xs">
                  {product.materials[0]}
                </div>
              </Link>

              {/* Compact Card Content */}
              <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-brand-orange uppercase tracking-wider block mb-1 truncate">
                    {product.category}
                  </span>

                  <Link to={product.seoUrl} className="block">
                    <h3 className="text-base font-bold text-industrial-950 group-hover:text-brand-orange transition-colors line-clamp-1 leading-snug">
                      {product.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Compact Technical Spec Strip */}
                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="truncate pr-2">
                      Substrate: <strong className="text-slate-800 font-semibold">{product.materials.slice(0, 2).join(', ')}</strong>
                    </span>
                    <span className="text-emerald-700 font-bold shrink-0">
                      {product.leadTime}
                    </span>
                  </div>
                </div>

                {/* Bottom Action Button — Clean & Aligned */}
                <div className="mt-3 pt-2.5 border-t border-slate-100">
                  <Link
                    to={product.seoUrl}
                    className="inline-flex items-center justify-center gap-1.5 w-full text-xs font-bold text-brand-orange hover:text-white bg-orange-50/80 hover:bg-brand-orange px-3 py-2 rounded-lg transition-colors group/btn cursor-pointer"
                  >
                    <span>View Product</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation CTA */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-slate-500 font-mono">
            Displaying 9 Featured Products from Catalogue • 12 Specialized Formats Available
          </p>
          <div className="flex items-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-industrial-950 hover:bg-industrial-850 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-md transition-colors"
            >
              <span>Explore All 12 Products</span>
              <ArrowRight className="w-4 h-4 text-brand-orange" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}