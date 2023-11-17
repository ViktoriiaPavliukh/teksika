import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
// import { Link, FormattedMessage } from "react-intl";

export default function About() {
  return (
    <Layout>
      <div className="about">
        <Link to="/" className="nav-link index">
          На головну
        </Link>
        <h2 className="title">Про нас</h2>
        <p className="text">
          ТОВ «ТЕКС-ІКА» — компанія з постачання матеріалів і фурнітури для
          пошиття білизни, купальників, спортивного одягу та іншого.
        </p>
        <p className="text">
          Компанія заснована в 2008 році. За всю нашу діяльність ми відрізали
          нашим клієнтам мільйони погонних метрів тканин.
        </p>
        <p className="text">
          З 2012 року компанія є щорічним номінантом премії «Компанія року».
          Співробітники компанії ТЕКС-ІКА володіють професійними знаннями своєї
          справи, тому ми до кожного завдання підходимо відповідально та
          ефективно його виконуємо.
        </p>
        <p className="text">
          На складі представлено: мереживо, трикотажні полотна, чашки формовані,
          поролон, текстильна резинка, фурнітура для білизни.
        </p>
      </div>
    </Layout>
  );
}
