import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import PropertiesContextProvider from "./context/PropertiesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PropertiesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PropertiesContextProvider>
  </StrictMode>
);
