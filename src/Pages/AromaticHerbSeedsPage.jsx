// src/Pages/AromaticHerbSeedsPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

import img1 from "../assets/aromaticherb/img1.avif";
import img2 from "../assets/aromaticherb/img2.avif";
import img3 from "../assets/aromaticherb/img3.avif";
import img4 from "../assets/aromaticherb/img4.avif";
import img5 from "../assets/aromaticherb/img5.avif";
import img6 from "../assets/aromaticherb/img6.avif";
import img7 from "../assets/aromaticherb/img7.avif";
import img8 from "../assets/aromaticherb/img8.avif";
import img9 from "../assets/aromaticherb/img9.avif";


// 👇 STEP 1: Dummy Data based on the image provided - इसे export भी करें
export const aromaticHerbProducts = [
    // Row 1
    { id: 1201, name: 'Organic Rosemary Seeds (Pack Of - 15 Seeds)', price: 109, oldPrice: 199, discount: '45% OFF', soldBy: 'PlantSouk', imageUrl: img1 },
    { id: 1202, name: 'Organic Lavender Seeds (Pack Of - 30 Seeds)', price: 109, oldPrice: 199, discount: '45% OFF', soldBy: 'PlantSouk', imageUrl: img2 },
    { id: 1203, name: 'Organic Lemon Grass Seeds (Pack Of - 60 Seeds)', price: 109, oldPrice: 199, discount: '45% OFF', soldBy: 'PlantSouk', imageUrl: img3 },
    { id: 1204, name: 'Organic Stevia Seeds (Pack Of - 50 Seeds)', price: 119, oldPrice: 199, discount: '40% OFF', soldBy: 'PlantSouk', imageUrl: img4 },
    // Row 2
    { id: 1205, name: 'Basil Italian Herb Seeds (Pack Of - 60-70 Seeds)', price: 99, oldPrice: 199, discount: '50% OFF', soldBy: 'PlantSouk', imageUrl: img5 },
    { id: 1206, name: 'Thyme Herb Seeds (Pack Of - 60-70 Seeds)', price: 99, oldPrice: 199, discount: '50% OFF', soldBy: 'PlantSouk', imageUrl: img6 },
    { id: 1207, name: 'Organic Basil Purple Seeds (Pack Of - 40 Seeds)', price: 109, oldPrice: 199, discount: '45% OFF', soldBy: 'PlantSouk', imageUrl: img7 },
    { id: 1208, name: 'Parsley Herb Seeds (Pack Of 60-70 Seeds)', price: 125, oldPrice: 159, discount: '21% OFF', soldBy: 'PlantSouk', imageUrl: img8 },
     // Row 3 (Partial)
    { id: 1209, name: '5 Types of Basil Seeds Combo', price: 199, oldPrice: 369, discount: '46% OFF', soldBy: 'PlantSouk', imageUrl: img9 },
    // Add more products if needed
];


const AromaticHerbSeedsPage = () => {
    const { onAddToCart } = useOutletContext();
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Aromatic Herb Seeds: Infuse Your Garden with Fragrant Healing 🌿🌸
                    </h1>
                    <p className="text-sm text-gray-600">
                        Aromatic herbs are not only known for their delightful fragrance but also for their culinary and medicinal uses. By growing Aromatic Herb Seeds at home...
                    </p>
                    <button className="text-sm font-medium text-green-600 hover:text-green-700 mt-1 inline-block">
                        Read More...
                    </button>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (4-Column Layout) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {aromaticHerbProducts.map((product) => (
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

export default AromaticHerbSeedsPage;