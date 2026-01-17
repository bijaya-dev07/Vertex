import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  const LiveBadge = () => {
    return (
      <Badge
        variant="outline"
        className="px-4 py-2 mb-8 text-sm backdrop:blur-sm"
      >
        {" "}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>{" "}
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-muted-foreground">
          Join Thousands of creatots sharing their works.
        </span>
      </Badge>
    );
  };
  return (
    <div>
      <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
        <div className="wrapper">
          <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center">
            <LiveBadge />

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 max-w-5xl">
              Launch your product.
              <br />
              Get discovered. Grow with the community.
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed">
              Vertex is a modern product launch platform where creators showcase
              apps, AI tools, SaaS products, and side projects. Get real
              feedback, community votes, and visibility — all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button asChild className="text-base px-6 shadow-lg" size="lg">
                <Link href="/submit">Get Started</Link>
              </Button>
              <Button
                variant="secondary"
                asChild
                className="text-base px-6 shadow-lg"
                size="lg"
              >
                <Link href="/submit">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
