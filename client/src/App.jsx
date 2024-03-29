import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ViewByCategory from "./components/ViewByCategory";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Products from "./components/Products";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        {/* <Products /> */}
        Go Team Tchotchke!
        <Routes>
          <Route path="/" element={<button>Home</button>}>
            Home
          </Route>
          <Route path="/category" element={<ViewByCategory />}>
            View by Category
          </Route>

          <Route path="/all" element={<Products />}></Route>
          <Route path="/books">Books</Route>
          <Route path="/decor">Decor</Route>
          <Route path="/electronics">Electronics</Route>
          <Route path="/gamestoys">Games & Toys</Route>
          <Route path="/housewares">Housewares</Route>
          <Route path="/jewelryaccessories">Jewelry & Accessories</Route>
          <Route path="/miscellaneous">Miscellaneous</Route>

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
      </BrowserRouter>
    </>
  );
}

export default App;
