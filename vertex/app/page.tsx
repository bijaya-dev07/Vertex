import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="flex flex-col items-start gap-6 max-w-3xl">
      <Badge variant="secondary">
        Built for makers, founders, and indie creators
      </Badge>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Launch your product.<br />
        Get discovered.<br />
        Grow with the community.
      </h1>

      <p className="text-muted-foreground text-lg">
        Vertex is a modern product launch platform where creators showcase
        apps, AI tools, SaaS products, and side projects. Get real feedback,
        community votes, and visibility — all in one place.
      </p>

      <div className="flex gap-4">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">
          Explore Products
        </Button>
      </div>
    </section>
  );
}
