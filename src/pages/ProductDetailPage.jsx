import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Check,
  ArrowRight,
  FileDown,
  Phone,
  Mail,
  ChevronRight,
  Layers,
  Sparkles,
  ExternalLink,
  Clock,
  Wrench,
  CheckCircle2,
} from 'lucide-react';
import {
  PRODUCTS,
  MATERIALS,
  CATALOGUE_DOWNLOAD_URL,
  COMPANY_CONTACT,
  getProductBySlug,
} from '../data/productData';

export default function ProductDetailPage({ onOpenQuote, onSelectImage }) {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find product using robust helper matching slug, id, or legacy aliases
  const product = getProductBySlug(slug);

  // Dynamic SEO Title, Meta Description, Canonical Link & Schema.org JSON-LD
  useEffect(() => {
    if (product) {
      document.title = product.metaTitle;

      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', product.metaDescription);

      // Update canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', product.canonicalUrl);

      // Inject Schema.org JSON-LD
      const schemaScriptId = 'product-schema-jsonld';
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
        name: product.title,
        description: product.description,
        image: `https://rameshwarindustries.com${product.image}`,
        sku: product.number,
        category: product.category,
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
        material: product.materials.join(', '),
      };
      script.text = JSON.stringify(schemaData);
    }

    return () => {
      document.title = 'Rameshwar Industries | Industrial Name Plates & Marking Solutions';
      const existingScript = document.getElementById('product-schema-jsonld');
      if (existingScript) existingScript.remove();
    };
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-slate-50 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Product Not Found</h1>
        <p className="text-slate-500 mb-6 max-w-md font-medium text-sm">
          The requested product specification could not be located in our catalogue directory.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-brand-orange text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-brand-orange-dark transition-colors"
        >
          <span>Browse All Catalogue Products</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  // Related products from the same category or overall catalogue
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);
  const fallbackRelated = relatedProducts.length >= 3 
    ? relatedProducts 
    : [...relatedProducts, ...PRODUCTS.filter(p => p.id !== product.id && !relatedProducts.some(r => r.id === p.id))].slice(0, 3);

  // Materials available for this product
  const productMaterials = MATERIALS.filter((m) =>
    product.materials.some((pm) => m.name.toLowerCase().includes(pm.toLowerCase()))
  );

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Structured Breadcrumbs & Status Bar */}
      <div className="bg-industrial-950 text-slate-300 border-b border-slate-800 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-medium">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-brand-orange font-semibold truncate max-w-[200px] sm:max-w-none">
              {product.title}
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/40 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Direct OEM Manufacturing
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400 font-medium text-[11px]">Spec #{product.number}</span>
          </div>
        </div>
      </div>

      {/* Main Product Hero & Overview */}
      <section className="py-10 md:py-14 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* Left Column: High-Res Specimen Image */}
            <div className="lg:col-span-5 space-y-4">
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md group cursor-pointer"
                onClick={() => onSelectImage(product.image, product.title)}
              >
                <img
                  src={product.image}
                  alt={`${product.title} Manufacturer in India`}
                  className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-industrial-950/85 backdrop-blur-sm text-white text-[11px] font-medium px-3 py-1 rounded-md border border-white/10 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                  <span>ISO 9001:2015 Verified</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                  <span>Enlarge Specimen</span>
                  <ExternalLink className="w-3.5 h-3.5 text-brand-orange" />
                </div>
              </div>

              {/* Quick Catalogue Download Card */}
              <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange text-white flex items-center justify-center shrink-0">
                    <FileDown className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      Official Product Catalogue PDF
                    </h4>
                    <p className="text-[11px] font-medium text-slate-600 mt-0.5">
                      {product.catalogueRef}
                    </p>
                  </div>
                </div>
                <a
                  href={CATALOGUE_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white hover:bg-industrial-950 text-slate-900 hover:text-white border border-slate-300 hover:border-industrial-950 px-3.5 py-2 rounded-lg transition-colors shrink-0 shadow-2xs"
                >
                  <span>Download</span>
                  <FileDown className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Title, Category, Lead Time, Overview & Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium uppercase tracking-wider mb-3 border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-brand-orange" />
                  <span>{product.category}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-industrial-950 tracking-tight leading-tight">
                  {product.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-normal mt-3 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Extended Technical Overview */}
              <div className="p-5 rounded-xl bg-white border border-slate-200">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Technical Overview & Fabrication Details
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {product.overview}
                </p>
              </div>

              {/* Quick Spec Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[11px] font-medium text-slate-500 block uppercase">Substrates</span>
                  <span className="text-xs font-bold text-slate-800 truncate block mt-0.5">
                    {product.materials.join(', ')}
                  </span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[11px] font-medium text-slate-500 block uppercase">Mounting</span>
                  <span className="text-xs font-bold text-slate-800 truncate block mt-0.5">
                    {product.mounting.join(', ')}
                  </span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-medium text-slate-500 block uppercase">OEM Lead Time</span>
                  <span className="text-xs font-bold text-emerald-600 block mt-0.5">
                    {product.leadTime}
                  </span>
                </div>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onOpenQuote(product.title)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <span>Request Custom OEM Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(`Hi, I am interested in ${product.title} from Rameshwar Industries. Please share pricing and technical details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Detailed Specifications & Quality Standards */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-8 space-y-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Full Specifications Table */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-100">
              <Wrench className="w-5 h-5 text-brand-orange" />
              <h2 className="text-lg sm:text-xl font-bold text-industrial-950">
                Technical Specifications & Engineering Matrix
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-medium text-slate-500 w-1/3">Supported Materials</td>
                    <td className="py-3 px-3 text-slate-900 font-semibold">{product.specifications.materials}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-medium text-slate-500">Marking & Engraving</td>
                    <td className="py-3 px-3 text-slate-800">{product.specifications.markingMethods}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-medium text-slate-500">Thickness Tolerance</td>
                    <td className="py-3 px-3 text-slate-800">{product.specifications.thicknessRange}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-medium text-slate-500">Operating Temperature</td>
                    <td className="py-3 px-3 text-slate-800">{product.specifications.temperatureRating}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-medium text-slate-500">Mounting Configuration</td>
                    <td className="py-3 px-3 text-slate-800">{product.specifications.mounting}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-medium text-slate-500">Surface Finish</td>
                    <td className="py-3 px-3 text-slate-800">{product.specifications.surfaceFinish}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-medium text-slate-500">Chemical Resistance</td>
                    <td className="py-3 px-3 text-slate-800">{product.specifications.chemicalResistance}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-medium text-slate-500">Standards & Quality</td>
                    <td className="py-3 px-3 text-slate-800">{product.specifications.standardsCompliance}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Industrial Applications List */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <Layers className="w-5 h-5 text-brand-orange" />
              <h3 className="text-base sm:text-lg font-bold text-industrial-950">
                Primary Applications
              </h3>
            </div>

            <ul className="space-y-3">
              {product.applications.map((app, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span className="leading-snug font-normal">{app}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-slate-900 text-white mt-6 space-y-3">
              <span className="text-[11px] font-semibold text-brand-orange uppercase tracking-wider block">
                FACTORY DIRECT INQUIRY
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Need customized dimensions, CAD profile milling, or serialized barcoding?
              </p>
              <button
                type="button"
                onClick={() => onOpenQuote(`${product.title} Custom Inquiry`)}
                className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold text-xs py-2.5 px-4 rounded-lg transition-colors cursor-pointer"
              >
                Send Technical Drawing
              </button>
            </div>
          </div>

        </div>

        {/* Fully Clickable Compatible Materials Section */}
        {productMaterials.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-industrial-950">
                  Compatible Metallurgy & Substrates
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                  Every substrate below is verified for this product. Click any material card or grade to view detailed metallurgy specifications.
                </p>
              </div>

              <Link
                to="/materials"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange hover:underline shrink-0"
              >
                <span>View All Materials Matrix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {productMaterials.map((mat) => (
                <div
                  key={mat.id}
                  className="p-5 rounded-xl border border-slate-200 hover:border-brand-orange/60 bg-white hover:bg-slate-50/50 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top clickable block */}
                    <Link
                      to={mat.seoUrl}
                      className="flex items-start gap-3.5 mb-3"
                    >
                      <img
                        src={mat.image}
                        alt={mat.name}
                        className="w-14 h-14 rounded-lg object-cover border border-slate-200 shrink-0 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="font-bold text-sm text-slate-900 group-hover:text-brand-orange transition-colors truncate">
                            {mat.name}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all shrink-0" />
                        </div>
                        <span className="text-[11px] text-brand-orange font-semibold block mt-0.5">
                          {mat.badge}
                        </span>
                        <p className="text-[11px] text-slate-500 font-normal line-clamp-1 mt-0.5">
                          {mat.headline}
                        </p>
                      </div>
                    </Link>

                    {/* Clickable Grade Badges */}
                    {mat.gradesList && mat.gradesList.length > 0 && (
                      <div className="pt-2.5 border-t border-slate-100 space-y-1.5">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
                          Verified Grades (Click to Inspect):
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {mat.gradesList.map((g) => (
                            <Link
                              key={g.code}
                              to={`${mat.seoUrl}?grade=${encodeURIComponent(g.code)}`}
                              className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 hover:bg-brand-orange hover:text-white text-slate-700 transition-colors border border-slate-200/60"
                              title={`${g.code}: ${g.desc}`}
                            >
                              {g.code}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-500 font-medium">Temp: {mat.specs?.tempRating?.split(' ')[0] || 'Standard'}</span>
                    <Link
                      to={mat.seoUrl}
                      className="font-semibold text-brand-orange hover:underline inline-flex items-center gap-1"
                    >
                      <span>Metallurgy Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Catalogue Products */}
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-industrial-950">
                Related Industrial Plate Solutions
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                Explore complementary plates and labels from the Rameshwar Industries catalogue.
              </p>
            </div>
            <Link
              to="/products"
              className="text-xs sm:text-sm font-semibold text-brand-orange hover:underline hidden sm:inline-flex items-center gap-1"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fallbackRelated.map((rel) => (
              <div
                key={rel.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-brand-orange/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <Link to={rel.seoUrl} className="relative aspect-[16/10] bg-white p-2 overflow-hidden block border-b border-slate-100">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-industrial-950/80 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded border border-white/10">
                      #{rel.number}
                    </div>
                  </Link>

                  <div className="p-5">
                    <span className="text-[11px] text-brand-orange font-semibold uppercase tracking-wider block mb-1">
                      {rel.category}
                    </span>
                    <Link to={rel.seoUrl}>
                      <h4 className="font-bold text-base text-slate-900 group-hover:text-brand-orange transition-colors">
                        {rel.title}
                      </h4>
                    </Link>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 font-normal leading-relaxed">
                      {rel.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                    <span className="text-slate-400">{rel.leadTime}</span>
                    <Link
                      to={rel.seoUrl}
                      className="inline-flex items-center gap-1 text-brand-orange font-semibold hover:underline"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}
