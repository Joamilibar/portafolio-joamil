import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Projects from "./components/Projects.jsx";
import Tecnologies from "./components/Tecnologies.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Tecnologies />
    <Projects />
  </StrictMode>
);
