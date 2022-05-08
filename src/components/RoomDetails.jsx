import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Stack,
  styled,
  Button,
} from "@mui/material";
import { MdPersonOutline, MdAcUnit, MdBed } from "react-icons/md";

import Gallery from 'react-grid-gallery';


const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]


const color = "#0f97aa";
const Example = styled(Box)(({ theme }) => ({}));





const RoomDetails = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: { xs: "50px 0", md: "80px 0px" },
        width: "100%",
        height: "100%",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} align="center">
            <Gallery images={IMAGES}
            rowHeight={250}
            maxRows={2}
            enableImageSelection={false}
            backdropClosesModal={true}
            showCloseButton={true}
            showImageCount={true}
            />
          </Grid>
          <Grid item xs={12}>
              
            </Grid>


        </Grid>
      </Container>
    </Box>
  );
};

export default RoomDetails;
