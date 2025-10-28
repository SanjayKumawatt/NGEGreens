import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="bg-green-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        
        {/* Left Side: Text Content */}
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to grow your own garden? 🌱</span>
          <span className="block text-green-200 mt-2">Start planting with our premium seed collection today.</span>
        </h2>
        
        {/* Right Side: Button */}
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition duration-300 transform hover:scale-105"
            >
              Explore All Seeds
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;