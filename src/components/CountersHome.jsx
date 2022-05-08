import { Grid, Typography } from '@mui/material'
import React from 'react'

const CountersHome = () => {
  return (
    
    <Grid container spacing={2}>
    <Grid item xs={12} md={4} align="center">
      <Typography variant="h3" sx={{ fontWeight: "500", color: "#0f97aa" }}>
        20+
      </Typography>
      <Typography
        variant="h7"
        sx={{
          fontWeight: "600",
          color: "#666",
          textTransform: "uppercase",
          lineHeight: "2.5",
        }}
      >
        Various Service
      </Typography>
    </Grid>
    <Grid item xs={12} md={4} align="center">
      <Typography variant="h3" sx={{ fontWeight: "500", color: "#0f97aa" }}>
        150+
      </Typography>
      <Typography
        variant="h7"
        sx={{
          fontWeight: "600",
          color: "#666",
          textTransform: "uppercase",
          lineHeight: "2.5",
        }}
      >
        Experiences
      </Typography>
    </Grid>
    <Grid item xs={12} md={4} align="center">
      <Typography variant="h3" sx={{ fontWeight: "500", color: "#0f97aa" }}>
        5+
      </Typography>
      <Typography
        variant="h7"
        sx={{
          fontWeight: "600",
          color: "#666",
          textTransform: "uppercase",
          lineHeight: "2.5",
        }}
      >
        Different Rooms
      </Typography>
    </Grid>
  </Grid>
  )
}

export default CountersHome