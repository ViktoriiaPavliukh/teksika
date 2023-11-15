import React from "react";
import { AppBar, Toolbar, Box, useMediaQuery } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import prom from "../assets/images/prom.jpeg";
import Typography from "@mui/material/Typography";

export default function Footer() {
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        paddingY: "1px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: isSmallScreen ? "10px" : "0",
          paddingY: isSmallScreen ? "20px" : "0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space=between",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Typography
            variant="body2"
            color="#32104a"
            align="left"
            // sx={{ flexGrow: 1 }}
          >
            Сайт ТОВ «ТЕКС-ІКА»
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1px",
            }}
          >
            <a
              className="link"
              href=" https://www.instagram.com/teksika9/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon
                sx={{
                  fontSize: 20,
                  cursor: "pointer",
                  color: "#694173",
                }}
              />
            </a>
            <a
              className="link"
              href="https://teks-ika.prom.ua"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={prom}
                alt="prom.ua"
                style={{
                  width: "60px",
                  height: "40px",
                  cursor: "pointer",
                  marginLeft: "5px",
                }}
              />
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <PhoneIcon
              sx={{
                display: "flex",
                fontSize: 20,
                cursor: "pointer",
                color: "#694173",
                alignContent: "center",
                alignSelf: "center",
              }}
            />
            <Box>
              <a className="link" href="tel:+380674560787">
                + (380) 67 456 07 87
              </a>
              <a className="link" href="tel:+380731571765">
                + (380) 73 157 17 65
              </a>
            </Box>
          </Box>
          <Box sx={{ textAlign: isSmallScreen ? "center" : "left" }}>
            {" "}
            <a
              className="link address"
              href="https://www.google.com/maps?q=Київ, Дубровицька, 28, 3й поверх, Україна, 04114"
              rel="noopener noreferrer"
              target="_blank"
            >
              Україна, Київ, 04114, <br /> Дубровицька, 28, 3й поверх
            </a>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
