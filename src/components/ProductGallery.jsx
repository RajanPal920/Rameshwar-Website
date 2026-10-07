import React from 'react';
import { Eye, ExternalLink, Sparkles } from 'lucide-react';

export default function ProductGallery() {
  const galleryItems = [
    {
      title: "Machine Rating Plate",
      category: "Stainless Steel 304",
      image: "/images/machine-name-plate.jpg",
      span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
      aspect: "aspect-[4/3] md:aspect-[16/11]",
      caption: "High-spec motor rating plate with precision tapped mounting holes"
    },
    {
      title: "Control Panel Faceplate",
      category: "Anodized Aluminium",
      image: "/images/control-panel-plate.jpg",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
      aspect: "aspect-[4/3]",
      caption: "Feed speed dial scale & emergency stop switch cutouts"
    },
    {
      title: "Equipment Data Spec Plate",
      category: "Stainless Steel 316",
      image: "/images/data-plate.jpg",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
      aspect: "aspect-[4/3]",
      caption: "Tabulated pressure rating, voltage & CE serial certification"
    },
    {
      title: "Turbine Pump Brass Plate",
      category: "Solid Polished Brass",
      image: "/images/brass-industrial-plate.jpg",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
      aspect: "aspect-[4/3]",
      caption: "Deep chemical etch with black enamel contrast lettering"
    },
    {
      title: "Facility Door / Room Plate",
      category: "Brushed Architectural Aluminium",
      image: "/images/room-door-plate.jpg",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
      aspect: "aspect-[4/3]",
      caption: "Control room high-visibility access warning signage"
    },
    {
      title: "Lathe Speed & Feed Chart",
      category: "Machine Operating Chart",
      image: "/images/temperature-chart-plate.jpg",
      span: "col-span-1 md:col-span-2 lg:col-span-2",
      aspect: "aspect-[4/3] md:aspect-[16/9]",
      caption: "Spindle RPM gear settings and temperature limit guidelines"
    },
    {
      title: "Custom Multi-Material Group",
      category: "Bespoke Metal Fabrication",
      image: "/images/multi-materials.jpg",
      span: "col-span-1 md:col-span-2 lg:col-span-2",
      aspect: "aspect-[4/3] md:aspect-[16/9]",
      caption: "Comparative array of stainless, anodized, brass and copper tags"
    },
    {
      title: "Push / Pull Directional Plates",
      category: "Facility Hardware Signage",
      image: "/images/push-pull-plate.jpg",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
      aspect: "aspect-[4/3]",
      caption: "Laser etched heavy-duty satin door plates"
    },
    {
      title: "Flexible PVC Rating Labels",
      category: "Laminated Vinyl / PVC",
      image: "/images/pvc-industrial-labels.jpg",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
      aspect: "aspect-[4/3]",
      caption: "Solvent-proof voltage warning and motor technical barcode tag"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 text-slate-100 text-xs font-mono tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              <span>FABRICATED SPECIMENS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-industrial-950 tracking-tight">
              Product Photographic Gallery
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
              Real manufactured identification plates captured in authentic industrial settings.
            </p>
          </div>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Static gradient overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-950/90 via-industrial-950/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[10px] font-mono font-bold text-brand-orange tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-sm sm:text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 font-mono mt-1 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}