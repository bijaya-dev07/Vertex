"use client";

import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function ProductSubmitForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="product-name">Product Name</Label>
        <Input
          id="product-name"
          type="text"
          placeholder="Enter product name"
          required
          onChange={() => {}}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="product-url">Product URL</Label>
        <Input
          id="product-url"
          type="url"
          placeholder="https://example.com"
          required
          onChange={() => {}}
        />
      </div>
    </form>
  );
}
