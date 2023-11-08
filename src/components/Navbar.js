import React, { useState } from "react";
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

export default function Navbar() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

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
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar variant="dense">
          {isSmallScreen && (
            <IconButton
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
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
              ТЕКС-ІКА
            </Link>
          </Typography>
          {!isSmallScreen && (
            <div className="links">
              <Link
                to="/about"
                className="nav-link"
              >
                Про нас
              </Link>
              <Link
                to="/catalog"
                className="nav-link"
              >
                Каталог
              </Link>
              <Link
                to="/questions"
                className="nav-link"
              >
                Q&A
              </Link>
              <Link
                to="/contacts"
                className="nav-link"
              >
                Контакти
              </Link>
            </div>
          )}
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
              <Link to="/about">Про нас</Link>
            </ListItem>
            <ListItem>
              <Link to="/catalog">Каталог</Link>
            </ListItem>
            <ListItem>
              <Link to="/questions">Q&A</Link>
            </ListItem>
            <ListItem>
              <Link to="/contacts">Контакти</Link>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

// import React from "react";
// import { Link } from "gatsby";

// export default function Navbar() {
//   return (
//     <nav>
//       <h1 className="logo">ТЕКС-ІКА</h1>
//       <div className="links">
//         <Link to="/about">Про нас</Link>
//         <Link to="/catalog">Каталог</Link>
//         <Link to="/questions">Q&A</Link>
//         <Link to="/contacts">Контакти</Link>
//       </div>
//     </nav>
//   );
// }
