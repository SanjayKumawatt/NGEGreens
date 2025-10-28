// src/Pages/CartPage.jsx

import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { ShoppingCart, Trash2, ArrowLeft, Minus, Plus } from 'lucide-react'; // Icons

const CartPage = () => {
    // 1. AppLayout से cartItems और removeFromCart फ़ंक्शन एक्सेस करें
    // Note: आपको updateQuantity फंक्शन भी बनाना होगा AppLayout में
    const { cartItems = [], removeFromCart, updateQuantity } = useOutletContext();

    // Header/MegaMenu पैडिंग
    const topPaddingClass = "";

    // Calculate Subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    // Dummy function for updating quantity (Needs implementation in AppLayout)
    const handleUpdateQuantity = (productId, newQuantity) => {
        if (updateQuantity) {
            updateQuantity(productId, newQuantity);
        } else {
            console.warn("updateQuantity function is not provided from AppLayout");
        }
    };


    return (
        <div className={`min-h-screen bg-gray-100 ${topPaddingClass}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Page Header */}
                <div className="text-center mb-10">
                    <ShoppingCart className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                        Your Shopping Cart
                    </h1>
                </div>

                {/* Cart Content */}
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                    {cartItems.length === 0 ? (
                        // A. Empty Cart View
                        <div className="text-center py-10">
                            <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-xl font-semibold text-gray-700">Your cart is currently empty.</p>
                            <p className="text-gray-500 mt-2 mb-6">Looks like you haven't added anything to your cart yet.</p>
                            <Link
                                to="/shop"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2 -ml-1" />
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        // B. Cart Items View
                        <div>
                            {/* Cart Items List */}
                            <div className="space-y-6 border-b border-gray-200 pb-6 mb-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                                        {/* Product Info */}
                                        <div className="flex items-start mb-4 sm:mb-0">
                                            <div className="w-20 h-20 bg-gray-200 rounded mr-4 flex-shrink-0 overflow-hidden">
                                                {item.imageUrl ? (
                                                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">N/A</div>
                                                )}
                                            </div>
                                            <div className="min-w-0">
                                                <h3 className="text-base font-semibold text-gray-800 line-clamp-2">{item.name}</h3>
                                                <p className="text-sm text-green-600 mt-1">₹{item.price.toFixed(2)}</p>
                                                <p className="text-xs text-gray-500">Sold By: {item.soldBy || 'NGEGreens'}</p>
                                            </div>
                                        </div>

                                        {/* Quantity & Remove */}
                                        <div className="flex items-center space-x-4 w-full sm:w-auto justify-between">
                                             {/* Quantity Control */}
                                            <div className="flex items-center border border-gray-300 rounded-md">
                                                <button
                                                    onClick={() => handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                    className="p-1.5 hover:bg-gray-100 disabled:opacity-50"
                                                    disabled={item.quantity <= 1} // Disable minus if quantity is 1
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="px-3 text-sm font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                                    className="p-1.5 hover:bg-gray-100"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                            {/* Item Total */}
                                            <p className="text-base font-semibold text-gray-900 w-20 text-right">
                                                ₹{(item.price * item.quantity).toFixed(2)}
                                            </p>
                                            {/* Remove Button */}
                                            <button
                                                onClick={() => removeFromCart && removeFromCart(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition"
                                                aria-label={`Remove ${item.name}`}
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Cart Summary & Actions */}
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <Link
                                    to="/shop"
                                    className="text-green-600 hover:underline font-medium mb-4 md:mb-0 flex items-center"
                                >
                                     <ArrowLeft className="w-4 h-4 mr-1" />
                                    Continue Shopping
                                </Link>
                                <div className="text-right w-full md:w-auto">
                                    <p className="text-lg font-bold text-gray-900">
                                        Subtotal: ₹{subtotal.toFixed(2)}
                                    </p>
                                    <p className="text-sm text-gray-500">Shipping & taxes calculated at checkout.</p>
                                    <Link
                                        to="/checkout" // Link to your checkout page
                                        className="mt-4 inline-block w-full md:w-auto px-8 py-3 bg-green-600 text-white font-semibold text-center rounded-md hover:bg-green-700 transition shadow-md"
                                    >
                                        Proceed to Checkout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartPage;