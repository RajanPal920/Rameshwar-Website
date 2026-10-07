import React from 'react';
import { X, Check, ArrowRight, ShieldCheck, Clock, Wrench } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onOpenQuote }) {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-3xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-industrial-950 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-brand-orange font-bold uppercase tracking-wider bg-orange-950/80 px-2 py-0.5 rounded border border-orange-800/40">
                PRODUCT #{product.number}
              </span>
              <span className="text-xs font-mono text-slate-400">{product.category}</span>
            </div>
            <h3 className="text-xl font-bold text-white mt-1">{product.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-700">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Core Details */}
            <div className="space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                {product.details}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-800/60 font-mono">
                  <span className="text-slate-400">Available Substrates:</span>
                  <span className="text-brand-orange font-bold text-right">{product.materials.join(', ')}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60 font-mono">
                  <span className="text-slate-400">Mounting Options:</span>
                  <span className="text-slate-200 text-right">{product.mounting.join(', ')}</span>
                </div>
                <div className="flex justify-between py-1 font-mono">
                  <span className="text-slate-400">Production Lead Time:</span>
                  <span className="text-emerald-400 font-bold">{product.leadTime}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Fabrication Standards */}
          <div className="p-4 rounded-xl bg-industrial-950 border border-slate-800">
            <h5 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
              MANUFACTURING & QUALITY STANDARDS
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-brand-orange" />
                <span>Zero Burrs & Chamfered Edges</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-brand-orange" />
                <span>Chemical & Oil Resistant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-brand-orange" />
                <span>Custom CAD / DXF Stamping</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-industrial-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400 font-mono">
            Direct OEM Pricing from Rameshwar Industries
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 rounded-md bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote(product.title);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-1.5 bg-brand-orange hover:bg-brand-orange-dark text-white text-xs font-bold px-5 py-2.5 rounded-md transition-colors cursor-pointer"
            >
              <span>Get Quote for This Plate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
