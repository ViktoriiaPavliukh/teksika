import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { FormattedMessage } from "react-intl";
import Media from "../components/Media";

export default function Home() {
  return (
    <Layout>
      <section className="intro">
        <div className="main">
          <h3 className="title-main">
            <FormattedMessage id="homepage.title" />
          </h3>
          <Link to="/catalog" className="btn-link">
            <FormattedMessage id="homepage.catalog" />
          </Link>
          <h2 className="slogan">
            <FormattedMessage id="homepage.slogan" />
          </h2>
        </div>
        <Media className="media" />
      </section>
    </Layout>
  );
}
