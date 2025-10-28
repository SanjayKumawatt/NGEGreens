// src/Pages/CulinaryHerbSeedsPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

import img1 from "../assets/culinary/img1.avif";
import img2 from "../assets/culinary/img2.avif";
import img3 from "../assets/culinary/img3.avif";
import img4 from "../assets/culinary/img4.avif";



// 👇 STEP 1: Dummy Data based on the image provided - इसे export भी करें
export const culinaryHerbProducts = [
    { id: 1301, name: 'Organic Rosemary Seeds (Pack Of - 15 Seeds)', price: 109, oldPrice: 199, discount: '45% OFF', soldBy: 'PlantSouk', imageUrl: img1 }, // Verify image path
    { id: 1302, name: 'Organic Lavender Seeds (Pack Of - 30 Seeds)', price: 109, oldPrice: 199, discount: '45% OFF', soldBy: 'PlantSouk', imageUrl: img2 }, // Verify image path
    { id: 1303, name: 'Organic Lemon Grass Seeds (Pack Of - 60 Seeds)', price: 109, oldPrice: 199, discount: '45% OFF', soldBy: 'PlantSouk', imageUrl: img3 }, // Verify image path
    { id: 1304, name: 'Organic Stevia Seeds (Pack Of - 50 Seeds)', price: 119, oldPrice: 199, discount: '40% OFF', soldBy: 'PlantSouk', imageUrl: img4 }, // Verify image path
    // Add more culinary herbs if available from other images or data
];


const CulinaryHerbSeedsPage = () => {
    const { onAddToCart } = useOutletContext();
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Culinary Herbs: Grow Fresh, Flavorful Herbs for Your Kitchen 🌿🧑‍🍳
                    </h1>
                    <p className="text-sm text-gray-600">
                        Culinary herbs are a must-have for every home chef and gardener. With their aromatic flavors and versatility, they enhance your cooking while adding a touch of greenery t...
                    </p>
                    <button className="text-sm font-medium text-green-600 hover:text-green-700 mt-1 inline-block">
                        Read More...
                    </button>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (4-Column Layout) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {culinaryHerbProducts.map((product) => (
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

export default CulinaryHerbSeedsPage;