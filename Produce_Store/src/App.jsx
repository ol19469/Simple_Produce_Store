import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Banana", price: 0.5 },
    { id: 2, name: "Zucchini", price: 2.99 },
    { id: 3, name: "Red Bell Pepper", price: 2.69 },
    { id: 4, name: "Broccoli", price: 2.99 },
    { id: 5, name: "Blueberries", price: 4.49 },
    { id: 6, name: "Apples", price: 2.49 },
    { id: 7, name: "Limes", price: 1.49 },
    { id: 8, name: "Strawberries", price: 3.99 },
    { id: 9, name: "Carrots", price: 1.99 },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  return (
    <div>
      <h1>Simple Produce Store</h1>
      <ProductList products={products} addToCart={addToCart} />
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}
export default App;
