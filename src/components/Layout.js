import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/layout.css";
import LanguageProvider from "./LanguageProvider";

export default function Layout({ children }) {
  return (
    <LanguageProvider>
      {({ locale, switchLanguage }) => (
        <div>
          <Navbar />
          <div className="content">
            <div> {children}</div>
          </div>
          <Footer />
        </div>
      )}
    </LanguageProvider>
  );
}
