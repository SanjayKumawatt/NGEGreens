import React from 'react';
import { Quote, Star } from 'lucide-react';

// Dummy Testimonials Data
const testimonials = [
  {
    id: 1,
    review: "The germination rate was truly exceptional! My balcony garden is now thriving with the Tomato and Mint seeds I bought here. Highly recommend NGEGreens.",
    name: "Priya Sharma",
    city: "Mumbai",
    rating: 5,
  },
  {
    id: 2,
    review: "Excellent packaging and quick delivery across states. The Flower Seeds sprouted quickly, and the guidance booklet was extremely helpful for a beginner like me.",
    name: "Rajesh Kumar",
    city: "Bangalore",
    rating: 5,
  },
  {
    id: 3,
    review: "I've tried many seed brands, but the quality here is unmatched. The Herb Seeds are very aromatic. A reliable source for every gardener.",
    name: "Fatima Khan",
    city: "Delhi",
    rating: 4,
  },
];

const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <Star
                key={i}
                className={`w-5 h-5 ${
                    i <= rating ? 'text-green-500 fill-green-500' : 'text-gray-300'
                }`}
            />
        );
    }
    return <div className="flex items-center space-x-0.5">{stars}</div>;
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Quote className="w-10 h-10 text-green-600 mx-auto mb-3" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Our Gardeners Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Trusted by a growing community of plant enthusiasts.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col h-full">
              
              {/* Rating */}
              <div className="mb-3">{renderStars(testimonial.rating)}</div>

              {/* Review Text */}
              <p className="text-gray-700 italic flex-grow">
                "{testimonial.review}"
              </p>
              
              {/* Reviewer Info */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-lg font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-green-600">{testimonial.city}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialsSection;