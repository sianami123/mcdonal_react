import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mcdonald from "./pages/mcdonald/mcdonald";
import Engagebay from "./pages/engagebay/engagebay";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/mcdonald" element={<Mcdonald />} />
        <Route path="/engagebay" element={<Engagebay />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
