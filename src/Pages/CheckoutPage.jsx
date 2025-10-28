// src/Pages/CheckoutPage.jsx

import React, { useState } from 'react';
import { useOutletContext, Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, MapPin, CreditCard, Lock, ArrowLeft } from 'lucide-react'; // Icons

const CheckoutPage = () => {
    // AppLayout से cartItems को एक्सेस करें
    const { cartItems = [] } = useOutletContext();
    const navigate = useNavigate();

    // Header/MegaMenu padding
    const topPaddingClass = "";

    // State for form inputs (Basic)
    const [shippingInfo, setShippingInfo] = useState({
        name: '', address: '', city: '', pincode: '', phone: ''
    });
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '', expiry: '', cvv: ''
    });
    const [error, setError] = useState('');

    // Calculate Subtotal and Total
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shippingCost = subtotal > 500 ? 0 : 40; // Example: Free shipping over 500
    const total = subtotal + shippingCost;

    const handleInputChange = (e, section) => {
        const { name, value } = e.target;
        if (section === 'shipping') {
            setShippingInfo(prev => ({ ...prev, [name]: value }));
        } else if (section === 'payment') {
            setPaymentInfo(prev => ({ ...prev, [name]: value }));
        }
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setError('');

        // --- Dummy Order Placement Logic ---
        // Basic validation
        if (!shippingInfo.name || !shippingInfo.address || !shippingInfo.pincode || !shippingInfo.phone) {
            setError('Please fill in all required shipping details.');
            return;
        }
        // Add more validation for payment if needed

        console.log("Placing Order with:", { shippingInfo, paymentInfo, cartItems, total });
        alert("Order Placed Successfully! (Dummy)");
        // TODO: Clear cart state in AppLayout (Need a function from context)
        // clearCart();
        navigate('/'); // Redirect to home after order
        // --- End Dummy Logic ---
    };

    return (
        <div className={`min-h-screen bg-gray-100 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Page Header */}
                <div className="text-center mb-10">
                    <ShoppingBag className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                        Checkout
                    </h1>
                </div>

                {/* Checkout Grid (Forms on Left, Summary on Right) */}
                <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Shipping & Payment Forms */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Shipping Address Form */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                <MapPin className="w-5 h-5 mr-2 text-green-600" /> Shipping Address
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                    <input type="text" name="name" id="name" required value={shippingInfo.name} onChange={(e) => handleInputChange(e, 'shipping')} className="w-full input-field" placeholder="John Doe"/>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                    <input type="tel" name="phone" id="phone" required value={shippingInfo.phone} onChange={(e) => handleInputChange(e, 'shipping')} className="w-full input-field" placeholder="10-digit mobile number"/>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                                    <input type="text" name="address" id="address" required value={shippingInfo.address} onChange={(e) => handleInputChange(e, 'shipping')} className="w-full input-field" placeholder="House No, Street Name"/>
                                </div>
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                                    <input type="text" name="city" id="city" required value={shippingInfo.city} onChange={(e) => handleInputChange(e, 'shipping')} className="w-full input-field" placeholder="e.g., Jaipur"/>
                                </div>
                                <div>
                                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
                                    <input type="text" name="pincode" id="pincode" required value={shippingInfo.pincode} onChange={(e) => handleInputChange(e, 'shipping')} className="w-full input-field" placeholder="6-digit pincode"/>
                                </div>
                            </div>
                        </div>

                        {/* Payment Details Form (Dummy) */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                <CreditCard className="w-5 h-5 mr-2 text-green-600" /> Payment Details (Dummy)
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                                    <input type="text" name="cardNumber" id="cardNumber" value={paymentInfo.cardNumber} onChange={(e) => handleInputChange(e, 'payment')} className="w-full input-field" placeholder="•••• •••• •••• ••••"/>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                                        <input type="text" name="expiry" id="expiry" value={paymentInfo.expiry} onChange={(e) => handleInputChange(e, 'payment')} className="w-full input-field" placeholder="MM/YY"/>
                                    </div>
                                    <div>
                                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                                        <input type="text" name="cvv" id="cvv" value={paymentInfo.cvv} onChange={(e) => handleInputChange(e, 'payment')} className="w-full input-field" placeholder="•••"/>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 flex items-center"><Lock className="w-3 h-3 mr-1"/> Your payment information is secure.</p>
                            </div>
                        </div>

                          {/* Error Message Display */}
                         {error && (
                            <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                                {error}
                            </div>
                         )}

                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-md sticky top-32"> {/* Sticky for desktop */}
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3">Order Summary</h2>

                            {/* Cart Items Mini List */}
                            <div className="space-y-3 max-h-60 overflow-y-auto mb-4 pr-2">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex justify-between items-center text-sm">
                                        <div className="flex items-center min-w-0">
                                            <img src={item.imageUrl || '/placeholder.png'} alt={item.name} className="w-10 h-10 object-cover rounded mr-3 flex-shrink-0"/>
                                            <div className="min-w-0">
                                                <p className="text-gray-800 font-medium truncate">{item.name}</p>
                                                <p className="text-gray-500 text-xs">Qty: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-800 font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                                {cartItems.length === 0 && <p className="text-gray-500 text-sm">Your cart is empty.</p>}
                            </div>

                            {/* Cost Summary */}
                            <div className="space-y-2 border-t pt-4">
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Subtotal</span>
                                    <span>₹{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Shipping</span>
                                    <span>{shippingCost === 0 ? 'Free' : `₹${shippingCost.toFixed(2)}`}</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold text-gray-900 border-t pt-2 mt-2">
                                    <span>Total</span>
                                    <span>₹{total.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Place Order Button */}
                            <button
                                type="submit"
                                disabled={cartItems.length === 0} // Disable if cart is empty
                                className={`w-full mt-6 py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white transition duration-150 ${cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'}`}
                            >
                                Place Order
                            </button>
                             <Link to="/cart" className="mt-4 text-sm text-green-600 hover:underline flex items-center justify-center">
                                <ArrowLeft className="w-4 h-4 mr-1"/>
                                Back to Cart
                             </Link>
                        </div>
                    </div>

                </form>
            </div>
            {/* Simple CSS for input fields */}
            <style jsx>{`
                .input-field {
                    appearance: none;
                    border: 1px solid #d1d5db; /* gray-300 */
                    padding: 0.75rem 0.75rem; /* py-2 px-3 */
                    border-radius: 0.375rem; /* rounded-md */
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
                    width: 100%;
                }
                .input-field:focus {
                    outline: none;
                    border-color: #10b981; /* green-500 */
                    box-shadow: 0 0 0 1px #10b981; /* ring-1 ring-green-500 */
                }
            `}</style>
        </div>
    );
};

export default CheckoutPage;