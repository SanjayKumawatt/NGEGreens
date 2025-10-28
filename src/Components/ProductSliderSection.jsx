// src/components/ProductSliderSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard'; 
import img1 from "../assets/vegitableseeds/img1.avif";
import img2 from "../assets/vegitableseeds/img2.avif";
import img3 from "../assets/vegitableseeds/img3.avif";
import img4 from "../assets/vegitableseeds/img4.avif";
import img5 from "../assets/vegitableseeds/img5.avif";
import img6 from "../assets/vegitableseeds/img6.avif";
import img7 from "../assets/vegitableseeds/img7.avif";
import img8 from "../assets/vegitableseeds/img8.avif";



// DUMMY DATA (Slider Products Array)
export const sliderProducts = [
  { id: 101, name: 'Organic (Desi) Coriander Seeds', price: 59, oldPrice: 89, discount: '33% OFF', rating: 5, reviews: 0, soldBy: 'PlantSouk', imageUrl:img1 },
  { id: 102, name: 'Organic (Desi) Tomato Seeds', price: 59, oldPrice: 120, discount: '50% OFF', rating: 4, reviews: 0, soldBy: 'PlantSouk' , imageUrl:img2},
  { id: 103, name: 'Organic (Desi) Cucumber/Kheera...', price: 59, oldPrice: 150, discount: '60% OFF', rating: 5, reviews: 0, soldBy: 'PlantSouk' , imageUrl:img3},
  { id: 104, name: 'Organic (Desi) Tora/Ridge Gourd Seeds', price: 59, oldPrice: 99, discount: '40% OFF', rating: 4, reviews: 0, soldBy: 'PlantSouk', imageUrl:img4 },
  { id: 105, name: 'Organic (Desi) Capsicum (Red) Seeds', price: 59, oldPrice: 150, discount: '60% OFF', rating: 5, reviews: 0, soldBy: 'PlantSouk', imageUrl:img5 },
  { id: 106, name: 'Organic (Desi) Bhindi/Lady Finger Seeds', price: 59, oldPrice: 99, discount: '40% OFF', rating: 4, reviews: 0, soldBy: 'PlantSouk', imageUrl:img6 },
  { id: 107, name: 'Organic (Desi) Green Spinach Seeds', price: 59, oldPrice: 140, discount: '57% OFF', rating: 5, reviews: 0, soldBy: 'PlantSouk', imageUrl:img7 },
  { id: 108, name: 'Organic (Desi) Peas Seeds', price: 59, oldPrice: 99, discount: '40% OFF', rating: 4, reviews: 0, soldBy: 'PlantSouk' , imageUrl:img8},
];


const ProductSliderSection = ({ onAddToCart }) => { 
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Buy Vegetable Seeds Online at Best Price in India
          </h2>
          <p className="text-sm text-gray-600">
            We believe that growing your own vegetables is more than just a hobby—it's a lifestyle.
          </p>
          <Link to="/about" className="text-sm font-medium text-green-600 hover:text-green-700 mt-1 inline-block">
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
          {sliderProducts.map((product) => (
            <div 
              key={product.id} 
              className="flex-shrink-0 w-64 snap-start"
            >
              {/* onAddToCart prop को ProductCard में पास किया गया */}
              <ProductCard product={product} onAddToCart={onAddToCart} /> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSliderSection;