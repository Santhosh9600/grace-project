import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ORDERS_API_URL } from "./api";

import a1 from "./img/img1.jpg";
import a2 from "./img/img2.jpg";
import a3 from "./img/img3.jpg";
import a4 from "./img/img4.jpg";
import a5 from "./img/img5.jpg";
import a6 from "./img/img6.jpg";
import a7 from "./img/img7.jpg";

function Product() {
  const navigate = useNavigate();
  const products = [
    { name: "Hydraulic Pumps", image: a1, tag: "High pressure flow control" },
    { name: "Hydraulic Cylinders", image: a2, tag: "Smooth force transmission" },
    { name: "Power Units", image: a3, tag: "Compact power delivery" },
    { name: "Hydraulic Valves", image: a4, tag: "Accurate system control" },
    { name: "Honed Tubes", image: a5, tag: "Precision internal finishing" },
    { name: "Hard Chrome Rods", image: a6, tag: "Wear-resistant surfaces" },
    { name: "Custom Systems", image: a7, tag: "Application-specific builds" },
    { name: "Integrated Assemblies", image: a2, tag: "Multi-component solutions" }
  ];

  const [form, setForm] = useState({
    username: "",
    mobile: "",
    product: "",
    quantity: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username: form.username.trim(),
      mobile: form.mobile.trim(),
      product: form.product.trim(),
      quantity: Number(form.quantity)
    };

    if (!payload.username || !payload.mobile || !payload.product || !form.quantity) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    if (Number.isNaN(payload.quantity) || payload.quantity <= 0) {
      alert("Please enter a valid quantity greater than 0.");
      return;
    }

    try {
      setIsSubmitting(true);
      await axios.post(ORDERS_API_URL, payload);
      alert("Order Submitted Successfully!");

      setForm({
        username: "",
        mobile: "",
        product: "",
        quantity: ""
      });

      navigate("/users");
    } catch (error) {
      console.log("Order submission failed:", error);
      alert(
        error.response?.data?.error ||
        error.message ||
        "Error submitting order"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-block section-surface">
      <div className="container">
        <div className="section-heading text-center">
          <span className="section-badge">Our Products</span>
          <h1 className="section-title">Hydraulic components and systems built for industrial demands.</h1>
          <p className="section-copy mx-auto" style={{ maxWidth: "760px" }}>
            Explore our product range and place an enquiry directly from the same page for a
            faster, cleaner ordering flow.
          </p>
        </div>

        <div className="row g-4">
          {products.map((item) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={item.name}>
              <div className="product-card">
                <div className="product-image-wrap">
                  <img src={item.image} alt={item.name} className="card-img-top" />
                </div>
                <div className="product-card-body">
                  <span className="product-tag">{item.tag}</span>
                  <h5>{item.name}</h5>
                  <button
                    className="btn btn-primary btn-pill mt-auto"
                    onClick={() => setForm({ ...form, product: item.name })}
                  >
                    <i className="fa-solid fa-cart-shopping me-2"></i>Select Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-7">
            <div className="content-panel order-panel">
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
                <div>
                  <span className="section-badge">Order Request</span>
                  <h3 className="panel-title mt-3 mb-0">Send us your product requirement</h3>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-pill"
                  onClick={() => navigate("/users")}
                >
                  View Submitted Orders
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Mobile Number</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Enter mobile number"
                    />
                  </div>

                  <div className="col-md-7">
                    <label className="form-label fw-semibold">Product Name</label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="form-select form-select-lg"
                    >
                      <option value="">Select Product</option>
                      {products.map((item) => (
                        <option key={item.name} value={item.name}>{item.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-5">
                    <label className="form-label fw-semibold">Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Enter quantity"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-pill w-100 mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Order"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
