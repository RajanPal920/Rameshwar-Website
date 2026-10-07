import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';
import { PRODUCTS } from '../data/productData';

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
        </div>

        {/* 8-Card Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => {
            const slug = product.title
              .toLowerCase()
              .trim()
              .replace(/[^a-z0-9\s-]/g, '')
              .replace(/\s+/g, '-');

            return (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-slate-200 hover:border-brand-orange/60 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Clickable Image */}
                <Link
                  to={`/products/${slug}`}
                  className="relative aspect-[4/3] bg-slate-950 overflow-hidden block cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  />

                  {/* Number Tag */}
                  <div className="absolute top-2.5 left-2.5 bg-industrial-950/80 backdrop-blur-sm text-slate-200 text-[11px] font-mono px-2 py-0.5 rounded border border-white/10">
                    #{product.number}
                  </div>

                  {/* Quick View Icon */}
                  <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-slate-900 p-1.5 rounded-md shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <Link to={`/products/${slug}`} className="block">
                    <span className="text-[11px] font-mono font-medium text-brand-orange uppercase tracking-wide block mb-1">
                      {product.category}
                    </span>

                    <h3 className="text-base sm:text-lg font-bold text-industrial-950 group-hover:text-brand-orange transition-colors line-clamp-1">
                      {product.title}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </Link>

                  {/* Materials */}
                  <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {product.materials.slice(0, 3).map((mat) => (
                      <span
                        key={mat}
                        className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200/70"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Button — always aligned to bottom */}
                  <div className="mt-4 pt-3 border-t border-slate-100 mt-auto">
                    <Link
                      to={`/products/${slug}`}
                      className="inline-flex items-center justify-center gap-1.5 w-full text-xs font-bold text-brand-orange hover:text-white bg-orange-50 hover:bg-brand-orange px-3 py-2 rounded-md transition-colors group/btn cursor-pointer"
                    >
                      <span>View Products</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}