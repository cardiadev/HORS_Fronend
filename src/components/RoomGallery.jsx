import React, { useState } from "react";
import { Box, Container, Grid, styled } from "@mui/material";
// import { MdPersonOutline, MdAcUnit, MdBed } from "react-icons/md";

import FsLightbox from "fslightbox-react";



const color = "#0f97aa";


const RoomGallery = (props) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0,
  });

  function openLightboxOnSource(sourceIndex) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex: sourceIndex,
    });
  }

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: { xs: "50px 0", md: "80px 0px" },
        width: "100%",
        height: "100%",
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img
              src={props.gallery[0].url}
              width="100%"
              height="100%"
              alt=""
              onClick={() => openLightboxOnSource(0)}
              style={{
                cursor: "pointer",
                borderRadius: "15px",
              }}
            />
          </Grid>

          <Grid container item xs={12} md={6} spacing={3}>
            <Grid item xs={12} md={6}>
              <img
              src={props.gallery[1].url}
              width="100%"
                height="100%"
                alt=""
                onClick={() => openLightboxOnSource(1)}
                style={{
                  cursor: "pointer",
                  borderRadius: "15px",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <img
              src={props.gallery[2].url}
              width="100%"
                height="100%"
                alt=""
                onClick={() => openLightboxOnSource(2)}
                style={{
                  cursor: "pointer",
                  borderRadius: "15px",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <img
              src={props.gallery[3].url}
              width="100%"
                height="100%"
                alt=""
                onClick={() => openLightboxOnSource(3)}
                style={{
                  cursor: "pointer",
                  borderRadius: "15px",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <img
              src={props.gallery[4].url}
              width="100%"
                height="100%"
                alt=""
                onClick={() => openLightboxOnSource(4)}
                style={{
                  cursor: "pointer",
                  borderRadius: "15px",
                }}
              />
            </Grid>
          </Grid>

          <FsLightbox 
          toggler={lightboxController.toggler}
          sourceIndex={lightboxController.sourceIndex}
          sources={props.gallery.map((item) => item.url)}
          />
          
        </Grid>
      </Container>
    </Box>
  );
};

export default RoomGallery;
