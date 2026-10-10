import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  FileDown,
  ExternalLink,
  Award,
  Layers,
  FileText,
  Settings2,
  SlidersHorizontal,
  Tag,
  AlertTriangle
} from 'lucide-react';
import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { PRODUCTS, CATALOGUE_DOWNLOAD_URL, COMPANY_CONTACT } from '../data/productData';

// Organized categories for the Products mega menu
const PRODUCT_MENU_CATEGORIES = [
  {
    title: "Machinery & Rating",
    subtitle: "Motor & Equipment Specs",
    icon: Settings2,
    items: [
      { name: "Machine Name Plates", url: "/machine-name-plates/manufacturer-in-india" },
      { name: "Motor Rating Plates", url: "/motor-rating-plates/manufacturer-in-india" },
      { name: "Valve Body & Trim Plates", url: "/valve-body-trim-plates/manufacturer-in-india" }
    ]
  },
  {
    title: "Control Panel & Schematics",
    subtitle: "Automation & Switchgear",
    icon: SlidersHorizontal,
    items: [
      { name: "Control Panel Name Plates", url: "/control-panel-name-plates/manufacturer-in-india" },
      { name: "Temperature & Operating Plates", url: "/temperature-control-plates/manufacturer-in-india" },
      { name: "Custom Industrial Metal Plates", url: "/custom-industrial-plates/manufacturer-in-india" }
    ]
  },
  {
    title: "Metals & Asset Tags",
    subtitle: "SS, Aluminium & Asset Tracking",
    icon: Tag,
    items: [
      { name: "Stainless Steel Name Plates", url: "/stainless-steel-name-plates/manufacturer-in-india" },
      { name: "Aluminium Name Plates", url: "/aluminium-name-plates/manufacturer-in-india" },
      { name: "Industrial Machine Tags", url: "/industrial-machine-tags/manufacturer-in-india" }
    ]
  },
  {
    title: "Safety & Facility Signs",
    subtitle: "Hazard, Push/Pull & Labels",
    icon: AlertTriangle,
    items: [
      { name: "Safety Warning & Hazard Signs", url: "/industrial-safety-signs/manufacturer-in-india" },
      { name: "Push / Pull Directional Plates", url: "/push-pull-directional-plates/manufacturer-in-india" },
      { name: "PVC & Vinyl Industrial Labels", url: "/pvc-vinyl-labels/manufacturer-in-india" }
    ]
  }
];

export default function Header({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'products' | 'certification' | null
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileCertOpen, setMobileCertOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isCertActive = location.pathname.startsWith('/certificate');
  const isProductsActive = location.pathname.startsWith('/products') || PRODUCT_MENU_CATEGORIES.some(cat => cat.items.some(item => location.pathname === item.url));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = (menu) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220);
  };

  const closeAllMenus = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileCertOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-200">
      {/* Top Bar: Compact, clean, perfectly aligned with verified information */}
      <div className="bg-industrial-950 text-slate-300 text-xs border-b border-neutral-800/80 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Left: Contact Info (Phone & Email) */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${COMPANY_CONTACT.primaryPhoneRaw}`}
              className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span className="font-medium text-[11px] sm:text-xs tracking-tight">{COMPANY_CONTACT.primaryPhone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_CONTACT.primaryEmail}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-brand-orange transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span className="font-medium text-[11px] sm:text-xs tracking-tight">{COMPANY_CONTACT.primaryEmail}</span>
            </a>
          </div>

          {/* Right: Location & Actual Recognizable Social Media Icons */}
          <div className="flex items-center gap-3 sm:gap-5 text-slate-400">
            <span className="hidden lg:flex items-center gap-1.5 text-[11px] text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span>Bhiwandi (Thane) & Mumbai, Maharashtra</span>
            </span>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2 sm:gap-3 border-l border-neutral-800 pl-3 sm:pl-4">
              <a
                href={COMPANY_CONTACT.whatsappUrl}
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

      {/* Main Sticky Navbar */}
      <nav
        className={`bg-white transition-all duration-200 border-b border-slate-200 ${
          isScrolled ? 'shadow-md shadow-slate-200/80 bg-white/98 backdrop-blur-md' : 'shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-8 flex items-center justify-between h-16 sm:h-20 lg:h-[96px]">

          {/* Rameshwar Industries Logo */}
          <Link to="/" onClick={closeAllMenus} className="flex items-center gap-2 sm:gap-3.5 py-1 group shrink-0">
            <img
              src="/logo.png"
              alt="Rameshwar Industries Logo"
              className="h-8 sm:h-11 md:h-14 lg:h-16 xl:h-[76px] w-auto object-contain transition-all"
            />
            <div className="flex flex-col justify-center">
              <span className="font-extrabold tracking-tight text-[13px] sm:text-base md:text-lg lg:text-xl xl:text-[26px] font-sans uppercase text-orange-500 whitespace-nowrap leading-tight">
                RAMESHWAR INDUSTRIES
              </span>
              <div className="flex items-center gap-0.5 sm:gap-1 mt-0.5 self-end">
                <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black shrink-0" />
                <span className="text-[7.5px] sm:text-[9.5px] font-bold tracking-tight sm:tracking-wider uppercase text-black whitespace-nowrap leading-none">
                  ISO 9001:2015 Certified Company
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links with Dropdown Support */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm xl:text-[15px] font-semibold transition-colors py-1 relative hover:text-brand-orange whitespace-nowrap ${
                  isActive
                    ? 'text-brand-orange font-bold after:w-full after:absolute after:-bottom-2.5 after:left-0 after:h-0.5 after:bg-brand-orange'
                    : 'text-slate-800'
                }`
              }
            >
              Home
            </NavLink>

            {/* About */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm xl:text-[15px] font-semibold transition-colors py-1 relative hover:text-brand-orange whitespace-nowrap ${
                  isActive
                    ? 'text-brand-orange font-bold after:w-full after:absolute after:-bottom-2.5 after:left-0 after:h-0.5 after:bg-brand-orange'
                    : 'text-slate-800'
                }`
              }
            >
              About
            </NavLink>

            {/* Products (Dropdown / Mega Menu) */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to="/products"
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'products'}
                className={`inline-flex items-center gap-1.5 text-sm xl:text-[15px] font-semibold transition-colors py-1 relative hover:text-brand-orange whitespace-nowrap ${
                  isProductsActive
                    ? 'text-brand-orange font-bold after:w-full after:absolute after:-bottom-2.5 after:left-0 after:h-0.5 after:bg-brand-orange'
                    : 'text-slate-800'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-brand-orange' : 'text-slate-400'}`} />
              </NavLink>

              {/* Mega Dropdown Panel - Wide Single-Row Multi-Column Layout */}
              {activeDropdown === 'products' && (
                <div
                  role="region"
                  aria-label="Products Mega Menu"
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[980px] xl:w-[1060px] max-w-[96vw] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden ring-1 ring-black/5">
                    {/* Header line inside dropdown */}
                    <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-brand-orange" />
                        <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-800 whitespace-nowrap">
                          Product Solutions Portfolio
                        </span>
                        <span className="text-[10px] bg-orange-100 text-brand-orange font-mono font-bold px-2 py-0.5 rounded whitespace-nowrap">
                          12 Industrial Categories
                        </span>
                      </div>
                      <Link
                        to="/products"
                        onClick={closeAllMenus}
                        className="text-xs font-bold text-brand-orange hover:text-brand-orange-dark flex items-center gap-1 transition-colors group/view whitespace-nowrap"
                      >
                        <span>View All Products</span>
                        <ArrowRight className="w-3 h-3 group-view:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                    {/* 4 Category Columns Grid - Clean Single Horizontal Row on Desktop */}
                    <div className="p-6 sm:p-7 grid grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 bg-white">
                      {PRODUCT_MENU_CATEGORIES.map((cat) => {
                        const CategoryIcon = cat.icon;
                        return (
                          <div key={cat.title} className="space-y-3 min-w-0">
                            <div className="pb-2.5 border-b border-slate-100">
                              <div className="flex items-center gap-1.5 text-brand-orange mb-0.5">
                                <CategoryIcon className="w-3.5 h-3.5 shrink-0" />
                                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 whitespace-nowrap">
                                  {cat.title}
                                </h4>
                              </div>
                              <p className="text-[10px] text-slate-400 font-mono whitespace-nowrap">
                                {cat.subtitle}
                              </p>
                            </div>
                            <ul className="space-y-1.5">
                              {cat.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.url}
                                    onClick={closeAllMenus}
                                    className="group/item flex items-center gap-2 text-xs text-slate-700 hover:text-brand-orange hover:bg-orange-50/70 font-medium px-2.5 py-1.5 rounded-md leading-tight transition-all whitespace-nowrap"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 opacity-0 -ml-1 group-hover/item:opacity-100 group-hover/item:ml-0 transition-all"></span>
                                    <span className="whitespace-nowrap">{item.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>

                    {/* Dropdown Footer CTA */}
                    <div className="bg-slate-900 text-white px-6 py-3 flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-mono text-[11px] whitespace-nowrap">
                        Direct Factory Manufacturer • SS 304/316 • Aluminium • Brass • ISO 9001:2015
                      </span>
                      <a
                        href={CATALOGUE_DOWNLOAD_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        onClick={closeAllMenus}
                        className="inline-flex items-center gap-1.5 bg-brand-orange hover:bg-brand-orange-dark text-white px-3.5 py-1.5 rounded-md font-bold transition-colors shadow-2xs whitespace-nowrap"
                      >
                        <FileDown className="w-3.5 h-3.5" />
                        <span>Download Catalogue (PDF)</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Materials */}
            <NavLink
              to="/materials"
              className={({ isActive }) =>
                `text-sm xl:text-[15px] font-semibold transition-colors py-1 relative hover:text-brand-orange whitespace-nowrap ${
                  isActive
                    ? 'text-brand-orange font-bold after:w-full after:absolute after:-bottom-2.5 after:left-0 after:h-0.5 after:bg-brand-orange'
                    : 'text-slate-800'
                }`
              }
            >
              Materials
            </NavLink>

            {/* Industries */}
            <NavLink
              to="/industries"
              className={({ isActive }) =>
                `text-sm xl:text-[15px] font-semibold transition-colors py-1 relative hover:text-brand-orange whitespace-nowrap ${
                  isActive
                    ? 'text-brand-orange font-bold after:w-full after:absolute after:-bottom-2.5 after:left-0 after:h-0.5 after:bg-brand-orange'
                    : 'text-slate-800'
                }`
              }
            >
              Industries
            </NavLink>

            {/* Certification (Dropdown Trigger — Does NOT open certificate directly) */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('certification')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'certification' ? null : 'certification')}
                className={`inline-flex items-center gap-1.5 text-sm xl:text-[15px] font-semibold transition-colors py-1 relative hover:text-brand-orange whitespace-nowrap cursor-pointer ${
                  isCertActive
                    ? 'text-brand-orange font-bold after:w-full after:absolute after:-bottom-2.5 after:left-0 after:h-0.5 after:bg-brand-orange'
                    : 'text-slate-800'
                }`}
              >
                <span>Certification</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'certification' ? 'rotate-180 text-brand-orange' : 'text-slate-400'}`} />
              </button>

              {/* Certification Dropdown Menu */}
              {activeDropdown === 'certification' && (
                <div
                  className="absolute top-full left-0 pt-2 w-[340px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleMouseEnter('certification')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100">
                    {/* Header */}
                    <div className="bg-slate-50 px-4 py-2.5">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-800">
                        Official Enterprise Documents
                      </span>
                    </div>

                    {/* Udyam Certificate Link — Opens Document in New Tab */}
                    <a
                      href="/certificates/udyam-certificate.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeAllMenus}
                      className="p-3.5 flex items-start gap-3 hover:bg-orange-50/70 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-100 group-hover:bg-brand-orange group-hover:text-white text-brand-orange flex items-center justify-center shrink-0 transition-colors">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-slate-900 group-hover:text-brand-orange transition-colors">
                            Udyam Registration Certificate
                          </h4>
                          <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-brand-orange" />
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          Ministry of MSME, Govt. of India (Opens in New Tab)
                        </p>
                      </div>
                    </a>

                    {/* ISO 9001:2015 Quality Page */}
                    <Link
                      to="/certificate"
                      onClick={closeAllMenus}
                      className="p-3.5 flex items-start gap-3 hover:bg-orange-50/70 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-brand-orange group-hover:text-white text-slate-700 flex items-center justify-center shrink-0 transition-colors">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-brand-orange transition-colors">
                          ISO 9001:2015 Quality Compliance
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          Quality Assurance & Verified Factory Protocols
                        </p>
                      </div>
                    </Link>

                    {/* 4-Stage QC Protocol */}
                    <Link
                      to="/certificate"
                      onClick={closeAllMenus}
                      className="p-3.5 flex items-start gap-3 hover:bg-orange-50/70 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-brand-orange group-hover:text-white text-slate-700 flex items-center justify-center shrink-0 transition-colors">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-brand-orange transition-colors">
                          4-Stage Inspection & QC Protocol
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          Raw Material, Metrology & Rub-Test Verification
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm xl:text-[15px] 2xl:text-base font-semibold transition-colors py-1 relative hover:text-brand-orange whitespace-nowrap ${
                  isActive ? 'text-brand-orange font-bold' : 'text-slate-700'
                }`
              }
            >
              Contact
            </NavLink>
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

      {/* Mobile Drawer Menu with Accordion Dropdowns */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-slate-200 shadow-xl px-5 py-5 transition-all max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-1">
            {/* Home */}
            <NavLink
              to="/"
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `text-sm font-semibold py-2.5 px-3 rounded-md transition-colors ${
                  isActive ? 'bg-orange-50 text-brand-orange font-bold' : 'text-slate-800 hover:text-brand-orange hover:bg-slate-50'
                }`
              }
            >
              Home
            </NavLink>

            {/* About */}
            <NavLink
              to="/about"
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `text-sm font-semibold py-2.5 px-3 rounded-md transition-colors ${
                  isActive ? 'bg-orange-50 text-brand-orange font-bold' : 'text-slate-800 hover:text-brand-orange hover:bg-slate-50'
                }`
              }
            >
              About
            </NavLink>

            {/* Products (Mobile Accordion) */}
            <div>
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between text-sm font-semibold py-2.5 px-3 rounded-md text-slate-800 hover:text-brand-orange hover:bg-slate-50 transition-colors"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180 text-brand-orange' : 'text-slate-400'}`} />
              </button>

              {mobileProductsOpen && (
                <div className="pl-4 pr-2 py-2 space-y-3 bg-slate-50 rounded-lg my-1">
                  {PRODUCT_MENU_CATEGORIES.map((cat) => (
                    <div key={cat.title}>
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider block mb-1">
                        {cat.title}
                      </span>
                      <div className="space-y-1">
                        {cat.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.url}
                            onClick={closeAllMenus}
                            className="text-xs text-slate-700 hover:text-brand-orange font-medium block py-1"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-slate-200 flex flex-col gap-1.5">
                    <Link
                      to="/products"
                      onClick={closeAllMenus}
                      className="text-xs font-bold text-brand-orange flex items-center gap-1"
                    >
                      <span>View All Products</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <a
                      href={CATALOGUE_DOWNLOAD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      onClick={closeAllMenus}
                      className="text-xs font-semibold text-slate-600 hover:text-brand-orange flex items-center gap-1"
                    >
                      <FileDown className="w-3 h-3 text-brand-orange" />
                      <span>Download Catalogue (PDF)</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Materials */}
            <NavLink
              to="/materials"
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `text-sm font-semibold py-2.5 px-3 rounded-md transition-colors ${
                  isActive ? 'bg-orange-50 text-brand-orange font-bold' : 'text-slate-800 hover:text-brand-orange hover:bg-slate-50'
                }`
              }
            >
              Materials
            </NavLink>

            {/* Industries */}
            <NavLink
              to="/industries"
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `text-sm font-semibold py-2.5 px-3 rounded-md transition-colors ${
                  isActive ? 'bg-orange-50 text-brand-orange font-bold' : 'text-slate-800 hover:text-brand-orange hover:bg-slate-50'
                }`
              }
            >
              Industries
            </NavLink>

            {/* Certification (Mobile Accordion) */}
            <div>
              <button
                type="button"
                onClick={() => setMobileCertOpen(!mobileCertOpen)}
                className="w-full flex items-center justify-between text-sm font-semibold py-2.5 px-3 rounded-md text-slate-800 hover:text-brand-orange hover:bg-slate-50 transition-colors"
              >
                <span>Certification</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCertOpen ? 'rotate-180 text-brand-orange' : 'text-slate-400'}`} />
              </button>

              {mobileCertOpen && (
                <div className="pl-4 pr-2 py-2 space-y-2 bg-slate-50 rounded-lg my-1">
                  <a
                    href="/certificates/udyam-certificate.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeAllMenus}
                    className="text-xs text-slate-800 hover:text-brand-orange font-medium flex items-center justify-between py-1"
                  >
                    <span>Udyam Registration Certificate</span>
                    <ExternalLink className="w-3 h-3 text-brand-orange" />
                  </a>
                  <Link
                    to="/certificate"
                    onClick={closeAllMenus}
                    className="text-xs text-slate-800 hover:text-brand-orange font-medium block py-1"
                  >
                    ISO 9001:2015 Quality Compliance
                  </Link>
                  <Link
                    to="/certificate"
                    onClick={closeAllMenus}
                    className="text-xs text-slate-800 hover:text-brand-orange font-medium block py-1"
                  >
                    4-Stage Quality Protocol Overview
                  </Link>
                </div>
              )}
            </div>

            {/* Contact */}
            <NavLink
              to="/contact"
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `text-sm font-semibold py-2.5 px-3 rounded-md transition-colors ${
                  isActive ? 'bg-orange-50 text-brand-orange font-bold' : 'text-slate-800 hover:text-brand-orange hover:bg-slate-50'
                }`
              }
            >
              Contact
            </NavLink>

            {/* Bottom Actions */}
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  closeAllMenus();
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 bg-brand-orange text-white font-bold py-2.5 px-4 rounded-md shadow-sm cursor-pointer text-sm"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex justify-between items-center text-xs text-slate-500 pt-1">
                <a href={`tel:${COMPANY_CONTACT.primaryPhoneRaw}`} className="flex items-center gap-1 hover:text-brand-orange">
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{COMPANY_CONTACT.primaryPhone}</span>
                </a>
                <a href={COMPANY_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-emerald-600 font-semibold">
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
