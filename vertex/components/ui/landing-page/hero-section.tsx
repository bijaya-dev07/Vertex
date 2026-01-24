import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Rocket,
  MoveRight,
  RocketIcon,
  User2Icon,
  EyeIcon,
} from "lucide-react";
import StatsCard from "./stat-cards";

export default function HeroSection() {
  const LiveBadge = () => {
    return (
      <Badge
        variant="outline"
        className="px-4 py-2 mb-2 text-sm gap-1 backdrop:blur-sm"
      >
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

  const statsData = [
    {
      icon: RocketIcon,
      value: "1,200+",
      label: "Projects Shared",
      hasBorder: true,
    },
    {
      icon: User2Icon,
      value: "50,000+",
      label: "Community Members",
      hasBorder: true,
    },
    { icon: EyeIcon, value: "300,000+", label: "Votes Cast" },
  ];
  return (
    <div>
      <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
        <div className="wrapper">
          <div className="flex flex-col items-center justify-center lg:py-8 py-8 text-center">
            <LiveBadge />

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-2 max-w-6xl">
              Launch your product, Get discovered, Grow with the community.
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-6xl leading-relaxed">
              Vertex is a modern product launch platform where creators showcase
              apps, AI tools, SaaS products, and side projects. Get real
              feedback, community votes, and visibility — all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button asChild className="text-base px-6 shadow-lg" size="lg">
                <Link href="/submit">
                  {" "}
                  <Rocket className="size-5" />
                  Share Your Product
                </Link>
              </Button>
              <Button
                variant="secondary"
                asChild
                className="text-base px-6 shadow-lg"
                size="lg"
              >
                <Link href="/submit">
                  {" "}
                  Explore Products
                  <MoveRight className="size-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full ">
              {statsData.map((stat) => (
                <StatsCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
