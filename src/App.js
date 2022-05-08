import { ThemeProvider  } from '@mui/material';
import { theme } from './theme';

import Homepage from "./pages/Homepage";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
