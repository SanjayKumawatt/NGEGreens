// src/Pages/AnnualFlowerSeedsPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';


import img1 from "../assets/annualflower/img1.avif";
import img2 from "../assets/annualflower/img2.avif";
import img3 from "../assets/annualflower/img3.avif";
import img4 from "../assets/annualflower/img4.avif";
import img5 from "../assets/annualflower/img5.avif";
import img6 from "../assets/annualflower/img6.avif";
import img7 from "../assets/annualflower/img7.avif";
import img8 from "../assets/annualflower/img8.avif";
import img9 from "../assets/annualflower/img9.avif";
import img10 from "../assets/annualflower/img10.avif";
import img11 from "../assets/annualflower/img11.avif";
import img12 from "../assets/annualflower/img12.avif";
import img13 from "../assets/annualflower/img13.avif";
import img14 from "../assets/annualflower/img14.avif";
import img15 from "../assets/annualflower/img15.avif";
import img16 from "../assets/annualflower/img16.avif";

// 👇 STEP 1: Dummy Data based on the image provided - इसे export भी करें
export const annualFlowerProducts = [
    // Row 1
    { id: 801, name: 'Moss Rose / Portulaca Mix Flower Seeds (Pack Of - 10...)', price: 74, oldPrice: 99, discount: '25% OFF', soldBy: 'PlantSouk', imageUrl: img1 },
    { id: 802, name: 'Vinca / Sadabahar / Periwinkle Mix Flower See...', price: 99, oldPrice: 199, discount: '50% OFF', soldBy: 'PlantSouk', imageUrl: img2 },
    { id: 803, name: 'Zinnia Flower (Red) Seeds (Pack Of - 25 Seeds)', price: 59, oldPrice: 150, discount: '60% OFF', soldBy: 'PlantSouk', imageUrl: img3 },
    { id: 804, name: 'Sunflower Red Flower Seeds (Pack Of - 15 Seeds)', price: 109, oldPrice: 250, discount: '60% OFF', soldBy: 'PlantSouk', imageUrl: img4 },
    // Row 2
    { id: 805, name: 'Zinnia Flower(Pink) Seeds (Pack Of - 25 Seeds)', price: 99, oldPrice: 120, discount: '17% OFF', soldBy: 'PlantSouk', imageUrl: img5 },
    { id: 806, name: 'Zinnia Peppermint Mix Flower Seeds (Pack Of - 20...)', price: 109, oldPrice: 150, discount: '27% OFF', soldBy: 'PlantSouk', imageUrl: img6 },
    { id: 807, name: 'Zinnia Dahlia Mix Flower Seeds (Pack Of - 30 Seeds)', price: 135, oldPrice: 199, discount: '32% OFF', soldBy: 'PlantSouk', imageUrl: img7 },
    { id: 808, name: 'Marigold Summer Variety Orange Flower Seeds (Pack Of...)', price: 89, oldPrice: 120, discount: '25% OFF', soldBy: 'PlantSouk', imageUrl: img8 },
    // Row 3
    { id: 809, name: 'Morning Glory Mix Flower Seeds (Pack Of - 15-20...)', price: 79, oldPrice: 99, discount: '20% OFF', soldBy: 'PlantSouk', imageUrl: img9 },
    { id: 810, name: 'Tithonia (Red) Flower Seeds (Pack Of - 20 Seeds)', price: 79, oldPrice: 99, discount: '20% OFF', soldBy: 'PlantSouk', imageUrl: img10 },
    { id: 811, name: 'Sunflower (Sunrise) Flower Seeds (Pack Of - 10 Seeds)', price: 74, oldPrice: 99, discount: '25% OFF', soldBy: 'PlantSouk', imageUrl: img11 },
    { id: 812, name: 'Marigold (African Mix) Seeds (Pack Of - 50 Seeds)', price: 89, oldPrice: 120, discount: '25% OFF', soldBy: 'PlantSouk', imageUrl: img12 },
     // Row 4
    { id: 813, name: 'Cosmos Mix Flower Seeds (Pack Of - 30 Seeds)', price: 139, oldPrice: 199, discount: '30% OFF', soldBy: 'PlantSouk', imageUrl: img13 },
    { id: 814, name: 'Sunflower Teddy Cherry Flower Seeds - F2 Hybrid...', price: 99, oldPrice: 199, discount: '50% OFF', soldBy: 'PlantSouk', imageUrl: img14 },
    { id: 815, name: 'Marigold White Seeds - F2 Hybrid (Pack of ...)', price: 139, oldPrice: 199, discount: '30% OFF', soldBy: 'PlantSouk', imageUrl: img15 },
    { id: 816, name: 'Stock Double Dwarf Mix Flower Seeds (Pack of 70...)', price: 89, oldPrice: 120, discount: '25% OFF', soldBy: 'PlantSouk', imageUrl: img16 },
];


const AnnualFlowerSeedsPage = () => {
    const { onAddToCart } = useOutletContext();
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Annual Flower Seeds: Bring Seasonal Beauty to Your Garden 🌸
                    </h1>
                    <p className="text-sm text-gray-600">
                        Annuals give your garden a vibrant paradise with annual flower seeds. These plants complete their life cycle in one season, offering bursts of...
                    </p>
                    <button className="text-sm font-medium text-green-600 hover:text-green-700 mt-1 inline-block">
                        Read More...
                    </button>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (4-Column Layout) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {annualFlowerProducts.map((product) => (
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

export default AnnualFlowerSeedsPage;