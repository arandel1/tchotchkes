import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const ViewDetails = ({ products }) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = +params.productId;
  const product = products.find(product => product.id === id);
  if(!product){
    return <div>Product not found</div>;
  }


  return(
    <>
      <div className='single-product-container'>
        <h2>{product.name}</h2>
        <p>{product.desc}</p>
        <img className = 'product-image' src={product.imgURL} alt = 'product image'/>
        <button onClick = {() => navigate(`/products`)}>Back to All Products</button>
        <button onClick={()=> navigate(`/order`)}>Order</button>
      </div>
    </>
  )
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

