import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const RoomInfo = () => {
  return (
    <Box
      sx={{
        mb: 5,
      }}
    >
      <Grid container item xs={12}>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h3"
            style={{
              fontSize: "2.5rem",
              fontWeight: "500",
            }}
          >
            Overview.
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            variant="body1"
            style={{
              color: "#666",
              fontWeight: "400",
              marginTop: "2rem",
            }}
          >
            The Junior Suite Room is a large and luxurious suite typically found
            in top-tier hotels. It often features a separate bedroom and living
            area, as well as a private bathroom. Some suites also include a
            kitchenette or dining area.
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: "#666",
              fontWeight: "400",
              marginTop: "2rem",
            }}
          >
            It features a separate bedroom and living area, as well as a private
            balcony with stunning views of the city. The suite also includes a
            marble bathroom with a Jacuzzi tub, and a fully–equipped kitchen.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RoomInfo;
