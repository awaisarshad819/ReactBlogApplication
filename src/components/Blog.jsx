import React from "react";

function Blog({
  title = "I'm Blog",
  key = "abc",
  excerpt = "Default Excerpt",
  imgPreview,
}) {
  return (
    <>
      <div
        className="w-1/5 border border-gray-300 rounded-lg overflow-hidden shadow-md"
        key={key}
      >
        <div className="w-full h-48 bg-gray-200">
          <img
            src={imgPreview}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-sm text-gray-600">{excerpt}</p>
        </div>
      </div>
    </>
  );
}
export default Blog;
