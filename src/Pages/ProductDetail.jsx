// src/Pages/ProductDetail.jsx (Loading State REMOVED)

import React, { useState, useEffect } from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { Truck, Shield, ShoppingCart, Heart, Minus, Plus, ChevronDown, CheckCircle } from 'lucide-react';
import { sliderProducts as vegetableSeedsData } from '../Components/ProductSliderSection';
import { flowerSliderProducts as flowerSeedsData } from '../Components/FlowerSeedsSlider'; // 👈 Flower data इम्पोर्ट करें
import { vegetableProducts as vg } from './VegetableSeedsPage';
import { typesOfVegetableProducts as specificVegetableData } from './TypesOfVegetableSeedsPage';
import { vegetableSeedsSeasonWiseProducts as seasonWiseData } from './VegetableSeedsSeasonWisePage'; // 👈 नया डेटा इम्पोर्ट करें
import { vegetableSeedsComboProducts as comboData } from './VegetableSeedsComboPage'; // 👈 नया डेटा इम्पोर्ट करें
import { flowerProducts as generalFlowerData } from './FlowerSeedsPage'; // 👈 नया फ्लावर डेटा इम्पोर्ट करें
import { flowerSeedsOpDesiProducts as opDesiFlowerData } from './FlowerSeedsOpDesiPage'; // 👈 नया डेटा इम्पोर्ट करें
import { annualFlowerProducts as annualData } from './AnnualFlowerSeedsPage'; // 👈 नया डेटा इम्पोर्ट करें
import { perennialFlowerProducts as perennialData } from './PerennialFlowerSeedsPage'; // 👈 नया डेटा इम्पोर्ट करें
import { fruitSeedsProducts as fruitData } from './FruitSeedsPage'; // 👈 नया डेटा इम्पोर्ट करें
import { herbSeedsProducts as herbData } from './HerbSeedsPage'; // 👈 नया डेटा इम्पोर्ट करें
import { aromaticHerbProducts as aromaticData } from './AromaticHerbSeedsPage'; // 👈 नया डेटा इम्पोर्ट करें
import { culinaryHerbProducts as culinaryData } from './CulinaryHerbSeedsPage'; // 👈 नया डेटा इम्पोर्ट करें
import { seedsBySeasonProducts as seasonData } from './SeedsBySeasonPage'; // 👈 नया डेटा इम्पोर्ट करें
import { winterSeedsProducts as winterData } from './WinterSeedsPage'; // 👈 नया डेटा इम्पोर्ट करें
import { summerSeedsProducts as summerData } from './SummerSeedsPage'; // 👈 नया डेटा इम्पोर्ट करें
import { agricultureSeedsProducts as agricultureData } from './AgricultureSeedsPage'; // 👈 नया डेटा इम्पोर्ट करें
import { hybridSeedsProducts as hybridData } from './HybridSeedsPage'; // 👈 नया डेटा इम्पोर्ट करें


// 👇 STEP 3: दोनों एरे को कम्बाइन करें
const ALL_PRODUCTS_DATA = [...vegetableSeedsData, ...flowerSeedsData, ...vg, ...specificVegetableData, ...seasonWiseData, ...comboData, ...generalFlowerData, ...opDesiFlowerData, ...annualData, ...perennialData, ...fruitData, ...herbData, ...aromaticData, ...culinaryData,...summerData, ...seasonData, ...winterData, ...agricultureData, ...hybridData];
// Note: अगर और भी श्रेणियां हैं, तो उनका डेटा भी यहाँ जोड़ें।
const getProductById = (id) => {
    const numericId = parseInt(id, 10);
    return ALL_PRODUCTS_DATA.find(p => p.id === numericId);
}

const ProductDetail = () => {
    const { productId } = useParams();
    const { onAddToCart } = useOutletContext();
    const [product, setProduct] = useState(null); // Initial state is null
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);

    useEffect(() => {
        const foundProduct = getProductById(productId);
        if (foundProduct) {
            setProduct(foundProduct);
            setQuantity(1);
            setIsWishlisted(false);
        } else {
            console.error("Product not found for ID:", productId);
            setProduct(null);
        }
    }, [productId]);

    const topPaddingClass = "pt-32 md:pt-[150px] lg:pt-[180px]";

    const accordions = [
        // ... (Accordion data) ...
    ];

    const handleAddToCart = () => {
        if (!product) return;
        onAddToCart({ ...product, quantity: quantity });
        console.log(`${quantity} x ${product.name} added to cart state.`);
    };
    const handleWishlistToggle = () => {
        setIsWishlisted(prev => !prev);
    };

    // --- JSX (Removed the loading state check) ---
    // We use optional chaining (?.) to prevent errors if 'product' is null initially
    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-10 bg-white p-6 rounded-lg shadow-md">
                    {/* Left Column: Single Main Image */}
                    <div className="flex justify-center items-start relative">
                        <div className="flex-grow overflow-hidden rounded-lg">
                            <img src={product?.imageUrl} alt={product?.name} className="w-full object-contain bg-gray-100" /> {/* Added fallback bg */}
                            {product?.discount && (
                                <span className="absolute top-2 left-2 px-3 py-1 text-sm font-bold text-white bg-red-500 rounded">
                                    {product.discount}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Details and Actions */}
                    <div className="mt-8 lg:mt-0 space-y-4">
                        <h1 className="text-2xl font-bold text-gray-900">{product?.name || 'Product Name'}</h1> {/* Fallback text */}
                        <p className="text-sm text-gray-500">Sold By: <span className="text-green-600 font-medium">{product?.soldBy || 'N/A'}</span></p> {/* Fallback text */}
                        <div className="flex items-baseline space-x-2 border-b pb-4">
                            <span className="text-3xl font-bold text-gray-900">₹{product?.price || 0}</span> {/* Fallback price */}
                            {product?.mrp && <span className="text-lg text-gray-500 line-through">MRP ₹{product.mrp}</span>}
                            {product?.discount && <span className="text-lg text-red-600 font-semibold">({product.discount})</span>}
                        </div>
                        {/* ... (Quantity, Buttons, Delivery, Accordion code - use product?.property where needed) ... */}
                         {/* Quantity and Action Buttons */}
                        <div className="flex items-center space-x-4">
                            {/* Quantity Control */}
                            <div className="flex items-center border border-gray-300 rounded-md">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2 hover:bg-gray-100"><Minus className="w-4 h-4" /></button>
                                <span className="px-4 text-lg font-medium">{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)} className="p-2 hover:bg-gray-100"><Plus className="w-4 h-4" /></button>
                            </div>

                            {/* Action Buttons */}
                            <button
                                onClick={handleAddToCart}
                                disabled={!product} // Disable button if product is null
                                className={`flex items-center justify-center px-6 py-3 font-semibold rounded-md transition ${!product ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}
                            >
                                <ShoppingCart className="w-5 h-5 mr-2" />
                                Add to Cart
                            </button>

                            {/* Wishlist Button */}
                            <button
                                onClick={handleWishlistToggle}
                                disabled={!product}
                                className={`p-3 border rounded-md transition ${!product ? 'text-gray-400 cursor-not-allowed' : isWishlisted ? 'border-red-500 text-red-500 bg-red-50 hover:bg-red-100' : 'border-gray-300 text-gray-500 hover:bg-gray-100'}`}
                            >
                                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500' : 'fill-none'}`} />
                            </button>
                        </div>
                         {/* Return Policy */}
                        <div className="text-sm text-red-600 pt-2 border-b pb-4">
                            {product?.isReturnable ? 'Returnable' : 'Non Returnable'}
                        </div>

                        {/* Delivery and Pincode */}
                        <div className="flex items-center space-x-2 border-b pb-4">
                            <Truck className="w-5 h-5 text-gray-500" />
                            <span className="font-medium text-gray-700">Delivery</span>
                            <input type="text" placeholder="Enter Pincode" className="ml-4 p-2 border border-gray-300 rounded-md w-32 text-sm" />
                            <button className="text-green-600 font-medium text-sm hover:text-green-700">Check</button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex space-x-4 text-sm text-gray-600 border-b pb-4">
                            <div className="flex items-center space-x-1"><CheckCircle className="w-4 h-4 text-green-500" /><span>Gift Assured</span></div>
                            <div className="flex items-center space-x-1"><Shield className="w-4 h-4 text-blue-500" /><span>Refund/replacement guidelines</span></div>
                        </div>

                        {/* Accordion Product Information */}
                        {/* <div className="space-y-3 pt-4">
                            <h3 className="text-lg font-bold">Product Information</h3>
                            {accordions.map((item) => (
                                <div key={item.key} className="border border-gray-200 rounded-md">
                                    <button
                                        className="w-full flex justify-between items-center p-4 font-semibold text-gray-700 hover:bg-gray-50 transition"
                                        onClick={() => setActiveAccordion(activeAccordion === item.key ? null : item.key)}
                                    >
                                        {item.title}
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeAccordion === item.key ? 'rotate-180' : 'rotate-0'}`} />
                                    </button>
                                    {activeAccordion === item.key && (
                                        <div className="p-4 pt-0 text-sm text-gray-600 border-t border-gray-100">
                                            {item.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;