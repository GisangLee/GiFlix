import React from "react";
import Router from "Components/Router";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "Components/GlobalStyles";
import "./App.css";
import theme from "../theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
