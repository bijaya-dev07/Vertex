import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
        Join Thousands of creatots sharing their works.
      </Badge>
    );
  };
  return (
    <div>
      <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
        <div className="wrapper">
          <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center">
            <LiveBadge />

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Launch your product.
              <br />
              Get discovered.
              <br />
              Grow with the community.
            </h1>

            <p className="text-muted-foreground text-lg">
              Vertex is a modern product launch platform where creators showcase
              apps, AI tools, SaaS products, and side projects. Get real
              feedback, community votes, and visibility — all in one place.
            </p>

            <div className="flex gap-4">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
