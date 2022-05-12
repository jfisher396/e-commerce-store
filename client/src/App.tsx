import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      name: "product1",
      price: 200.0,
    },
    {
      name: "product2",
      price: 100.0,
    },
  ]);

  useEffect(() => {
    fetch('http://localhost:5001/api/products') 
    .then((response) => response.json())
    .then((data) => setProducts(data))
  }, []) 

  function addProduct() {
    setProducts([
      ...products,
      {
        name: "product",
        price: 300.0,
      },
    ]);
  }

  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map((item) => (
          <li key={item.name}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
