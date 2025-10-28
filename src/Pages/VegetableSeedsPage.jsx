// src/Pages/VegetableSeedsPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; 
// Note: आपको अपनी इमेजेस को यहाँ भी import करना होगा, 
// या सुनिश्चित करना होगा कि ProductCard में जो URL आप दे रहे हैं, वह सही है।

import img1 from "../assets/vegitableseeds/img1.avif";
import img2 from "../assets/vegitableseeds/img2.avif";
import img3 from "../assets/vegitableseeds/img3.avif";
import img4 from "../assets/vegitableseeds/img4.avif";
import img5 from "../assets/vegitableseeds/img5.avif";
import img6 from "../assets/vegitableseeds/img6.avif";
import img7 from "../assets/vegitableseeds/img7.avif";
import img8 from "../assets/vegitableseeds/img8.avif";
import img9 from "../assets/vegitableseeds/img9.avif";
import img10 from "../assets/vegitableseeds/img10.avif";
import img11 from "../assets/vegitableseeds/img11.avif";
import img12 from "../assets/vegitableseeds/img12.avif";
import img13 from "../assets/vegitableseeds/img13.avif";
import img14 from "../assets/vegitableseeds/img14.avif";
import img15 from "../assets/vegitableseeds/img15.avif";
import img16 from "../assets/vegitableseeds/img16.avif";



// DUMMY DATA (Vegetable Seeds Array - Based on your image)
export const vegetableProducts = [
  // Row 1
  { id: 111, name: 'Organic (Desi) Coriander Seeds(Pack of - 200 Seeds)', price: 59, oldPrice: 89, discount: '33% OFF', soldBy: 'PlantSouk', imageUrl: img1 },
  { id: 112, name: 'Organic (Desi) Tomato seeds(Pack of - 50 Seeds)', price: 59, oldPrice: 120, discount: '50% OFF', soldBy: 'PlantSouk', imageUrl: img2 },
  { id: 113, name: 'Organic (Desi) Cucumber/Kheera...', price: 59, oldPrice: 150, discount: '60% OFF', soldBy: 'PlantSouk', imageUrl: img3},
  { id: 114, name: 'Organic (Desi) Tora/Ridge Gourd Seeds(Pack Of - 20...)', price: 59, oldPrice: 99, discount: '40% OFF', soldBy: 'PlantSouk', imageUrl: img4 },
  // Row 2
  { id: 115, name: 'Organic (Desi) Capsicum (Red) Seeds(Pack Of - 50 Seeds)', price: 59, oldPrice: 150, discount: '60% OFF', soldBy: 'PlantSouk', imageUrl: img5 },
  { id: 116, name: 'Organic (Desi) Bhindi / Lady Finger Seeds(Pack Of - 40...)', price: 59, oldPrice: 99, discount: '40% OFF', soldBy: 'PlantSouk', imageUrl: img6 },
  { id: 117, name: 'Organic (Desi) Green Spinach Seeds(Pack Of - 2...)', price: 59, oldPrice: 140, discount: '57% OFF', soldBy: 'PlantSouk', imageUrl: img7 },
  { id: 118, name: 'Organic (Desi) Peas Seeds(Pack Of - 30 Seeds)', price: 59, oldPrice: 99, discount: '40% OFF', soldBy: 'PlantSouk', imageUrl: img8 },
  // Row 3
  { id: 119, name: 'Organic (Desi) Bottle Gourd(Lauki) Seeds(Pack Of...)', price: 59, oldPrice: 99, discount: '40% OFF', soldBy: 'PlantSouk', imageUrl: img9 },
  { id: 120, name: 'Organic (Desi) Green Chili Seeds(Pack Of - 30 Seeds)', price: 59, oldPrice: 99, discount: '40% OFF', soldBy: 'PlantSouk', imageUrl: img10 },
  { id: 121, name: 'Organic (Desi) Pumpkin/Kaddu Seeds(Pack Of - 10 Seeds)', price: 59, oldPrice: 150, discount: '73% OFF', soldBy: 'PlantSouk', imageUrl: img11 },
  { id: 122, name: 'Organic (F2 Hybrid) Tomato Seeds(Pack of - 15 Seeds)', price: 59, oldPrice: 129, discount: '60% OFF', soldBy: 'PlantSouk', imageUrl: img12 },
  // Row 4
  { id: 123, name: 'Organic (Desi) Sem Phali/Lima Beans...', price: 59, oldPrice: 99, discount: '40% OFF', soldBy: 'PlantSouk', imageUrl: img13 },
  { id: 124, name: 'Organic (Desi) Banana Pepper(Yellow) Seeds(Pack Of...', price: 59, oldPrice: 99, discount: '40% OFF', soldBy: 'PlantSouk', imageUrl: img14 },
  { id: 125, name: 'Organic (Desi) Karela/Momordica charantia...', price: 59, oldPrice: 99, discount: '40% OFF', soldBy: 'PlantSouk', imageUrl: img15 },
  { id: 126, name: 'Organic (Desi) Karela/Momordica charantia (Pack Of...)', price: 59, oldPrice: 99, discount: '40% OFF', soldBy: 'PlantSouk', imageUrl: img16 },
];


const VegetableSeedsPage = () => {
    // 1. AppLayout से onAddToCart फ़ंक्शन को एक्सेस करें
    const { onAddToCart } = useOutletContext(); 

    // Header/MegaMenu की वजह से Content को नीचे खिसकाने के लिए पैडिंग
    const topPaddingClass = ""; 
    // Note: आपको यह वैल्यू अपने Header और MegaMenu की कुल ऊँचाई के हिसाब से एडजस्ट करनी होगी।

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Buy Vegetable Seeds Online at Best Price in India
                    </h1>
                    <p className="text-sm text-gray-600">
                        At NGEGreens.com, we believe that growing your own vegetables is more than just a hobby—it's a lifestyle. With our wide range of high-quality seeds, you can effortlessly...
                    </p>
                    <Link to="/about" className="text-sm font-medium text-green-600 hover:text-green-700 mt-1 inline-block">
                        Read More...
                    </Link>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (4-Column Layout) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {vegetableProducts.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            onAddToCart={onAddToCart} // Add to cart functionality passed
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VegetableSeedsPage;