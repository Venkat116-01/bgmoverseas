import { Link } from "react-router-dom";
import studyuk1 from "../../images/studyinuk1.png";
import studyuk2 from "../../images/studyink2.png";
import studyuk3 from "../../images/studyinuk2.png";
// import "../../pages/PagesHero.css";
// import "../../pages/StudyPages.css";
import "../../pages/StudyInBGM.css";

export default function StudyInCanada() {
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
          <h1 className="page-hero-title">Study in Canada</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
        
              <li className="breadcrumb-item active" aria-current="page">
                Study in Canada
              </li>
            </ol>
          </nav>
        </div>
        
      </section>
      <section className="mt-5 container">
  <h2 className="study-section-title mb-4">
    Why Study in the Canada?
  </h2>

  <p className="mb-4">
  Canada is one of the world's leading destinations for international
  education, known for its globally recognized universities, high academic
  standards, multicultural environment, and excellent quality of life.
  Studying in Canada provides students with world-class education, practical
  learning opportunities, and outstanding career prospects in a welcoming and
  inclusive society.
</p>




  <div className="mb-5">
    <h3>World-Renowned Universities</h3>
    <p>
      The canadais home to some of the world's most prestigious universities,
      offering internationally recognized degrees with outstanding academic
      standards. Students benefit from experienced faculty, innovative teaching,
      and research-driven education.
    </p>
  </div>

  <div className="mb-5">
    <h3>Diverse Course Options</h3>
     <p>
    Canada offers a wide variety of high-quality undergraduate,
    postgraduate, diploma, and research programs through its globally
    recognized universities and colleges. Students can choose from
    disciplines such as Engineering, Computer Science, Business,
    Artificial Intelligence, Healthcare, Cyber Security, Data Analytics,
    Finance, Hospitality, Environmental Studies, and many more, allowing
    them to build a career that matches their interests and ambitions.
  </p>
  </div>

  <div className="mb-5">
    <h3>Excellent Career Opportunities</h3>
    <p>
  A Canadian qualification is highly valued by employers across the globe.
  Students gain valuable practical experience through co-op programs,
  internships, research opportunities, and industry partnerships, helping
  them develop in-demand skills and improve their career prospects in Canada
  and internationally.
</p>
  </div>

  <div className="mb-5">
    <h3>Support for International Students</h3>
  <p>
  Canadian universities offer excellent support services for international
  students, including orientation programs, academic guidance, career
  counselling, language assistance, mental health support, and vibrant
  student communities to help students adapt successfully and thrive in
  Canada.
</p>
  </div>

  <div className="mb-5">
    <h3>Innovative Learning Environment</h3>
   <p>
  Universities in Canada are equipped with world-class campuses, advanced
  laboratories, cutting-edge research centres, and modern digital learning
  environments. Students benefit from hands-on learning, innovation-driven
  education, and industry-relevant training that prepares them for successful
  careers worldwide.
</p>
  </div>

  <div className="mb-5">
    <p>
    <h3>Graduate Route & Work Opportunities</h3>
     Canada offers excellent post-study work opportunities through the
    <strong> Post-Graduation Work Permit (PGWP)</strong> program. Eligible
    international graduates can gain valuable Canadian work experience after
    completing their studies, helping them build successful careers and
    providing pathways toward permanent residency for qualified applicants.
  </p>
  </div>

  <div className="mb-5">
    <h3>Scholarships & Financial Support</h3>
    <p>
    Many Canadian universities offer scholarships, bursaries, tuition fee
    waivers, and financial assistance for eligible international students.
    At <strong>BGM Overseas</strong>, we help students identify suitable
    scholarship opportunities and provide guidance throughout the application
    process to maximize their chances of receiving financial support.
  </p>
  </div>

  <div className="mb-5">
    <h3>Why Choose BGM Overseas?</h3>

    <p>
      Choosing the right education consultant is essential for a successful
      study abroad journey. At <strong>BGM Overseas</strong>, we provide
      personalized support and end-to-end assistance to make your UK admission
      process smooth and stress-free.
    </p>

    <ul className="mt-3">
      <li>Personalized career counselling</li>
      <li>University and course selection</li>
      <li>Application processing</li>
      <li>UK student visa guidance</li>
      <li>Scholarship assistance</li>
      <li>Education loan guidance</li>
      <li>Accommodation support</li>
      <li>Pre-departure briefing</li>
      <li>Post-arrival assistance</li>
    </ul>
  </div>

  <div className="bg-light p-4 rounded shadow-sm">
    <h3>Start Your UK Study Journey with BGM Overseas</h3>

    <p className="mb-0">
      Whether you're planning to pursue a Bachelor's, Master's, or Research
      degree in the United Kingdom, <strong>BGM Overseas</strong> is committed
      to helping you achieve your international education goals with expert
      guidance and dedicated support at every stage. Let us help you turn your
      dream of studying in the UK into reality.
    </p>
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
                  Contact Us for USA Admission
                </Link>
              </div>
            </div>
          </main>
        </div>
      </section> */}
    </>
  );
}