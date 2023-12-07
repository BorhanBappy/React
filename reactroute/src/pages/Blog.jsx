import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { DataBlogs } from "../DataBlogs";

function Blog() {
  const { title } = useParams(); // Get the "title" parameter from the route
  const blog = DataBlogs.find((blog) => blog.title === title); // Find the corresponding 

  return (
    <div>
      <h1 className="text-2xl text-center">{title}</h1>
      <section className="p-3">
        {blog ? (
          <article>
            <h3 className="text-3xl p-3">{blog.title}</h3>
            <p>{blog.body}</p>
          </article>
        ) : (
          <p>Blog not found</p>
        )}
      </section>
    </div>
  );
}

export default Blog;
