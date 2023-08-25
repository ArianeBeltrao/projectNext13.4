import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

export default function CreditCardForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="saveCard" value="yes" />}
            label={
              <Typography sx={{ fontSize: "14px", color: "gray" }}>
                I agree to HB's Privacy Policy and Terms of Use.
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
          <LockOutlined
            sx={{ fontSize: "18px", color: "gray", marginRight: "12px" }}
          />
          <Typography sx={{ fontSize: "14px", color: "gray" }}>
            Your data is protected, everything will be private
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            color="success"
            sx={{
              mb: 3,
              width: "100%",
              height: "52px",
              boxShadow: "none",
              fontSize: "16px",
            }}
          >
            Confirm payment
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
