import React, { useState } from "react";
import { Box, Grid, Tabs, Tab } from "@mui/material";
import TabPanel from './common/tab-panel/TabPanel'
import BookingForm from "./BookingForm";
import Checkout from "./payment/Checkout";


const BookFormContainer = () => {
  const [value, setValue] = useState(0);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      style={{
        border: "1px solid #cacaca",
        borderRadius: "12px",

      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Tabs
            value={value}
            variant="fullWidth"
            onChange={handleChange}
            aria-label="disabled tabs example"
            style={{

            }}
          >
              <Tab label="Booking"
              value={0}
                style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    padding: "25px 0",
                }}
            />

              <Tab label="Request Booking"
                value={1}
                style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    padding: "25px 0",
                }}
               />
          </Tabs>
          <TabPanel value={value} index={0}>
                <BookingForm/>
                
      </TabPanel>
          <TabPanel value={value} index={1}>
                <Checkout/>
      </TabPanel>
          
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookFormContainer;
