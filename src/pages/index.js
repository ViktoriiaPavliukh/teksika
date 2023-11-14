import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

export default function Home() {
  return (
    <Layout>
      <section className="main">
        <h3 className="title-main">Текстильні матеріали та фурнітура</h3>
        <Link to="/catalog" className="btn-link">
          Каталог
        </Link>
        <h2 className="slogan">Надихаємо вашу креативність!</h2>
      </section>
    </Layout>
  );
}
