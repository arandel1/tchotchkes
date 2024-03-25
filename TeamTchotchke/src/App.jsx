import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar>
        <Routes>
          <Route path="/" element={<button>Home</button>}>
            Home
          </Route>
          <Route>Books</Route>
          <Route>Decor</Route>
          <Route>Electronics</Route>
          <Route>Games & Toys</Route>
          <Route>Housewares</Route>
          <Route>Jewelry & Accessories</Route>
          <Route>Miscellaneous</Route>
          <Route>View All Items</Route>
          <Route>View Cart</Route>
        </Routes>
      </NavBar>
      Go Team Tchotchke!
    </>
  );
}

export default App;
