import React from "react";
import { Routes, Route} from "react-router-dom";
import CateDetails from "../components/CateDetails/CateDetails";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Post from "../pages/Post/Post";
import PostDetails from "../pages/PostDetails/PostDetails";
import Register from "../pages/Register/Register";
const RoutesConfig = () => {
  return (
    <Routes>
        <Route path="/category/:name" element={<CateDetails />} />
        <Route path="/category" element={<Category />} />
        <Route path="/" element={<Home />} />
        <Route path="/post/create" element={<Post />} />
        <Route path="/post/:slug" element={<PostDetails />} />
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/register" element={<Register/>} ></Route>
    </Routes>
  );
};

export default RoutesConfig;
