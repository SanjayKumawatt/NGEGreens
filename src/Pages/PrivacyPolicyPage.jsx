// src/Pages/PrivacyPolicyPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react'; // Icon

const PrivacyPolicyPage = () => {
    // Header/MegaMenu padding
    const topPaddingClass = "";

    return (
        <div className={`min-h-screen bg-gray-50 ${topPaddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Page Header */}
                <div className="text-center mb-10">
                    <ShieldAlert className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-600">
                        Your privacy is important to us.
                    </p>
                </div>

                {/* Actual Content Area */}
                <div className="bg-white p-8 rounded-lg shadow-md space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">

                    <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
                    <p>
                        NGEGreens.com ("we", "us", or "our") values the privacy of our users and is committed to protecting their personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, NGEGreens.com, or use our services. Please read this policy carefully. By using our website or services, you agree to the terms of this Privacy Policy.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 pt-4 border-t mt-6">1. Information We Collect</h2>
                    <h3 className="text-lg font-semibold text-gray-800 mt-2">Personal Information</h3>
                    <p>
                        We may collect personal information from you in various ways, including but not limited to when you register on the site, place an order, subscribe to our newsletter, respond to a survey, fill out a form, or engage with other activities, services, features, or resources we make available on our site. The personal information we may collect includes:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Mailing address</li>
                        <li>Phone number</li>
                        <li>Payment Information</li>
                    </ul>
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">Non-Personal Information</h3>
                    <p>
                        We may collect non-personal information about you whenever you interact with our site. Non-personal information may include the browser name, the type of computer, and technical information about your means of connection to our site, such as the operating system and the Internet service providers utilized, and other similar information.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 pt-4 border-t mt-6">2. How We Use Collected Information</h2>
                    <p>
                        NGEGreens.com may collect and use your personal information for the following purposes:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>To improve customer service: Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
                        <li>To personalize user experience: We may use information in the aggregate to understand how our users as a group use the services and resources provided on our site.</li>
                        <li>To improve our site: We may use feedback you provide to improve our products and services.</li>
                        <li>To process payments: We may use the information users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</li>
                        <li>To run a promotion, contest, survey, or other site feature: To send users information they agreed to receive about topics we think will be of interest to them.</li>
                        <li>To send periodic emails: We may use the email address to send user information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-800 pt-4 border-t mt-6">3. How We Protect Your Information</h2>
                    <p>
                        We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 pt-4 border-t mt-6">4. Sharing Your Personal Information</h2>
                    <p>
                        We do not sell, trade, or rent users' personal information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
                    </p>
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">Service Providers</h3>
                    <p>
                        We may employ third-party companies and individuals to facilitate our service ("Service Providers"), provide the service on our behalf, perform service-related services, or assist us in analyzing how our service is used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                    </p>
                     <h3 className="text-lg font-semibold text-gray-800 mt-4">Legal Requirements</h3>
                     <p>
                         NGEGreens.com may disclose your personal information in the good faith belief that such action is necessary to:
                     </p>
                     <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Comply with a legal obligation</li>
                        <li>Protect and defend the rights or property of NGEGreens.com</li>
                        <li>Prevent or investigate possible wrongdoing in connection with the service</li>
                        <li>Protect the personal safety of users of the service or the public</li>
                        <li>Protect against legal liability</li>
                     </ul>

                    <h2 className="text-2xl font-bold text-gray-800 pt-4 border-t mt-6">5. Third-Party Services</h2>
                    <p>
                        Our website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 pt-4 border-t mt-6">6. Cookies</h2>
                    <p>
                        NGEGreens.com uses "cookies" to enhance user experience. Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about them. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 pt-4 border-t mt-6">7. Your Rights</h2>
                    <p>
                       As per the applicable laws, you have the right to access, correct, update, and request deletion of your personal information. You can make such a request by contacting us using the contact information provided below.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 pt-4 border-t mt-6">8. Changes to This Privacy Policy</h2>
                    <p>
                       NGEGreens.com has the discretion to update this Privacy Policy at any time. When we do, we will post the updated date at the bottom of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this Privacy Policy periodically and become aware of modifications.
                    </p>

                     {/* Optional: Add a Contact Us section specifically for privacy */}
                     <h2 className="text-2xl font-bold text-gray-800 pt-4 border-t mt-6">9. Contact Us</h2>
                     <p>
                         If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: <a href="mailto:order@ngegreens.in" className="text-green-600 hover:underline">order@ngegreens.in</a>.
                     </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;