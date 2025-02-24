import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <App />
  // strict mode would render the UI/view TWICE, causing the count to start from 2 in fresh session, even before user prompts for a new one
  <StrictMode>
    <App />
  </StrictMode>
);
