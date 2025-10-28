// src/Pages/VegetableSeedsComboPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import img1 from "../assets/vegcombo/img1.avif";
import img2 from "../assets/vegcombo/img2.avif";


// 👇 STEP 1: Dummy Data based on the combo image - इसे export भी करें
export const vegetableSeedsComboProducts = [
    {
        id: 501,
        name: '6 Types of Colorful Capsicum Seeds Combo...',
        price: 199,
        oldPrice: 499,
        discount: '60% OFF',
        soldBy: 'PlantSouk',
        imageUrl: img1 // Placeholder image path
    },
    {
        id: 502,
        name: '5 Types of Tomato Seeds Combo – Desi,...',
        price: 275,
        oldPrice: 599,
        discount: '54% OFF',
        soldBy: 'PlantSouk',
        imageUrl: img2 // Placeholder image path
    },
    // आप यहाँ और कॉम्बो प्रोडक्ट जोड़ सकते हैं
];


const VegetableSeedsComboPage = () => {
    const { onAddToCart } = useOutletContext();
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Vegetables Seeds Combo Packs
                    </h1>
                    <p className="text-sm text-gray-600">
                        Get the best value with our curated vegetable seed combo packs. Perfect for starting a diverse kitchen garden.
                    </p>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (Adjust columns as needed, maybe fewer for combos) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {vegetableSeedsComboProducts.map((product) => (
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

export default VegetableSeedsComboPage;