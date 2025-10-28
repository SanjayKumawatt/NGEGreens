// src/Pages/PalmSeedsPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react'; // Icon for the message

// 👇 STEP 1: Export an empty array
export const palmSeedsProducts = [];

const PalmSeedsPage = () => {
    // const { onAddToCart } = useOutletContext(); // Not needed
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Palm Seeds 🌴
                    </h1>
                    <p className="text-sm text-gray-600">
                        Grow exotic and beautiful palm trees from seeds. Perfect for adding a tropical touch to your garden or indoor space.
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
                        Our collection of palm seeds is currently being cultivated. Please check back later!
                    </p>
                    <Link
                        to="/seeds/tree" // Link back to the parent Tree Seeds page
                        className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Tree Seeds
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PalmSeedsPage;