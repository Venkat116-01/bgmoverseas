import { Link } from "react-router-dom";
import { useRef } from "react";
import "./Navbar.css";
import logoo from "../../images/logoo.png";

function Navbar() {
  const collapseRef = useRef(null);

  const handleNavLinkClick = () => {
    const collapseEl = collapseRef.current;
    if (!collapseEl) return;

    // Prefer Bootstrap API if available
    const bs = window.bootstrap;
    if (bs && bs.Collapse) {
      const inst = bs.Collapse.getInstance(collapseEl) || new bs.Collapse(collapseEl, { toggle: false });
      inst.hide();
      return;
    }

    // Fallback: remove show class and update toggler aria attributes
    if (collapseEl.classList.contains("show")) {
      collapseEl.classList.remove("show");
      const toggler = document.querySelector(".navbar-toggler");
      if (toggler) toggler.setAttribute("aria-expanded", "false");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
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
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/" onClick={handleNavLinkClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>
                About
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Countries
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/study/usa" onClick={handleNavLinkClick}>
                    USA
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/study/uk" onClick={handleNavLinkClick}>
                    UK
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/study/australia" onClick={handleNavLinkClick}>
                    Australia
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/study/canada" onClick={handleNavLinkClick}>
                    Canada
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/why-bgm-overseas" onClick={handleNavLinkClick}>
                Why BGM Overseas
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/our-team" onClick={handleNavLinkClick}>
                Our Team
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/careers" onClick={handleNavLinkClick}>
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;