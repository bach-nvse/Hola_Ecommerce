// /app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import ClientProductView from '@/components/products/ClientProductView';

export async function generateStaticParams() {
  // Gọi API để lấy danh sách ID sản phẩm
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  // Trả về params cho từng ID
  return products.map((product: any) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  if (!res.ok) return notFound();

  const product = await res.json();
  return <ClientProductView product={product} />;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Product ${params.id}`,
  };
}
