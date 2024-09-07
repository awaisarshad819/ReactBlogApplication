import React, { useEffect, useState } from "react";
import BlogForm from "./BlogForm";
import fileService from "../../api/fileService";
import blog from "../../api/blogService";
import { useNavigate } from "react-router-dom";

function BlogTable() {
  const [isTableView, setTableView] = useState(true);
  const [isFormView, setFormView] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState();
  const navigate = useNavigate();
  const onEdit = (id) => {
    navigate(`/dashboard/blogs/edit/${id}`);
  };
  const onDelete = (id) => {
    blog.deleteBlog({ slug: id }).then((res) => {
      blog.getBlogs().then((data) => {
        navigate("/dashboard/blogs");
      });
    });
  };
  const onAdd = () => {
    navigate("/dashboard/blogs/addNew/");
  };
  useEffect(() => {
    blog.getBlogs().then((data) => {
      //console.log(data.documents);
      setBlogs(data.documents);
      setCount(data.total);
    }, []);
  });
  return (
    <>
      <>
        <div className="flex justify-end py-2">
          <button
            className="bg-blue-800 text-white py-3 px-5 rounded"
            onClick={onAdd}
          >
            Add Blog
          </button>
        </div>
        {count > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="w-1/12 px-4 py-2">#</th>
                  <th className="w-3/12 px-4 py-2">Title</th>
                  <th className="w-4/12 px-4 py-2">Description</th>
                  <th className="w-2/12 px-4 py-2">Image</th>
                  <th className="w-2/12 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{blog.title}</td>
                    <td className="px-4 py-2">{blog.description}</td>
                    <td className="px-4 py-2">
                      <img
                        src={fileService.getFilePreview(blog.image)}
                        alt={blog.title}
                        className="h-12 w-12 rounded"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => onEdit(blog.$id)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(blog.$id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded ml-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          "There is no blog available, Click on Add Blog to add new Blog"
        )}
      </>
    </>
  );
}

export default BlogTable;
