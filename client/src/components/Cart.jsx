import { useState } from "react";
import { useEffect } from "react";
import ViewDetails from "./ViewDetails";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function getOrder() {
      const baseUrl = "http://localhost:8080/tchotchke";
      try {
        const response = await fetch(`${baseUrl}/orders`);
        if (!response.ok) {
          throw new Error("Failed to fetch order");
        }
        const apiOrders = await response.json();
        setCartItems(apiOrders);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    }
    getOrder();
  }, []);

  function removeProduct(product) {
    const removeIndex = cartItems.findIndex(product);
    const removeItem = cartItems.splice(removeIndex.valueOf());
    return removeItem(), setCart(cartItems);
  }

  const priceArray = cartItems.map((product) => product.price);
  if (cartItems.length === 0) {
    return <h4>Cart is empty.</h4>;
  }

  const cartTotal = priceArray.reduce((total, price) => total + price);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cartItems.map((product) => (
        <div key={product.id} className="product">
          <img height="100px" src={product.imgURL} alt="thumbnail"></img>
          <h5>{product.name}</h5>
          <h5>${product.price}</h5>
          <button onClick={() => navigate(`/products/${product.id}`)}>
            View Details
          </button>
          <button onClick={() => removeProduct(id)}>Remove</button>
        </div>
      ))}
      <h4>Cart Total: ${cartTotal}</h4>
    </div>
  );
}
