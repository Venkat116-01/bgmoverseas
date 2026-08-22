import {
  FaGlobeAmericas,
  FaGraduationCap,
  FaHandshake,
  FaBriefcase,
  FaChartLine,
  FaTrophy,
  FaBolt,
  FaCheckCircle,
} from "react-icons/fa";
import "./WhyBgmOverseas.css";
import PageHero from "../components/PageHero/PageHero";
import whyBgmBg from "../images/why-bgm-bg.jpg";

function WhyBgmOverseas() {
  return (
    <>
      <PageHero
        title="Why BGM Overseas"
        image={whyBgmBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Why BGM Overseas" }]}
      />

    <section className="why-bgm-page py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-primary mb-2 fw-semibold">— Why BGM Overseas?</p>
          <h1 className="display-5 fw-bold">
            Your Trusted Partner for Global Education, Visa, and Career Success
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: 760 }}>
            BGM Overseas Consultancy supports students, professionals, and families
            with end-to-end overseas solutions. From university placement and visa
            applications to scholarship planning and career coaching, we guide every
            step of your international journey.
          </p>
        </div>

        <div className="row align-items-center gy-4">
          <div className="col-lg-6">
            <div className="why-bgm-summary">
              <p>
                We combine deep country knowledge with a student-first process. Our
                team helps you choose the right destination, submit strong applications,
                secure visas, and prepare for life abroad.
              </p>

              <ul className="why-bgm-list list-unstyled">
                <li>
                  <strong>Personalized Study Plans:</strong> We match your profile to
                  top courses, universities, and scholarship opportunities.
                </li>
                <li>
                  <strong>Visa & Immigration Support:</strong> Expert document review,
                  interview coaching, and visa filing guidance.
                </li>
                <li>
                  <strong>Scholarship Assistance:</strong> We identify funding options
                  and support your scholarship applications.
                </li>
                <li>
                  <strong>Career & IT Solutions:</strong> Resume support, internship
                  guidance, and international staffing services for students and
                  professionals.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="why-bgm-cards row g-3">
              <div className="col-12">
                <div className="why-bgm-card">
                  <div className="why-bgm-icon"><FaGlobeAmericas /></div>
                  <h3>Global University Network</h3>
                  <p>
                    Strong partnerships with top institutions in the USA, UK, Canada,
                    Australia, Singapore, Germany, and Ireland.
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="why-bgm-card">
                  <div className="why-bgm-icon"><FaGraduationCap /></div>
                  <h3>End-to-End Admission Support</h3>
                  <p>
                    Application strategy, SOP writing, test preparation advice, and
                    offer management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gy-4 mt-5">
          <div className="col-md-6">
            <div className="why-bgm-card big-card">
              <div className="why-bgm-icon"><FaHandshake /></div>
              <h3>Experienced Counselors</h3>
              <p>
                Our advisors have helped hundreds of students navigate overseas
                admissions, visa approvals, and pre-departure preparation.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="why-bgm-card big-card">
              <div className="why-bgm-icon"><FaBriefcase /></div>
              <h3>Career-Driven Coaching</h3>
              <p>
                We support career trajectory planning, internships, work permits,
                and placement guidance abroad.
              </p>
            </div>
          </div>
        </div>

        <div className="row gy-4 mt-5">
          <div className="col-md-4">
            <div className="why-bgm-card">
              <div className="why-bgm-icon"><FaChartLine /></div>
              <h3>Success Rate</h3>
              <p>
                90%+ approval rate on student visas and university offers for our
                applicants.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="why-bgm-card">
              <div className="why-bgm-icon"><FaTrophy /></div>
              <h3>Scholarship Wins</h3>
              <p>
                Students receive tuition support and merit-based awards across
                Australia, Canada, the UK, and the USA.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="why-bgm-card">
              <div className="why-bgm-icon"><FaBolt /></div>
              <h3>Fast Support</h3>
              <p>
                Dedicated counselor access, quick application guidance, and fast
                query turnaround.
              </p>
            </div>
          </div>
        </div>

        <div className="process-section mt-5">
          <div className="text-center mb-4">
            <h2 className="display-6 fw-bold">Our Process</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: 760 }}>
              A clear, step-by-step roadmap that keeps your application on track.
            </p>
          </div>

          <div className="row gy-4">
            {[
              {
                title: "Profile Review",
                text: "We evaluate your education, scores, and goals before recommending the best path.",
              },
              {
                title: "University Selection",
                text: "We shortlist institutions and programs that match your profile and budget.",
              },
              {
                title: "Application Support",
                text: "We help with essays, SOPs, transcripts, and submission deadlines.",
              },
              {
                title: "Visa & Pre-Departure",
                text: "We prepare documents, train for interviews, and advise on travel readiness.",
              },
            ].map((step) => (
              <div className="col-md-6" key={step.title}>
                <div className="why-bgm-card">
                  <div className="why-bgm-icon"><FaCheckCircle /></div>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default WhyBgmOverseas;