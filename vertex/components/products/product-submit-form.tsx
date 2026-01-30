"use client";

import { FormFields } from "@/components/forms/form-field";

export default function ProductSubmitForm() {
  return (
    <form className="space-y-6">
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
      />
      <FormFields
        label="Website URL"
        name="websiteURL"
        id="websiteURL"
        placeholder="Enter the URL of your product"
        required={true}
        onChange={() => {}}
        error=""
      />
      <FormFields
        label="Tags"
        name="tags"
        id="tags"
        placeholder="Enter tags for your product"
        required={true}
        onChange={() => {}}
        error=""
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Submit Product
      </button>
    </form>
  );
}
