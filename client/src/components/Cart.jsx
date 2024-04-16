import { useState } from "react";
import { useEffect } from "react";
import ViewDetails from "./ViewDetails";

export default function Cart({ usersId }) {
  console.log(usersId)
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function getOrder() {
      const baseUrl = "http://localhost:8080/tchotchke";
      try {

        console.log("Fetching orders...")

        const response = await fetch(`${baseUrl}/orders`);
        if (!response.ok) {
          throw new Error("Failed to fetch order.");
        }
        const apiOrders = await response.json();

        //console.log('Fetched Orders:', apiOrders);
       
        const userOrders = apiOrders.filter((order) => order.usersId === usersId);
        console.log(userOrders, "userOrders");
        setCartItems(userOrders);      
       } catch (error) {
        console.error("Error fetching order:", error);
      }
    }
    getOrder();
  }, []);

  // function removeProduct(product) {
  //   const removeIndex = cartItems.findIndex(product);
  //   const removeItem = cartItems.splice(removeIndex.valueOf());
  //   return removeItem(), setCart(cartItems);
  // }

  // const priceArray = cartItems.map((product) => product.price);
  // if (cartItems.length === 0) {
  //   return <h4>Your cart is EMPTY.</h4>;
  // }

  // const cartTotal = priceArray.reduce((total, price) => total + price);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {console.log('Cart items length:', cartItems.length)}
        {cartItems.length === 0 ? (

          <p> Your cart is empty.</p>
        
        ) : (

          cartItems.map((product) => (
            <div key = {product.id} className="product">
              <img height = "100px" src = {product.imgURL} alt = "thumbnail"></img>
              <h5>{product.name}</h5>
              <h5>${product.price}</h5>
              {/* <button onClick={() => navigate(`/products/${product.id}`)}>
                View Details
              </button> */}
              {/* <button onClick={() => removeProduct(id)}>Remove</button> */}
            </div>
          ))
        )}
          {/* <h4>Cart Total: ${cartTotal}</h4> */}

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
