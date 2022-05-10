import React from "react";
import { Box, Container, Button } from "@mui/material";
import Review from "./payment/Review";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

const DocuPDF = () => {
  return (
    <Box>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{
          height: "50px",
        }}
      >
        Print Reservation Receipt
      </Button>
      <Document>
        <Container
          component="main"
          maxWidth="sm"
          sx={{
            margin: "2rem auto",
            border: "1px solid #ccc",
            borderRadius: "12px",
            padding: "2rem",
          }}
        >
          <Review />
        </Container>
      </Document>
    </Box>
  );
};

export default DocuPDF;
