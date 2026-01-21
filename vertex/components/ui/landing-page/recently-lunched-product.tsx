import SectionHeader from "@/components/common/section-header";
import { RocketIcon } from "lucide-react";

export default function RecentlyLaunchedProduct() {
  return (
    <section className="py-20">
      <div className="wrapper">
        <SectionHeader
          title="Recently Launched Products"
          icon={RocketIcon}
          description="The most recently lunched products on the platform"
        />
      </div>
    </section>
  );
}
