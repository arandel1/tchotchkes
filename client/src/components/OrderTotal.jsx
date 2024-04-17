import { useEffect } from "react";
import Cart from "./Cart";

export default function OrderTotal() {
  const [orderTotal, setOrderTotal] = useState("");

  useEffect(() => {
    async function getOrders() {
      const baseUrl = "http://localhost:8080/tchotchke";
      try {
        const response = await fetch(`${baseUrl}/orders`);
        if (!response.ok) {
          throw new Error("Failed to fetch order");
        }
        const apiOrders = await response.json();
        setOrderTotal(apiOrders);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    }
    getOrders();
  }, [orderTotal]);

  const priceArray = cartItems.map((product) => product.price);
  if (cartItems.length === 0) {
    <h4>Cart is empty.</h4>;
  }

  const cartTotal = priceArray.reduce((total, price) => total + price);
  return (
    <div>
      <h4>Cart Total: ${cartTotal}</h4>;
    </div>
  );
}
