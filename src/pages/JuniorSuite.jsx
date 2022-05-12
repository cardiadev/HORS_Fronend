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

import { useLocation} from "react-router-dom";

const JuniorSuite = () => {

  const state = useLocation()
  console.log(state);
  return (
    <Box>
      <Menu />
      <HeaderBanner
        somePic=
          {state.state.Photos[0].url}
        
        title={state.state.name}
      />
      <RoomGallery gallery={state.state.Photos} />
      {/* <RoomSearch/> */}
      <Container>


      <Grid container item xs={12}
      spacing={3}
      mb={6}
      >
        <Grid item xs={12} md={6}>
          <RoomInfo description={state.state.description} />
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
