import { Link } from "react-router-dom";
import PageHero from "../components/PageHero/PageHero";
import "./StudyPages.css";

function StudyAbroad() {
  return (
    <>
      <PageHero
        title="Study Abroad"
        crumbs={[{ label: "Home", to: "/" }, { label: "Study Abroad" }]}
      />

      <section className="study-layout container py-4">
        <div className="row g-4">
          <aside className="col-lg-4">
            <div className="study-sidebar card p-4 shadow-sm">
              <h3 className="mb-3">Study</h3>
              <ul className="study-list list-unstyled">
                <li><Link to="/study/usa" className="study-link">Study in USA</Link></li>
                <li><Link to="/study/uk" className="study-link">Study in UK</Link></li>
                <li><Link to="/study/australia" className="study-link">Study in Australia</Link></li>
                <li><Link to="/study/canada" className="study-link">Study in Canada</Link></li>
              </ul>
            </div>
          </aside>

          <main className="col-lg-8">
            <div className="card p-4 shadow-sm">
              <h2>Explore Destinations</h2>
              <p>Choose a destination to see programs, admission timelines, scholarships and visa guidance.</p>

              <div className="row g-3 mt-3">
                <div className="col-md-4"><Link to="/study/usa" className="btn btn-outline-primary w-100">Study in USA</Link></div>
                <div className="col-md-4"><Link to="/study/uk" className="btn btn-outline-primary w-100">Study in UK</Link></div>
                <div className="col-md-4"><Link to="/study/australia" className="btn btn-outline-primary w-100">Study in Australia</Link></div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
export default StudyAbroad;