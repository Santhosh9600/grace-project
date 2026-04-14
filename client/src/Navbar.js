import { Link, NavLink } from "react-router-dom";
import b1 from "./img/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark site-navbar">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center brand-lockup" to="/home">
          <img
            src={b1}
            alt="Grace Hydro Logo"
            width="48"
            height="48"
            className="me-3 rounded brand-logo"
          />
          <span>
            <span className="brand-title d-block">Grace Hydro</span>
            <span className="brand-subtitle d-block">Fluid Engineering Systems</span>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center nav-pillset">
            <li className="nav-item">
              <NavLink className="nav-link nav-animate" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-animate" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-animate" to="/product">Products</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
