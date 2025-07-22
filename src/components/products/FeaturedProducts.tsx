"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default  function FeaturedProducts() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDemoProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Lỗi khi gọi API demo:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDemoProducts();
  }, []);

  const handleProductClick = (id: number) => {
    router.push(`/products/${id}`); // → vẫn điều hướng theo id
  };

  if (loading) return <p className="text-center py-8">Đang tải sản phẩm demo...</p>;

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-16 lg:px-24 text-center">
      <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">Demo</p>
      <h2 className="text-3xl font-semibold mb-10">Fake Store Products</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
          <div
            onClick={() => handleProductClick(product.id)}
            className="cursor-pointer bg-white p-4 shadow hover:shadow-lg transition rounded h-full flex flex-col justify-between"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              className="object-contain w-full h-60 mb-4 rounded"
            />

            <div className="flex flex-col flex-1 justify-between">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 h-14 overflow-hidden">
                  {product.title}
                </h3>
                <p className="text-gray-500 mt-1">${product.price.toFixed(2)}</p>
              </div>

              <button className="w-full border border-gray-900 py-2 text-sm font-semibold hover:bg-gray-900 hover:text-white transition mt-auto">
                Add to Cart
              </button>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
