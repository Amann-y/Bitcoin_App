import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Coindetails from "./components/Coindetails";
import Exchanges from "./components/Exchanges";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coindetails/:id" element={<Coindetails />} />
        <Route path="/exchanges" element={<Exchanges />} />
      </Routes>
    </>
  );
};

export default App;
