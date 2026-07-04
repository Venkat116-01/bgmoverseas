import { Link } from "react-router-dom";
import "./Navbar.css";
import logoo from "../../images/logoo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
        <img src={logoo} alt="BGM Logo" className="navbar-logo ms-2" />
         <span>BGM Overseas Consultancy</span> 
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
         <ul className="navbar-nav ms-auto">
  <li className="nav-item mx-2">
    <Link className="nav-link" to="/">Home</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/about">About</Link>
  </li>
   <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
    >
      Study
    </a>
    <ul className="dropdown-menu">
      <li><Link className="dropdown-item" to="/study-abroad">Study Abroad</Link></li>
      <li><Link className="dropdown-item" to="/visa-assistance">Visa Assistance</Link></li>
      <li><Link className="dropdown-item" to="/career-counselling">Career Counselling</Link></li>
    </ul>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/why-bgm-overseas">Why BGM Overseas</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/our-team">Our Team</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/careers">Careers</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/contact">Contact</Link>
  </li>
</ul>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;