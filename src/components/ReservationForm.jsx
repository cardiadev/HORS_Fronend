import { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Grid,
  Popover,
  Button,
  styled,
} from "@mui/material";

// Date Picker
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import "./styles.css";




const GuestsBox = styled(TextField)(() => ({
  '& input': {
    textAlign: 'center',
  },
  '& fieldset': {
    borderRadius: 0,
  },

}));





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
            borderRadius: { xs: "none", md: "10px" },
            border: { xs: "none", md: "1px solid #e0e0e0" },
            position: { xs: "none", md: "absolute" },
            zIndex: { xs: "none", md: "1" },
            margin: { xs: "none", md: "-50px 0 0 0" },
            left: { xs: "none", md: "19%" },
            width: { xs: "none", md: "60%" },
            padding: { xs: "none", md: "22px" },
            paddingTop: { xs: "50px", },
            paddingBottom: { xs: "0px",},
            
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
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
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label="CheckOut Date"
                id="outlined-basic"
                variant="outlined"
                value={`${format(date[0].endDate, "dd / MMMM / yyyy")}`}
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

            <Grid item xs={12} md={3}>
              <Box display="flex" flexDirection="row" alignItems="stretch">
                <Button
                  size="large"
                  variant="contained"
                  disableElevation
                  sx={{
                    height: "55px",
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                  }}
                  onClick={handleContadorNegative}
                >
                  -
                </Button>
                <GuestsBox
                  fullWidth
                  variant="outlined"
                  placeholder="0"
                  label="Guests"
                  value={contador}
                  InputProps={{
                    readOnly: true,
                  }}
                  onChange={(e) => setContador(e.target.value)}
                />
                <Button
                  size="large"
                  variant="contained"
                  disableElevation
                  sx={{ height: "55px"
                  , borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }}
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
                href="/rooms"
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
