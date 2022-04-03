import React from "react";
import { Routes, Route } from "react-router-dom";
import CateDetails from "../components/CateDetails/CateDetails";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/category/:name" element={<CateDetails />} />
      <Route path="/category" element={<Category />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutesConfig;
