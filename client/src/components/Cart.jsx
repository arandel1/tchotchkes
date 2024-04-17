import { useState } from "react";
import { useEffect } from "react";
import ViewDetails from "./ViewDetails";

export default function Cart({ usersId, products}) {
  console.log(usersId)
  console.log(products)
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

        const getProductDetails = apiOrders.filter(order => products.some(product => product.id === order.productsId)).map(order => products.find(product=> product.id === order.productsId))

        console.log(getProductDetails)
        setCartItems(getProductDetails);      
       } catch (error) {
        console.error("Error fetching order:", error);
      }
    }
    getOrder();
  }, []);

  // function removeItemFromCart() {
    
  // }


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


  // Match correct id for product in the Orders model with the correct id of the same product in the Products model

  // extract the ids from the models

  // productsId === product.id
  // Products contains id
  // userOrders contains productsId
  // I need those two values to match -- if the Products id === userOrders productsId, then display the product object (the image, name, description, and price)

  

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {console.log('Cart items length:', cartItems.length)}
        {cartItems.length === 0 ? (

          <p> Your cart is empty.</p>
        
        ) : (

          cartItems.map((product) => (
            <div key = {product.id} className="product">
              <img height = "100px" src = {product.imgURL} alt = {product.name}></img>
              <h5>{product.name}</h5>
              <h5>${product.price}</h5>
              <button
              // onClick={() => removeProduct(id)}
              >Remove Item from Cart
              </button>
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
