import { Link } from "react-router-dom";
import "./PageHero.css";

function PageHero({ title, image, crumbs = [] }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="container page-hero-inner">
        <h1 className="page-hero-title">{title}</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center">
            {crumbs.map((crumb, i) =>
              i === crumbs.length - 1 ? (
                <li key={crumb.label} className="breadcrumb-item active" aria-current="page">
                  {crumb.label}
                </li>
              ) : (
                <li key={crumb.label} className="breadcrumb-item">
                  <Link to={crumb.to}>{crumb.label}</Link>
                </li>
              )
            )}
          </ol>
        </nav>
      </div>
    </section>
  );
}

export default PageHero;
