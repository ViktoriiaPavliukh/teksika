import React from "react";
import Layout from "../components/Layout";
import { FormattedMessage } from "react-intl";

export default function About() {
  return (
    <Layout>
      <section className="about">
        <h2 className="title">
          <FormattedMessage id="navbar.aboutUs" />
        </h2>
        <p className="text">
          <FormattedMessage id="companyDescription" />
        </p>
        <p className="text">
          <FormattedMessage id="foundedIn" />
        </p>
        <p className="text">
          <FormattedMessage id="annualNominee" />
        </p>
        <p className="text">
          <FormattedMessage id="productsOnStock" />
        </p>
      </section>
    </Layout>
  );
}
