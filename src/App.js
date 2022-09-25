import { ThemeProvider } from "@mui/material";
import theme from "./theme";

import Home from "./page";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
    
  );
}

export default App;
