// src/Pages/SummerSeedsPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

import img1 from "../assets/summerseed/img1.avif";
import img2 from "../assets/summerseed/img2.avif";
import img3 from "../assets/summerseed/img3.avif";
import img4 from "../assets/summerseed/img4.avif";


// 👇 STEP 1: Dummy Data based on the image provided - इसे export भी करें
export const summerSeedsProducts = [
    { id: 1601, name: 'HYBRID TOMATO SEEDS (PACK OF 50 SEEDS)', price: 89, oldPrice: 90, discount: '1% OFF', soldBy: 'Alkartiy', imageUrl: img1 }, // Verify image path
    { id: 1602, name: 'SUNFLOWER TALL SUNGOLD FLOWER SEEDS...', price: 40, oldPrice: null, discount: null, soldBy: 'Alkartiy', imageUrl: img2 }, // Verify image path
    { id: 1603, name: 'ZINNIA DOUBLE PURPLE FLOWER SEEDS (PACK OF ...', price: 40, oldPrice: null, discount: null, soldBy: 'Alkartiy', imageUrl: img3 }, // Verify image path
    { id: 1604, name: 'CAULIFLOWER RAINY SEASON EARLY VARIETY...', price: 89, oldPrice: 199, discount: '55% OFF', soldBy: 'Alkartiy', imageUrl: img4 }, // Verify image path
    // Add more summer products if available
];


const SummerSeedsPage = () => {
    const { onAddToCart } = useOutletContext();
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Summer Seeds: Perfect for the Hot Season 🌞🌱
                    </h1>
                    <p className="text-sm text-gray-600">
                        Summer is the time when your garden truly comes alive, filled with vibrant colors and bountiful harvests. Growing Summer Seeds is an excellent way to ensure your garden thr...
                    </p>
                    <button className="text-sm font-medium text-green-600 hover:text-green-700 mt-1 inline-block">
                        Read More...
                    </button>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (4-Column Layout) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {summerSeedsProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                    {/* Optional: Add a "No Products Found" message if the array is empty in the future */}
                    {summerSeedsProducts.length === 0 && (
                         <div className="col-span-full text-center py-10 text-gray-500">
                            No summer seeds found currently.
                         </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SummerSeedsPage;