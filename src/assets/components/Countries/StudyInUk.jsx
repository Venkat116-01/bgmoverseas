import { Link } from "react-router-dom";
import PageHero from "../PageHero/PageHero";
import studyuk1 from "../../images/studyinuk1.png";
import studyuk3 from "../../images/studyinuk2.png";
import "../../pages/StudyPages.css";

export default function StudyInUk() {
  return (
    <>
      <PageHero
        title="Study in UK"
        image={studyuk1}
        crumbs={[{ label: "Home", to: "/" }, { label: "Study in UK" }]}
      />

      <section className="mt-5 container">
        <h2 className="study-section-title mb-4">Why Study in the UK?</h2>

        <p className="mb-4">
          The United Kingdom has long been recognized as one of the world's premier
          destinations for higher education. Home to prestigious universities,
          innovative teaching methods, and globally respected qualifications, the UK
          offers students an exceptional learning experience that prepares them for
          successful international careers.
        </p>

        <p className="mb-5">
          At <strong>BGM Overseas</strong>, we help students achieve their dream of
          studying in the UK by providing expert counselling, university selection,
          admission support, visa assistance, and personalized guidance throughout
          every stage of the study abroad journey.
        </p>

        <div className="study-info-card mb-5">
          <h3>Globally Recognized Universities</h3>
          <p>
            The UK is home to some of the world's most prestigious universities,
            known for academic excellence, innovative research, and high-quality
            education. A UK degree is internationally respected and opens doors to
            career opportunities across the globe.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Extensive Course Choices</h3>
          <p>
            UK universities offer a wide selection of undergraduate, postgraduate,
            diploma, and research programs in Engineering, Business, Computer
            Science, Artificial Intelligence, Healthcare, Finance, Law,
            Hospitality, Data Science, and many other fields, allowing students to
            pursue careers aligned with their interests and ambitions.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Outstanding Career Prospects</h3>
          <p>
            Employers worldwide highly value UK qualifications. Students gain
            practical experience through internships, industrial placements,
            research projects, and employer partnerships, helping them build strong
            professional skills and improve their global employability.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Comprehensive Student Support</h3>
          <p>
            UK universities provide dedicated services for international students,
            including orientation programs, academic mentoring, career guidance,
            language support, wellbeing services, and vibrant student societies,
            ensuring a smooth transition into university life.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Modern Learning Facilities</h3>
          <p>
            Students benefit from advanced laboratories, smart classrooms,
            digital libraries, research centres, and industry-focused learning
            environments that combine academic knowledge with practical experience.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Graduate Route & Post-Study Work</h3>
          <p>
            Eligible international graduates can take advantage of the UK's
            Graduate Route, allowing them to stay and work after completing their
            studies. This valuable opportunity enables students to gain
            international work experience and strengthen their long-term career
            prospects.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Scholarships & Financial Assistance</h3>
          <p>
            Many UK universities provide scholarships, tuition fee reductions, and
            financial aid for eligible international students. BGM Overseas helps
            students identify suitable scholarship opportunities and supports them
            throughout the application process.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Why Choose BGM Overseas?</h3>
          <p>
            At <strong>BGM Overseas</strong>, we are committed to making your UK
            study journey simple, successful, and stress-free through expert
            guidance and personalized support.
          </p>
          <ul className="mt-3">
            <li>One-to-one career counselling</li>
            <li>University & course selection</li>
            <li>Complete application assistance</li>
            <li>UK student visa guidance</li>
            <li>Scholarship & financial aid support</li>
            <li>Education loan assistance</li>
            <li>Accommodation guidance</li>
            <li>Pre-departure briefing</li>
            <li>Post-arrival support</li>
          </ul>
        </div>

        <div className="study-cta-box p-4 rounded shadow-sm">
          <h3>Begin Your UK Education Journey with BGM Overseas</h3>
          <p className="mb-0">
            Whether you plan to pursue a Bachelor's, Master's, Diploma, or Research
            degree, <strong>BGM Overseas</strong> is here to guide you at every
            step. From choosing the right university to securing your visa and
            preparing for departure, we help transform your dream of studying in
            the United Kingdom into a successful reality.
          </p>
        </div>
      </section>

      <section className="study-layout container py-5">
        <div className="row g-4">
          <aside className="col-lg-4">
            <div className="study-sidebar card p-4 shadow-sm">
              <h3 className="mb-3">Study</h3>
              <ul className="study-list list-unstyled">
                <li><Link to="/study/usa" className="study-link">Study in USA</Link></li>
                <li><Link to="/study/uk" className="study-link active">Study in UK</Link></li>
                <li><Link to="/study/australia" className="study-link">Study in Australia</Link></li>
                <li><Link to="/study/canada" className="study-link">Study in Canada</Link></li>
              </ul>
            </div>
          </aside>

          <main className="col-lg-8">
            <div className="study-hero-image mb-4">
              <img src={studyuk3} alt="Study in UK" className="img-fluid rounded-3 shadow-sm" />
            </div>

            <div className="study-content">
              <h2 className="study-section-title">Universities</h2>
              <div className="study-partners-grid mb-5">
                <div className="study-partner-card">University of Birmingham</div>
                <div className="study-partner-card">University of Leeds</div>
                <div className="study-partner-card">University of Sheffield</div>
                <div className="study-partner-card">Coventry University</div>
                <div className="study-partner-card">University of Hertfordshire</div>
                <div className="study-partner-card">Northumbria University</div>
                <div className="study-partner-card">Cardiff University</div>
                <div className="study-partner-card">University of Sussex</div>
                <div className="study-partner-card">Ulster University</div>
                <div className="study-partner-card">University of Portsmouth</div>
                <div className="study-partner-card">Kingston University</div>
                <div className="study-partner-card">Oxford Brookes University</div>
              </div>

              <div className="study-tab-card card p-4 shadow-sm">
                <ul className="nav nav-pills mb-4 justify-content-center" id="studyTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="universities-tab" data-bs-toggle="pill" data-bs-target="#universities" type="button" role="tab" aria-controls="universities" aria-selected="true">
                      Universities & Courses
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="career-tab" data-bs-toggle="pill" data-bs-target="#career" type="button" role="tab" aria-controls="career" aria-selected="false">
                      Career Opportunities
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="visa-tab" data-bs-toggle="pill" data-bs-target="#visa" type="button" role="tab" aria-controls="visa" aria-selected="false">
                      Visa & More
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="fees-tab" data-bs-toggle="pill" data-bs-target="#fees" type="button" role="tab" aria-controls="fees" aria-selected="false">
                      Fees & Finances
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="studyTabContent">
                  <div className="tab-pane fade show active" id="universities" role="tabpanel" aria-labelledby="universities-tab">
                    <h4>Top Programs in the UK</h4>
                    <p>
                      Study across business, engineering, health sciences, IT,
                      hospitality, and the arts at UK universities known for
                      strong academic reputations and career outcomes.
                    </p>
                    <ul>
                      <li>Business Administration & Management</li>
                      <li>Computer Science & Data Analytics</li>
                      <li>Engineering (Mechanical, Civil, Electrical)</li>
                      <li>Healthcare & Nursing Programs</li>
                      <li>Hospitality Management & Tourism</li>
                    </ul>
                  </div>

                  <div className="tab-pane fade" id="career" role="tabpanel" aria-labelledby="career-tab">
                    <h4>Career Opportunities</h4>
                    <p>
                      The UK offers strong internships, industrial placement years,
                      and post-study work options. We support your professional
                      profile, CV guidance, and employer-facing application strategy.
                    </p>
                    <ul>
                      <li>Industry internships and placement years</li>
                      <li>Graduate Route work authorization support</li>
                      <li>Networking and career mentoring</li>
                      <li>Graduate employment pathways in finance, tech, and health</li>
                    </ul>
                  </div>

                  <div className="tab-pane fade" id="visa" role="tabpanel" aria-labelledby="visa-tab">
                    <h4>Visa & More</h4>
                    <p>
                      We help you prepare all visa documents, application forms,
                      interview coaching, and travel planning so your study journey
                      is smooth and stress-free.
                    </p>
                    <ul>
                      <li>Student (Route) visa application support</li>
                      <li>CAS letter and visa interview guidance</li>
                      <li>Document checklist and pre-departure planning</li>
                      <li>Travel insurance and accommodation advice</li>
                    </ul>
                  </div>

                  <div className="tab-pane fade" id="fees" role="tabpanel" aria-labelledby="fees-tab">
                    <h4>Fees & Finances</h4>
                    <ol className="ps-3">
                      <li>Application Fees: £0 – £75 per university</li>
                      <li>
                        Tuition Fees:
                        <ul>
                          <li>Undergraduate: £12,000 – £25,000 / year</li>
                          <li>Postgraduate: £13,000 – £28,000 / year</li>
                        </ul>
                      </li>
                      <li>Living Expenses: £12,000 – £15,000 / year</li>
                      <li>
                        Exam Fees:
                        <ul>
                          <li>IELTS: INR 19,000</li>
                          <li>TOEFL: INR 18,000</li>
                          <li>PTE: INR 18,900</li>
                          <li>Duolingo: $59 – $70</li>
                        </ul>
                      </li>
                      <li>Score Reporting: Free for 5 universities, INR 250 per additional report</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <Link to="/contact" className="btn btn-cta">
                  Contact Us for UK Admission
                </Link>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
