// src/Pages/Home.jsx

import React from 'react'
import { useOutletContext } from 'react-router-dom'; // 👈 1. Hook Import करें!

// Home Page Sections
import HeroSection from '../Components/HeroSection'
import FeaturesSection from '../Components/FeaturesSection'
import CtaSection from '../Components/CtaSection'
// import MegaMenuContent from '../Components/MegaMenu' // MegaMenuContent होम में रेंडर नहीं होता
import CategoryShowcase from '../Components/CategoryShowcase'
import TestimonialsSection from '../Components/TestimonialsSection'
import SocialFeedSection from '../Components/SocialFeedSection'
import TrustLogosSection from '../Components/TrustLogosSection'
import ProductSliderSection from '../Components/ProductSliderSection' // ध्यान दें कि इसे एक बार ही इम्पोर्ट करना है
import FlowerSeedsSlider from '../Components/FlowerSeedsSlider';

const Home = () => {

  // 2. AppLayout से onAddToCart फ़ंक्शन को एक्सेस करें
  const { onAddToCart } = useOutletContext();

  // Header और SubHeaderNav की वजह से ऊपर की पैडिंग यहाँ नहीं, बल्कि AppLayout या CSS में होनी चाहिए।

  return (
    <div>
      {/* Note: यहाँ मैंने कुछ Sections का क्रम बदला है जो सामान्यतः बेहतर होता है */}
      <HeroSection />
      <TrustLogosSection /> {/* Hero के तुरंत बाद Trust दिखाना अच्छा है */}

      {/* 3. ProductSliderSection में onAddToCart फ़ंक्शन को पास करें */}
      <ProductSliderSection onAddToCart={onAddToCart} />

      <FlowerSeedsSlider onAddToCart={onAddToCart} />            <FeaturesSection />
      <CategoryShowcase />
      <CtaSection />
      {/* Note: MegaMenuContent सीधे Home में नहीं, बल्कि Header या AppLayout में इस्तेमाल होता है। */}
    </div>
  )
}

export default Home