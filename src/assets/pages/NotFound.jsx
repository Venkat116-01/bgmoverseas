import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="container text-center py-5 my-5">
      <p className="text-primary mb-2 fw-semibold">— 404</p>
      <h1 className="display-4 fw-bold mb-3">Page Not Found</h1>
      <p className="text-muted mb-4">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
