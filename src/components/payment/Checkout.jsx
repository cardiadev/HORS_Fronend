import * as React from "react";
import { useState } from "react";
import {
  Box,
  Grid,
  Container,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";

import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";


import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";










const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

// function to generate random unique id
function makeid(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };



  const printAsPdf = () => {
    const input = document.getElementById('RendePDF');
    html2canvas(input, {
      useCORS: true,
      allowTaint: true,
      scrollY: -window.scrollY,
      scale: 2,
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
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            <Box
            
            >
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} id="RendePDF">
                  <Typography variant="subtitle1">
                    Your order number is <b>#{makeid(7)}</b>. We have emailed
                    your order confirmation, and will send you an update when
                    your order has shipped.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
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







                </Grid>
              </Grid>
            </Box>
          ) : (
            <Box>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                {activeStep !== 0 && (
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={handleBack}
                    sx={{ mt: 3, ml: 1, height: "50px" }}
                  >
                    Back
                  </Button>
                )}

                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1, height: "50px" }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </Box>
          )}
        </>
      </Container>
    </>
  );
}
