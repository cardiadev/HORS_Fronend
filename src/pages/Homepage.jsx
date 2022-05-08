import React from "react";
import { Banner } from "../components/Banner";
import Menu from "../components/Menu";
import { ReservationForm } from "../components/ReservationForm";

// eslint-disable-next-line
import "swiper/css/bundle";
import "../components/styles.css";
import BodyTop from "../components/BodyTop";
import { Box, Grid } from "@mui/material";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <Box>
      <Grid>


        <Menu />
        <Banner />
        <ReservationForm />
        <Grid mt={10}>
          <BodyTop />
        </Grid>
        <Footer/>



      </Grid>
    </Box>
  );
};

export default Homepage;
