import React from 'react';
import { Instagram, Heart } from 'lucide-react';

// Dummy data for Instagram-style images
const socialImages = [
  { id: 1, caption: "Happy planting in Mumbai! 🌱", likes: 120, tag: "#NGEGgarden" },
  { id: 2, caption: "Our new Marigold seeds are blooming! 🧡", likes: 95, tag: "#FlowerPower" },
  { id: 3, caption: "Fresh tomatoes from our own seeds. Yum! 🍅", likes: 150, tag: "#HomeGrown" },
  { id: 4, caption: "Essential tools for a perfect Sunday morning.", likes: 80, tag: "#GardeningTips" },
];

const SocialFeedSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Instagram className="w-8 h-8 text-pink-600 mx-auto mb-3" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Join Our Growing Community
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Share your green journey with #NGEGreens on Instagram.
          </p>
        </div>

        {/* Social Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {socialImages.map((post) => (
            <a 
              key={post.id} 
              href={`#social-post-${post.id}`} 
              className="group relative block overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Image Placeholder */}
              <div className="h-48 md:h-64 bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
                Image {post.id}
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="text-white text-center p-4">
                  <Heart className="w-5 h-5 inline-block mr-1" fill="white" />
                  <span className="font-bold">{post.likes}</span>
                  <p className="text-sm mt-1">{post.caption}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="mt-16 text-center">
          <a
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 transition duration-150"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialFeedSection;