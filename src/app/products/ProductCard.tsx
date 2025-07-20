// components/ProductCard.tsx
import Link from "next/link";

export const ProductCard = ({ name, image, price, slug }: any) => {
  return (
    <Link href={`/products/${slug}`}>
      <div className="group cursor-pointer">
        <div className="overflow-hidden rounded-md">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <h3 className="mt-4 font-semibold text-lg">{name}</h3>
        <p className="text-gray-500">${price}</p>
      </div>
    </Link>
  );
};
