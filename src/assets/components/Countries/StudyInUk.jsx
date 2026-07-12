import { Link } from "react-router-dom";
import studyuk1 from "../../images/studyinuk1.png";
import studyuk2 from "../../images/studyink2.png";
import studyuk3 from "../../images/studyinuk2.png";
import "../../pages/PagesHero.css";
import "../../pages/StudyPages.css";

export default function StudyInUk() {
  return (
    <>
      <section
        className="page-hero"
        style={{
          backgroundImage: `url(${studyuk1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container text-center py-5">
          <h1 className="page-hero-title">Study in UK</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Study in UK
              </li>
            </ol>
          </nav>
        </div>
        
      </section>
 <section className="mt-5 container">
  <h2 className="study-section-title mb-4">
    Why Study in the UK?
  </h2>

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

  <div className="mb-5">
    <h3>Globally Recognized Universities</h3>
    <p>
      The UK is home to some of the world's most prestigious universities,
      known for academic excellence, innovative research, and high-quality
      education. A UK degree is internationally respected and opens doors to
      career opportunities across the globe.
    </p>
  </div>

  <div className="mb-5">
    <h3>Extensive Course Choices</h3>
    <p>
      UK universities offer a wide selection of undergraduate, postgraduate,
      diploma, and research programs in Engineering, Business, Computer
      Science, Artificial Intelligence, Healthcare, Finance, Law,
      Hospitality, Data Science, and many other fields, allowing students to
      pursue careers aligned with their interests and ambitions.
    </p>
  </div>

  <div className="mb-5">
    <h3>Outstanding Career Prospects</h3>
    <p>
      Employers worldwide highly value UK qualifications. Students gain
      practical experience through internships, industrial placements,
      research projects, and employer partnerships, helping them build strong
      professional skills and improve their global employability.
    </p>
  </div>

  <div className="mb-5">
    <h3>Comprehensive Student Support</h3>
    <p>
      UK universities provide dedicated services for international students,
      including orientation programs, academic mentoring, career guidance,
      language support, wellbeing services, and vibrant student societies,
      ensuring a smooth transition into university life.
    </p>
  </div>

  <div className="mb-5">
    <h3>Modern Learning Facilities</h3>
    <p>
      Students benefit from advanced laboratories, smart classrooms,
      digital libraries, research centres, and industry-focused learning
      environments that combine academic knowledge with practical experience.
    </p>
  </div>

  <div className="mb-5">
    <h3>Graduate Route & Post-Study Work</h3>
    <p>
      Eligible international graduates can take advantage of the UK's
      Graduate Route, allowing them to stay and work after completing their
      studies. This valuable opportunity enables students to gain
      international work experience and strengthen their long-term career
      prospects.
    </p>
  </div>

  <div className="mb-5">
    <h3>Scholarships & Financial Assistance</h3>
    <p>
      Many UK universities provide scholarships, tuition fee reductions, and
      financial aid for eligible international students. BGM Overseas helps
      students identify suitable scholarship opportunities and supports them
      throughout the application process.
    </p>
  </div>

  <div className="mb-5">
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

  <div className="bg-light p-4 rounded shadow-sm">
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
<section>
     <div className="text-center mt-4">
                <Link to="/contact" className="btn btn-cta">
                  Contact Us for UK Admission
                </Link>
              </div>
</section>
      

      {/* <section className="study-layout container py-5">
        <div className="row g-4">
          <aside className="col-lg-4">
            <div className="study-sidebar card p-4 shadow-sm">
              <h3 className="mb-3">Study</h3>
              <ul className="study-list list-unstyled">
                <li>
                  <Link to="/study/canada" className="study-link">
                    Study in Canada
                  </Link>
                </li>
                <li>
                  <Link to="/study/australia" className="study-link">
                    Study in Australia
                  </Link>
                </li>
                <li>
                  <Link to="/study-uk" className="study-link">
                    Study in UK
                  </Link>
                </li>
                <li>
                  <Link to="/study-usa" className="study-link active">
                    Study in USA
                  </Link>
                </li>
                <li>
                  <Link to="/study/singapore" className="study-link">
                    Study in Singapore
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          <main className="col-lg-8">
            <div className="study-hero-image mb-4">
              <img
                src={studyuk1}
                alt="Study in USA"
                className="img-fluid rounded-3 shadow-sm"
              />
            </div>

            <div className="study-content">
              <h2 className="study-section-title">University </h2>
              <div className="study-partners-grid mb-5">
                <div className="study-partner-card">Adelphi University</div>
                <div className="study-partner-card">Anderson University</div>
                <div className="study-partner-card">Campbellsville University</div>
                <div className="study-partner-card">Cumberland University</div>
                <div className="study-partner-card">Faulkner University</div>
                <div className="study-partner-card">Golden Gate University</div>
                <div className="study-partner-card">Marshall University</div>
                <div className="study-partner-card">Murray State University</div>
                <div className="study-partner-card">Purdue University Northwest</div>
                <div className="study-partner-card">St. Francis College</div>
                <div className="study-partner-card">University of the Cumberlands</div>
                <div className="study-partner-card">University of Louisville</div>
                <div className="study-partner-card">Wayland Baptist University</div>
                <div className="study-partner-card">Baptist University of Florida</div>
                <div className="study-partner-card">Wittenberg University</div>
                <div className="study-partner-card">Central Michigan University</div>
              </div>

              <div className="card p-4 shadow-sm">
                <ul className="nav nav-pills mb-4 justify-content-center" id="studyTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="universities-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#universities"
                      type="button"
                      role="tab"
                      aria-controls="universities"
                      aria-selected="true"
                    >
                      Universities & Courses
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="career-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#career"
                      type="button"
                      role="tab"
                      aria-controls="career"
                      aria-selected="false"
                    >
                      Career Opportunities
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="visa-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#visa"
                      type="button"
                      role="tab"
                      aria-controls="visa"
                      aria-selected="false"
                    >
                      Visa & More
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="fees-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#fees"
                      type="button"
                      role="tab"
                      aria-controls="fees"
                      aria-selected="false"
                    >
                      Fees & Finances
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="studyTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="universities"
                    role="tabpanel"
                    aria-labelledby="universities-tab"
                  >
                    <h4>Top Programs in the USA</h4>
                    <p>
                      Study at our partner universities across business, engineering,
                      health sciences, IT, hospitality, and liberal arts. We help
                      you select programs with strong career outcomes and scholarship
                      opportunities.
                    </p>
                    <ul>
                      <li>Business Administration & Management</li>
                      <li>Computer Science & Data Analytics</li>
                      <li>Engineering (Mechanical, Civil, Electrical)</li>
                      <li>Healthcare & Nursing Programs</li>
                      <li>Hospitality Management & Tourism</li>
                    </ul>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="career"
                    role="tabpanel"
                    aria-labelledby="career-tab"
                  >
                    <h4>Career Opportunities</h4>
                    <p>
                      The USA offers strong internships, co-op placements, and
                      post-study work options. We support your professional profile,
                      resume guidance, and employer-facing application strategy.
                    </p>
                    <ul>
                      <li>Industry internships and campus recruiting</li>
                      <li>STEM OPT and work authorization support</li>
                      <li>Networking and career mentoring</li>
                      <li>Graduate employment pathways in finance, tech, and health</li>
                    </ul>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="visa"
                    role="tabpanel"
                    aria-labelledby="visa-tab"
                  >
                    <h4>Visa & More</h4>
                    <p>
                      We help you prepare all visa documents, application forms,
                      interview coaching, and travel planning so your study journey
                      is smooth and stress-free.
                    </p>
                    <ul>
                      <li>F-1 student visa application support</li>
                      <li>SEVIS fee and visa interview guidance</li>
                      <li>Document checklist and pre-departure planning</li>
                      <li>Travel insurance and accommodation advice</li>
                    </ul>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="fees"
                    role="tabpanel"
                    aria-labelledby="fees-tab"
                  >
                    <h4>Fees & Finances</h4>
                    <ol className="ps-3">
                      <li>Application Fees: $0 – $150 per university</li>
                      <li>
                        Tuition Fees:
                        <ul>
                          <li>Undergraduate: $15,000 – $55,000 / year</li>
                          <li>Postgraduate: $15,000 – $65,000 / year</li>
                        </ul>
                      </li>
                      <li>Living Expenses: $10,000 – $20,000 / year</li>
                      <li>
                        Exam Fees:
                        <ul>
                          <li>IELTS: INR 19,000</li>
                          <li>TOEFL: INR 18,000</li>
                          <li>PTE: INR 18,900</li>
                          <li>Duolingo: $59 – $70</li>
                          <li>GRE: INR 22,550</li>
                          <li>GMAT: $324</li>
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
      </section> */}
    </>
  );
}