import React from "react";
import Navbar from "./Navbar";
import bg from "../assets/images/bg-teksika.png";
import "../styles/layout.css";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">
        <div> {children}</div>
      </div>
      <footer>
        <p>Copyright</p>
      </footer>
    </div>
  );
}
