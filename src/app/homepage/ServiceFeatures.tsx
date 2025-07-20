import { FaTruck, FaUndo, FaShieldAlt, FaHeadset } from "react-icons/fa";

export default function ServiceFeatures() {
  return (
    <section className="bg-white py-10 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-sm sm:text-base">
        <div>
          <FaTruck className="mx-auto text-2xl mb-2" />
          <h3 className="font-semibold">Free Delivery</h3>
          <p className="text-gray-500 text-xs sm:text-sm">When ordering from $500</p>
        </div>
        <div>
          <FaUndo className="mx-auto text-2xl mb-2" />
          <h3 className="font-semibold">90 Days Return</h3>
          <p className="text-gray-500 text-xs sm:text-sm">If goods have problems</p>
        </div>
        <div>
          <FaShieldAlt className="mx-auto text-2xl mb-2" />
          <h3 className="font-semibold">Secure Payment</h3>
          <p className="text-gray-500 text-xs sm:text-sm">100% secure payment</p>
        </div>
        <div>
          <FaHeadset className="mx-auto text-2xl mb-2" />
          <h3 className="font-semibold">24/7 Support</h3>
          <p className="text-gray-500 text-xs sm:text-sm">Dedicated support</p>
        </div>
      </div>
    </section>
  );
}
