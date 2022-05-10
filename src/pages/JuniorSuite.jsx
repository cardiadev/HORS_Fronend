import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Menu from "../components/Menu";

import Footer from "../components/Footer";
import HeaderBanner from "../components/HeaderBanner";
import RoomGallery from "../components/RoomGallery";
import RoomSearch from "../components/RoomSearch";
import RoomInfo from "../components/RoomInfo";
import Amenities from "../components/Amenities";
import BookFormContainer from "../components/BookFormContainer";

const JuniorSuite = () => {
  return (
    <Box>
      <Menu />
      <HeaderBanner
        somePic={
          "https://res.cloudinary.com/cardiadev/image/upload/v1651991273/hors/rooms/room_junior_01_n3bbl0.jpg"
        }
        title={"Junior Suite"}
      />
      <RoomGallery />
      {/* <RoomSearch/> */}
      <Container>


      <Grid container item xs={12}
      spacing={3}
      mb={6}
      >
        <Grid item xs={12} md={6}>
          <RoomInfo />
          <Amenities />
        </Grid>
        <Grid item xs={12} md={6}>
          <BookFormContainer />
        </Grid>
      </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default JuniorSuite;
