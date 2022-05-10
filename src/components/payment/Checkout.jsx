import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";




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
          {activeStep === steps.length  ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is <b>#{makeid(7)}</b>. We have emailed your
                order confirmation, and will send you an update when your order
                has shipped.
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                {activeStep !== 0 && (
                  <Button
                  fullWidth
                  variant="outlined"
                   onClick={handleBack} sx={{ mt: 3, ml: 1, height: "50px" }}>
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
            </>
          )}
        </>
      </Container>
    </>
  );
}
