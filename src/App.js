import React from "react";
import Dashboard from "./main";
import { ThemeProvider, createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#B388FF",
    },
    secondary: {
      main: "#B388FF",
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
