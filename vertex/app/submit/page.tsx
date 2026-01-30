import SectionHeader from "@/components/common/section-header";
import ProductSubmitForm from "@/components/products/product-submit-form";
import { Sparkle } from "lucide-react";

export default function SubmitPage() {
  return (
    <section className="py-20 px-20">
      <div className="wrapper">
        <SectionHeader
          title="Submit a Product"
          description="Share your product with the Vertex community by submitting it here."
          icon={Sparkle}
        />
        <div className="max-w-2xl mx-auto">
          <ProductSubmitForm />
        </div>
      </div>
    </section>
  );
}
