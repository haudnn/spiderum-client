import React from "react";
import { Routes, Route,} from "react-router-dom";
import CateDetails from "../components/CateDetails/CateDetails";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import Post from "../pages/Post/Post";
const RoutesConfig = (props) => {
  return (
    <Routes>
        <Route path="/category/:name" element={<CateDetails />} />
        <Route path="/category" element={<Category />} />
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
    </Routes>
  );
};

export default RoutesConfig;
