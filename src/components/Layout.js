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
          descriptions {
            uk
            en
          }
        }
      }
    }
  `);

  const { titles } = data.site.siteMetadata;

  return (
    <LanguageProvider>
      {({ locale, switchLanguage }) => (
        <div>
          <Helmet>
            {console.log(data.site.siteMetadata.descriptions[locale])}
            <meta charSet="utf-8" />
            <meta
              name="description"
              content={data.site.siteMetadata.descriptions[locale]}
            />
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
