// src/Pages/PerennialFlowerSeedsPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

import img1 from "../assets/pernnealflower/img1.avif";
import img2 from "../assets/pernnealflower/img2.avif";
import img3 from "../assets/pernnealflower/img3.avif";
import img4 from "../assets/pernnealflower/img4.avif";
import img5 from "../assets/pernnealflower/img5.avif";
import img6 from "../assets/pernnealflower/img6.avif";
import img7 from "../assets/pernnealflower/img7.avif";
import img8 from "../assets/pernnealflower/img8.avif";


// 👇 STEP 1: Dummy Data based on the image provided - इसे export भी करें
export const perennialFlowerProducts = [
    // Row 1
    { id: 901, name: 'Marigold Summer Variety Flower Seeds (Pack Of - 4...)', price: 89, oldPrice: 120, discount: '25% OFF', soldBy: 'PlantSouk', imageUrl: img1 },
    { id: 902, name: 'Morning Glory Mix Flower Seeds (Pack Of - 15-20...)', price: 79, oldPrice: 99, discount: '20% OFF', soldBy: 'PlantSouk', imageUrl: img2 }, // Discount % differs from image
    { id: 903, name: 'Dianthus Black Cherry Flower Seeds - F2 Hybrid...', price: 135, oldPrice: 175, discount: '22% OFF', soldBy: 'PlantSouk', imageUrl: img3 },
    { id: 904, name: 'Marigold White Flower Seeds - F2 Hybrid (Pack of 20...)', price: 129, oldPrice: 160, discount: '19% OFF', soldBy: 'PlantSouk', imageUrl: img4 },
    // Row 2
    { id: 905, name: 'Stocks Mixed Color Flower Seeds (Pack of 70-80 Seeds)', price: 89, oldPrice: 155, discount: '42% OFF', soldBy: 'PlantSouk', imageUrl: img5 },
    { id: 906, name: 'Lotus Mix Flower Seeds (Pack Of - 10 Seeds)', price: 109, oldPrice: 230, discount: '52% OFF', soldBy: 'PlantSouk', imageUrl: img6 },
    { id: 907, name: 'Sunflower (Sungold) Flower Seeds (Pack Of - 20 Seeds)', price: 74, oldPrice: 150, discount: '50% OFF', soldBy: 'PlantSouk', imageUrl: img7 },
    { id: 908, name: 'Marigold Pusa Basanti Flower Seeds - F2 Hybrid...', price: 89, oldPrice: 120, discount: '25% OFF', soldBy: 'PlantSouk', imageUrl: img8 },
    // Add more products if needed
];


const PerennialFlowerSeedsPage = () => {
    const { onAddToCart } = useOutletContext();
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Perennial Flower Seeds 🌿
                    </h1>
                    <p className="text-sm text-gray-600">
                        Add timeless elegance to your garden with Perennial Flower Seeds. Unlike annual flowers, perennials bloom year after year, making them a sustainable and long-lasting choice for gardeners. These hardy plants are perfect for crea...
                    </p>
                    <button className="text-sm font-medium text-green-600 hover:text-green-700 mt-1 inline-block">
                        Read More...
                    </button>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (4-Column Layout) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {perennialFlowerProducts.map((product) => (
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

export default PerennialFlowerSeedsPage;