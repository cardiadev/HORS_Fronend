import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const RoomInfo = (props) => {
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
            {props.description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RoomInfo;
