'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white">
      {/* Left: Login */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">Login</h2>

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

          <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-black" />
              Keep me signed in
            </label>
            <Link href="#" className="text-black font-medium hover:underline">
              Forgot your password?
            </Link>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-full font-semibold mb-6">
            Login
          </button>

          <div className="text-center text-sm text-gray-500 mb-4">
            <div className="flex items-center justify-center gap-2">
              <hr className="w-1/4" />
              Or continue with social account
              <hr className="w-1/4" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="border px-6 py-3 rounded-full flex items-center gap-2 justify-center w-full sm:w-auto">
              <img src="/icons/googleIcon.png" alt="Google" className="w-5 h-5" />
              Sign in with Google
            </button>
            <button className="border px-6 py-3 rounded-full flex items-center gap-2 justify-center w-full sm:w-auto">
              <img src="/icons/facebookIcon.webp" alt="Facebook" className="w-5 h-5" />
              Sign in with Facebook
            </button>
          </div>
        </div>
      </div>

      {/* Right: New Customer */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-center bg-[#fafafa]">
        <div className="w-full max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">New Customer</h2>
          <p className="text-gray-700 mb-8 text-center md:text-left">
            For customers who register a new account, we are offering you a $50 shopping voucher and a 30% discount code. Happy shopping!
          </p>

          <h4 className="font-semibold mb-2">Sign up and get your discount code</h4>

          <div className="border p-6 rounded-lg bg-white shadow-sm w-full">
            <div className="flex justify-between text-sm text-gray-600 mb-3">
              <span>Discount</span>
              <span className="font-bold text-black">30% OFF</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <span className="text-sm text-gray-600 block">Code:</span>
                <span className="text-lg font-semibold tracking-widest">******* </span>
              </div>
              <Link href="/register">
              <button className="bg-black text-white px-6 py-2 rounded-full font-semibold">
                Register
              </button>
            </Link>
            </div>
            <p className="text-right text-xs text-gray-400 mt-2">For all orders from $150</p>
          </div>
        </div>
      </div>
    </div>
  );
}
