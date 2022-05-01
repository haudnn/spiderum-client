import React from "react";
import { Routes, Route, } from "react-router-dom";
import CategoryItem from "../pages/CategoryItem/CategoryItem";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import CreatePost from "../pages/CreatePost/CreatePost";
import Post from "../pages/Post/Post";
import Register from "../pages/Register/Register";
import ChooseTopics from "../pages/ChooseTopics/ChooseTopics";
import EditPost from "../pages/EditPost/EditPost";
import UserSettings from "../pages/UserSettings/UserSettings";
import User from "../pages/User/User";
const RoutesConfig = () => {
  return (
    <Routes>
        <Route path="/category/:slug" element={<CategoryItem />} />
        <Route path="/category" element={<ChooseTopics />} />
        <Route path="/post/create/" element={<CreatePost/>} />
        <Route path="/post/update/:slug" element={<EditPost/>} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/register" element={<Register/>} ></Route>
        <Route path="/user/:phone" element={<User/>} ></Route>
        <Route path="/user/settings" element={<UserSettings/>} ></Route>
        <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutesConfig;
