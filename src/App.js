import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Rooms from "./pages/Rooms";
import JuniorSuite from "./pages/JuniorSuite";

// import "swiper/css/bundle";
// import "./components/styles.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/juniorsuite" element={<JuniorSuite />} />
        </Routes>
      </BrowserRouter>
      ,
    </ThemeProvider>
  );
}

export default App;
