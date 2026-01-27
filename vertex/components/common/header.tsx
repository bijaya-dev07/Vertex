import { CompassIcon, HomeIcon, RocketIcon, SparkleIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      {/* Updated Logo with Hero Palette */}
      <div className="size-8 sm:size-9 rounded-lg bg-[#4ade80] flex items-center justify-center shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-transform group-hover:scale-110">
        <RocketIcon className="size-5 text-[#0a1f14]" />
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
    <header className="sticky top-0 z-60 w-full border-b border-[#2d5a3d]/40 bg-[#0a1f14]/80 backdrop-blur-xl supports-backdrop-filter:bg-[#0a1f14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Logo />

          {/* Navigation with custom hover states */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#a3b899] hover:text-[#4ade80] transition-all hover:bg-[#2d5a3d]/20 rounded-full"
            >
              <HomeIcon className="size-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/explore"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#a3b899] hover:text-[#4ade80] transition-all hover:bg-[#2d5a3d]/20 rounded-full"
            >
              <CompassIcon className="size-4" />
              <span>Explore</span>
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <Button>Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Button asChild>
                <Link href="/submit">
                  <SparkleIcon className="size-4" />
                  Submit
                </Link>
              </Button>
              <UserButton />
            </SignedIn>
            {/* {isSingedIn ? (
              <>
                <SignedOut>
                  <SignInButton />
                  <SignUpButton>
                    <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </>
            ) : (
              <>
             
              </>
            )} */}
          </div>
        </div>
      </div>
    </header>
  );
}
