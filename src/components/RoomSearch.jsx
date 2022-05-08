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

const color = "#0f97aa";
const Example = styled(Box)(({ theme }) => ({}));

const RoomSearch = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: { xs: "50px 0", md: "80px 0px" },
        width: "100%",
        height: "100%",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} align="center">
            <Typography
              variant="h4"
              sx={{
                fontSize: "36px",
                fontWeight: "500",
                textTransform: "uppercase",
              }}
            >
              Discover Our Rooms
            </Typography>
          </Grid>

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
                        'url("https://res.cloudinary.com/cardiadev/image/upload/v1651991273/hors/rooms/room_junior_01_n3bbl0.jpg")',
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
                        Junior Suite
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ mt: "20px" }}>
                      <Stack direction="row" spacing={2}>
                        <Chip
                          icon={<MdPersonOutline size={24} color={color} />}
                          label="With Icon"
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Modi, qui sequi officia numquam nisi quia animi
                          amet deleniti laborum reiciendis at hic maiores?
                          Laborum perferendis debitis est natus pariatur
                          repellat.
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
                          href="rooms/juniorsuite"

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
                          $300
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
