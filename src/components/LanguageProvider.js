import React, { useState, useEffect, createContext, useContext } from "react";
import { IntlProvider } from "react-intl";
import ukLocale from "../locales/uk.json";
import enLocale from "../locales/en.json";

const locales = {
  uk: ukLocale,
  en: enLocale,
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const LanguageProvider = ({ children }) => {
  // Check if window is defined (it's undefined during SSR)
  const isBrowser = typeof window !== "undefined";

  // Use localStorage only in the browser
  const savedLocale = isBrowser ? localStorage.getItem("language") : null;

  const [locale, setLocale] = useState(savedLocale || "uk");

  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem("language", locale);
    }
  }, [locale]);

  const switchLanguage = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, switchLanguage }}>
      <IntlProvider locale={locale} messages={locales[locale]}>
        {children({ locale, switchLanguage })}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

// // src/components/LanguageProvider.js
// import React, { useState, useEffect, createContext, useContext } from "react";
// import { IntlProvider } from "react-intl";
// import ukLocale from "../locales/uk.json"; // Import your Ukrainian translations
// import enLocale from "../locales/en.json"; // Import your English translations

// const locales = {
//   uk: ukLocale,
//   en: enLocale,
// };

// const LanguageProvider = ({ children }) => {
//   const [locale, setLocale] = useState("uk");

//   useEffect(() => {
//     // Set initial locale based on user preference or other logic
//     // For simplicity, let's default to Ukrainian
//     // You might want to enhance this logic based on user preferences or browser language detection
//     setLocale("uk");
//   }, []);

//   const switchLanguage = (newLocale) => {
//     setLocale(newLocale);
//   };

//   return (
//     <IntlProvider locale={locale} messages={locales[locale]}>
//       {children({ locale, switchLanguage })}
//     </IntlProvider>
//   );
// };

// export default LanguageProvider;
