import React from "react";
import { FormattedMessage } from "react-intl";
import Layout from "../components/Layout";

export default function Questions() {
  return (
    <Layout>
      <section className="questions">
        <h3 className="title">
          {" "}
          <FormattedMessage id="navbar.questions" />
        </h3>
        <ol className="questions-list">
          <li>
            <h4 className="subtitle-list">
              <FormattedMessage id="question1" />
            </h4>
            <div className="text-list">
              <a
                className="link"
                href="https://www.google.com/maps?q=Київ, Дубровицька, 28, 3й поверх, Україна, 04114"
              >
                <FormattedMessage id="question1Option1" />
              </a>
            </div>
            <div className="text-list grey">
              &nbsp; &nbsp;
              <FormattedMessage id="question1Option1Details" />
            </div>
            <div className="text-list">
              <a
                className="link"
                href="https://teks-ika.prom.ua"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FormattedMessage id="question1Option2" />
                <span className="link-bold">&nbsp; Prom.ua</span>
              </a>
              <a
                className="link"
                href=" https://www.instagram.com/teksika9/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="link-thin">
                  - <span className="link-bold">Instagram</span>{" "}
                  <FormattedMessage id="question1Option3" />
                  &nbsp;
                </p>
              </a>
            </div>
          </li>
          <li>
            <h4 className="subtitle-list">
              <FormattedMessage id="question2" />
            </h4>
            <div className="text-list">
              <p>
                - <FormattedMessage id="question2Option1" />
                <span className="text-grey">
                  <FormattedMessage id="question2Option1Span" />
                </span>
              </p>
              <p>
                - <FormattedMessage id="question2Option2" />
                <span className="text-grey">
                  <FormattedMessage id="question2Option2Span" />
                </span>
              </p>
            </div>
          </li>
          <li>
            <h4 className="subtitle-list">
              <FormattedMessage id="question3" />
            </h4>
            <p className="text-list">
              <FormattedMessage id="question3Details1" />
              <span className="text-grey">
                {" "}
                &#8727;
                <FormattedMessage id="question3Details2" />
              </span>
            </p>
          </li>
          <li>
            <h4 className="subtitle-list">
              {" "}
              <FormattedMessage id="question4" />
            </h4>{" "}
            <p className="text-list">
              <FormattedMessage id="question4Details" />
            </p>
          </li>
          <li>
            <h4 className="subtitle-list">
              <FormattedMessage id="question6" />
            </h4>
            <p>
              <FormattedMessage id="question6Details" />
              <a
                className="link-transfer"
                rel="noopener noreferrer"
                target="_blank"
                href="https://teks-ika.prom.ua/ua/"
              >
                Prom.ua
              </a>
            </p>
          </li>
        </ol>
      </section>
    </Layout>
  );
}
