import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * Premium full-width PageHero component for inner pages.
 * Conforms to the industrial aesthetic: full-bleed image cover, readable dark panel, bold typography.
 */
export default function PageHero({
  image,
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  objectPosition = 'center center',
}) {
  return (
    <div
      className="relative w-full overflow-hidden bg-neutral-950"
      style={{
        minHeight: '440px',
        height: 'clamp(440px, 52vh, 620px)',
      }}
    >
      {/* Full-Bleed Background Image (fills entire container, object-fit: cover, no margins/borders) */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: objectPosition,
        }}
      />

      {/* High-Contrast Industrial Vignette Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(5,7,10,0.92) 0%, rgba(8,10,14,0.82) 42%, rgba(10,12,16,0.42) 75%, rgba(10,12,16,0.20) 100%)',
          zIndex: 2,
        }}
      />

      {/* Bottom Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28"
        style={{
          background: 'linear-gradient(to top, rgba(5,7,10,0.70) 0%, transparent 100%)',
          zIndex: 3,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-12 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center flex-wrap gap-1.5 text-xs font-mono text-neutral-300 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-orange transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-500" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-brand-orange transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-brand-orange font-bold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Eyebrow Badge */}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-brand-orange text-black text-[11px] font-mono font-black tracking-widest uppercase mb-4 self-start shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            <span>{eyebrow}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight drop-shadow-md max-w-3xl">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-neutral-200 text-sm sm:text-base md:text-lg mt-3.5 leading-relaxed max-w-2xl drop-shadow">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
