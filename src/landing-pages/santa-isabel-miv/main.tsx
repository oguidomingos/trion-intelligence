import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../index.css";
import "./styles.css";
import { MIVPage } from "./MIVPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MIVPage />
  </StrictMode>
);
