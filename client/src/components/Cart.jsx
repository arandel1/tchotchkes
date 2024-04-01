import { useState } from "react";

export default function Cart() {
  // const [cart, setCart] = useState([]);

  // function removeProduct(id) {
  //   const removeIndex = cart.findIndex(id);
  //   const updatedCart = cart.splice(removeIndex.valueOf());
  //   return setCart(updatedCart);
  // }

  const cart = [
    {
      id: 1,
      name: "Aero Transistor Radio",
      desc: "Vintage Aero Transistor Radio, AM Band Only, Made In Hong Kong, Circa 1960s",
      imgURL:
        "https://upload.wikimedia.org/wikipedia/commons/7/70/Vintage_Aero_Transistor_Radio%2C_No_Model_Number%2C_AM_Band_Only%2C_6_Transistors%2C_Made_In_Hong_Kong%2C_Circa_1960s_%287721623244%29.jpg",
      price: 75,
      category_name: "Electronics",
    },
    {
      id: 2,
      name: "Philco Transistor Radio",
      desc: "Vintage Philco 6-Transistor Radio, Model T76-124, Leather Case, Circa 1958",
      imgURL:
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Vintage_Philco_6-Transistor_Radio%2C_Model_T76-124%2C_1958%2C_Leather_Case_%288385122630%29.jpg",
      price: 50,
      category_name: "Electronics",
    },
  ];

  function addToCart(product) {
    setCart((currItems) => [...currItems, product]);
  }

  const priceArray = cart.map((product) => product.price);

  const cartTotal = priceArray.reduce((total, price) => total + price);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.map((product) => (
        <div key={product.id} className="product">
          <img height="50px" src={product.imgURL} alt="thumbnail"></img>
          <h5>{product.name}</h5>
          <h5>{product.price}</h5>
          <button>View Details</button>
          <button>Remove</button>
        </div>
      ))}
      <h4>Cart Total: ${cartTotal}</h4>
    </div>
  );
}

// onClick={removeProduct(product.id)}
