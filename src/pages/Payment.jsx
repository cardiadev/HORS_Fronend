
import { Box, Grid } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import HeaderBanner from '../components/HeaderBanner'
import Menu from '../components/Menu'
import Checkout from '../components/payment/Checkout'

const Payment = () => {
  return (
    <Box>
        <Menu/>
        <HeaderBanner
        somePic={
          "https://res.cloudinary.com/cardiadev/image/upload/v1651991273/hors/rooms/room_junior_01_n3bbl0.jpg"
        }
        title={"Payments Process"}
      />
      <Grid
        container
        spacing={3}
      >
        <Grid item xs={12} md={12}>
            
            <Checkout/>

            </Grid>

      </Grid>
        <Footer/>
     </Box>
  )
}

export default Payment