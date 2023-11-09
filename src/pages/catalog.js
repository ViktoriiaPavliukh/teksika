import React from "react";
import Layout from "../components/Layout";
import PromLinks from "../components/PromLinks";

export default function Catalog() {
  return (
    <Layout>
      <div className="catalog">
        <h3 className="title">Каталог</h3>
        <PromLinks />
      </div>
    </Layout>
  );
}
