"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { productSchema } from "./product-validations";
import { db } from "@/db";
import { products } from "@/db/schema";
import z from "zod";

type FormState = {
    success: boolean;
    error?: Record<string, string>;
    message: string;
};

export const addProductAction = async (prevState: FormState, formData: FormData) => {
    console.log(formData);

    //authentication
    try {
        const { userId } = await auth();

        if (!userId) {
            return {
                success: false,
                error: { auth: "User not authenticated" },
                message: "You must be logged in to add a product.",
            };
        }

        const user = await currentUser();
        const userEmail = user?.primaryEmailAddress?.emailAddress || "unknown";
        //data validation
        const rawFormData = Object.fromEntries(formData.entries());

        const validatedData = productSchema.safeParse(rawFormData);

        if (!validatedData.success) {
            return {
                success: false,
                error: validatedData.error.flatten(),
                message: "An error occurred while adding the product.",
            };
        }

        const { name, tagline, description, slug, websiteURL, tags } = validatedData.data;

        const tagArray = tags ? tags.filter((tag) => typeof tag === "string") : [];
        //transform tags into array/
        await db.insert(products).values({
            name,
            description,
            slug,
            tagline,
            website_url: websiteURL,
            tags: tagArray, status: "pending",
            submittedBy: userEmail,
            user_id: userId,
        });

        return {
            success: true,
            message: "Product added successfully and it will be reviewed by our team shortly.",
        };
    } catch (error) {
        console.error("Error in addProductAction:", error);
        if (error instanceof z.ZodError) {
            return {
                success: false,
                error: error.flatten(),
                message: "Validation error occurred while adding the product.",
            };
        }
        return {
            success: false,
            error: error,
            message: "An error occurred while adding the product.",
        };
    }
}