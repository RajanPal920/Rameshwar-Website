import React from 'react';
import { Link } from 'react-router-dom';

const MARQUEE_ITEMS = [
  {
    name: "Brass",
    link: "/brass-plates-manufacturer-in-mumbai",
    desc: "Corrosion-resistant, premium marine & pump identification",
    swatch: "linear-gradient(135deg, #f59e0b, #b45309)",
    badge: "High Corrosion Resistance",
  },
  {
    name: "Copper",
    link: "/copper-plates-supplier-in-india",
    desc: "Thermal & grounding properties for electrical applications",
    swatch: "linear-gradient(135deg, #fb923c, #b95034)",
    badge: "Thermal & Grounding",
  },
  {
    name: "Bronze",
    link: "/bronze-plates-stockist-in-india",
    desc: "Heavy-duty cast plates for marine & high-wear applications",
    swatch: "linear-gradient(135deg, #d97706, #92400e)",
    badge: "Marine & High-Wear",
  },
  {
    name: "Aluminium",
    link: "/aluminium-stockist-in-mumbai",
    desc: "Lightweight anodized plates for CNC panels & equipment tags",
    swatch: "linear-gradient(135deg, #cbd5e1, #94a3b8)",
    badge: "Anodized & Scratch-Proof",
  },
  {
    name: "Stainless Steel",
    link: "/stainless-steel-supplier-in-mumbai",
    desc: "SS 304 / 316 for extreme heat, chemical & impact resistance",
    swatch: "linear-gradient(135deg, #e2e8f0, #64748b)",
    badge: "SS 304 / SS 316 Grades",
  },
  {
    name: "PVC & Vinyl",
    link: "/pvc-vinyl-manufacturing-in-mumbai",
    desc: "Flexible labels for curved housings & safety warning overlays",
    swatch: "linear-gradient(135deg, #f97316, #ea580c)",
    badge: "Solvent & Oil Resistant",
  },
  {
    name: "Tool Steel",
    link: "/bronze-plates-stockist-in-india",
    desc: "Heavy stamped steel plates for machinery & motor housings",
    swatch: "linear-gradient(135deg, #475569, #1e293b)",
    badge: "Heavy Industrial Stamped",
  },
  {
    name: "Industrial Overlays",
    link: "/pvc-vinyl-manufacturing-in-mumbai",
    desc: "High-bond adhesive identification for switchgear & cabinets",
    swatch: "linear-gradient(135deg, #7c3aed, #4c1d95)",
    badge: "3M High-Bond Adhesive",
  },
];

// Single sequence repeated twice for a mathematically seamless 50% translation loop
const SEQUENCE = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export default function MaterialStrip() {
  return (
    <div
      className="w-full bg-brand-orange text-black py-3 sm:py-3.5 border-y border-orange-600/40 shadow-md relative z-20 overflow-hidden select-none"
      aria-label="Capabilities Marquee Strip"
    >
      <div className="marquee-outer">
        <div className="marquee-track flex items-center">
          {/* Half 1 */}
          <div className="flex items-center shrink-0">
            {SEQUENCE.map((item, idx) => (
              <Link
                key={`h1-${idx}`}
                to={item.link}
                className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 hover:opacity-85 transition-opacity"
              >
                <span className="w-2 h-2 rounded-full bg-black shrink-0" />
                <span className="text-black font-extrabold text-xs sm:text-sm md:text-base tracking-wider uppercase whitespace-nowrap">
                  {item.name}
                </span>
                <span className="text-black/85 text-[10px] sm:text-xs font-semibold tracking-tight bg-black/10 px-2 py-0.5 rounded uppercase whitespace-nowrap">
                  {item.badge}
                </span>
              </Link>
            ))}
          </div>

          {/* Half 2 (Exact duplicate for seamless infinite loop) */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {SEQUENCE.map((item, idx) => (
              <Link
                key={`h2-${idx}`}
                to={item.link}
                tabIndex={-1}
                className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 hover:opacity-85 transition-opacity"
              >
                <span className="w-2 h-2 rounded-full bg-black shrink-0" />
                <span className="text-black font-extrabold text-xs sm:text-sm md:text-base tracking-wider uppercase whitespace-nowrap">
                  {item.name}
                </span>
                <span className="text-black/85 text-[10px] sm:text-xs font-semibold tracking-tight bg-black/10 px-2 py-0.5 rounded uppercase whitespace-nowrap">
                  {item.badge}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
