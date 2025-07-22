// src/app/components/homepage/TileProductList.tsx
"use client";

import Image from "next/image";
export const tileProducts = [
  {
    name: "Glossy Floor Tiles",
    brand: "Rainbow",
    price: 890,
    image: "/images/title-product-01.jpg",
    slug: "glossy-floor-tiles",
  },
  {
    name: "Vitrified Tiles",
    brand: "Tilex",
    price: 900,
    image: "/images/title-product-02.webp",
    slug: "vitrified-tiles",
  },
  {
    name: "Polished Vitrified Tiles",
    brand: "Rainbow",
    price: 600,
    image: "/images/title-product-03.jpg",
    slug: "polished-vitrified-tiles",
  },
];

export default function TileProductList() {
  return (
    <section className="w-full px-4 md:px-16 lg:px-24 py-10">
      {/* Title section */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest text-gray-500 uppercase">
          Step Up To Next Level Future
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-black mt-2">
          FLOORCARE
        </h2>
      </div>

      {/* Product list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {tileProducts.map((product) => (
          <div key={product.slug} className="text-center">
            <div className="relative aspect-square mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <p className="text-xs uppercase text-gray-500">{product.brand}</p>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-gray-600">Rs. {product.price.toFixed(2)}</p>
            <button className="mt-4 px-6 py-2 border border-black hover:bg-black hover:text-white transition-all duration-200">
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
