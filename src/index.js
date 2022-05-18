import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";
import reducer, { initialState } from "./services/reducer";
import { StateProvider } from "./StateProvider";

const root = createRoot(document.getElementById("root"));

root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);
