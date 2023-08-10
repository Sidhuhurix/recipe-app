import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./assets/Navbar";
import RecipeList from "./pages/RecipeList";
import Recipe from "./pages/Recipe";

// import { create } from "json-server";
import { ThemeProvider, createTheme } from "@mui/material";
import { blueGrey, teal } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
      dark: teal[700],
    },
    secondary: {
      main: blueGrey[500],
      dark: blueGrey[700],
    },
  },
  typography: {
    fontFamily: "Roborto, sans-serif",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={RecipeList} />
          <Route path="/recipe/:id" Component={Recipe} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
