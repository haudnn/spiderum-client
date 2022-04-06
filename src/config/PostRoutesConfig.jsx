import React from "react";
import {Route } from "react-router-dom";
import Post from "../pages/Post/Post";
const PostRoutesConfig = () => {
  return (
      <Route path="/post" element={<Post />} />
  );
};

export default PostRoutesConfig;