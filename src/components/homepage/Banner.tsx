'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const images = [
  '/images/Banner-02.jpg',
  '/images/Banner-03.jpg',
  '/images/Banner-04.jpg',
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // Auto slide every 2s

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div
      className="relative h-[800px] bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl text-black font-bold mb-4">Unleash Your Style</h1>
          <p className="text-lg text-black mb-6">Discover the latest streetwear sneakers</p>
          <Link href="/products">
            <span className="px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-200 transition">
              Shop Now
            </span>
          </Link>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
