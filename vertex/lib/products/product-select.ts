import { db } from "@/db";
import { products } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function getFeaturedProducts() {
    const productData = await db.select().from(products).where(eq(products.status, "approved")).orderBy(desc(products.voteCount)).limit(9);

    return productData;

}

export async function getRecentLaunchedProducts() {
    const productData = await getFeaturedProducts();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    return productData.filter(
        (product) => product.createdAt && new Date(product.createdAt.toISOString()) >= oneWeekAgo
    )


}