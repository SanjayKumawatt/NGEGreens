// src/Pages/ContactPage.jsx

import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react'; // Icons for contact details and button

const ContactPage = () => {
    // Header/MegaMenu की वजह से Content को नीचे खिसकाने के लिए पैडिंग
    const topPaddingClass = "";

    const companyDetails = {
        name: 'NGE GREENS PRIVATE LIMITED',
        email: 'order@ngegreens.in',
        address: 'House No 15, Floor Ground, Block- Dp Pitampura, Saraswati Vihar, North West Delhi, Delhi, Delhi, India, 110034',
    };

    // State for form inputs (optional, for basic form handling)
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a backend or email service
        console.log("Form Submitted:", formData);
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({ name: '', email: '', message: '' }); // Clear form
    };

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Page Header */}
                <div className="text-center mb-12">
                    <Mail className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-600">
                        We'd love to hear from you! Reach out with any questions or feedback.
                    </p>
                </div>

                {/* Contact Form and Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Left Column: Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
                                >
                                    <Send className="w-5 h-5 mr-2 -ml-1" />
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Contact Details */}
                    <div className="space-y-6">
                         <div className="bg-white p-6 rounded-lg shadow-md">
                             <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                                 <Mail className="w-5 h-5 mr-2 text-green-600"/> Email Us
                             </h3>
                             <a href={`mailto:${companyDetails.email}`} className="text-green-600 hover:underline break-all">
                                 {companyDetails.email}
                             </a>
                             <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours.</p>
                         </div>
                         <div className="bg-white p-6 rounded-lg shadow-md">
                             <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                                 <MapPin className="w-5 h-5 mr-2 text-green-600"/> Our Address
                             </h3>
                             <p className="text-gray-700 leading-relaxed">{companyDetails.address}</p>
                             <p className="text-sm text-gray-500 mt-1">{companyDetails.name}</p>
                         </div>
                         {/* Optional: Add Phone Number section here if available */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;