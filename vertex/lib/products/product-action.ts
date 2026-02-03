"use server";

import { auth } from "@clerk/nextjs/server";
import error from "next/error";
import { productSchema } from "./product-schema";

type FormState = {
    success: boolean;
    error?: Record<string, string>;
    message: string;
};

export const addProductAction = async (prevState: FormState, formData: FormData) => {
    console.log(formData);

    try {
        const { userId } = await auth();

        if (!userId) {
            return {
                success: false,
                error: { auth: "User not authenticated" },
                message: "You must be logged in to add a product.",
            };
        }

        //data validation
        const rawFormData = Object.fromEntries(formData.entries());
        const validatedData = productSchema.safeParse(rawFormData);
        const validatedData = productSchema.safeParse(rawFormData);
        if (!validatedData.success) {
             return {
            success: false,
            error: error,
            message: "An error occurred while adding the product.",
        };
        
        const data = validatedData.data;

        //transform tags into array
    } catch (error) {
        return {
            success: false,
            error: error,
            message: "An error occurred while adding the product.",
        };
    }
}