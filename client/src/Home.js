import { useNavigate } from "react-router-dom";
import c1 from "./img/about.avif";

function Home() {
  const navigate = useNavigate();

  const strengths = [
    {
      icon: "fa-solid fa-medal",
      title: "High Quality Products",
      text: "Built for durability, precision, and dependable field performance."
    },
    {
      icon: "fa-solid fa-industry",
      title: "Industrial Expertise",
      text: "Practical hydraulic engineering backed by years of hands-on experience."
    },
    {
      icon: "fa-solid fa-wrench",
      title: "Custom Solutions",
      text: "Tailored systems designed around your process and production needs."
    },
    {
      icon: "fa-solid fa-rocket",
      title: "Reliable Performance",
      text: "Solutions that stay efficient under demanding industrial workloads."
    }
  ];

  const reasons = [
    {
      icon: "fa-solid fa-award",
      title: "Trusted Quality",
      text: "Every hydraulic system is built with consistency, testing, and industrial-grade components."
    },
    {
      icon: "fa-solid fa-atom",
      title: "Engineering Depth",
      text: "We combine product knowledge and application insight to deliver better-fit solutions."
    },
    {
      icon: "fa-solid fa-headset",
      title: "Responsive Support",
      text: "From product selection to follow-up, we stay available when clients need clarity fast."
    }
  ];

  return (
    <div className="page-home">
      <section className="hero-section d-flex align-items-center text-white">
        <div className="container">
          <div className="hero-panel">
            <span className="section-badge">Industrial Hydraulic Solutions</span>
            <h1 className="hero-title">Engineered flow systems that keep production moving.</h1>
            <p className="hero-text">
              Grace Hydro Engineers manufactures high-performance hydraulic pumps, cylinders,
              valves, and power packs for industrial environments that demand reliability.
            </p>

            <div className="hero-actions">
              <button
                className="btn btn-warning btn-lg hero-btn-primary"
                onClick={() => navigate("/product")}
              >
                Explore Products
              </button>
              <button
                className="btn btn-outline-light btn-lg hero-btn-secondary"
                onClick={() => navigate("/about")}
              >
                Learn About Us
              </button>
            </div>

            <div className="hero-metrics row g-3">
              <div className="col-sm-4">
                <div className="metric-card">
                  <h3>10+</h3>
                  <p>Years of field experience</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="metric-card">
                  <h3>500+</h3>
                  <p>Projects delivered</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="metric-card">
                  <h3>100%</h3>
                  <p>Focus on quality assurance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-surface">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="image-frame">
                <img
                  src={c1}
                  alt="Hydraulic Industry"
                  className="img-fluid section-image"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <span className="section-badge">About The Company</span>
              <h2 className="section-title">Built around dependable engineering and practical industrial results.</h2>
              <p className="section-copy">
                We manufacture and supply hydraulic systems that balance precision, durability,
                and serviceability for real-world industrial usage.
              </p>
              <p className="section-copy">
                From standard components to custom-built assemblies, our focus stays on long-term
                value, stable performance, and customer-specific solutions.
              </p>

              <ul className="feature-list">
                <li><i className="fa-solid fa-check"></i>High-quality hydraulic systems</li>
                <li><i className="fa-solid fa-check"></i>Industrial-grade engineering solutions</li>
                <li><i className="fa-solid fa-check"></i>Custom design and development</li>
                <li><i className="fa-solid fa-check"></i>Trusted across multiple industries</li>
              </ul>

              <button
                className="btn btn-primary btn-pill mt-2"
                onClick={() => navigate("/about")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-heading text-center">
            <span className="section-badge">Our Strengths</span>
            <h2 className="section-title">A stronger process from design to delivery.</h2>
          </div>

          <div className="row g-4">
            {strengths.map((item) => (
              <div className="col-md-6 col-xl-3" key={item.title}>
                <div className="info-card strength-card h-100">
                  <div className="info-icon"><i className={item.icon}></i></div>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-6 col-lg-3">
              <div className="stats-card">
                <h2>10+</h2>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="stats-card">
                <h2>500+</h2>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="stats-card">
                <h2>300+</h2>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="stats-card">
                <h2>100%</h2>
                <p>Quality Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-surface">
        <div className="container">
          <div className="section-heading text-center">
            <span className="section-badge">Why Choose Us</span>
            <h2 className="section-title">Industrial support backed by product confidence.</h2>
          </div>

          <div className="row g-4">
            {reasons.map((item) => (
              <div className="col-md-4" key={item.title}>
                <div className="info-card why-card h-100">
                  <div className="info-icon"><i className={item.icon}></i></div>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-panel text-center">
            <span className="section-badge">Let's Build The Right System</span>
            <h2>Need reliable hydraulic solutions for your operation?</h2>
            <p>
              We design and manufacture high-performance hydraulic systems for industrial
              applications and custom engineering requirements.
            </p>

            <div className="hero-actions justify-content-center">
              <button
                className="btn btn-light btn-lg btn-pill"
                onClick={() => navigate("/about")}
              >
                <i className="fa-solid fa-phone me-2"></i>Contact Us
              </button>
              <button
                className="btn btn-outline-light btn-lg btn-pill"
                onClick={() => navigate("/product")}
              >
                <i className="fa-solid fa-magnifying-glass me-2"></i>View Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
