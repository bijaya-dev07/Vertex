import z from "zod";

const productSchema = z.object({
    name: z.string().min(1, "Product name is required").max(100, { message: "Product name must be less than 100 characters" }),
    description: z.string().min(1, "Product description is required").max(500, { message: "Product description must be less than 500 characters" }),
    slug: z.string().min(1, "Product slug is required").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be URL friendly"),
    tagline: z.string().min(1, "Tagline is required").max(100, { message: "Tagline must be at less than 100 characters" }),
    websiteURL: z.string().url("Invalid URL format"),
    tags: z.string().min(1, "At least one tag is required").max(100, { message: "Tags must be less than 100 characters" }).transform((val) => val.split(",").map((tag) => tag.trim())),
});