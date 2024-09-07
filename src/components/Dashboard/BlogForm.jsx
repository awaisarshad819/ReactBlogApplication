import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import blog from "../../api/blogService";
import fileService from "../../api/fileService";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function BlogForm() {
  const [singleBlog, setSingleBlog] = useState();
  const createSlug = (title) => {
    return title
      .toLowerCase() // Convert to lowercase
      .trim() // Remove leading/trailing whitespace
      .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-"); // Replace multiple hyphens with a single one
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const userData = useSelector((store) => store.auth.userData);
  const navigate = useNavigate();
  const blogSubmit = (data) => {
    const image = data.image[0];
    fileService.fileUpload(image).then((file) => {
      blog
        .addBlog({
          title: data.title,
          description: data.description,
          image: file.$id,
          status: "active",
          userID: userData.userID,
          slug: createSlug(data.title),
        })
        .then((res) => {
          console.log(res);
        });
      navigate("/dashboard/blogs");
    });
  };

  const updateSubmit = (data) => {
    const image = data.image[0];
    fileService.fileUpload(image).then((file) => {
      blog
        .updateBlog(id, {
          title: data.title,
          description: data.description,
          image: file.$id,
          status: "active",
          userID: userData.userID,
        })
        .then((res) => {});
      navigate("/dashboard/blogs");
    });
  };
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      blog.getBlog(id).then((res) => {
        setSingleBlog(res);
        reset(res);
      });
    }
  }, [id]);
  return (
    <>
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Blog</h2>
        <form
          onSubmit={handleSubmit(id ? updateSubmit : blogSubmit)}
          className="space-y-6"
        >
          {/* Blog Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title", { required: "Title is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.title && (
              <p className="text-red-500 mt-2 text-sm">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Blog Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Blog Description
            </label>
            <textarea
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
              rows="5"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.description && (
              <p className="text-red-500 mt-2 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Blog Image */}
          <div>
            <label
              htmlFor="image"
              className="block text-gray-700 font-medium mb-2"
            >
              Blog Image
            </label>
            <input
              type="file"
              id="image"
              {...register("image", { required: "Image is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.image ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.image && (
              <p className="text-red-500 mt-2 text-sm">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default BlogForm;
