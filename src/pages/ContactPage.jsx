import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    plateType: 'Machine Name Plates',
    material: 'Stainless Steel 304',
    dimensions: '',
    quantity: '50 - 200 pcs',
    requirements: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Page Hero Banner */}
      <PageHero
        image="/images/equipment-data-plate.jpg"
        objectPosition="center 45%"
        eyebrow="SALES & ESTIMATION DESK"
        title="Contact Rameshwar Industries"
        description="Connect with our technical estimation engineers to discuss your custom name plate dimensions, material options, and CAD specifications."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <div className="pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 space-y-16">

        {/* Contact Information & Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Factory Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-industrial-950 pb-3 border-b border-slate-100">
                Factory & Sales Office
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-industrial-950 block">Manufacturing Facility</span>
                    <span className="text-slate-600 text-xs">
                      Plot No. 48, GIDC Industrial Estate, Phase II, Gujarat, India (Placeholder)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-industrial-950 block">Direct Sales Line</span>
                    <a href="tel:+919876543210" className="text-slate-600 hover:text-brand-orange text-xs">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-industrial-950 block">Inquiry Email</span>
                    <a href="mailto:sales@rameshwarindustries.com" className="text-slate-600 hover:text-brand-orange text-xs">
                      sales@rameshwarindustries.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-industrial-950 block">Working Hours</span>
                    <span className="text-slate-600 text-xs">
                      Monday to Saturday: 9:00 AM – 6:30 PM IST
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-lg shadow-sm transition-colors text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

            <div className="bg-industrial-950 text-white p-6 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-brand-orange text-xs font-mono font-bold uppercase tracking-wider block">
                ENGINEERING FILE SUPPORT
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                We accept files in <strong>.DXF, .DWG, .CDR, .AI, .PDF, and .STEP</strong> formats. If drawings are unavailable, send a rough sketch with dimensions.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed RFQ Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-industrial-950">Inquiry Received</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you! Our engineering team will review your specifications and contact you with a formal quote within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-brand-orange hover:underline cursor-pointer"
                >
                  Submit Another Specification
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3 mb-4">
                  <h3 className="text-xl font-bold text-industrial-950">
                    Submit Custom Plate Requirements
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill in your project specifications for an accurate quotation
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dynamic Engineering Works"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="purchase@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1">Plate Type</label>
                    <select
                      value={formData.plateType}
                      onChange={(e) => setFormData({...formData, plateType: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-orange"
                    >
                      <option>Machine Name Plates</option>
                      <option>Industrial Identification Plates</option>
                      <option>Control Panel Plates</option>
                      <option>Equipment Data Plates</option>
                      <option>Door & Room Plates</option>
                      <option>Push / Pull Plates</option>
                      <option>Temperature & Control Charts</option>
                      <option>PVC & Vinyl Labels</option>
                      <option>Custom Industrial Plates</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1">Material Substrate</label>
                    <select
                      value={formData.material}
                      onChange={(e) => setFormData({...formData, material: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-orange"
                    >
                      <option>Stainless Steel 304</option>
                      <option>Stainless Steel 316</option>
                      <option>Anodized Aluminium</option>
                      <option>Solid Brass</option>
                      <option>Pure Copper</option>
                      <option>Bronze</option>
                      <option>Industrial PVC / Vinyl</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1">Estimated Quantity</label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-orange"
                    >
                      <option>10 - 50 pcs (Sample Batch)</option>
                      <option>50 - 200 pcs</option>
                      <option>200 - 1,000 pcs</option>
                      <option>1,000+ pcs (Production)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1">
                    Dimensions, Mounting Holes & Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify dimensions (e.g. 150mm x 80mm x 2mm), hole diameter and pitch, serial numbering requirements..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-brand-orange"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm py-3 px-6 rounded-lg shadow-md transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry for Official Quotation</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
      </div>
    </div>
  );
}
