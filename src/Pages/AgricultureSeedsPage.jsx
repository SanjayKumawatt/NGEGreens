// src/Pages/AgricultureSeedsPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import img1 from "../assets/img1.webp";

// 👇 STEP 1: Dummy Data based on the image provided - इसे export भी करें
export const agricultureSeedsProducts = [
    { id: 1701, name: 'Organic Maize / Makka (Corn) Seeds (Pack Of ...)', price: 98, oldPrice: 100, discount: '2% OFF', soldBy: 'Organic Life', imageUrl: img1 }, // Verify image path
    // Add more agriculture/field crop seeds if available
];


const AgricultureSeedsPage = () => {
    const { onAddToCart } = useOutletContext();
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Field Crops & Agriculture Seeds 🌽🌾
                    </h1>
                    <p className="text-sm text-gray-600">
                        Field crops are the backbone of agriculture, providing essential food, fodder, and raw materials for commercial purposes. Whether you're involved in...
                    </p>
                    <button className="text-sm font-medium text-green-600 hover:text-green-700 mt-1 inline-block">
                        Read More...
                    </button>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (Adjust columns as needed) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {agricultureSeedsProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                     {/* Optional: Add a "No Products Found" message if the array is empty in the future */}
                     {agricultureSeedsProducts.length === 0 && (
                         <div className="col-span-full text-center py-10 text-gray-500">
                            No agriculture seeds found currently.
                         </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AgricultureSeedsPage;