import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom';
import { getProductBySlug, getMaterialBySlug } from './data/productData';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

// Modals
import QuoteModal from './components/QuoteModal';
import ImageModal from './components/ImageModal';
import ProductDetailModal from './components/ProductDetailModal';

// Route Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import MaterialsPage from './pages/MaterialsPage';
import IndustriesPage from './pages/IndustriesPage';
import CertificatePage from './pages/CertificatePage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import MaterialDetailPage from './pages/MaterialDetailPage';

// Scroll to Top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// 301 / Client Redirect Handlers for Legacy Product & Material URLs
function ProductRouteRedirect() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  if (product) {
    return <Navigate to={product.seoUrl} replace />;
  }
  const material = getMaterialBySlug(slug);
  if (material) {
    return <Navigate to={material.seoUrl} replace />;
  }
  return <Navigate to="/products" replace />;
}

function MaterialRouteRedirect() {
  const { slug } = useParams();
  const material = getMaterialBySlug(slug);
  if (material) {
    return <Navigate to={material.seoUrl} replace />;
  }
  const product = getProductBySlug(slug);
  if (product) {
    return <Navigate to={product.seoUrl} replace />;
  }
  return <Navigate to="/materials" replace />;
}

// Dynamic SEO Slug Resolver for Root Slugs (e.g. /warning-plate-manufacturing-in-mumbai, /stainless-steel-supplier-in-mumbai)
function DynamicSlugPage({ onOpenQuote, onSelectImage, onSelectProduct }) {
  const { slug } = useParams();

  // 1. Check Product match
  const product = getProductBySlug(slug);
  if (product) {
    // If accessed via an old alias or legacy slug, 301 redirect to canonical SEO URL
    if (slug !== product.slug) {
      return <Navigate to={product.seoUrl} replace />;
    }
    return (
      <ProductDetailPage 
        onOpenQuote={onOpenQuote}
        onSelectImage={onSelectImage}
      />
    );
  }

  // 2. Check Material match
  const material = getMaterialBySlug(slug);
  if (material) {
    // If accessed via an old alias or legacy slug, 301 redirect to canonical SEO URL
    if (slug !== material.slug) {
      return <Navigate to={material.seoUrl} replace />;
    }
    return (
      <MaterialDetailPage 
        onOpenQuote={onOpenQuote}
        onSelectImage={onSelectImage}
      />
    );
  }

  // Fallback to HomePage
  return (
    <HomePage 
      onOpenQuote={onOpenQuote}
      onSelectImage={onSelectImage}
      onSelectProduct={onSelectProduct}
    />
  );
}

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState('');
  
  const [previewImage, setPreviewImage] = useState(null);
  const [previewTitle, setPreviewTitle] = useState('');

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenQuote = (productName = '') => {
    setQuoteProduct(typeof productName === 'string' ? productName : '');
    setIsQuoteOpen(true);
  };

  const handleSelectImage = (imageSrc, title) => {
    setPreviewImage(imageSrc);
    setPreviewTitle(title);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-brand-orange selection:text-white flex flex-col overflow-x-clip">
        {/* Compact Sticky Header & Real Routes */}
        <Header onOpenQuote={() => handleOpenQuote('')} />

        {/* Real React Navigation Routes */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenQuote={handleOpenQuote}
                  onSelectImage={handleSelectImage}
                  onSelectProduct={(prod) => setSelectedProduct(prod)}
                />
              } 
            />
            <Route 
              path="/about" 
              element={
                <AboutPage 
                  onOpenQuote={handleOpenQuote}
                  onSelectImage={handleSelectImage}
                />
              } 
            />
            <Route 
              path="/products" 
              element={
                <ProductsPage 
                  onOpenQuote={handleOpenQuote}
                  onSelectProduct={(prod) => setSelectedProduct(prod)}
                  onSelectImage={handleSelectImage}
                />
              } 
            />
            <Route 
              path="/materials" 
              element={
                <MaterialsPage 
                  onOpenQuote={handleOpenQuote}
                  onSelectImage={handleSelectImage}
                />
              } 
            />
            <Route 
              path="/industries" 
              element={
                <IndustriesPage 
                  onOpenQuote={handleOpenQuote}
                  onSelectImage={handleSelectImage}
                />
              } 
            />
            <Route 
              path="/certificate" 
              element={
                <CertificatePage 
                  onOpenQuote={handleOpenQuote}
                  onSelectImage={handleSelectImage}
                />
              } 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />

            {/* 301 Redirects for Legacy /products/:slug & /materials/:slug URLs */}
            <Route path="/products/:slug" element={<ProductRouteRedirect />} />
            <Route path="/products/:slug/manufacturer-in-india" element={<ProductRouteRedirect />} />
            <Route path="/materials/:slug" element={<MaterialRouteRedirect />} />
            <Route path="/materials/:slug/manufacturer-in-india" element={<MaterialRouteRedirect />} />

            {/* Root Canonical SEO URLs for all 25 Products & 6 Materials */}
            <Route 
              path="/:slug/manufacturer-in-india" 
              element={<ProductRouteRedirect />} 
            />
            <Route 
              path="/:slug" 
              element={
                <DynamicSlugPage 
                  onOpenQuote={handleOpenQuote}
                  onSelectImage={handleSelectImage}
                  onSelectProduct={(prod) => setSelectedProduct(prod)}
                />
              } 
            />

            {/* Catch-all fallback */}
            <Route 
              path="*" 
              element={
                <HomePage 
                  onOpenQuote={handleOpenQuote}
                  onSelectImage={handleSelectImage}
                  onSelectProduct={(prod) => setSelectedProduct(prod)}
                />
              } 
            />
          </Routes>
        </main>

        {/* Dark Footer with Official Logo Card */}
        <Footer />

        {/* Floating WhatsApp and Call Buttons */}
        <FloatingActions />

        {/* Modals */}
        <QuoteModal 
          isOpen={isQuoteOpen}
          selectedProduct={quoteProduct}
          onClose={() => setIsQuoteOpen(false)}
        />

        <ImageModal 
          image={previewImage}
          title={previewTitle}
          onClose={() => setPreviewImage(null)}
          onOpenQuote={handleOpenQuote}
        />

        <ProductDetailModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenQuote={handleOpenQuote}
        />
      </div>
    </BrowserRouter>
  );
}
