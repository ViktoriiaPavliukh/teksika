import React from "react";
import LanguageProvider from "./components/LanguageProvider";

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>{() => element}</LanguageProvider>
);
