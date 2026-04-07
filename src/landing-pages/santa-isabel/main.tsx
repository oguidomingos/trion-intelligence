import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../index.css";
import "./styles.css";
import { SantaIsabelSite } from "./SantaIsabelSite";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SantaIsabelSite />
  </StrictMode>
);
