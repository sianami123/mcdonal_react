import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home/homePage";
import Engagebay from "./pages/engagebay/engagebay";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Engagebay />
    {/* <HomePage /> */}
  </React.StrictMode>
);
