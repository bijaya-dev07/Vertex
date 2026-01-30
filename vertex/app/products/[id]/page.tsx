import { getFeaturedProducts } from "@/lib/products/product-select";

export const generateStaticParams = async () => {
  const Products = await getFeaturedProducts();
  return Products.map((product) => ({
    id: product.id.toString(),
  }));
};

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>Product Page for {id}</div>;
}
