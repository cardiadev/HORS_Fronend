import React from "react";
import { Box, Grid } from "@mui/material";
import CountersHome from "./CountersHome";
import HotelVideo from "./HotelVideo";

const BodyTop = () => {
  return (
    <Box
      sx={{ backgroundColor: "#f9f9f9" ,
      marginTop: {xs: "0px", md: "-80px"},
      padding: {xs: "0px", md: "110px 0px"},
    }}
    >      <CountersHome />
      <HotelVideo />
    </Box>
  );
};

export default BodyTop;
