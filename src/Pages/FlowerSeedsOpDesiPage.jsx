// src/Pages/FlowerSeedsOpDesiPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import img1 from "../assets/floweropdesi/img1.avif";
import img2 from "../assets/floweropdesi/img2.avif";
import img3 from "../assets/floweropdesi/img3.avif";


// 👇 STEP 1: Dummy Data based on the image provided - इसे export भी करें
export const flowerSeedsOpDesiProducts = [
    { id: 701, name: 'PORTULACA RAIBOW MIXED FLOWER SEEDS (PACK OF...)', price: 45, oldPrice: null, discount: null, soldBy: 'Alkartiy', imageUrl: img1 }, // Verify image path
    { id: 702, name: 'MARIGOLD GIANT ORANGE FLOWER SEEDS (PACK OF ...)', price: 45, oldPrice: null, discount: null, soldBy: 'Alkartiy', imageUrl: img2 }, // Verify image path
    { id: 703, name: 'ASTER PRINCESS MIXED FLOWER SEEDS (PACK OF...)', price: 45, oldPrice: null, discount: null, soldBy: 'Alkartiy', imageUrl: img3 }, // Verify image path
    // Add more OP/Desi flower seeds if available
];


const FlowerSeedsOpDesiPage = () => {
    const { onAddToCart } = useOutletContext();
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        OP (Open Pollinated) / Desi Flower Seeds
                    </h1>
                    <p className="text-sm text-gray-600">
                        OP (Open Pollinated) and desi flower seeds are the foundation of traditional, sustainable gardening. Unlike hybri...
                    </p>
                    <button className="text-sm font-medium text-green-600 hover:text-green-700 mt-1 inline-block">
                        Read More...
                    </button>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (Adjust columns as needed) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {flowerSeedsOpDesiProducts.map((product) => (
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

export default FlowerSeedsOpDesiPage;