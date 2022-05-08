import React from "react";
import { Box, Grid } from "@mui/material";
import CountersHome from "./CountersHome";
import HotelVideo from "./HotelVideo";

const BodyTop = () => {
  return (
    <Box
      sx={{ mt: "-80px", backgroundColor: "#f9f9f9", pt: "150px", pb: "90px" }}
    >
      <CountersHome />
      <HotelVideo />
    </Box>
  );
};

export default BodyTop;
