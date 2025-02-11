import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./pages/calculator/calculator";
import Engagebay from "./pages/engagebay/engagebay";
import Mcdonald from "./pages/mcdonald/mcdonald";
import Home from "./pages/home/home";
import Counter from "./pages/counter/counter";
import About from "./pages/about/about";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mcdonald" element={<Mcdonald />} />
        <Route path="/engagebay" element={<Engagebay />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
