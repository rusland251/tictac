import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Board from "./Board";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Board />
  </StrictMode>
);
