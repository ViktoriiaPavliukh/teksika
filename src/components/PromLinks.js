import React from "react";
import { Link } from "gatsby";

const ExternalLinksList = () => {
  const externalLinks = [
    {
      label: "Мереживо",
      url: "https://teks-ika.prom.ua/ua/g26496025-merezhivo",
    },
    {
      label: "Фурнітура для білизни",
      url: "https://teks-ika.prom.ua/ua/g26566546-furnitura-dlya-bilizni",
    },
    {
      label: "Текстильна резинка",
      url: "https://teks-ika.prom.ua/ua/g26566545-rezinka-tekstilna",
    },
    {
      label: "Полотно",
      url: "https://teks-ika.prom.ua/ua/g27899839-polotno",
    },
    {
      label: "Поролон",
      url: "https://teks-ika.prom.ua/ua/g26566580-porolon",
    },
    {
      label: "Прикраси",
      url: "https://teks-ika.prom.ua/ua/g116760425-ukrasheniya",
    },
    {
      label: "Сітки",
      url: "https://teks-ika.prom.ua/ua/g83511928-sitki",
    },
    {
      label: "Чашки корсетні",
      url: "https://teks-ika.prom.ua/ua/g45261081-chashki-korsetni",
    },
  ];

  return (
    <ul className="list-links">
      {externalLinks.map((link, index) => (
        <li key={index} className="prom-btn">
          <Link
            to={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="prom-link"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ExternalLinksList;
