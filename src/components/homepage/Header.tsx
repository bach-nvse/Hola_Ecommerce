"use client";

import { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="w-full bg-gray-50 text-gray-600 text-sm text-center py-2 tracking-widest uppercase">
        Get extra 10% off on wooden flooring
      </div>

      {/* Main Header */}
      <header className="w-full border-b bg-white shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-xl text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Logo */}
          <div className="text-center flex-1 md:flex-none">
            <img src="/images/logo.png" alt="HolaEcommerce" className="h-8 mx-auto" />
            <div className="text-xs mt-1 tracking-[0.3em] text-gray-700 font-semibold">
              HOLA ECOMMERCE
            </div>
          </div>

          {/* Right nav (desktop) */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-semibold uppercase tracking-widest text-gray-800">
            <Link href="/faq" className="hover:text-pink-600">FAQ</Link>
            <Link href="/services" className="hover:text-pink-600">Services</Link>
            <Link href="/contact" className="hover:text-pink-600">Contact</Link>
            <Link href="/cart" className="relative hover:text-pink-600">
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-2 -right-2 text-xs bg-pink-500 text-white rounded-full px-1">
                0
              </span>
            </Link>
            <Link href="/login" className="hover:text-pink-600">
              <FaUser className="text-xl" />
            </Link>
          </div>
        </div>

        {/* Navigation (desktop) */}
        <nav className="hidden md:flex justify-center space-x-6 text-sm font-semibold uppercase tracking-widest text-gray-800 py-3 border-t">
          <Link href="/" className="hover:text-pink-600">Home</Link>
          <Link href="/catalog" className="hover:text-pink-600">Catalog</Link>
          <Link href="/products" className="hover:text-pink-600">Shop</Link>
          <Link href="/blog" className="hover:text-pink-600">Blog</Link>
          <Link href="/about" className="hover:text-pink-600">About Us</Link>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t px-6 pb-4 space-y-4 text-sm font-semibold uppercase tracking-widest text-gray-800">
            <Link href="/" className="block hover:text-pink-600">Home</Link>
            <Link href="/catalog" className="block hover:text-pink-600">Catalog</Link>
            <Link href="/products" className="block hover:text-pink-600">Shop</Link>
            <Link href="/blog" className="block hover:text-pink-600">Blog</Link>
            <Link href="/about" className="block hover:text-pink-600">About Us</Link>
            <Link href="/faq" className="block hover:text-pink-600">FAQ</Link>
            <Link href="/services" className="block hover:text-pink-600">Services</Link>
            <Link href="/contact" className="block hover:text-pink-600">Contact</Link>
            <Link href="/cart" className="block flex items-center gap-2 hover:text-pink-600">
              <FaShoppingCart /> Cart (0)
            </Link>
            <Link href="/login" className="block flex items-center gap-2 hover:text-pink-600">
              <FaUser /> Login
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
