
// src/Pages/SeedsBySeasonPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

import img1 from "../assets/seasonalseeds/img1.avif";
import img2 from "../assets/seasonalseeds/img2.avif";
import img3 from "../assets/seasonalseeds/img3.avif";
import img4 from "../assets/seasonalseeds/img4.avif";
import img5 from "../assets/seasonalseeds/img5.avif";
import img6 from "../assets/seasonalseeds/img6.avif";


// 👇 STEP 1: Dummy Data based on the image provided - इसे export भी करें
// Note: The image shows flower seeds, assuming these represent 'Seeds By Season' for now.
export const seedsBySeasonProducts = [
    { id: 1401, name: 'CHRYSANTHEMUM DOUBLE MIXED FLOWER SEEDS...', price: 45, oldPrice: null, discount: null, soldBy: 'Alkartiy', imageUrl: img1 }, // Verify image path
    { id: 1402, name: 'Morning Glory Purpel FLOWER SEEDS (Pack Of 15-20 Seeds)', price: 94, oldPrice: 150, discount: '37% OFF', soldBy: 'PlantSouk', imageUrl: img2 }, // Verify image path
    { id: 1403, name: 'MARIGOLD GIANT ORANGE FLOWER SEEDS (PACK OF ...)', price: 45, oldPrice: null, discount: null, soldBy: 'Alkartiy', imageUrl: img3 }, // Verify image path
    { id: 1404, name: 'NASTURTIUM ALASKA MIXED FLOWER SEEDS...', price: 45, oldPrice: null, discount: null, soldBy: 'Alkartiy', imageUrl: img4 }, // Verify image path
    { id: 1405, name: 'ASTER PRINCESS MIXED FLOWER SEEDS (PACK OF...)', price: 45, oldPrice: null, discount: null, soldBy: 'Alkartiy', imageUrl: img5 }, // Verify image path
    { id: 1406, name: 'FRENCH MARIGOLD ORANGE FLOWER SEEDS (PACK OF...)', price: 45, oldPrice: null, discount: null, soldBy: 'Alkartiy', imageUrl: img6 }, // Verify image path
    // Add more seasonal products if available
];


const SeedsBySeasonPage = () => {
    const { onAddToCart } = useOutletContext();
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Seeds By Season ☀️❄️
                    </h1>
                    <p className="text-sm text-gray-600">
                        Seeds by season is a practical and effective way to plan your garden throughout the entire year. Whether you're l...
                    </p>
                    <button className="text-sm font-medium text-green-600 hover:text-green-700 mt-1 inline-block">
                        Read More...
                    </button>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (Adjust columns as needed) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {seedsBySeasonProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SeedsBySeasonPage;