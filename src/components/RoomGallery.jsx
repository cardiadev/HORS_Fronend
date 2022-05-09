import React, { useState } from "react";
import { Box, Container, Grid, styled } from "@mui/material";
// import { MdPersonOutline, MdAcUnit, MdBed } from "react-icons/md";

import FsLightbox from "fslightbox-react";

const IMAGE = [
  "https://res.cloudinary.com/cardiadev/image/upload/v1651991273/hors/rooms/room_junior_01_n3bbl0.jpg",
  "https://res.cloudinary.com/cardiadev/image/upload/v1652066695/hors/rooms/room_junior_02_gatotv.jpg",
  "https://res.cloudinary.com/cardiadev/image/upload/v1652066695/hors/rooms/room_junior_03_wpjy20.jpg",
  "https://res.cloudinary.com/cardiadev/image/upload/v1652066695/hors/rooms/room_junior_04_ponu9l.jpg",
  "https://res.cloudinary.com/cardiadev/image/upload/v1652066695/hors/rooms/room_junior_05_ykkhho.jpg",
  "https://res.cloudinary.com/cardiadev/image/upload/v1652066695/hors/rooms/room_junior_06_zcbnfp.jpg",
];

const color = "#0f97aa";
const Example = styled(Box)(({ theme }) => ({}));

const RoomGallery = () => {
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
              src={IMAGE[0]}
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
                src={IMAGE[1]}
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
                src={IMAGE[2]}
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
                src={IMAGE[3]}
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
                src={IMAGE[4]}
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
          sources={IMAGE} 
          />
          
        </Grid>
      </Container>
    </Box>
  );
};

export default RoomGallery;
