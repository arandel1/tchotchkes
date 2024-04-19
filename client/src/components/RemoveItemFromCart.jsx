// create a function that will remove a product from the order model
// Fetch call
//
import { useState } from "react";

export default function RemoveItemFromCart({
  orderId,
  setCartItem,
  cartItems,
}) {
  const [errorMessage, setErrorMessage] = useState();

  const baseUrl = "http://localhost:8080/tchotchke/orders";
  const handleRemoveItem = async (e) => {
    e.preventDefault();
    try {
      {
        const response = await fetch(`${baseUrl}/${orderId}`, {
          method: "DELETE",
        });
      }
      setCartItem([]);
    } catch (error) {
      console.error("Error", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };
  return <button onClick={handleRemoveItem} className="btn btn-dark">Remove Item from Cart</button>;
}