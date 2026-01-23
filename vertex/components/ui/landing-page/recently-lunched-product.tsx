import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-cards";
import { RocketIcon } from "lucide-react";

export default function RecentlyLaunchedProduct() {
  const recentlyLaunchedProducts = [
    {
      id: 1,
      name: "ParityKit",
      description: "Description for project one.",
      tags: ["DeFi", "Blockchain"],
      votes: 120,
      isFeatuered: true,
    },
    {
      id: 2,
      name: "VertexAI",
      description: "Description for project two.",
      tags: ["AI", "Machine Learning"],
      votes: 95,
      isFeatuered: true,
    },
    {
      id: 3,
      name: "ChainGuard",
      description: "Description for project three.",
      tags: ["Security", "Blockchain"],
      votes: 80,
      isFeatuered: true,
    },
  ];
  return (
    <section className="py-20">
      <div className="wrapper">
        <SectionHeader
          title="Recently Launched Products"
          icon={RocketIcon}
          description="The most recently lunched products on the platform"
        />
      </div>
      <div className="grid-wrapper">
        {recentlyLaunchedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
