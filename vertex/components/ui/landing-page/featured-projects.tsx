import SectionHeader from "@/components/common/section-header";
import { ArrowRightIcon, Star } from "lucide-react";
import { Button } from "../button";
import Link from "next/link";

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
              <Link href="/explore/projects">
              See All <ArrowRightIcon className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
