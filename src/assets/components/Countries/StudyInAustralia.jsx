import { Link } from "react-router-dom";
import PageHero from "../PageHero/PageHero";
import heroImg from "../../images/image1.jpg";
import contentImg from "../../images/image3.jpg";
import "../../pages/StudyPages.css";

export default function StudyInAustralia() {
  return (
    <>
      <PageHero
        title="Study in Australia"
        image={heroImg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Study in Australia" }]}
      />

      <section className="mt-5 container">
        <h2 className="study-section-title mb-4">Why Study in Australia?</h2>

        <p className="mb-4">
          Australia is one of the world's most preferred destinations for international
          education, known for its globally ranked universities, innovative teaching
          methods, and outstanding quality of life. Studying in Australia provides
          students with internationally recognized qualifications, practical learning
          experiences, and excellent career opportunities in a multicultural
          environment.
        </p>

        <p className="mb-5">
          At <strong>BGM Overseas</strong>, we provide expert guidance throughout your
          study abroad journey, helping you choose the right university, course, and
          student visa pathway to achieve your academic and professional goals.
        </p>

        <div className="study-info-card mb-5">
          <h3>Globally Ranked Universities</h3>
          <p>
            Australia is home to some of the world's leading universities, offering
            internationally recognized degrees, excellent academic standards, and
            world-class research opportunities. Students benefit from experienced
            faculty, modern campuses, and industry-focused education.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Wide Range of Courses</h3>
          <p>
            Australian universities offer undergraduate, postgraduate, diploma, and
            research programs across Engineering, Information Technology, Business,
            Artificial Intelligence, Healthcare, Data Science, Accounting,
            Hospitality, Nursing, Education, and many other disciplines, allowing
            students to choose programs that align with their career aspirations.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Excellent Career Opportunities</h3>
          <p>
            Australian qualifications are recognized worldwide. Students gain valuable
            practical experience through internships, work-integrated learning,
            industry projects, and employer partnerships, helping them develop
            professional skills and enhance their global employability.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Support for International Students</h3>
          <p>
            Australian universities provide dedicated support services for
            international students, including orientation programs, academic
            counselling, career guidance, language assistance, wellbeing services,
            and multicultural student communities to ensure a smooth transition into
            university life.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Modern Learning Environment</h3>
          <p>
            Universities in Australia feature state-of-the-art campuses, advanced
            laboratories, digital classrooms, innovation hubs, and research centres
            that provide students with hands-on learning experiences and
            industry-relevant skills for the future.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Post-Study Work Opportunities</h3>
          <p>
            Australia offers attractive post-study work opportunities for eligible
            international graduates through the Temporary Graduate visa, allowing them
            to gain valuable professional experience after completing their studies.
            These opportunities help students strengthen their careers and may provide
            pathways toward long-term employment.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Scholarships & Financial Assistance</h3>
          <p>
            Many Australian universities offer scholarships, tuition fee reductions,
            and financial assistance for eligible international students.
            <strong> BGM Overseas</strong> helps students identify suitable
            scholarship opportunities and supports them throughout the application
            process.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Why Choose BGM Overseas?</h3>
          <p>
            Choosing the right education consultant is essential for a successful
            study abroad journey. At <strong>BGM Overseas</strong>, we provide
            personalized guidance and complete support to make your Australian
            admission process smooth, simple, and successful.
          </p>
          <ul className="mt-3">
            <li>Personalized career counselling</li>
            <li>University and course selection</li>
            <li>Application processing</li>
            <li>Australian student visa guidance</li>
            <li>Scholarship assistance</li>
            <li>Education loan guidance</li>
            <li>Accommodation support</li>
            <li>Pre-departure briefing</li>
            <li>Post-arrival assistance</li>
          </ul>
        </div>

        <div className="study-cta-box p-4 rounded shadow-sm">
          <h3>Start Your Australian Study Journey with BGM Overseas</h3>
          <p className="mb-0">
            Whether you're planning to pursue a Bachelor's, Master's, Diploma, or
            Research degree in Australia, <strong>BGM Overseas</strong> is committed
            to helping you achieve your international education goals with expert
            guidance and dedicated support at every stage. Let us help you turn your
            dream of studying in Australia into reality.
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
                <li><Link to="/study/uk" className="study-link">Study in UK</Link></li>
                <li><Link to="/study/australia" className="study-link active">Study in Australia</Link></li>
                <li><Link to="/study/canada" className="study-link">Study in Canada</Link></li>
              </ul>
            </div>
          </aside>

          <main className="col-lg-8">
            <div className="study-hero-image mb-4">
              <img src={contentImg} alt="Study in Australia" className="img-fluid rounded-3 shadow-sm" />
            </div>

            <div className="study-content">
              <h2 className="study-section-title">Universities</h2>
              <div className="study-partners-grid mb-5">
                <div className="study-partner-card">University of Melbourne</div>
                <div className="study-partner-card">Monash University</div>
                <div className="study-partner-card">University of Sydney</div>
                <div className="study-partner-card">UNSW Sydney</div>
                <div className="study-partner-card">University of Queensland</div>
                <div className="study-partner-card">RMIT University</div>
                <div className="study-partner-card">Deakin University</div>
                <div className="study-partner-card">Griffith University</div>
                <div className="study-partner-card">La Trobe University</div>
                <div className="study-partner-card">Curtin University</div>
                <div className="study-partner-card">Macquarie University</div>
                <div className="study-partner-card">University of Adelaide</div>
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
                    <h4>Top Programs in Australia</h4>
                    <p>
                      Study across business, engineering, health sciences, IT,
                      hospitality, and the arts at Australian universities known for
                      strong research output and graduate employability.
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
                      Australia offers strong internships, work-integrated learning,
                      and post-study work options. We support your professional
                      profile, resume guidance, and employer-facing application strategy.
                    </p>
                    <ul>
                      <li>Industry internships and campus recruiting</li>
                      <li>Temporary Graduate visa work authorization support</li>
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
                      <li>Student visa (subclass 500) application support</li>
                      <li>CoE and visa interview guidance</li>
                      <li>Document checklist and pre-departure planning</li>
                      <li>Travel insurance and accommodation advice</li>
                    </ul>
                  </div>

                  <div className="tab-pane fade" id="fees" role="tabpanel" aria-labelledby="fees-tab">
                    <h4>Fees & Finances</h4>
                    <ol className="ps-3">
                      <li>Application Fees: AUD 0 – AUD 100 per university</li>
                      <li>
                        Tuition Fees:
                        <ul>
                          <li>Undergraduate: AUD 20,000 – AUD 45,000 / year</li>
                          <li>Postgraduate: AUD 22,000 – AUD 50,000 / year</li>
                        </ul>
                      </li>
                      <li>Living Expenses: AUD 21,000 – AUD 25,000 / year</li>
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
                  Contact Us for Australia Admission
                </Link>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
