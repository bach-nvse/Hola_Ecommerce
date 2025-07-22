import Header from "@/app/homepage/Header";
import Footer from "@/app/homepage/Footer";
import { ProductCard } from "../../components/products/ProductCard";

const products = [
  { name: "Nike Dunk Low", image: "/images/Product13_large.webp", price: 150, slug: "nike-dunk-low" },
  { name: "Adidas Forum", image: "/images/Product14_large.webp", price: 120, slug: "adidas-forum" },
  { name: "NB 550", image: "/images/Product15_large.webp", price: 130, slug: "nb-550" },
  { name: "Yeezy Slide", image: "/images/Product16_large.webp", price: 90, slug: "yeezy-slide" },
  { name: "Air Force 1", image: "/images/Product13_large.webp", price: 110, slug: "air-force-1" },
  { name: "Jordan 1 Low", image: "/images/Product13_large.webp", price: 160, slug: "jordan-1-low" },
];

export default function ProductListPage() {
  return (
    <>
      <Header />
      <main className="pt-24 px-4 sm:px-6 max-w-[1440px] mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">All Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
