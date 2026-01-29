import { db } from "@/db";
import { products } from "@/db/schema";

export async function getFeaturedProducts() {
    const productData = await db.select().from(products);

    console.log("Product Data:", productData);
    return productData;

}