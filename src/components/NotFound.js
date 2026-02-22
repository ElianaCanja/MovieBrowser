import Hero from "./Hero";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Hero text="404 - Page Not Found" />
      <div className="container text-center mt-4">
        <h3>Oops This page doesn’t exist.</h3>
        <Link to="/" className="btn btn-primary mt-3">
          Go Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
