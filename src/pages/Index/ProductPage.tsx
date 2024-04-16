import React from "react";
import ProductDetail from "./ProductDetail";
import ProductImage from "./ProductImage";

export default function ProductPage() {
  return (
    <div className="w-full h-screen flex md:flex-col-reverse" id="product-page">
      <ProductDetail />
      <ProductImage />
    </div>
  );
}
