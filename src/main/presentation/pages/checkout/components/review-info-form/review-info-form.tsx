"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

const products = [
  {
    name: "Product 1",
    desc: "A nice thing",
    price: "$9.99",
  },
];
const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];

export default function Review() {
  return (
    <React.Fragment>
      <Grid sx={{ backgroundColor: "#d7f9ff", borderRadius: "8px", ml: 3 }}>
        <Box
          sx={{
            alignItems: "center",
            padding: 2,
            mb: 2,
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: "32px" }}>Order summary</Typography>
          <Typography sx={{ fontSize: "14x" }}>
            Review your appication.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ ml:2,  }}>
            <Typography gutterBottom>John Smith</Typography>
            <Typography gutterBottom>{addresses.join(", ")}</Typography>
          </Grid>
        </Grid>

        <List disablePadding>
          {products.map((product) => (
            <ListItem key={product.name} sx={{ py: 1, px: 2 }}>
              <ListItemText primary={product.name} secondary={product.desc} />
              <Typography variant="body2">{product.price}</Typography>
            </ListItem>
          ))}
          <ListItem sx={{ py: 1, px: 2 }}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              $34.06
            </Typography>
          </ListItem>
        </List>
      </Grid>
    </React.Fragment>
  );
}
