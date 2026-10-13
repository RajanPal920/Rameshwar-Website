import React from 'react';
import { Eye, ExternalLink, Sparkles } from 'lucide-react';

export default function ProductGallery() {
  const galleryItems = [
    {
      title: "Machine Rating Plate",
      category: "Stainless Steel 304",
      image: "/images/img2.jpg",
      span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
      aspect: "aspect-[4/3] md:aspect-[16/11]",
      caption: "High-spec motor rating plate with precision tapped mounting holes"
    },
    {
      title: "Control Panel Faceplate",
      category: "Anodized Aluminium",
      image: "/images/img9.jpg",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
      aspect: "aspect-[4/3]",
      caption: "High-contrast rotary dial scale and voltage output calibrations"
    },
    {
      title: "Equipment Data Spec Plate",
      category: "Stainless Steel 316",
      image: "/images/img4.jpg",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
      aspect: "aspect-[4/3]",
      caption: "Tabulated pressure rating, voltage & CE serial certification"
    },
    {
      title: "Turbine Pump Brass Plate",
      category: "Solid Polished Brass",
      image: "/images/img12.jpg",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
      aspect: "aspect-[4/3]",
      caption: "Centrifugal pump data plate with deep chemical etch and enamel lettering"
    },
    {
      title: "Facility Door / Room Plate",
      category: "Brushed Architectural Aluminium",
      image: "/images/img13.jpg",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
      aspect: "aspect-[4/3]",
      caption: "Heavy-duty satin stainless steel PUSH & PULL directional facility plates"
    },
    {
      title: "Lathe Speed & Feed Chart",
      category: "Machine Operating Chart",
      image: "/images/img14.jpg",
      span: "col-span-1 md:col-span-2 lg:col-span-2",
      aspect: "aspect-[4/3] md:aspect-[16/9]",
      caption: "Spindle RPM gear settings and feeds & threads technical operating chart"
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
      title: "Machinery Technical Spec Plate",
      category: "Heavy Industrial Stamped",
      image: "/images/img3.jpg",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
      aspect: "aspect-[4/3]",
      caption: "Permanent motor technical ratings, voltage index and CE certified identification"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 text-slate-100 text-xs font-semibold tracking-wide uppercase mb-3">
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
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="relative aspect-[16/11] bg-slate-50/70 p-4 sm:p-5 border-b border-slate-100/90 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <span className="text-[11px] font-semibold text-brand-orange uppercase tracking-wider block mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-[17px] font-bold text-industrial-950 group-hover:text-brand-orange transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 mt-2 line-clamp-2 leading-relaxed font-normal">
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