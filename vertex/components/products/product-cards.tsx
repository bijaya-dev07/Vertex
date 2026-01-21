import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

interface product {
  id: number;
  name: string;
  description: string;
  tags: string[];
  votes: number;
  isFeatuered: boolean;
}

export default function ProductCard({ product }: { product: product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <CardTitle>{product.name}</CardTitle>
                {product.isFeatuered && (
                  <Badge className="mb-2">Featured</Badge>
                )}
              </div>
              <CardDescription>{product.description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardFooter>
          <div className="flex items-center gap-2">
            {product.tags.map((tag) => (
              <Badge variant="secondary" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
