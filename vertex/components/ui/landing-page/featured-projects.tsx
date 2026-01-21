import SectionHeader from "@/components/common/section-header";
import { ArrowRightIcon, Star } from "lucide-react";
import { Button } from "../button";
import Link from "next/link";
import ProductCard from "@/components/products/product-cards";

const featuredProducts = [
  {
    id:1,
    name: "ParityKit",
    description: "Description for project one.",
    tags: ["DeFi", "Blockchain"],
    votes: 120,
    isFeatuered: true,
  },
  {
    id:2,
    name: "VertexAI",
    description: "Description for project two.",
    tags: ["AI", "Machine Learning"],
    votes: 95,
    isFeatuered: true,
  },
  {
    id:3,
    name: "ChainGuard",
    description: "Description for project three.",  
    tags: ["Security", "Blockchain"],
    votes: 80,
    isFeatuered: true,
  }
];
export default function FeaturedProjects() {
  return (
    <div>
      <section className="px-20 bg-muted/20">
        <div className="wrapper">
          <div className="flex items-center justify-between mb-8">
            <SectionHeader
              title="Featured Today"
              icon={Star}
              description="Check out the projects featured today."
            />
            <Button variant="outline" asChild className="hidden sm:flex">
              <Link href="/explore">
                See All <ArrowRightIcon className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
          <div className="grid-wrapper">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
