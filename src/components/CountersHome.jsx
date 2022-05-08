import React from "react";
import { Grid, Typography } from "@mui/material";
import CountUp from "react-countup";

const CountersHome = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md>
        </Grid>
      <Grid
        item
        xs={12}
        md={3}
        align="center"
        sx={{ margin: { xs: "25px 0", md: "0px" } }}
      >
        <Typography variant="h3" sx={{ fontWeight: "500", color: "#0f97aa" }}>
          <CountUp end={20} />+
        </Typography>
        <Typography
          variant="h7"
          sx={{
            fontWeight: "600",
            color: "#666",
            textTransform: "uppercase",
            lineHeight: "2.5",
          }}
        >
          Various Service
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        align="center"
        sx={{ margin: { xs: "25px 0", md: "0px" } }}
      >
        <Typography variant="h3" sx={{ fontWeight: "500", color: "#0f97aa" }}>
          <CountUp end={150} />+
        </Typography>
        <Typography
          variant="h7"
          sx={{
            fontWeight: "600",
            color: "#666",
            textTransform: "uppercase",
            lineHeight: "2.5",
          }}
        >
          Experiences
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        align="center"
        sx={{ margin: { xs: "25px 0", md: "0px" } }}
      >
        <Typography variant="h3" sx={{ fontWeight: "500", color: "#0f97aa" }}>
          <CountUp end={5} />+
        </Typography>
        <Typography
          variant="h7"
          sx={{
            fontWeight: "600",
            color: "#666",
            textTransform: "uppercase",
            lineHeight: "2.5",
          }}
        >
          Different Rooms
        </Typography>
      </Grid>
      <Grid item xs={12} md>
        </Grid>
    </Grid>
  );
};

export default CountersHome;
