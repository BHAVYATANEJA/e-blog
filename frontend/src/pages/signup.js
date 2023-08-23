import React from "react";
import Layout from "../components/layout";

const Signup = () => {
  return (
    <Layout>
      <div className="form">
        <h2 className="mx-auto">REGISTER HERE</h2>
        <div className="register mx-auto">
          <div className="ms-4 me-3 mb-3 mt-4 ">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className=" ms-4 me-3 mt-4">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="ms-4 me-3 mt-4 ">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              aria-describedby="emailHelp"
            />
          </div>
          <div className=" ms-4 me-3 mt-4">
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile No."
            />
          </div>
          <button type="submit" className="btn btn-dark ms-4 mt-5 mb-5">
            Submit
          </button>
        </div>
      </div>
    </Layout>
  );
};
export default Signup;
