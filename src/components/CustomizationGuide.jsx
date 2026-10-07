import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sliders, Maximize2, Shapes, Type, Image as ImageIcon, Hash, FileSpreadsheet, Scissors, Sparkles, ArrowRight, Anchor } from 'lucide-react';

export default function CustomizationGuide() {
  const [selectedParam, setSelectedParam] = useState(0);

  const parameters = [
    {
      id: 'size',
      icon: <Maximize2 className="w-5 h-5" />,
      title: 'Custom Size',
      image: '/images/customization/custom-size.jpg',
      summary: 'From 15mm compact asset tags up to 1200mm room signs',
      details: 'Whether you need a compact rating plate to fit into an enclosed motor casing or a large-format directional room identifier, our laser beds and shear presses accommodate every standard or non-standard metric & imperial dimension.',
      tolerance: '±0.1 mm precision'
    },
    {
      id: 'shape',
      icon: <Shapes className="w-5 h-5" />,
      title: 'Custom Shape',
      image: '/images/customization/custom-shape.jpg',
      summary: 'Rectangle, circular dials, curved bezels, and CAD contours',
      details: 'CNC milling and fiber laser profiling allow complex custom contours, rounded radius corners for safety, or curved arcs designed to match machine curves.',
      tolerance: 'Fiber Laser Profile Cut'
    },
    {
      id: 'material',
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Material Options',
      image: '/images/customization/material-options.jpg',
      summary: 'SS 304/316, Anodized Aluminium, Brass, Copper, Bronze, PVC',
      details: 'Select from 6 industrial alloys and synthetic substrates matched specifically to your plant temperature, chemical exposure, and mechanical durability needs.',
      tolerance: 'Mill-Certified Substrates'
    },
    {
      id: 'text',
      icon: <Type className="w-5 h-5" />,
      title: 'Custom Text & Fonts',
      image: '/images/customization/custom-text-fonts.jpg',
      summary: 'Technical specifications, electrical tables, warning texts',
      details: 'All fonts, chemical formulas, electrical schematics, symbols (ground, high voltage, phase), and multilingual scripts are laser engraved or chemically etched with zero distortion.',
      tolerance: 'High contrast permanent infill'
    },
    {
      id: 'logo',
      icon: <ImageIcon className="w-5 h-5" />,
      title: 'Company Logo',
      image: '/images/customization/company-logo.jpg',
      summary: 'Faithful OEM branding with exact graphic reproduction',
      details: 'We reproduce your company emblem, registered trademark, or equipment manufacturer logo with ultra-fine line detail directly into the metal.',
      tolerance: 'Vector DXF / SVG / AI imported'
    },
    {
      id: 'serial',
      icon: <Hash className="w-5 h-5" />,
      title: 'Serial Number',
      image: '/images/customization/serial-number.jpg',
      summary: 'Sequential numbering, variable alphanumeric, barcode/QR',
      details: 'Sequential machine serialization, laser-etched 2D DataMatrix codes, and QR codes designed for rapid plant scanner verification and ERP tracking.',
      tolerance: 'Variable Alphanumeric Data'
    },
    {
      id: 'model',
      icon: <FileSpreadsheet className="w-5 h-5" />,
      title: 'Model Number',
      image: '/images/customization/model-number.jpg',
      summary: 'Pre-engraved or punchable blank field windows',
      details: 'Leave recessed blank windows for your shop technicians to stamp variable batch dates, or let us pre-engrave complete model variants.',
      tolerance: 'Stamping window thicknesses calibrated'
    },
    {
      id: 'cutouts',
      icon: <Scissors className="w-5 h-5" />,
      title: 'Cut-outs & Holes',
      image: '/images/customization/cutouts-holes.jpg',
      summary: 'Switch holes, potentiometer slots, push buttons, emergency stops',
      details: 'Precision-drilled round holes, counterbores, slots, and aperture cutouts designed to align precisely with switches, LEDs, and hardware studs on your panels.',
      tolerance: 'Exact pitch and diameter match'
    },
    {
      id: 'mounting',
      icon: <Anchor className="w-5 h-5" />,
      title: 'Mounting Holes & Fixings',
      image: '/images/customization/mounting-fixings.jpg',
      summary: 'Drive rivets, countersunk screws, stud bolts, or 3M VHB tape',
      details: 'Corner mounting holes, slotted fasteners, or heavy-duty acrylic foam 3M tape backing suitable for quick permanent shop floor adhesion without drilling.',
      tolerance: 'Standard or custom hole pitch'
    },
    {
      id: 'finish',
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Surface Finish',
      image: '/images/customization/surface-finish.jpg',
      summary: 'Brushed satin, matte anodized, mirror, anti-glare, enamel infill',
      details: 'Surface options include unidirectional grain brushing, bead-blasted matte, protective clear anodizing, black chrome, and antique brass patina.',
      tolerance: 'Passivated & protective coated'
    }
  ];

  const currentParam = parameters[selectedParam];

  return (
    <section id="customization" className="py-20 md:py-24 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-industrial-grid-dark opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange-500/10 border border-orange-500/30 text-brand-orange text-xs font-mono tracking-wider uppercase mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>CUSTOM MANUFACTURING SPECIALIST</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Made to Your Exact Requirement
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-2 leading-relaxed">
            We do not just sell standard catalog items; every single industrial plate is manufactured to your engineering drawings, dimensions, cutouts, and environmental specifications.
          </p>
        </div>

        {/* Interactive Layout: Left Selector, Right Live Interactive Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Customization Parameters List */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {parameters.map((param, index) => (
              <button
                key={param.id}
                onClick={() => setSelectedParam(index)}
                className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${selectedParam === index
                  ? 'bg-industrial-800/90 border-brand-orange ring-1 ring-brand-orange/40 text-white shadow-md'
                  : 'bg-industrial-950/60 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-md ${selectedParam === index ? 'bg-brand-orange text-white' : 'bg-slate-800 text-slate-400'}`}>
                    {param.icon}
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-sm">{param.title}</div>
                    <div className="text-[11px] text-slate-400 truncate max-w-[190px] sm:max-w-[230px]">{param.summary}</div>
                  </div>
                </div>
                <span className={`text-[11px] font-mono ${selectedParam === index ? 'text-brand-orange font-bold' : 'text-slate-600'}`}>
                  0{index + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Single Reusable Preview Card */}
          <div className="lg:col-span-7 bg-industrial-950 rounded-2xl border border-slate-700/80 p-5 sm:p-7 shadow-2xl relative">

            {/* Header of Visualizer */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse"></span>
                <span className="font-mono text-xs text-slate-300 tracking-wider uppercase font-semibold">
                  CUSTOMIZATION PARAMETER: {currentParam.title}
                </span>
              </div>
              <span className="text-xs font-mono text-orange-400 bg-orange-950/80 px-2.5 py-1 rounded border border-orange-800/50">
                {currentParam.tolerance}
              </span>
            </div>

            {/* Dynamic Content Container (Fade Transition on Change) */}
            <div key={currentParam.id} className="space-y-5 animate-fadeIn">

              {/* Dynamic Image Preview Area */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-700/80 bg-slate-900 group shadow-inner">
                <img
                  src={currentParam.image}
                  alt={currentParam.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-950/90 via-transparent to-black/20 pointer-events-none" />

                {/* Floating overlay tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                  <div className="bg-industrial-950/85 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 text-[11px] font-mono text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                    <span className="truncate max-w-[240px] sm:max-w-none">{currentParam.summary}</span>
                  </div>
                  <div className="hidden sm:block bg-brand-orange/90 text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">
                    SPECIFICATION
                  </div>
                </div>
              </div>

              {/* Explanatory text */}
              <div className="pt-1 text-left space-y-2">
                <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span>{currentParam.title} Details</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentParam.details}
                </p>
              </div>

            </div>

            {/* Bottom Action — Request Custom Quote */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Have specific drawings or dimensional tolerances?
              </span>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white text-xs font-bold px-5 py-2.5 rounded-md transition-colors cursor-pointer"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
