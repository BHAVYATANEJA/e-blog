import React from "react";
import Layout from "../components/layout";

function Contact() {
  return (
    <Layout>
      <div className="container">
        <div className="row ">
          <div className="col-md-6 col-sm-6 form">
            <div className="contact-head mt-4">
              <h1>Let's talk about everything!</h1>
            </div>
            <div className="contact-img">
              <img
                className="con-img"
                alt="contact"
                src="https://preview.colorlib.com/theme/bootstrap/contact-form-16/images/undraw-contact.svg"
              ></img>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 form">
            <h2 className="mx-auto">CONTACT US</h2>
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
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className=" ms-4 me-3 mt-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className=" ms-4 me-3 mt-4">
                <textarea
                  placeholder="Enter the Message"
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark ms-4 mt-5 mb-5">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
