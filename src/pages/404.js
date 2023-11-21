// import React from "react";
// import { Link } from "gatsby";

// export default function NotFound() {
//   return (
//     <div>
//       <h2>404</h2>
//       <p>Вибачте, сторінку не знайдено</p>
//       <Link to="/" className="nav-link">
//         На головну
//       </Link>
//     </div>
//   );
// }
// pages/404.js
// pages/404.js
import React from "react";
import Layout from "../components/Layout";
import { FormattedMessage } from "react-intl";
import LanguageProvider from "../components/LanguageProvider"; // Adjust the import path

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
