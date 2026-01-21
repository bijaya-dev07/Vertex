import FeaturedProjects from "@/components/ui/landing-page/featured-projects";
import HeroSection from "@/components/ui/landing-page/hero-section";
import RecentlyLaunchedProduct from "@/components/ui/landing-page/recently-lunched-product";

export default function Home() {
  return (
    <div>
   <HeroSection />
   <FeaturedProjects />
   <RecentlyLaunchedProduct />
   </div>
  );
}
