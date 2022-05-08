import { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Grid,
  Popover,
  Button,
} from "@mui/material";

// Date Picker
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import "./styles.css";

export const ReservationForm = () => {
  //
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
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;




  // Guests Count
  const [contador, setContador] = useState(0);

  //funcion para limitar contador a 0 y 100
  const handleContadorNegative = () => {
    if (contador === 0) {
      setContador(0);
    } else {
      setContador(contador - 1);
    }
  };
  //funcion para limitar contador a 100
  const handleContadorPositive = () => {
    if (contador === 20) {
      setContador(20);
    } else {
      setContador(contador + 1);
    }
  };



  return (
    <>
      <Container fixed>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            border: "1px solid #CACACA80",
            position: "absolute",
            zIndex: "1",
            margin: "-50px 0 0 0",
            left: "19%",
            width: "60%",
            padding: "25px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={3}>
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
              /* inputProps: {
                    style: { textAlign: "center" },
                  }, */
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
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="CheckOut Date"
                id="outlined-basic"
                variant="outlined"
                value={`${format(date[0].endDate, "dd/MM/yyyy")}`}
                onClick={handleClick}
                InputProps={{
                  readOnly: true,
              /* inputProps: {
                    style: { textAlign: "center" },
                  }, */
                }}
              />
            </Grid>
            {/* <Box item xs={3}>
              <div className="input-group mb-3">
                <span className="btn-field" id="basic-addon1">
                  -
                </span>
                <TextField variant="outlined" placeholder="0" />
                <span className="btn-field" id="basic-addon1">
                  +
                </span>
              </div>
            </Box> */}

            <Grid item xs={3}>
              <Box display="flex" flexDirection="row" alignItems="stretch">
                <Button
                  size="large"
                  variant="contained"
                  disableElevation
                  sx={{ height: "55px" }}
                  onClick={handleContadorNegative}
                >
                  -
                </Button>
                <TextField
                  variant="outlined"
                  placeholder="0"
                  label="Guests"
                  value={contador}
                  InputProps={{
                    readOnly: true,
                    inputProps: {
                      style: { textAlign: "center" },
                    },
                  }}
                  onChange={(e) => setContador(e.target.value)}
                />
                <Button
                  size="large"
                  variant="contained"
                  disableElevation
                  sx={{ height: "55px" }}
                  onClick={handleContadorPositive}
                >
                  +
                </Button>
              </Box>
            </Grid>

            <Grid item xs>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ height: "55px" }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
