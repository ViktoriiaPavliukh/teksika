import React from "react";
import Layout from "../components/Layout";
import PromLinks from "../components/PromLinks";
import { FormattedMessage } from "react-intl";

export default function Catalog() {
  return (
    <Layout>
      <div className="catalog">
        <h3 className="title">
          <FormattedMessage id="catalog" />
        </h3>
        <PromLinks />
      </div>
    </Layout>
  );
}
