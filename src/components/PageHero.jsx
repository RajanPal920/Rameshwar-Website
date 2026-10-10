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
    <div className="relative w-full overflow-hidden bg-neutral-950 site-hero-container">
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
      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full py-8">
        <div className="w-full max-w-xl md:max-w-2xl lg:max-w-[720px] xl:max-w-[740px] bg-industrial-950/90 sm:bg-industrial-950/85 backdrop-blur-sm p-6 sm:p-8 md:p-9 rounded-2xl border border-neutral-700/60 shadow-2xl">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center flex-wrap gap-1.5 text-xs font-mono text-neutral-300 mb-3.5" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-brand-orange transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-orange text-black text-[11px] sm:text-xs font-mono font-black tracking-widest uppercase mb-3.5 self-start shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              <span>{eyebrow}</span>
            </div>
          )}

          {/* Title - Bold & High Contrast */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[40px] font-extrabold text-white tracking-tight uppercase leading-[1.15] drop-shadow-md">
            {title}
          </h1>

          {/* High-Legibility Description */}
          {description && (
            <p className="text-slate-100 text-sm sm:text-[15px] md:text-base mt-3.5 leading-relaxed font-normal drop-shadow-sm max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
