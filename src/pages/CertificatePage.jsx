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

        {/* Certificate Display Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Certificate Document Container */}
            <div className="lg:col-span-5">
              <div 
                className="bg-slate-950 p-3 rounded-xl border border-slate-700 shadow-xl cursor-pointer group"
                onClick={() => onSelectImage('/certificates/udyam-certificate.jpg', 'Udyam Registration Certificate - Government of India')}
              >
                <div className="relative aspect-[1/1.3] bg-white rounded overflow-hidden">
                  <img
                    src="/certificates/udyam-certificate.jpg"
                    alt="Official Udyam Registration Certificate"
                    className="w-full h-full object-contain p-2 group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-industrial-950/90 text-white text-xs px-3 py-1.5 rounded-md flex items-center gap-1.5 border border-white/20">
                      <ExternalLink className="w-3.5 h-3.5 text-brand-orange" />
                      Click to View Full Size
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Certificate Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-50 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider border border-emerald-200">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>OFFICIALLY REGISTERED ENTERPRISE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-industrial-950">
                Udyam Registration Certificate
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Rameshwar Industries is officially registered with the Ministry of Micro, Small and Medium Enterprises, Government of India.
              </p>

              <div className="space-y-3 font-mono text-xs text-slate-700 bg-slate-50 p-5 rounded-xl border border-slate-200/80">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Enterprise:</span>
                  <span className="font-bold text-industrial-950">Rameshwar Industries</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Registration Authority:</span>
                  <span className="font-bold text-industrial-950">Ministry of MSME, Govt of India</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Industry Classification:</span>
                  <span className="font-bold text-industrial-950">Industrial Identification & Name Plates</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Operating Status:</span>
                  <span className="font-bold text-emerald-600">Active & Verified Manufacturing Unit</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="/certificates/udyam-certificate.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-industrial-950 hover:bg-industrial-850 text-white font-bold text-xs px-5 py-2.5 rounded-md transition-colors"
                >
                  <FileText className="w-4 h-4 text-brand-orange" />
                  <span>Open Certificate File</span>
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
                  <span className="text-2xl font-mono font-black text-brand-orange block mb-3">
                    {step.step}
                  </span>
                  <h4 className="font-bold text-sm text-industrial-950 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 font-semibold">
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
