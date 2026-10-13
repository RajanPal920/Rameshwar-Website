import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Check,
  ArrowRight,
  FileDown,
  Phone,
  Layers,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Wrench,
  CheckCircle2,
  Cpu,
  Flame,
  Award,
} from 'lucide-react';
import {
  MATERIALS,
  PRODUCTS,
  CATALOGUE_DOWNLOAD_URL,
  COMPANY_CONTACT,
  getMaterialBySlug,
} from '../data/productData';

export default function MaterialDetailPage({ onOpenQuote, onSelectImage }) {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Find material by slug, id or alias
  const material = getMaterialBySlug(slug);

  // Dynamic SEO Title, Meta Description, Canonical Link & Structured Data
  useEffect(() => {
    if (material) {
      document.title = material.metaTitle;

      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', material.metaDescription);

      // Update canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', material.canonicalUrl);

      // Inject Schema.org JSON-LD
      const schemaScriptId = 'material-schema-jsonld';
      let script = document.getElementById(schemaScriptId);
      if (!script) {
        script = document.createElement('script');
        script.id = schemaScriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: `${material.name} Industrial Nameplates & Labels`,
        description: material.description,
        image: `https://rameshwarindustries.com${material.image}`,
        brand: {
          '@type': 'Brand',
          name: 'Rameshwar Industries',
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'Rameshwar Industries',
          url: 'https://rameshwarindustries.com',
          telephone: COMPANY_CONTACT.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: COMPANY_CONTACT.worksAddress,
            addressLocality: 'Bhiwandi, Thane, Mumbai',
            addressCountry: 'IN',
          },
        },
        material: material.grades,
      };
      script.text = JSON.stringify(schemaData);
    }

    return () => {
      document.title = 'Rameshwar Industries | Industrial Name Plates & Marking Solutions';
      const existingScript = document.getElementById('material-schema-jsonld');
      if (existingScript) existingScript.remove();
    };
  }, [material]);

  if (!material) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-slate-50 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Material Substrate Not Found</h1>
        <p className="text-slate-500 mb-6 max-w-md font-normal text-sm">
          The requested metallurgical substrate could not be located in our technical matrix.
        </p>
        <Link
          to="/materials"
          className="inline-flex items-center gap-2 bg-brand-orange text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-brand-orange-dark transition-colors"
        >
          <span>View All Materials Matrix</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  // Compatible catalogue products for this material
  const compatibleProducts = PRODUCTS.filter((p) => {
    const directMatch = p.materials.some((m) =>
      material.name.toLowerCase().includes(m.toLowerCase()) || m.toLowerCase().includes(material.name.toLowerCase())
    );
    const slugMatch = material.applicableProductSlugs && (
      material.applicableProductSlugs.includes(p.slug) ||
      material.applicableProductSlugs.includes(p.id)
    );
    return directMatch || slugMatch;
  });

  // Other 5 materials
  const otherMaterials = MATERIALS.filter((m) => m.id !== material.id);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="bg-industrial-950 text-slate-300 border-b border-slate-800 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-medium">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/materials" className="hover:text-white transition-colors">Materials Matrix</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-brand-orange font-semibold truncate max-w-[200px] sm:max-w-none">
              {material.name}
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/40 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Verified Alloy Stock
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400 text-[11px]">Substrate Code: {material.id.toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* Main Material Overview Section */}
      <section className="py-10 md:py-14 lg:py-8 border-b border-slate-200 bg-white lg:min-h-[calc(100svh-var(--navbar-height)-45px)] lg:flex lg:items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* Left Column: Material Specimen Image */}
            <div className="lg:col-span-5 space-y-4">
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] group cursor-pointer flex items-center justify-center p-6 sm:p-8"
                onClick={() => onSelectImage(material.image, `${material.name} Substrate Sample`)}
              >
                <img
                  src={material.image}
                  alt={`${material.name} Industrial Name Plate Substrate`}
                  className="w-full h-full object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs text-industrial-950 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-slate-200/60 shadow-2xs flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{material.badge || 'OEM Grade Verified'}</span>
                </div>
                <div className="absolute bottom-3.5 right-3.5 bg-industrial-950/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                  <span>Enlarge Specimen</span>
                  <ExternalLink className="w-3.5 h-3.5 text-brand-orange" />
                </div>
              </div>

              {/* Download Metallurgy PDF Bar */}
              <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange text-white flex items-center justify-center shrink-0">
                    <FileDown className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      Metallurgical Catalogue (PDF)
                    </h4>
                    <p className="text-[11px] font-medium text-slate-600 mt-0.5">
                      Full chemical composition & etching specs
                    </p>
                  </div>
                </div>
                <a
                  href={CATALOGUE_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white hover:bg-industrial-950 text-slate-900 hover:text-white border border-slate-300 hover:border-industrial-950 px-3.5 py-2 rounded-lg transition-colors shrink-0 shadow-2xs"
                >
                  <span>View PDF</span>
                  <FileDown className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Title, Headline, Description, Quick Badges & Inquiry */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium uppercase tracking-wider mb-3 border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-brand-orange" />
                  <span>Industrial Metallurgical Substrate</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-industrial-950 tracking-tight leading-tight">
                  {material.name} Name Plates & Identification Tags
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-normal mt-3 leading-relaxed">
                  {material.headline}
                </p>
              </div>

              {/* Extended Overview */}
              <div className="p-5 rounded-xl bg-white border border-slate-200">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Chemical & Physical Characteristics
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {material.detailedOverview || material.description}
                </p>
              </div>

              {/* Quick Spec Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[11px] font-medium text-slate-500 block uppercase">Operating Temp</span>
                  <span className="text-xs font-bold text-slate-800 truncate block mt-0.5">
                    {material.specs?.tempRating || 'Standard'}
                  </span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[11px] font-medium text-slate-500 block uppercase">Tensile Strength</span>
                  <span className="text-xs font-bold text-slate-800 truncate block mt-0.5">
                    {material.specs?.tensileStrength || 'Verified'}
                  </span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-medium text-slate-500 block uppercase">Density</span>
                  <span className="text-xs font-bold text-emerald-600 block mt-0.5">
                    {material.specs?.density || 'Verified'}
                  </span>
                </div>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <Link
                  to={`/contact?material=${encodeURIComponent(material.name)}`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <span>Request Quote for {material.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(`Hi, I am inquiring about ${material.name} industrial name plates from Rameshwar Industries.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Technical Desk</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Metallurgical Specifications Matrix */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-8 space-y-12">

        {/* Detailed Metallurgical Specifications Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-100">
              <Wrench className="w-5 h-5 text-brand-orange" />
              <h2 className="text-lg sm:text-xl font-bold text-industrial-950">
                Technical Metallurgical Data & Tolerances
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-medium text-slate-500 w-1/3">Alloy Density</td>
                    <td className="py-3 px-3 text-slate-900 font-semibold">{material.specs?.density || 'Verified in lab'}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-medium text-slate-500">Operating Temperature</td>
                    <td className="py-3 px-3 text-slate-800">{material.specs?.tempRating || 'High Temperature Rated'}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-medium text-slate-500">Tensile Strength</td>
                    <td className="py-3 px-3 text-slate-800">{material.specs?.tensileStrength || 'Commercial Spec'}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-medium text-slate-500">Corrosion Resistance</td>
                    <td className="py-3 px-3 text-slate-800">{material.specs?.corrosionResistance || 'Atmospheric & Industrial'}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-medium text-slate-500">Available Thicknesses</td>
                    <td className="py-3 px-3 text-slate-800">{material.specs?.thicknessRange || '0.5 mm to 3.0 mm'}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-medium text-slate-500">Marking & Etching Methods</td>
                    <td className="py-3 px-3 text-slate-800">{material.specs?.markingMethods || 'Chemical Etch, Laser, Dot Peen'}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-medium text-slate-500">Surface Finishes Available</td>
                    <td className="py-3 px-3 text-slate-800">{material.specs?.surfaceFinishes || 'Satin Brushed, Mirror, Matte'}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-medium text-slate-500">Manufacturing Alloys & Grades</td>
                    <td className="py-3 px-3 text-slate-900 font-semibold">{material.grades}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-medium text-slate-500">Quality & Standards</td>
                    <td className="py-3 px-3 text-slate-800">{material.specs?.standardsCompliance || 'ISO 9001:2015'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Key Features & Engineering Benefits */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <Layers className="w-5 h-5 text-brand-orange" />
              <h3 className="text-base sm:text-lg font-bold text-industrial-950">
                Engineering Benefits
              </h3>
            </div>

            <ul className="space-y-3">
              {material.features?.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span className="leading-snug font-normal">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-slate-900 text-white mt-6 space-y-3">
              <span className="text-[11px] font-semibold text-brand-orange uppercase tracking-wider block">
                COMPATIBILITY CONFIRMATION
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Need to confirm chemical exposure compatibility (acids, salt spray, chlorine, caustic wash)? Contact our engineering desk.
              </p>
              <Link
                to={`/contact?material=${encodeURIComponent(material.name)}`}
                className="w-full inline-flex items-center justify-center gap-1.5 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold text-xs py-2.5 px-4 rounded-lg transition-colors cursor-pointer"
              >
                <span>Inquire Technical Suitability</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Compatible Catalogue Products Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-orange-100 text-brand-orange text-xs font-semibold uppercase mb-1">
                <span>CATALOGUE PRODUCT APPLICATION</span>
              </div>
              <h3 className="text-xl font-bold text-industrial-950">
                Products Manufactured in {material.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-normal">
                All catalogue products below are verified for fabrication in {material.name}.
              </p>
            </div>

            <Link
              to="/products"
              className="text-xs sm:text-sm font-semibold text-brand-orange hover:text-brand-orange-dark inline-flex items-center gap-1 shrink-0 transition-colors"
            >
              <span>View All {PRODUCTS.length} Catalogue Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {compatibleProducts.map((prod) => (
              <div
                key={prod.id}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <Link
                    to={prod.seoUrl}
                    className="block relative aspect-[16/11] rounded-t-2xl overflow-hidden bg-slate-50/70 p-4 sm:p-5 border-b border-slate-100/90 flex items-center justify-center cursor-pointer"
                  >
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-industrial-950 text-[11px] font-semibold px-2.5 py-0.5 rounded-md shadow-2xs border border-slate-200/60">
                      #{prod.number}
                    </div>
                  </Link>

                  <div className="p-5 sm:p-6">
                    <span className="text-[11px] text-brand-orange font-semibold uppercase tracking-wider block mb-1.5">
                      {prod.category}
                    </span>
                    <Link to={prod.seoUrl} className="block group-hover:text-brand-orange transition-colors">
                      <h4 className="font-bold text-base sm:text-[17px] text-industrial-950 group-hover:text-brand-orange transition-colors leading-snug">
                        {prod.title}
                      </h4>
                    </Link>
                    <p className="text-xs sm:text-[13px] text-slate-600 mt-2 line-clamp-2 font-normal leading-relaxed">
                      {prod.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100/80 flex items-center justify-between text-xs font-medium">
                  <span className="text-slate-500 font-normal">Lead: {prod.leadTime}</span>
                  <Link
                    to={prod.seoUrl}
                    className="font-semibold text-brand-orange hover:text-brand-orange-dark inline-flex items-center gap-1 transition-colors group/link"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Switch to Other 5 Materials */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-bold text-industrial-950">
                Explore Other Metallurgical Substrates
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-normal">
                Compare other verified metals and industrial PVC materials supported by our works.
              </p>
            </div>
            <Link
              to="/materials"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange hover:underline"
            >
              <span>Substrate Selection Matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {otherMaterials.map((mat) => (
              <Link
                key={mat.id}
                to={mat.seoUrl}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="relative aspect-[16/11] rounded-t-2xl overflow-hidden bg-slate-50/70 p-3 border-b border-slate-100/90 flex items-center justify-center">
                    <img
                      src={mat.image}
                      alt={mat.name}
                      className="w-full h-full object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-brand-orange transition-colors leading-snug">
                      {mat.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 font-normal leading-relaxed">
                      {mat.headline}
                    </p>
                  </div>
                </div>
                <div className="px-4 pb-4 pt-2 border-t border-slate-100/80 flex items-center justify-between text-[11px] font-semibold text-brand-orange">
                  <span>View Substrate</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
