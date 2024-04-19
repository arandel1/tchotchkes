import { useState } from "react";
import { useEffect } from "react";
import RemoveItemFromCart from "./RemoveItemFromCart";

export default function Cart({ auth, products }) {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getUserProducts() {
      const baseUrl = "http://localhost:8080/tchotchke";
      try {
        const cartAuth = !auth.id ? JSON.parse(auth) : auth;

        const response = await fetch(`${baseUrl}/orders/${cartAuth.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }
        const ordersAndProducts = await response.json();
        setCartItems(ordersAndProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    if (cartItems.length <= 0) {
      getUserProducts();
    }
  }, [cartItems]);  
  
  const productArray = cartItems.products || []
  const orderArray = cartItems.orders || []

  const priceArray = productArray.map((products) => products.price);
  const cartTotal = priceArray.reduce((total, price) => total + price, 0);

  return (
    <>
      <h3 className="text-center mt-5">Your Cart</h3> <br />
        <div className="container cart-container py-5 px-3 d-flex justify-content-center"> 
            <div className="col-4">
              <div className="cart-card">
                {cartItems.length === 0 ? (
                  <p className="col"> Your cart is empty. </p>
                ) : (
                  productArray.map((product) => {
                    const orderId =
                      orderArray &&
                      orderArray
                        .filter((order) => order.productsId === product.id)
                        .map((order) => order.id);
                    return (
                      <div key={product.orderId} className="col">
                        <img 
                        className= "card-img-top img-fluid product-image rounded border"
                        style={{ objectFit: 'cover' }} 
                        src={product.imgURL} alt={product.name}>
                        </img>
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
              </div> <br />
              <div className="price-total">
                <h4>Cart Total: ${cartTotal}</h4>
              </div>
            </div>
        </div>
    </>
  );
}