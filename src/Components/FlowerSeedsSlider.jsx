// src/components/FlowerSeedsSlider.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard'; 
// Note: आपको अपनी इमेजेस को भी यहाँ import करना होगा, जैसे आपने vegetable seeds में किया था।
import img1 from "../assets/seasonalseeds/img1.avif";
import img2 from "../assets/seasonalseeds/img2.avif";
import img3 from "../assets/seasonalseeds/img3.avif";
import img4 from "../assets/seasonalseeds/img4.avif";
import img5 from "../assets/seasonalseeds/img5.avif";
import img6 from "../assets/seasonalseeds/img6.avif";


// DUMMY DATA (Flower Seeds Array - Based on your image)
export const flowerSliderProducts = [
  { id: 201, name: 'CHRYSANTHEMUM DOUBLE MIXED FLOWER SEEDS...', price: 45, oldPrice: null, discount: null, rating: 5, soldBy: 'Alkartiy', imageUrl: img1 },
  { id: 202, name: 'Morning Glory Purpel FLOWER SEEDS (Pack of 15-20 Seeds)', price: 94, oldPrice: 150, discount: '37% OFF', rating: 4, soldBy: 'PlantSouk', imageUrl: img2 },
  { id: 203, name: 'MARIGOLD GIANT ORANGE FLOWER SEEDS (PACK OF ...)', price: 45, oldPrice: null, discount: null, rating: 5, soldBy: 'Alkartiy', imageUrl: img3 },
  { id: 204, name: 'NASTURTIUM ALASKA MIXED FLOWER SEEDS...', price: 45, oldPrice: null, discount: null, rating: 4, soldBy: 'Alkartiy', imageUrl: img4 },
  { id: 205, name: 'ASTER PRINCESS MIXED FLOWER SEEDS (PACK OF...)', price: 45, oldPrice: null, discount: null, rating: 5, soldBy: 'Alkartiy', imageUrl: img5 },
  { id: 206, name: 'FRENCH MARIGOLD ORANGE FLOWER SEEDS (PACK OF...)', price: 45, oldPrice: null, discount: null, rating: 4, soldBy: 'Alkartiy', imageUrl: img6 },
  // आप यहाँ और आइटम जोड़ सकते हैं
];


const FlowerSeedsSlider = ({ onAddToCart }) => { 
  return (
    <section className="py-6 sm:py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Seasonal Flower Seeds for a Vibrant Garden
          </h2>
          <p className="text-sm text-gray-600">
            Seeds by season is a practical and effective way to plan your garden throughout the entire year.
          </p>
          <Link to="/shop/flowers" className="text-sm font-medium text-green-600 hover:text-green-700 mt-1 inline-block">
            Read More...
          </Link>
          <hr className="mt-4 border-gray-200" />
        </div>

        {/* Product Slider Container (Horizontal Scrolling) */}
        <div 
          className="flex overflow-x-scroll pb-10 space-x-6 scrollbar-hide snap-x snap-mandatory"
          style={{ 
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none', 
            scrollbarWidth: 'none',  
          }}
        >
          {flowerSliderProducts.map((product) => (
            <div 
              key={product.id} 
              className="flex-shrink-0 w-64 snap-start"
            >
              {/* ProductCard का पुन: उपयोग और onAddToCart फंक्शनैलिटी पास करना */}
              <ProductCard product={product} onAddToCart={onAddToCart} /> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowerSeedsSlider;