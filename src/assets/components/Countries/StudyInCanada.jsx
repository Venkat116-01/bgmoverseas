import { Link } from "react-router-dom";
import PageHero from "../PageHero/PageHero";
import heroImg from "../../images/image2.jpg";
import "../../pages/StudyPages.css";

const CANADA_UNIVERSITIES = [
  { name: "University of Toronto", url: "https://www.utoronto.ca" },
  { name: "University of British Columbia", url: "https://www.ubc.ca" },
  { name: "McGill University", url: "https://www.mcgill.ca" },
  { name: "University of Waterloo", url: "https://www.uwaterloo.ca" },
  { name: "Simon Fraser University", url: "https://www.sfu.ca" },
  { name: "York University", url: "https://www.yorku.ca" },
  { name: "University of Ottawa", url: "https://www.uottawa.ca" },
  { name: "Conestoga College", url: "https://www.conestogac.on.ca" },
  { name: "Seneca Polytechnic", url: "https://www.senecapolytechnic.ca" },
  { name: "Centennial College", url: "https://www.centennialcollege.ca" },
  { name: "Humber College", url: "https://www.humber.ca" },
  { name: "McMaster University", url: "https://www.mcmaster.ca" },
];

export default function StudyInCanada() {
  return (
    <>
      <PageHero
        title="Study in Canada"
        image={heroImg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Study in Canada" }]}
      />

      <section className="study-layout container py-5">
        <div className="row g-4">
          <aside className="col-lg-3">
            <div className="study-sidebar card shadow-sm">
              <ul className="study-list list-unstyled">
                <li><Link to="/study/usa" className="study-link">Study in USA</Link></li>
                <li><Link to="/study/uk" className="study-link">Study in UK</Link></li>
                <li><Link to="/study/australia" className="study-link">Study in Australia</Link></li>
                <li><Link to="/study/canada" className="study-link active">Study in Canada</Link></li>
              </ul>
            </div>
          </aside>

          <main className="col-lg-9">
            <div className="study-content">
              <h2 className="study-section-title">Universities</h2>
              <div className="study-partners-grid mb-5">
                {CANADA_UNIVERSITIES.map((u) => (
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
                      <li>MEng Computer Engineering → Software Developer</li>
                      <li>MBA → Business Consultant</li>
                      <li>MSc Data Science → Data Analyst</li>
                      <li>Postgrad Diploma, Supply Chain Management → Logistics Coordinator</li>
                      <li>MEng Civil Engineering → Structural Engineer</li>
                      <li>MHSc Health Informatics → Clinical Data Analyst</li>
                      <li>Postgrad Diploma, Digital Marketing → Marketing Analyst</li>
                      <li>MSc Cyber Security → Security Analyst</li>
                      <li>MN Nursing → Registered Nurse</li>
                      <li>MEng Mechanical Engineering → Manufacturing Engineer</li>
                    </ul>
                  </div>

                  <div className="tab-pane fade" id="visa" role="tabpanel" aria-labelledby="visa-tab">
                    <h4>Visa & More</h4>
                    <p>
                      We prepare you for every step of the Canadian study permit application.
                    </p>
                    <p className="mb-1"><strong>Core documents:</strong></p>
                    <ul>
                      <li>Valid passport</li>
                      <li>Letter of acceptance from a Designated Learning Institution (DLI)</li>
                      <li>Proof of funds (or a GIC + first-year tuition receipt under the SDS stream)</li>
                      <li>IELTS/CELPIP/TEF score meeting the university's requirement</li>
                      <li>Statement of purpose explaining your study plan</li>
                    </ul>
                    <p className="mb-1 mt-3"><strong>Academic documents (originals):</strong></p>
                    <ul>
                      <li>10th & 12th grade mark sheets</li>
                      <li>Degree transcripts and certificates</li>
                      <li>Work experience letters, if any</li>
                    </ul>
                    <p className="mb-1 mt-3"><strong>Financial documents:</strong></p>
                    <ul>
                      <li>GIC certificate (typically CAD 10,000-20,000) or sponsor's bank statements</li>
                      <li>Sponsor's income proof and, where used, education loan sanction letter</li>
                      <li>Scholarship or funding letter, if applicable</li>
                    </ul>
                    <p className="mt-3">
                      After submitting your application you'll also complete biometrics and,
                      if requested, a medical examination.
                    </p>
                  </div>

                  <div className="tab-pane fade" id="fees" role="tabpanel" aria-labelledby="fees-tab">
                    <h4>Fees & Finances</h4>
                    <ol className="ps-3">
                      <li>Application Fees: CAD 0 – CAD 150 per university</li>
                      <li>
                        Tuition Fees:
                        <ul>
                          <li>Undergraduate: CAD 15,000 – CAD 35,000 / year</li>
                          <li>Postgraduate: CAD 15,000 – CAD 30,000 / year</li>
                        </ul>
                      </li>
                      <li>Living Expenses: CAD 10,000 – CAD 15,000 / year</li>
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
                      <li>Scholarships & Grants: CAD 1,000 – 50% tuition, depending on the institution</li>
                      <li>
                        Visa Charges:
                        <ul>
                          <li>Study permit application fee: ~CAD 150</li>
                          <li>Biometrics fee: ~CAD 85</li>
                          <li>GIC (SDS stream): ~CAD 10,000 – 20,635</li>
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
        <h2 className="study-section-title mb-4">Why Study in Canada?</h2>

        <p className="mb-4">
          Canada is one of the world's leading destinations for international
          education, known for its globally recognized universities, high academic
          standards, multicultural environment, and excellent quality of life.
          Studying in Canada provides students with world-class education, practical
          learning opportunities, and outstanding career prospects in a welcoming and
          inclusive society.
        </p>

        <div className="study-info-card mb-5">
          <h3>World-Renowned Universities</h3>
          <p>
            Canada is home to some of the world's most prestigious universities,
            offering internationally recognized degrees with outstanding academic
            standards. Students benefit from experienced faculty, innovative teaching,
            and research-driven education.
          </p>
        </div>

        <div className="study-info-card mb-5">
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

        <div className="study-info-card mb-5">
          <h3>Excellent Career Opportunities</h3>
          <p>
            A Canadian qualification is highly valued by employers across the globe.
            Students gain valuable practical experience through co-op programs,
            internships, research opportunities, and industry partnerships, helping
            them develop in-demand skills and improve their career prospects in Canada
            and internationally.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Support for International Students</h3>
          <p>
            Canadian universities offer excellent support services for international
            students, including orientation programs, academic guidance, career
            counselling, language assistance, mental health support, and vibrant
            student communities to help students adapt successfully and thrive in
            Canada.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Innovative Learning Environment</h3>
          <p>
            Universities in Canada are equipped with world-class campuses, advanced
            laboratories, cutting-edge research centres, and modern digital learning
            environments. Students benefit from hands-on learning, innovation-driven
            education, and industry-relevant training that prepares them for successful
            careers worldwide.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Graduate Route & Work Opportunities</h3>
          <p>
            Canada offers excellent post-study work opportunities through the
            <strong> Post-Graduation Work Permit (PGWP)</strong> program. Eligible
            international graduates can gain valuable Canadian work experience after
            completing their studies, helping them build successful careers and
            providing pathways toward permanent residency for qualified applicants.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Scholarships & Financial Support</h3>
          <p>
            Many Canadian universities offer scholarships, bursaries, tuition fee
            waivers, and financial assistance for eligible international students.
            At <strong>BGM Overseas</strong>, we help students identify suitable
            scholarship opportunities and provide guidance throughout the application
            process to maximize their chances of receiving financial support.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Why Choose BGM Overseas?</h3>
          <p>
            Choosing the right education consultant is essential for a successful
            study abroad journey. At <strong>BGM Overseas</strong>, we provide
            personalized support and end-to-end assistance to make your Canadian
            admission process smooth and stress-free.
          </p>
          <ul className="mt-3">
            <li>Personalized career counselling</li>
            <li>University and course selection</li>
            <li>Application processing</li>
            <li>Canadian student visa guidance</li>
            <li>Scholarship assistance</li>
            <li>Education loan guidance</li>
            <li>Accommodation support</li>
            <li>Pre-departure briefing</li>
            <li>Post-arrival assistance</li>
          </ul>
        </div>

        <div className="study-cta-box p-4 rounded shadow-sm">
          <h3>Start Your Canadian Study Journey with BGM Overseas</h3>
          <p className="mb-0">
            Whether you're planning to pursue a Bachelor's, Master's, or Research
            degree in Canada, <strong>BGM Overseas</strong> is committed
            to helping you achieve your international education goals with expert
            guidance and dedicated support at every stage. Let us help you turn your
            dream of studying in Canada into reality.
          </p>
        </div>

        <div className="text-center mt-4">
          <Link to="/contact" className="btn btn-cta">
            Contact Us for Canada Admission
          </Link>
        </div>
      </section>

    </>
  );
}
