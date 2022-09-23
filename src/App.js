import { ThemeProvider } from "@mui/material";
import theme from "./theme";

import Home from "./page";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from 'react';

function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <ThemeProvider theme={theme}  >
      <Home accounts={accounts} setAccounts={setAccounts}/>
    </ThemeProvider>
    
  );
}

export default App;
