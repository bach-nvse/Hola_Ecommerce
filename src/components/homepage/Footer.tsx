export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-[1440px] mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* About */}
        <div>
          <h3 className="font-semibold mb-4">About Bokx</h3>
          <p className="leading-relaxed text-gray-300">
            Your go-to streetwear & sneaker hub.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline text-gray-300">Men</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Women</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Accessories</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline text-gray-300">Shipping</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Returns</a></li>
            <li><a href="#" className="hover:underline text-gray-300">FAQ</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Newsletter</h3>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-3 py-2 rounded text-black placeholder:text-gray-500"
          />
          <button className="mt-3 w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded">
            Subscribe
          </button>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-800 text-sm text-gray-400">
        © 2025 Bokx Theme. All rights reserved.
      </div>
    </footer>
  );
}
