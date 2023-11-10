import React from "react";
import Layout from "../components/Layout";

export default function Contacts() {
  return (
    <Layout>
      <div className="contacts">
        <h3 className="title">Контакти</h3>
        <div className="contacts-wrapper">
          <div className="left">
            <div className="contact-section">
              <h4 className="subtitle">Графік роботи:</h4>
              <ul className="schedule-list">
                <li> ПН-ПТ 9:00-16:00</li> <li>СБ-НД вихідні</li>
              </ul>
            </div>
            <div className="contact-section">
              <h4 className="subtitle">Контакти:</h4>
              <ul className="manager-list">
                <li>
                  {" "}
                  Менеджер Тетяна:{" "}
                  <a href="tel:+380674560787"> + (380) 67 456 07 87 </a>
                </li>
                <li>
                  {" "}
                  Менеджер Анастасія:
                  <a href="tel:+380731571765"> + (380) 73 157 17 65</a>
                </li>
              </ul>
            </div>
            <div className="contact-section">
              <p className="subtitle">Email: </p>
              <a href="mailto:kuzh_iv@ukr.net">kuzh_iv@ukr.net</a>
            </div>
            <div className="contact-section">
              <p className="subtitle">Адреса:</p>
              <a
                className="link"
                href="https://www.google.com/maps?q=Київ, Дубровицька, 28, 3й поверх, Україна, 04114"
                rel="noopener noreferrer"
                target="_blank"
              >
                Київ, Дубровицька, 28, 3й поверх, Україна, 04114
              </a>
            </div>
          </div>
          <iframe
            className="frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.1767743243076!2d30.455207375897714!3d50.51227757160405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d27e757d0d57%3A0x5f2eb88179a7c746!2sDubrovytska%20St%2C%2028%2C%20Kyiv%2C%20Ukraine%2C%2004114!5e0!3m2!1sen!2sus!4v1699447132214!5m2!1sen!2sus"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
