import { Link } from "react-router-dom";
import PageHero from "../PageHero/PageHero";
import heroImg from "../../images/studyinusa1.png";
import "../../pages/StudyPages.css";

const USA_UNIVERSITIES = [
  { name: "Adelphi University", url: "https://www.adelphi.edu" },
  { name: "Anderson University", url: "https://www.anderson.edu" },
  { name: "Campbellsville University", url: "https://www.campbellsville.edu" },
  { name: "Cumberland University", url: "https://www.cumberland.edu" },
  { name: "Faulkner University", url: "https://www.faulkner.edu" },
  { name: "Golden Gate University", url: "https://www.ggu.edu" },
  { name: "Marshall University", url: "https://www.marshall.edu" },
  { name: "Murray State University", url: "https://www.murraystate.edu" },
  { name: "Purdue University Northwest", url: "https://www.pnw.edu" },
  { name: "St. Francis College", url: "https://www.sfc.edu" },
  { name: "University of the Cumberlands", url: "https://www.ucumberlands.edu" },
  { name: "University of Louisville", url: "https://www.louisville.edu" },
  { name: "Wayland Baptist University", url: "https://www.wbu.edu" },
  { name: "Baptist University of Florida", url: "https://www.baptistuniversity.edu" },
  { name: "Wittenberg University", url: "https://www.wittenberg.edu" },
  { name: "Central Michigan University", url: "https://www.cmich.edu" },
];

export default function StudyInUSA() {
  return (
    <>
      <PageHero
        title="Study in USA"
        image={heroImg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Study in USA" }]}
      />

      <section className="study-layout container py-5">
        <div className="row g-4">
          <aside className="col-lg-3">
            <div className="study-sidebar card shadow-sm">
              <ul className="study-list list-unstyled">
                <li><Link to="/study/usa" className="study-link active">Study in USA</Link></li>
                <li><Link to="/study/uk" className="study-link">Study in UK</Link></li>
                <li><Link to="/study/australia" className="study-link">Study in Australia</Link></li>
                <li><Link to="/study/canada" className="study-link">Study in Canada</Link></li>
              </ul>
            </div>
          </aside>

          <main className="col-lg-9">
            <div className="study-content">
              <h2 className="study-section-title">Universities</h2>
              <div className="study-partners-grid mb-5">
                {USA_UNIVERSITIES.map((u) => (
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
                      <li>MS Aerospace Engineering → Aircraft Engineer</li>
                      <li>MBA → Business Consultant</li>
                      <li>MS Computer Science → Software Developer</li>
                      <li>MS Civil Engineering → Geotechnical Engineer</li>
                      <li>MS Chemical Engineering → Process/Nuclear Engineer</li>
                      <li>MS Data Science → Data Analyst</li>
                      <li>MS Electrical Engineering → Controls Engineer</li>
                      <li>MS Health Informatics → Clinical Data Analyst</li>
                      <li>MS Pharmacology → Drug Safety Specialist</li>
                      <li>MS Mechanical Engineering → Manufacturing Engineer</li>
                    </ul>
                  </div>

                  <div className="tab-pane fade" id="visa" role="tabpanel" aria-labelledby="visa-tab">
                    <h4>Visa & More</h4>
                    <p>
                      We prepare you for both stages of the F-1 student visa process —
                      the Offsite Facilitation Centre (OFC) appointment and the
                      Consulate/VAC interview.
                    </p>
                    <h5 className="mt-3">At the OFC</h5>
                    <ul>
                      <li>Valid passport</li>
                      <li>DS-160 confirmation page</li>
                      <li>Visa appointment confirmation page</li>
                      <li>SEVIS fee (I-901) payment receipt</li>
                      <li>I-20 form</li>
                      <li>Visa fee payment receipt</li>
                    </ul>
                    <h5 className="mt-3">At the VAC / Consulate interview</h5>
                    <p className="mb-1"><strong>University documents (originals):</strong></p>
                    <ul>
                      <li>Signed original I-20 form</li>
                      <li>Admission offer letter</li>
                      <li>Scholarship / funding letter, if any</li>
                      <li>I-20s from any other universities you applied to</li>
                    </ul>
                    <p className="mb-1 mt-3"><strong>Academic documents (originals):</strong></p>
                    <ul>
                      <li>10th & 12th grade mark sheets</li>
                      <li>Degree transcripts and provisional/original degree certificate</li>
                      <li>IELTS/TOEFL and GRE/GMAT score sheets</li>
                      <li>Work experience letters, if any</li>
                    </ul>
                    <p className="mb-1 mt-3"><strong>Financial documents:</strong></p>
                    <ul>
                      <li>Sponsor's bank balance certificate and 6-12 month transaction history</li>
                      <li>Fixed deposits and savings certificates</li>
                      <li>Property documents and tax receipts, if used as funding proof</li>
                      <li>Latest salary slips (if sponsor is employed) and last 2-3 years' IT returns</li>
                      <li>Affidavit of support from the sponsor</li>
                    </ul>
                  </div>

                  <div className="tab-pane fade" id="fees" role="tabpanel" aria-labelledby="fees-tab">
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
                          <li>GRE: INR 22,550 (plus ~$228 US application fee)</li>
                          <li>GMAT: $324</li>
                        </ul>
                      </li>
                      <li>
                        Score Reporting Charges:
                        <ul>
                          <li>IELTS: Free for 5 universities, then INR 250 each</li>
                          <li>TOEFL: ~$25 per additional report</li>
                          <li>PTE & Duolingo: Free, unlimited</li>
                          <li>GRE: ~$40 (free for 5 before the exam)</li>
                          <li>GMAT: ~$35</li>
                        </ul>
                      </li>
                      <li>Scholarships & Grants: $2,000 up to full tuition, depending on the university</li>
                      <li>Miscellaneous: WES credential evaluation ~$118–$186</li>
                      <li>
                        Visa Charges:
                        <ul>
                          <li>Visa application (MRV) fee: ~$185</li>
                          <li>SEVIS I-901 fee: ~$350</li>
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
        <h2 className="study-section-title mb-4">Why Study in the USA?</h2>

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

        <div className="study-info-card mb-5">
          <h3>World-Class Universities</h3>
          <p>
            The USA is home to many of the world's highest-ranked universities,
            offering globally recognized degrees and outstanding academic excellence.
            Students benefit from advanced research facilities, experienced faculty,
            and a diverse learning environment that prepares them for success in today's
            competitive world.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Wide Range of Courses</h3>
          <p>
            American universities offer thousands of undergraduate, postgraduate,
            and research programs across Engineering, Computer Science, Business,
            Healthcare, Artificial Intelligence, Finance, Hospitality, and many
            other disciplines. Students have the flexibility to choose programs
            that match their interests and career aspirations.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Excellent Career Opportunities</h3>
          <p>
            Studying in the USA opens doors to exciting career prospects with leading
            multinational companies. Students gain valuable practical experience
            through internships, research projects, and industry collaborations,
            helping them develop skills that employers value worldwide.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Strong Support for International Students</h3>
          <p>
            US universities provide dedicated support services to help international
            students settle into campus life. Orientation programs, academic advising,
            career services, language support, and student organizations ensure a
            smooth and enjoyable learning experience.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Innovation & Advanced Technology</h3>
          <p>
            The United States is a global leader in innovation and technology.
            Universities are equipped with modern laboratories, smart classrooms,
            research centers, and cutting-edge facilities, allowing students to
            learn using the latest technologies and industry practices.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Practical Training Opportunities (CPT & OPT)</h3>
          <p>
            International students may be eligible for Curricular Practical Training
            (CPT) and Optional Practical Training (OPT), which provide valuable work
            experience related to their field of study. These opportunities help
            students gain real-world exposure while enhancing their employability.
          </p>
        </div>

        <div className="study-info-card mb-5">
          <h3>Scholarships & Financial Assistance</h3>
          <p>
            Many universities in the USA offer scholarships, tuition discounts,
            assistantships, and financial aid for eligible international students.
            BGM Overseas assists students in identifying scholarship opportunities
            and completing successful applications.
          </p>
        </div>

        <div className="study-info-card mb-5">
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

        <div className="study-cta-box p-4 rounded shadow-sm">
          <h3>Begin Your Study Abroad Journey with BGM Overseas</h3>
          <p className="mb-0">
            Whether you're planning to pursue a Bachelor's, Master's, or Research
            degree in the United States, <strong>BGM Overseas</strong> is committed
            to helping you achieve your international education goals with expert
            guidance and dedicated support every step of the way. Let us help you
            turn your dream of studying in the USA into reality.
          </p>
        </div>

        <div className="text-center mt-4">
          <Link to="/contact" className="btn btn-cta">
            Contact Us for USA Admission
          </Link>
        </div>
      </section>
    </>
  );
}
