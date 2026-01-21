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
      <Card className="group card-hover hover:bg-primary-foreground/10">
        <CardTitle>{product.name}</CardTitle>
        {product.isFeatuered && <Badge className="mb-2">Featured</Badge>}
        <CardDescription>{product.description}</CardDescription>

        <CardHeader>
          <CardFooter>
            {product.tags.map((tag) => (
              <Badge variant="secondary" key={tag}>
                {tag}
              </Badge>
            ))}
          </CardFooter>
        </CardHeader>
      </Card>
    </Link>
  );
}
