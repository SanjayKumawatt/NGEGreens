// src/Pages/AboutPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Target, BookOpen, Truck, ShieldCheck, Mail, MapPin } from 'lucide-react'; // Relevant icons

const AboutPage = () => {
    // Header/MegaMenu की वजह से Content को नीचे खिसकाने के लिए पैडिंग
    const topPaddingClass = "";

    const companyDetails = {
        name: 'NGE GREENS PRIVATE LIMITED',
        email: 'order@ngegreens.in', // Assuming this is the contact email
        address: 'House No 15, Floor Ground, Block- Dp Pitampura, Saraswati Vihar, North West Delhi, Delhi, Delhi, India, 110034',
    };

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Page Header */}
                <div className="text-center mb-12">
                    <Leaf className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                        About NGEGreens
                    </h1>
                    <p className="text-xl text-gray-600">
                        Nurturing Greenery, Empowering Gardeners Across India.
                    </p>
                </div>

                {/* Main Content Sections */}
                <div className="bg-white p-8 rounded-lg shadow-md space-y-10">

                    {/* Our Mission */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <Target className="w-6 h-6 mr-2 text-green-600" /> Our Mission
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            At NGEGreens, our mission is simple: to inspire and enable everyone to Grow Fresh, Grow Natural. We believe that connecting with nature through gardening brings joy, health, and sustainability. We are committed to providing the highest quality seeds and gardening resources to help you cultivate a thriving green space, whether it's a small balcony or a sprawling backyard.
                        </p>
                    </section>

                    {/* Our Story */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <BookOpen className="w-6 h-6 mr-2 text-green-600" /> Our Story
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            NGE GREENS PRIVATE LIMITED started with a passion for gardening and a desire to make high-quality, reliable seeds accessible to everyone in India. Frustrated by inconsistent germination rates and limited variety in the market, our founders set out to create a trusted source for seeds. We meticulously test our seeds, partner with ethical growers, and focus on delivering freshness and viability right to your doorstep. Today, we are proud to be a growing community of gardeners sharing the love for planting and harvesting.
                        </p>
                    </section>

                    {/* Why Choose Us */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose NGEGreens?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="flex flex-col items-center p-4">
                                <ShieldCheck className="w-10 h-10 text-green-600 mb-3" />
                                <h3 className="font-semibold text-lg mb-1">Quality & Germination</h3>
                                <p className="text-sm text-gray-600">Hand-picked, lab-tested seeds ensuring high germination rates.</p>
                            </div>
                            <div className="flex flex-col items-center p-4">
                                <Truck className="w-10 h-10 text-green-600 mb-3" />
                                <h3 className="font-semibold text-lg mb-1">Safe & Fast Delivery</h3>
                                <p className="text-sm text-gray-600">Secure packaging and reliable shipping across India.</p>
                            </div>
                            <div className="flex flex-col items-center p-4">
                                <BookOpen className="w-10 h-10 text-green-600 mb-3" />
                                <h3 className="font-semibold text-lg mb-1">Guidance & Support</h3>
                                <p className="text-sm text-gray-600">Expert tips and resources to help your garden flourish.</p>
                            </div>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section className="border-t pt-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Get In Touch</h2>
                        <div className="text-center text-gray-700 space-y-3">
                            <p className="font-semibold">{companyDetails.name}</p>
                            <p className="flex items-center justify-center text-sm">
                                <MapPin className="w-4 h-4 mr-2 text-gray-500" /> {companyDetails.address}
                            </p>
                            <p className="flex items-center justify-center text-sm">
                                <Mail className="w-4 h-4 mr-2 text-gray-500" />
                                <a href={`mailto:${companyDetails.email}`} className="text-green-600 hover:underline">
                                    {companyDetails.email}
                                </a>
                            </p>
                             <p className="pt-4">
                                <Link to="/contact" className="text-green-600 hover:underline font-medium">
                                    Have questions? Contact Us
                                </Link>
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default AboutPage;