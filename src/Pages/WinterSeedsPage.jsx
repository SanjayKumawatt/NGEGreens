// src/Pages/WinterSeedsPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

import img1 from "../assets/winterseeds/img1.avif";
import img2 from "../assets/winterseeds/img2.avif";
import img3 from "../assets/winterseeds/img3.avif";
import img4 from "../assets/winterseeds/img4.avif";
import img5 from "../assets/winterseeds/img5.avif";
import img6 from "../assets/winterseeds/img6.avif";
import img7 from "../assets/winterseeds/img7.avif";
import img8 from "../assets/winterseeds/img8.avif";
import img9 from "../assets/winterseeds/img9.avif";
import img10 from "../assets/winterseeds/img10.avif";
import img11 from "../assets/winterseeds/img11.avif";
import img12 from "../assets/winterseeds/img12.webp";


// 👇 STEP 1: Dummy Data based on the image provided - इसे export भी करें
export const winterSeedsProducts = [
    // Row 1
    { id: 1501, name: 'Organic (F2 Hybrid) Gooseberry/Rasbhari...', price: 89, oldPrice: 130, discount: '32% OFF', soldBy: 'PlantSouk', imageUrl: img1 },
    { id: 1502, name: 'Organic Lavender Seeds (Pack Of - 30 Seeds)', price: 109, oldPrice: 199, discount: '45% OFF', soldBy: 'PlantSouk', imageUrl: img2 },
    { id: 1503, name: 'Zinnia Peppermint Mix Flower Seeds (Pack Of - 20...)', price: 109, oldPrice: 150, discount: '27% OFF', soldBy: 'PlantSouk', imageUrl: img3 },
    { id: 1504, name: 'Dianthus Black Cherry Flower Seeds - F2 Hybrid...', price: 135, oldPrice: 175, discount: '22% OFF', soldBy: 'PlantSouk', imageUrl: img4 },
    // Row 2
    { id: 1505, name: 'Marigold White Flower Seeds - F2 Hybrid (Pack of 20...)', price: 129, oldPrice: 160, discount: '19% OFF', soldBy: 'PlantSouk', imageUrl: img5 },
    { id: 1506, name: 'Stocks Mixed Color Flower Seeds (Pack of 70-80 Seeds)', price: 89, oldPrice: 155, discount: '42% OFF', soldBy: 'PlantSouk', imageUrl: img6 },
    { id: 1507, name: 'Marigold Pusa Basanti Flower Seeds - F2 Hybrid...', price: 89, oldPrice: 120, discount: '25% OFF', soldBy: 'PlantSouk', imageUrl: img7 },
    { id: 1508, name: 'Balsam (Gulmehnd) Bush Mix Color)Flower Seeds...', price: 98, oldPrice: 130, discount: '24% OFF', soldBy: 'Organic Life', imageUrl: img8 },
    // Row 3
    { id: 1509, name: 'Nasturtium / Trapaeolum (Mix) Flower Seeds(Pack Of ...', price: 98, oldPrice: 130, discount: '24% OFF', soldBy: 'Organic Life', imageUrl: img9 },
    { id: 1510, name: 'Aster Mixed Flower Seeds - F2 Hybrid (Pack of 50 Seeds)', price: 99, oldPrice: 130, discount: '24% OFF', soldBy: 'PlantSouk', imageUrl: img10 },
    { id: 1511, name: 'Dahlia Flower (Mix) Seed (Pack Of - 50 Seeds)', price: 98, oldPrice: 130, discount: '25% OFF', soldBy: 'Organic Life', imageUrl: img11 },
    { id: 1512, name: 'Zinnia Lilliput Mixed Flower Seeds (Pack Of - 30 Seeds)', price: 98, oldPrice: 130, discount: '24% OFF', soldBy: 'Organic Life', imageUrl: img12 },
];


const WinterSeedsPage = () => {
    const { onAddToCart } = useOutletContext();
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Buy Winter Seeds 🌸❄️
                    </h1>
                    <p className="text-sm text-gray-600">
                        Transform your garden into a winter haven with our curated Winter Seeds collection! At NGEGreens.com, we offer a wide variety of seeds perfect for the cooler months, helping you grow vibrant flow...
                    </p>
                    <button className="text-sm font-medium text-green-600 hover:text-green-700 mt-1 inline-block">
                        Read More...
                    </button>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (4-Column Layout) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {winterSeedsProducts.map((product) => (
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

export default WinterSeedsPage;