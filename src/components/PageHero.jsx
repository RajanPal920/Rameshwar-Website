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
      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full py-6">
        <div className="max-w-xl lg:max-w-2xl bg-slate-950/70 sm:bg-slate-950/65 backdrop-blur-md p-6 sm:p-7 md:p-8 rounded-2xl border border-white/20 shadow-2xl">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center flex-wrap gap-1.5 text-xs font-mono text-neutral-300 mb-3" aria-label="Breadcrumb">
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
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-brand-orange text-black text-[10px] sm:text-xs font-mono font-black tracking-widest uppercase mb-3 self-start shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              <span>{eyebrow}</span>
            </div>
          )}

          {/* Title - Bold & High Contrast */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-extrabold text-white tracking-tight uppercase leading-[1.18] drop-shadow-md">
            {title}
          </h1>

          {/* High-Legibility Description */}
          {description && (
            <p className="text-slate-100 text-xs sm:text-sm md:text-base mt-3 leading-relaxed font-normal drop-shadow-sm">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
