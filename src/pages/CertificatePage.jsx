import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle2, Microscope, Download, ExternalLink } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function CertificatePage({ onOpenQuote, onSelectImage }) {
  const qcSteps = [
    {
      step: "01",
      title: "Raw Material Inbound Inspection",
      desc: "Every incoming batch of stainless steel, brass, copper, and aluminium is verified against mill test reports (MTR) for correct metallurgical alloy composition and thickness tolerance."
    },
    {
      step: "02",
      title: "Laser & CNC Metrology Calibration",
      desc: "Automated optical inspection calipers ensure plate perimeter cuts, mounting hole diameters, switch apertures, and counterbores match CAD files within ±0.1mm."
    },
    {
      step: "03",
      title: "Marking Legibility & Resistance Audit",
      desc: "Etched and laser-engraved alphanumeric text, barcodes, and logos undergo contrast verification and solvent rub testing with industrial thinners and cutting oils."
    },
    {
      step: "04",
      title: "Edge Deburring & Finishing QC",
      desc: "All edges are mechanically deburred to guarantee zero sharp flash. Anodized coatings, baked enamel infills, and protective films are inspected before packing."
    }
  ];

  return (
    <div>
      {/* Page Hero Banner */}
      <PageHero
        image="/images/plate-precision-macro.jpg"
        objectPosition="center 45%"
        eyebrow="QUALITY ASSURANCE & COMPLIANCE"
        title="Quality Assurance & Registration"
        description="Commitment to consistent dimensional precision, enduring laser legibility, and metallurgical authenticity in every name plate batch."
        breadcrumbs={[{ label: 'Certificates' }]}
      />

      <div className="pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 space-y-16">

        {/* Certificates Grid — Exactly the 2 Official Enterprise Certificates */}
        <div>
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 text-slate-100 text-xs font-semibold tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              <span>VERIFIED STATUTORY CREDENTIALS</span>
            </div>
            <h2 className="text-3xl font-extrabold text-industrial-950 tracking-tight">
              Official Enterprise Certificates
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Review our valid government-issued registrations and manufacturing credentials in separate browser tabs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. GST Certificate */}
            <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition-all p-6 sm:p-8 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider border border-blue-200/80">
                    <Award className="w-3.5 h-3.5 text-blue-600" />
                    <span>TAX & STATUTORY REGISTRATION</span>
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    Active & Verified
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-industrial-950 group-hover:text-brand-orange transition-colors">
                  GST Certificate
                </h3>

                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1 mb-4">
                  Government of India • Goods and Services Tax Network
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Official Goods and Services Tax registration verifying Rameshwar Industries as a statutory-compliant manufacturing enterprise for domestic and export industrial supplies.
                </p>

                {/* PDF Document Preview Box */}
                <a
                  href="/certificates/GST-CERTIFICATE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl p-5 mb-6 transition-all text-center group/pdf"
                >
                  <div className="w-12 h-12 mx-auto rounded-lg bg-orange-100 text-brand-orange flex items-center justify-center mb-3 group-hover/pdf:scale-110 transition-transform">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-industrial-950 block">GST Certificate.pdf</span>
                  <span className="text-[11px] text-slate-500 flex items-center justify-center gap-1 mt-1">
                    <span>Click to open in native browser PDF viewer</span>
                    <ExternalLink className="w-3 h-3 text-brand-orange" />
                  </span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <a
                  href="/certificates/GST-CERTIFICATE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-colors shadow-xs flex-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View GST Certificate</span>
                </a>
              </div>
            </div>

            {/* 2. Udyam Certificate */}
            <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition-all p-6 sm:p-8 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200/80">
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                    <span>MSME REGISTRATION</span>
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    Active & Verified
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-industrial-950 group-hover:text-brand-orange transition-colors">
                  Udyam Certificate
                </h3>

                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1 mb-4">
                  Ministry of Micro, Small & Medium Enterprises, Govt. of India
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Official Udyam Registration Certificate recognizing Rameshwar Industries as an accredited manufacturing unit for industrial nameplates, identification tags, and machine badges.
                </p>

                {/* PDF Document Preview Box */}
                <a
                  href="/certificates/Udyam-Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl p-5 mb-6 transition-all text-center group/pdf"
                >
                  <div className="w-12 h-12 mx-auto rounded-lg bg-orange-100 text-brand-orange flex items-center justify-center mb-3 group-hover/pdf:scale-110 transition-transform">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-industrial-950 block">Udyam Certificate.pdf</span>
                  <span className="text-[11px] text-slate-500 flex items-center justify-center gap-1 mt-1">
                    <span>Click to open in native browser PDF viewer</span>
                    <ExternalLink className="w-3 h-3 text-brand-orange" />
                  </span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <a
                  href="/certificates/Udyam-Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-colors shadow-xs flex-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Udyam Certificate</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Stage Quality Control Protocol */}
        <div className="space-y-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-industrial-950">
              Our 4-Stage Quality Assurance System
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Ensuring zero-defect manufacturing for B2B engineering supply chains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qcSteps.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-extrabold text-brand-orange block mb-3">
                    {step.step}
                  </span>
                  <h4 className="font-bold text-sm text-industrial-950 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Checkpoint</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}
