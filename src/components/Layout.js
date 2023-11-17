import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/layout.css";
import { FormattedMessage } from "react-intl";
import LanguageProvider from "./LanguageProvider";

export default function Layout({ children }) {
  return (
    <LanguageProvider>{({ locale, switchLanguage }) => (
      <div>
        <Navbar />
        <div className="content">
          <div> {children}</div>
          <div>
            <FormattedMessage
              id="example.message"
              defaultMessage="This is an example message."
            />
          </div>
        </div>
        <Footer />
      </div> )}
    </LanguageProvider>
  );
}
