// src/Pages/HerbSeedsPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

import img1 from "../assets/herb/img1.avif";
import img2 from "../assets/herb/img2.avif";
import img3 from "../assets/herb/img3.avif";
import img4 from "../assets/herb/img4.avif";
import img5 from "../assets/herb/img5.avif";
import img6 from "../assets/herb/img6.avif";
import img7 from "../assets/herb/img7.avif";
import img8 from "../assets/herb/img8.avif";


// 👇 STEP 1: Dummy Data based on the image provided - इसे export भी करें
export const herbSeedsProducts = [
    // Row 1
    { id: 1101, name: 'Organic Rosemary Seeds (Pack Of - 15 Seeds)', price: 109, oldPrice: 199, discount: '45% OFF', soldBy: 'PlantSouk', imageUrl: img1 },
    { id: 1102, name: 'Organic Lavender Seeds (Pack Of - 30 Seeds)', price: 109, oldPrice: 199, discount: '45% OFF', soldBy: 'PlantSouk', imageUrl: img2 },
    { id: 1103, name: 'Organic Lemon Grass Seeds (Pack Of - 60 Seeds)', price: 109, oldPrice: 199, discount: '45% OFF', soldBy: 'PlantSouk', imageUrl: img3 },
    { id: 1104, name: 'Amaranthus Tricolor Herbal Seeds (Pack Of - 100 Seeds)', price: 79, oldPrice: 120, discount: '34% OFF', soldBy: 'PlantSouk', imageUrl: img4 },
    // Row 2
    { id: 1105, name: 'Organic Stevia Seeds (Pack Of - 50 Seeds)', price: 119, oldPrice: 199, discount: '40% OFF', soldBy: 'PlantSouk', imageUrl: img5 },
    { id: 1106, name: 'Organic Peppermint Seeds (Pack Of - 70 Seeds)', price: 149, oldPrice: 300, discount: '50% OFF', soldBy: 'PlantSouk', imageUrl: img6 },
    { id: 1107, name: 'Organic Ashwagandha Seeds (Pack Of - 40 Seeds)', price: 109, oldPrice: 199, discount: '45% OFF', soldBy: 'PlantSouk', imageUrl: img7 },
    { id: 1108, name: 'Basil Italian Herb Seeds (Pack Of - 60-70 Seeds)', price: 99, oldPrice: 199, discount: '50% OFF', soldBy: 'PlantSouk', imageUrl: img8 },
    // Add more products if needed
];


const HerbSeedsPage = () => {
    const { onAddToCart } = useOutletContext();
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Herb Seeds 🌿
                    </h1>
                    <p className="text-sm text-gray-600">
                        Herbs are an essential part of every kitchen and garden. With Herb Seeds from NGEGreens.com, you can grow your own fresh, organic herbs to elevate your cooking, create soothing teas, or even enhance your garde...
                    </p>
                    <button className="text-sm font-medium text-green-600 hover:text-green-700 mt-1 inline-block">
                        Read More...
                    </button>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (4-Column Layout) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {herbSeedsProducts.map((product) => (
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

export default HerbSeedsPage;