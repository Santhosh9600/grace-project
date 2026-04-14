const About = () => {
  return (
    <section className="section-block">
      <div className="container">
        <div className="section-heading text-center">
          <span className="section-badge">About Grace Hydro Engineers</span>
          <h1 className="section-title">Trusted hydraulic manufacturing with a practical engineering mindset.</h1>
          <p className="section-copy mx-auto about-lead">
            We build high-performance hydraulic systems for industrial applications, combining
            durable materials, precision execution, and dependable service support.
          </p>
        </div>

        <div className="row g-4 mt-2">
          <div className="col-lg-7">
            <div className="content-panel h-100">
              <h3 className="panel-title">What we focus on</h3>
              <p>
                Grace Hydro Engineers delivers hydraulic solutions designed for consistency,
                long service life, and smooth integration into demanding industrial environments.
              </p>
              <p>
                Our approach is centered on product quality, application fit, and clear customer
                communication so businesses can move faster with confidence.
              </p>

              <div className="row g-3 mt-2">
                <div className="col-sm-6">
                  <div className="mini-card">
                    <h4>Quality Manufacturing</h4>
                    <p>Reliable components and build standards for industrial use.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mini-card">
                    <h4>Custom Solutions</h4>
                    <p>Product options and configurations shaped around your application.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mini-card">
                    <h4>Precision Engineering</h4>
                    <p>Careful execution that supports efficiency and system stability.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mini-card">
                    <h4>Responsive Support</h4>
                    <p>Fast communication for enquiries, product needs, and follow-up.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="content-panel contact-panel h-100">
              <h3 className="panel-title">Contact Information</h3>
              <p><strong>Address:</strong> 52-3, Sanganoor Road, Eswara Gardens, Ganapathy, Coimbatore, Tamil Nadu - 641006</p>
              <p><strong>Email:</strong> gracehydroengineers@gmail.com</p>
              <p><strong>Phone:</strong> +91 90477 21285 / 90478 21285 / 90471 21285</p>
              <p>
                <strong>Website:</strong>{" "}
                <a href="http://www.gracehydro.com" target="_blank" rel="noopener noreferrer">
                  www.gracehydro.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
