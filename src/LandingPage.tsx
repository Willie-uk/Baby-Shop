import React from "react";

const LandingPage: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top border-bottom">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Cindy Baby-Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-secondary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to BabyShop</h1>
          <p className="lead mb-4">
            Your one-stop destination for everything your baby needs!
          </p>
          <a
            href="#about"
            className="btn btn-light btn-lg me-3"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="btn btn-outline-light btn-lg"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Get in Touch
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Quality Products"
                className="mb-3 rounded-circle"
              />
              <h5>Top Quality</h5>
              <p>
                We ensure all our products meet the highest safety and quality
                standards for your peace of mind.
              </p>
            </div>
            <div className="col-md-4 text-center mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Affordable Prices"
                className="mb-3 rounded-circle"
              />
              <h5>Affordable Prices</h5>
              <p>
                Get the best value for your money without compromising on
                quality or style.
              </p>
            </div>
            <div className="col-md-4 text-center mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Wide Range"
                className="mb-3 rounded-circle"
              />
              <h5>Wide Range</h5>
              <p>
                Explore a vast selection of baby products tailored to your
                child’s needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <p>
            BabyShop was founded with the mission to bring smiles to parents and
            babies worldwide. With a passion for quality and affordability, we
            curate the best baby products from trusted brands. Whether you’re
            shopping for essentials or adorable gifts, we’re here to help make
            parenthood a joy.
          </p>
          <div className="text-center mt-4">
            <img
              src="https://via.placeholder.com/600x300"
              alt="About BabyShop"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">
            We’d love to hear from you! Contact us using the details below or
            follow us on social media for the latest updates.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <ul className="list-unstyled text-center">
                <li className="mb-3">
                  <strong>Email:</strong> support@cindybabyshop.com
                </li>
                <li className="mb-3">
                  <strong>Phone:</strong> +254 723 930499
                </li>
                <li>
                  <strong>Address:</strong> Woodley Avenue, Kilimani, Nairobi_Kenya.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">
          © 2024 BabyShop. All rights reserved. | Follow us:{" "}
          <a
            href="#"
            className="text-white text-decoration-underline mx-1"
          >
            Facebook
          </a>
          |
          <a
            href="#"
            className="text-white text-decoration-underline mx-1"
          >
            Instagram
          </a>
          |
          <a
            href="#"
            className="text-white text-decoration-underline mx-1"
          >
            Twitter
          </a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
