import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/MuiTheme.tsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
