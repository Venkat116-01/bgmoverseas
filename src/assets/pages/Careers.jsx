import { Link } from "react-router-dom";
import "./Careers.css";
import PageHero from "../components/PageHero/PageHero";
import whyBgmBg from "../images/why-bgm-bg.jpg";

function Careers() {
  return (
    <>
      <PageHero
        title="Careers"
        image={whyBgmBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Careers" }]}
      />

      <section className="container py-4">
        <div className="text-center mb-4">
          <p className="text-primary mb-2 fw-semibold">— Careers</p>
          <h2 className="display-5 fw-bold">Build Your Career with BGM Overseas</h2>
          <p className="lead text-muted">
            Join our team of student-focused experts and help shape global study abroad success.
          </p>
        </div>

        <div className="row gy-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 careers-card">
              <div className="card-body">
                <h3 className="card-title">Open Positions</h3>
                <p className="card-text">
                  We are hiring counselors, admissions specialists, visa experts, and marketing professionals.
                </p>
                <ul className="ps-3">
                  <li>Study Abroad Counselor</li>
                  <li>Visa Assistance Expert</li>
                  <li>Content & Digital Marketing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 careers-card">
              <div className="card-body">
                <h3 className="card-title">Why Work With Us</h3>
                <p className="card-text">
                  Grow in a supportive team, access training, and make a real impact on student careers.
                </p>
                <ul className="ps-3">
                  <li>Flexible work culture</li>
                  <li>Professional development</li>
                  <li>Global student network</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 careers-card">
              <div className="card-body">
                <h3 className="card-title">Apply Now</h3>
                <p className="card-text">
                  Send your resume and cover letter to bgmoverseasconsultancy@gmail.com or contact our team directly.
                </p>
                <Link to="/contact" className="btn btn-primary mt-3">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;