import { CompassIcon, HomeIcon, RocketIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      {/* Updated Logo with Hero Palette */}
      <div className="size-8 sm:size-9 rounded-lg bg-[#4ade80] flex items-center justify-center shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-transform group-hover:scale-110">
        <RocketIcon className="size-5 text-[#04120a]" />
      </div>
      <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
        Ve<span className="text-[#4ade80]">rt</span>ex
      </span>
    </Link>
  );
};

export default function Header() {
  const isSingedIn = false; // TODO: Replace with actual authentication logic

  return (
    <header className="sticky top-0 z-[60] w-full border-b border-[#1a4d2e]/40 bg-[#04120a]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#04120a]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Logo />

          {/* Navigation with custom hover states */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#a3b899] hover:text-[#4ade80] transition-all hover:bg-[#1a4d2e]/20 rounded-full"
            >
              <HomeIcon className="size-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/explore"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#a3b899] hover:text-[#4ade80] transition-all hover:bg-[#1a4d2e]/20 rounded-full"
            >
              <CompassIcon className="size-4" />
              <span>Explore</span>
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {isSingedIn ? (
              <>
                <Button 
                  asChild 
                  size="sm"
                  className="hidden sm:flex bg-[#4ade80] text-[#04120a] hover:bg-[#3dbd6d] font-semibold shadow-[0_0_10px_rgba(74,222,128,0.2)]"
                >
                  <Link href="/submit">Submit Product</Link>
                </Button>
                <Button variant="ghost" size="icon" className="text-[#a3b899] hover:text-white hover:bg-[#1a4d2e]/30 rounded-full">
                  <UserIcon className="size-5" />
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  className="text-xs sm:text-sm text-[#a3b899] hover:text-white hover:bg-[#1a4d2e]/20" 
                  size="sm"
                >
                  Sign In
                </Button>
                <Button 
                  className="text-xs sm:text-sm bg-[#4ade80] text-[#04120a] hover:bg-[#3dbd6d] font-bold px-5" 
                  size="sm"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}