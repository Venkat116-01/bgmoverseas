
import { Link } from "react-router-dom";
// import img1 from "../../images/hero1.jpg";
// import img2 from "../../images/hero2.jpg";
// import img3 from "../../images/hero3.jpg";
import homeImage1 from "../images/home1.jpg";
import homeImage2 from "../images/home2.jpg";
import homeImage3 from "../images/home3.jpg";
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import "./Home.css";


function Home() {
  return (
    <>
    {/* Hero Carousel */}
 {/* <section className="container-fluid px-0 hero-carousel-section">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={homeImage1} className="d-block w-100" alt="Slide 1" />
              <div className="carousel-caption carousel-caption-left">
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

            <div className="carousel-item">
              <img src={homeImage2} className="d-block w-100" alt="Slide 2" />
              <div className="carousel-caption carousel-caption-left">
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

            <div className="carousel-item">
              <img src={homeImage3} className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption carousel-caption-left">
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

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section> */}

<section className="hero-section container-fluid px-0">
  <div className="hero-overlay" />

  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={homeImage1} className="d-block w-100" alt="Slide 1" />
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
        <img src={homeImage2} className="d-block w-100" alt="Slide 2" />
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
        <img src={homeImage3} className="d-block w-100" alt="Slide 3" />
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



     {/* about section */}
      {/* <section className="container py-5">
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
      </section> */}

      <section className="about-section py-5">
  <div className="container">
    <div className="row align-items-center gy-4">
      <div className="col-lg-6">
        <p className="text-primary mb-2 fw-semibold">— About Us</p>
        <h1 className="display-5 fw-bold">
          Your Gateway to Global Education, Career, and IT Solutions
        </h1>
        <p className="lead text-muted mt-4">
          At BGM Overseas, we help students and professionals move abroad with confidence.
          From university placement to visa guidance, scholarship support and career coaching,
          our team delivers personalized support through every step.
        </p>

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
  </div>
</section>

      <section className="why-bgm-section py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <div className="section-label mb-3">
                <span className="label-icon">🌍</span>
                <span>Why BGM Overseas?</span>
              </div>
              <h2 className="display-5 fw-bold">
                Trusted Expertise, Global Reach, and Tailored Solutions for Your Success
              </h2>
              <p className="lead text-muted mt-4">
                At BGM Overseas, we don’t just guide you; we empower you to achieve your global ambitions with confidence and clarity.
                Let us be your trusted partner in shaping a brighter, more successful future.
              </p>

              <div className="row gx-4 gy-4 mt-5">
                <div className="col-sm-6">
                  <div className="feature-card p-4 rounded-4">
                    <div className="feature-icon">🤝</div>
                    <h5>Expert Guidance</h5>
                    <p className="text-muted">
                      Our team of certified consultants offers in-depth knowledge and expertise, ensuring you make informed decisions.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-card p-4 rounded-4">
                    <div className="feature-icon">🌐</div>
                    <h5>Global Reach</h5>
                    <p className="text-muted">
                      From Canada to Australia, Malta to Singapore, we open doors to the world’s leading educational institutions and job markets.
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

      <section className="home-cta-banner">
        <div className="home-cta-overlay" />
        <div className="container home-cta-content">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Connect with Us for Expert Guidance and Support!</h1>
              <p className="lead">
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
      <section className="team-section py-5">
  <div className="container">
    <div className="team-hero card team-hero-card shadow-sm border-0 mb-5">
      <div className="card-body">
        <p className="text-primary mb-2 fw-semibold">— Our Team</p>
        <h2 className="display-5 fw-bold">Meet the Experts Behind BGM Overseas</h2>
        <p className="lead text-muted">
          Our counselors and advisors bring real admissions, visa and scholarship expertise to every student journey.
        </p>
      </div>
    </div>

    <div className="row g-4">
      {[
        {
          name: "Aman Sharma",
          role: "Founder & CEO",
          description: "Overseas education expert with 10+ years of experience.",
        },
        {
          name: "Priya Patel",
          role: "Study Abroad Counselor",
          description: "Specializes in USA and UK admissions.",
        },
        {
          name: "Rohit Mehta",
          role: "Visa Consultant",
          description: "Helps students secure visa approvals smoothly.",
        },
      ].map((member) => (
        <div className="col-md-4" key={member.name}>
          <div className="team-member-card card h-100 shadow-sm border-0">
            <div className="card-body">
              <div className="team-member-badge">{member.name.split(" ").map((n) => n[0]).join("")}</div>
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role text-primary">{member.role}</p>
              <p className="team-member-description">{member.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
   
<section className="career-section container py-5">
  <div className="text-center mb-5">
    <p className="text-primary mb-2 fw-semibold">— Careers</p>
    <h2 className="display-5 fw-bold">Grow Your Career with BGM Overseas</h2>
    <p className="lead text-muted">
      Join our student-focused team and help build successful overseas journeys.
    </p>
  </div>

  <div className="row gy-4">
    <div className="col-md-4">
      <div className="career-card card h-100 shadow-sm border-0">
        <div className="card-body">
          <h3 className="card-title">Open Positions</h3>
          <p className="card-text">
            We are hiring counselors, admissions specialists, visa experts, and marketing professionals.
          </p>
          <ul>
            <li>Study Abroad Counselor</li>
            <li>Visa Assistance Expert</li>
            <li>Content & Digital Marketing</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="career-card card h-100 shadow-sm border-0">
        <div className="card-body">
          <h3 className="card-title">Why Work With Us</h3>
          <p className="card-text">
            Grow in a supportive team, access training, and make a real impact on student careers.
          </p>
          <ul>
            <li>Flexible work culture</li>
            <li>Professional development</li>
            <li>Global student network</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="career-card card h-100 shadow-sm border-0">
        <div className="card-body">
          <h3 className="card-title">Apply Now</h3>
          <p className="card-text">
            Send your resume and cover letter to careers@bgmoverseas.com or visit our contact page.
          </p>
          <Link to="/contact" className="btn btn-primary mt-3">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="contact-section py-5">
  <div className="container">
    <div className="contact-intro text-center mb-5">
      <p className="text-primary mb-2 fw-semibold">— Contact</p>
      <h2 className="display-5 fw-bold">Let’s Talk About Your Overseas Plans</h2>
      <p className="lead text-muted mx-auto" style={{ maxWidth: 720 }}>
        We’re here to support your admissions, visa, and scholarship journey every
        step of the way. Connect with our team for personalised overseas guidance.
      </p>
    </div>

    <div className="row g-4 align-items-center">
      <div className="col-lg-6">
        <div className="contact-card contact-info-card h-100 shadow-sm border-0">
          <div className="card-body">
            <div className="contact-card-top">
              <div className="contact-icon">📞</div>
              <div>
                <h4 className="card-title mb-2">Get in Touch</h4>
                <p className="text-muted mb-0">
                  Our advisors are ready to help you with study abroad, visa,
                  scholarship and career planning support.
                </p>
              </div>
            </div>

            <ul className="contact-list list-unstyled mt-4">
              <li>
                <strong>Phone:</strong> +91 98765 43210
              </li>
              <li>
                <strong>Email:</strong> info@bgmoverseas.com
              </li>
              <li>
                <strong>Address:</strong> 123 Student Plaza, Mumbai, India
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="contact-card contact-action-card h-100 shadow-sm border-0">
          <div className="card-body">
            <h4 className="card-title mb-3">Ready to get started?</h4>
            <p className="text-muted mb-4">
              Reach out today for free guidance on applications, visas,
              scholarships, and career planning.
            </p>
            <Link to="/contact" className="btn btn-primary contact-btn">
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