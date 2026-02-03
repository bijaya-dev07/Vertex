"use server";

import { auth } from "@clerk/nextjs/server";

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
    } catch (error) {
        return {
            success: false,
            error: error,
            message: "An error occurred while adding the product.",
        };
    }
}