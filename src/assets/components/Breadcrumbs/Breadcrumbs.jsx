import { Link, useLocation } from "react-router-dom";

const nameMap = {
  "why-bgm-overseas": "Why BGM Overseas",
  "our-team": "Our Team",
  "study": "Study",
  "study-abroad": "Study Abroad",
  "career-counselling": "Career Counselling",
  "visa-assistance": "Visa Assistance",
  // add overrides here
};

function titleFromSegment(seg) {
  if (!seg) return "";
  if (nameMap[seg]) return nameMap[seg];
  return seg
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const parts = pathname.split("/").filter(Boolean);

  return (
    <nav style={{ "--bs-breadcrumb-divider": " '>' " }} aria-label="breadcrumb" className="my-3">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>

        {parts.map((part, i) => {
          const to = "/" + parts.slice(0, i + 1).join("/");
          const isLast = i === parts.length - 1;
          const label = titleFromSegment(part);

          return isLast ? (
            <li key={to} className="breadcrumb-item active" aria-current="page">
              {label}
            </li>
          ) : (
            <li key={to} className="breadcrumb-item">
              <Link to={to}>{label}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}