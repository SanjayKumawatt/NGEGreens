// src/Pages/SignupPage.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Mail, Lock, X } from 'lucide-react'; // Icons

const SignupPage = () => {
    // Header/MegaMenu padding
    const topPaddingClass = "";

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        // Basic Validation
        if (password !== confirmPassword) {
            setError("Passwords do not match. Please try again.");
            return;
        }
        if (password.length < 6) {
             setError("Password must be at least 6 characters long.");
            return;
        }

        // --- Dummy Signup Logic ---
        // In a real app, you would validate inputs and call an API to register the user
        console.log("Attempting signup with:", { name, email, password });
        alert("Signup Successful! Please login.");
        // Redirect to login page after successful signup
        navigate('/login');
        // --- End Dummy Logic ---
    };

    return (
        <div className={`min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center ${topPaddingClass} px-4 sm:px-6 lg:px-8`}>
            
            <div className="relative max-w-xl w-full bg-white p-8 md:p-12 rounded-xl shadow-xl space-y-8 border border-gray-100">
                
                 {/* Close Icon Link */}
                <Link 
                    to="/" 
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition duration-150"
                    aria-label="Close and go back home"
                >
                    <X className="w-6 h-6" />
                </Link>

                {/* Header */}
                <div className="text-center">
                    <UserPlus className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Create Your Account
                    </h2>
                    <p className="mt-3 text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-green-600 hover:text-green-500 hover:underline">
                            Sign in here
                        </Link>
                    </p>
                </div>

                {/* Signup Form */}
                <form className="mt-8 space-y-6" onSubmit={handleSignup}>
                    {/* Error Message Display */}
                    {error && (
                        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    {/* Input Fields Container */}
                    <div className="space-y-4">
                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <div className="relative rounded-md shadow-sm border border-gray-300 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full px-3 py-3 border-0 rounded-md placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                                    placeholder="Your Full Name"
                                />
                            </div>
                        </div>

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

                        {/* Password Input */}
                        <div>
                             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative rounded-md shadow-sm border border-gray-300 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500">
                               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-3 border-0 rounded-md placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                                    placeholder="Create a Password (min. 6 chars)"
                                />
                            </div>
                        </div>

                        {/* Confirm Password Input */}
                         <div>
                             <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password
                            </label>
                            <div className="relative rounded-md shadow-sm border border-gray-300 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500">
                               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-3 border-0 rounded-md placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                                    placeholder="Confirm your Password"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Signup Button */}
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out shadow-lg hover:shadow-green-500/50"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;