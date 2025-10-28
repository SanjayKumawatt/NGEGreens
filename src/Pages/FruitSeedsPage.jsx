// src/Pages/FruitSeedsPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

import img1 from "../assets/fruit/img1.avif";
import img2 from "../assets/fruit/img2.webp";
import img3 from "../assets/fruit/img3.avif";
import img4 from "../assets/fruit/img4.avif";
import img5 from "../assets/fruit/img5.avif";
import img6 from "../assets/fruit/img6.avif";
import img7 from "../assets/fruit/img7.avif";
import img8 from "../assets/fruit/img8.avif";
import img9 from "../assets/fruit/img9.avif";
import img10 from "../assets/fruit/img10.avif";
import img11 from "../assets/fruit/img11.webp";
import img12 from "../assets/fruit/img12.avif";
import img13 from "../assets/fruit/img13.avif";
import img14 from "../assets/fruit/img14.avif";
import img15 from "../assets/fruit/img15.avif";
import img16 from "../assets/fruit/img16.avif";
import img17 from "../assets/fruit/img17.avif";
import img18 from "../assets/fruit/img18.avif";

// 👇 STEP 1: Dummy Data based on the image provided - इसे export भी करें
export const fruitSeedsProducts = [
    // Row 1
    { id: 1001, name: 'Organic (F2 Hybrid) Gooseberry/Rasbhari...', price: 89, oldPrice: 150, discount: '40% OFF', soldBy: 'PlantSouk', imageUrl: img1 },
    { id: 1002, name: 'Organic (Seed) Kachari Seeds(Pack Of - 50 Seeds)', price: 59, oldPrice: 150, discount: '60% OFF', soldBy: 'PlantSouk', imageUrl: img2 },
    { id: 1003, name: 'Organic (F2 Hybrid) Strawberry Seeds(Pack Of...', price: 129, oldPrice: 199, discount: '35% OFF', soldBy: 'PlantSouk', imageUrl: img3 },
    { id: 1004, name: 'Organic (Seed) Papaya Seeds (Pack Of - 25 Seeds)', price: 79, oldPrice: 100, discount: '21% OFF', soldBy: 'PlantSouk', imageUrl: img4 },
    // Row 2
    { id: 1005, name: 'Organic (Seed) Watermelon Seeds (Pack Of - 25 Seeds)', price: 59, oldPrice: 150, discount: '60% OFF', soldBy: 'PlantSouk', imageUrl: img5 },
    { id: 1006, name: 'Organic Ashwagandha / Withania Seeds(Pack Of - ...)', price: 109, oldPrice: 199, discount: '45% OFF', soldBy: 'PlantSouk', imageUrl: img6 },
    { id: 1007, name: 'Apple Fruit Seed (Pack Of- 25 Seeds)', price: 98, oldPrice: 100, discount: '2% OFF', soldBy: 'Organic Life', imageUrl: img7 },
    { id: 1008, name: 'Organic (Seed) Muskmelon / Kharbuja Seeds(Pack O...)', price: 59, oldPrice: 150, discount: '60% OFF', soldBy: 'PlantSouk', imageUrl: img8 },
    // Row 3
    { id: 1009, name: 'Organic Guava Fruit Seed (Pack Of - 50 Seeds)', price: 98, oldPrice: 125, discount: '21% OFF', soldBy: 'Organic Life', imageUrl: img9 },
    { id: 1010, name: 'Organic (F2 Hybrid) Baby Corn Seeds (Pack Of 20...)', price: 59, oldPrice: 150, discount: '60% OFF', soldBy: 'PlantSouk', imageUrl: img10 },
    { id: 1011, name: 'Organic (F2 Hybrid) Kachari Seeds (Pack Of - 50 Seeds)', price: 89, oldPrice: 199, discount: '55% OFF', soldBy: 'PlantSouk', imageUrl: img11 },
    { id: 1012, name: 'Custard (Sharifa) Apple Fruit Seed (Pack Of - 25 Seeds)', price: 98, oldPrice: 100, discount: '2% OFF', soldBy: 'Organic Life', imageUrl: img12 },
    // Row 4
    { id: 1013, name: 'Organic (F2 Hybrid) Sweet Corn Seed(Pack Of - 20...)', price: 59, oldPrice: 150, discount: '60% OFF', soldBy: 'PlantSouk', imageUrl: img13 },
    { id: 1014, name: 'Organic Basil Leaf Seeds (Pack Of - 50 Seeds)', price: 109, oldPrice: 199, discount: '45% OFF', soldBy: 'PlantSouk', imageUrl: img14 },
    { id: 1015, name: 'Watermelon Sugarbaby Seeds (Pack Of - 25 Seeds)', price: 98, oldPrice: 120, discount: '17% OFF', soldBy: 'Organic Life', imageUrl: img15 },
    { id: 1016, name: 'Organic (F2 Hybrid) Muskmelon...', price: 89, oldPrice: 199, discount: '55% OFF', soldBy: 'PlantSouk', imageUrl: img16 },
     // Row 5
    { id: 1017, name: 'Organic (F2 Hybrid) Watermelon Seeds (Pack O...)', price: 89, oldPrice: 199, discount: '55% OFF', soldBy: 'PlantSouk', imageUrl: img17 },
    { id: 1018, name: 'Kashmiri Apple Seeds - Sweet (Pack Of - 5 Seeds)', price: 159, oldPrice: 200, discount: '20% OFF', soldBy: 'PlantSouk', imageUrl: img18   },
];


const FruitSeedsPage = () => {
    const { onAddToCart } = useOutletContext();
    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Fruit Seeds 🍓🍉
                    </h1>
                    <p className="text-sm text-gray-600">
                        Welcome to the delightful world of Fruit Seeds at NGEGreens.com! Growing your own fruit-bearing plants is one of the most gratifying and delicious experiences a gardener can have. Whether you're an experienced hor...
                    </p>
                    <button className="text-sm font-medium text-green-600 hover:text-green-700 mt-1 inline-block">
                        Read More...
                    </button>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (4-Column Layout) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {fruitSeedsProducts.map((product) => (
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

export default FruitSeedsPage;