import React from "react";
import { Box, Container, Button } from "@mui/material";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import Review from "./payment/Review";


const doc = new jsPDF();
const Foo = <b>foo</b>;



const DocuPDF = () => {



const printAsPdf = () => {
  const input = document.getElementById('RendePDF');
  html2canvas(input, {
    useCORS: true,
    allowTaint: true,
    scrollY: -window.scrollY,
  }).then(canvas => {
    const image = canvas.toDataURL('image/jpeg', 1.0);
    const doc = new jsPDF('p', 'px', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    
    const widthRatio = pageWidth / canvas.width;
    const heightRatio = pageHeight / canvas.height;
    const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
    
    const canvasWidth = canvas.width * ratio;
    const canvasHeight = canvas.height * ratio;
    
    const marginX = (pageWidth - canvasWidth) / 2;
    const marginY = (pageHeight - canvasHeight) / 2;
    
    doc.addImage(image, 'JPEG', marginX, marginY, canvasWidth, canvasHeight);
    doc.output('dataurlnewwindow');   
  
    doc.output('dataurlnewwindow');
  });
};






  return (
    <Box>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{
          height: "50px",
        }}
        onClick={printAsPdf}
      >
        Print Reservation Receipt
      </Button>

        

      <Container
        sx={{
          margin: "2rem auto",
          border: "1px solid #ccc",
          borderRadius: "12px",
          padding: "2rem",
          width: "100%",
          height: "100%",
        }}
        id="RendePDF"

      >
          <Review />
      </Container>
    </Box>
  );
};

export default DocuPDF;