import FeaturedProjects from "@/components/ui/landing-page/featured-projects";
import HeroSection from "@/components/ui/landing-page/hero-section";
import RecentlyLaunchedProduct from "@/components/ui/landing-page/recently-lunched-product";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProjects />
      <Suspense fallback={<div>Loading Recently Launched Products...</div>}>
        <RecentlyLaunchedProduct />
      </Suspense>
    </div>
  );
}
