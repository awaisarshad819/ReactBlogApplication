import React, { useEffect, useState } from "react";
import Blog from "../components/Blog";
import blog from "../api/blogService";
import fileService from "../api/fileService";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    blog.getBlogs().then((data) => {
      setBlogs(data.documents);
      setCount(data.total);
      console.log(data);
    });
  }, []);
  return (
    <>
      <div className="Blogs py-8 px-4 flex gap-5 flex-wrap justify-center item-center">
        {count > 0
          ? blogs.map((blog, index) => {
              return (
                <Blog
                  title={blog.title}
                  excerpt={blog.description}
                  imgPreview={fileService.getFilePreview(blog.image)}
                  key={index}
                />
              );
            })
          : "There're no blogs available at the moment"}
      </div>
    </>
  );
}

export default Blogs;
