import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2, Phone, Mail, ArrowRight, FileCheck, Loader2 } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io5";
import emailjs from '@emailjs/browser';

export default function QuoteSection({ initialProduct = '' }) {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    plateType: initialProduct || 'Machine Name Plates',
    material: 'Stainless Steel 304',
    dimensions: '',
    quantity: '100 - 500 pcs',
    requirements: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          phone: formData.phone,
          plate_type: formData.plateType,
          material: formData.material,
          quantity: formData.quantity,
          requirements: formData.requirements || 'Not specified',
          to_email: 'sales@rameshwarindustries.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      // Reset form
      setFormData({
        name: '', company: '', phone: '', email: '',
        plateType: initialProduct || 'Machine Name Plates',
        material: 'Stainless Steel 304',
        dimensions: '',
        quantity: '100 - 500 pcs',
        requirements: ''
      });
    } catch (err) {
      console.error('Email send failed:', err);
      setError('Failed to send inquiry. Please try again or contact us directly on WhatsApp.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact-cta" className="relative py-20 md:py-28 bg-industrial-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background Plate Texture */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity pointer-events-none">
        <img
          src="/images/plate-precision-macro.jpg"
          alt="Precision Plate Metal Grain Texture"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/90 to-industrial-950/80 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-brand-orange text-xs font-mono tracking-wider uppercase font-semibold">
              <FileCheck className="w-3.5 h-3.5" />
              <span>DIRECT FACTORY QUOTATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have a Custom Plate Requirement?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Share your design, dimensions, material or application requirements with <strong className="text-white">Rameshwar Industries</strong>.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2 text-slate-100 font-bold">
                <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                <span>RAPID SPECIFICATION ESTIMATE</span>
              </div>
              <p className="leading-relaxed text-slate-400">
                Send your AutoCAD / PDF / CDR drawing or simply provide length × width, material, and required text for a fast quotation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-5 py-3 rounded-md shadow-md transition-colors"
              >
                <IoLogoWhatsapp className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-5 py-3 rounded-md border border-slate-600 transition-colors"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-brand-orange" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 text-xs font-mono text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>Call: +91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-orange" />
                <span>sales@rameshwarindustries.com</span>
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Sent Successfully</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you! Your specifications have been emailed to <strong className="text-white">sales@rameshwarindustries.com</strong>. Our team will respond with pricing within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-brand-orange hover:underline cursor-pointer"
                >
                  Submit Another Specification
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-3 mb-4">
                  <h3 className="text-lg font-bold text-white">Request a Quote</h3>
                  <p className="text-xs text-slate-400">Fill in your specifications or requirements below</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Precision Machines Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Contact Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Plate Type</label>
                    <select
                      value={formData.plateType}
                      onChange={(e) => setFormData({ ...formData, plateType: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-orange"
                    >
                      <option>Machine Name Plates</option>
                      <option>Industrial Identification Plates</option>
                      <option>Control Panel Plates</option>
                      <option>Equipment Data Plates</option>
                      <option>Door & Room Plates</option>
                      <option>Push / Pull Plates</option>
                      <option>Speed & Feed Charts</option>
                      <option>PVC & Vinyl Labels</option>
                      <option>Custom Industrial Plates</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Material Substrate</label>
                    <select
                      value={formData.material}
                      onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-orange"
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
                    <label className="block text-xs font-mono text-slate-300 mb-1">Approx. Quantity</label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-orange"
                    >
                      <option>10 - 50 pcs (Sample / Small Batch)</option>
                      <option>50 - 200 pcs</option>
                      <option>200 - 1,000 pcs</option>
                      <option>1,000+ pcs (Production)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Dimensions & Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Dimensions 120mm x 60mm x 1.5mm thickness, 4 corner holes of 3.5mm diameter..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange"
                  ></textarea>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm py-3 px-6 rounded-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all cursor-pointer"
                >
                  {sending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request a Quote</span>
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-slate-500 font-mono">
                  Your inquiry will be sent directly to sales@rameshwarindustries.com
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}