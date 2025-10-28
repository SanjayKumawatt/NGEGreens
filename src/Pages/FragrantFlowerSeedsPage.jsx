// src/Pages/FragrantFlowerSeedsPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react'; // Icon for the message

// 👇 STEP 1: Export an empty array
export const fragrantFlowerProducts = [];

const FragrantFlowerSeedsPage = () => {
    // const { onAddToCart } = useOutletContext(); // Not needed
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Fragrant Flower Seeds
                    </h1>
                    <p className="text-sm text-gray-600">
                        Fill your garden with delightful scents using our selection of fragrant flower seeds. Perfect for creating a sensory experience.
                    </p>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* "No Products Found" Message */}
                <div className="flex flex-col items-center justify-center py-20 px-6 bg-white border border-gray-200 rounded-lg text-center">
                    <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                    <p className="text-xl font-semibold text-gray-700">
                        No products found
                    </p>
                    <p className="text-gray-500 mt-2">
                        We are currently cultivating our collection of fragrant flower seeds. Please check back later!
                    </p>
                    <Link
                        to="/seeds/flower" // Link back to the main flower seeds page
                        className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Explore Other Flower Seeds
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FragrantFlowerSeedsPage;