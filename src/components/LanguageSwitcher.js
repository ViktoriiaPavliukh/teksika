import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IconButton, Box } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState("uk");

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "uk" ? "en" : "uk");
  };

  return (
    <Box sx={{ display: "flex", gap: "0" }}>
      <IconButton
        onClick={toggleLanguage}
        sx={{ padding: 0, color: "#32104a" }}
      >
        <LanguageIcon sx={{ padding: 0, color: "#32104a", }} />
      </IconButton>
      <Button
        onClick={toggleLanguage}
        sx={{ padding: 0, minWidth: "26px", color: "#32104a" }}
      >
        {currentLanguage === "uk" ? "УК" : "EN"}
      </Button>
    </Box>
  );
};

export default LanguageSwitcher;
