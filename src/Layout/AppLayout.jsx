// src/Layout/AppLayout.jsx (FIXED)
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // 👈 Important CSS import

const AppLayout = () => {
  // 1. Cart state
  const [cartItems, setCartItems] = useState([]);

  // ✅ FIXED: handleAddToCart
  const handleAddToCart = (productToAdd) => {
    const numericPrice = Number(productToAdd.price); // ensure numeric price

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productToAdd.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...productToAdd, price: numericPrice, quantity: 1 }];
      }
    });

    // ✅ toast notification placed correctly inside function
    toast.success(`${productToAdd.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // 2. Remove item
  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // 3. Update quantity
  const handleUpdateQuantity = (productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item
      )
    );
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />

      <Header
        cartItemCount={cartCount}
        cartItems={cartItems}
        removeFromCart={handleRemoveFromCart}
      />

      <main className="flex-grow">
        <Outlet
          context={{
            cartItems,
            onAddToCart: handleAddToCart,
            removeFromCart: handleRemoveFromCart,
            updateQuantity: handleUpdateQuantity,
          }}
        />
      </main>

      <Footer />

      {/* 👇 ToastContainer for notifications */}
      <ToastContainer />
    </div>
  );
};

export default AppLayout;
