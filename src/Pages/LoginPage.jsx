// src/Pages/LoginPage.jsx (Close Icon Added)

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock, X } from 'lucide-react'; // 👈 X icon imported

const LoginPage = () => {
    // ... (existing states and functions: topPaddingClass, navigate, email, password, error, handleLogin) ...
    const topPaddingClass = "";
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
     const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        console.log("Attempting login with:", { email, password });
        // --- Dummy Login Logic ---
        if (email === "user@example.com" && password === "password") {
            alert("Login Successful!");
            navigate('/');
        } else {
            setError("Invalid email or password. Please try again.");
        }
        // --- End Dummy Logic ---
    };


    return (
        <div className={`min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center ${topPaddingClass} px-4 sm:px-6 lg:px-8`}>
            
            {/* STEP 1: Add 'relative' positioning to the container */}
            <div className="relative max-w-xl w-full bg-white p-8 md:p-12 rounded-xl shadow-xl space-y-8 border border-gray-100">
                
                {/* STEP 2: Add the Close Icon Link */}
                <Link 
                    to="/" 
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition duration-150"
                    aria-label="Close and go back home"
                >
                    <X className="w-6 h-6" />
                </Link>

                {/* Header */}
                <div className="text-center">
                    <LogIn className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Welcome Back! Sign In
                    </h2>
                    <p className="mt-3 text-sm text-gray-600">
                        Don't have an account yet?{' '}
                        <Link to="/signup" className="font-medium text-green-600 hover:text-green-500 hover:underline">
                            Create one here
                        </Link>
                    </p>
                </div>

                {/* Login Form (No changes needed inside the form) */}
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    {/* ... (Error Message) ... */}
                     {error && (
                        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                            {error}
                        </div>
                    )}
                    {/* ... (Input Fields Container) ... */}
                     <div className="space-y-4">
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
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-3 border-0 rounded-md placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </div>
                    {/* ... (Forgot Password Link) ... */}
                     <div className="flex items-center justify-end text-sm">
                        <Link to="/forgot-password" className="font-medium text-green-600 hover:text-green-500 hover:underline">
                            Forgot your password?
                        </Link>
                    </div>
                    {/* ... (Login Button) ... */}
                     <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out shadow-lg hover:shadow-green-500/50"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-4">
                                <Lock className="h-5 w-5 text-green-400 group-hover:text-green-300" aria-hidden="true" />
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;