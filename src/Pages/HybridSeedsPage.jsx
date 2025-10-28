// src/Pages/HybridSeedsPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

import img1 from "../assets/hybridseed/img1.avif";
import img2 from "../assets/hybridseed/img2.avif";
import img3 from "../assets/hybridseed/img3.avif";
import img4 from "../assets/hybridseed/img4.avif";
import img5 from "../assets/hybridseed/img5.avif";
import img6 from "../assets/hybridseed/img6.avif";
import img7 from "../assets/hybridseed/img7.avif";
import img8 from "../assets/hybridseed/img8.avif";




// 👇 STEP 1: Dummy Data based on the image provided - इसे export भी करें
export const hybridSeedsProducts = [
    // Row 1
    { id: 1801, name: 'Ranunculus Bloomingdale Mix Flower Seeds - F1 Hybri...', price: 298, oldPrice: 599, discount: '50% OFF', soldBy: 'PlantSouk', imageUrl: img1 },
    { id: 1802, name: 'Ranunculus Bloomingdale Mix Flower Seeds - F1 Hybri...', price: 225, oldPrice: 399, discount: '43% OFF', soldBy: 'PlantSouk', imageUrl: img2 },
    { id: 1803, name: 'Petunia Violet Flower Seeds - F2 Hybrid (Pack of 100...)', price: 109, oldPrice: 160, discount: '31% OFF', soldBy: 'PlantSouk', imageUrl: img3 },
    { id: 1804, name: 'Marigold Flame Flower Seeds - F1 Hybrid (Pack of 10 Seeds)', price: 129, oldPrice: 250, discount: '48% OFF', soldBy: 'PlantSouk', imageUrl: img4 },
    // Row 2
    { id: 1805, name: 'Marigold Strawberry Mix Flower Seeds - F1 Hybrid...', price: 155, oldPrice: 160, discount: '3% OFF', soldBy: 'PlantSouk', imageUrl: img5 },
    { id: 1806, name: 'Big Orange Marigold Flower Seeds - F2 Hybrid (Pack of ...)', price: 155, oldPrice: 160, discount: '3% OFF', soldBy: 'PlantSouk', imageUrl: img6 },
    { id: 1807, name: 'Petunia Star Mix Flower Seeds - F2 Hybrid (Pack of ...)', price: 155, oldPrice: 160, discount: '3% OFF', soldBy: 'PlantSouk', imageUrl: img7 },
    { id: 1808, name: 'Dianthus Black Cherry Flower Seeds - F2 Hybrid (Pack of...)', price: 135, oldPrice: 199, discount: '32% OFF', soldBy: 'PlantSouk', imageUrl: img8 },
    // Add more hybrid products if needed
];


const HybridSeedsPage = () => {
    const { onAddToCart } = useOutletContext();
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Hybrid Seeds Collection 🌱
                    </h1>
                    <p className="text-sm text-gray-600">
                        Explore our range of F1 and F2 hybrid seeds, developed for superior performance, yield, and unique characteristics.
                    </p>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (4-Column Layout) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {hybridSeedsProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                    {/* Optional: Add a "No Products Found" message */}
                    {hybridSeedsProducts.length === 0 && (
                         <div className="col-span-full text-center py-10 text-gray-500">
                            No hybrid seeds found currently.
                         </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HybridSeedsPage;