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
      label: "Members",
      hasBorder: true,
    },
    { icon: EyeIcon, value: "300k+", label: "Votes Cast" },
  ];

  return (
    <div className="relative min-h-screen bg-[#0a1f14] overflow-hidden selection:bg-[#4ade80]/30">
      {/* 1. THE GRID SYSTEM (Directly from your image) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.12]" 
        style={{ 
          backgroundImage: `linear-gradient(#2d5a3d 1px, transparent 1px), linear-gradient(90deg, #2d5a3d 1px, transparent 1px)`, 
          backgroundSize: '45px 45px' 
        }} 
      />

      {/* 2. THE RADIAL GLOWS (Matching the lighting in your image) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#2d5a3d]/35 rounded-full blur-[120px] pointer-events-none opacity-80" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[400px] h-[400px] bg-[#4ade80]/10 rounded-full blur-[100px] pointer-events-none" />

      <section className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          
          {/* LIVE BADGE */}
          <Badge
            variant="outline"
            className="px-4 py-2 mb-8 text-sm gap-3 border-[#1a4d2e] bg-[#0a2012]/60 text-[#4ade80] backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-1000"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]"></span>
            </span>
            <span className="font-medium tracking-wide">
              Join Thousands of creators sharing their works
            </span>
          </Badge>

          {/* MAIN HEADING */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05] mb-8 max-w-5xl bg-gradient-to-b from-white via-white to-[#a3b899] bg-clip-text text-transparent">
            Launch your product, <br className="hidden md:block" /> 
            <span className="text-[#4ade80] drop-shadow-[0_0_15px_rgba(74,222,128,0.3)]">Get discovered.</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[#a3b899] text-lg sm:text-xl mb-12 max-w-2xl leading-relaxed font-medium">
            Vertex is the modern stage for creators. Showcase apps, SaaS, and AI tools 
            to a community that breathes innovation.
          </p>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-5 mb-24 w-full justify-center items-center">
            <Button asChild className="w-full sm:w-auto text-base px-10 h-14 bg-[#4ade80] text-[#04120a] hover:bg-[#3dbd6d] transition-all hover:scale-105 shadow-[0_0_25px_rgba(74,222,128,0.4)]" size="lg">
              <Link href="/submit" className="flex items-center gap-2 font-bold">
                <Rocket className="size-5" />
                Share Your Product
              </Link>
            </Button>
            
            <Button
              variant="outline"
              asChild
              className="w-full sm:w-auto text-base px-10 h-14 border-[#1a4d2e] bg-transparent hover:bg-[#1a4d2e]/30 text-white transition-all backdrop-blur-sm"
              size="lg"
            >
              <Link href="/explore" className="flex items-center gap-2">
                Explore Products
                <MoveRight className="size-5" />
              </Link>
            </Button>
          </div>

          {/* STATS CONTAINER */}
          <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 border border-[#1a4d2e] rounded-3xl bg-[#0a2012]/50 backdrop-blur-2xl overflow-hidden shadow-2xl">
            {statsData.map((stat) => (
              <StatsCard key={stat.label} {...stat} />
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}