import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import ServiceNow from "./servicenow";
import { StoreContext } from "storeon/react";
import { store } from "./store/index";

ServiceNow.init();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
