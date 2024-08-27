import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

window.addEventListener("error", (event) => {
  console.log("Uncaught error:", event.error);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
