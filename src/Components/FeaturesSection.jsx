import React from 'react';
// Use the actual exported icon names from lucide-react
import { Sprout, PackageOpen, BookOpen } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Sprout,
      title: 'High Germination Rate',
      description: 'Our seeds are laboratory-tested and hand-picked to ensure maximum germination, giving you a greater chance of a healthy harvest.',
    },
    {
      icon: PackageOpen,
      title: 'Safe & Secure Delivery',
      description: 'Every packet is carefully sealed and shipped with safe packaging, ensuring your seeds reach you fresh, fast, and ready to plant.',
    },
    {
      icon: BookOpen,
      title: 'Expert Planting Guidance',
      description: 'Get access to our detailed growing guides and expert tips for every seed variety, making your gardening journey easy and successful.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Why Choose NGEGreens?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Commitment to Quality, Delivery, and Support.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-6">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-base text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
