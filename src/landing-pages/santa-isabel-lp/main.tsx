import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../index.css";
import "../santa-isabel/styles.css";
import { SantaIsabelLP } from "./SantaIsabelLP";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SantaIsabelLP />
  </StrictMode>
);
