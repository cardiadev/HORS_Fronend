import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import {
  FaTv,
  FaWifi,
  FaKey,
  FaCoffee,
  FaBoxTissue,
  FaBath,
  FaParking,
  FaConciergeBell,
} from "react-icons/fa";

const Amenities = () => {
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
              marginBottom: "1.5rem",
            }}
          >
            Amenities.
          </Typography>
        </Grid>

        <Grid
          item
          xs={6}
          md={3}
          mt={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <FaTv size={36} />
          <Typography variant="body1" style={{ marginTop: "20px" }}>
            TV
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          mt={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <FaWifi size={36} />
          <Typography variant="body1" style={{ marginTop: "20px" }}>
            WiFi
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          mt={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <FaKey size={36} />
          <Typography variant="body1" style={{ marginTop: "20px" }}>
            Door Key
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          mt={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <FaCoffee size={36} />
          <Typography variant="body1" style={{ marginTop: "20px" }}>
            Coffe Maker
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          mt={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <FaBoxTissue size={36} />
          <Typography variant="body1" style={{ marginTop: "20px" }}>
            Tissue Box
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          mt={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <FaBath size={36} />
          <Typography variant="body1" style={{ marginTop: "20px" }}>
            Bathtub
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          mt={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <FaParking size={36} />
          <Typography variant="body1" style={{ marginTop: "20px" }}>
            Parking
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          mt={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <FaConciergeBell size={36} />
          <Typography variant="body1" style={{ marginTop: "20px" }}>
            Concierge
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Amenities;
