import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Cart from "./Cart";

const ViewDetails = ({ products }) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = +params.productId;
  const product = products.find((product) => product.id === id);
  if (!product) {
    return <div>Product not found</div>;
  }

  // function setCartItems() {
  //   <Cart setCartItems />;
  // }
  function handleAddToCart(newProduct) {
    setCartItems(newProduct);
    navigate(`/cart`);
  }

  return (
    <>
      <div className="single-product-container">
        <h2>{product.name}</h2>
        <h2>${product.price}</h2>
        <p>{product.desc}</p>

        <img
          className="product-image"
          src={product.imgURL}
          alt="product image"
        />
        <button onClick={() => navigate(`/products/`)}>Back to All</button>
        <button onClick={() => handleAddToCart({ product })}>
          Add to Order
        </button>
      </div>
    </>
  );
};

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
