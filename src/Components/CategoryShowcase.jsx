import React from 'react';
import { Link } from 'react-router-dom';
// Lucide Icons for representation
import { Carrot, Flower, Apple, Leaf, Package, FlaskConical,TreeDeciduous, Sun, Sprout } from 'lucide-react';

const categories = [
  { name: 'Vegetable Seeds', icon: Carrot, path: '/seeds/vegetable' },
  { name: 'Flower Seeds', icon: Flower, path: '/seeds/flower' },
  { name: 'Fruit Seeds', icon: Apple, path: '/seeds/tree/fruit-seeds' }, // Replaced Lemon with Apple
  { name: 'Herbal Seeds', icon: Leaf, path: '/seeds/herb' },
  { name: 'Exotic & Rare Seeds', icon: Sprout, path: '/seeds/hybrid' },
  { name: 'Agriculture Seeds', icon: TreeDeciduous, path: '/seeds/agriculture' },
  // { name: 'Tools & Essentials', icon: Package, path: '/shop/tools' },
];

const CategoryShowcase = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Explore Our Best-Selling Collections
          </h2>
          <p className="mt-2 text-xl text-gray-600">
            Find the perfect start for every kind of garden.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6 text-center">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={category.path}
              className="group flex flex-col items-center p-4 transition duration-300 transform hover:scale-105"
            >
              <div className="h-16 w-16 mb-3 flex items-center justify-center rounded-full bg-green-50 group-hover:bg-green-100 transition duration-150">
                <category.icon className="h-8 w-8 text-green-600 group-hover:text-green-700" />
              </div>
              <p className="text-sm font-medium text-gray-700 group-hover:text-green-700">
                {category.name}
              </p>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition duration-150"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
