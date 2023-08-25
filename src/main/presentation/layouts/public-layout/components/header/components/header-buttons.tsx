"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function HeaderButtons() {
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Button
              variant="text"
              color="secondary"
              href="/"
              sx={{
                fontSize: "36px",
                fontFamily: "Handjet",
              }}
            >
              HB
            </Button>
          </Box>

          <Box>
            <Button
              sx={{
                paddingRight: "30px"
              }}
              variant="text"
              color="secondary"
              href="/signIn"
            >
              Sign in
            </Button>
            <Button
              variant="contained"
              color="success"
              href="/checkout"
            >
              Open your account
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
