import * as React from "react";
import { Box, Grid, Button, Stack } from "@mui/material";
import Logo from "../assets/logo_header.svg";
import { styled } from "@mui/system";

const MenuLink = styled("a")({
  fontFamily: "Barlow, sans-serif",
  fontWeight: "500",
  color: "#666",
  textDecoration: "none",
  "&:hover": {
    color: "#0f97aa",
    borderBottom: "2px solid #0f97aa",
  },
});

const Menu = () => {
  return (
    <Box sx={{ height: "100px", borderBottom: "1px solid #CACACA80" }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={12}
        sx={{ height: "90%" }}
      >
        <Grid container item xs={12} sm={12} md={12} lg={9}>
          <Grid item xs={2} align="center">
            <img src={Logo} alt="logo" />
          </Grid>
          <Grid item xs={8} align="center" mt={1}>
            <MenuLink
              href="/"
              underline="hover"
              component="button"
              sx={{ padding: "0 15px" }}
              variant="body1"
            >
              Home
            </MenuLink>
            <MenuLink
              href="/"
              component="button"
              sx={{ padding: "0 15px" }}
              variant="body1"
            >
              Service
            </MenuLink>
            <MenuLink
              href="/"
              component="button"
              sx={{ padding: "0 15px" }}
              variant="body1"
            >
              Gallery
            </MenuLink>
            <MenuLink
              href="/"
              component="button"
              sx={{ padding: "0 15px" }}
              variant="body1"
            >
              Contact
            </MenuLink>
            <MenuLink
              href="/"
              component="button"
              sx={{ padding: "0 15px" }}
              variant="body1"
            >
              About Us
            </MenuLink>
            <MenuLink
              href="/"
              component="button"
              sx={{ padding: "0 15px" }}
              variant="body1"
            >
              About Us
            </MenuLink>
          </Grid>
          <Grid item xs={2} align="center">
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => {
                console.log("Clicked");
              }}
            >
              Reservation
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Menu;
