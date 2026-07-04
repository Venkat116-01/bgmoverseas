import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <h5>BGM Overseas Consultancy</h5>
            <p className="footer-text">
              Trusted study abroad guidance for students seeking admission, visa help, and career counselling.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/study-abroad" className="footer-link">Study Abroad</a></li>
              <li><a href="/careers" className="footer-link">Careers</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Contact</h5>
            <ul className="footer-contacts list-unstyled">
              <li>Phone: +91 98765 43210</li>
              <li>Email: info@bgmoverseas.com</li>
              <li>Address: 123 Student Plaza, Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom text-center mt-4">
          <small>&copy; {new Date().getFullYear()} BGM Overseas Consultancy. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;