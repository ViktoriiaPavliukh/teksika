import React from "react";
import Layout from "../components/Layout";
import { FormattedMessage } from "react-intl";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="error">
        <h2 className="error-number">404</h2>
        <p>
          <FormattedMessage id="notFound.message" />
        </p>
        <p>
          <a href="/" className="nav-link">
            <FormattedMessage id="homeDirection" />
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
