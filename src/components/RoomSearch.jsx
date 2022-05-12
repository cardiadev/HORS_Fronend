import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Stack,
  styled,
  Button,
} from "@mui/material";
import { MdPersonOutline, MdAcUnit, MdBed } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const color = "#0f97aa";



const RoomSearch = (props) => {

 const navigate = useNavigate()


  return (
    <Box    >
      <Container>
        <Grid container>
          {/* Room Search */}
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                margin: "80px auto 0",
                background: "#fff",
                borderRadius: "20px",
                height: { xs: "830px", md: "450px" },
              }}
            >
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "450px",
                      background:
                      `url(${props.imageCategory})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: { xs: "20px", md: "0px" },
                      borderBottomLeftRadius: { xs: "0px", md: "20px" },
                    }}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    position: "relative",
                  }}
                >
                  <Container fixed>
                    <Grid item xs={12} sx={{ mt: "40px" }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: "36px",
                          fontWeight: "600",
                        }}
                      >
                        {props.name}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ mt: "20px" }}>
                      <Stack direction="row" spacing={2}>
                        <Chip
                          icon={<MdPersonOutline size={24} color={color} />}
                          label={props.capacity}
                        />
                        <Chip
                          icon={<MdAcUnit size={24} color={color} />}
                          label="AC Unit"
                        />
                        <Chip
                          icon={<MdBed size={24} color={color} />}
                          label="2 Beds"
                        />
                      </Stack>
                      <Box
                        sx={{
                          mt: "30px",
                          borderTop: "1px solid #cacaca",
                        }}
                      />
                      <Grid
                        item
                        xs={12}
                        sx={{
                          mt: "30px",
                        }}
                      >
                        <Typography variant="body1" sx={{ color: "#666" }}>
                          {props.description}
                        </Typography>
                      </Grid>

                      <Box sx={{}}>


                        <Button
                          variant="contained"
                          color="primary"
                          sx={{
                            mt: { xs: "20px", md: "50px" },
                            width: { xs: "100%", md: "200px" },
                            height: "50px",
                            fontSize: "18px",
                          }}
                          onClick={() => navigate("/rooms/details",{state  : props.category})}
                        >
                          Book Now
                        </Button>




                      </Box>

                      <Box
                        sx={{
                          border: `2px solid ${color}`,
                          borderRadius: "5px",
                          padding: "5px 20px 10px",
                          width: "50px",
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "center",
                          position: "absolute",
                          top: "35px",
                          right: "35px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "#0f97aa",
                          }}
                        >
                          ${props.price}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "12px",
                            lineHeight: "1",
                            fontWeight: "600",
                            color: "#0f97aa",
                          }}
                        >
                          Per Night
                        </Typography>
                      </Box>
                    </Grid>
                  </Container>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* Room Search */}




        </Grid>
      </Container>
    </Box>
  );
};

export default RoomSearch;
