import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * Premium full-width PageHero component for inner pages.
 * Consistent height, visual proportions, and clear images matching the homepage hero slider.
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
    <div className="relative w-full overflow-hidden bg-slate-100 site-hero-container">
      {/* Full-Bleed Background Image (Clear, Sharp, Professionally Presented) */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: objectPosition,
        }}
      />

      {/* Hero Foreground Content: Clean Left-Aligned Card matching Homepage Hero proportions */}
      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full py-8 pointer-events-none">
        <div className="pointer-events-auto hero-content-card">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center flex-wrap gap-1.5 text-xs font-mono text-slate-600 mb-3.5" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-brand-orange transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-orange text-white text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase mb-3.5 self-start shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>{eyebrow}</span>
            </div>
          )}

          {/* Title - Bold & High Contrast Dark Charcoal */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[40px] font-extrabold text-industrial-950 tracking-tight uppercase leading-[1.15]">
            {title}
          </h1>

          {/* High-Legibility Dark Charcoal Description */}
          {description && (
            <p className="text-slate-700 text-sm sm:text-[15px] md:text-base mt-3.5 leading-relaxed font-normal max-w-2xl">
              {description}
            </p>
          )}

          {/* Supporting Trust & Specification Line to maintain consistent visual height and balance */}
          <div className="flex flex-wrap items-center gap-3 pt-3.5 border-t border-slate-300/70 text-xs font-mono mt-auto">
            <div className="flex items-center gap-1.5 text-brand-orange font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span>ISO 9001:2015</span>
            </div>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-slate-700 font-medium">Bhiwandi & Mumbai, India</span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-slate-700 font-medium">OEM Specification Direct</span>
          </div>
        </div>
      </div>
    </div>
  );
}