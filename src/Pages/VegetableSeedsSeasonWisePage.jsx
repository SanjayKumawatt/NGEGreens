// src/Pages/VegetableSeedsSeasonWisePage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';


import img1 from "../assets/seasonveg/img1.avif";
import img2 from "../assets/seasonveg/img2.avif";
import img3 from "../assets/seasonveg/img3.avif";
import img4 from "../assets/seasonveg/img4.avif";
import img5 from "../assets/seasonveg/img5.avif";
import img6 from "../assets/seasonveg/img6.avif";
import img7 from "../assets/seasonveg/img7.avif";
import img8 from "../assets/seasonveg/img8.avif";
import img9 from "../assets/seasonveg/img9.avif";
import img10 from "../assets/seasonveg/img10.avif";
import img11 from "../assets/seasonveg/img11.avif";
import img12 from "../assets/seasonveg/img12.avif";
import img13 from "../assets/seasonveg/img13.avif";
import img14 from "../assets/seasonveg/img14.avif";
import img15 from "../assets/seasonveg/img15.avif";
import img16 from "../assets/seasonveg/img16.avif";






// 👇 STEP 1: Dummy Data based on the image provided - इसे export भी करें
export const vegetableSeedsSeasonWiseProducts = [
    // Row 1
    { id: 401, name: 'CAULIFLOWER WINTER VARIETY (100 SEEDS) - SEP...', price: 89, oldPrice: 199, discount: '55% OFF', soldBy: 'Miberty', imageUrl: img1 },
    { id: 402, name: 'Organic (Desi) Capsicum (Red) Seeds(Pac...', price: 59, oldPrice: 150, discount: '60% OFF', soldBy: 'PlantSouk', imageUrl: img2 },
    { id: 403, name: 'F1 Hybrid Bottle / Lauki gourd (Long) Seeds (pack ...', price: 138, oldPrice: 150, discount: '8% OFF', soldBy: 'Organic Life', imageUrl: img3 },
    { id: 404, name: 'Kambi Saag(Ipomoea aquatica) Seed (Pack Of - 5...', price: 89, oldPrice: 115, discount: '22% OFF', soldBy: 'Organic Life', imageUrl: img4 },
    // Row 2
    { id: 405, name: 'Indian Round gourd (Tinda) Seed (Pack Of - 20 Seeds)', price: 98, oldPrice: 100, discount: '2% OFF', soldBy: 'Organic Life', imageUrl: img5 },
    { id: 406, name: 'Green Amaranth (Saag) Seed (Pack Of - 200 Seeds )', price: 98, oldPrice: 100, discount: '2% OFF', soldBy: 'Organic Life', imageUrl: img6 },
    { id: 407, name: 'Organic Guava Fruit Seed (Pack Of - 50 Seeds)', price: 98, oldPrice: 125, discount: '21% OFF', soldBy: 'Organic Life', imageUrl: img7 },
    { id: 408, name: 'Organic (Desi) Louki/Bottle Gourd(Long) Seeds(Pack O...', price: 108, oldPrice: 180, discount: '40% OFF', soldBy: 'PlantSouk', imageUrl: img8 },
    // Row 3
    { id: 409, name: 'Organic (Desi) Banana Pepper(Green) Seeds (Pack...', price: 59, oldPrice: 75, discount: '21% OFF', soldBy: 'PlantSouk', imageUrl: img9 },
    { id: 410, name: 'Organic Bitter Gourd / Karela Seeds (Pack Of -25 Seeds)', price: 89, oldPrice: 100, discount: '11% OFF', soldBy: 'Organic Life', imageUrl: img10 },
    { id: 411, name: '6 Types of Colorful Capsicum Seeds| Combo (3...', price: 199, oldPrice: 400, discount: '50% OFF', soldBy: 'PlantSouk', imageUrl: img11 },
    { id: 412, name: 'Organic F2 Hybrid) Hot White Seeds(Pack Of 2...', price: 89, oldPrice: 120, discount: '26% OFF', soldBy: 'PlantSouk', imageUrl: img12 },
    // Row 4
    { id: 413, name: 'F3 Hybrid Bitter Gourd (Karela) Seeds (Pack Of 15...', price: 89, oldPrice: 100, discount: '11% OFF', soldBy: 'PlantSouk', imageUrl: img13 },
    { id: 414, name: 'Organic Desi Bitter Gourd (Karela) Seeds (Pack Of 15...', price: 59, oldPrice: 150, discount: '60% OFF', soldBy: 'PlantSouk', imageUrl: img14 },
    { id: 415, name: 'F3 Hybrid Indian Squash (Tinda) Seeds (Pack Of 40...', price: 89, oldPrice: 100, discount: '11% OFF', soldBy: 'PlantSouk', imageUrl: img15 },
    { id: 416, name: 'Organic Indian Squash (Tinda) Seeds (Pack Of 40...', price: 59, oldPrice: 199, discount: '70% OFF', soldBy: 'PlantSouk', imageUrl: img16 },
];


const VegetableSeedsSeasonWisePage = () => {
    const { onAddToCart } = useOutletContext();
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Vegetable Seeds Season Wise
                    </h1>
                    <p className="text-sm text-gray-600">
                        Discover the perfect vegetable seeds for every season. Our collection ensures you have fresh produce all year round.
                    </p>
                    <button className="text-sm font-medium text-green-600 hover:text-green-700 mt-1 inline-block">
                        Read More...
                    </button>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (4-Column Layout) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {vegetableSeedsSeasonWiseProducts.map((product) => (
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

export default VegetableSeedsSeasonWisePage;