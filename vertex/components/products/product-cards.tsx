import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { ChevronUpIcon, StarIcon } from "lucide-react";
import { Button } from "../ui/button";

interface product {
  id: number;
  name: string;
  description: string;
  tags: string[];
  votes: number;
  isFeatuered: boolean;
}

export default function ProductCard({ product }: { product: product }) {
  const hasVoted = false; // Replace with actual voting
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 min-h-55 mb-4 sm:mb-6 lg:mb-8">
        <CardHeader className="flex-1">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                {product.isFeatuered && (
                  <Badge className=" gap-1 bg-primary text-primary-foreground ">
                    <StarIcon className="size-3 sm:size-4" />
                    Featured
                  </Badge>
                )}
              </div>
              <CardDescription className="text-xs sm:text-sm mt-1">{product.description}</CardDescription>
            </div>

            {/* voting buttons */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <Button
                variant="ghost"
                size="icon-sm"
                className={`h-7 w-7 sm:h-8 sm:w-8 hover:bg-primary/20 ${hasVoted ? "text-primary" : "text-foreground"}`}
              >
                <ChevronUpIcon className="size-4 sm:size-5" />
              </Button>
              <span className="text-xs sm:text-sm font-semibold transition-colors text-foreground">
                {product.votes}
              </span>
              <Button
                variant="ghost"
                size="icon-sm"
                className={`h-7 w-7 sm:h-8 sm:w-8 hover:bg-primary/20 ${hasVoted ? "text-primary" : "text-foreground"}`}
              >
                <ChevronUpIcon className="size-4 sm:size-5 rotate-180" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardFooter>
          <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
            {product.tags.map((tag) => (
              <Badge variant="secondary" key={tag} className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
