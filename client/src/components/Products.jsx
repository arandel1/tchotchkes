import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const baseUrl = "http://localhost:8080/tchotchke";
      try {
        const response = await fetch(`${baseUrl}/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const apiProducts = await response.json();
        setProducts(apiProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    getProducts();
  }, []);

  const handleViewDetails = (productId) => {
    window.location.href = `/products/${productId}`;
  };

  return (
    <>
      <h2>All Items</h2>
      {products.length === 0 && <p>No inventory</p>}

      <div className="card-container">
        {products.map((product) => (
          <div key={product.id} className="card" style={{ width: "18rem" }}>
            <img
              src={product.imgURL}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Price: ${product.price}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleViewDetails(product.id)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
