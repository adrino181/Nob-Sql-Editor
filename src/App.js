import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { ButtonUnstyled, buttonUnstyledClasses } from "@mui/base";
import Dashboard from "./Dashboard/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Pin } from "@mui/icons-material";
import { green, purple } from "@mui/material/colors";
const initSqlJs = require('sql.js');


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
  if(initSqlJs){
    console.log("initiing sql js");
    (async () => {
      const SQL = await initSqlJs({
        // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
        // You can omit locateFile completely when running in node
        locateFile: file => `https://sql.js.org/dist/${file}`
      });
      // Create a database
      const db = new SQL.Database();
      // NOTE: You can also use new SQL.Database(data) where
      // data is an Uint8Array representing an SQLite database file


      // Execute a single SQL string that contains multiple statements
      let sqlstr = "CREATE TABLE hello (a int, b char); \
      INSERT INTO hello VALUES (0, 'hello'); \
      INSERT INTO hello VALUES (1, 'world');";
      db.run(sqlstr); // Run the query without returning anything

      // Prepare an sql statement
      const stmt = db.prepare("SELECT * FROM hello WHERE a=:aval AND b=:bval");

      // Bind values to the parameters and fetch the results of the query
      const result = stmt.getAsObject({':aval' : 1, ':bval' : 'world'});
      console.log(result); 
    })();
    
  } else {
    console.log("window object doesnt have sql object")
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </>
  );
}
