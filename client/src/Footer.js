import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-lg-5">
            <p className="footer-eyebrow">Grace Hydro Engineers</p>
            <h3 className="footer-title">Precision hydraulic systems for industrial performance.</h3>
            <p className="footer-copy">
              We design and deliver dependable hydraulic solutions with a focus on quality,
              durability, and long-term operational efficiency.
            </p>
          </div>

          <div className="col-sm-6 col-lg-3">
            <h4 className="footer-heading">Explore</h4>
            <div className="footer-links">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/product">Products</Link>
              <Link to="/users">Orders</Link>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact">
              <p><i className="fa-solid fa-location-dot me-2"></i>52-3, Sanganoor Road, Ganapathy, Coimbatore</p>
              <p><i className="fa-solid fa-phone me-2"></i>+91 90477 21285 / 90478 21285</p>
              <p><i className="fa-solid fa-envelope me-2"></i>gracehydroengineers@gmail.com</p>
              <p><i className="fa-solid fa-globe me-2"></i>www.gracehydro.com</p>
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Grace Hydro Engineers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
