import React from "react";
import { Box, Grid } from "@mui/material";
import Menu from "../components/Menu";

import Footer from "../components/Footer";
import HeaderBanner from "../components/HeaderBanner";
import RoomSearch from "../components/RoomSearch";

const Rooms = (somePic, title) => {
  return (
    <Box>
      <Grid>
        <Menu />
        <HeaderBanner
          somePic={
            "https://res.cloudinary.com/cardiadev/image/upload/v1651986660/hors/general/header-banner_01_lqepva.jpg"
          }
          title={"Check Availability"}
        />
        <RoomSearch/>
        <Footer />
      </Grid>
    </Box>
  );
};

export default Rooms;
