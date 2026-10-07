import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const slides = [
  {
    id: 1,
    eyebrow: "PRECISION INDUSTRIAL IDENTIFICATION",
    heading: "ENGINEERED NAMEPLATES. BUILT FOR INDUSTRY.",
    description: "Precision-manufactured industrial nameplates, identification plates and custom labels for machines, control panels, equipment and industrial applications.",
    image: "/images/custom-plates-group.jpg",
    objectPosition: "center 40%",
    badge: "SS 304 / SS 316 Grade",
    specs: "Laser Etched • Serialized • Vibration-Proof",
    ctaPrimary: "EXPLORE OUR PRODUCTS",
    ctaSecondary: "GET A QUOTE",
    qual: "ISO Compliant Manufacturing",
  },
  {
    id: 2,
    eyebrow: "MACHINE & EQUIPMENT IDENTIFICATION",
    heading: "CUSTOM INDUSTRIAL NAMEPLATES & IDENTIFICATION",
    description: "Permanent laser-etched and stamped technical rating plates engineered to withstand high vibration, lubricants, heat, and plant floor wear.",
    image: "/images/equipment-data-plate.jpg",
    objectPosition: "center 50%",
    badge: "Heavy Duty Data Plate",
    specs: "Pressure & Power Ratings • CE Certified",
    ctaPrimary: "EXPLORE OUR PRODUCTS",
    ctaSecondary: "GET A QUOTE",
    qual: "Udyam Registered Enterprise",
  },
  {
    id: 3,
    eyebrow: "METALLURGICAL SUBSTRATE EXPERTISE",
    heading: "BRASS • COPPER • ALUMINIUM PRECISION-MADE PLATES",
    description: "High-contrast chemical etching, deep enamel filling, and precision CNC profiling crafted in solid brass, pure copper, and anodized aluminium for demanding environments.",
    image: "/images/brass-industrial-plate.jpg",
    objectPosition: "center 50%",
    badge: "Solid Brass & Anodized Alloys",
    specs: "Deep Enamel Fill • Marine Grade • Mirror & Satin",
    ctaPrimary: "EXPLORE OUR PRODUCTS",
    ctaSecondary: "GET A QUOTE",
    qual: "Global Export Ready",
  },
  {
    id: 4,
    eyebrow: "AUTOMATION & PANEL FACEPLATES",
    heading: "IDENTIFICATION PLATES FOR INDUSTRIAL APPLICATIONS",
    description: "Custom switch cutouts, dial markings, emergency indicators, and operator legends manufactured in anodized aluminium and stainless steel.",
    image: "/images/control-panel-plate.jpg",
    objectPosition: "center 45%",
    badge: "Precision CNC Control Faceplates",
    specs: "CNC Cutouts • Dial Markings • Switch Holes",
    ctaPrimary: "EXPLORE OUR PRODUCTS",
    ctaSecondary: "GET A QUOTE",
    qual: "Custom CAD to Production",
  }
];

export default function HeroSlider({ onOpenQuote }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  const goToSlide = (idx) => {
    if (idx === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(idx);
      setIsTransitioning(false);
    }, 180);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          setIsTransitioning(false);
        }, 180);
      }, 5500);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length);
  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative w-full overflow-hidden bg-neutral-950"
      style={{
        minHeight: '500px',
        height: 'clamp(500px, calc(96vh - 90px), 760px)',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Industrial Nameplates Hero Showcase"
    >
      {/* Full-Screen Background Image Slides */}
      {slides.map((s, idx) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: idx === currentSlide ? 1 : 0,
            zIndex: idx === currentSlide ? 1 : 0,
            pointerEvents: idx === currentSlide ? 'auto' : 'none',
          }}
        >
          {/* Main Full-Bleed Product Image */}
          <img
            src={s.image}
            alt={s.heading}
            className="w-full h-full object-cover transition-transform duration-7000 ease-out"
            style={{
              objectPosition: s.objectPosition || 'center center',
              transform: idx === currentSlide ? 'scale(1.02)' : 'scale(1.0)',
            }}
          />

          {/* Cinematic Vignette Overlay: Left-heavy for text panel contrast, transparent on right for product display */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(5,7,10,0.88) 0%, rgba(8,10,14,0.78) 42%, rgba(10,12,16,0.38) 72%, rgba(10,12,16,0.18) 100%)',
              zIndex: 2,
            }}
          />
          {/* Subtle bottom gradient to blend into marquee */}
          <div
            className="absolute bottom-0 left-0 right-0 h-20 sm:h-28"
            style={{
              background: 'linear-gradient(to top, rgba(5,7,10,0.65) 0%, transparent 100%)',
              zIndex: 3,
            }}
          />
        </div>
      ))}

      {/* Hero Foreground Content: Dark / Subtle Readable Content Panel */}
      <div
        className="absolute inset-0 flex items-center"
        style={{ zIndex: 10 }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-8">

          {/* Dark / Subtle Readable Content Panel */}
          <div
            className={`max-w-xl lg:max-w-2xl bg-neutral-950/85 sm:bg-neutral-950/80 backdrop-blur-md p-5 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl border border-neutral-800 shadow-2xl transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-brand-orange text-black text-[10px] sm:text-xs font-mono font-black tracking-widest uppercase mb-3 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              <span>{slide.eyebrow}</span>
            </div>

            {/* Large Bold Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-white tracking-tight leading-[1.14] mb-3 uppercase drop-shadow-md">
              {slide.heading}
            </h1>

            {/* Description */}
            <p className="text-neutral-200 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5 font-normal max-w-xl drop-shadow">
              {slide.description}
            </p>

            {/* Industrial Specs Pill */}
            <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-5">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold bg-white/10 text-brand-orange border border-white/15 px-2.5 py-0.5 rounded">
                {slide.badge}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-neutral-300 hidden sm:inline">
                {slide.specs}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-5">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-extrabold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-md shadow-md shadow-orange-600/25 transition-all duration-200 group tracking-wider uppercase cursor-pointer"
              >
                <span>{slide.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => onOpenQuote(slide.badge)}
                className="inline-flex items-center gap-2 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-brand-orange text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-md transition-all duration-200 tracking-wider uppercase cursor-pointer"
              >
                <span>{slide.ctaSecondary}</span>
              </button>
            </div>

            {/* Industrial Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-neutral-800/80 text-[11px] font-mono">
              <div className="flex items-center gap-1.5 text-brand-orange font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                <span>{slide.qual}</span>
              </div>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-1 text-neutral-300">
                <CheckCircle2 className="w-3 h-3 text-brand-orange" />
                <span>Custom CAD Designs</span>
              </div>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-1 text-neutral-300">
                <CheckCircle2 className="w-3 h-3 text-brand-orange" />
                <span>Multi-Alloy Substrates</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Slide Technical Spec Card (Desktop bottom-right) */}
      <div
        className="hidden xl:block absolute bottom-12 right-12"
        style={{ zIndex: 11 }}
      >
        <div
          className={`bg-neutral-950/80 backdrop-blur-md border border-neutral-800 rounded-xl px-4 py-3 text-right transition-all duration-500 shadow-xl ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
        >
          <div className="text-brand-orange text-xs font-mono font-bold tracking-wider uppercase">
            {slide.badge}
          </div>
          <div className="text-neutral-300 text-[11px] font-mono mt-0.5">
            {slide.specs}
          </div>
        </div>
      </div>

      {/* Prev / Next Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-neutral-950/70 hover:bg-brand-orange text-white hover:text-black border border-white/20 transition-all duration-200 shadow-lg cursor-pointer focus:outline-none"
        style={{ zIndex: 20 }}
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-neutral-950/70 hover:bg-brand-orange text-white hover:text-black border border-white/20 transition-all duration-200 shadow-lg cursor-pointer focus:outline-none"
        style={{ zIndex: 20 }}
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Slider Indicators: Dot Nav */}
      <div
        className="absolute bottom-3.5 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2"
        style={{ zIndex: 20 }}
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${currentSlide === idx
              ? 'w-7 h-2 bg-brand-orange shadow-md shadow-orange-500/50'
              : 'w-2 h-2 bg-white/40 hover:bg-white/80'
              }`}
          />
        ))}
      </div>

      {/* Slider Counter */}
      <div
        className="absolute bottom-3.5 sm:bottom-4 right-3 sm:right-8 text-neutral-400 text-[11px] font-mono"
        style={{ zIndex: 20 }}
      >
        <span className="text-white font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span> / {String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Active Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10" style={{ zIndex: 20 }}>
        <div
          className="h-full bg-brand-orange"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            transition: 'width 0.35s ease',
          }}
        />
      </div>
    </section>
  );
}
