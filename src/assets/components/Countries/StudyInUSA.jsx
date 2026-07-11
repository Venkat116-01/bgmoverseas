import { Link } from "react-router-dom";
import heroImg from "../../images/studyinusa1.png";
import studyusa2 from "../../images/studyinusa2.png";
import "../../pages/PagesHero.css";
import "../../pages/StudyPages.css";

export default function StudyInUSA() {
  return (
    <>
      <section
        className="page-hero"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container text-center py-5">
          <h1 className="page-hero-title">Study in USA</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              
              <li className="breadcrumb-item active" aria-current="page">
                Study in USA
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="mt-5 container">
  <h2 className="study-section-title mb-4">
    Why Study in the USA?
  </h2>

  <p className="mb-4">
    The United States is one of the world's most sought-after destinations
    for higher education, attracting students from every corner of the globe.
    With internationally recognized universities, innovative teaching methods,
    and exceptional career opportunities, studying in the USA provides students
    with the knowledge, skills, and global exposure needed to build a successful future.
  </p>

  <p className="mb-5">
    At <strong>BGM Overseas</strong>, we guide aspiring students through every
    step of the admission and visa process, helping them choose the right
    university and program to achieve their academic and professional goals.
  </p>

  <div className="mb-5">
    <h3>World-Class Universities</h3>
    <p>
      The USA is home to many of the world's highest-ranked universities,
      offering globally recognized degrees and outstanding academic excellence.
      Students benefit from advanced research facilities, experienced faculty,
      and a diverse learning environment that prepares them for success in today's
      competitive world.
    </p>
  </div>

  <div className="mb-5">
    <h3>Wide Range of Courses</h3>
    <p>
      American universities offer thousands of undergraduate, postgraduate,
      and research programs across Engineering, Computer Science, Business,
      Healthcare, Artificial Intelligence, Finance, Hospitality, and many
      other disciplines. Students have the flexibility to choose programs
      that match their interests and career aspirations.
    </p>
  </div>

  <div className="mb-5">
    <h3>Excellent Career Opportunities</h3>
    <p>
      Studying in the USA opens doors to exciting career prospects with leading
      multinational companies. Students gain valuable practical experience
      through internships, research projects, and industry collaborations,
      helping them develop skills that employers value worldwide.
    </p>
  </div>

  <div className="mb-5">
    <h3>Strong Support for International Students</h3>
    <p>
      US universities provide dedicated support services to help international
      students settle into campus life. Orientation programs, academic advising,
      career services, language support, and student organizations ensure a
      smooth and enjoyable learning experience.
    </p>
  </div>

  <div className="mb-5">
    <h3>Innovation & Advanced Technology</h3>
    <p>
      The United States is a global leader in innovation and technology.
      Universities are equipped with modern laboratories, smart classrooms,
      research centers, and cutting-edge facilities, allowing students to
      learn using the latest technologies and industry practices.
    </p>
  </div>

  <div className="mb-5">
    <h3>Practical Training Opportunities (CPT & OPT)</h3>
    <p>
      International students may be eligible for Curricular Practical Training
      (CPT) and Optional Practical Training (OPT), which provide valuable work
      experience related to their field of study. These opportunities help
      students gain real-world exposure while enhancing their employability.
    </p>
  </div>

  <div className="mb-5">
    <h3>Scholarships & Financial Assistance</h3>
    <p>
      Many universities in the USA offer scholarships, tuition discounts,
      assistantships, and financial aid for eligible international students.
      BGM Overseas assists students in identifying scholarship opportunities
      and completing successful applications.
    </p>
  </div>

  <div className="mb-5">
    <h3>Why Choose BGM Overseas?</h3>

    <p>
      Choosing the right education consultant is just as important as selecting
      the right university. At <strong>BGM Overseas</strong>, we provide
      personalized guidance and end-to-end support throughout your study abroad journey.
    </p>

    <ul className="mt-3">
      <li>Personalized career counselling</li>
      <li>University and course selection</li>
      <li>Application processing</li>
      <li>Visa documentation and interview guidance</li>
      <li>Scholarship assistance</li>
      <li>Education loan guidance</li>
      <li>Accommodation support</li>
      <li>Pre-departure briefing</li>
      <li>Post-arrival assistance</li>
    </ul>
  </div>

  <div className="bg-light p-4 rounded shadow-sm">
    <h3>Begin Your Study Abroad Journey with BGM Overseas</h3>

    <p className="mb-0">
      Whether you're planning to pursue a Bachelor's, Master's, or Research
      degree in the United States, <strong>BGM Overseas</strong> is committed
      to helping you achieve your international education goals with expert
      guidance and dedicated support every step of the way. Let us help you
      turn your dream of studying in the USA into reality.
    </p>
  </div>
</section>

      <section className="study-layout container py-5">
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
                src={studyusa2}
                alt="Study in USA"
                className="img-fluid rounded-3 shadow-sm"
              />
            </div>

            <div className="study-content">
              <h2 className="study-section-title"> Universities</h2>
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
      </section>
    </>
  );
}