import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Menu from "../components/Menu";

import Footer from "../components/Footer";
import HeaderBanner from "../components/HeaderBanner";
import RoomSearch from "../components/RoomSearch";

import useFetch from "../hooks/useFetch";

const Rooms = (somePic, title) => {
  const { data, error } = useFetch("http://localhost:4000/api/v1/category");

  if (error) return console.log(error);

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
        <Box
          sx={{
            backgroundColor: "#f9f9f9",
            padding: { xs: "50px 0", md: "80px 0px" },
            width: "100%",
            height: "100%",
          }}
        >
          <Grid item xs={12} align="center">
            <Typography
              variant="h4"
              sx={{
                fontSize: "36px",
                fontWeight: "500",
                textTransform: "uppercase",
              }}
            >
              Discover Our Rooms
            </Typography>
          </Grid>

          {data !== null
            ? data.result.map((category) => (
                <RoomSearch
                  imageCategory={category.Photos[0].url}
                  key={category.id}
                  name={category.name}
                  description={category.description}
                  price={category.price}
                  capacity={`${category.capacity} Persons`}
                  category={category}
                />
              ))
            : null}

          <Footer />
        </Box>
      </Grid>
    </Box>
  );
};

export default Rooms;
