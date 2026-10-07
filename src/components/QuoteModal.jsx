import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, MessageSquare, ShieldCheck } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, selectedProduct = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    plateType: selectedProduct || 'Machine Name Plates',
    material: 'Stainless Steel 304',
    dimensions: '',
    quantity: '50 - 200 pcs',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setFormData(prev => ({ ...prev, plateType: selectedProduct }));
    }
  }, [selectedProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-industrial-950">
          <div>
            <span className="text-[10px] font-mono text-brand-orange uppercase font-bold tracking-widest block">
              RAMESHWAR INDUSTRIES // RFQ DESK
            </span>
            <h3 className="text-lg font-bold text-white">
              Request a Quotation & Engineering Estimate
            </h3>
          </div>
          <button 
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">Inquiry Submitted!</h4>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                Our sales & production engineering team will review your specifications and contact you shortly.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 bg-brand-orange text-white text-xs font-bold py-2.5 px-6 rounded-md cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-mono mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-mono mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-mono mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-mono mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-mono mb-1">Plate Type</label>
                  <select
                    value={formData.plateType}
                    onChange={(e) => setFormData({...formData, plateType: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-orange"
                  >
                    <option>Machine Name Plates</option>
                    <option>Industrial Identification Plates</option>
                    <option>Control Panel Plates</option>
                    <option>Equipment Data Plates</option>
                    <option>Door & Room Plates</option>
                    <option>Push / Pull Plates</option>
                    <option>Temperature & Control Plates</option>
                    <option>PVC & Vinyl Labels</option>
                    <option>Custom Industrial Plates</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-mono mb-1">Material Substrate</label>
                  <select
                    value={formData.material}
                    onChange={(e) => setFormData({...formData, material: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-orange"
                  >
                    <option>Stainless Steel 304</option>
                    <option>Stainless Steel 316</option>
                    <option>Anodized Aluminium</option>
                    <option>Solid Brass</option>
                    <option>Pure Copper</option>
                    <option>Industrial PVC</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-mono mb-1">Dimensions & Specifications</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Dimensions (L x W x Thickness), mounting holes, text to be engraved..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-2.5 px-4 rounded-md shadow-md transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Quote Request</span>
                </button>
              </div>

              <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-400 border-t border-slate-800">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-emerald-400">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Or WhatsApp Directly</span>
                </a>
                <span>•</span>
                <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-white">
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>+91 98765 43210</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
