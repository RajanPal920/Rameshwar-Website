import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa6';

export default function Header({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Materials', path: '/materials' },
    { name: 'Industries', path: '/industries' },
    { name: 'Certificate', path: '/certificate' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-200">
      {/* Top Bar: Compact, clean, perfectly aligned */}
      <div className="bg-industrial-950 text-slate-300 text-xs border-b border-neutral-800/80 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Left: Contact Info (Phone & Email) */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span className="font-medium text-[11px] sm:text-xs tracking-tight">+91 98765 43210</span>
            </a>
            <a
              href="mailto:sales@rameshwarindustries.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-brand-orange transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span className="font-medium text-[11px] sm:text-xs tracking-tight">sales@rameshwarindustries.com</span>
            </a>
          </div>

          {/* Right: Location & Actual Recognizable Social Media Icons */}
          <div className="flex items-center gap-3 sm:gap-5 text-slate-400">
            <span className="hidden lg:flex items-center gap-1.5 text-[11px] text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span>GIDC Industrial Area, Gujarat</span>
            </span>

            {/* Actual Recognizable Social Media Icons */}
            <div className="flex items-center gap-2 sm:gap-3 border-l border-neutral-800 pl-3 sm:pl-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Direct"
                className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 text-slate-400 hover:text-[#0a66c2] transition-colors"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 text-slate-400 hover:text-[#1877f2] transition-colors"
              >
                <FaFacebookF className="w-3 h-3" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 text-slate-400 hover:text-[#e4405f] transition-colors"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Compact Sticky Navbar */}
      <nav
        className={`bg-white transition-all duration-200 border-b border-slate-200 ${isScrolled ? 'shadow-md shadow-slate-200/80 bg-white/98 backdrop-blur-md' : 'shadow-xs'
          }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-8 flex items-center justify-between h-16 sm:h-20 lg:h-[96px]">

          {/* Prominent Rameshwar Industries Logo + Company Name */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3.5 py-1 group shrink-0">
            <img
              src="/logo.png"
              alt="Rameshwar Industries Logo"
              className="h-8 sm:h-11 md:h-14 lg:h-16 xl:h-[76px] w-auto object-contain transition-all"
            />
            <div className="flex flex-col justify-center">
              <span className="font-extrabold tracking-tight text-[13px] sm:text-base md:text-lg lg:text-xl xl:text-[26px] font-sans uppercase text-orange-500 whitespace-nowrap leading-tight">
                RAMESHWAR INDUSTRIES
              </span>

              {/* ISO Certificate Line — Shifted right directly under "INDUSTRIES", bold in black, compact on mobile */}
              <div className="flex items-center gap-0.5 sm:gap-1 mt-0.5 self-end">
                <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black shrink-0" />
                <span className="text-[7.5px] sm:text-[9.5px]  font-bold tracking-tight sm:tracking-wider uppercase text-black whitespace-nowrap leading-none">
                  ISO 9001:2015 Certified Company
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links — Centered/Right with balanced spacing, vertically centered */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8 h-full">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm xl:text-[15px] 2xl:text-base font-semibold transition-colors py-1 relative hover:text-brand-orange whitespace-nowrap ${isActive
                    ? 'text-brand-orange font-bold after:w-full after:absolute after:-bottom-2.5 after:left-0 after:h-0.5 after:bg-brand-orange'
                    : 'text-slate-700 hover:after:w-full after:transition-all after:duration-200 after:absolute after:-bottom-2.5 after:left-0 after:w-0 after:h-0.5 after:bg-brand-orange'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:text-brand-orange hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-slate-200 shadow-xl px-5 py-5 transition-all">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-semibold py-2.5 px-3 rounded-md transition-colors ${isActive
                    ? 'bg-orange-50 text-brand-orange font-bold'
                    : 'text-slate-800 hover:text-brand-orange hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 bg-brand-orange text-white font-bold py-2.5 px-4 rounded-md shadow-sm cursor-pointer text-sm"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex justify-between items-center text-xs text-slate-500 pt-1">
                <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-brand-orange">
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>+91 98765 43210</span>
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <FaWhatsapp className="w-3.5 h-3.5" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
