import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import intro from "../assets/images/intro.mp4";
import poster from "../assets/images/poster.jpg";

export default function Media() {
  return (
    <Card
      component="div"
      sx={{
        position: "relative",
        minWidth: "220px",
        manWidth: "430px",
        height: "450px",
        padding: "0",
        flexGrow: 1,
        borderRadius: "26px",
        overflow: "hidden",
        "@media screen and (max-width: 600px)": {
          width: "200px",
        },
      }}
    >
      <CardCover>
        <video
          autoPlay
          loop
          muted
          poster={poster}
          style={{ width: "100%", height: "100%" }}
        >
          <source src={intro} type="video/mp4" />
        </video>
      </CardCover>
      <div
        style={{
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          pointerEvents: "none",
        }}
      />
    </Card>
  );
}
