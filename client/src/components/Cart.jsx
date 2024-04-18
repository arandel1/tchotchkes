import { useState } from "react";
import { useEffect } from "react";
import ViewDetails from "./ViewDetails";
import OrderTotal from "./OrderTotal";

export default function Cart({ auth, products }) {
  console.log(auth);
  const [cartItems, setCartItems] = useState([]);
  // const [cartAuth, setCartAuth] = useState();

  useEffect(() => {
    async function getOrder() {
      const baseUrl = "http://localhost:8080/tchotchke";
      try {
        const cartAuth = !auth.id ? JSON.parse(auth) : auth;
        console.log(cartAuth);
        console.log("Fetching orders...");

        const response = await fetch(`${baseUrl}/orders/${cartAuth.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch order.");
        }
        const apiOrders = await response.json();
        console.log(apiOrders);

        setCartItems(apiOrders);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    }
    getOrder();
  }, []);

  //OrderTotal calculator
  const priceArray = cartItems.map((order) => order.price);
  if (cartItems.length === 0) {
    <h4>Cart is empty.</h4>;
  }
  const cartTotal = priceArray.reduce((total, price) => total + price, 0);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {console.log("Cart items length:", cartItems.length)}
      {cartItems.length === 0 ? (
        <p> Your cart is empty.</p>
      ) : (
        cartItems.map((product) => (
          <div key={product.id} className="product">
            <img height="100px" src={product.imgURL} alt={product.name}></img>
            <h5>{product.name}</h5>
            <h5>${product.price}</h5>
            <button>Remove Item from Cart</button>
          </div>
        ))
      )}
      <h4>Order Total: ${cartTotal}</h4>

      {/* ({cartItems.map((product) => (
        
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
      
      ) :  (
      
        <p>Loading cart ...</p>
      ) */}
    </div>
  );
}
