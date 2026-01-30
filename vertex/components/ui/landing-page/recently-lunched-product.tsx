"use cache";
import EmptyState from "@/components/common/empty-state";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-cards";
import { getRecentLaunchedProducts } from "@/lib/products/product-select";
import { Calendar1Icon } from "lucide-react";

export default async function RecentlyLaunchedProduct() {
  const recentlyLaunchedProducts = await getRecentLaunchedProducts();
  return (
    <div className="relative bg-[#0a1f14] text-slate-50">
      <div
        className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#2d5a3d 1px, transparent 1px), linear-gradient(90deg, #2d5a3d 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <section className="relative z-10 px-4 sm:px-6 lg:px-16 py-10 sm:py-14 lg:py-18 max-w-8xl mx-auto">
        <div className="wrapper space-y-8 sm:space-y-12 mb-8 sm:mb-12">
          <SectionHeader
            title="Recently Launched Products"
            icon={Calendar1Icon}
            description="The most recently launched products on the platform"
          />
        </div>
        {recentlyLaunchedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No recently launched products available."
            icon={Calendar1Icon}
          />
        )}
      </section>
    </div>
  );
}
