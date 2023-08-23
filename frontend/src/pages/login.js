import React from "react";
import Layout from "../components/layout";
const Login = () => {
  return (
    <Layout>
      <div className="form">
        <h2 className="mx-auto">LOGIN HERE</h2>
        <div className="register mx-auto">
          <div className="ms-4 me-3 mb-3 mt-4 ">
            <label htmlFor="exampleInputEmail1" className="form-label ">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className=" ms-4 me-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
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
export default Login;
