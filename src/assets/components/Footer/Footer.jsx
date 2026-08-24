import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-heading">BGM Overseas Consultancy</h5>
            <p className="footer-text">
              Trusted study abroad guidance for students seeking admission, visa help, and career counselling.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 footer-col-divider">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/study/usa" className="footer-link">Study Abroad</a></li>
              <li><a href="/careers" className="footer-link">Careers</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-col-divider">
            <h5 className="footer-heading">Contact</h5>
            <ul className="footer-contacts list-unstyled">
              <li>
                <span className="footer-contact-icon"><FaPhoneAlt /></span>
                <span>+91 94909 96326</span>
              </li>
              <li>
                <span className="footer-contact-icon"><FaEnvelope /></span>
                <span>bgmoverseasconsultancy@gmail.com</span>
              </li>
              <li>
                <span className="footer-contact-icon"><FaMapMarkerAlt /></span>
                <span>Flat No: 304, Datta Sai Apartments, Indira Nagar, Dilsukhnagar, Hyderabad, Telangana 500060, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <small>&copy; {new Date().getFullYear()} <span className="footer-brand">BGM Overseas Consultancy</span>. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;