import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h5>All Right Reserved @ copyright</h5>
      <p className="footer-link">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/policy">Policy</Link>
      </p>
    </div>
  );
};
export default Footer;
