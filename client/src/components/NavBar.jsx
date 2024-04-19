import * as React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CategoryDropdown from "./CategoryDropdown";

export default function NavBar({ auth }) {
  const handleLogout = (token) => {
    localStorage.removeItem("auth");
    setSuccessMessage("You're logged out!");
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top py-0 d-flex flex-wrap">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src="../assets/fleurdetchotchke-nobg.png"
            alt="Tchotchke Home"
            height="150px"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                View All Products
              </Link>
            </li>
            <li className="nav-item">
              <CategoryDropdown />
              <span className="fas fa-search"></span> Search
            </li>
            {/* Add more navigation links here */}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to={auth.id ? "/" : "/login"}
                className="nav-link"
                onClick={auth.id ? handleLogout : null}
              >
                {auth.id ? `Logout ${auth.name}` : "Login"}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                View Cart <i className="fas fa-shopping-cart"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
