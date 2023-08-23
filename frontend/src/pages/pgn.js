import React from "react";
import Layout from "../components/layout";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <Layout>
      <div className="form">
        <h1 className="pgn-head1">404</h1>
        <h2 className="pgn-head2">OOP'S! Page Not Found</h2>
        <Link to="/" className="btn btn-dark mt-5">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
