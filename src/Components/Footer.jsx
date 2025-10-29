import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Twitter, Facebook, Instagram, Mail, MapPin, PanelRight } from 'lucide-react'; // MapPin icon जोड़ा गया
import logo from "../assets/logo.png";

import visa from "../assets/payment/img1.avif";
import mastercard from "../assets/payment/img2.avif";
import rupay from "../assets/payment/img3.webp";
import upi from "../assets/payment/img4.png";
import paypal from "../assets/payment/img5.avif";
import googlepay from "../assets/payment/img6.avif";
import apple from "../assets/payment/apple.webp"

const Footer = () => {
    // कंपनी और एड्रेस डिटेल्स
    const companyDetails = {
        name: 'NGE GREENS PRIVATE LIMITED',
        email: 'order@ngegreens.in',
        address: 'House No 15, Floor Ground, Block- Dp Pitampura, Saraswati Vihar, North West Delhi, Delhi, Delhi, India, 110034',
    };

    // CategoryShowcase के लिंक्स (CategoryShowcase.jsx से मिलती-जुलती संरचना)
    const categoryLinks = [
        { name: 'Vegetable Seeds', path: '/seeds/vegetable' },
        { name: 'Flower Seeds', path: '/seeds/flower' },
        { name: 'Fruit Seeds', path: '/seeds/tree/fruit-seeds' },
        { name: 'Herbal Seeds', path: '/seeds/herb' },
        // { name: 'Organic Fertilizers', path: '/shop/fertilizers' },
    ];

    // Payment icon paths (Replace with your actual image paths/imports)
    const paymentIcons = [
        { name: 'Visa', path: visa }, // Example: visaIcon
        { name: 'Mastercard', path: mastercard }, // Example: mastercardIcon
        // { name: 'RuPay', path: rupay }, // Example: rupayIcon
        // { name: 'UPI', path: upi }, // Example: upiIcon
        { name: 'Paypal', path: paypal }, // Example: paytmIcon
        {name: 'Google Pay', path: googlepay},
        {name: "Apple", path: apple}
            ];


    return (
        // Footer Section
        <footer className="bg-gray-800 text-white mt-10 border-t border-green-700">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

                {/* Main Grid: Logo, Links, Contact */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-28">

                    {/* Column 1: Logo and Brand Info */}
                    <div className="col-span-2 lg:col-span-1 w-75">
                        <Link to="/" className="flex items-center text-2xl font-bold ">
                            <img src={logo} className='h-38' alt="" />
                        </Link>
                        <p className="text-sm text-gray-400">
                            {companyDetails.name}
                        </p>
                        <p className="text-sm text-gray-400">
                            We specialize in sourcing and delivering high-quality vegetable, flower, and herb seeds-each rigorously tested for superior germination rates. Beyond just seeds, we offer everything a modern gardener needs, from organic fertilizers to essential tools, all packaged with care and delivered safely across India.
                        </p>
                    </div>

                    {/* Column 2: Shop Categories (CategoryShowcase integration) */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-green-300">Shop Categories</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {categoryLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="hover:text-white transition duration-150">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Address and Location */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-lg font-semibold mb-4 text-green-300">Our Location</h3>
                        <p className="text-sm text-gray-400 flex items-start">
                            <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                            <span className="leading-relaxed">
                                {companyDetails.address}
                            </span>
                        </p>
                    </div>

                    {/* Column 4: Support & Social */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-lg font-semibold mb-4 text-green-300">Support & Connect</h3>
                        <ul className="space-y-3 text-sm text-gray-400 mb-6">
                            <li><Link to="/contact" className="hover:text-white transition duration-150">Contact Us</Link></li>
                            <li><Link to="/privacy" className="hover:text-white transition duration-150">Privacy Policy</Link></li>
                            <li><Link to="/shipping" className="hover:text-white transition duration-150">Shipping & Terms</Link></li>
                        </ul>

                        <a href={`mailto:${companyDetails.email}`} className="text-blue-400 hover:text-green-400">{companyDetails.email}</a>
                    </div>

                </div>

                {/* Payment Methods Section (NEW) */}
                <div className="border-t border-gray-700 pt-8 text-center">
                    <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                        Secure Payments - We Accept
                    </h4>
                    <div className="flex justify-center items-center space-x-4">
                        {paymentIcons.map((icon) => (
                            // Replace the div with img tag once you have icons
                            // <div key={icon.name} className="h-6 bg-gray-600 px-4 flex items-center justify-center text-xs rounded"> {/* Placeholder div */}
                            //     {icon.name}
                            // </div>
                            
                            <img
                                key={icon.name}
                                src={icon.path} // Use the correct path or imported variable
                                alt={`${icon.name} payment accepted`}
                                className="h-6" // Adjust height as needed
                                title={icon.name}
                            />
                            
                        ))}
                    </div>
                </div>


                {/* Copyright */}
                <div className="mt-12 border-t border-gray-700 pt-8 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} {companyDetails.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;