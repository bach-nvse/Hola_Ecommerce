import { useState } from "react";

const products = [
  { name: "Nike Dunk Low", image: "/products/product-8.jpg", price: 150, slug: "nike-dunk-low" },
  { name: "Adidas Forum", image: "/products/product-22.jpg", price: 120, slug: "adidas-forum" },
  { name: "NB 550", image: "/products/product-24.jpg", price: 130, slug: "nb-550" },
  { name: "Yeezy Slide", image: "/products/product-28.jpg", price: 90, slug: "yeezy-slide" },
  { name: "Air Force 1", image: "/products/product-31.jpg", price: 110, slug: "air-force-1" },
  { name: "Jordan 1 Low", image: "/products/product-34.jpg", price: 160, slug: "jordan-1-low" },
  { name: "NB 550", image: "/products/product-38.jpg", price: 130, slug: "nb-550" },
  { name: "Yeezy Slide", image: "/products/product-42.jpg", price: 90, slug: "yeezy-slide" },
  { name: "Air Force 1", image: "/products/product-46.jpg", price: 110, slug: "air-force-1" },
];

export default function ProductListPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="p-4 md:p-10 max-w-screen-xl mx-auto">
      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center">Shop Default Grid</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Sidebar */}
        <aside className="w-full lg:w-1/4 space-y-8">
          {/* Category Filter */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Category</h4>
            <ul className="space-y-1 text-sm">
              {['Dress', 'Shirt', 'Top', 'T-shirt'].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className={`hover:underline ${
                      selectedCategory === cat ? 'font-bold text-pink-600' : ''
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Filter */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Price</h4>
            <input type="range" min={0} max={200} className="w-full" />
            <div className="text-sm flex justify-between mt-1">
              <span>$0</span>
              <span>$200</span>
            </div>
          </div>

          {/* Size & Color */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Size</h4>
            <div className="flex flex-wrap gap-2 text-sm">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <span key={size} className="border px-2 py-1 rounded">
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Color</h4>
            <div className="flex gap-2 flex-wrap">
               {['#000000', '#A0522D', '#556B2F', '#2F4F4F', '#C2B280'].map((color) => (
                <span
                  key={color}
                  className="w-6 h-6 rounded-full border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="w-full lg:w-3/4">
          {/* Top bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div className="text-sm text-gray-500">Showing {products.length} products</div>
            <select className="border rounded px-3 py-2 text-sm">
              <option>Sort by: Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {products.map((p) => (
              <div key={p.slug} className="border rounded-lg overflow-hidden group">
                <div className="relative">
                  <img src={p.image} alt={p.name} className="w-full h-60 object-cover" />
                  {p.slug && (
                    <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                      {p.slug}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold">{p.name}</h3>
                  <p className="text-pink-600 font-bold mt-1">${p.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex justify-center gap-2 text-sm">
            {[1, 2, 3].map((page) => (
              <button key={page} className="w-8 h-8 rounded-full border hover:bg-pink-100">
                {page}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
