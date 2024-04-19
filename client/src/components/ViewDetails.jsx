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
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
        <div className="container single-product-container py-5 px-3 d-flex justify-content-center">
          <div className="col-md-6">
            <div className="small-product-card"> 
              <img
                className="card-img-top img-fluid product-image rounded border" 
                src={product.imgURL}
                style={{ objectFit: 'cover' }} 
                alt="product image"
              />
              <div className="card-body">
                <h3>{product.name}</h3>
                <h4>Price: ${product.price}</h4>
                <p>{product.desc}</p>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}

                <div className="d-flex justify-content-between mt-4"> 
                  <button onClick={() => navigate(`/products/`)} className="btn btn-dark">Back to All</button>
                  <button onClick={(e) => handleAddToCart(e)} className="btn btn-dark">Add to Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default ViewDetails;