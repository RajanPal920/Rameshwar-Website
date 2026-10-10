import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Layers,
  Cpu,
  FileDown,
  Check,
  Compass,
  FileText,
  Sliders,
  ExternalLink
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { CATALOGUE_DOWNLOAD_URL } from '../data/productData';

export default function AboutPage({ onOpenQuote, onSelectImage }) {
  const manufacturingProcesses = [
    {
      title: "Chemical Acid Etching",
      badge: "Deep Contrast & Infill",
      desc: "Deep chemical acid etching with baked synthetic enamel color filling. Markings are recessed below the metal surface so text cannot peel, fade, or abrade away."
    },
    {
      title: "Precision Fiber Laser Marking",
      badge: "Micron Accuracy",
      desc: "Micro-resolution fiber laser marking and annealing for high-density 2D DataMatrix codes, QR barcodes, and micro-alphanumeric serialization on hardened metals."
    },
    {
      title: "Hydraulic Stamping & Stamped Blanks",
      badge: "High-Volume OEM",
      desc: "Embossed serial fields, deep relief stamped lettering, and pre-cut blank windows engineered for factory floor punch presses and variable data marking."
    },
    {
      title: "CNC Profiling & Precision Apertures",
      badge: "±0.1mm Tolerances",
      desc: "Precision CNC routing and contour laser cutting for switch apertures (22.5mm & 30.5mm), potentiometer slots, countersunk bevels, and custom corner radii."
    }
  ];

  const materialSpecs = [
    {
      metal: "Stainless Steel (SS 304 / 316 / 316L)",
      props: "Austenitic marine-grade alloys with superior resistance to heat (up to 800°C), steam washdowns, and chemical exposure.",
      finish: "No. 4 Satin Brushed, 2B Industrial, Mirror Polished"
    },
    {
      metal: "Anodized Aluminium (1050 / 5052 / 6061)",
      props: "Electrochemical anodic layer permanently seals graphics inside sapphire-hard aluminium oxide pores. Non-corrosive and UV-impervious.",
      finish: "Matte Anodized, Clear Satin, Color Coded"
    },
    {
      metal: "Solid Brass & Pure Copper (ETP Grade)",
      props: "C26000 yellow brass and electrolytic tough-pitch copper engineered for high-salinity marine air, transformer grounding, and heritage machinery.",
      finish: "Polished Commercial Brass, Antique Patina, Clear Coated"
    },
    {
      metal: "Industrial Polymers (PVC & Rigid Vinyl)",
      props: "Flexible solvent-resistant cast vinyl and rigid PVC substrates with heavy-duty 3M high-bond acrylic adhesive backing for curved casings.",
      finish: "Velvet Texture, Scratch-Resistant Overlaminate"
    }
  ];

  const coreProductLines = [
    {
      title: "Machine Rating & Motor Plates",
      desc: "Custom rating plates carrying model number, RPM, volts, amps, frame, duty cycle, and OEM technical branding.",
      image: "/images/machine-name-plate.jpg",
      link: "/machine-name-plates/manufacturer-in-india"
    },
    {
      title: "Control Panel & Automation Overlays",
      desc: "High-precision faceplates, emergency stop rings, pump selector tags, and mimic diagrams for automation desks.",
      image: "/images/control-panel-plate.jpg",
      link: "/control-panel-name-plates/manufacturer-in-india"
    },
    {
      title: "Process Equipment & Valve Tags",
      desc: "Heavy-duty SS 316 valve trim plates, cable marker rings, and pipeline identification tags with reinforced eyelets.",
      image: "/images/equipment-data-plate.jpg",
      link: "/valve-body-trim-plates/manufacturer-in-india"
    },
    {
      title: "Safety Warning & Directional Signage",
      desc: "High-contrast caution/warning signs, electrical hazard legends, and architectural satin push/pull door plates.",
      image: "/images/push-pull-plate.jpg",
      link: "/industrial-safety-signs/manufacturer-in-india"
    }
  ];

  const qcProtocol = [
    {
      step: "01",
      title: "Inbound Metallurgy MTR Audit",
      desc: "Every raw metal coil and sheet (SS 304, SS 316, Brass, Aluminium) is verified against Mill Test Reports for chemical composition and thickness."
    },
    {
      step: "02",
      title: "CNC & Laser Metrology Calibration",
      desc: "Optical coordinate measuring ensures plate perimeters, hole pitch, switch apertures, and bevels conform to CAD files within ±0.1mm."
    },
    {
      step: "03",
      title: "Marking & Solvent Rub Test",
      desc: "Alphanumeric markings and color fills undergo rigorous rub testing with industrial thinners, cutting lubricants, and synthetic hydraulic oils."
    },
    {
      step: "04",
      title: "Mechanical Deburring & Packaging",
      desc: "Plates are mechanically deburred to remove all sharp flash and burrs, washed, protective-film masked, and packed for safe plant delivery."
    }
  ];

  return (
    <div>
      {/* 1. Page Hero Banner — 75-85vh Desktop Proportion with Sharp, Unobstructed Image */}
      <PageHero
        image="/images/machine-with-plates.jpg"
        objectPosition="right 45%"
        eyebrow="ABOUT RAMESHWAR INDUSTRIES"
        title="Specialized Industrial Nameplates & OEM Identification"
        description="Precision manufacturer of chemical-etched, laser-engraved, and stamped metal identification plates for machinery, control panels, valves, and industrial equipment."
        breadcrumbs={[{ label: 'About' }]}
      />

      <div className="pb-24 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 space-y-20">

          {/* 2. Section: Company Overview (Alternating Image & Content) */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Image Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
                  <img
                    src="/images/custom-plates-group.jpg"
                    alt="Rameshwar Industries Multi-Material Plate Array"
                    className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500 cursor-pointer"
                    onClick={() => onSelectImage('/images/custom-plates-group.jpg', 'Multi-Material Custom Plate Collection')}
                  />
                  <div className="p-4 bg-industrial-950 text-white border-t border-slate-800 text-xs font-mono">
                    <span className="text-brand-orange font-bold">MANUFACTURING SCOPE:</span> Stainless Steel (SS 304/316), Anodized Aluminium, Brass & Copper Plates.
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange-50 text-brand-orange text-xs font-mono font-bold tracking-wider uppercase border border-orange-200">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>DIRECT INDUSTRIAL MANUFACTURER</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-industrial-950 tracking-tight leading-snug">
                  Engineered Specifically for Severe Plant Floor Conditions
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  <strong className="text-slate-900">Rameshwar Industries</strong> is a dedicated manufacturer of precision-engineered industrial nameplates, machine rating plates, equipment identification markers, and control panel faceplates.
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Operating production facilities in Bhiwandi (Thane) and central operations in Girgaon (Mumbai), we supply equipment builders, electrical switchgear OEMs, and plant maintenance engineers across India. Unlike commercial printing shops, our machinery and metallurgical processes are tailored exclusively for metal substrates engineered to withstand high vibration, chemical washdowns, extreme temperatures, and decades of industrial exposure.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-700">
                  <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                    <span>Udyam Registered Enterprise (MSME)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded border border-slate-200">
                    <ShieldCheck className="w-4 h-4 text-brand-orange" />
                    <span>ISO 9001:2015 Quality Aligned</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Section: Our Manufacturing Capabilities (4-Card Grid) */}
          <section className="space-y-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-200 text-slate-800 text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <span>PRODUCTION INFRASTRUCTURE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-industrial-950 tracking-tight">
                Our Manufacturing Capabilities
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Combining precision chemical processes with modern CNC and fiber laser technology.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {manufacturingProcesses.map((proc) => (
                <div
                  key={proc.title}
                  className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-brand-orange/60 hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-brand-orange bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded uppercase tracking-wider inline-block mb-3">
                      {proc.badge}
                    </span>
                    <h3 className="text-base font-bold text-industrial-950 mb-2">
                      {proc.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    <span>In-House Tooling</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Section: Our Product Range (Clean Visual Cards) */}
          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-200 text-slate-800 text-xs font-mono font-bold tracking-wider uppercase mb-2">
                  <span>CATALOGUE PRODUCT RANGE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-industrial-950 tracking-tight">
                  Core Industrial Product Range
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Engineered to meet Indian and international machinery identification standards.
                </p>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-orange hover:text-brand-orange-dark self-start sm:self-auto"
              >
                <span>Browse Complete Product Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreProductLines.map((item) => (
                <div
                  key={item.title}
                  className="group bg-white rounded-xl border border-slate-200 hover:border-brand-orange/60 overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <Link to={item.link} className="relative aspect-[16/10] bg-slate-950 overflow-hidden block">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <Link to={item.link} className="block">
                        <h3 className="text-sm sm:text-base font-bold text-industrial-950 group-hover:text-brand-orange transition-colors">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <Link
                        to={item.link}
                        className="text-xs font-bold text-brand-orange hover:text-brand-orange-dark flex items-center gap-1"
                      >
                        <span>View Specifications</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Section: Materials & Metallurgical Specifications */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-xs">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-slate-800 text-xs font-mono font-bold tracking-wider uppercase mb-2 border border-slate-200">
                <Layers className="w-3.5 h-3.5 text-brand-orange" />
                <span>METALLURGICAL EXPERTISE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-industrial-950 tracking-tight">
                Materials & Engineering Specifications
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Every metal alloy is sourced from certified mills and matched to operating temperature, chemical exposure, and mounting requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {materialSpecs.map((m) => (
                <div key={m.metal} className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-industrial-950 mb-2">
                      {m.metal}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {m.props}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200/70 text-xs font-mono text-slate-500 flex items-center justify-between">
                    <span className="font-semibold text-slate-700">Surface Finish:</span>
                    <span className="text-brand-orange font-bold">{m.finish}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Section: 4-Stage Quality Assurance Protocol */}
          <section className="space-y-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-200 text-slate-800 text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                <span>QUALITY ASSURANCE PROTOCOL</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-industrial-950 tracking-tight">
                Our 4-Stage Quality & Precision Protocol
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Ensuring dimensional compliance, zero burrs, and indelible legibility on every production batch.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {qcProtocol.map((qc) => (
                <div key={qc.step} className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-3xl font-mono font-black text-brand-orange block mb-2">
                      {qc.step}
                    </span>
                    <h3 className="text-sm font-bold text-industrial-950 mb-1.5">
                      {qc.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {qc.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified QC Step</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Section: CTA Banner — Direct Link to Contact & Catalogue */}
          <section className="p-8 sm:p-12 rounded-2xl bg-industrial-950 text-white flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10 shadow-xl">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-brand-orange text-black text-[10px] font-mono font-bold uppercase tracking-wider">
                <span>TECHNICAL ESTIMATION DESK</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
                Have a Custom CAD Drawing or Specific Plate Requirement?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Send us your engineering drawings (STEP, DXF, or PDF), dimensions, quantities, and alloy specifications. Our technical estimation desk responds promptly with formal quotation and tooling feedback.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => onOpenQuote("About Page Technical Inquiry")}
                className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-md shadow-md transition-colors cursor-pointer uppercase tracking-wider"
              >
                Request Quotation
              </button>

              <a
                href={CATALOGUE_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-md transition-colors flex items-center gap-2 uppercase tracking-wider"
              >
                <FileDown className="w-4 h-4 text-brand-orange" />
                <span>Catalogue (PDF)</span>
              </a>

              <Link
                to="/contact"
                className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-md transition-colors"
              >
                Contact Details
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
