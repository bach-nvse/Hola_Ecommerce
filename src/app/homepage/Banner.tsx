export default function Banner() {
  return (
    <div
      className="relative h-[800px] bg-cover bg-center"
      style={{ backgroundImage: `url(/images/banner-01.webp)` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Unleash Your Style</h1>
          <p className="text-lg mb-6">Discover the latest streetwear sneakers</p>
          <a
            href="/products"
            className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
