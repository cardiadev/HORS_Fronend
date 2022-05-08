import { Box, Typography } from "@mui/material";
import React from "react";

const HeaderBanner = (props) => {
  return (
    <Box>
      <Box
        sx={{
          height: "200px",
          width: "100%",
          position: "relative",
          background: `url(${props.somePic})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        >
          <Typography variant="h3"
                                sx={{
                                    color: "white",
                                    fontSize: "2.5rem",
                                    letterSpacing: "0.1rem",
                                    fontWeight: "500",
                                    textTransform: "uppercase",
                                }}
          >{props.title}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderBanner;
