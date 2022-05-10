import { Box, Grid, Typography } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import { Parallax } from "react-parallax";

const TextParallax = () => {
  return (
    <Box>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Parallax
            bgImage="https://res.cloudinary.com/cardiadev/image/upload/v1652108521/hors/general/parallax_01_khos36.jpg"
            bgImageAlt="the cat"
            strength={300}
            blur={0}

          >
            <Box
              style={{
                height: "200px",
                display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(15, 151, 170,.6)",
              }}
            >
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  sx={{
                    color: "#fff",
                    fontSize: "42px",
                    fontWeight: "bold",
                    padding: 20,
                    position: "absolute",
                    width: "100vw",
                    textAlign: "center",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    textTransform: "uppercase",
                  }}
                >
                  Your next adventure
                </Typography>
              </Grid>
            </Box>
          </Parallax>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TextParallax;
