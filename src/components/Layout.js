import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"
import "../styles/layout.css";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">
        <div> {children}</div>
      </div>
      <Footer />
    </div>
  );
}
