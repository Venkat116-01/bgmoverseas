import { Link } from "react-router-dom";
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";

function About() {
  return (
    <>
    
    <section className="container py-5">
            <div className="row align-items-center gy-4">
              <div className="col-lg-6">
                <p className="text-primary mb-2 fw-semibold">— About Us</p>
                <h1 className="display-5 fw-bold">
                  Your Gateway to Global Education, Career, and IT Solutions
                </h1>
                <p className="lead text-muted mt-4">
                  At BGM Overseas, we are dedicated to transforming your dreams into reality.
                  Whether you're aspiring to study at top universities abroad, seeking work
                  opportunities in global markets, or in need of cutting-edge IT and healthcare
                  solutions, we are here to guide you every step of the way.
                </p>
                <p className="lead text-muted mt-4">
                  At BGM Overseas, we are dedicated to transforming your dreams into reality.
                  Whether you're aspiring to study at top universities abroad, seeking work
                  opportunities in global markets, or in need of cutting-edge IT and healthcare
                  solutions, we are here to guide you every step of the way.
                </p>
                <p className="lead text-muted mt-4">
                  At BGM Overseas, we are dedicated to transforming your dreams into reality.
                  Whether you're aspiring to study at top universities abroad, seeking work
                  opportunities in global markets, or in need of cutting-edge IT and healthcare
                  solutions, we are here to guide you every step of the way.
                </p>
              </div>
    
              <div className="col-lg-6">
      <div className="hero-images-grid-two-by-two">
        <div className="hero-card overflow-hidden rounded-4 shadow-sm">
          <img src={img1} alt="Study" className="img-fluid" />
        </div>
        <div className="hero-card overflow-hidden rounded-4 shadow-sm">
          <img src={img2} alt="Global" className="img-fluid" />
        </div>
        <div className="hero-card overflow-hidden rounded-4 shadow-sm">
          <img src={img3} alt="Handshake" className="img-fluid" />
        </div>
        <div className="hero-card overflow-hidden rounded-4 shadow-sm">
          <img src={img1} alt="Study Abroad" className="img-fluid" />
        </div>
      </div>
    </div>
            </div>
          </section>
    </>
  );
}

export default About;