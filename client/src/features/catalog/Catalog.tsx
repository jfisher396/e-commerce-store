import React from "react";

interface Props {
  products: Product[];
  addProductHandler: () => void;
}

export default function Catalog(props: Props) {
  return (
    <>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
      <button onClick={props.addProductHandler}>Add Product</button>
    </>
  );
}
