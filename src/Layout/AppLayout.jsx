// src/Layout/AppLayout.jsx (UPDATED)

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer'; // Assuming Footer is imported/used below
import ScrollToTop from '../Components/ScrollToTop';

const AppLayout = () => {
  // 1. कार्ट आइटम्स array और count state
  const [cartItems, setCartItems] = useState([]);

  // 1. [FIX] handleAddToCart: price को Number में कन्वर्ट करें
  const handleAddToCart = (productToAdd) => {
    // सुनिश्चित करें कि price NUMERIC हो, भले ही यह डेटा में string हो
    const numericPrice = Number(productToAdd.price);

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productToAdd.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // यहाँ price को numericPrice से सेव करें
        return [...prevItems, { ...productToAdd, price: numericPrice, quantity: 1 }];
      }
    });
  };

  // 2. [NEW] handleRemoveFromCart: डिलीट बटन के लिए
  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop/>
      <Header
        cartItemCount={cartCount}
        cartItems={cartItems}
        removeFromCart={handleRemoveFromCart} // 👈 Header को Delete Function पास करें
      />
      {/* ... MegaMenuRow ... */}

      <main className="flex-grow">
        {/* Outlet context के ज़रिए फ़ंक्शन को नीचे पास किया गया */}
        <Outlet context={{ onAddToCart: handleAddToCart }} />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;