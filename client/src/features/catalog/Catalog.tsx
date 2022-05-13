import React from "react";
import { Product } from "../../app/models/product"

interface Props {
  products: Product[];
  addProductHandler: () => void;
}

export default function Catalog({ products, addProductHandler }: Props) {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProductHandler}>Add Product</button>
    </>
  );
}
