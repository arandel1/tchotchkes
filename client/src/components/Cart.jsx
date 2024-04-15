import { useState } from "react";

import { useNavigate } from "react-router-dom";
import ViewDetails from "./ViewDetails";

export default function Cart({ products }) {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    // {
    //   id: 1,
    //   name: "Aero Transistor Radio",
    //   desc: "Vintage Aero Transistor Radio, AM Band Only, Made In Hong Kong, Circa 1960s",
    //   imgURL:
    //     "https://upload.wikimedia.org/wikipedia/commons/7/70/Vintage_Aero_Transistor_Radio%2C_No_Model_Number%2C_AM_Band_Only%2C_6_Transistors%2C_Made_In_Hong_Kong%2C_Circa_1960s_%287721623244%29.jpg",
    //   price: 75,
    //   category_name: "Electronics",
    // },
    // {
    //   id: 7,
    //   name: "Purple Perfume Bottle",
    //   desc: "Perfume set from Soviet Union, circa 1965",
    //   imgURL:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Perfume_set_from_Sovjetunio_cca_1965.jpg/1200px-Perfume_set_from_Sovjetunio_cca_1965.jpg?20100417190340",
    //   price: 40,
    //   category_name: "Miscellaneous Collectibles",
    // },
  ]);

  function addToCart(product) {
    setCartItems((currItems) => [
      ...currItems,
      <ViewDetails id={product.id} />,
    ]);
  }

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
