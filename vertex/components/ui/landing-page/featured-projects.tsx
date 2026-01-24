import SectionHeader from "@/components/common/section-header";
import { ArrowRightIcon, Star } from "lucide-react";
import { Button } from "../button";
import Link from "next/link";
import ProductCard from "@/components/products/product-cards";

const featuredProducts = [
  {
    id: 1,
    name: "ParityKit",
    description:
      "ParityKit is a collaborative platform where creators showcase projects, receive community votes, and grow through shared discovery.",
    tags: ["DeFi", "Blockchain"],
    votes: 120,
    isFeatuered: true,
  },
  {
    id: 2,
    name: "Vertex",
    description:
      "Vertex is a community-driven platform where creators showcase projects, gain votes, and grow together.",
    tags: ["AI", "Machine Learning"],
    votes: 95,
    isFeatuered: true,
  },
  {
    id: 3,
    name: "ChainGuard",
    description:
      "ChainGuard is a security-focused platform that protects and validates projects through transparent, community-driven verification and trust.",
    tags: ["Security", "Blockchain"],
    votes: 80,
    isFeatuered: true,
  },
];
export default function FeaturedProjects() {
  return (
    <div>
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-16 bg-muted/20">
        <div className="wrapper">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-8">
            <SectionHeader
              title="Featured Today"
              icon={Star}
              description="Check out the projects featured today."
            />
            <Button
              variant="outline"
              asChild
              className="hidden sm:flex text-sm whitespace-nowrap"
            >
              <Link href="/explore">
                See All <ArrowRightIcon className="ml-2 size-3 sm:size-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
