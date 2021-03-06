import { createTheme } from "@mui/material";
import red from "@mui/material/colors/red";
import yellow from "@mui/material/colors/yellow";
import green from "@mui/material/colors/green";
import lightBlue from "@mui/material/colors/lightBlue";
import grey from "@mui/material/colors/grey";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#0f97aa',
    },
    secondary: {
      light: red[500],
      main: red[700],
      dark: red[900],
      contrastText: grey[50],
    },
    error: {
      light: red[400],
      main: red[500],
      dark: red[300],
      contrastText: grey[800],
    },
    success: {
      main: green[500],
    },
    warning: {
      main: yellow[500],
      contrastText: grey[800],
    },
    info: {
      main: lightBlue[500],
    },
    text: {
      primary: '#666',
      secondary: grey[700],
      disabled: grey[500],
    },
    common: {
      black: grey[900],
      white: grey[200],
    },
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
        "Barlow",
        "sans-serif"
      ].join(","),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    color: '#666666',
    },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});
