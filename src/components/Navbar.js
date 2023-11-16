import React, { useState } from "react";
import { useLocation } from "@reach/router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "gatsby";
import useMediaQuery from "@mui/material/useMediaQuery";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const location = useLocation();

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "white", paddingY: "15px" }}
      >
        <Toolbar variant="dense">
          {isSmallScreen && (
            <IconButton
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ color: "#694173" }} />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to="/"
              className="logo"
              style={{
                color: "#32104a",
              }}
            >
              ТОВ "ТЕКС-ІКА"
            </Link>
          </Typography>
          {!isSmallScreen && (
            <div className="links">
              <Link
                to="/about"
                className={`nav-link ${
                  location.pathname === "/about/" ? "active" : ""
                }`}
              >
                Про нас
              </Link>
              <Link
                to="/catalog"
                className={`nav-link ${
                  location.pathname === "/catalog/" ? "active" : ""
                }`}
              >
                Каталог
              </Link>
              <Link
                to="/questions"
                className={`nav-link ${
                  location.pathname === "/questions/" ? "active" : ""
                }`}
              >
                FAQ
              </Link>
              <Link
                to="/contacts"
                className={`nav-link ${
                  location.pathname === "/contacts/" ? "active" : ""
                }`}
              >
                Контакти
              </Link>
            </div>
          )}
          <LanguageSwitcher />
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isSmallScreen && isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Головна
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/about"
                className={`nav-link ${
                  location.pathname === "/about/" ? "active" : ""
                }`}
              >
                Про нас
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/catalog"
                className={`nav-link ${
                  location.pathname === "/catalog/" ? "active" : ""
                }`}
              >
                Каталог
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/questions"
                className={`nav-link ${
                  location.pathname === "/questions/" ? "active" : ""
                }`}
              >
                FAQ
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/contacts"
                className={`nav-link ${
                  location.pathname === "/contacts/" ? "active" : ""
                }`}
              >
                Контакти
              </Link>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
