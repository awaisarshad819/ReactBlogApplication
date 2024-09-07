import React, { useEffect, useState } from "react";
import { BlogForm, BlogTable } from "../../components";
import authSlice from "../../store/auth/authSlice";
import store from "../../store";
import { useSelector } from "react-redux";
import blog from "../../api/blogService";

function BlogsDashboard() {
  return (
    <>
      <BlogTable />
    </>
  );
}

export default BlogsDashboard;
