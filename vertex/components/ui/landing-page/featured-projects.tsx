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
    <div className="relative bg-[#0a1f14] text-slate-50">
      {/* Blend into hero: top gradient fade */}
      <div className="absolute inset-x-0 -top-16 h-24 bg-gradient-to-b from-transparent via-[#0a1f14]/40 to-[#0a1f14] z-0" />

      {/* Subtle grid overlay to match palette */}
      <div
        className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            `linear-gradient(#2d5a3d 1px, transparent 1px), linear-gradient(90deg, #2d5a3d 1px, transparent 1px)`,
          backgroundSize: "42px 42px",
        }}
      />

      <section className="relative z-10 pt-10 sm:pt-14 lg:pt-18 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-16 max-w-8xl mx-auto">
        <div className="wrapper">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-8">
            <SectionHeader
              title="Featured Today"
              icon={Star}
              description="The most innovative projects handpicked by the community."
            />
            <Button
              variant="outline"
              asChild
              className="hidden sm:flex text-sm whitespace-nowrap border-[#2d5a3d] text-[#a3b899] hover:text-[#4ade80] hover:bg-[#2d5a3d]/20"
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
