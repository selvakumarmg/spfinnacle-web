import React from "react";
import ProductDetail from "./ProductDetail";
import ProductImage from "./ProductImage";

export default function ProductPage() {
  return (
    <div
      className="relative md:h-max w-full h-screen flex md:flex-col-reverse md:items-center sm:h-min md:top-10 sm:flex-col-reverse sm:items-center sm:top-14"
      id="product-page"
    >
      <ProductDetail />
      <ProductImage />
    </div>
  );
}
