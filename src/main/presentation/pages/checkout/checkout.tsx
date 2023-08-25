"use client";

import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  useMediaQuery,
} from "@mui/material";
import UserInfoForm from "./components/user-info-form/user-info-form";
import AddressForm from "./components/address-info-form/address-info-form";
import PaymentForm from "./components/payment-info-form/payment-info-form";
import { useTheme } from "@mui/material/styles";

const steps = [
  "Your information",
  "Shipping address",
  "Payment details"
];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <UserInfoForm />;
    case 1:
      return <AddressForm />;
    case 2:
      return <PaymentForm />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Container component="main" maxWidth={activeStep === 2 && !isMobile ? "md" : "sm"} sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 1, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Stepper
            activeStep={activeStep}
            sx={{
              pt: isMobile ? 0 : 3,
              pb: isMobile ? 2 : 5,
              pl: isMobile ? 0 : 0,
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel sx={{ pb: 1 }}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
