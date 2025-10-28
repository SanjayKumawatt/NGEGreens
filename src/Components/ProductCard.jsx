// src/components/ProductCard.jsx

import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <Star
                key={i}
                className={`w-3 h-3 ${i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
            />
        );
    }
    return <div className="flex items-center space-x-0.5">{stars}</div>;
};

// onAddToCart prop को स्वीकार करें
const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-shadow duration-300 hover:shadow-lg relative">
            <Link to={`/product/${product.id}`} className="block">

                {/* Discount Badge */}
                {product.discount && (
                    <span className="absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-md z-10">
                        {product.discount}
                    </span>
                )}



                {/* Product Image Placeholder */}
                <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
                    {product.imageUrl ? (
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        // अगर इमेज नहीं मिली तो Placeholder दिखेगा
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                            No Image
                        </div>
                    )}

                </div>
            </Link>
            <div className="p-3">
                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-800 truncate mb-1">
                    {product.name}
                </h3>

                {/* Sold By */}
                {product.soldBy && (
                    <p className="text-xs text-gray-500 mb-2">
                        Sold By: <span className="text-green-600">{product.soldBy}</span>
                    </p>
                )}

                {/* Price & Add Button Row */}
                <div className="flex justify-between items-center mt-3">
                    {/* Price */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-baseline">
                            <span className="text-lg font-bold text-green-700">₹{product.price}</span>
                            {product.oldPrice && (
                                <span className="text-xs text-gray-400 line-through ml-1">₹{product.oldPrice}</span>
                            )}
                        </div>
                        {renderStars(product.rating)}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        className="flex items-center justify-center px-3 py-1 text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-150 shadow-md"
                        // ADD बटन क्लिक होने पर onAddToCart फंक्शन को कॉल किया गया
                        onClick={() => onAddToCart(product)}
                    >
                        ADD
                    </button>
                </div>
            </div>

        </div >

    );
};

export default ProductCard;