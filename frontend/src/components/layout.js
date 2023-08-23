import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
