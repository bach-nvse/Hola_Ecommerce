'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ClientProductView({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: 'inc' | 'dec') => {
    setQuantity((q) => Math.max(1, type === 'inc' ? q + 1 : q - 1));
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Image */}
      <div className="relative aspect-square bg-white">
        <Image src={product.image} alt={product.title} fill className="object-contain" />
      </div>

      {/* Info (như bạn đã làm) */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-sm text-red-500">🔥 10 sold in last 16 hours</p>
        <p className="text-gray-700">{product.description}</p>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Price</span>
            <span className="text-red-600 font-semibold text-lg">Rs. {product.price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Availability</span>
            <span className="text-green-600">8 in stock</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Category</span>
            <span>{product.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Rating</span>
            <span>⭐ {product.rating.rate} ({product.rating.count})</span>
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-sm text-gray-600">Quantity</span>
          <div className="flex border rounded w-fit items-center">
            <button onClick={() => handleQuantity('dec')} className="px-3 py-1">−</button>
            <span className="px-4 py-1">{quantity}</span>
            <button onClick={() => handleQuantity('inc')} className="px-3 py-1">+</button>
          </div>
        </div>

        {/* Subtotal */}
        <div className="text-lg font-medium mt-2">
          Subtotal: <span className="text-red-500">Rs. {(product.price * quantity).toFixed(2)}</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-3 mt-6">
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">🛒 Add to Cart</button>
          <button className="border border-black px-6 py-3 rounded hover:bg-black hover:text-white">♡ Add to Wishlist</button>
          <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700">Buy it now</button>
        </div>

        {/* Share */}
        <div className="text-xs text-gray-500 mt-4">
          REAL TIME 🔴 <span className="text-red-500 font-semibold">+25</span> visitors right now<br />
          SHARE ON: <span className="ml-2">📘 🐦 📸 🅖</span>
        </div>
      </div>
    </section>
  );
}
