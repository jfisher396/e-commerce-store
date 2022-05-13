import { Button } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

interface Props {
  products: Product[];
  addProductHandler: () => void;
}

export default function Catalog({ products, addProductHandler }: Props) {
  return (
    <>
      <ProductList products={products}></ProductList>
      <Button variant="contained" onClick={addProductHandler}>Add Product</Button>
    </>
  );
}
