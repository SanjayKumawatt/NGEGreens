// src/Pages/ForgotPasswordPage.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Send, ArrowLeft } from 'lucide-react'; // Icons

const ForgotPasswordPage = () => {
    // Header/MegaMenu padding
    const topPaddingClass = "";

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(''); // For success/error messages

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages

        // --- Dummy Submit Logic ---
        // In a real app, you would call an API to send a reset link
        console.log("Password reset requested for:", email);
        if (email) {
            setMessage(`If an account exists for ${email}, a password reset link has been sent.`);
            // Optionally clear the email field
            // setEmail('');
        } else {
             setMessage('Please enter your email address.');
        }
        // --- End Dummy Logic ---
    };

    return (
        <div className={`min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center ${topPaddingClass} px-4 sm:px-6 lg:px-8`}>
            
            <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-xl shadow-xl space-y-8 border border-gray-100">
                
                {/* Header */}
                <div className="text-center">
                    <Mail className="w-10 h-10 text-green-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Forgot Your Password?
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Enter your email address below, and we'll send you a link to reset your password.
                    </p>
                </div>

                {/* Forgot Password Form */}
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {/* Message Display (Success or Info) */}
                    {message && (
                        <div className={`p-4 rounded-lg text-sm ${message.includes('Please enter') ? 'bg-yellow-50 border border-yellow-200 text-yellow-800' : 'bg-green-50 border border-green-200 text-green-800'}`}>
                            {message}
                        </div>
                    )}

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
                            Email address
                        </label>
                        <div className="relative rounded-md shadow-sm border border-gray-300 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full pl-10 pr-3 py-3 border-0 rounded-md placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out shadow-lg hover:shadow-green-500/50"
                        >
                             <Send className="w-5 h-5 mr-2 absolute left-0 inset-y-0 flex items-center pl-4 text-green-400 group-hover:text-green-300" />
                            Send Reset Link
                        </button>
                    </div>

                     {/* Back to Login Link */}
                    <div className="text-sm text-center">
                        <Link to="/login" className="font-medium text-green-600 hover:text-green-500 hover:underline flex items-center justify-center">
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            Back to Sign In
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;