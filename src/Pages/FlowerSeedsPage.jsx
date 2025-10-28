// src/Pages/FlowerSeedsPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

import img1 from "../assets/flower/img1.avif";
import img2 from "../assets/flower/img2.avif";
import img3 from "../assets/flower/img3.avif";
import img4 from "../assets/flower/img4.avif";
import img5 from "../assets/flower/img5.avif";
import img6 from "../assets/flower/img6.avif";
import img7 from "../assets/flower/img7.avif";
import img8 from "../assets/flower/img8.avif";


// 👇 STEP 1: Dummy Data based on the image provided - इसे export भी करें
export const flowerProducts = [
    // Row 1
    { id: 601, name: 'Moss Rose / Portulaca Mix Flower Seeds (Pack Of - 10...)', price: 74, oldPrice: 99, discount: '25% OFF', soldBy: 'PlantSouk', imageUrl: img1 },
    { id: 602, name: 'Vinca / Sadabahar / Periwinkle Mix Flower See...', price: 99, oldPrice: 199, discount: '50% OFF', soldBy: 'PlantSouk', imageUrl: img2 },
    { id: 603, name: 'Zinnia Flower (Red) Seeds (Pack Of - 25 Seeds)', price: 59, oldPrice: 150, discount: '60% OFF', soldBy: 'PlantSouk', imageUrl: img3 },
    { id: 604, name: 'Sunflower Red Flower Seeds (Pack Of - 15 Seeds)', price: 109, oldPrice: 250, discount: '60% OFF', soldBy: 'PlantSouk', imageUrl: img4 },
    // Row 2
    { id: 605, name: 'PORTULACA RAINBOW MIXED FLOWER SEEDS (PACK OF...)', price: 45, oldPrice: null, discount: null, soldBy: 'Alkartiy', imageUrl: img5 }, // Price needs verification from image
    { id: 606, name: 'Zinnia Flower(Pink) Seeds (Pack Of - 25 Seeds)', price: 99, oldPrice: 120, discount: '17% OFF', soldBy: 'PlantSouk', imageUrl: img6 },
    { id: 607, name: 'Organic Lavender Seeds (Pack Of - 30 Seeds)', price: 109, oldPrice: 199, discount: '45% OFF', soldBy: 'PlantSouk', imageUrl: img7 },
    { id: 608, name: 'Zinnia Peppermint Mix Flower Seeds (Pack Of - 20...)', price: 109, oldPrice: 150, discount: '27% OFF', soldBy: 'PlantSouk', imageUrl: img8 },
    // Add more products if needed
];


const FlowerSeedsPage = () => {
    const { onAddToCart } = useOutletContext();
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Flower Seeds Collection
                    </h1>
                    <p className="text-sm text-gray-600">
                        Flower seeds are the heart of every beautiful garden. Whether you're an experienced gardener or a beginner,...
                    </p>
                    <button className="text-sm font-medium text-green-600 hover:text-green-700 mt-1 inline-block">
                        Read More...
                    </button>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (4-Column Layout) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {flowerProducts.map((product) => (
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

export default FlowerSeedsPage;