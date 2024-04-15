import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
// import ViewByCategory from "./components/ViewByCategory";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Products from "./components/Products";
import ViewDetails from "./components/ViewDetails";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const baseUrl = "http://localhost:8080/tchotchke";

function App() {
  const [products, setProducts] = useState([]);
  const [auth, setAuth] = useState(localStorage.getItem("auth") || {});
  const [order, setOrder] = useState([]);

  // const login = async(formData) => {
  //   const response = await fetch(`${baseUrl}/users/login`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(formData)

  //   })
  //   const json = await response.json();
  //   console.log(response);
  //   console.log(json)
  // }

  // GET ALL PRODUCTS FROM API
  useEffect(() => {
    if (typeof auth === "string"){
      setAuth(JSON.parse(auth))
    } 

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

  return (
    <>
      <BrowserRouter>
        <NavBar auth={auth}>
          <Routes>
            <Route path="/" element={<Home />}>
              Home
            </Route>
            <Route path="/products" element={<Products />}>
              View All
            </Route>
            {/* <Route path="/category" element={<ViewByCategory />}>
              View by Category
            </Route> */}
            <Route>Books</Route>
            <Route>Decor</Route>
            <Route>Electronics</Route>
            <Route>Games & Toys</Route>
            <Route>Housewares</Route>
            <Route>Jewelry & Accessories</Route>
            <Route>Miscellaneous</Route>
            {/* <Route path="/viewAllItems" element={<ViewAllItems />}>
              View All Items
            </Route> */}

            <Route path="/login" element={<Login />}>
              Login
            </Route>
            <Route path="/register" element={<Register />}>
              Register
            </Route>
            <Route path="/cart" element={<Cart></Cart>}>
              View Cart
            </Route>
            {/* <Route path="/products" element = {<Products/>}>View All</Route> */}
          </Routes>
        </NavBar>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* { auth.token ? <button>Welcome {auth.name}</button> : <Login login = { login } />} */}

        <Routes>
          <Route path="/" element={<Home />}></Route>
            {" "}
            Home{" "}
          {/* <Route path="/category" element={<ViewByCategory />}>
            {" "}
            View by Category{" "}
          </Route> */}
          <Route path="/all" element={<Products />}></Route>
          <Route path="/books">Books</Route>
          <Route path="/decor">Decor</Route>
          <Route path="/electronics">Electronics</Route>
          <Route path="/gamestoys">Games & Toys</Route>
          <Route path="/housewares">Housewares</Route>
          <Route path="/jewelryaccessories">Jewelry & Accessories</Route>
          <Route path="/miscellaneous">Miscellaneous</Route>

          <Route path="/login" element={<Login auth={setAuth} />}>
            {" "}
            Login{" "}
          </Route>
          <Route path="/register" element={<Register />}>
            {" "}
            Register{" "}
          </Route>
          <Route path="/cart" element={<Cart products={products} />}>
            {" "}
            View Cart{" "}
          </Route>
          <Route path="/products" element={<Products />}>
            {" "}
            View All{" "}
          </Route>
          <Route
            path="products/:productId"
            element={<ViewDetails products={products} user={auth} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
