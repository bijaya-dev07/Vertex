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
  const hasVoted = false; 

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group relative overflow-hidden transition-all duration-300 bg-[#0a2012]/40 border-[#1a4d2e]/60 hover:border-[#4ade80]/50 hover:bg-[#1a4d2e]/20 backdrop-blur-sm min-h-[220px]">
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4ade80]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <CardHeader className="flex-1 relative z-10">
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <CardTitle className="text-lg sm:text-xl font-bold text-white group-hover:text-[#4ade80] transition-colors">
                  {product.name}
                </CardTitle>
                {product.isFeatuered && (
                  <Badge className="gap-1 bg-[#4ade80]/10 text-[#4ade80] border-[#4ade80]/20 hover:bg-[#4ade80]/20">
                    <StarIcon className="size-3 fill-current" />
                    Featured
                  </Badge>
                )}
              </div>
              <CardDescription className="text-[#a3b899] text-sm leading-relaxed line-clamp-3">
                {product.description}
              </CardDescription>
            </div>

            {/* Voting Component - Stylized to match your grid image */}
            <div className="flex flex-col items-center p-1 rounded-lg bg-[#04120a]/60 border border-[#1a4d2e] shrink-0">
              <Button
                variant="ghost"
                size="icon"
                className={`h-8 w-8 hover:text-[#4ade80] hover:bg-transparent transition-colors ${hasVoted ? "text-[#4ade80]" : "text-[#a3b899]"}`}
              >
                <ChevronUpIcon className="size-5" />
              </Button>
              <span className="text-sm font-bold text-white py-1">
                {product.votes}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-[#a3b899] hover:text-red-400 hover:bg-transparent transition-colors"
              >
                <ChevronUpIcon className="size-5 rotate-180" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardFooter className="relative z-10 border-t border-[#1a4d2e]/30 pt-4">
          <div className="flex items-center gap-2 flex-wrap">
            {product.tags.map((tag) => (
              <Badge 
                variant="secondary" 
                key={tag} 
                className="text-[10px] uppercase tracking-wider bg-[#1a4d2e]/40 text-[#a3b899] border-none hover:bg-[#1a4d2e]/60"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}