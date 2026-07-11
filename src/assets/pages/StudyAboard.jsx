import { Link } from "react-router-dom";
import "./PagesHero.css";
import "./StudyPages.css";

function StudyAbroad() {
  return (
    <>
      <section className="page-hero">
        <div className="container justify-content-center text-center py-4">
          <h1 className="page-hero-title">Study Abroad</h1>
          <nav aria-label="breadcrumb" style={{ ['--bs-breadcrumb-divider']: " '>' " }}>
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Study Abroad</li>
            </ol>
          </nav>
        </div>
      </section>

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
                <li><Link to="/study/singapore" className="study-link">Study in Singapore</Link></li>
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