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
        maxWidth: "420px",
        height: "450px",
        flexGrow: 1,
        borderRadius: "26px",
        "@media screen and (max-width: 600px)": {
          width: "200px", // Adjust styles for smaller screens
        },
      }}
    >
      <CardCover>
        <video autoPlay loop muted poster={poster}>
          <source src={intro} type="video/mp4" />
        </video>
      </CardCover>
    </Card>
  );
}
