// src/Pages/ShopPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

// 👇 STEP 1: Import ALL product data arrays
import { sliderProducts as vegetableSliderData } from '../Components/ProductSliderSection';
import { flowerSliderProducts as flowerSliderData } from '../Components/FlowerSeedsSlider';
import { typesOfVegetableProducts } from './TypesOfVegetableSeedsPage';
import { vegetableSeedsSeasonWiseProducts } from './VegetableSeedsSeasonWisePage';
import { vegetableSeedsComboProducts } from './VegetableSeedsComboPage';
import { flowerProducts as generalFlowerData } from './FlowerSeedsPage';
import { flowerSeedsOpDesiProducts } from './FlowerSeedsOpDesiPage';
// Empty arrays (still import for consistency if needed, or omit)
// import { flowerSeedsHybridProducts } from './FlowerSeedsHybridPage';
// import { floweringTreeShrubProducts } from './FloweringTreeShrubSeedsPage';
// import { fragrantFlowerProducts } from './FragrantFlowerSeedsPage';
import { annualFlowerProducts } from './AnnualFlowerSeedsPage';
import { perennialFlowerProducts } from './PerennialFlowerSeedsPage';
// import { treeSeedsProducts } from './TreeSeedsPage';
// import { fruitSeedsProducts } from './FruitSeedsPage';
// import { grassSeedsProducts } from './GrassSeedsPage';
// import { seedBallsProducts } from './SeedBallsPage';
// import { palmSeedsProducts } from './PalmSeedsPage';
// import { avenueTreeProducts } from './AvenueTreeSeedsPage';
// import { coniferSeedsProducts } from './ConiferSeedsPage';
// import { shrubSeedsProducts } from './ShrubSeedsPage';
import { herbSeedsProducts } from './HerbSeedsPage';
// import { herbSeedsOpDesiProducts } from './HerbSeedsOpDesiPage';
// import { herbSeedsOrganicProducts } from './HerbSeedsOrganicPage';
// import { herbSeedsHeirloomProducts } from './HerbSeedsHeirloomPage';
// import { herbSeedsHybridProducts as herbHybridData } from './HerbSeedsHybridPage'; // Renamed to avoid conflict
import { aromaticHerbProducts } from './AromaticHerbSeedsPage';
import { culinaryHerbProducts } from './CulinaryHerbSeedsPage';
import { seedsBySeasonProducts } from './SeedsBySeasonPage';
// import { allSeasonSeedsProducts } from './AllSeasonSeedsPage';
import { winterSeedsProducts } from './WinterSeedsPage';
import { summerSeedsProducts } from './SummerSeedsPage';
import { agricultureSeedsProducts } from './AgricultureSeedsPage';
import { hybridSeedsProducts as generalHybridData } from './HybridSeedsPage'; // Renamed to avoid conflict


// 👇 STEP 2: Combine all product arrays into one
const allShopProducts = [
    ...vegetableSliderData,
    ...flowerSliderData,
    ...typesOfVegetableProducts,
    ...vegetableSeedsSeasonWiseProducts,
    ...vegetableSeedsComboProducts,
    ...generalFlowerData,
    ...flowerSeedsOpDesiProducts,
    // ... (include empty arrays if needed, or omit)
    ...annualFlowerProducts,
    ...perennialFlowerProducts,
    ...herbSeedsProducts,
    ...aromaticHerbProducts,
    ...culinaryHerbProducts,
    ...seedsBySeasonProducts,
    ...winterSeedsProducts,
    ...summerSeedsProducts,
    ...agricultureSeedsProducts,
    ...generalHybridData,
    // Add any other product arrays here
];

// Optional: Remove duplicate products if IDs might overlap across arrays
const uniqueShopProducts = Array.from(new Map(allShopProducts.map(item => [item.id, item])).values());


const ShopPage = () => {
    const { onAddToCart } = useOutletContext();
    const topPaddingClass = "";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 pt-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Shop All Seeds & Gardening Supplies
                    </h1>
                    <p className="text-sm text-gray-600">
                        Browse our complete collection of high-quality seeds, fertilizers, tools, and accessories for every gardener.
                    </p>
                    <hr className="mt-4 border-gray-200" />
                </div>

                {/* Products Grid (4-Column Layout) */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-16">
                    {uniqueShopProducts.length > 0 ? (
                        uniqueShopProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAddToCart={onAddToCart}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-gray-500">
                            No products available in the shop yet. Please check back soon!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShopPage;