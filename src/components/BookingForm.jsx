import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  Popover,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

// Date Picker
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const BookingForm = () => {

/* Setting the state of the date picker. */
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Popover MUI
  const [anchorEl, setAnchorEl] = useState(null);
/**
 * It sets the anchor element to the current target.
 */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // Guests Count
/* A hook that allows us to use state in a functional component. */
  const [guestCount, setGuestCount] = useState(0);
  const [roomsCount, setRoomsCount] = useState(0);

/**
 * It takes a number and returns a string with the number formatted as a currency
 * @returns the number formatted as a currency.
 */
  function currencyFormat(num) {
    let format = new Intl.NumberFormat("en-US").format(num);
    return format;
  }

  useEffect(() => {
/* Getting the initial search from the local storage and setting the guest count. */
    const initialSearch = JSON.parse(localStorage.getItem("initialSearch"));
    /* setDate(initialSearch.date) */
    console.log(initialSearch.date)
    setGuestCount(initialSearch.contador)
  },[])


  return (
    <Box sx={{}}>
      <Grid container spacing={3} sx={{ mt: 2 }}>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="large"
            label="CheckIn Date"
            id="outlined-basic"
            variant="outlined"
            value={`${format(date[0].startDate, "dd / MMMM / yyyy")}`}
            onClick={handleClick}
            InputProps={{
              readOnly: true,
            }}
          />
          {/* Popper MUI */}
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <DateRange
              editableDateInputs={false}
              onClose={() => setOpenDate(!openDate)}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              rangeColors={["#0f97aa"]}
            />
          </Popover>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="CheckOut Date"
            id="outlined-basic"
            variant="outlined"
            value={`${format(date[0].endDate, "dd / MMMM / yyyy")}`}
            onClick={handleClick}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Guest"
            value={guestCount}
            variant="outlined"
            type="number"
            onChange={(e) => setGuestCount(e.target.value)}
            InputProps={{ inputProps: { min: 0, max: 20 } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Rooms"
            value={roomsCount}
            variant="outlined"
            type="number"
            onChange={(e) => setRoomsCount(e.target.value)}
            InputProps={{ inputProps: { min: 0, max: 20 } }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            Extra Service
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <FormGroup>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #cacaca",
              }}
            >
              <FormControlLabel
                control={<Checkbox disableRipple />}
                label="VIP Gym & Spa"
              />
              <Typography variant="h6" sx={{ fontSize: "16px" }}>
                $70 / Total
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #cacaca",
              }}
            >
              <FormControlLabel
                control={<Checkbox disableRipple />}
                label="Breakfast"
              />
              <Typography variant="h6" sx={{ fontSize: "16px" }}>
                $30 / Day
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #cacaca",
              }}
            >
              <FormControlLabel
                control={<Checkbox disableRipple />}
                label="Dinner"
                sx={{
                  fontSize: "16px",
                  color: "#0f97aa",
                }}
              />
              <Typography variant="h6" sx={{ fontSize: "16px" }}>
                $40 / Day
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #cacaca",
              }}
            >
              <FormControlLabel
                control={<Checkbox disableRipple />}
                label="Driver"
              />
              <Typography variant="h6" sx={{ fontSize: "16px" }}>
                $15 / Day
              </Typography>
            </Box>
          </FormGroup>
        </Grid>
      </Grid>

      <Grid container spacing={5} sx={{ mt: 2 }}>
        <Grid item xs={12} md={8}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{
              height: "60px",
            }}
          >
            Book now
          </Button>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", color: "#808080" }}
            >
              Total:
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "25px", fontWeight: "600" }}
            >
              {`$${currencyFormat(
                (70 + 30 + 40 + 15) * (guestCount + roomsCount)
              )}`}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", color: "#808080" }}
            >
              Available Rooms:
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: "600" }}
            >
              {roomsCount}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingForm;
