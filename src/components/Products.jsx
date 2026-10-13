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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 text-slate-100 text-xs font-semibold tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              <span>SPECIALIZED PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-industrial-950 tracking-tight">
              Our Industrial Plate Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed font-normal">
              Customized identification solutions designed around your equipment, machinery and application.
            </p>
          </div>

          {/* Catalogue Download Action */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={CATALOGUE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-300 hover:border-slate-900 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold shadow-2xs transition-all"
            >
              <FileDown className="w-4 h-4 text-brand-orange" />
              <span>View Product Catalogue (PDF)</span>
            </a>

            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-orange hover:text-brand-orange-dark px-3 py-2"
            >
              <span>View All {PRODUCTS.length} Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Product Cards Grid — 3 Columns × 3 Rows (9 Cards on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.slice(0, 9).map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              {/* Clickable Image — Complete Plate Centered with object-contain */}
              <Link
                to={product.seoUrl}
                className="relative aspect-[16/11] bg-slate-50/70 p-4 sm:p-5 border-b border-slate-100/90 overflow-hidden flex items-center justify-center cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={`${product.title} Manufacturer in India`}
                  className="w-full h-full object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
                />

                {/* Number Tag */}
                <div className="absolute top-3 left-3 bg-industrial-950/85 backdrop-blur-sm text-slate-200 text-[11px] font-medium px-2.5 py-0.5 rounded-md border border-white/10 shadow-2xs">
                  #{product.number}
                </div>

                {/* Primary Substrate Tag */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-slate-900 text-[11px] font-semibold px-2.5 py-0.5 rounded-md shadow-2xs border border-slate-200/60">
                  {product.materials[0]}
                </div>
              </Link>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
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

                  {/* Technical Spec Strip */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                    <span className="truncate pr-2">
                      Substrate: <strong className="text-slate-800 font-semibold">{product.materials.slice(0, 2).join(', ')}</strong>
                    </span>
                    <span className="text-emerald-700 font-bold shrink-0">
                      {product.leadTime}
                    </span>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2">
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

        {/* Bottom Navigation CTA */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            Displaying 9 Featured Solutions from Complete Catalogue • {PRODUCTS.length} Specialized Formats Available
          </p>
          <div className="flex items-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-industrial-950 hover:bg-industrial-850 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors shadow-2xs"
            >
              <span>Explore All {PRODUCTS.length} Catalogue Products</span>
              <ArrowRight className="w-4 h-4 text-brand-orange" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}