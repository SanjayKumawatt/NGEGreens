// src/Pages/ShippingPolicyPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react'; // Icon for Shipping

const ShippingPolicyPage = () => {
    // Header/MegaMenu padding
    const topPaddingClass = "";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Page Header */}
                <div className="text-center mb-10">
                    <Truck className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                        Shipping & Delivery Policy
                    </h1>
                     {/* Using Terms & Conditions text from the image as requested */}
                    <p className="text-lg text-gray-600">
                        Terms related to shipping, delivery, returns, and general use of the website.
                    </p>
                </div>

                {/* Content Area - Using Text from the Image */}
                <div className="bg-white p-8 rounded-lg shadow-md space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">

                    <h2 className="text-2xl font-bold text-gray-800">Terms & Conditions</h2>
                    <p>
                        These terms and conditions ("Terms") govern your use of the NGEGreens website ("Website") and your interactions with the NGEGreens marketplace. By accessing or using the Website, you agree to be bound by these Terms. Please read them carefully before using the Website.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 pt-4 border-t mt-6">1. Acceptance of Terms</h3>
                    <p>
                        By accessing or using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Website.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 pt-4 border-t mt-6">2. Eligibility</h3>
                    <p>
                        You must be at least 18 years old to use the Website. By using the Website, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 pt-4 border-t mt-6">3. Account Registration</h3>
                    <p>
                        To access certain features of the Website, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 pt-4 border-t mt-6">4. Use of the Website</h3>
                    <p>You agree to use the Website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Use the Website in any way that violates any applicable law or regulation.</li>
                        <li>Use the Website to transmit any fraudulent or deceptive information.</li>
                        <li>Use the Website to transmit any unauthorized or unsolicited advertising, promotional materials, or other forms of solicitation.</li>
                        <li>Use the Website to impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
                        <li>Use the Website to interfere with or disrupt the operation of the Website or servers or networks connected to the Website.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 pt-4 border-t mt-6">5. Intellectual Property</h3>
                    <p>
                        All content on the Website, including text, graphics, logos, images, and software, is the property of NGEGreens or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, modify, distribute, or otherwise use any content from the Website without the prior written consent of NGEGreens.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 pt-4 border-t mt-6">6. Product Listings</h3>
                    <p>
                        NGEGreens acts as a marketplace for sellers to list and sell their products. We do not own or sell any products listed on the NGEGreens Website unless explicitly stated otherwise. Please refer product descriptions before purchasing. We make no representations or warranties regarding the accuracy, completeness, or reliability of any product listings or the quality of any products sold by sellers on the Website.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 pt-4 border-t mt-6">7. Ordering and Payment</h3>
                    <p>
                        When you place an order through the NGEGreens Website, you are making an offer to purchase the products listed in your order. All orders are subject to acceptance by the seller. Payment for orders may be made through the NGEGreens Website using the available payment methods. Prices and availability of products are subject to change without notice.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 pt-4 border-t mt-6">8. Shipping and Delivery</h3>
                    <p>
                        Shipping and delivery of products are handled by the seller. NGEGreens is not responsible for any delays, damages, or losses incurred during shipping or delivery. Please refer to the seller's shipping and delivery policies for more information.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 pt-4 border-t mt-6">9. Returns and Refunds</h3>
                    <p>
                        Returns and refunds for products purchased through the Website are subject to the NGEGreens return and refund policies. Please refer to the NGEGreens return and refund policies for information on eligibility, process, and timelines for returns and refunds.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 pt-4 border-t mt-6">10. Dispute Resolution</h3>
                    <p>
                         In the event of any dispute or disagreement between you and a seller, you agree to first attempt to resolve the matter informally by contacting the seller directly. If the matter cannot be resolved informally, you agree to submit to the exclusive jurisdiction of the courts located in [Jurisdiction] for the resolution of any disputes arising out of or related to these Terms or your use of the Website.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 pt-4 border-t mt-6">11. Limitation of Liability</h3>
                     <p>
                         To the fullest extent permitted by applicable law, NGEGreens and its affiliates, officers, directors, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
                     </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Your access to or use of or inability to access or use the Website.</li>
                        <li>Any conduct or content of any third party on the Website.</li>
                    </ul>


                    <h3 className="text-xl font-semibold text-gray-800 pt-4 border-t mt-6">12. Indemnification</h3>
                    <p>
                        You agree to indemnify, defend, and hold harmless NGEGreens and its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or related to your use of the Website or any violation of these Terms.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 pt-4 border-t mt-6">13. Changes to Terms</h3>
                    <p>
                       We reserve the right to update or modify these Terms at any time without prior notice. Any changes or modifications will be effective immediately upon posting the updated Terms on the Website. Your continued use of the Website after the posting of the updated Terms constitutes your acceptance of the changes.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 pt-4 border-t mt-6">14. Termination</h3>
                     <p>
                         We reserve the right to terminate or suspend your access to the Website at any time for any reason without prior notice or liability. Upon termination, your right to use the Website will immediately cease.
                     </p>

                    <h3 className="text-xl font-semibold text-gray-800 pt-4 border-t mt-6">15. Governing Law</h3>
                    <p>
                       These Terms shall be governed by and construed in accordance with the laws of [India], without regard to its conflict of law provisions.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 pt-4 border-t mt-6">16. Contact Information</h3>
                     <p>
                         If you have any questions or concerns about these Terms, please contact us at [support@ngegreens.com].
                     </p>

                    {/* Disclaimer */}
                    <p className="text-xs text-gray-500 mt-8 pt-4 border-t">
                        [Disclaimer: This content is based on the provided image and might be generic Terms & Conditions. It is strongly recommended to replace or supplement this with your specific Shipping & Delivery policy drafted by a legal professional.]
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShippingPolicyPage;