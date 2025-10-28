import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react'; // चूंकि हमने lucide-react का इस्तेमाल किया है
import img from "../assets/hero.png";

// इस कंपोनेंट को HeroSection.jsx में सेव करें
const HeroSection = () => {

    // आपको यह इमेज अपने 'public' फोल्डर या 'src' फोल्डर में सेव करनी होगी 
    // और उसका सही path यहां देना होगा।
    // मान लीजिए कि आपने इसे src/assets/hero-image.jpg में सेव किया है
    const heroImage = img; 
    // **नोट:** अभी के लिए, मैं इसे बस एक डमी div से रिप्लेस कर रहा हूँ 
    // ताकि CSS लेआउट सही बने। अगर आप चाहें तो नीचे दिए गए 
    // <div className="absolute inset-0 bg-cover bg-center..."
    // में 'backgroundImage' स्टाइल जोड़ सकते हैं।

    return (
        <section className="bg-white pt-16 pb-20 sm:pt-9 sm:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                    
                    {/* Left Side: Text Content */}
                    <div className="lg:col-span-6 xl:col-span-5 lg:text-left">
                        
                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
                            Grow Fresh. Grow Natural. Grow with NGEGreens 
                            <Leaf className="w-8 h-8 inline-block text-green-600 fill-green-600 ml-2 transform -rotate-12" />
                        </h1>
                        
                        {/* Sub-text / Description */}
                        <p className="mt-3 text-lg sm:text-xl text-gray-600 max-w-lg">
                            Your trusted destination for premium quality vegetable and flower seeds – 
                            Tested for high germination and delivered safely across India.
                        </p>
                        
                        {/* Shop Seeds Button */}
                        <div className="mt-10 sm:flex sm:justify-start">
                            <Link
                                to="/shop"
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-green-600 hover:bg-green-700 transition duration-300 transform hover:scale-[1.02]"
                            >
                                Shop Seeds
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Image/Product Area */}
                    <div className="mt-12 lg:mt-0 lg:col-span-6 xl:col-span-7 relative">
                        {/* आपके डिज़ाइन के अनुसार, इमेज में एक डार्क, ऑर्गेनिक बैकग्राउंड है। 
                           यह div उस हिस्से को प्रदर्शित करेगा। 
                        */}
                        <div className="relative w-full h-80 sm:h-[450px] lg:h-[500px] xl:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
                            
                            {/* यहां आपको अपनी इमेज को बैकग्राउंड इमेज या <img> टैग के रूप में जोड़ना होगा। 
                                मैं यहां एक Placeholder/Dummy Background जोड़ रहा हूँ।
                            */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    // **TO DO:** इस URL को अपनी इमेज के path से बदलें। 
                                    // यदि आप अपनी इमेज (image_e33889.jpg) का उपयोग करना चाहते हैं, 
                                    // तो आपको उसे इंपोर्ट करना होगा या public फोल्डर में रखना होगा।
                                    backgroundImage: `url('${heroImage}')`, // <--- यहां अपनी इमेज का path दें
                                    // अभी के लिए एक साधारण काला बैकग्राउंड:
                                    backgroundColor: '#222', 
                                }}
                            >
                                {/* यदि आप चाहते हैं कि इमेज आपके कंपोनेंट में ही रहे, 
                                    तो आपको इसे इंपोर्ट करना होगा:
                                    import heroImg from '../assets/image_e33889.jpg';
                                    ...
                                    <img src={heroImg} alt="Premium Vegetable Seeds" className="w-full h-full object-cover" />
                                */}
                            </div>
                            
                            {/* यदि आप डार्क बैकग्राउंड पर Seeds के पैकेट्स को अलग से PNG के रूप में दिखाना चाहें, तो वे यहां आएंगे। */}
                            <div className="relative z-10 p-4 sm:p-10 text-white text-3xl font-bold">
                                {/* Seed packets are part of the background image in your provided design */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;