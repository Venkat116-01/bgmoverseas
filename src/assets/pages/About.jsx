import { FaHandshake, FaGlobe } from "react-icons/fa";
import PageHero from "../components/PageHero/PageHero";
import aboutHero from "../images/about-bg.jpg";
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import newImg1 from "../images/new1.jpg";

function About() {
  return (
    <>
      <PageHero
        title="About us"
        image={aboutHero}
        crumbs={[{ label: "Home", to: "/" }, { label: "About us" }]}
      />

    <section className="container py-5">
            <div className="row align-items-center gy-4">
              <div className="col-lg-6">
                <p className="text-primary mb-2 fw-semibold">— About Us</p>
                
                <h1 className="display-5 fw-bold">
                  Your Gateway to Global Education, Career, and IT Solutions
                </h1>
                <p>
        At BGM Overseas, we help students achieve their global education goals.
        From choosing the right university and course to visa assistance and pre-departure support, our expert counselors provide personalized guidance at every stage of your study abroad journey.
        </p>
        <p>Build your international career with BGM Overseas.
           We connect skilled professionals with rewarding job opportunities across leading countries, offering end-to-end support including career guidance, documentation, visa assistance, and relocation services.</p>
        <p>Our IT  solutions empower businesses to thrive in a competitive global market.
           We provide innovative technology services, healthcare staffing, and consulting solutions tailored to meet the unique needs of our clients worldwide.</p>
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
          <img src={newImg1} alt="Study Abroad" className="img-fluid" />
        </div>
      </div>
    </div>
            </div>
               <div className="row gx-4 gy-4 mt-5">
                <div className="col-sm-6">
                  <div className="feature-card p-4 rounded-4">
                    <div className="feature-icon"><FaHandshake /></div>
                    <h5>Expert Guidance</h5>
                    <p>
                      Our team of certified consultants offers in-depth knowledge and expertise, ensuring you make informed decisions.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-card p-4 rounded-4">
                    <div className="feature-icon"><FaGlobe /></div>
                    <h5>Global Reach</h5>
                    <p>
                      From USA to Australia, we open doors to the world’s leading educational institutions and job markets.
                    </p>
                  </div>
                </div>
              </div>
          
          </section>
    </>
  );
}

export default About;