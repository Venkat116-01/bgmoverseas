import { Link } from "react-router-dom";
import { FaGlobeAmericas, FaGraduationCap, FaHandshake, FaGlobe } from "react-icons/fa";
import homeImage1 from "../images/home1.jpg";
import homeImage2 from "../images/home2.jpg";
import new4 from "../images/new4.png";
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import img4 from "../images/image4.jpg";
import new5 from "../images/new5.png";
import new6 from "../images/new6.png";
import usaMitHero from "../images/usa-mit-hero.jpg";
import usaMitCard from "../images/usa-mit-card.jpg";
import usaHarvardCard from "../images/usa-harvard-card.jpg";
import usaStanfordCard from "../images/usa-stanford-card.jpg";
import "./Home.css";


function Home() {

  return (
    <>
      <section className="hero-section container-fluid px-0">
  <div className="hero-overlay" />

  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-indicators hero-indicators">
      <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3" />
      <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="3" aria-label="Slide 4" />
    </div>

    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={new6} className="d-block w-100" alt="Slide 1" />
        <div className="carousel-caption carousel-caption-left">
          <div className="hero-caption-card">
            <p className="caption-subtitle">Ready to Unlock Global Opportunities?</p>
            <h1>Your Future Awaits</h1>
            <p className="caption-text">
              Explore education pathways in Canada, USA, UK, and beyond. Let us guide you to success.
            </p>
            <Link to="/contact" className="btn btn-hero">
              Start Your Study Journey →
            </Link>
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <img src={usaMitHero} className="d-block w-100" alt="MIT campus, USA" />
        <div className="carousel-caption carousel-caption-left">
          <div className="hero-caption-card">
            <p className="caption-subtitle">Study in the United States</p>
            <h1>Ivy League Dreams, Realized</h1>
            <p className="caption-text">
              From MIT to Stanford, we help you navigate admissions, F-1 visas, and scholarships at America’s leading universities.
            </p>
            <Link to="/study/usa" className="btn btn-hero">
              Explore USA Universities →
            </Link>
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <img src={new5} className="d-block w-100" alt="Slide 3" />
        <div className="carousel-caption carousel-caption-left">
          <div className="hero-caption-card">
            <p className="caption-subtitle">Learn from Expert Counselors</p>
            <h1>Study Abroad with Confidence</h1>
            <p className="caption-text">
              Get personalized admission, visa and scholarship support for the world’s top campuses.
            </p>
            <Link to="/services" className="btn btn-hero">
              See Our Services →
            </Link>
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <img src={new4} className="d-block w-100" alt="Slide 4" />
        <div className="carousel-caption carousel-caption-left">
          <div className="hero-caption-card">
            <p className="caption-subtitle">Start Your Journey Today</p>
            <h1>Build Your Global Future</h1>
            <p className="caption-text">
              Join students who have successfully moved abroad with our complete support.
            </p>
            <Link to="/contact" className="btn btn-hero">
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>

    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</section>



      <section className="about-section py-5">
  <div className="container">
    <div className="row align-items-center gy-4">
      <div className="col-lg-6">
        <p className="text-primary mb-2 fw-semibold">— About Us</p>
        <h2 className="display-6 fw-bold">
          Your Gateway to Global Education, Career, and IT Solutions
        </h2>
        <p>
        At BGM Overseas, we help students achieve their global education goals.
        From choosing the right university and course to visa assistance and pre-departure support, our expert counselors provide personalized guidance at every stage of your study abroad journey.
        </p>
        <p>Build your international career with BGM Overseas.
           We connect skilled professionals with rewarding job opportunities across leading countries, offering end-to-end support including career guidance, documentation, visa assistance, and relocation services.</p>
        <p>Our IT and healthcare solutions empower businesses to thrive in a competitive global market.
           We provide innovative technology services, healthcare staffing, and consulting solutions tailored to meet the unique needs of our clients worldwide.</p>
        <div className="row gx-3 gy-3 mt-4">
          <div className="col-sm-6">
            <div className="about-highlight p-4 rounded-4 shadow-sm">
              <h5 className="mb-2">Study Abroad</h5>
              <p className="mb-0 text-muted">Expert university selection and admission support.</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="about-highlight p-4 rounded-4 shadow-sm">
              <h5 className="mb-2">Visa Support</h5>
              <p className="mb-0 text-muted">Document review, interview prep, and approval guidance.</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="about-highlight p-4 rounded-4 shadow-sm">
              <h5 className="mb-2">Scholarships</h5>
              <p className="mb-0 text-muted">We help you find and apply for funding opportunities.</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="about-highlight p-4 rounded-4 shadow-sm">
              <h5 className="mb-2">Career Growth</h5>
              <p className="mb-0 text-muted">Resume support, internships and international job advice.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="about-image-grid hero-images-grid-two-by-two">
          <div className="hero-card overflow-hidden rounded-4 shadow-sm">
            <img src={img4} alt="Study" className="img-fluid" />
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
  </div>
</section>

      <section className="why-bgm-section py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <div className="section-label mb-3">
                <span className="label-icon"><FaGlobeAmericas /></span>
                <span>Why BGM Overseas?</span>
              </div>
              <h2 className="display-6 fw-bold">
                Empowering Your Global Journey Through Trusted Guidance, Innovative Solutions, and Opportunities Without Borders
              </h2>
              <p>
                At BGM Overseas, we believe that every dream deserves the right guidance and every ambition deserves the opportunity to succeed. We are committed to helping students pursue quality education at leading international universities, supporting professionals in securing rewarding overseas career opportunities, and providing innovative IT solutions to meet the evolving needs of businesses worldwide.
              </p>
              <p>
                At BGM Overseas, we don't just open doors to global opportunities—we help you build a future filled with success, growth, and endless possibilities. Let us be your trusted partner in turning your dreams into reality and creating a brighter future beyond borders.
              </p>



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
            </div>

            <div className="col-lg-6">
              <div className="why-images-grid">
                <div className="why-card why-card-large rounded-4 overflow-hidden shadow-sm">
                  <img src={homeImage1} alt="Global expertise" className="img-fluid" />
                </div>
                <div className="why-card why-card-small rounded-4 overflow-hidden shadow-sm">
                  <img src={homeImage2} alt="Study abroad" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="universities-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-label mb-3 justify-content-center">
              <span className="label-icon"><FaGraduationCap /></span>
              <span>Featured Universities</span>
            </div>
            <h2 className="display-6 fw-bold">Get Guided Admission Into World-Ranked Universities</h2>
            <p className="mx-auto" style={{ maxWidth: 680 }}>
              A glimpse of the campuses our students dream of — and the admissions team that helps them get there.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="university-card">
                <div className="university-card-img">
                  <img src={usaHarvardCard} alt="Harvard University campus" />
                  <span className="university-badge">USA</span>
                </div>
                <div className="university-card-body">
                  <h4>Harvard University</h4>
                  <p className="university-location">Cambridge, Massachusetts</p>
                  <p className="university-desc">
                    Ivy League excellence across law, business, medicine and the liberal arts.
                  </p>
                  <Link to="/study/usa" className="university-link">Learn More →</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="university-card">
                <div className="university-card-img">
                  <img src={usaMitCard} alt="MIT campus" />
                  <span className="university-badge">USA</span>
                </div>
                <div className="university-card-body">
                  <h4>MIT</h4>
                  <p className="university-location">Cambridge, Massachusetts</p>
                  <p className="university-desc">
                    A global leader in engineering, technology, and applied sciences.
                  </p>
                  <Link to="/study/usa" className="university-link">Learn More →</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="university-card">
                <div className="university-card-img">
                  <img src={usaStanfordCard} alt="Stanford University campus" />
                  <span className="university-badge">USA</span>
                </div>
                <div className="university-card-body">
                  <h4>Stanford University</h4>
                  <p className="university-location">Stanford, California</p>
                  <p className="university-desc">
                    Silicon Valley’s home for innovation, entrepreneurship, and research.
                  </p>
                  <Link to="/study/usa" className="university-link">Learn More →</Link>
                </div>
              </div>
            </div>
          </div>

          <p className="university-photo-credit text-center mt-4 mb-0">
            Campus photography via Wikimedia Commons contributors, licensed CC BY-SA.
          </p>
        </div>
      </section>

      <section className="home-cta-banner">
        <div className="home-cta-overlay" />
        <div className="container home-cta-content">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2>Connect with Us for Expert Guidance and Support!</h2>
              <p>
                Whether you have questions about studying abroad, working internationally,
                or our IT and healthcare solutions, our dedicated team is here to help.
                Reach out today, and let’s start your journey together!
              </p>
            </div>
            <div className="col-lg-5 text-lg-end">
              <Link to="/contact" className="btn btn-cta">
                Ready to Take the Next Step? →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="home-teasers py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="teaser-card card h-100 shadow-sm border-0">
                <div className="card-body">
                  <p className="text-primary mb-2 fw-semibold">— Our Team</p>
                  <h3 className="card-title">Meet the Experts Behind BGM Overseas</h3>
                  <p className="card-text text-muted">
                    Our counselors and advisors bring real admissions, visa and
                    scholarship expertise to every student journey.
                  </p>
                  <Link to="/our-team" className="btn btn-outline-primary mt-2">
                    Meet the Team
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="teaser-card card h-100 shadow-sm border-0">
                <div className="card-body">
                  <p className="text-primary mb-2 fw-semibold">— Careers</p>
                  <h3 className="card-title">Grow Your Career with BGM Overseas</h3>
                  <p className="card-text text-muted">
                    Join our student-focused team and help build successful
                    overseas journeys.
                  </p>
                  <Link to="/careers" className="btn btn-outline-primary mt-2">
                    View Openings
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="teaser-card card h-100 shadow-sm border-0">
                <div className="card-body">
                  <p className="text-primary mb-2 fw-semibold">— Contact</p>
                  <h3 className="card-title">Let's Talk About Your Overseas Plans</h3>
                  <p className="card-text text-muted">
                    Reach out today for free guidance on applications, visas,
                    scholarships, and career planning.
                  </p>
                  <Link to="/contact" className="btn btn-primary mt-2">
                    Send a Message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;