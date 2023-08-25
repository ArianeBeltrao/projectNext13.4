import * as React from "react";
import Grid from "@mui/material/Grid";
import PaypalCheckoutButton from "./components/paypal/PaypalCheckoutButton";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import CreditCardButton from "./components/credit-card/CreditCardButton";
import PixButton from "./components/pix/PixButton";
import { useState } from "react";
import OrderPreview from "./components/order-preview";
import { Box, Button } from "@mui/material";
import { ArrowBackIosOutlined } from "@mui/icons-material";

export default function PaymentForm() {
  const [creditCardChosen, setCreditCardChosen] = useState(false);

  const handleCreditCardClick = () => {
    setCreditCardChosen(true);
  };
  const product = {
    description: "Action test",
    price: 1200,
  };

  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AT0GTG6PkJXuTKlr8a_X0PBeFvsz_DonadcsIT-cf-8_I0tcyBSv0Fh3DnuGzh6E8UYl0CUCteKRFO2l",
      }}
    >
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box>
              <Button startIcon={<ArrowBackIosOutlined />}>Back</Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CreditCardButton onClick={handleCreditCardClick} />
            {!creditCardChosen && <PaypalCheckoutButton product={product} />}

            {!creditCardChosen && <PixButton />}
          </Grid>
          <Grid xs={12} sm={6}>
            <OrderPreview />
          </Grid>
        </Grid>
      </React.Fragment>
    </PayPalScriptProvider>
  );
}
