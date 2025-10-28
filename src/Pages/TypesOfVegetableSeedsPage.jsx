// src/Pages/TypesOfVegetableSeedsPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

import img1 from "../assets/typesofvegetables/img1.avif";
import img2 from "../assets/typesofvegetables/img2.avif";
import img3 from "../assets/typesofvegetables/img3.avif";
import img4 from "../assets/typesofvegetables/img4.avif";
import img5 from "../assets/typesofvegetables/img5.avif";
import img6 from "../assets/typesofvegetables/img6.avif";
import img7 from "../assets/typesofvegetables/img7.avif";
import img8 from "../assets/typesofvegetables/img8.avif";
import img9 from "../assets/typesofvegetables/img9.avif";
import img10 from "../assets/typesofvegetables/img10.avif";
import img11 from "../assets/typesofvegetables/img11.avif";
import img12 from "../assets/typesofvegetables/img12.avif";


// Dummy Data based on the image provided
export const typesOfVegetableProducts = [
    // Row 1
    { id: 301, name: 'Moringa / Drumstick / Sanjan Seeds (Pack Of 10 Seeds)', price: 129, oldPrice: 229, discount: '43% OFF', soldBy: 'PlantSouk', imageUrl: img1 },
    { id: 302, name: 'Organic Sage (Tez patta) Seeds (Pack Of - 15 Seeds)', price: 109, oldPrice: 199, discount: '45% OFF', soldBy: 'PlantSouk', imageUrl: img2 },
    { id: 303, name: 'Organic (F2 Hybrid) Cauliflower Purple...', price: 89, oldPrice: 199, discount: '55% OFF', soldBy: 'PlantSouk', imageUrl: img3 },
    { id: 304, name: 'Organic (F2 Hybrid) Black Carrot Seeds -(Pack Of - S...)', price: 89, oldPrice: 199, discount: '55% OFF', soldBy: 'PlantSouk', imageUrl: img4 },
    // Row 2
    { id: 305, name: 'Organic (F2 Hybrid) Orange Carrot Seeds(Pack Of - 50...)', price: 89, oldPrice: 199, discount: '55% OFF', soldBy: 'PlantSouk', imageUrl: img5 },
    { id: 306, name: 'Organic (F2 Hybrid) White Onion Seeds(Pack Of - 50...)', price: 89, oldPrice: 199, discount: '55% OFF', soldBy: 'PlantSouk', imageUrl: img6 },
    { id: 307, name: 'Organic (F2 Hybrid) Turnip Yellow Seeds(Pack Of - 40...)', price: 89, oldPrice: 199, discount: '55% OFF', soldBy: 'PlantSouk', imageUrl: img7 },
    { id: 308, name: 'Organic (F2 Hybrid) Onion Seeds(Pack Of - 50 Seeds)', price: 89, oldPrice: 103, discount: '13% OFF', soldBy: 'PlantSouk', imageUrl: img8 },
    // Row 3
    { id: 309, name: 'Organic (F2 Hybrid) Beetroot/Chukandar...', price: 89, oldPrice: 195, discount: '54% OFF', soldBy: 'PlantSouk', imageUrl: img9 },
    { id: 310, name: 'Organic (F2 Hybrid) Turnip Red Seeds(Pack Of - 50...)', price: 89, oldPrice: 195, discount: '54% OFF', soldBy: 'PlantSouk', imageUrl: img10 },
    { id: 311, name: 'F2 Hybrid Kakdi/Long Melon - Armenian Cucumb...', price: 89, oldPrice: 229, discount: '61% OFF', soldBy: 'PlantSouk', imageUrl: img11 },
    { id: 312, name: 'Organic (F2 Hybrid) Carrot/Gajar Seeds(Pack O...)', price: 89, oldPrice: 225, discount: '60% OFF', soldBy: 'PlantSouk', imageUrl: img12 },
    // You can add more products here
];


const TypesOfVegetableSeedsPage = () => {
    // AppLayout से onAddToCart फ़ंक्शन को एक्सेस करें
    const { onAddToCart } = useOutletContext();

    // Header/MegaMenu की वजह से Content को नीचे खिसकाने के लिए पैडिंग
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Types Of Vegetable Seeds
                    </h1>
                    <p className="text-sm text-gray-600">
                        Choosing the right vegetable seeds is the first step toward a successful and thriving garden. At NGEGreens.com, we offer a wide range of high-quality vegetable seeds to cater to every gardener's needs. W...
                    </p>
                    <button className="text-sm font-medium text-green-600 hover:text-green-700 mt-1 inline-block">
                        Read More...
                    </button>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (4-Column Layout) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {typesOfVegetableProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart} // Add to cart functionality passed
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TypesOfVegetableSeedsPage;