import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Container, CssBaseline } from "@mui/material";
import Header from "./Header";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: "product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        brand: "generic",
        description: "default",
        pictureUrl: "https://placekitten.com/200/300",
      },
    ]);
  }

  return (
    <>
      <CssBaseline />
      <Header></Header>
      <Container>
        <Catalog products={products} addProductHandler={addProduct} />
      </Container>
      
    </>
  );
}

export default App;
