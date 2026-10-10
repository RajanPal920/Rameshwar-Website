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
        <div className="pointer-events-auto w-[min(740px,calc(100%-24px))] min-h-[380px] p-[32px_28px] box-border flex flex-col justify-center text-white bg-white/15 backdrop-blur-md border border-white/70 rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center flex-wrap gap-1.5 text-xs font-mono text-white mb-4" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-brand-orange transition-colors text-white">
                Home
              </Link>
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  <ChevronRight className="w-3.5 h-3.5 text-white/70" />
                  {crumb.to ? (
                    <Link to={crumb.to} className="hover:text-brand-orange transition-colors text-white">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-orange text-white text-[11px] sm:text-xs font-extrabold tracking-widest uppercase mb-4 self-start shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>{eyebrow}</span>
            </div>
          )}

          {/* Title — Orange, Bold, Big */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-extrabold text-brand-orange tracking-tight uppercase leading-[1.1]">
            {title}
          </h1>

          {/* Description — White, Bigger Font */}
          {description && (
            <p className="text-white text-base sm:text-lg md:text-xl mt-4 leading-relaxed font-normal max-w-2xl">
              {description}
            </p>
          )}

          {/* Supporting Trust & Specification Line */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/40 text-xs sm:text-sm font-extrabold mt-auto">
            <div className="flex items-center gap-1.5 text-brand-orange font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span>ISO 9001:2015</span>
            </div>
            <span className="text-white/60 hidden sm:inline">•</span>
            <span className="text-white font-medium font-extrabold ">Bhiwandi & Mumbai, India</span>
            <span className="text-white/60 hidden sm:inline">•</span>
            <span className="text-white font-medium font-extrabold ">OEM Specification Direct</span>
          </div>
        </div>
      </div>
    </div>
  );
}