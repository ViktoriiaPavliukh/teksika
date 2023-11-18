// src/components/LanguageSwitcher.js
import React from "react";
import Button from "@mui/material/Button";
import { IconButton, Box } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useLanguage } from "./LanguageProvider";

const LanguageSwitcher = () => {
  const { locale, switchLanguage } = useLanguage();

  const toggleLanguage = () => {
     const newLanguage = locale === "uk" ? "en" : "uk";
     switchLanguage(newLanguage);
     localStorage.setItem("language", newLanguage);
  };

  return (
    <Box sx={{ display: "flex", gap: "0" }}>
      <IconButton
        onClick={toggleLanguage}
        sx={{ padding: 0, color: "#32104a" }}
      >
        <LanguageIcon sx={{ padding: 0, color: "#32104a" }} />
      </IconButton>
      <Button
        onClick={toggleLanguage}
        sx={{ padding: 0, minWidth: "26px", color: "#32104a" }}
      >
        {locale === "uk" ? "УК" : "EN"}
      </Button>
    </Box>
  );
};

export default LanguageSwitcher;
