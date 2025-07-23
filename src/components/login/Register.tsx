'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white">
      {/* Left: Register Form */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">Register</h2>

          <input
            type="email"
            placeholder="Enter your email address *"
            className="w-full px-5 py-3 rounded-full bg-gray-100 mb-4 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative mb-4">
            <input
              type="password"
              placeholder="Password *"
              className="w-full px-5 py-3 rounded-full bg-gray-100 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="absolute right-5 top-3.5 text-gray-400 cursor-pointer">👁️</span>
          </div>

          <div className="relative mb-6">
            <input
              type="password"
              placeholder="Confirm password *"
              className="w-full px-5 py-3 rounded-full bg-gray-100 outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span className="absolute right-5 top-3.5 text-gray-400 cursor-pointer">👁️</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-full font-semibold">
            Register
          </button>
        </div>
      </div>

      {/* Right: Already Have Account */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-center bg-[#fafafa]">
        <div className="w-full max-w-md text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have An Account</h2>
          <p className="text-gray-700 mb-6">
            Welcome back, log in to your account to enhance your shopping experience, receive coupons, and the best discount codes.
          </p>
          <Link href="/login">
            <button className="bg-black text-white px-6 py-2 rounded-full font-semibold">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
