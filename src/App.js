import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Rooms from "./pages/Rooms";
import JuniorSuite from "./pages/JuniorSuite";
import Login from "./pages/Login";
// import Payment from "./pages/Payment";
import DocuPDF from "./components/DocuPDF";


// import "swiper/css/bundle";
// import "./components/styles.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/details" element={<JuniorSuite />} />
          <Route path="payment" element={<DocuPDF />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
