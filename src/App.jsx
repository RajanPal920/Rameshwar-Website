import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

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

// Scroll to Top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
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
