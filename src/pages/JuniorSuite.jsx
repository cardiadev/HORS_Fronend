import React from "react";
import { Box, Grid } from "@mui/material";
import Menu from "../components/Menu";

import Footer from "../components/Footer";
import HeaderBanner from "../components/HeaderBanner";
import RoomDetails from "../components/RoomDetails";

const JuniorSuite = () => {
  return (
    <Box>
      <Grid>
        <Menu />
        <HeaderBanner
          somePic={
            "https://res.cloudinary.com/cardiadev/image/upload/v1651991273/hors/rooms/room_junior_01_n3bbl0.jpg"
          }
          title={"Junior Suite"}
        />
        <RoomDetails />
        {/* <RoomSearch/> */}
        <Footer />
      </Grid>
    </Box>
  );
};

export default JuniorSuite;
