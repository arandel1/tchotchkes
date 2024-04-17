import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    async function getProducts(category) {
      const baseUrl = "http://localhost:8080/tchotchke";
      try {
        const query = category
          ? `category=${encodeURIComponent(category)}`
          : "";

        const response = await fetch(`${baseUrl}/products?${query}`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const apiProducts = await response.json();
        setProducts(apiProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    getProducts(category);
  }, [category]);

  const handleViewDetails = (productId) => {
    window.location.href = `/products/${productId}`;
  };

  return (
    <>
      <div
        className="all-items-container"
        style={{ backgroundColor: "lightblue", padding: "20px" }}
      >
        <h2>{category ? decodeURIComponent(category) : "All Items"}</h2>
        {products.length === 0 && <p>No inventory</p>}
        <div
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {" "}
          {/* Responsive grid for 3 cards */}
          {products.map((product) => (
            <div key={product.id} className="col">
              <div className="card" style={{ aspectRatio: "16/9" }}>
                <img
                  src={product.imgURL}
                  className="card-img-top img-fluid border rounded"
                  style={{ objectFit: "contain" }}
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                  <button
                    className="btn btn-dark"
                    onClick={() => handleViewDetails(product.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
