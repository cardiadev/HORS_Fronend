import { React, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import ReactPlayer from "react-player/vimeo";

const HotelVideo = () => {
  const [video, setVideo] = useState(true);

  const handleVideo = () => {
    setVideo(!video);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgba(15, 151, 170, .06)",
          borderRadius: "15px",
          margin: "50px 30px",
          padding: "100px 20px",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={6} align="center">
            <Typography
              variant="h4"
              sx={{ fontWeight: "500", color: "#000000" }}
            >
              Beach Hotel More than a stay
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}></Grid>

          <Grid container sx={{ mt: "30px" }}>
            <Grid item xs={12} md={3}></Grid>
            <Grid item xs={12} md={6} align="center">
              <Typography
                variant="body1"
                sx={{ fontWeight: "400", color: "#000000" }}
              >
                We have a lot of effort to bring more quality time to you and
                the people you love. You will have a chance to enjoy meaningful
                moments together and that’s reason why we’re here.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}></Grid>
          </Grid>

          <Grid container sx={{ margin: "30px auto" }}>
            <Grid item xs={12} md={3}></Grid>
            <Grid item xs={12} md={6} align="center">
              <img
                src="https://res.cloudinary.com/cardiadev/image/upload/v1651897526/hors/general/signture_tth4ic.png"
                alt=""
              />
              <Typography
                variant="body1"
                sx={{ fontWeight: "500", color: "#000000" }}
              >
                CEO Carlos Diaz
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}></Grid>
          </Grid>

          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={6} align="center">
            <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
              <img
                src="https://res.cloudinary.com/cardiadev/image/upload/v1651897979/hors/general/overlay-video_amqx5q.jpg"
                alt=""
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  zIndex: "1",
                  cursor: "pointer",
                  display: video ? "block" : "none",
                }}
                onClick={handleVideo}
              />

              <ReactPlayer
                className="react-player"
                url="https://vimeo.com/512885700"
                width="100%"
                height="100%"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HotelVideo;
