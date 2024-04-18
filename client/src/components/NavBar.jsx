import * as React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CategoryDropdown from "./CategoryDropdown";

export default function NavBar() {
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
        <div className="collapse navbar-collapse justify-content-center" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mt-4 mb-lg-0">
          <li className="nav-item">
              <Link to="/" className="nav-link">
                Home <i class="fa-solid fa-house"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                View All Products <i class="fa-solid fa-eye"></i>
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
              <Link to="/login" className="nav-link">
                Login <i class="fa-solid fa-user"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register <i class="fa-solid fa-clipboard-check"></i>
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
