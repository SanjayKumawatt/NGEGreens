import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4 sm:px-6 lg:px-8">
      
      {/* 404 Code and Heading */}
      <p className="text-6xl sm:text-7xl font-extrabold text-green-600 mb-4">404</p>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
        Page Not Found
      </h1>
      
      {/* Description */}
      <p className="text-lg text-gray-500 max-w-md mb-8">
        Oops! The page you are looking for does not exist or has been moved. 
        It might have been lost in the garden.
      </p>
      
      {/* Action Button */}
      <div className="flex space-x-4">
        <Link
          to="/"
          className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition duration-150"
        >
          Go back to Home
        </Link>
        <Link
          to="/shop"
          className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition duration-150"
        >
          Check out the Shop
        </Link>
      </div>
    </div>
  );
};

export default NotFound;