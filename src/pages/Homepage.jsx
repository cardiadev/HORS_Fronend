import React from "react";
import { Box, Grid } from "@mui/material";
import Menu from "../components/Menu";
import { Banner } from "../components/Banner";
import { ReservationForm } from "../components/ReservationForm";
import BodyTop from "../components/BodyTop";
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
