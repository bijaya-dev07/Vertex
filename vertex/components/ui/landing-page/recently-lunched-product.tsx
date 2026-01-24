import EmptyState from "@/components/common/empty-state";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-cards";
import { Calendar1Icon, RocketIcon } from "lucide-react";

export default function RecentlyLaunchedProduct() {
  const recentlyLaunchedProducts = [];
  return (
    <section className="px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-16">
      <div className="wrapper space-y-8 sm:space-y-12 mb-8 sm:mb-12">
        <SectionHeader
          title="Recently Launched Products"
          icon={Calendar1Icon}
          description="The most recently lunched products on the platform"
        />
      </div>
      {recentlyLaunchedProducts.length > 0 ? (
        <div className="grid-wrapper">
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
  );
}
