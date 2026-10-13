import React from 'react';
import { Link } from 'react-router-dom';
import { X, ExternalLink, ShieldCheck, Check } from 'lucide-react';

export default function ImageModal({ image, title, onClose, onOpenQuote }) {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 bg-industrial-950 border-b border-slate-800 text-white">
          <div>
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block">
              AUTHENTIC SPECIMEN DETAIL
            </span>
            <h4 className="text-base font-bold truncate max-w-md">{title || "Product Showcase"}</h4>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Area */}
        <div className="relative aspect-[16/11] bg-slate-50 flex items-center justify-center overflow-hidden p-4 sm:p-6">
          <img
            src={image}
            alt={title || "Industrial Plate"}
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Footer info bar */}
        <div className="p-4 bg-industrial-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-slate-400">Manufactured by Rameshwar Industries</span>
          </div>
          <Link
            to={`/contact?product=${encodeURIComponent(title || '')}`}
            onClick={onClose}
            className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-5 py-2 rounded-lg transition-colors cursor-pointer text-center"
          >
            Enquire for this Specification
          </Link>
        </div>
      </div>
    </div>
  );
}
