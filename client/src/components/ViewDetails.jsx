import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";

const baseUrl = "http://localhost:8080/tchotchke";

// const [cartItems, setCartItems] = useState();

function ViewDetails({ products, user }) {
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const navigate = useNavigate();
  const params = useParams();
  const id = +params.productId;
  const product = products.find((product) => product.id === id);
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseUrl}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productsId: product.id, usersId: user.id }),
      });
      if (response.ok) {
        const newOrder = await response.json();
        setSuccessMessage("Item added to cart!");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Item not added to cart.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="single-product-container">
        <h2>{product.name}</h2>
        <h2>${product.price}</h2>
        <p>{product.desc}</p>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <img
          className="product-image"
          src={product.imgURL}
          alt="product image"
        />
        <button onClick={() => navigate(`/products/`)}>Back to All</button>
        <button onClick={(e) => handleAddToCart(e)}>Add to Order</button>
      </div>
    </>
  );
}

export default ViewDetails;

// function ViewDetails() {
//   const { id } = useParams();
//   const product = product.find(p => p.id === parseInt(id,10));

//   if(!product){
//     return <div>Product not found</div>
//   }

//   return (
//     <div>
//       <h2>Product Name</h2>
//     </div>
//   );
// }

// export default ViewDetails();
