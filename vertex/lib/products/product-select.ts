import { db } from "@/db";
import { products } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { connection } from "next/server";

export async function getFeaturedProducts() {
    "use cache";
    const productData = await db.select().from(products).where(eq(products.status, "approved")).orderBy(desc(products.voteCount)).limit(9);

    return productData;

}
export async function getAllProducts() {
    const productData = await db.select().from(products).where(eq(products.status, "approved")).orderBy(desc(products.voteCount)).limit(9);

    return productData;

}
export async function getRecentLaunchedProducts() {
    await connection;
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    const productData = await getAllProducts();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    return productData.filter(
        (product) => product.createdAt && new Date(product.createdAt.toISOString()) >= oneWeekAgo
    )


}