"use client";

import { useRouter } from "next/navigation"; // ✅ Import Router
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const featuredProducts = [ { name: "Nike Dunk", image: "/images/Product13_large.webp", price: 150, slug: "nike-dunk" }, { name: "Adidas Forum", image: "/images/Product14_large.webp", price: 120, slug: "adidas-forum" }, { name: "NB 550", image: "/images/Product15_large.webp", price: 130, slug: "nb-550" }, { name: "Yeezy Slide", image: "/images/Product16_large.webp", price: 90, slug: "yeezy-slide" }, { name: "Nike Dunk 2", image: "/images/Product13_large.webp", price: 150, slug: "nike-dunk-2" }, { name: "Adidas Forum 2", image: "/images/Product14_large.webp", price: 120, slug: "adidas-forum-2" }, { name: "NB 550 2", image: "/images/Product15_large.webp", price: 130, slug: "nb-550-2" }, { name: "Yeezy Slide 2", image: "/images/Product16_large.webp", price: 90, slug: "yeezy-slide-2" }, ];

export default function FeaturedProducts() {
  const router = useRouter(); // ✅ Hook điều hướng

  const handleProductClick = (slug: string) => {
    router.push(`/products/${slug}`); // ✅ Điều hướng đến trang chi tiết sản phẩm
  };

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-16 lg:px-24 text-center">
      <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">In Season</p>
      <h2 className="text-3xl font-semibold mb-10">Mode & Refined</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {featuredProducts.map((product, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => handleProductClick(product.slug)}
              className="cursor-pointer bg-white p-4 shadow hover:shadow-lg transition rounded"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-contain w-full h-60 mb-4 rounded"
              />
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-500 mt-1 mb-4">${product.price.toFixed(2)}</p>
              <button className="w-full border border-gray-900 py-2 text-sm font-semibold hover:bg-gray-900 hover:text-white transition">
                Add to Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}