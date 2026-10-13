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
import { PRODUCTS, MATERIALS, CATALOGUE_DOWNLOAD_URL, COMPANY_CONTACT } from '../data/productData';

// Organized categories for the Products mega menu matching the 5 Catalogue Groups
const PRODUCT_MENU_CATEGORIES = [
  {
    title: "Metal Industrial Plates",
    subtitle: "Machinery, Motors & Valves",
    icon: Settings2,
    items: [
      { name: "Machine Name Plates", url: "/name-plate-manufacturer-in-mumbai" },
      { name: "Motor Rating Plates", url: "/motor-rating-plates-manufacturer-in-india" },
      { name: "Valve Body & Trim Plates", url: "/valve-body-trim-plates-manufacturing-in-mumbai" },
      { name: "Equipment Data Plates", url: "/equipment-data-plates-supplier-in-mumbai" },
      { name: "Model & Serial Number Plates", url: "/serial-number-name-plates-manufacturer-in-mumbai" }
    ]
  },
  {
    title: "Aluminium & Barcode Tags",
    subtitle: "Anodized, VIN & Asset ID",
    icon: Tag,
    items: [
      { name: "Aluminium Name Plates", url: "/aluminium-name-plates-manufacturer-in-india" },
      { name: "Barcode & Asset Tracking Plates", url: "/aluminium-barcode-asset-plates-supplier-in-india" },
      { name: "Automotive & Engine VIN Plates", url: "/automotive-engine-rating-plates-manufacturing-in-mumbai" },
      { name: "Metal Identification Tags", url: "/metal-identification-tags-stockist-in-mumbai" },
      { name: "Metal Identification Rings & Collars", url: "/metal-identification-rings-manufacturer-in-india" }
    ]
  },
  {
    title: "Warning & Safety Plates",
    subtitle: "Danger, High Voltage & OSHA",
    icon: AlertTriangle,
    items: [
      { name: "Warning & Instruction Plates", url: "/warning-plate-manufacturing-in-mumbai" },
      { name: "Caution & Danger Warning Plates", url: "/caution-warning-plates-supplier-in-mumbai" },
      { name: "High-Voltage Warning Plates", url: "/high-voltage-warning-plates-manufacturer-in-mumbai" },
      { name: "Operating Procedure Instructions", url: "/safety-instruction-plates-supplier-in-india" }
    ]
  },
  {
    title: "Schematics & Control Panels",
    subtitle: "Wiring Diagrams & Switches",
    icon: SlidersHorizontal,
    items: [
      { name: "Control Panel Name Plates", url: "/control-panel-name-plates-manufacturing-in-mumbai" },
      { name: "Electrical Schematics & Wiring", url: "/schematic-panel-labels-supplier-in-mumbai" },
      { name: "Emergency Stop Push Button Labels", url: "/emergency-stop-labels-stockist-in-india" },
      { name: "Water Pump ON/OFF Switch Labels", url: "/water-pump-switch-labels-manufacturer-in-mumbai" },
      { name: "Alarm & Time Remaining Labels", url: "/alarm-indicator-labels-supplier-in-mumbai" }
    ]
  }
];

export default function Header({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'products' | 'materials' | 'certification' | null
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileMaterialsOpen, setMobileMaterialsOpen] = useState(false);
  const [mobileCertOpen, setMobileCertOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isCertActive = location.pathname.startsWith('/certificate');
  const isProductsActive = location.pathname.startsWith('/products') || PRODUCT_MENU_CATEGORIES.some(cat => cat.items.some(item => location.pathname === item.url));
  const isMaterialsActive = location.pathname.startsWith('/materials') || MATERIALS.some(m => location.pathname === m.seoUrl);

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

    // Keep --navbar-height accurately synchronized with exact rendered header height
    const updateNavbarHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        if (height > 0) {
          document.documentElement.style.setProperty('--navbar-height', `${height}px`);
        }
      }
    };

    updateNavbarHeight();

    let resizeObserver;
    if (typeof window !== 'undefined' && window.ResizeObserver && headerRef.current) {
      resizeObserver = new ResizeObserver(updateNavbarHeight);
      resizeObserver.observe(headerRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', updateNavbarHeight);

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', updateNavbarHeight);
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
    setMobileMaterialsOpen(false);
    setMobileCertOpen(false);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 transition-all duration-200">
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
        className={`bg-white transition-all duration-200 border-b border-slate-200 ${isScrolled ? 'shadow-md shadow-slate-200/80 bg-white/98 backdrop-blur-md' : 'shadow-xs'
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
              <span className="font-extrabold tracking-tight text-[13px] sm:text-base md:text-lg lg:text-xl xl:text-[26px] font-medium uppercase text-orange-500 whitespace-nowrap leading-tight">
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
                `text-sm xl:text-[15px] font-semibold transition-colors py-1 relative hover:text-brand-orange whitespace-nowrap ${isActive
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
                `text-sm xl:text-[15px] font-semibold transition-colors py-1 relative hover:text-brand-orange whitespace-nowrap ${isActive
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
                className={`inline-flex items-center gap-1.5 text-sm xl:text-[15px] font-semibold transition-colors py-1 relative hover:text-brand-orange whitespace-nowrap ${isProductsActive
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
                        <span className="text-xs font-bold tracking-wider uppercase text-slate-800 whitespace-nowrap">
                          Product Solutions Portfolio
                        </span>
                        <span className="text-[10px] bg-orange-100 text-brand-orange font-bold px-2 py-0.5 rounded whitespace-nowrap">
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
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 whitespace-nowrap">
                                  {cat.title}
                                </h4>
                              </div>
                              <p className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
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
                      <span className="text-slate-300 font-medium text-[11px] whitespace-nowrap">
                        Direct Factory Manufacturer • SS 304/316 • Aluminium • Brass • ISO 9001:2015
                      </span>
                      <a
                        href={CATALOGUE_DOWNLOAD_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeAllMenus}
                        className="inline-flex items-center gap-1.5 bg-brand-orange hover:bg-brand-orange-dark text-white px-3.5 py-1.5 rounded-md font-bold transition-colors shadow-2xs whitespace-nowrap"
                      >
                        <FileDown className="w-3.5 h-3.5" />
                        <span>View Catalogue (PDF)</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Materials (Dropdown Menu) */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('materials')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to="/materials"
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'materials'}
                className={`inline-flex items-center gap-1.5 text-sm xl:text-[15px] font-semibold transition-colors py-1 relative hover:text-brand-orange whitespace-nowrap ${isMaterialsActive
                  ? 'text-brand-orange font-bold after:w-full after:absolute after:-bottom-2.5 after:left-0 after:h-0.5 after:bg-brand-orange'
                  : 'text-slate-800'
                  }`}
              >
                <span>Materials</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'materials' ? 'rotate-180 text-brand-orange' : 'text-slate-400'}`} />
              </NavLink>

              {/* Materials Dropdown Panel - Clean Apple-inspired Menu */}
              {activeDropdown === 'materials' && (
                <div
                  role="region"
                  aria-label="Materials Dropdown Menu"
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[660px] max-w-[96vw] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleMouseEnter('materials')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden ring-1 ring-black/5">
                    {/* Header */}
                    <div className="bg-slate-50/80 px-6 py-3 border-b border-slate-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-brand-orange" />
                        <span className="text-xs font-bold tracking-wider uppercase text-slate-800 whitespace-nowrap">
                          Metallurgical Substrates
                        </span>
                        <span className="text-[10px] bg-orange-100 text-brand-orange font-bold px-2 py-0.5 rounded whitespace-nowrap">
                          6 Factory Alloys
                        </span>
                      </div>
                      <Link
                        to="/materials"
                        onClick={closeAllMenus}
                        className="text-xs font-bold text-brand-orange hover:text-brand-orange-dark flex items-center gap-1 transition-colors group/view whitespace-nowrap"
                      >
                        <span>View All Materials</span>
                        <ArrowRight className="w-3 h-3 group-view:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                    {/* 6 Materials Grid (2 Columns × 3 Rows) */}
                    <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white">
                      {MATERIALS.map((mat) => (
                        <Link
                          key={mat.id}
                          to={mat.seoUrl}
                          onClick={closeAllMenus}
                          className="group/item flex items-center gap-3.5 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/80 transition-all duration-200"
                        >
                          {/* Material Plate Thumbnail */}
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-50 border border-slate-200/80 shrink-0 relative flex items-center justify-center p-1">
                            <img
                              src={mat.image}
                              alt={mat.name}
                              className="w-full h-full object-contain object-center group-hover/item:scale-105 transition-transform duration-300"
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1.5">
                              <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover/item:text-brand-orange transition-colors truncate">
                                {mat.name}
                              </h4>
                              <ArrowRight className="w-3 h-3 text-slate-300 group-hover/item:text-brand-orange group-hover/item:translate-x-0.5 transition-all shrink-0" />
                            </div>
                            <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                              {mat.grades.split(',').slice(0, 2).join(', ')}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Dropdown Footer CTA */}
                    <div className="bg-slate-900 text-white px-6 py-2.5 flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium text-[11px] truncate pr-4">
                        Chemical Acid Etching • Fiber Laser Annealing • ISO 9001:2015
                      </span>
                      <Link
                        to="/materials"
                        onClick={closeAllMenus}
                        className="inline-flex items-center gap-1.5 text-brand-orange hover:text-white font-bold text-xs whitespace-nowrap transition-colors"
                      >
                        <span>Substrate Matrix</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries */}
            <NavLink
              to="/industries"
              className={({ isActive }) =>
                `text-sm xl:text-[15px] font-semibold transition-colors py-1 relative hover:text-brand-orange whitespace-nowrap ${isActive
                  ? 'text-brand-orange font-bold after:w-full after:absolute after:-bottom-2.5 after:left-0 after:h-0.5 after:bg-brand-orange'
                  : 'text-slate-800'
                }`
              }
            >
              Industries
            </NavLink>

            {/* Certificates (Dropdown Trigger) */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('certificates')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'certificates'}
                onClick={() => setActiveDropdown(activeDropdown === 'certificates' ? null : 'certificates')}
                className={`inline-flex items-center gap-1.5 text-sm xl:text-[15px] font-semibold transition-colors py-1 relative hover:text-brand-orange whitespace-nowrap cursor-pointer ${isCertActive
                  ? 'text-brand-orange font-bold after:w-full after:absolute after:-bottom-2.5 after:left-0 after:h-0.5 after:bg-brand-orange'
                  : 'text-slate-800'
                  }`}
              >
                <span>Certificates</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'certificates' ? 'rotate-180 text-brand-orange' : 'text-slate-400'}`} />
              </button>

              {/* Certificates Dropdown Menu */}
              {activeDropdown === 'certificates' && (
                <div
                  role="region"
                  aria-label="Certificates Dropdown Menu"
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[330px] max-w-[94vw] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleMouseEnter('certificates')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100 ring-1 ring-black/5">
                    {/* Header */}
                    <div className="bg-slate-50 px-4 py-2.5 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800">
                        Official Enterprise Documents
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-200">
                        Verified Credentials
                      </span>
                    </div>

                    {/* 1. GST Certificate — Opens in New Tab */}
                    <a
                      href="/certificates/GST-CERTIFICATE.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeAllMenus}
                      className="p-3.5 flex items-start gap-3 hover:bg-orange-50/70 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 group-hover:bg-brand-orange group-hover:text-white text-blue-600 flex items-center justify-center shrink-0 transition-colors">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-slate-900 group-hover:text-brand-orange transition-colors">
                            GST Certificate
                          </h4>
                          <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-brand-orange" />
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          Government of India • Goods and Services Tax Network
                        </p>
                      </div>
                    </a>

                    {/* 2. Udyam Certificate — Opens in New Tab */}
                    <a
                      href="/certificates/Udyam-Certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeAllMenus}
                      className="p-3.5 flex items-start gap-3 hover:bg-orange-50/70 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 group-hover:bg-brand-orange group-hover:text-white text-emerald-600 flex items-center justify-center shrink-0 transition-colors">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-slate-900 group-hover:text-brand-orange transition-colors">
                            Udyam Certificate
                          </h4>
                          <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-brand-orange" />
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          Ministry of Micro, Small & Medium Enterprises (MSME)
                        </p>
                      </div>
                    </a>

                    {/* Quality Overview Status */}
                    <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium text-[11px]">
                        4-Stage QC & Inspection System
                      </span>
                      <span className="text-brand-orange font-bold text-[11px]">
                        ISO 9001:2015 Verified
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm xl:text-[15px] 2xl:text-base font-semibold transition-colors py-1 relative hover:text-brand-orange whitespace-nowrap ${isActive ? 'text-brand-orange font-bold' : 'text-slate-700'
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
                `text-sm font-semibold py-2.5 px-3 rounded-md transition-colors ${isActive ? 'bg-orange-50 text-brand-orange font-bold' : 'text-slate-800 hover:text-brand-orange hover:bg-slate-50'
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
                `text-sm font-semibold py-2.5 px-3 rounded-md transition-colors ${isActive ? 'bg-orange-50 text-brand-orange font-bold' : 'text-slate-800 hover:text-brand-orange hover:bg-slate-50'
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
                      <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-1">
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
                      onClick={closeAllMenus}
                      className="text-xs font-semibold text-slate-600 hover:text-brand-orange flex items-center gap-1"
                    >
                      <FileDown className="w-3 h-3 text-brand-orange" />
                      <span>View Catalogue (PDF)</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Materials (Mobile Accordion) */}
            <div>
              <button
                type="button"
                onClick={() => setMobileMaterialsOpen(!mobileMaterialsOpen)}
                className="w-full flex items-center justify-between text-sm font-semibold py-2.5 px-3 rounded-md text-slate-800 hover:text-brand-orange hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <span className={isMaterialsActive ? 'text-brand-orange font-bold' : ''}>Materials</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileMaterialsOpen ? 'rotate-180 text-brand-orange' : 'text-slate-400'}`} />
              </button>

              {mobileMaterialsOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1.5 bg-slate-50 rounded-lg my-1">
                  {MATERIALS.map((mat) => (
                    <Link
                      key={mat.id}
                      to={mat.seoUrl}
                      onClick={closeAllMenus}
                      className="text-xs text-slate-800 hover:text-brand-orange font-medium flex items-center justify-between py-1.5 px-2 rounded hover:bg-white transition-colors"
                    >
                      <span className="font-semibold">{mat.name}</span>
                      <span className="text-[10px] text-slate-400 truncate max-w-[130px]">{mat.grades.split(',')[0]}</span>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-200">
                    <Link
                      to="/materials"
                      onClick={closeAllMenus}
                      className="text-xs font-bold text-brand-orange flex items-center gap-1 py-1"
                    >
                      <span>View All Materials Matrix</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Industries */}
            <NavLink
              to="/industries"
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `text-sm font-semibold py-2.5 px-3 rounded-md transition-colors ${isActive ? 'bg-orange-50 text-brand-orange font-bold' : 'text-slate-800 hover:text-brand-orange hover:bg-slate-50'
                }`
              }
            >
              Industries
            </NavLink>

            {/* Certificates (Mobile Accordion) */}
            <div>
              <button
                type="button"
                onClick={() => setMobileCertOpen(!mobileCertOpen)}
                className="w-full flex items-center justify-between text-sm font-semibold py-2.5 px-3 rounded-md text-slate-800 hover:text-brand-orange hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <span className={isCertActive ? 'text-brand-orange font-bold' : ''}>Certificates</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCertOpen ? 'rotate-180 text-brand-orange' : 'text-slate-400'}`} />
              </button>

              {mobileCertOpen && (
                <div className="pl-4 pr-2 py-2 space-y-2 bg-slate-50 rounded-lg my-1">
                  <a
                    href="/certificates/GST-CERTIFICATE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeAllMenus}
                    className="text-xs text-slate-800 hover:text-brand-orange font-medium flex items-center justify-between py-1.5 px-2 rounded hover:bg-white transition-colors"
                  >
                    <span className="font-semibold">GST Certificate</span>
                    <ExternalLink className="w-3 h-3 text-brand-orange" />
                  </a>
                  <a
                    href="/certificates/Udyam-Certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeAllMenus}
                    className="text-xs text-slate-800 hover:text-brand-orange font-medium flex items-center justify-between py-1.5 px-2 rounded hover:bg-white transition-colors"
                  >
                    <span className="font-semibold">Udyam Certificate</span>
                    <ExternalLink className="w-3 h-3 text-brand-orange" />
                  </a>
                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] font-semibold text-slate-500 py-1">
                    <span>Quality Assurance:</span>
                    <span className="text-brand-orange font-bold">ISO 9001:2015 Verified</span>
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <NavLink
              to="/contact"
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `text-sm font-semibold py-2.5 px-3 rounded-md transition-colors ${isActive ? 'bg-orange-50 text-brand-orange font-bold' : 'text-slate-800 hover:text-brand-orange hover:bg-slate-50'
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
