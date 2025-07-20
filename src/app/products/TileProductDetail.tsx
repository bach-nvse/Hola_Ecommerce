'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Product {
  name: string;
  image: string;
  price: number;
  slug: string;
}

interface TileProductDetailProps {
  slug: string;
}

const featuredProducts: Product[] = [
  { name: "Nike Dunk", image: "/images/Product13_large.webp", price: 150, slug: "nike-dunk" },
  { name: "Adidas Forum", image: "/images/Product14_large.webp", price: 120, slug: "adidas-forum" },
  { name: "NB 550", image: "/images/Product15_large.webp", price: 130, slug: "nb-550" },
  { name: "Yeezy Slide", image: "/images/Product16_large.webp", price: 90, slug: "yeezy-slide" },
  { name: "Nike Dunk 2", image: "/images/Product13_large.webp", price: 150, slug: "nike-dunk-2" },
  { name: "Adidas Forum 2", image: "/images/Product14_large.webp", price: 120, slug: "adidas-forum-2" },
  { name: "NB 550 2", image: "/images/Product15_large.webp", price: 130, slug: "nb-550-2" },
  { name: "Yeezy Slide 2", image: "/images/Product16_large.webp", price: 90, slug: "yeezy-slide-2" },
];

export default function TileProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const found = featuredProducts.find((p) => p.slug === slug);
    setProduct(found || null);
  }, [slug]);

  if (!product) return <div className="p-10 text-red-500">Product not found</div>;

  const total = product.price * quantity;

  return (
    <section className="w-full px-4 md:px-16 lg:px-24 py-10 flex flex-col md:flex-row gap-12">
      <div className="w-full md:w-1/2">
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-bold uppercase mb-2">{product.name}</h1>
        <p className="text-sm text-red-500 mb-4">🔥 Best seller</p>

        <div className="space-y-3 text-sm">
          <div>
            <span className="text-gray-500 mr-2">Price:</span>
            <span className="text-red-500 font-medium">${product.price.toFixed(2)}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-500">Quantity:</span>
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="border px-3 py-1">-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="border px-3 py-1">+</button>
          </div>

          <div>
            <span className="text-gray-500">Subtotal:</span>{" "}
            <span className="text-red-500 font-medium">${total.toFixed(2)}</span>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-black text-white px-6 py-2">🛒 Add to cart</button>
            <button className="border px-6 py-2">♡ Wishlist</button>
            <button className="bg-red-600 text-white px-6 py-2">Buy now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
