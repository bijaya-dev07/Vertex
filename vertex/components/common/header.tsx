import { CompassIcon, HomeIcon, RocketIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="size-7 sm:size-8 rounded-lg bg-primary flex items-center justify-center">
        <RocketIcon className="size-4 sm:size-4 text-primary-foreground" />
      </div>
      <span className="text-base sm:text-xl font-bold">
        Ve<span className="text-primary">rt</span>ex
      </span>
    </Link>
  );
};

export default function Header() {
  const isSingedIn = false; // TODO: Replace with actual authentication logic
  return (
    <header className="py-2 sm:py-3 border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="wrapper px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <Logo />
          <nav className="hidden sm:flex items-center gap-5">
            <Link
              href="/"
              className="flex items-center gap-2 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/10 rounded-md"
            >
              <HomeIcon className="size-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/10 rounded-md"
            >
              <CompassIcon className="size-4" />
              <span className="hidden sm:inline">Explore</span>
            </Link>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            {isSingedIn ? (
              <>
                {" "}
                <Button asChild className="text-xs sm:text-sm" size="sm">
                  <Link href="/submit">Submit Product</Link>
                </Button>
                {/* Clerk Profile */}
                <Button variant="ghost" size="sm">
                  <UserIcon className="size-4" />
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" className="text-xs sm:text-sm" size="sm">Sign In</Button>
                <Button className="text-xs sm:text-sm" size="sm">Sign Up</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
