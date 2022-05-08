import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  styled,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import Logo from "../assets/logo_footer.svg";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

//useStyles
const TitleStyled = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  color: "#fff",
  textTransform: "uppercase",
  letterSpacing: "0.1rem",
  marginBottom: "1rem",
  position: "relative",
  "&::before": {
    position: "absolute",
    content: '""',
    width: "60px",
    height: "4px",
    bottom: "-8px",
    left: "0",
    background: "rgba(255,255,255,.12)",
    borderRadius: "2px",
  },
}));
const LinkStyled = styled(Link)(({ theme }) => ({
  color: "#fff",
  fontSize: "1.1rem",
  position: "relative",
  textDecoration: "none",
  "&:before": {
    content: '""',
    position: "absolute",
    display: "block",
    width: "100%",
    height: "2px",
    bottom: "-4px",
    left: 0,
    backgroundColor: "#0f97aa",
    transform: "scaleX(0)",
    transformOrigin: "top left",
    transition: "transform 0.25s ease",
  },
  "&:hover": {
    "&:before": {
      transform: "scaleX(1)",
    },
  },
}));

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#063c43",
        paddingTop: "80px",
        color: "#fff",
      }}
    >
      <Container fixed>
        <Grid container spacing={5}>
          <Grid container item>
            {/* First Column - Start */}
            <Grid container item spacing={2} xs={12} md={4} lg={4}>
              <Grid item xs={12}>
                <img src={Logo} alt="logo" style={{ marginBottom: "3rem" }} />
              </Grid>
              <Grid item xs={12}>
                <LinkStyled href="mailto:reservation@grandvelas.com">
                  reservation@grandvelas.com
                </LinkStyled>
              </Grid>
              <Grid item xs={12}>
                <LinkStyled
                  href="tel:840934425031"
                  underline="none"
                  sx={{ color: "#fff" }}
                >
                  +84 0934 425 031
                </LinkStyled>
              </Grid>
              <Grid item xs={12}>
                <LinkStyled
                  href="https://goo.gl/maps/4viuqZJgVRG1MvTv9"
                  target="_blank"
                  underline="none"
                  sx={{ color: "#fff" }}
                >
                  Paseo de los Cocoteros 98 Sur, 63735 Nuevo Vallarta, Nay.
                  México
                </LinkStyled>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            {/* First Column - End */}

            {/* Second Column - Start */}
            <Grid
              container
              item
              xs={12}
              md={4}
              lg={4}
              sx={{
                marginTop: { xs: "3rem", md: "0" },
              }}
            >
              <Grid container item spacing={2} xs={12}>
                <Grid item xs={12}>
                  <TitleStyled variant="h6">Useful Links</TitleStyled>
                </Grid>

                <Grid item xs={12} md={6}>
                  <LinkStyled href="#">About Us</LinkStyled>
                </Grid>
                <Grid item xs={12} md={6}>
                  <LinkStyled href="#">Contact</LinkStyled>
                </Grid>

                <Grid item xs={12} md={6}>
                  <LinkStyled href="#">Rooms</LinkStyled>
                </Grid>
                <Grid item xs={12} md={6}>
                  <LinkStyled href="#">Gallery</LinkStyled>
                </Grid>

                <Grid item xs={12} md={6}>
                  <LinkStyled href="#">Service</LinkStyled>
                </Grid>
                <Grid item xs={12} md={6}>
                  <LinkStyled href="#">Blog</LinkStyled>
                </Grid>
              </Grid>
            </Grid>
            {/* Second Column - End */}

            {/* Third Column - Start */}
            <Grid container item xs={12} md={4} lg={4}
            sx={{
              marginTop: { xs: "3rem", md: "0" },
            }}
              >
              <Grid container item spacing={2} xs={12}>
                <Grid item xs={12}>
                  <TitleStyled variant="h6">Stay in Touch</TitleStyled>
                </Grid>

                <Grid item xs={12} md={12}>
                  <TextField
                    fullWidth
                    id="email"
                    variant="outlined"
                    size="small"
                    placeholder="Enter your email"
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            sx={{
                              right: "-14px",
                              height: "40px",
                              borderTopRightRadius: "5px",
                              borderBottomRightRadius: "5px",
                              borderTopLeftRadius: "0px",
                              borderBottomLeftRadius: "0px",
                            }}
                          >
                            subscribe
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={10}>
                  <Box sx={{ display: "flex", justifyContent: "space-around",
                  marginTop: { xs: "3rem", md: "0" },
                 }}>
                    <FaFacebook size={30} />
                    <FaTwitter size={30} />
                    <FaInstagram size={30} />
                    <FaYoutube size={30} />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* Third Column - End */}
          </Grid>

          {/* Credits */}
          <Grid container item xs={12}>
            <Box
              sx={{
                borderTop: "1px solid #CACACA80",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "2rem 0",
                marginTop: "2rem",
              }}
            >
              <Typography variant="body2">
                <span>
                  © 2007 - {new Date().getFullYear()} | Grand Velas - Mexico |
                  Made with <FaHeart size={12} style={{ color: "red" }} /> by{" "}
                  <Link
                    href="https://github.com/cardiadev"
                    target="_blank"
                    style={{
                      color: "#fff",
                      underline: "none",
                      textDecoration: "none",
                      fontWeight: "600",
                    }}
                  >
                    Carlos Diaz
                  </Link>
                </span>
              </Typography>
            </Box>
          </Grid>
          {/* Credits */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
