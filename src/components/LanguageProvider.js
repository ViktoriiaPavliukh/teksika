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
  const [locale, setLocale] = useState("uk");

  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    const savedLocale = isBrowser ? localStorage.getItem("language") : null;

    setLocale(savedLocale || "uk");
  }, []);

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
