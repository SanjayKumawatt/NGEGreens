import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Award } from 'lucide-react';

const TrustLogosSection = () => {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: 'Secure Payments',
      description: '100% Secure & Encrypted Checkout.',
    },
    {
      icon: Truck,
      title: 'Fast Shipping',
      description: 'Delivery across India in 3-7 days.',
    },
    {
      icon: RotateCcw,
      title: 'Germination Guarantee',
      description: 'Tested seeds with high-quality promise.',
    },
    {
      icon: Award,
      title: 'Certified Quality',
      description: 'FSSAI/ISO certified growing standards.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800">Why Trust NGEGreens?</h3>
        </div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex flex-col items-center text-center p-3">
              
              {/* Icon */}
              <div className="flex items-center justify-center h-12 w-12 text-green-600 mb-3">
                <point.icon className="h-8 w-8" />
              </div>
              
              {/* Title */}
              <h4 className="text-base font-semibold text-gray-900 mb-1">
                {point.title}
              </h4>
              
              {/* Description */}
              <p className="text-sm text-gray-500">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogosSection;