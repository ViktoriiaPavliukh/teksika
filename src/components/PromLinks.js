import React from "react";
import { FormattedMessage } from "react-intl";

const ExternalLinksList = () => {
  const externalLinks = [
    {
      label: <FormattedMessage id="lace" />,
      url: "https://teks-ika.prom.ua/ua/g26496025-merezhivo",
    },
    {
      label: <FormattedMessage id="lingerieAccessories" />,
      url: "https://teks-ika.prom.ua/ua/g26566546-furnitura-dlya-bilizni",
    },
    {
      label: <FormattedMessage id="textileElastic" />,
      url: "https://teks-ika.prom.ua/ua/g26566545-rezinka-tekstilna",
    },
    {
      label: <FormattedMessage id="fabric" />,
      url: "https://teks-ika.prom.ua/ua/g27899839-polotno",
    },
    {
      label: <FormattedMessage id="foam" />,
      url: "https://teks-ika.prom.ua/ua/g26566580-porolon",
    },
    {
      label: <FormattedMessage id="decorations" />,
      url: "https://teks-ika.prom.ua/ua/g116760425-ukrasheniya",
    },
    {
      label: <FormattedMessage id="nets" />,
      url: "https://teks-ika.prom.ua/ua/g83511928-sitki",
    },
    {
      label: <FormattedMessage id="corsetCups" />,
      url: "https://teks-ika.prom.ua/ua/g45261081-chashki-korsetni",
    },
  ];

  return (
    <ul className="list-links">
      {externalLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="prom-link"
          >
            <p className="prom-btn">{link.label}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ExternalLinksList;
