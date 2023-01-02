import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { ButtonUnstyled, buttonUnstyledClasses } from "@mui/base";
import Dashboard from "./Dashboard/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Pin } from "@mui/icons-material";
import { green, purple } from "@mui/material/colors";



const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});


export default function App() {
 
  return (
    <>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </>
  );
}
