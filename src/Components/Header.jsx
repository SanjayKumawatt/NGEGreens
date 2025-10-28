import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Trash2 icon को import किया गया है
import { Menu, X, ShoppingCart, ChevronDown, ChevronUp, Trash2, Heart } from 'lucide-react';
import logo from "../assets/logo.png";
import MegaMenuRow from './MegaMenu';

// cartItems और removeFromCart प्रॉप्स को स्वीकार करें
// Note: removeFromCart फंक्शन AppLayout से आना चाहिए।
const Header = ({ cartItemCount = 0, cartItems = [], removeFromCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(false); // for mobile mega menu toggle

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
  ];

  // Subtotal Calculation (ड्रॉअर फुटर के लिए)
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);


  return (
    <>
      {/* HEADER */}
      <header className="bg-white border-b border-gray-100 shadow-sm fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-25">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-gray-900 hover:text-green-700 transition duration-150">
                <img src={logo} className="h-28" alt="Logo" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-base text-gray-700 hover:text-green-700 font-medium transition duration-150"
                >
                  {link.name}
                </Link>
              ))}

              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center text-gray-700 hover:text-green-700 font-medium transition duration-150 group"
              >
                <span className="text-base mr-1">Cart</span>
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-3 left-8 sm:left-10 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Separator */}
              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>

              {/* Auth Buttons */}
              <div className="flex space-x-4">
                <Link
                  to="/login"
                  className="text-base text-gray-700 hover:text-green-700 font-medium transition duration-150"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-3 py-1 text-base font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition duration-150"
                >
                  Sign Up
                </Link>
              </div>
            </nav>

            {/* Mobile Icons */}
            <div className="flex items-center space-x-4 md:hidden">
              {/* Cart Icon (moved next to menu) */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-gray-700 hover:text-green-700"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Menu Icon */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-700 hover:text-green-700"
              >
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MEGA MENU BELOW HEADER (desktop only) */}
      <div className="pt-[110px] hidden md:block">
        <MegaMenuRow />
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}>
          <div
            className="absolute top-0 left-0 w-3/4 max-w-sm h-full bg-white p-6 shadow-lg overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-green-700 font-medium"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mega Menu Toggle (for mobile) */}
              <button
                onClick={() => setOpenMegaMenu(!openMegaMenu)}
                className="flex justify-between items-center text-gray-800 font-semibold hover:text-green-700"
              >
                All Categories
                {openMegaMenu ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {/* Mobile Mega Menu Items */}
              {openMegaMenu && (
                <div className="mt-2 ml-2 space-y-3 border-l border-gray-200 pl-3">
                  <MegaMenuRow isMobile closeMenu={() => setIsMenuOpen(false)} />
                </div>
              )}

              <hr className="my-4" />
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-green-700 font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2 bg-green-600 text-white rounded-md text-center hover:bg-green-700 transition"
              >
                Sign Up
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      <div
        className={`fixed inset-0 z-[60] flex justify-end bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setIsCartOpen(false)}
      >
        <div
          className={`w-full sm:w-[400px] bg-white h-full p-6 shadow-xl relative transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="flex justify-between items-center pb-4 border-b border-gray-100 sticky top-0 bg-white z-10">
            <h2 className="text-xl font-semibold text-gray-900">Your Shopping Bag ({cartItemCount})</h2>
            <button onClick={() => setIsCartOpen(false)}><X className="h-6 w-6 text-gray-700" /></button>
          </div>

          {/* Cart Content: Conditional Rendering */}
          {cartItems.length === 0 ? (
            // A. Cart is Empty 
            <div className="flex flex-col items-center justify-center h-[80%] text-gray-500">
              <ShoppingCart className="h-16 w-16 text-gray-400 mb-4" />
              <p className="text-base font-medium">Your bag is empty</p>
            </div>
          ) : (
            // B. Products are Present 
            <div className="flex flex-col h-full">
              {/* Scrollable Items List */}
              <div className="flex-grow overflow-y-auto py-4 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-start border-b pb-4 last:border-b-0">

                    {/* Product Image Placeholder */}
                    <div className="w-16 h-16 bg-gray-200 rounded mr-4 flex-shrink-0 overflow-hidden">
                      {/* 👇 FIX: Image URL का उपयोग करें */}
                      {item.imageUrl ? (
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                          N/A
                        </div>
                      )}
                    </div>

                    <div className="flex-grow min-w-0">
                      <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{item.name}</h3>
                      {/* Price अब number है, इसलिए calculation सही होगा */}
                      <p className="text-sm text-green-600 mt-1">₹{(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>

                    {/* Remove Button (पहले ही removeFromCart से जुड़ चुका है) */}
                    <button
                      onClick={() => removeFromCart && removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition ml-2 flex-shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Checkout Footer (sticky) */}
              <div className="mt-auto pt-4 border-t border-gray-200 bg-white">
                <div className="flex justify-between font-bold text-lg mb-4">
                  <span>Subtotal:</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <Link
                  to="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full block text-center py-3 mb-10 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;