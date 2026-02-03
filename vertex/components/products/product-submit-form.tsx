"use client";

import { FormFields } from "@/components/forms/form-field";
import { Button } from "../ui/button";
import { RocketIcon } from "lucide-react";
import { addProductAction } from "@/lib/products/product-action";
import { useActionState } from "react";

const initialState = {
  error: {},
  message: "",
  success: false,
};

export default function ProductSubmitForm() {
  const [state, formAction, isPending] = useActionState(
    addProductAction,
    initialState,
  );

  
  console.log("Form State:", state, "Is Pending:", isPending);

  return (
    <form className="space-y-6" action={formAction}>
      <FormFields
        label="Product Name"
        name="productName"
        id="productName"
        placeholder="Enter the name of your product"
        required={true}
        onChange={() => {}}
        error=""
      />
      <FormFields
        label="Product Slug"
        name="productSlug"
        id="productSlug"
        placeholder="Enter the slug of your product"
        required={true}
        onChange={() => {}}
        error=""
        helperText="URL friendly names"
      />
      <FormFields
        label="Tagline"
        name="tagline"
        id="tagline"
        placeholder="Enter a brief tagline of your product"
        required={true}
        onChange={() => {}}
        error=""
      />
      <FormFields
        label="Description"
        name="description"
        id="description"
        placeholder="Enter a brief description of your product"
        required={true}
        onChange={() => {}}
        error=""
        textarea={true}
      />
      <FormFields
        label="Website URL"
        name="websiteURL"
        id="websiteURL"
        placeholder="Enter the URL of your product"
        required={true}
        onChange={() => {}}
        error=""
        helperText="URL of your product"
      />
      <FormFields
        label="Tags"
        name="tags"
        id="tags"
        placeholder="Enter tags for your product"
        required={true}
        onChange={() => {}}
        error=""
        helperText="Tags related to your product"
      />
      <Button type="submit" slot="lg" className="w-full">
        <RocketIcon className="size-4" />
        Submit Product
      </Button>
    </form>
  );
}
