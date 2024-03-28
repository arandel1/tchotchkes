import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ViewByCategory from "./components/ViewByCategory";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar>
          <Routes>
            <Route path="/" element={<button>Home</button>}>
              Home
            </Route>
            <Route path="/category" element={<ViewByCategory />}>
              View by Category
            </Route>
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
            <Route path="/cart" element={<Cart />}>
              View Cart
            </Route>
          </Routes>
        </NavBar>
        Go Team Tchotchke!
      </BrowserRouter>
    </>
  );
}

export default App;
