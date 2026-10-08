import React from 'react';
import HeroSlider from '../components/HeroSlider';
import MaterialStrip from '../components/MaterialStrip';
import About from '../components/About';
import Products from '../components/Products';
import Industries from '../components/Industries';
import CustomizationGuide from '../components/CustomizationGuide';
import ProductGallery from '../components/ProductGallery';
import WhyChooseUs from '../components/WhyChooseUs';
import GlobalPresence from '../components/GlobalPresence';
import QuoteSection from '../components/QuoteSection';

export default function HomePage({ onOpenQuote, onSelectImage, onSelectProduct }) {
  return (
    <div>
      {/* 1. Full-width Hero Slider */}
      <HeroSlider onOpenQuote={onOpenQuote} />

      {/* 2. Infinite Materials / Capabilities Marquee */}
      <MaterialStrip />

      {/* 3. About Rameshwar Industries */}
      <About onSelectImage={onSelectImage} />

      {/* 4. Our Industrial Plate Solutions */}
      <Products
        onOpenQuote={onOpenQuote}
        onSelectProduct={onSelectProduct}
        onSelectImage={onSelectImage}
      />

      {/* 5. Materials / Manufacturing Capabilities */}
      <CustomizationGuide onOpenQuote={onOpenQuote} />

      {/* 6. Industries We Serve */}
      <Industries
        onOpenQuote={onOpenQuote}
        onSelectImage={onSelectImage}
      />

      {/* 8. Why Choose Rameshwar Industries */}
      <WhyChooseUs />

      {/* 9. Product Gallery */}
      <ProductGallery onSelectImage={onSelectImage} />

      {/* 10. Call-to-Action / Get Quote section */}
      <QuoteSection />

      {/* 11. Countries We Export To */}
      <GlobalPresence />
    </div>
  );
}
