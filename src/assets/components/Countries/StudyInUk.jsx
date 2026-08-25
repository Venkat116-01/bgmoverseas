import { Link } from "react-router-dom";
import PageHero from "../PageHero/PageHero";
import studyuk1 from "../../images/studyinuk1.png";
import "../../pages/StudyPages.css";

const UK_UNIVERSITIES = [
  { name: "University of Birmingham", url: "https://www.birmingham.ac.uk" },
  { name: "University of Leeds", url: "https://www.leeds.ac.uk" },
  { name: "University of Sheffield", url: "https://www.sheffield.ac.uk" },
  { name: "Coventry University", url: "https://www.coventry.ac.uk" },
  { name: "University of Hertfordshire", url: "https://www.herts.ac.uk" },
  { name: "Northumbria University", url: "https://www.northumbria.ac.uk" },
  { name: "Cardiff University", url: "https://www.cardiff.ac.uk" },
  { name: "University of Sussex", url: "https://www.sussex.ac.uk" },
  { name: "Ulster University", url: "https://www.ulster.ac.uk" },
  { name: "University of Portsmouth", url: "https://www.port.ac.uk" },
  { name: "Kingston University", url: "https://www.kingston.ac.uk" },
  { name: "Oxford Brookes University", url: "https://www.brookes.ac.uk" },
];

export default function StudyInUk() {
  return (
    <>
      <PageHero
        title="Study in UK"
        image={studyuk1}
        crumbs={[{ label: "Home", to: "/" }, { label: "Study in UK" }]}
      />

      <section className="study-layout container py-5">
        <div className="row g-4">
          <aside className="col-lg-3">
            <div className="study-sidebar card shadow-sm">
              <ul className="study-list list-unstyled">
                <li><Link to="/study/usa" className="study-link">Study in USA</Link></li>
                <li><Link to="/study/uk" className="study-link active">Study in UK</Link></li>
                <li><Link to="/study/australia" className="study-link">Study in Australia</Link></li>
                <li><Link to="/study/canada" className="study-link">Study in Canada</Link></li>
              </ul>
            </div>
          </aside>

          <main className="col-lg-9">
            <div className="study-content">
              <h2 className="study-section-title">Universities</h2>
              <div className="study-partners-grid mb-5">
                {UK_UNIVERSITIES.map((u) => (
                  <a
                    key={u.name}
                    href={u.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="study-partner-card"
                  >
                    {u.name}
                  </a>
                ))}
              </div>

              <div className="study-tab-card card p-4 shadow-sm">
                <ul className="nav nav-pills mb-4 justify-content-center" id="studyTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="career-tab" data-bs-toggle="pill" data-bs-target="#career" type="button" role="tab" aria-controls="career" aria-selected="true">
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
                  <div className="tab-pane fade show active" id="career" role="tabpanel" aria-labelledby="career-tab">
                    <h4>Career Opportunities</h4>
                    <p>
                      The course you choose shapes the roles you become eligible for.
                      A few common course-to-career pathways our students follow:
                    </p>
                    <ul>
                      <li>MSc Data Science → Data Analyst</li>
                      <li>MBA → Business Consultant</li>
                      <li>MSc Cyber Security → Security Analyst</li>
                      <li>MSc Civil Engineering → Structural Engineer</li>
                      <li>MSc Finance → Financial Analyst</li>
                      <li>MSc International Business → Market Research Analyst</li>
                      <li>MSc Computer Science → Software Engineer</li>
                      <li>MSc Project Management → Project Coordinator</li>
                      <li>MSc Public Health → Health Policy Analyst</li>
                      <li>MSc Marketing → Digital Marketing Manager</li>
                    </ul>
                  </div>

                  <div className="tab-pane fade" id="visa" role="tabpanel" aria-labelledby="visa-tab">
                    <h4>Visa & More</h4>
                    <p>
                      We prepare you for every step of the UK Student visa application.
                    </p>
                    <p className="mb-1"><strong>Core documents:</strong></p>
                    <ul>
                      <li>Valid passport</li>
                      <li>Confirmation of Acceptance for Studies (CAS) from your university</li>
                      <li>Proof of funds covering tuition and living costs, held for 28 consecutive days</li>
                      <li>IELTS UKVI (or approved equivalent) English test result</li>
                      <li>TB test certificate, if required for your country</li>
                      <li>ATAS certificate, for certain science/engineering postgraduate courses</li>
                    </ul>
                    <p className="mb-1 mt-3"><strong>Academic documents (originals):</strong></p>
                    <ul>
                      <li>10th & 12th grade mark sheets</li>
                      <li>Degree transcripts and certificates</li>
                      <li>Course completion certificate, if degree is still pending</li>
                    </ul>
                    <p className="mb-1 mt-3"><strong>Financial documents:</strong></p>
                    <ul>
                      <li>Sponsor's bank statements (28-day balance, unfrozen account)</li>
                      <li>Financial sponsorship letter/affidavit, if funds aren't your own</li>
                      <li>Scholarship or funding letter, if applicable</li>
                    </ul>
                    <p className="mt-3">
                      After approval you'll also need to complete biometric enrolment and, for most
                      applicants, an eVisa registration rather than a physical vignette.
                    </p>
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
                          <li>IELTS UKVI: INR 19,000 (approx.)</li>
                          <li>TOEFL: INR 18,000</li>
                          <li>PTE Academic: INR 18,900</li>
                          <li>Duolingo (where accepted): $59 – $70</li>
                        </ul>
                      </li>
                      <li>Score Reporting: Free for 5 universities, INR 250 per additional report</li>
                      <li>Scholarships & Grants: £1,000 – full tuition, depending on the university</li>
                      <li>
                        Visa Charges:
                        <ul>
                          <li>Student visa application fee: ~£490</li>
                          <li>Immigration Health Surcharge (IHS): ~£776 per year of study</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      <section className="mt-5 mb-5 container">
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

        <div className="text-center mt-4">
          <Link to="/contact" className="btn btn-cta">
            Contact Us for UK Admission
          </Link>
        </div>
      </section>
    </>
  );
}
