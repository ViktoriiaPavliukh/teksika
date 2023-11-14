import React from "react";
import Layout from "../components/Layout";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Questions() {
  return (
    <Layout>
      <div className="questions">
        <h3 className="title">Відповіді на поширені запитання</h3>
        <ol className="questions-list">
          <li>
            <h4 className="subtitle-list">
              1. Де можна подивитися асортимент?
            </h4>
            <div className="text-list">
              <a
                className="link"
                href="https://www.google.com/maps?q=Київ, Дубровицька, 28, 3й поверх, Україна, 04114"
              >
                Склад в Києві за адресою Дубровицька, 28
              </a>
            </div>
            <div className="text-list">
              Режим роботи: Пн-Пт: з 9:00 до 16:00
            </div>
            <div className="text-list">
              <a
                className="link"
                href="https://teks-ika.prom.ua"
                rel="noopener noreferrer"
                target="_blank"
              >
                Сторінка компанії на{" "}
                <span className="link-bold">&nbsp; Prom.ua</span>
              </a>
              <a
                className="link"
                href=" https://www.instagram.com/teksika9/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="link-bold">
                  Інстаграм <span className="link-thin">компанії&nbsp;</span>
                </p>
                <InstagramIcon className="link" style={{ color: "#694173" }} />
              </a>
            </div>
          </li>
          <li>
            <h4 className="subtitle-list">
              2. Які є варіанти отримання замовлення?
            </h4>
            <div className="text-list">
              <p>
                - здійснити Самовивіз зі складу в місті Київ, за адресою
                Дубровицька, 28. (Режим роботи: Пн-Пт: з 9:00 до 16:00).
              </p>
              <p>
                - замовити Доставку (Доставка здійснюється через сервіс Нова
                Пошта. При оформленні замовлення, будь ласка, уважно прописуйте
                Ваші дані для доставки).
              </p>
            </div>
          </li>
          <li>
            <h4 className="subtitle-list">
              3. Як швидко я отримаю замовлення?
            </h4>
            <p className="text-list">
              Ми відправляємо Ваші замовлення протягом 1-2 робочих днів зі свого
              складу після підтвердження замовлення та оплати. <br />* Робота
              поштових служб не врахована у вказаний період.
            </p>
          </li>
          <li>
            <h4 className="subtitle-list">4. Які умови повернення товару?</h4>{" "}
            <p className="text-list">
              Матеріали, які відрізані під замовлення клієнта, поверненню не
              підлягають.
            </p>
          </li>
          <li>
            <h4 className="subtitle-list">
              5. У вас багато різновидів тканин?
            </h4>
            <p className="text-list">
              Так, у нас на складі представлений широкий асортимент трикотажних
              полотен і сіток.
            </p>
          </li>
          <li>
            <h4 className="subtitle-list">
              6. Чи можна у вас купувати в роздріб?
            </h4>
            <p>
              Ні, ми не маємо роздрібної торгівлі. Мінімальна партія кожної
              позиції наведена в профілі нашої компанії на{" "}
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
      </div>
    </Layout>
  );
}
