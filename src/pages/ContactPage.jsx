import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  ExternalLink,
  Navigation,
  FileDown,
  Building2,
  Factory,
  ArrowRight,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { COMPANY_CONTACT, CATALOGUE_DOWNLOAD_URL } from '../data/productData';

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
    <div className="bg-white">
      {/* 1. Contact Hero Section (Matching exact required heading and supporting copy) */}
      <PageHero
        image="/images/contact.jpg"
        objectPosition="center 45%"
        eyebrow="OFFICIAL FACTORY & SALES ENQUIRY DESK"
        title="CONTACT RAMESHWAR INDUSTRIES"
        description="Connect with our team for industrial nameplates, machine identification plates, product specifications, and manufacturing enquiries."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <div className="pb-24 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 space-y-16">

          {/* 2. Company Contact Information (Verified from Catalogue Page 4) */}
          <section className="space-y-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-200 text-slate-800 text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <span>VERIFIED COMPANY LOCATIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-industrial-950 tracking-tight">
                Direct Manufacturing & Commercial Offices
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Reach out directly to our production works in Bhiwandi (Thane) or our registered commercial office in Mumbai.
              </p>
            </div>

            {/* 3-Card Grid for Verified Locations & Contacts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Card 1: Manufacturing Works & Facility */}
              <div className="bg-white rounded-xl border border-slate-200 hover:border-brand-orange/60 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-lg bg-orange-50 border border-orange-100 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      <Factory className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-orange bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded">
                      Production Works
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-industrial-950 group-hover:text-brand-orange transition-colors">
                      {COMPANY_CONTACT.factory.label}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      Kalher, Bhiwandi, Thane
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600 leading-relaxed">
                    <p className="font-medium text-slate-800">
                      {COMPANY_CONTACT.factory.compound}
                    </p>
                    <p>{COMPANY_CONTACT.factory.area}</p>
                    <p>{COMPANY_CONTACT.factory.city} - {COMPANY_CONTACT.factory.pincode}, {COMPANY_CONTACT.factory.state}, {COMPANY_CONTACT.factory.country}</p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100">
                  <a
                    href={COMPANY_CONTACT.factory.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-dark group/link"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions to Factory</span>
                    <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Card 2: Registered Commercial Office */}
              <div className="bg-white rounded-xl border border-slate-200 hover:border-brand-orange/60 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center group-hover:bg-industrial-950 group-hover:text-white transition-colors">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded">
                      Central Office
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-industrial-950 group-hover:text-brand-orange transition-colors">
                      {COMPANY_CONTACT.office.label}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      Chira Bazar, Girgaon, Mumbai
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600 leading-relaxed">
                    <p className="font-medium text-slate-800">
                      {COMPANY_CONTACT.office.building}
                    </p>
                    <p>{COMPANY_CONTACT.office.area}</p>
                    <p>{COMPANY_CONTACT.office.city}, {COMPANY_CONTACT.office.state}, {COMPANY_CONTACT.office.country}</p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100">
                  <a
                    href={COMPANY_CONTACT.office.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-brand-orange group/link"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions to Office</span>
                    <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Card 3: Direct Phone, Email & Working Hours */}
              <div className="bg-white rounded-xl border border-slate-200 hover:border-brand-orange/60 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-lg bg-orange-50 border border-orange-100 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
                      Direct Support
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-industrial-950 group-hover:text-brand-orange transition-colors">
                      Direct Communication Lines
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      Fast Quotations & Order Inquiries
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-3 text-xs">
                    {/* Telephone Numbers */}
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px] uppercase">Telephone / Mobile</span>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-0.5">
                        {COMPANY_CONTACT.phones.map((phone) => (
                          <a
                            key={phone.raw}
                            href={`tel:${phone.raw}`}
                            className="font-bold text-slate-900 hover:text-brand-orange transition-colors"
                          >
                            {phone.display}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Email Addresses */}
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px] uppercase">Official Emails</span>
                      <div className="space-y-0.5 mt-0.5">
                        {COMPANY_CONTACT.emails.map((email) => (
                          <a
                            key={email}
                            href={`mailto:${email}`}
                            className="block font-medium text-slate-800 hover:text-brand-orange transition-colors truncate"
                          >
                            {email}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px] uppercase">Working Hours</span>
                      <span className="text-slate-700 font-medium block mt-0.5">
                        {COMPANY_CONTACT.workingHours}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100">
                  <a
                    href={COMPANY_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-3 rounded-lg shadow-2xs transition-colors text-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Direct Chat</span>
                  </a>
                </div>
              </div>

            </div>
          </section>

          {/* 3. Verified Map and Address Section (Section 5C) */}
          <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-orange-50 text-brand-orange text-[11px] font-mono font-bold tracking-wider uppercase mb-1 border border-orange-200">
                  <MapPin className="w-3 h-3" />
                  <span>GEOGRAPHIC FACTORY LOCATION</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-industrial-950">
                  Visit Our Manufacturing Facility in Bhiwandi (Thane)
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Located in the industrial corridor of Kalher, Bhiwandi with direct arterial access to Thane and Mumbai.
                </p>
              </div>

              {/* Get Directions Button */}
              <a
                href={COMPANY_CONTACT.factory.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-industrial-950 hover:bg-brand-orange text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-lg transition-colors shadow-2xs shrink-0 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-brand-orange hover:text-white" />
                <span>Get Directions (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Map Container + Verified Address Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Interactive Google Map Embed */}
              <div className="lg:col-span-8 relative min-h-[360px] sm:min-h-[420px] bg-slate-100 border-b lg:border-b-0 lg:border-r border-slate-200">
                <iframe
                  title="Rameshwar Industries Manufacturing Facility Location Map"
                  src={COMPANY_CONTACT.factory.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '380px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Verified Address & Logistics Information Box */}
              <div className="lg:col-span-4 p-6 sm:p-8 space-y-6 bg-slate-50/70 flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-900 pb-2 border-b border-slate-200">
                    Works Dispatch Details
                  </h4>

                  <div className="space-y-3 text-xs text-slate-700">
                    <div>
                      <span className="font-bold text-industrial-950 block">Industrial Facility:</span>
                      <span className="text-slate-600 block mt-0.5">
                        {COMPANY_CONTACT.factory.compound}
                      </span>
                      <span className="text-slate-600 block">
                        {COMPANY_CONTACT.factory.area}
                      </span>
                      <span className="text-slate-600 block">
                        {COMPANY_CONTACT.factory.city} - {COMPANY_CONTACT.factory.pincode}, {COMPANY_CONTACT.factory.state}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <span className="font-bold text-industrial-950 block">Freight & Dispatch Routes:</span>
                      <span className="text-slate-600 block mt-0.5">
                        Direct connection via Thane-Bhiwandi Road & Mumbai-Nashik Highway for domestic freight shipments across India.
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <span className="font-bold text-industrial-950 block">Sample Review by Appointment:</span>
                      <span className="text-slate-600 block mt-0.5">
                        Clients and OEM engineers are welcome to inspect physical metal samples and etching proofs by prior appointment.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Fallback direct link if map doesn't load */}
                <div className="p-3.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-500 space-y-1.5">
                  <p className="font-semibold text-slate-700">Need navigation assistance?</p>
                  <p className="leading-snug">
                    If the map preview does not load properly in your browser, tap below to open coordinates directly:
                  </p>
                  <a
                    href={COMPANY_CONTACT.factory.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-orange font-bold hover:underline inline-flex items-center gap-1 mt-1"
                  >
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 4. RFQ Form Section & Technical Specifications (Section 5D) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left Column: RFQ Form Container */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-industrial-950">Inquiry Successfully Received</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you! Our estimation engineering team will review your specifications and send a formal commercial quotation within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 bg-industrial-950 hover:bg-brand-orange text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                    >
                      <span>Submit Another Specification</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-mono font-bold tracking-wider uppercase mb-1">
                      <span>FORMAL ESTIMATION FORM</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-industrial-950">
                      Submit Custom Industrial Plate Requirements
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Provide dimensions, substrate selection, and batch volume for quick technical review and official pricing.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                        Your Full Name <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                        Company / Organization <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dynamic Engineering Works"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                        Phone / WhatsApp Number <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                        Business Email Address <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="purchase@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1">Plate Type</label>
                      <select
                        value={formData.plateType}
                        onChange={(e) => setFormData({ ...formData, plateType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                      >
                        <option>Machine Name Plates</option>
                        <option>Motor Rating Plates</option>
                        <option>Control Panel Plates</option>
                        <option>Equipment Data Plates</option>
                        <option>Stainless Steel Plates</option>
                        <option>Aluminium Name Plates</option>
                        <option>Industrial Machine Tags</option>
                        <option>Safety & Warning Signs</option>
                        <option>Push / Pull Plates</option>
                        <option>Valve Body & Trim Plates</option>
                        <option>PVC & Vinyl Labels</option>
                        <option>Custom Industrial Plates</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1">Material Substrate</label>
                      <select
                        value={formData.material}
                        onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                      >
                        <option>Stainless Steel 304</option>
                        <option>Stainless Steel 316 (Marine)</option>
                        <option>Anodized Aluminium</option>
                        <option>Solid Brass</option>
                        <option>Pure Copper</option>
                        <option>Phosphor Bronze</option>
                        <option>Industrial PVC / Vinyl</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1">Batch Quantity</label>
                      <select
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                      >
                        <option>10 - 50 pcs (Sample Batch)</option>
                        <option>50 - 200 pcs</option>
                        <option>200 - 1,000 pcs</option>
                        <option>1,000+ pcs (Production)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                      Dimensions, Mounting Holes & CAD Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify dimensions (e.g. 150mm x 80mm x 1.5mm), mounting holes (diameter, center pitch), serial numbering, or color filling requirements..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm py-3.5 px-6 rounded-lg shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Requirements for Official Estimation</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Engineering Guidelines & Quality Standards */}
            <div className="lg:col-span-4 space-y-6">

              {/* Engineering File Support */}
              <div className="bg-industrial-950 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-3">
                <span className="text-brand-orange text-xs font-mono font-bold uppercase tracking-wider block">
                  TECHNICAL FILE SPECIFICATIONS
                </span>
                <h4 className="text-base font-bold text-white">
                  CAD & Drawing File Formats
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We accept drawings and logos in <strong>.DXF, .DWG, .CDR, .AI, .PDF, and .STEP</strong> formats.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  If digital drawings are not available, you can share a clean dimensional sketch or photo of an existing worn plate for our drafting team to reproduce.
                </p>
              </div>

              {/* Quality Standards Card */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-brand-orange font-mono text-xs font-bold uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>MANUFACTURING ASSURANCE</span>
                </div>
                <h4 className="text-base font-bold text-industrial-950">
                  ISO 9001:2015 Compliant Production
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                    <span>100% metallurgical verification of SS 304, 316, and aluminium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Micron-level dimensional checks on hole pitches and corner radii</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Solvent, rub, and salt spray resistance testing before dispatch</span>
                  </li>
                </ul>
              </div>

            </div>

          </section>

          {/* 5. Product & Catalogue Enquiries CTA Banner (Section 5E) */}
          <section className="bg-gradient-to-r from-industrial-950 via-slate-900 to-industrial-950 rounded-2xl border border-slate-800 p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl space-y-2">
                <span className="text-brand-orange text-xs font-mono font-bold uppercase tracking-wider block">
                  TECHNICAL DOCUMENTATION & SPECIFICATIONS
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Need Help Selecting an Industrial Product?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Contact our team to discuss your product requirements and available specifications, or download our complete catalogue for comprehensive grade tables and dimensions.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={CATALOGUE_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Product Catalogue (PDF)</span>
                </a>

                <a
                  href="/products"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-lg transition-colors border border-white/20"
                >
                  <span>Explore Product Range</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
