import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QuoteModalProvider } from "./context/QuoteModalContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuoteModalProvider>
        <App />
      </QuoteModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
