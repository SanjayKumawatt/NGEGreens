// src/Pages/HerbSeedsOrganicPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react';
export const herbSeedsOrganicProducts = []; // Export empty array
const HerbSeedsOrganicPage = () => {
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";
    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Organic Herb Seeds</h1>
                    <p className="text-sm text-gray-600">Grow herbs naturally with our certified organic seeds.</p>
                    <hr className="mt-4 border-gray-200" />
                </div>
                 <div className="flex flex-col items-center justify-center py-20 px-6 bg-white border border-gray-200 rounded-lg text-center">
                    <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                    <p className="text-xl font-semibold text-gray-700">No products found</p>
                    <p className="text-gray-500 mt-2">Our organic herb seed collection is currently unavailable.</p>
                    <Link to="/seeds/herb" className="mt-6 inline-flex items-center px-4 py-2 ... bg-green-600 ..."><ArrowLeft className="w-4 h-4 mr-2" />Back to Herb Seeds</Link>
                </div>
            </div>
        </div>
    );
};
export default HerbSeedsOrganicPage;