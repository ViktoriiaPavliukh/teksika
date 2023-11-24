import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/layout.css";
import LanguageProvider from "./LanguageProvider";

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultLanguage
          titles {
            uk
            en
          }
        }
      }
    }
  `);

  const { defaultLanguage, titles } = data.site.siteMetadata;
  const title = titles[defaultLanguage];

  return (
    <LanguageProvider>
      {({ locale, switchLanguage }) => (
        <div>
          <Helmet>
            <title>{titles[locale]}</title>
          </Helmet>
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
