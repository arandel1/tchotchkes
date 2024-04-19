import { useState } from "react";
import { useEffect } from "react";
import RemoveItemFromCart from "./RemoveItemFromCart";

export default function Cart({ auth, products }) {
  //console.log(auth);
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  // const [cartAuth, setCartAuth] = useState();

  useEffect(() => {
    async function getUserProducts() {
      const baseUrl = "http://localhost:8080/tchotchke";
      try {
        const cartAuth = !auth.id ? JSON.parse(auth) : auth;
        console.log(cartAuth.id);

        // console.log("Fetching products...");

        const response = await fetch(`${baseUrl}/orders/${cartAuth.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }
        const ordersAndProducts = await response.json();
        console.log(ordersAndProducts, "ordersAndProducts");
        setCartItems(ordersAndProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    if (cartItems.length <= 0) {
      getUserProducts();
    }
  }, [cartItems]);

  console.log(cartItems)

  const priceArray = cartItems.map((order) => order.price);
  if (cartItems.length === 0) {
    <h4>Cart is empty.</h4>;
  }
  const cartTotal = priceArray.reduce((total, price) => total + price, 0);

  console.log("cartItems.products", cartItems.products);
  console.log("cartItems.orders", cartItems.orders);
  return (
    <div className="container">
      <h2>Your Cart</h2>
      {/*{console.log("Cart items length:", cartItems.products.length)}*/}
      {cartItems.length === 0 ? (
        <p> Your cart is empty.</p>
      ) : (
        cartItems.map((product) => {
          const orderFilter = cartItems.filter(
            (order) => order.productsId === product.id
          );
          const orderId = orderFilter.map((order) => order.id);
          // const orderId =
          //   cartItems.orders &&
          //   cartItems.orders
          //     .filter((order) => order.productsId === product.id)
          //     .map((order) => order.id);

          return (
            <div key={product.orderId} className="product">
              <img height="100px" src={product.imgURL} alt={product.name}></img>
              <h5>{product.name}</h5>
              <h5>${product.price}</h5>
              <RemoveItemFromCart
                orderId={orderId[0]}
                setCartItem={setCartItems}
                cartItems={cartItems}
              />
            </div>
          );
        })
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
      
    <h4>Cart Total: ${cartTotal}</h4>*/}
    </div>
  );
}
